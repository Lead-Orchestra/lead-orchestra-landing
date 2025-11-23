import { z } from "zod";

/**
 * Zod schema describing a metric badge rendered alongside the feature content.
 */
const featureMetricSchema = z.object({
	label: z.string().min(1),
	value: z.string().min(1),
});

/**
 * Zod schema representing a single highlight bullet for a feature.
 */
const featureHighlightSchema = z.object({
	title: z.string().min(1),
	description: z.string().min(1),
	metric: featureMetricSchema.optional(),
	visual: z.string().optional(),
});

/**
 * Zod schema for the Macbook media payload.
 */
const featureMediaSchema = z.object({
	src: z.string().min(1),
	alt: z.string().min(1),
});

/**
 * Schema describing the optional analytics chart block.
 */
const featureChartDatumSchema = z.object({
	period: z.string().min(1),
	current: z.number(),
	previous: z.number().optional(),
	target: z.number().optional(),
});

const featureChartSchema = z.object({
	heading: z.string().min(1),
	description: z.string().min(1),
	data: z.array(featureChartDatumSchema).min(1),
	currentLabel: z.string().min(1),
	previousLabel: z.string().optional(),
	targetLabel: z.string().optional(),
});

/**
 * Schema for a single demo feature entry.
 */
export const realTimeFeatureSchema = z.object({
	id: z.string().min(1),
	label: z.string().min(1),
	eyebrow: z.string().min(1),
	description: z.string().min(1),
	media: featureMediaSchema,
	highlights: z.array(featureHighlightSchema).min(1),
	metrics: z.array(featureMetricSchema).default([]),
	chart: featureChartSchema.optional(),
});

/**
 * Schema for the full feature list.
 */
const realTimeFeatureListSchema = z.array(realTimeFeatureSchema).min(1);

const realTimeFeaturesSeed = [
	{
		id: "scraping-engine",
		label: "Scraping & Crawling Engine",
		eyebrow: "Pillar 1: Core scraping infrastructure",
		description:
			"PlaywrightCrawler-based engine with anti-bot modules, headless browser cluster, proxy rotation, stealth mode, and captcha bypass. Multi-step navigation, DOM selectors, automatic retries, and rate limiting.",
		media: {
			src: "/demo/static/charts/tab-1/baseline-kpis-top.png",
			alt: "Lead Orchestra scraping engine dashboard showing live scraping jobs.",
		},
		chart: {
			heading: "Scraping throughput vs. targets",
			description:
				"Live scraping jobs streamed from the orchestration layer. Performance metrics update every 30 seconds as data lands.",
			currentLabel: "Live scraping",
			previousLabel: "Last hour",
			targetLabel: "Target rate",
			data: [
				{ period: "Mon", current: 320, previous: 285, target: 300 },
				{ period: "Tue", current: 344, previous: 298, target: 310 },
				{ period: "Wed", current: 362, previous: 305, target: 320 },
				{ period: "Thu", current: 378, previous: 312, target: 335 },
				{ period: "Fri", current: 401, previous: 318, target: 348 },
			],
		},
		highlights: [
			{
				title: "Multi-step navigation",
				description:
					"Handle complex scraping workflows with automatic retries, DOM selectors, and depth-based crawling across any website structure.",
				metric: {
					label: "Success rate",
					value: "98.5%",
				},
				visual: "/demo/static/charts/tab-1/baseline-kpis-mid.png",
			},
			{
				title: "Anti-bot & stealth",
				description:
					"Built-in proxy rotation, captcha solving, and stealth mode to bypass detection and maintain high success rates.",
				metric: {
					label: "Block rate",
					value: "<2%",
				},
				visual: "/demo/static/charts/tab-1/baseline-kpis-bottom.png",
			},
		],
		metrics: [
			{
				label: "Active scrapers",
				value: "12 sources",
			},
			{
				label: "Leads scraped",
				value: "5.2K / hour",
			},
			{
				label: "Uptime",
				value: "99.9%",
			},
		],
	},
	{
		id: "mcp-aggregator",
		label: "MCP API Aggregator",
		eyebrow: "Pillar 2: Unified scraping interface",
		description:
			"Unified MCP spec for scraping targets. Plugins for Zillow, Realtor, LinkedIn, MLS, Facebook, Reddit, Twitter. All sources normalized to Lead Standard Format (LSF) schemas.",
		media: {
			src: "/demo/static/charts/tab-2/ai-agent-overview-top.png",
			alt: "MCP plugin ecosystem showing available scrapers and connectors.",
		},
		highlights: [
			{
				title: "Plugin ecosystem",
				description:
					"Community-powered plugins for any source. Zillow, Realtor, LinkedIn, job boards, directories—all accessible through one unified interface.",
				metric: {
					label: "Available plugins",
					value: "20+ sources",
				},
				visual: "/demo/static/charts/tab-2/ai-agent-overview-mid.png",
			},
			{
				title: "Standardized schemas",
				description:
					"All scraped data normalized to Lead Standard Format (LSF), so every source outputs consistent, structured lead objects.",
				metric: {
					label: "Schema compliance",
					value: "100%",
				},
				visual: "/demo/static/charts/tab-2/ai-agent-overview-bottom.png",
			},
		],
		metrics: [
			{
				label: "MCP providers",
				value: "8 active",
			},
			{
				label: "Community plugins",
				value: "15+",
			},
		],
	},
	{
		id: "normalization",
		label: "Data Normalization Layer",
		eyebrow: "Pillar 3: Clean, structured data",
		description:
			"Address parsing, phone/email extraction, metadata tagging, de-duping, and entity resolution. Export to CRM, CSV, JSON, Database, S3, or any system.",
		media: {
			src: "/demo/static/charts/tab-3/premium-engagement-top.png",
			alt: "Data normalization dashboard showing cleaned and structured leads.",
		},
		highlights: [
			{
				title: "Smart extraction",
				description:
					"Automatic address parsing, phone/email extraction, and metadata tagging from raw HTML. Entity resolution and de-duping ensure clean datasets.",
				metric: {
					label: "Extraction accuracy",
					value: "96.8%",
				},
				visual: "/demo/static/charts/tab-3/premium-engagement-bottom.png",
			},
			{
				title: "Multi-format export",
				description:
					"Export normalized leads to CRM, CSV, JSON, Database, S3, or any system. Webhook triggers for real-time integration with your stack.",
				metric: {
					label: "Export formats",
					value: "5+ formats",
				},
				visual: "/demo/static/charts/tab-3/premium-engagement-bottom-2.png",
			},
		],
		metrics: [
			{
				label: "Leads normalized",
				value: "12.5K / day",
			},
			{
				label: "Dedupe rate",
				value: "8.2%",
			},
		],
	},
	{
		id: "developer-tooling",
		label: "Developer Tooling",
		eyebrow: "Pillar 4: Built for developers",
		description:
			"CLI, SDKs (JS, Python, Go), webhook system, GitHub Actions templates, API key console, and usage analytics. Built for developers, agencies, and data teams.",
		media: {
			src: "/demo/static/charts/tab-3/premium-engagement-mid.png",
			alt: "Developer tools and SDK documentation interface.",
		},
		highlights: [
			{
				title: "CLI & SDKs",
				description:
					"Command-line interface and SDKs for JavaScript, Python, and Go. Integrate scraping into your existing workflows with minimal setup.",
				metric: {
					label: "SDK languages",
					value: "3 languages",
				},
				visual: "/demo/static/charts/tab-3/premium-engagement-bottom-3.png",
			},
			{
				title: "Webhooks & automation",
				description:
					"GitHub Actions templates, webhook system, and API console for seamless integration with your development and automation workflows.",
				metric: {
					label: "Integration time",
					value: "<5 min",
				},
				visual: "/demo/static/charts/tab-3/premium-engagement-mid.png",
			},
		],
		metrics: [
			{
				label: "API calls",
				value: "2.4K / day",
			},
			{
				label: "Active integrations",
				value: "48 teams",
			},
		],
	},
] as const satisfies Array<z.input<typeof realTimeFeatureSchema>>;

export const REAL_TIME_FEATURES =
	realTimeFeatureListSchema.parse(realTimeFeaturesSeed);

export type RealTimeFeature = (typeof REAL_TIME_FEATURES)[number];
