import type { FeatureRequest } from "@/components/features/types";

const mockFeatures: FeatureRequest[] = [
	{
		id: "1",
		title: "MCP Plugin Marketplace",
		description:
			"Browse and install pre-built MCP plugins for Zillow, Realtor, LinkedIn, MLS, Facebook, Reddit, and Twitter. One-click installation, automatic updates, and community-contributed plugins for niche sources.",
		status: "in_progress",
		category: "Integrations",
		categoryId: "integrations",
		icpFocus: "Developers & Agencies",
		completeness: 65,
		benefit: "Expands scraping capabilities without writing custom code.",
		priority: "High",
		toolUrl: "https://docs.leadorchestra.io/features/mcp-plugins",
		owner: "Alex Morgan",
		lastUpdated: "2025-07-12T18:15:00Z",
		created_at: "2025-04-10T12:30:00Z",
		updated_at: "2025-07-12T18:15:00Z",
		upvotes: 85,
		userVote: null,
		iconIndex: 3, // Zap
	},
	{
		id: "2",
		title: "Advanced Proxy & Captcha Handling",
		description:
			"Built-in proxy rotation, captcha bypass, and anti-bot detection for high-volume scraping. Handles JavaScript rendering, retries, and fallback strategies automatically.",
		status: "in_discovery",
		category: "Scraping Engine",
		categoryId: "scraping-engine",
		icpFocus: "Data Teams",
		completeness: 40,
		benefit:
			"Enables reliable scraping of protected sites without manual intervention.",
		priority: "High",
		toolUrl: "https://docs.leadorchestra.io/features/proxy-captcha",
		owner: "Chris Doe",
		lastUpdated: "2025-07-01T09:45:00Z",
		created_at: "2025-05-02T09:15:00Z",
		updated_at: "2025-07-01T09:45:00Z",
		upvotes: 72,
		userVote: null,
		iconIndex: 1, // Rocket
	},
	{
		id: "3",
		title: "Automated Scraping Jobs & Scheduling",
		description:
			"Schedule daily, weekly, or custom interval scraping jobs. Set up automated workflows that scrape multiple sources, normalize data, and export to your pipeline automatically.",
		status: "in_progress",
		category: "Workflow Automation",
		categoryId: "workflow-automation",
		icpFocus: "Agencies & Data Teams",
		completeness: 55,
		benefit:
			"Ensures fresh lead data flows into your pipeline 24/7 without manual work.",
		priority: "High",
		toolUrl: "https://docs.leadorchestra.io/features/scheduled-jobs",
		owner: "Jordan Reeves",
		lastUpdated: "2025-06-20T17:00:00Z",
		created_at: "2025-05-28T16:45:00Z",
		updated_at: "2025-06-20T17:00:00Z",
		upvotes: 68,
		userVote: null,
		iconIndex: 0, // Lightbulb
	},
	{
		id: "4",
		title: "CRM & Database Export Integration",
		description:
			"Export normalized leads directly to CRMs, databases, S3 buckets, or any system via API. Webhook triggers for real-time data sync and custom integration workflows.",
		status: "released",
		category: "Integrations",
		categoryId: "integrations",
		icpFocus: "Developers & Data Engineers",
		completeness: 100,
		benefit:
			"Seamlessly integrates scraped data into existing infrastructure and workflows.",
		priority: "High",
		toolUrl: "https://docs.leadorchestra.io/features/export-integrations",
		owner: "Alex Morgan",
		lastUpdated: "2025-07-15T11:10:00Z",
		created_at: "2025-03-20T14:20:00Z",
		updated_at: "2025-07-15T11:10:00Z",
		upvotes: 92,
		userVote: null,
		iconIndex: 3, // Zap
	},
	{
		id: "5",
		title: "Custom Plugin Builder & SDK",
		description:
			"Build custom MCP plugins for niche sources using our SDK. Full documentation, templates, and CLI tools to create, test, and publish plugins to the marketplace.",
		status: "planning",
		category: "Developer Tooling",
		categoryId: "developer-tooling",
		icpFocus: "Developers",
		completeness: 30,
		benefit:
			"Enables developers to scrape any source and contribute to the ecosystem.",
		priority: "Medium",
		toolUrl: "https://docs.leadorchestra.io/features/plugin-builder",
		owner: "Taylor Brooks",
		lastUpdated: "2025-07-05T10:30:00Z",
		created_at: "2025-06-15T10:00:00Z",
		updated_at: "2025-07-05T10:30:00Z",
		upvotes: 45,
		userVote: null,
		iconIndex: 2, // Star
	},
	{
		id: "6",
		title: "Enhanced Data Normalization & Validation",
		description:
			"Advanced address parsing, phone/email validation, metadata tagging, and entity resolution. Automatic de-duplication and data quality scoring for cleaner lead lists.",
		status: "in_progress",
		category: "Data Normalization",
		categoryId: "data-normalization",
		icpFocus: "Data Teams",
		completeness: 70,
		benefit: "Ensures high-quality, consistent data ready for immediate use.",
		priority: "High",
		toolUrl: "https://docs.leadorchestra.io/features/data-normalization",
		owner: "Nina Patel",
		lastUpdated: "2025-07-10T14:20:00Z",
		created_at: "2025-05-01T09:00:00Z",
		updated_at: "2025-07-10T14:20:00Z",
		upvotes: 58,
		userVote: null,
		iconIndex: 4, // Heart
	},
];

export default mockFeatures;
