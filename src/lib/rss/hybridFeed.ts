import { XMLParser } from "fast-xml-parser";

import type { RssEntry } from "./rssTypes";
import { ensureArray, sanitizeXml, stripHtml, toUtcDateString } from "./rssUtils";

const parser = new XMLParser({
	ignoreAttributes: false,
	attributeNamePrefix: "@_",
	trimValues: true,
	processEntities: true,
});

const SITE_URL = "https://dealscale.io";

type BeehiivParsed = {
	rss?: { channel?: { item?: unknown | unknown[] } };
};

export function parseBeehiivRss(feedXml: string): RssEntry[] {
	const parsed = parser.parse(feedXml) as BeehiivParsed;
	const items = ensureArray(parsed.rss?.channel?.item);

	return items
		.map((item) => {
			const node = item as Record<string, unknown>;
			const title = (node.title ?? "").toString().trim() || "DealScale Blog Update";
			const link = (node.link ?? "").toString().trim() || `${SITE_URL}/blog`;
			const description =
				(node.description ?? node["content:encoded"] ?? "Latest update from DealScale.")
					.toString()
					.trim();
			const guid = (node.guid ?? link ?? title).toString();
			const pubDate = toUtcDateString(node.pubDate?.toString());
			const categories = ensureArray(node.category)
				.map((c) => c?.toString?.().trim?.() ?? "")
				.filter((c): c is string => Boolean(c));

			return {
				title,
				link,
				description,
				pubDate,
				guid,
				source: "blog" as const,
				categories,
			};
		})
		.filter((entry) => Boolean(entry.link));
}

type AtomParsed = {
	feed?: { entry?: unknown | unknown[] };
};

function pickAtomText(value: unknown): string {
	if (!value) return "";
	if (typeof value === "string") return value;
	if (typeof value === "object" && value !== null && "#text" in (value as any)) {
		return String((value as any)["#text"] ?? "");
	}
	return String(value);
}

export function parseYouTubeAtom(feedXml: string): RssEntry[] {
	const parsed = parser.parse(feedXml) as AtomParsed;
	const entries = ensureArray(parsed.feed?.entry);

	return entries
		.map((entry) => {
			const node = entry as any;
			const title = pickAtomText(node.title).trim() || "DealScale Video Update";
			const href = (node.link?.["@_href"] ?? node.link)?.toString?.() ?? "";
			const link = href || "https://www.youtube.com/@DealScaleRealEstate";
			const published = (node.published ?? node.updated)?.toString?.();
			const pubDate = toUtcDateString(published);
			const guid = `youtube-${(node["yt:videoId"]?.["#text"] ?? node["yt:videoId"] ?? node.id ?? link).toString()}`;
			const description =
				pickAtomText(node.summary).trim() ||
				pickAtomText(node["media:group"]?.["media:description"]).trim() ||
				"Watch the latest automation insights from DealScale.";

			return {
				title,
				link,
				description,
				pubDate,
				guid,
				source: "youtube" as const,
				categories: ["youtube"],
			};
		})
		.filter((e) => Boolean(e.link));
}

export function parseGitHubAtom(feedXml: string): RssEntry[] {
	const parsed = parser.parse(feedXml) as AtomParsed;
	const entries = ensureArray(parsed.feed?.entry);

	return entries
		.map((entry) => {
			const node = entry as any;
			const rawTitle = pickAtomText(node.title).trim() || "GitHub Activity";
			const href = (node.link?.["@_href"] ?? node.link)?.toString?.() ?? "";
			const link = href || "https://github.com/Deal-Scale";
			const published = (node.published ?? node.updated)?.toString?.();
			const pubDate = toUtcDateString(published);
			const id = pickAtomText(node.id).trim() || link;
			const content = pickAtomText(node.content).trim();
			const description =
				stripHtml(content).slice(0, 500) ||
				"Latest activity from Deal-Scale organization on GitHub.";
			const author = node.author?.name?.toString?.() ?? "TechWithTy";
			const guid = `github-${id}`;

			return {
				title: `${rawTitle} by ${author}`,
				link,
				description,
				pubDate,
				guid,
				source: "github" as const,
				categories: ["github"],
			};
		})
		.filter((e) => Boolean(e.link));
}

export function buildHybridRss(entries: RssEntry[]): string {
	const sorted = [...entries].sort((a, b) => {
		const ad = new Date(a.pubDate).getTime();
		const bd = new Date(b.pubDate).getTime();
		return Number.isNaN(bd) || Number.isNaN(ad) ? 0 : bd - ad;
	});

	const itemsXml = sorted
		.map((entry) => {
			const categories = entry.categories
				?.map((c) => `<category>${sanitizeXml(c)}</category>`)
				.join("");
			const sourceUrl =
				entry.source === "youtube"
					? "https://www.youtube.com/@DealScaleRealEstate"
					: entry.source === "github"
						? "https://github.com/Deal-Scale"
						: `${SITE_URL}/blog`;
			const sourceName =
				entry.source === "youtube"
					? "DealScale YouTube"
					: entry.source === "github"
						? "Deal-Scale GitHub"
						: "DealScale Blog";

			return `<item>
\t<title>${sanitizeXml(entry.title)}</title>
\t<link>${sanitizeXml(entry.link)}</link>
\t<guid isPermaLink="${entry.source === "blog"}">${sanitizeXml(entry.guid)}</guid>
\t<pubDate>${entry.pubDate}</pubDate>
\t<description><![CDATA[${entry.description}]]></description>
\t${categories ?? ""}
\t<source url="${sanitizeXml(sourceUrl)}">${sanitizeXml(sourceName)}</source>
</item>`;
		})
		.join("\n\n");

	const lastBuildDate = sorted[0]?.pubDate ?? new Date().toUTCString();

	return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
\t<title>DealScale Hybrid Feed</title>
\t<link>${SITE_URL}</link>
\t<description>Unified feed combining DealScale blog posts, YouTube videos, and GitHub activity.</description>
\t<language>en-us</language>
\t<lastBuildDate>${lastBuildDate}</lastBuildDate>
${itemsXml}
</channel>
</rss>`;
}


