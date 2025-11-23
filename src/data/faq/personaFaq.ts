export type PersonaKey =
	| "developer"
	| "agency"
	| "startup"
	| "enterprise"
	| "agent"
	| "investor"
	| "wholesaler";

export interface PersonaFaqItem {
	id: string;
	question: string;
	answers: Record<PersonaKey, string>;
}

export const PERSONA_OPTIONS: Array<{ key: PersonaKey; label: string }> = [
	{ key: "developer", label: "Developers & Engineers" },
	{ key: "agency", label: "Lead Gen Agencies" },
	{ key: "startup", label: "Startups & Founders" },
	{ key: "enterprise", label: "Enterprise Teams" },
	{ key: "agent", label: "Agent" },
	{ key: "investor", label: "Investors" },
	{ key: "wholesaler", label: "Wholesaler" },
];

export const PERSONA_FAQ_ITEMS: PersonaFaqItem[] = [
	{
		id: "what-is-lead-orchestra",
		question: "What is Lead Orchestra and how does it help me?",
		answers: {
			developer:
				"Lead Orchestra is an open-source lead scraping and data ingestion platform built for developers. Stop rebuilding scrapers and glue code for every project. Scrape fresh leads from any website using MCP plugins, normalize data automatically, and export to CSV, JSON, Database, S3, or any system. Built with Playwright for reliable anti-bot bypass and includes CLI, SDKs, and webhooks.",
			agency:
				"Lead Orchestra lets marketing and sales agencies build custom scraping pipelines for clients. Use pre-built plugins for Zillow, Realtor, LinkedIn, and more, or create custom scrapers. Normalize and export data to any format. White-label options available for agency use.",
			startup:
				"Lead Orchestra is an open-source scraping platform that plugs into anything. Focus on product-market fit, not scraping infrastructure. Free tier with no credit card required. Scrape any source, normalize data automatically, and export to your stack. Built for startups who need scraping without enterprise overhead.",
			enterprise:
				"Lead Orchestra is an open-source data ingestion platform that enables enterprise teams to deploy scalable scraping workflows across departments. Self-host for full control, use the MCP API aggregator for unified data sources, and export to CRM, Database, S3, or any system. Built for data teams who need reliable, normalized lead data at scale.",
			agent:
				"Lead Orchestra is an open-source lead scraping platform that helps you gather fresh listing and seller leads from Zillow, Realtor, MLS, and social platforms. Scrape any source, normalize the data automatically, and export to CSV/JSON or your CRM. Get fresh leads, not rented lists, and plug the data into your existing workflow.",
			investor:
				"Lead Orchestra is an open-source scraping engine that lets you extract property and owner data from Zillow, Realtor, LinkedIn, MLS, and other sources. Unlike list providers, you scrape fresh data directly from the source, normalize it automatically, and export to your deal pipeline. Built for investors who want unlimited, accurate lead data without per-record costs.",
			wholesaler:
				"Lead Orchestra automates lead scraping for wholesalers. Scrape property listings, owner information, and deal signals from multiple sources, normalize the data, and export directly to your CRM or deal tracker. Get fresh leads daily without manual data entry.",
		},
	},
	{
		id: "scraping-sources",
		question: "What sources can I scrape with Lead Orchestra?",
		answers: {
			developer:
				"Scrape any website using the Playwright engine or pre-built MCP plugins. The MCP API aggregator provides a unified interface for all sources. Use the CLI to scrape from command line, SDKs for programmatic access, or create custom scrapers. All data is normalized to Lead Standard Format (LSF) schemas for consistent output.",
			agency:
				"Use pre-built plugins for Zillow, Realtor, LinkedIn, MLS, Facebook, Reddit, and Twitter. The unified MCP spec makes it easy to add new sources or create custom scrapers for client-specific needs. All data is normalized before export.",
			startup:
				"Use pre-built MCP plugins for common sources or the Playwright engine to scrape any website. The MCP API aggregator unifies all sources. Create custom scrapers with minimal code. All data is normalized automatically before export.",
			enterprise:
				"Lead Orchestra's MCP API aggregator provides a unified interface for scraping Zillow, Realtor, LinkedIn, MLS, Facebook, Reddit, Twitter, and custom sources. The Playwright engine can scrape any website. Enterprise plans include priority plugin development and custom source integration.",
			agent:
				"Lead Orchestra includes pre-built plugins for Zillow, Realtor, MLS, LinkedIn, Facebook, Reddit, and Twitter. You can also use the Playwright-based engine to scrape any website with custom selectors. All sources are normalized to Lead Standard Format (LSF) schemas for consistent output.",
			investor:
				"Scrape property data from Zillow and Realtor, owner information from LinkedIn and social platforms, and deal signals from MLS and other sources. The MCP API aggregator provides a unified interface for all sources, and you can add custom scrapers for any website.",
			wholesaler:
				"Scrape property listings, owner contact info, and deal opportunities from Zillow, Realtor, MLS, Facebook, and Reddit. The data normalization layer automatically extracts addresses, phone numbers, and emails, then exports to your pipeline.",
		},
	},
	{
		id: "roi",
		question: "What kind of ROI can I expect?",
		answers: {
			developer:
				"Developers save weeks of engineering time by using pre-built MCP plugins instead of building scrapers from scratch. Open-source means no per-record fees or credit limits. Many developers recover their time investment after the first scraping job. Focus on building features, not scraping infrastructure.",
			agency:
				"Agencies save 20-40 hours per week per client by automating lead scraping. White-label options let you offer scraping as a service, creating new revenue streams. Most agencies see 4×–6× ROI from time savings and client retention.",
			startup:
				"Startups save engineering time and infrastructure costs. Free tier with no credit card required means you can validate scraping needs before scaling. Many startups launch faster by using ready-made scraping instead of building from scratch. Focus on product-market fit, not plumbing.",
			enterprise:
				"Enterprise teams reduce data acquisition costs by 60-80% compared to list providers. Self-hosting gives full control and eliminates vendor lock-in. Typical ROI is 5× through reduced costs, faster data pipelines, and higher data quality.",
			agent:
				"Agents save 10-20 hours per week by automating lead scraping instead of manual data entry. Fresh leads from Zillow and Realtor convert 3-5× better than rented lists. Many agents recover their annual plan cost after one converted listing from scraped leads.",
			investor:
				"Investors save thousands on list costs by scraping fresh data directly from sources. Unlimited scraping means no per-record fees. Many investors find one deal from scraped leads that pays for years of Lead Orchestra usage.",
			wholesaler:
				"Wholesalers eliminate list provider costs and get fresher, more accurate data. Automated scraping runs 24/7, finding deals faster than manual methods. One $10,000 assignment deal often pays for multiple years of Lead Orchestra.",
		},
	},
	{
		id: "compliance",
		question:
			"Is Lead Orchestra compliant with data privacy and scraping regulations?",
		answers: {
			developer:
				"Yes. Lead Orchestra respects robots.txt, includes rate limiting, and follows ethical scraping practices. The platform is open-source so you can audit the code. Data is encrypted at rest and in transit. Always check terms of service for the sites you scrape.",
			agency:
				"Lead Orchestra provides documentation on ethical scraping practices and compliance considerations. The platform includes rate limiting and respects robots.txt. Agencies should review terms of service for each source they scrape.",
			startup:
				"Yes. Lead Orchestra includes built-in rate limiting, robots.txt respect, and ethical scraping practices. Open-source means you can verify compliance. Data is encrypted. Always review terms of service for each source.",
			enterprise:
				"Compliance is built into the platform. Lead Orchestra includes rate limiting, robots.txt respect, ethical scraping practices, and data encryption. Enterprise plans include compliance documentation and audit trails for all scraping activity.",
			agent:
				"Yes. Lead Orchestra respects robots.txt, includes rate limiting to avoid overloading servers, and follows ethical scraping practices. Scraped data is processed with privacy-by-design principles. Always check terms of service for the sites you scrape.",
			investor:
				"Lead Orchestra includes built-in rate limiting, proxy rotation, and stealth modes to scrape responsibly. The platform follows ethical scraping guidelines and respects website terms. Data is encrypted at rest and in transit.",
			wholesaler:
				"Yes. Lead Orchestra's anti-bot modules and rate limiting help you scrape responsibly without violating terms of service. All scraped data is encrypted and can be exported securely to your systems.",
		},
	},
	{
		id: "export-integration",
		question: "How can I export and integrate scraped data?",
		answers: {
			developer:
				"Export to CSV, JSON, Database, S3, or any system via API. Use the CLI for command-line exports, SDKs for programmatic access, or webhooks for event-driven workflows. Full API access for custom integrations. GitHub Actions templates available for CI/CD pipelines.",
			agency:
				"Export to any format (CRM, CSV, JSON, Database, S3) or use the API for custom integrations. Webhooks let you trigger actions in client systems. White-label options available for agency branding.",
			startup:
				"Export to CSV, JSON, Database, S3, or any system via API. Use webhooks for event-driven workflows. SDKs available for JavaScript, Python, and Go. Integrate with your stack without vendor lock-in.",
			enterprise:
				"Export to CRM, Database, S3, or any system via API. Enterprise plans include custom integrations with Salesforce, HubSpot Enterprise, Microsoft Dynamics, and other enterprise systems. Full API access for custom workflows.",
			agent:
				"Export scraped data to CSV or JSON for spreadsheets, or use the API to push directly to CRMs like HubSpot, Lofty, GoHighLevel, Zoho, and FollowUpBoss. Webhooks can trigger actions in other tools when new leads are scraped.",
			investor:
				"Export to CRM for immediate use, CSV/JSON for analysis, Database for storage, or S3 for cloud storage. Use the API to integrate with REI tools like Podio, InvestorFuse, and REsimpli, or any system via webhooks.",
			wholesaler:
				"Export normalized leads directly to CSV/JSON for your deal tracker, or use the API to push to your CRM automatically. Webhooks can notify you when new deals are scraped.",
		},
	},
];

export const FEATURED_FAQ_BY_PERSONA: Record<PersonaKey, PersonaFaqItem["id"]> =
	{
		developer: "what-is-lead-orchestra",
		agency: "what-is-lead-orchestra",
		startup: "what-is-lead-orchestra",
		enterprise: "compliance",
		agent: "what-is-lead-orchestra",
		investor: "what-is-lead-orchestra",
		wholesaler: "roi",
	};

export const PERSONA_NEXT_STEP_FAQ: Record<
	PersonaKey,
	{
		question: string;
		answer: string;
	}
> = {
	developer: {
		question: "Developer Playbook: How do I start scraping in 5 minutes?",
		answer:
			"Install the CLI, use MCP plugins to scrape any source, or create custom scrapers with the Playwright engine. Export normalized data to CSV, JSON, Database, S3, or any system via API. Use SDKs for programmatic access or webhooks for event-driven workflows. GitHub Actions templates available for CI/CD.",
	},
	agency: {
		question: "Agency Playbook: How do I offer scraping as a service?",
		answer:
			"Use Lead Orchestra's white-label options to offer scraping services under your brand. Set up custom scraping pipelines for each client using pre-built plugins or custom scrapers. Export data to client systems via API or webhooks. The CLI and SDKs make it easy to automate client workflows.",
	},
	startup: {
		question:
			"Startup Playbook: How do I add scraping without infrastructure overhead?",
		answer:
			"Use the free tier to validate scraping needs. Install MCP plugins or create custom scrapers with minimal code. Export to your stack via API, webhooks, or SDKs. Focus on product-market fit while Lead Orchestra handles scraping infrastructure. Scale without vendor lock-in.",
	},
	enterprise: {
		question: "Enterprise Playbook: What does deployment look like?",
		answer:
			"Self-host Lead Orchestra on your infrastructure for full control. Use the MCP API aggregator to unify scraping from multiple sources. Set up automated scraping jobs via GitHub Actions or your CI/CD pipeline. Export to CRM, Database, S3, or enterprise systems via API. Enterprise plans include priority support and custom integrations.",
	},
	agent: {
		question: "Agent Playbook: How do I start scraping leads?",
		answer:
			"Paste a URL from Zillow or Realtor, configure your scraping parameters (or use defaults), and let Lead Orchestra extract listing and seller data. The data is automatically normalized and exported to CSV/JSON or your CRM. You can set up scheduled scraping to get fresh leads daily.",
	},
	investor: {
		question: "Investor Playbook: How do I scrape property data at scale?",
		answer:
			"Use the MCP plugins for Zillow, Realtor, and MLS to scrape property listings and owner information. Set up automated scraping jobs via CLI or SDKs to run daily. Export normalized data to CRM, Database, S3, or your deal pipeline. One scraping job can find hundreds of fresh leads.",
	},
	wholesaler: {
		question: "Wholesaler Playbook: How do I keep my deal pipeline full?",
		answer:
			"Scrape property listings and owner data from Zillow, Realtor, Facebook, and Reddit. Use the data normalization layer to extract addresses, phone numbers, and emails automatically. Export to CSV or push directly to your deal tracker via API. Set up webhooks to get notified when new deals are found.",
	},
};

export const PERSONA_ADVANCED_FAQ: Record<
	PersonaKey,
	{
		id: string;
		question: string;
		answer: string;
	}
> = {
	developer: {
		id: "developer-advanced",
		question: "How do I build a custom scraping pipeline with MCP plugins?",
		answer:
			"Use the Playwright engine to create custom scrapers for niche sources. Combine multiple MCP plugins to scrape from different sources simultaneously. Use the data normalization layer to merge and deduplicate records. Export to Database for analysis, S3 for archival, or any system via API. Use webhooks for event-driven workflows and GitHub Actions for CI/CD automation.",
	},
	agency: {
		id: "agency-advanced",
		question: "How do I manage scraping pipelines for multiple clients?",
		answer:
			"Use Lead Orchestra's workspace features to organize scraping jobs by client. Each client can have custom scrapers, export destinations, and webhook configurations. Use the API to build a unified dashboard showing scraping activity across all clients. White-label the interface with your agency branding.",
	},
	startup: {
		id: "startup-advanced",
		question: "How do I scale scraping as my startup grows?",
		answer:
			"Start with the free tier to validate needs. Use MCP plugins for common sources or create custom scrapers. Set up automated scraping jobs via GitHub Actions. Export to your stack via API or webhooks. As you scale, self-host for full control or upgrade to enterprise plans for priority support and custom integrations.",
	},
	enterprise: {
		id: "enterprise-advanced",
		question: "How do I orchestrate scraping across multiple departments?",
		answer:
			"Self-host Lead Orchestra for full control. Use the MCP API aggregator to provide a unified interface for all scraping sources. Set up department-specific workspaces with custom export destinations. Use the API and webhooks to integrate with enterprise systems. Central analytics track scraping activity and data quality across all departments.",
	},
	agent: {
		id: "agent-advanced",
		question: "How do I scale scraping across multiple markets?",
		answer:
			"Set up automated scraping jobs for each market using the CLI or SDKs. Use the MCP plugins to scrape Zillow and Realtor listings across different zip codes. Schedule daily scraping via GitHub Actions or cron jobs. Export all data to a central database or CRM for unified lead management.",
	},
	investor: {
		id: "investor-advanced",
		question: "How do I build a custom scraping pipeline for my strategy?",
		answer:
			"Use the Playwright engine to create custom scrapers for niche sources. Combine multiple MCP plugins to scrape Zillow, Realtor, and MLS simultaneously. Use the data normalization layer to merge and deduplicate records. Export to CRM for immediate use, Database for analysis, or S3 for archival. The webhook system can trigger alerts when high-value deals are found.",
	},
	wholesaler: {
		id: "wholesaler-advanced",
		question: "How can I automate deal discovery across multiple sources?",
		answer:
			"Set up parallel scraping jobs for Zillow, Realtor, Facebook, and Reddit. Use the data normalization layer to extract owner contact info automatically. Configure webhooks to push new leads directly to your deal tracker. Schedule scraping to run multiple times per day for the freshest data.",
	},
};
