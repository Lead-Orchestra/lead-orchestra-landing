import {
	DEFAULT_PERSONA_KEY,
	PERSONA_GOALS,
	PERSONA_LABELS,
	type PersonaKey,
} from "@/data/personas/catalog";
import { getStaticSeo } from "@/utils/seo/staticSeo";

export type FeatureHighlight = {
	title: string;
	description: string;
};

export const AI_OUTREACH_STUDIO_ANCHOR = "lead-orchestra-features";
export const AI_OUTREACH_STUDIO_HEADING = "Lead Orchestra Features";
export const AI_OUTREACH_STUDIO_TAGLINE = "Scrape Anything. Export Everywhere.";
export const AI_OUTREACH_STUDIO_DESCRIPTION =
	"Open-source lead scraping and data ingestion that plugs into anything. Lead Orchestra exports scraped data to CRM, CSV/JSON, Database, S3, or any system. Integrate with MCP protocol, APIs, webhooks, and workflow engines like Kestra, Make, Zapier, and n8n.";

export const AI_OUTREACH_STUDIO_FEATURES: FeatureHighlight[] = [
	{
		title: "Scraping & Crawling Engine",
		description:
			"PlaywrightCrawler-based engine with anti-bot modules, headless browser cluster, proxy rotation, stealth mode, and captcha bypass. Multi-step navigation, DOM selectors, automatic retries, and rate limiting.",
	},
	{
		title: "MCP API Aggregator",
		description:
			"Unified MCP spec for scraping targets. Plugins for Zillow, Realtor, LinkedIn, MLS, Facebook, Reddit, Twitter. All sources normalized to Lead Standard Format (LSF) schemas.",
	},
	{
		title: "Data Normalization Layer",
		description:
			"Address parsing, phone/email extraction, metadata tagging, de-duping, and entity resolution. Export to CRM, CSV, JSON, Database, S3, or any system.",
	},
	{
		title: "Developer Tooling",
		description:
			"CLI, SDKs (JS, Python, Go), webhook system, GitHub Actions templates, API key console, and usage analytics. Built for developers, agencies, and data teams.",
	},
] as const;

export const AI_OUTREACH_STUDIO_KEYWORDS = [
	"Lead Orchestra",
	"open-source scraping",
	"MCP scraping",
	"data ingestion",
	"web scraping",
	"Playwright scraping",
	"scraping API",
	"lead scraping tools",
	"fresh leads",
	"Deal Scale integration",
] as const;

type AiOutreachStudioSeo = {
	name: string;
	headline: string;
	description: string;
	keywords: string[];
	anchor: string;
	features: FeatureHighlight[];
};

const dedupeKeywords = (keywords: Iterable<string>) =>
	Array.from(new Set(Array.from(keywords)));

export const buildAiOutreachStudioSeo = (
	overrides: Partial<AiOutreachStudioSeo> = {},
): AiOutreachStudioSeo => {
	const homeSeo = getStaticSeo("/");
	const baseKeywords = homeSeo.keywords ?? [];
	const mergedKeywords =
		overrides.keywords ??
		dedupeKeywords([...AI_OUTREACH_STUDIO_KEYWORDS, ...baseKeywords]);

	const seo: AiOutreachStudioSeo = {
		name: overrides.name ?? AI_OUTREACH_STUDIO_HEADING,
		headline: overrides.headline ?? AI_OUTREACH_STUDIO_TAGLINE,
		description: overrides.description ?? AI_OUTREACH_STUDIO_DESCRIPTION,
		keywords: dedupeKeywords(mergedKeywords),
		anchor: overrides.anchor ?? AI_OUTREACH_STUDIO_ANCHOR,
		features: overrides.features ?? [...AI_OUTREACH_STUDIO_FEATURES],
	};

	return seo;
};

export const AI_OUTREACH_STUDIO_SEO = buildAiOutreachStudioSeo();

const toLowerFragment = (value: string | undefined): string => {
	if (!value) return "";
	return value.toLowerCase();
};

type PersonaSeoInput = {
	persona?: PersonaKey;
	goal?: string;
};

const resolvePersonaLabel = (persona?: PersonaKey): string => {
	const key = persona ?? DEFAULT_PERSONA_KEY;
	return PERSONA_LABELS[key] ?? PERSONA_LABELS[DEFAULT_PERSONA_KEY] ?? "";
};

const resolvePersonaGoal = (persona?: PersonaKey, goal?: string): string => {
	if (goal?.trim()) {
		return goal.trim();
	}
	const key = persona ?? DEFAULT_PERSONA_KEY;
	return PERSONA_GOALS[key] ?? PERSONA_GOALS[DEFAULT_PERSONA_KEY] ?? "";
};

export const buildPersonaAiOutreachStudioSeo = ({
	persona,
	goal,
}: PersonaSeoInput = {}): AiOutreachStudioSeo => {
	const personaLabel = resolvePersonaLabel(persona);
	const personaGoal = resolvePersonaGoal(persona, goal);
	const personaHeadline = `${AI_OUTREACH_STUDIO_TAGLINE} for ${personaLabel}`;
	const personaDescription = `AI outreach automation for ${toLowerFragment(
		personaLabel,
	)} teams to ${toLowerFragment(personaGoal)}. ${AI_OUTREACH_STUDIO_DESCRIPTION}`;

	return buildAiOutreachStudioSeo({
		headline: personaHeadline,
		description: personaDescription,
		keywords: dedupeKeywords([
			...AI_OUTREACH_STUDIO_KEYWORDS,
			personaLabel,
			personaGoal,
		]),
	});
};
