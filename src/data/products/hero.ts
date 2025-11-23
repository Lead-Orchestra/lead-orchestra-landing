// * Default props for demo/dev use

import type { ProductHeroProps } from "@/components/products/product/ProductHero";

export type HeroGridItem = {
	src: string;
	alt: string;
	label: string;
	categoryId: string; // * Used for robust category lookup
	description?: string;
	link: string;
	ariaLabel?: string;
	colSpan?: number;
	rowSpan?: number;
};

export const DEFAULT_GRID: HeroGridItem[] = [
	{
		src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80",
		alt: "Lead Orchestra lead magnets and free resources",
		label: "Lead Magnets & Free Resources",
		categoryId: "free-resources",
		description:
			"Free MCP plugins, scraping templates, LSF specs, and guides to get started with Lead Orchestra.",
		link: "/products#category=free-resources",
		ariaLabel: "Explore Lead Orchestra lead magnets",
		colSpan: 2,
		rowSpan: 2,
	},
	{
		src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop&q=80",
		alt: "Virtual Assistants Marketplace",
		label: "Virtual Assistants (VA's)",
		categoryId: "remote-closers",
		description:
			"Connect with skilled virtual assistants for data entry, lead processing, and scraping workflow support. Apply to become a VA or hire experienced assistants for your Lead Orchestra operations.",
		link: "/products#category=remote-closers",
		ariaLabel: "Explore Virtual Assistants marketplace",
		colSpan: 2,
		rowSpan: 1,
	},
	{
		src: "products/coins.png",
		alt: "Lead Credits for Lead Orchestra",
		label: "Lead Credits",
		categoryId: "credits",
		description:
			"Power your scraping workflows and data processing operations with lead credits.",
		link: "/products/credits",
		ariaLabel: "View Lead Orchestra lead credits",
		colSpan: 2,
		rowSpan: 1,
	},
	{
		src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80",
		alt: "Lead Magnets for Lead Orchestra",
		label: "Lead Magnets",
		categoryId: "free-resources",
		description:
			"Free resources, templates, and guides to get started with Lead Orchestra.",
		link: "/products#category=free-resources",
		ariaLabel: "Explore Lead Orchestra lead magnets",
		colSpan: 1,
		rowSpan: 1,
	},
	{
		src: "/products/notion-2.png",
		alt: "Notion Templates for Data Teams",
		label: "Notion Templates",
		categoryId: "notion",
		description:
			"Notion templates for tracking scraping jobs, managing lead data, and organizing your data pipeline.",
		link: "/products/notion-templates",
		ariaLabel: "Discover Notion templates for data teams",
		colSpan: 1,
		rowSpan: 2,
	},
	{
		src: "products/workflows.png",
		alt: "Scraping Workflows for Lead Orchestra",
		label: "Scraping Workflows",
		categoryId: "workflows",
		description:
			"Pre-configured scraping workflows for Zillow, LinkedIn, MLS, and more.",
		link: "/products/outreach-workflows",
		ariaLabel: "Explore Lead Orchestra scraping workflows",
		colSpan: 1,
		rowSpan: 1,
	},
	{
		src: "products/workflows.png",
		alt: "MCP Plugins for Lead Orchestra",
		label: "MCP Plugins",
		categoryId: "agents",
		description:
			"Pre-built MCP plugins for Realtor.com, MLS, job boards, and more. Ready to deploy in your Lead Orchestra instance.",
		link: "/products#category=agents",
		ariaLabel: "Explore Lead Orchestra MCP plugins",
		colSpan: 1,
		rowSpan: 1,
	},
	{
		src: "products/workflows.png",
		alt: "Data Export Integrations",
		label: "Export Integrations",
		categoryId: "workflows",
		description:
			"CRM, Database, S3, and workflow engine integrations for exporting scraped data.",
		link: "/products#category=workflows",
		ariaLabel: "Explore data export integrations",
		colSpan: 1,
		rowSpan: 1,
	},
	{
		src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&q=80",
		alt: "N8N Lead Gen Workflows",
		label: "N8N Lead Gen Workflows",
		categoryId: "workflows",
		description:
			"Ready-to-use n8n lead gen workflows for automating Lead Orchestra scraping jobs and data exports.",
		link: "/products#category=workflows",
		ariaLabel: "Explore N8N lead gen workflows",
		colSpan: 1,
		rowSpan: 1,
	},
	{
		src: "products/workflows.png",
		alt: "MCP Plugin Templates",
		label: "MCP Templates",
		categoryId: "workflows",
		description:
			"Pre-built MCP plugin templates for directory sites, job boards, e-commerce, and government websites.",
		link: "/products#category=workflows",
		ariaLabel: "Explore MCP plugin templates",
		colSpan: 1,
		rowSpan: 1,
	},
	{
		src: "products/workflows.png",
		alt: "Lead Standard Format Documentation",
		label: "LSF Specs",
		categoryId: "free-resources",
		description:
			"Lead Standard Format (LSF) specifications and schemas for data normalization and export.",
		link: "/products#category=free-resources",
		ariaLabel: "Explore LSF specifications",
		colSpan: 1,
		rowSpan: 1,
	},
];
export const defaultHeroProps: ProductHeroProps = {
	headline: "The Lead Orchestra ",
	highlight: "Marketplace",
	subheadline:
		"Your hub for lead magnets, MCP plugins, templates, and resources. Get everything you need to scrape, normalize, and export leads—from starter packs to complete automation workflows.",
	grid: DEFAULT_GRID,
	testimonial: {
		quote: `"If you don't have a system for doing things, you'll be forever re-inventing the wheel. And you can't build a business on that."`,
		author:
			'Gary Keller, Founder of Keller Williams and Author of "The Millionaire Real Estate Agent"',
	},
};
