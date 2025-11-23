import {
	DEFAULT_HERO_SOCIAL_PROOF,
	type HeroVideoConfig,
	resolveHeroCopy,
} from "@external/dynamic-hero";

const HERO_COPY_V7 = {
	id: "hero-seo-v7",
	category: "landing_hero_dynamic_copy",
	version: 7,
	structure: "problem_solution_fear_hope_persona",
	personas: {
		developer: {
			problem: [
				"buying stale lead lists from Apollo and ZoomInfo",
				"rebuilding scrapers and glue code for every project",
				"managing complex proxy rotations and anti-bot systems",
			],
			solution: [
				"scraping your own fresh leads from any website",
				"open-source lead OS that standardizes everything",
				"one-click scraping with MCP plugins",
			],
			fear: [
				"your scraping pipeline breaks when sites change",
				"you waste weeks building what should be a plugin",
			],
			hope: [
				"you scrape any source in minutes with MCP plugins",
				"your data flows seamlessly into any system",
				"you focus on building features, not infrastructure",
			],
		},
		agency: {
			problem: [
				"using the same Apollo lists as every other agency",
				"paying premium prices for limited scraping APIs",
				"struggling to find unique leads competitors can't access",
			],
			solution: [
				"scraping niche sources your competitors ignore",
				"free, open-source scraping with unlimited data",
				"unique lead datasets clients can't get anywhere else",
			],
			fear: [
				"your scraping costs eat into profit margins",
				"competitors find leads you can't access",
			],
			hope: [
				"you scrape unlimited leads at zero marginal cost",
				"you access niche sources your competitors can't",
				"you scale your agency without scaling costs",
			],
		},
		startup: {
			problem: [
				"spending engineering time on data ingestion instead of core features",
				"paying for enterprise tools you don't need yet",
				"needing scraping without compliance-heavy infrastructure",
			],
			solution: [
				"open-source scraping that plugs into anything",
				"free tier with no credit card required",
				"focus on product-market fit, not scraping infrastructure",
			],
			fear: [
				"your MVP gets delayed by infrastructure work",
				"you burn runway on tools instead of product",
			],
			hope: [
				"you launch faster with ready-made scraping",
				"you scale data ingestion without scaling costs",
				"you focus on product-market fit, not plumbing",
			],
		},
		enterprise: {
			problem: [
				"needing custom scrapers with enterprise compliance",
				"managing distributed scraping infrastructure",
				"integrating scraping into existing data pipelines",
			],
			solution: [
				"self-hosted enterprise licensing with full control",
				"SOC2/ISO compliance modules",
				"seamless integration with existing systems",
			],
			fear: [
				"compliance issues from third-party scrapers",
				"vendor lock-in with proprietary solutions",
			],
			hope: [
				"you maintain full control and compliance",
				"you integrate scraping into your existing stack",
				"you scale without vendor dependencies",
			],
		},
	},
	template: "Stop {problem}, start {solution} — before {fear}. Imagine {hope}.",
	ctas: {
		primary: [
			"Get Started Free (Open Source)",
			"View on GitHub",
			"Start Scraping in 5 Minutes",
			"Try the CLI",
			"Explore MCP Plugins",
		],
		secondary: [
			"See How It Works",
			"Read the Documentation",
			"View Example Scrapers",
			"Join the Community",
			"Watch a Demo",
		],
		social: [
			"Star on GitHub",
			"Share with Your Team",
			"Contribute a Plugin",
			"Join Discord",
			"Follow on Twitter",
		],
	},
	demo_mode: {
		enabled: true,
		headline_variant:
			"Open-Source Lead Scraping & Data Ingestion — See Lead Orchestra in Action",
		cta: "Start Interactive Demo",
	},
	metadata: {
		tone: "developer_friendly_empowering",
		vertical: [
			"developer_tools",
			"data_ingestion",
			"web_scraping",
			"lead_generation",
			"mcp_protocol",
		],
		emotion_trigger: ["freedom", "empowerment", "efficiency", "community"],
		updated_by: "Ty",
	},
} as const;

export type HeroPersonaKey = keyof typeof HERO_COPY_V7.personas;

export const DEFAULT_PERSONA: HeroPersonaKey = "developer";
export const DEFAULT_PERSONA_DISPLAY = "Open-Source Scraping Engine";

const PERSONA_LABEL = "For Developers, Agencies & Data Teams";
const PERSONA_GOAL = "Scrape, normalize, and export lead data";
const PERSONA_SOCIAL_PROOF =
	"Fresh leads, not rented lists. Open-source scraping with unlimited data, zero credit limits.";

const pickPersonaField = (field: "problem" | "solution" | "fear" | "hope") => {
	const persona = HERO_COPY_V7.personas[DEFAULT_PERSONA];
	const entries = persona[field];
	return entries[0] ?? "";
};

const TEMPLATE_PROBLEM = pickPersonaField("problem");
const TEMPLATE_SOLUTION = pickPersonaField("solution");
const TEMPLATE_FEAR = pickPersonaField("fear");
const TEMPLATE_HOPE = pickPersonaField("hope");

export const LIVE_VIDEO: HeroVideoConfig = {
	src: "https://app.supademo.com/embed/cmhjlwt7i0jk4u1hm0scmf39w?embed_v=2&utm_source=embed",
	poster: "/supademos/svgs/supademo-thumbnail.png",
	provider: "supademo",
};

export const LIVE_COPY = resolveHeroCopy(
	{
		values: {
			problem: TEMPLATE_PROBLEM,
			solution: TEMPLATE_SOLUTION,
			fear: TEMPLATE_FEAR,
			socialProof: PERSONA_SOCIAL_PROOF,
			benefit: PERSONA_GOAL,
			time: "5",
			hope: TEMPLATE_HOPE,
		},
		rotations: {
			problems: [...HERO_COPY_V7.personas[DEFAULT_PERSONA].problem],
			solutions: [...HERO_COPY_V7.personas[DEFAULT_PERSONA].solution],
			fears: [...HERO_COPY_V7.personas[DEFAULT_PERSONA].fear],
		},
	},
	{
		fallbackPrimaryChip: {
			label: DEFAULT_PERSONA_DISPLAY,
			sublabel: "AI pipeline automation",
			variant: "secondary",
		},
		fallbackSecondaryChip: {
			label: PERSONA_GOAL,
			variant: "outline",
		},
	},
);

export const LIVE_PRIMARY_CTA = {
	label: "Scrape Your First Site",
	description:
		"Paste a URL → scrape all the leads → clean them → export instantly. Fresh leads, not rented lists.",
	emphasis: "solid" as const,
	badge: "100% Free",
};

export const LIVE_SECONDARY_CTA = {
	label: HERO_COPY_V7.ctas.secondary[0],
	description: "See how open-source scraping works. One command = fresh leads.",
	emphasis: "outline" as const,
	badge: "View on GitHub",
};

export const LIVE_MICROCOPY =
	'Scrape Anything. Export Everywhere. <link href="#live-hero-details">See how it works</link>. Fresh leads, not rented lists.';

export const LIVE_SOCIAL_PROOF = {
	...DEFAULT_HERO_SOCIAL_PROOF,
	// caption: "Reusable hero experiences adopted by Lead Orchestra builders.",
};

export { PERSONA_GOAL, PERSONA_LABEL, HERO_COPY_V7, PERSONA_SOCIAL_PROOF };
