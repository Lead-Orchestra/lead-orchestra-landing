import {
	LicenseType,
	ProductCategory,
	type ProductResource,
	type ProductType,
} from "@/types/products";

const defaultTypes: ProductType["types"] = [
	{ name: "Download", value: "download", price: 0 },
];

const defaultColors: ProductType["colors"] = [];
const defaultSizes: ProductType["sizes"] = [];

// Resource definitions for lead magnets
const ossScraperStarterResource: ProductResource = {
	type: "external",
	url: "https://github.com/leadorchestra/scraper-starter-pack",
	demoUrl: "https://app.supademo.com/embed/oss-starter",
};

const mcpTemplatesResource: ProductResource = {
	type: "external",
	url: "https://github.com/leadorchestra/mcp-scraper-templates",
	demoUrl: "https://app.supademo.com/embed/mcp-templates",
};

const lsfSpecResource: ProductResource = {
	type: "download",
	url: "https://assets.leadorchestra.io/lead-magnets/lsf-spec-v1.0.pdf",
	fileName: "lead-standard-format-v1.0.pdf",
	fileSize: "2.1 MB",
};

const scrapingUniversityResource: ProductResource = {
	type: "external",
	url: "https://docs.leadorchestra.io/scraping-university",
	demoUrl: "https://app.supademo.com/embed/scraping-uni",
};

const nicheLeadSourcesResource: ProductResource = {
	type: "download",
	url: "https://assets.leadorchestra.io/lead-magnets/50-niche-lead-sources.pdf",
	fileName: "50-niche-lead-sources.pdf",
	fileSize: "3.5 MB",
};

const listBuildingChallengeResource: ProductResource = {
	type: "external",
	url: "https://leadorchestra.notion.site/7-Day-List-Building-Challenge",
	demoUrl: "https://app.supademo.com/embed/list-challenge",
};

const agencyLeadMachineResource: ProductResource = {
	type: "download",
	url: "https://assets.leadorchestra.io/lead-magnets/agency-lead-machine-funnel.pdf",
	fileName: "agency-lead-machine-funnel.pdf",
	fileSize: "5.2 MB",
};

const appointmentSetterResource: ProductResource = {
	type: "download",
	url: "https://assets.leadorchestra.io/lead-magnets/100k-appointment-setter-playbook.pdf",
	fileName: "100k-appointment-setter-playbook.pdf",
	fileSize: "4.8 MB",
};

const sdrProspectingResource: ProductResource = {
	type: "download",
	url: "https://assets.leadorchestra.io/lead-magnets/sdr-prospecting-super-pack.zip",
	fileName: "sdr-prospecting-super-pack.zip",
	fileSize: "12.3 MB",
};

const gtmPlaybooksResource: ProductResource = {
	type: "external",
	url: "https://leadorchestra.notion.site/30-Weekly-GTM-Playbooks",
	demoUrl: "https://app.supademo.com/embed/gtm-playbooks",
};

const hubspotKitResource: ProductResource = {
	type: "download",
	url: "https://assets.leadorchestra.io/lead-magnets/hubspot-outbound-automation-kit.zip",
	fileName: "hubspot-outbound-automation-kit.zip",
	fileSize: "8.7 MB",
};

const fsboScrapingKitResource: ProductResource = {
	type: "download",
	url: "https://assets.leadorchestra.io/lead-magnets/fsbo-scraping-starter-kit.pdf",
	fileName: "fsbo-scraping-starter-kit.pdf",
	fileSize: "3.9 MB",
};

const offMarketSourcesResource: ProductResource = {
	type: "download",
	url: "https://assets.leadorchestra.io/lead-magnets/40-off-market-seller-sources.pdf",
	fileName: "40-off-market-seller-sources.pdf",
	fileSize: "2.6 MB",
};

const wholesalerPipelineResource: ProductResource = {
	type: "external",
	url: "https://leadorchestra.notion.site/Wholesaler-Automation-Pipeline",
	demoUrl: "https://app.supademo.com/embed/wholesaler-pipeline",
};

const openLeadPlaybookResource: ProductResource = {
	type: "download",
	url: "https://assets.leadorchestra.io/lead-magnets/open-lead-playbook.pdf",
	fileName: "open-lead-playbook.pdf",
	fileSize: "15.4 MB",
};

const sitesToScrapeResource: ProductResource = {
	type: "download",
	url: "https://assets.leadorchestra.io/lead-magnets/500-sites-you-can-scrape.pdf",
	fileName: "500-sites-you-can-scrape.pdf",
	fileSize: "6.2 MB",
};

const mcpBuilderKitResource: ProductResource = {
	type: "external",
	url: "https://github.com/leadorchestra/mcp-builder-kit",
	demoUrl: "https://app.supademo.com/embed/mcp-builder",
};

export const leadMagnetProducts: ProductType[] = [
	// For Developers
	{
		id: "oss-scraper-starter-pack",
		name: "Open-Source Scraper Starter Pack",
		description:
			"A bundle of Playwright starter template, MCP provider boilerplate, LSF validation schema, and 3-5 example scrapers. Clone this → build a scraper → try it in Lead Orchestra.",
		price: 0,
		sku: "LEAD-MAGNET-OSS-001",
		slug: "oss-scraper-starter-pack",
		categories: [ProductCategory.FreeResources, ProductCategory.Workflows],
		images: [
			"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&q=80",
		],
		types: defaultTypes,
		reviews: [],
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "What's included in the starter pack?",
				answer:
					"The pack includes a Playwright starter template, MCP provider boilerplate, LSF validation schema, and 3-5 example scrapers for common sites.",
			},
			{
				question: "Do I need prior scraping experience?",
				answer:
					"No, the starter pack is designed for developers of all levels. It includes documentation and examples to get you started quickly.",
			},
		],
		resource: ossScraperStarterResource,
		isFeaturedFreeResource: true,
	},
	{
		id: "mcp-scraper-templates",
		name: "10 MCP Scraper Plugin Templates",
		description:
			"Pre-built templates for directory sites, job boards, e-commerce pages, government websites, and local business lists. Turn any website into a Lead Orchestra provider.",
		price: 0,
		sku: "LEAD-MAGNET-MCP-001",
		slug: "mcp-scraper-templates",
		categories: [ProductCategory.FreeResources, ProductCategory.Workflows],
		images: [
			"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop&q=80",
		],
		types: defaultTypes,
		reviews: [],
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "What types of sites are covered?",
				answer:
					"The templates cover directory sites, job boards, e-commerce pages, government websites, and local business lists.",
			},
		],
		resource: mcpTemplatesResource,
		isFeaturedFreeResource: true,
	},
	{
		id: "lead-standard-format-spec",
		name: "Lead Standard Format (LSF) Specification v1.0",
		description:
			"The industry standard for lead data normalization. This specification ensures all scraped data is structured, validated, and ready for export to any system.",
		price: 0,
		sku: "LEAD-MAGNET-LSF-001",
		slug: "lead-standard-format-spec",
		categories: [ProductCategory.FreeResources, ProductCategory.Data],
		images: [
			"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
		],
		types: defaultTypes,
		reviews: [],
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "Why is LSF important?",
				answer:
					"LSF standardizes lead data across all sources, making it easy to export, integrate, and share data between systems without custom mapping.",
			},
		],
		resource: lsfSpecResource,
		isFeaturedFreeResource: true,
	},
	{
		id: "scraping-university",
		name: "Scraping University: 20 Mini Lessons",
		description:
			"Tiny tutorials covering rate limiting, DOM selection, anti-bot bypass, data normalization, and proxy rotation. Hosted free and virally shareable.",
		price: 0,
		sku: "LEAD-MAGNET-UNI-001",
		slug: "scraping-university",
		categories: [ProductCategory.FreeResources],
		images: [
			"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&q=80",
		],
		types: defaultTypes,
		reviews: [],
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "What topics are covered?",
				answer:
					"Lessons cover rate limiting, DOM selection, anti-bot bypass, data normalization, proxy rotation, and more advanced scraping techniques.",
			},
		],
		resource: scrapingUniversityResource,
	},
	// For Agencies
	{
		id: "50-niche-lead-sources",
		name: "50 Niche Lead Sources You Can Scrape Today",
		description:
			"Examples include roofers, dentists, logistics companies, SaaS founders, solar installers, and attorneys. Scrape these 50 niches with Lead Orchestra.",
		price: 0,
		sku: "LEAD-MAGNET-NICHE-001",
		slug: "50-niche-lead-sources",
		categories: [ProductCategory.FreeResources, ProductCategory.Leads],
		images: [
			"https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&q=80",
		],
		types: defaultTypes,
		reviews: [],
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "What niches are included?",
				answer:
					"The guide includes roofers, dentists, logistics companies, SaaS founders, solar installers, attorneys, and 44 more niche verticals.",
			},
		],
		resource: nicheLeadSourcesResource,
		isFeaturedFreeResource: true,
	},
	{
		id: "7-day-list-building-challenge",
		name: "The 7-Day List-Building Challenge",
		description:
			"Daily prompts: Day 1: Scrape → Day 2: Clean → Day 3: Enrich → Day 4: Score → Day 5: Build lead magnet → Day 6: Create email sequence → Day 7: Book meetings.",
		price: 0,
		sku: "LEAD-MAGNET-CHALLENGE-001",
		slug: "7-day-list-building-challenge",
		categories: [ProductCategory.FreeResources, ProductCategory.Workflows],
		images: [
			"https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80",
		],
		types: defaultTypes,
		reviews: [],
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "How long does each day take?",
				answer:
					"Each day's challenge is designed to take 30-60 minutes, with clear step-by-step instructions and templates provided.",
			},
		],
		resource: listBuildingChallengeResource,
	},
	{
		id: "agency-lead-machine-funnel",
		name: "Agency Lead Machine Funnel Kit",
		description:
			"Includes landing page template, cold email sequence, scraper workflow, Deal Scale upsell, and offer stack. Everything you need to build a complete lead generation funnel.",
		price: 0,
		sku: "LEAD-MAGNET-AGENCY-001",
		slug: "agency-lead-machine-funnel",
		categories: [ProductCategory.FreeResources, ProductCategory.Automation],
		images: [
			"https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80",
		],
		types: defaultTypes,
		reviews: [],
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "What's included in the kit?",
				answer:
					"The kit includes landing page template, cold email sequence, scraper workflow, Deal Scale upsell strategy, and complete offer stack.",
			},
		],
		resource: agencyLeadMachineResource,
	},
	{
		id: "appointment-setter-playbook",
		name: "The $100k/yr Appointment Setter Playbook",
		description:
			"Teach agencies how to use Lead Orchestra + Deal Scale to deliver for clients. Complete guide to building a profitable appointment setting service.",
		price: 0,
		sku: "LEAD-MAGNET-APPT-001",
		slug: "appointment-setter-playbook",
		categories: [ProductCategory.FreeResources],
		images: [
			"https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80",
		],
		types: defaultTypes,
		reviews: [],
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "Is this for agencies or individual appointment setters?",
				answer:
					"The playbook is designed for both agencies and individual appointment setters looking to scale their service using Lead Orchestra and Deal Scale.",
			},
		],
		resource: appointmentSetterResource,
	},
	// For SDR/RevOps
	{
		id: "sdr-prospecting-super-pack",
		name: "The SDR Prospecting Super Pack",
		description:
			"Templates for competitor scraping, partner scraping, intent list scraping, and ideal customer list builder. Everything SDRs need to build better prospect lists.",
		price: 0,
		sku: "LEAD-MAGNET-SDR-001",
		slug: "sdr-prospecting-super-pack",
		categories: [ProductCategory.FreeResources, ProductCategory.Leads],
		images: [
			"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
		],
		types: defaultTypes,
		reviews: [],
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "What templates are included?",
				answer:
					"The pack includes templates for competitor scraping, partner scraping, intent list scraping, and ideal customer list builder.",
			},
		],
		resource: sdrProspectingResource,
		isFeaturedFreeResource: true,
	},
	{
		id: "30-gtm-weekly-playbooks",
		name: "30 Weekly Playbooks for GTM Teams",
		description:
			"Examples include 'Scrape job boards to find buyers hiring engineers,' 'Scrape competitor customers from testimonials,' and 'Scrape top 100 high-intent ICPs monthly.'",
		price: 0,
		sku: "LEAD-MAGNET-GTM-001",
		slug: "30-gtm-weekly-playbooks",
		categories: [ProductCategory.FreeResources, ProductCategory.Workflows],
		images: [
			"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
		],
		types: defaultTypes,
		reviews: [],
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "How are the playbooks organized?",
				answer:
					"Each playbook is a weekly template with step-by-step instructions, target sources, and expected outcomes for GTM teams.",
			},
		],
		resource: gtmPlaybooksResource,
	},
	{
		id: "hubspot-outbound-automation-kit",
		name: "HubSpot Outbound Automation Kit",
		description:
			"Contains import-ready LSF fields, sample workflows, and scripts for auto-scoring via Deal Scale. Seamlessly integrate Lead Orchestra with HubSpot.",
		price: 0,
		sku: "LEAD-MAGNET-HUBSPOT-001",
		slug: "hubspot-outbound-automation-kit",
		categories: [ProductCategory.FreeResources, ProductCategory.Automation],
		images: [
			"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
		],
		types: defaultTypes,
		reviews: [],
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "Do I need HubSpot experience?",
				answer:
					"Basic HubSpot knowledge is helpful, but the kit includes step-by-step instructions for setting up the automation workflows.",
			},
		],
		resource: hubspotKitResource,
	},
	// For Real Estate
	{
		id: "fsbo-scraping-starter-kit",
		name: "FSBO Scraping Starter Kit",
		description:
			"A PDF + video guide: How to scrape FSBO, how to enrich owners, and how to run AI calling in Deal Scale. Complete automation pipeline for real estate investors.",
		price: 0,
		sku: "LEAD-MAGNET-FSBO-001",
		slug: "fsbo-scraping-starter-kit",
		categories: [ProductCategory.FreeResources, ProductCategory.Leads],
		images: [
			"https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&q=80",
		],
		types: defaultTypes,
		reviews: [],
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "What's included in the kit?",
				answer:
					"The kit includes a PDF guide and video tutorial covering FSBO scraping, owner enrichment, and AI calling automation in Deal Scale.",
			},
		],
		resource: fsboScrapingKitResource,
		isFeaturedFreeResource: true,
	},
	{
		id: "40-off-market-seller-sources",
		name: "40 Off-Market Seller Sources You Can Scrape Today",
		description:
			"Niche verticals including FSBO, expired, auctions, rentals, probate sites, and county records. Find off-market deals your competitors can't access.",
		price: 0,
		sku: "LEAD-MAGNET-OFFMARKET-001",
		slug: "40-off-market-seller-sources",
		categories: [ProductCategory.FreeResources, ProductCategory.Leads],
		images: [
			"https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&q=80",
		],
		types: defaultTypes,
		reviews: [],
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "What sources are covered?",
				answer:
					"The guide covers FSBO, expired listings, auctions, rentals, probate sites, county records, and 34 more off-market sources.",
			},
		],
		resource: offMarketSourcesResource,
	},
	{
		id: "wholesaler-automation-pipeline",
		name: "Wholesaler Automation Pipeline Template",
		description:
			"Complete workflow: Scrape → skip trace → qualify → follow-up → schedule appointment. Automate your entire wholesaling pipeline with Lead Orchestra + Deal Scale.",
		price: 0,
		sku: "LEAD-MAGNET-WHOLESALER-001",
		slug: "wholesaler-automation-pipeline",
		categories: [ProductCategory.FreeResources, ProductCategory.Automation],
		images: [
			"https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&q=80",
		],
		types: defaultTypes,
		reviews: [],
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "Is this for experienced wholesalers?",
				answer:
					"The template works for both new and experienced wholesalers looking to automate their deal pipeline from scraping to appointment booking.",
			},
		],
		resource: wholesalerPipelineResource,
	},
	// Cross-market (Universal)
	{
		id: "open-lead-playbook",
		name: "The Open Lead Playbook (Flagship)",
		description:
			"A beautifully designed, 20-30 page guide covering how to find leads, scrape, clean, enrich, follow up, and automate. Positions Lead Orchestra as the open-source standard.",
		price: 0,
		sku: "LEAD-MAGNET-PLAYBOOK-001",
		slug: "open-lead-playbook",
		categories: [ProductCategory.FreeResources],
		images: [
			"https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80",
		],
		types: defaultTypes,
		reviews: [],
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "What makes this the flagship guide?",
				answer:
					"This is our most comprehensive guide, covering the complete lead generation workflow from finding leads to automation, positioning Lead Orchestra as the industry standard.",
			},
		],
		resource: openLeadPlaybookResource,
		isFeaturedFreeResource: true,
	},
	{
		id: "500-sites-you-can-scrape",
		name: "500 Sites You Can Scrape for Leads",
		description:
			"This will go insanely viral. No other tool publishes this comprehensive list. Find leads from 500+ sources your competitors don't know about.",
		price: 0,
		sku: "LEAD-MAGNET-500-001",
		slug: "500-sites-you-can-scrape",
		categories: [ProductCategory.FreeResources, ProductCategory.Leads],
		images: [
			"https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop&q=80",
		],
		types: defaultTypes,
		reviews: [],
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "Are these sites organized by category?",
				answer:
					"Yes, the list is organized by industry, vertical, and data type, making it easy to find relevant sources for your specific needs.",
			},
		],
		resource: sitesToScrapeResource,
		isFeaturedFreeResource: true,
	},
	{
		id: "mcp-scraper-builder-kit",
		name: "MCP Scraper Builder Kit",
		description:
			"Turn ANY website into a Lead Orchestra provider. Complete toolkit with documentation, templates, and examples to build custom MCP scrapers.",
		price: 0,
		sku: "LEAD-MAGNET-MCP-BUILDER-001",
		slug: "mcp-scraper-builder-kit",
		categories: [ProductCategory.FreeResources, ProductCategory.Workflows],
		images: [
			"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop&q=80",
		],
		types: defaultTypes,
		reviews: [],
		colors: defaultColors,
		sizes: defaultSizes,
		faqs: [
			{
				question: "What's included in the builder kit?",
				answer:
					"The kit includes documentation, templates, examples, and step-by-step guides to turn any website into a Lead Orchestra MCP provider.",
			},
		],
		resource: mcpBuilderKitResource,
		isFeaturedFreeResource: true,
	},
].map((product) => ({
	...product,
	colors: product.colors ?? defaultColors,
	sizes: product.sizes ?? defaultSizes,
	types: product.types ?? defaultTypes,
}));












