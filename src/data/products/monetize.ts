import {
	LicenseType,
	ProductCategory,
	type ProductType,
} from "@/types/products";

/**
 * Marketplace entry point products for monetization
 * These allow users to EARN income by selling/listing their content
 */
export const monetizeProducts: ProductType[] = [
	{
		id: "sales-scripts-marketplace",
		name: "Sales Scripts Marketplace",
		price: 0, // Free to browse, application required to sell
		sku: "DS-SALES-SCRIPTS-MARKETPLACE",
		slug: "sales-scripts-marketplace",
		licenseName: LicenseType.Proprietary,
		description:
			"Publish and sell your proven MCP scraper plugins to the Lead Orchestra community. Share your custom scrapers, data normalization workflows, and integration templates to earn recurring revenue.",
		categories: [ProductCategory.SalesScripts, ProductCategory.Monetize],
		images: [
			"https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop&q=80",
		],
		types: [],
		reviews: [],
		colors: [],
		sizes: [],
		faqs: [
			{
				question: "How do I sell my sales scripts?",
				answer:
					"Click on the Sales Scripts marketplace card to apply. Submit your proven scripts and we'll review them for quality and effectiveness. Once approved, your scripts will be available for purchase on the marketplace.",
			},
			{
				question: "How much can I earn?",
				answer:
					"Plugin creators earn a percentage of each sale. Popular MCP plugins can generate recurring revenue as Lead Orchestra users purchase licenses for their scraping workflows.",
			},
		],
	},
	{
		id: "workflows-marketplace",
		name: "Workflows Marketplace",
		price: 0, // Free to browse, application required to monetize
		sku: "DS-WORKFLOWS-MARKETPLACE",
		slug: "workflows-marketplace",
		licenseName: LicenseType.Proprietary,
		description:
			"Monetize your scraping workflows by sharing them with the Lead Orchestra community. Sell your proven MCP plugins, data normalization workflows, and export integrations to earn revenue from developers and agencies.",
		categories: [ProductCategory.Workflows, ProductCategory.Monetize],
		images: [
			"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=80",
		],
		types: [],
		reviews: [],
		colors: [],
		sizes: [],
		faqs: [
			{
				question: "How do I monetize my workflow?",
				answer:
					"Click on the Workflows marketplace card to submit your automation. We'll review and test your workflow for quality and functionality. Once approved, it will be available for purchase on the marketplace.",
			},
			{
				question: "What types of workflows can I sell?",
				answer:
					"You can sell any scraping workflow including MCP plugins for specific sites, data normalization pipelines, CRM export integrations, and multi-source scraping workflows. The workflow must be tested and proven effective.",
			},
		],
	},
	{
		id: "mcp-plugins-marketplace",
		name: "MCP Plugins Marketplace",
		price: 0, // Free to browse, application required to monetize
		sku: "LO-MCP-PLUGINS-MARKETPLACE",
		slug: "mcp-plugins-marketplace",
		licenseName: LicenseType.Proprietary,
		description:
			"Monetize your MCP plugins and scraping tools by listing them on Lead Orchestra. Share your custom scrapers, data processing tools, and integration solutions with the community and earn recurring revenue.",
		categories: [ProductCategory.Workflows, ProductCategory.Monetize],
		images: [
			"https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&h=800&fit=crop&q=80",
		],
		types: [],
		reviews: [],
		colors: [],
		sizes: [],
		faqs: [
			{
				question: "How do I monetize my voice agent?",
				answer:
					"Click on the MCP Plugins marketplace card to submit your plugin. We'll review your plugin's functionality, code quality, and effectiveness. Once approved, users can install and use your plugin in their Lead Orchestra workflows.",
			},
			{
				question: "What voice agents can I list?",
				answer:
					"You can list any MCP plugin, scraping tool, data normalization workflow, or integration solution that provides value to Lead Orchestra users. The plugin must be tested, documented, and ready for use.",
			},
		],
	},
];
