import { NextResponse } from "next/server";

import {
	buildHybridRss,
	parseBeehiivRss,
	parseGitHubAtom,
	parseYouTubeAtom,
} from "@/lib/rss/hybridFeed";
import type { RssEntry } from "@/lib/rss/rssTypes";
import { fetchText } from "@/lib/rss/rssUtils";

export const runtime = "edge";

const SITE_URL = "https://dealscale.io";
const BEEHIIV_FEED = "https://rss.beehiiv.com/feeds/th0QQipR7J.xml";
const CACHE_CONTROL = "s-maxage=900, stale-while-revalidate=3600";

const YOUTUBE_CHANNEL_ID =
	process.env.YOUTUBE_CHANNEL_ID || "UCphkra97DMNIAIvA1y8hZ-A";
const YOUTUBE_USERNAME = process.env.YOUTUBE_USERNAME || "DealScaleRealEstate";
const YOUTUBE_FEEDS = [
	`https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`,
	`https://www.youtube.com/@${YOUTUBE_USERNAME}/videos.rss`,
	`https://www.youtube.com/feeds/videos.xml?user=${YOUTUBE_USERNAME}`,
];

const GITHUB_FEED =
	process.env.GITHUB_ATOM_FEED_URL ||
	"https://github.com/organizations/Deal-Scale/TechWithTy.private.atom?token=AI72D5O5LGXJVYOGAX5W7WGHFMVCY";

const UPSTREAM_HEADERS = {
	"User-Agent": "DealScaleHybridRSSProxy/1.0 (+https://dealscale.io)",
	Accept: "application/atom+xml, application/rss+xml, application/xml;q=0.9, */*;q=0.8",
} as const;

async function fetchFirstText(urls: string[]): Promise<string | null> {
	for (const url of urls) {
		const result = await fetchText(url, { headers: UPSTREAM_HEADERS });
		if (result.ok) return result.text;
	}
	return null;
}

export async function GET() {
	try {
		const [beehiiv, youtube, github] = await Promise.all([
			fetchText(BEEHIIV_FEED, { headers: UPSTREAM_HEADERS }),
			fetchFirstText(YOUTUBE_FEEDS),
			fetchText(GITHUB_FEED, { headers: UPSTREAM_HEADERS }),
		]);

		const entries: RssEntry[] = [];

		if (beehiiv.ok) {
			entries.push(...parseBeehiivRss(beehiiv.text).slice(0, 10));
		}

		if (youtube) {
			entries.push(...parseYouTubeAtom(youtube).slice(0, 10));
		}

		if (github.ok) {
			entries.push(...parseGitHubAtom(github.text).slice(0, 10));
		}

		const xml =
			entries.length > 0
				? buildHybridRss(entries)
				: `<?xml version="1.0" encoding="UTF-8"?><rss><channel><title>DealScale Hybrid Feed</title><link>${SITE_URL}</link><description>Hybrid feed temporarily unavailable.</description></channel></rss>`;

		return new NextResponse(xml, {
			status: 200,
			headers: {
				"Content-Type": "application/rss+xml; charset=utf-8",
				"Cache-Control": CACHE_CONTROL,
			},
		});
	} catch (error) {
		console.error("Error building hybrid RSS feed:", error);
		return new NextResponse(
			`<?xml version="1.0" encoding="UTF-8"?><rss><channel><title>DealScale Hybrid Feed Error</title><link>${SITE_URL}</link><description>Hybrid feed temporarily unavailable.</description></channel></rss>`,
			{
				status: 502,
				headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
			},
		);
	}
}


