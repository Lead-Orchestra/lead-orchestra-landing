import type { FAQItem } from "@/types/faq";

export const faqItems: FAQItem[] = [
	{
		question: "What makes Lead Orchestra different from other scraping tools?",
		answer:
			"Lead Orchestra is an open-source lead scraping and data ingestion platform built specifically for real estate professionals. Unlike generic scrapers, it includes pre-built plugins for Zillow, Realtor, LinkedIn, MLS, Facebook, Reddit, and Twitter. All scraped data is automatically normalized to Lead Standard Format (LSF) schemas, making it ready to export to CRM, CSV, JSON, Database, S3, or any system. Plus, it's built with Playwright for reliable anti-bot bypass and includes developer tooling like CLI, SDKs, and webhooks.",
	},
	{
		question: "Who is Lead Orchestra built for?",
		answer:
			"Lead Orchestra is designed for developers, agencies, and data teams who need to scrape leads from multiple sources and normalize the data for their workflows. Real estate agents, investors, and wholesalers use it to gather fresh leads from Zillow, Realtor, MLS, and social platforms. Agencies use it to build custom scraping pipelines for clients. Data teams use it for automated data ingestion and normalization.",
	},
	{
		question: "What sources can Lead Orchestra scrape?",
		answer:
			"Lead Orchestra includes pre-built MCP plugins for Zillow, Realtor, LinkedIn, MLS, Facebook, Reddit, and Twitter. The unified MCP spec makes it easy to add new sources. You can also use the Playwright-based crawling engine to scrape any website with custom selectors and navigation flows.",
	},
	{
		question: "How does the scraping engine work?",
		answer:
			"Lead Orchestra uses a PlaywrightCrawler-based engine with anti-bot modules, headless browser clusters, proxy rotation, stealth mode, and captcha bypass. It supports multi-step navigation, DOM selectors, automatic retries, and rate limiting to ensure reliable scraping without getting blocked.",
	},
	{
		question: "What data formats can I export to?",
		answer:
			"You can export scraped and normalized data to CRM, CSV, JSON, Database, S3, or any system via API. The data normalization layer automatically parses addresses, extracts phone numbers and emails, tags metadata, de-duplicates records, and resolves entities before export.",
	},
	{
		question: "Can I use Lead Orchestra with my existing tools?",
		answer:
			"Yes. Lead Orchestra is designed to plug into anything. Export to CRM for immediate use, CSV/JSON for spreadsheets, Database for storage, S3 for cloud storage, or use the API to integrate with custom systems. The webhook system can trigger actions in other tools when new leads are scraped.",
	},
	{
		question: "How fast can I start scraping?",
		answer:
			"You can start scraping in under 5 minutes. Just paste a URL, configure your scraping parameters (or use defaults), and let Lead Orchestra handle the rest. The CLI and SDKs make it easy to automate scraping jobs, and GitHub Actions templates help you set up continuous scraping workflows.",
	},
	{
		question: "Is Lead Orchestra open-source?",
		answer:
			"Yes. Lead Orchestra is open-source, giving you full control over your scraping infrastructure. You can self-host, customize the code, and contribute improvements. Enterprise plans include additional features, support, and optional managed hosting.",
	},
	{
		question: "What kind of data quality can I expect?",
		answer:
			"Lead Orchestra's data normalization layer ensures high-quality output. It automatically parses addresses into standardized formats, extracts and validates phone numbers and emails, tags metadata, removes duplicates, and resolves entity relationships. All data is normalized to Lead Standard Format (LSF) schemas for consistency.",
	},
	{
		question: "Does Lead Orchestra handle rate limiting and anti-bot measures?",
		answer:
			"Yes. The Playwright-based engine includes built-in anti-bot modules, proxy rotation, stealth mode, and captcha bypass. Automatic retries and rate limiting help prevent blocks. The headless browser cluster distributes load to avoid detection patterns.",
	},
	{
		question: "Can I scrape data on a schedule?",
		answer:
			"Yes. Use the CLI, SDKs, or GitHub Actions templates to set up scheduled scraping jobs. The webhook system can notify you when scraping completes, and you can export data automatically to your preferred destination.",
	},
	{
		question: "What developer tools are included?",
		answer:
			"Lead Orchestra includes a CLI for command-line scraping, SDKs for JavaScript, Python, and Go, a webhook system for integrations, GitHub Actions templates for CI/CD workflows, an API key console for access management, and usage analytics to track your scraping activity.",
	},
	{
		question: "How does data normalization work?",
		answer:
			"The data normalization layer automatically processes scraped data: parsing addresses into standardized formats, extracting and validating phone numbers and email addresses, tagging metadata for categorization, de-duplicating records across sources, and resolving entity relationships. All output follows Lead Standard Format (LSF) schemas.",
	},
	{
		question: "Can I white label or self host Lead Orchestra?",
		answer:
			"Yes. Since Lead Orchestra is open-source, you can self-host it on your own infrastructure. Enterprise and partner users can also white label it with custom branding, dedicated infrastructure, and optional revenue-sharing models.",
	},
	{
		question: "Is there a free trial or open-source version?",
		answer:
			"Yes. Lead Orchestra is open-source, so you can use it for free. Enterprise plans include additional features, support, managed hosting, and priority updates. New users can also request a trial of enterprise features.",
	},
];
