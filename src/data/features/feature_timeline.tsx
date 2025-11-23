import type { FeatureTimelineMilestone } from "@/components/features/FeatureTimelineTable";

/**
 * Feature delivery roadmap used on /features.
 * Keeps copy anchored to the actual modules surfaced across the application.
 */
export const featureTimeline: FeatureTimelineMilestone[] = [
	{
		quarter: "Q4 2024",
		status: "Live",
		initiative: "Core Scraping Engine",
		focus: "Data extraction",
		summary:
			"Our PlaywrightCrawler-based scraping engine with anti-bot modules, headless browser cluster, proxy rotation, and stealth mode powers Lead Orchestra's core data extraction capabilities.",
		highlights: [
			"Multi-step navigation with DOM selectors and automatic retries.",
			"Rate limiting and captcha bypass for reliable high-volume scraping.",
			"Support for JavaScript rendering and dynamic content extraction.",
		],
	},
	{
		quarter: "Q1 2025",
		status: "Live",
		initiative: "MCP API Aggregator",
		focus: "Unified scraping interface",
		summary:
			"The MCP API Aggregator provides a unified interface for scraping multiple sources. Pre-built plugins for Zillow, Realtor, LinkedIn, MLS, Facebook, Reddit, and Twitter normalize all data to Lead Standard Format (LSF) schemas.",
		highlights: [
			"Pre-built plugins for major real estate and social platforms.",
			"All sources normalized to consistent Lead Standard Format (LSF) schemas.",
			"Easy plugin architecture for adding custom scraping sources.",
		],
	},
	{
		quarter: "Q1 2025",
		status: "Limited Beta",
		initiative: "Data Normalization Layer",
		focus: "Data quality",
		summary:
			"Advanced data normalization with address parsing, phone/email extraction, metadata tagging, de-duplication, and entity resolution. Export to CRM, CSV, JSON, Database, S3, or any system.",
		highlights: [
			"Automatic address parsing and phone/email validation.",
			"De-duplication and entity resolution for clean lead lists.",
			"Flexible export options: CRM, CSV, JSON, Database, S3, or API integration.",
		],
	},
	{
		quarter: "Q2 2025",
		status: "Live",
		initiative: "Developer Tooling & SDKs",
		focus: "Developer experience",
		summary:
			"CLI, SDKs (JavaScript, Python, Go), webhook system, GitHub Actions templates, API key console, and usage analytics. Built for developers, agencies, and data teams.",
		highlights: [
			"CLI for command-line scraping and automation.",
			"SDKs for JavaScript, Python, and Go with full API access.",
			"GitHub Actions templates for CI/CD integration and scheduled scraping jobs.",
		],
	},
	{
		quarter: "Q3 2025",
		status: "In Build",
		initiative: "MCP Plugin Marketplace",
		focus: "Ecosystem expansion",
		summary:
			"Community-driven plugin marketplace where developers can share and install custom MCP plugins. Browse, install, and contribute plugins for niche sources and specialized scraping needs.",
		highlights: [
			"One-click plugin installation and automatic updates.",
			"Community-contributed plugins for niche sources.",
			"Plugin builder SDK and documentation for creating custom scrapers.",
		],
	},
];
