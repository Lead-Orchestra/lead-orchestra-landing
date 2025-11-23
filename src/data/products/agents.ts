import type { ProductType } from "@/types/products";
import { LicenseType, ProductCategory } from "@/types/products";

const BASE_AGENT_IMAGE = "/products/workflows.png";

export const agentProducts: ProductType[] = [
	{
		id: "realtor-mcp-plugin",
		name: "Realtor.com MCP Plugin",
		description:
			"Pre-built MCP plugin for scraping Realtor.com listings. Includes property data extraction, owner information, and automatic normalization to Lead Standard Format (LSF). Ready to deploy in your Lead Orchestra instance.",
		price: 149,
		sku: "LO-MCP-REALTOR",
		slug: "realtor-mcp-plugin",
		licenseName: LicenseType.Proprietary,
		categories: [
			ProductCategory.Agents,
			ProductCategory.Automation,
			ProductCategory.Workflows,
		],
		images: [BASE_AGENT_IMAGE],
		types: [
			{ name: "Single License", value: "single", price: 149 },
			{ name: "Team License", value: "team", price: 399 },
		],
		reviews: [],
		colors: [],
		sizes: [],
		faqs: [
			{
				question: "What data can I scrape from Realtor.com?",
				answer:
					"This plugin extracts property listings, owner information, property details, pricing, and location data. All data is automatically normalized to LSF for easy export.",
			},
			{
				question: "Can I customize the data fields?",
				answer:
					"Yes. The plugin is fully configurable, allowing you to select which fields to extract and how to normalize the data.",
			},
		],
	},
	{
		id: "mls-scraper-plugin",
		name: "MLS Scraper MCP Plugin",
		description:
			"Professional MLS scraping plugin with advanced filtering, property search, and data export capabilities. Perfect for real estate investors and agents who need comprehensive property data.",
		price: 299,
		sku: "LO-MCP-MLS",
		slug: "mls-scraper-plugin",
		licenseName: LicenseType.Proprietary,
		categories: [
			ProductCategory.Agents,
			ProductCategory.Automation,
			ProductCategory.Workflows,
		],
		images: [BASE_AGENT_IMAGE],
		types: [
			{ name: "Standard", value: "standard", price: 299 },
			{ name: "Professional", value: "professional", price: 599 },
		],
		reviews: [],
		colors: [],
		sizes: [],
		faqs: [
			{
				question: "Which MLS systems are supported?",
				answer:
					"The plugin supports major MLS systems and can be customized for regional MLS access. Contact us for specific MLS compatibility.",
			},
			{
				question: "Does it integrate with my CRM?",
				answer:
					"Yes. The plugin exports data in LSF format, which can be automatically synced to your CRM, Database, or S3 bucket.",
			},
		],
	},
	{
		id: "job-board-scraper-plugin",
		name: "Job Board Scraper Plugin",
		description:
			"Scrape job boards to find companies actively hiring. Extract company names, job postings, and hiring signals. Perfect for B2B lead generation and SDR teams.",
		price: 199,
		sku: "LO-MCP-JOBS",
		slug: "job-board-scraper-plugin",
		licenseName: LicenseType.Proprietary,
		categories: [
			ProductCategory.Agents,
			ProductCategory.Automation,
			ProductCategory.Leads,
		],
		images: [BASE_AGENT_IMAGE],
		types: [
			{ name: "Single Board", value: "single", price: 199 },
			{ name: "Multi-Board", value: "multi", price: 449 },
		],
		reviews: [],
		colors: [],
		sizes: [],
		faqs: [
			{
				question: "Which job boards are supported?",
				answer:
					"The plugin includes pre-configured scrapers for major job boards including LinkedIn Jobs, Indeed, Glassdoor, and more. Custom boards can be added.",
			},
			{
				question: "What hiring signals can I extract?",
				answer:
					"You can extract company names, job titles, posting dates, locations, and hiring patterns to identify companies actively growing their teams.",
			},
		],
	},
];
