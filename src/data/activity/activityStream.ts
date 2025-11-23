export type ActivityEvent = {
	id: string;
	label: string;
	actor: string;
	action: string;
	timeAgo: string;
	impact: string;
	tags?: string[];
};

/**
 * Curated activity feed for the FeatureSectionActivity component.
 *
 * The copy mirrors the Lead Orchestra scraping storyline used across the
 * live hero and service flows so the visuals remain consistent.
 */
export const activityStream: ActivityEvent[] = [
	{
		id: "scrape-job",
		label: "Scraping Job",
		actor: "Lead Orchestra MCP Engine",
		action:
			"Scraped 248 leads from Zillow using MCP plugin, normalized and cleaned, exported to S3.",
		timeAgo: "2m ago",
		impact: "+248 leads",
		tags: ["scraping", "mcp"],
	},
	{
		id: "data-export",
		label: "Data Export",
		actor: "Export Engine",
		action:
			"Exported normalized lead data to Deal Scale for AI enrichment and scoring.",
		timeAgo: "5m ago",
		impact: "Export complete",
		tags: ["export", "csv"],
	},
	{
		id: "plugin-install",
		label: "Plugin Installed",
		actor: "Plugin Marketplace",
		action: "Installed Realtor.com MCP plugin from community marketplace.",
		timeAgo: "11m ago",
		impact: "New source added",
		tags: ["plugin", "mcp"],
	},
	{
		id: "normalization",
		label: "Data Normalization",
		actor: "Normalization Engine",
		action:
			"Normalized 1,200 scraped records, deduplicated, and tagged with metadata.",
		timeAgo: "18m ago",
		impact: "1,200 normalized",
		tags: ["normalization"],
	},
	{
		id: "api-export",
		label: "API Export",
		actor: "API Bridge",
		action: "Exported 500 leads via webhook to customer's data warehouse.",
		timeAgo: "26m ago",
		impact: "500 exported",
		tags: ["api", "webhook"],
	},
	{
		id: "scrape-report",
		label: "Scraping Report",
		actor: "Analytics Engine",
		action:
			"Published weekly scraping performance report: 5,000+ leads scraped across 8 sources.",
		timeAgo: "1h ago",
		impact: "+5,000 leads",
		tags: ["reporting", "analytics"],
	},
];
