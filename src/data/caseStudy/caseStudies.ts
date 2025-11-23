import type { CaseStudy, Category } from "@/types/case-study";
import {
	aiIntegrationHowItWorks,
	aiPhoneAgentHowItWorks,
	dealScaleProprietaryProcess,
	followUpHowItWorks,
	generalHowItWorks,
	instantLeadEngagement,
	leadGenHowItWorks,
	offMarketAdvantageHowItWorks,
} from "../service/slug_data/how_it_works";
import { leadGenIntegrations } from "../service/slug_data/integrations";

export type CaseStudyCopyright = {
	title: string;
	subtitle: string;
	ctaText: string;
	ctaLink: string;
};

export const caseStudies: CaseStudy[] = [
	{
		id: "developer-growth-engineer-01",
		title: "I replaced 600 lines of scraping code with one MCP plugin.",
		subtitle:
			"A Senior Growth Engineer at a 20-person SaaS startup replaced their entire scraping infrastructure with Lead Orchestra's MCP plugin system, reducing maintenance time by 90%.",
		slug: "developer-replaced-scraping-code-mcp-plugin",
		categories: ["developer-tooling", "scraping-automation"],
		industries: ["saas", "startups"],
		copyright: {
			title: "Ready to Simplify Your Scraping?",
			subtitle:
				"See how Lead Orchestra can replace your custom scrapers with one MCP plugin.",
			ctaText: "Get Started",
			ctaLink: "/contact",
		},
		tags: [
			"Developer",
			"MCP Plugin",
			"Scraping",
			"Automation",
			"Lead Standard Format",
		],
		clientName: "Senior Growth Engineer, 20-person SaaS Startup",
		clientDescription:
			"A growth engineer managing internal scrapers and data pipelines who needed to extract data from job boards and review sites quickly without constant maintenance.",
		featuredImage:
			"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=800&fit=crop&q=80",
		thumbnailImage:
			"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop&q=80",
		businessChallenges: [
			"Maintaining Playwright scrapers was a nightmare with constant breakages.",
			"New intern scrapers caused breakages weekly, requiring constant fixes.",
			"Needed to extract data from job boards and review sites quickly.",
			"Time spent on maintenance prevented shipping new features.",
		],
		lastModified: new Date("2025-01-21T10:00:00.000Z"),
		howItWorks: generalHowItWorks,
		businessOutcomes: [
			{
				title: "90% Reduction in Maintenance Time",
				subtitle:
					"Replaced 600 lines of custom scraping code with one MCP plugin, eliminating weekly breakages and maintenance overhead.",
			},
			{
				title: "Faster Feature Development",
				subtitle:
					"Could ship 3-5 new scrapers per week instead of spending time fixing broken ones. SDR team now enriches and follows up in Deal Scale.",
			},
		],
		solutions: [
			"Installed Lead Orchestra locally for full control",
			"Added custom MCP provider for target sites",
			"Used Lead Standard Format to normalize all data",
			"Shared scraping flows with SDR team in minutes",
		],
		description:
			"Lead Orchestra transformed our scraping from a scattered mess into a clean pipeline. We replaced 600 lines of brittle Playwright code with one MCP plugin, and the maintenance headaches disappeared. Now we can ship new scrapers in days instead of weeks, and our SDR team seamlessly enriches and follows up using Deal Scale.",
		results: [
			{
				title: "Reduction in Maintenance Time",
				value: "90%",
			},
			{
				title: "New Scrapers Shipped Per Week",
				value: "3-5",
			},
			{
				title: "Lines of Code Replaced",
				value: "600",
			},
		],
		featured: true,
		redirectToContact: false,
	},
	{
		id: "cold-email-agency-02",
		title:
			"We booked 19 meetings in a week with leads scraped from a niche directory.",
		subtitle:
			"A 7-person cold email agency found unique leads their competitors couldn't access, resulting in 19 booked meetings and a 3-month client retainer.",
		slug: "cold-email-agency-niche-directory-leads",
		categories: ["lead-generation", "data-scraping"],
		industries: ["b2b-services", "agencies"],
		copyright: {
			title: "Find Leads Your Competitors Can't",
			subtitle:
				"Scrape niche directories and get unique leads that Apollo and ZoomInfo don't have.",
			ctaText: "Start Scraping",
			ctaLink: "/contact",
		},
		tags: [
			"Cold Email",
			"Agency",
			"Niche Leads",
			"Data Scraping",
			"Lead Enrichment",
		],
		clientName: "7-Person Cold Email Agency",
		clientDescription:
			"A B2B cold email agency running campaigns for service providers who needed niche leads that competitors couldn't access.",
		featuredImage:
			"https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop&q=80",
		thumbnailImage:
			"https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&q=80",
		businessChallenges: [
			"Apollo lists were oversaturated and overused by competitors.",
			"Client demanded niche leads that competitors didn't have access to.",
			"Manual scraping was slow, messy, and time-consuming.",
			"Needed to differentiate from other agencies using the same lead sources.",
		],
		lastModified: new Date("2025-01-21T10:00:00.000Z"),
		howItWorks: leadGenHowItWorks,
		businessOutcomes: [
			{
				title: "19 Booked Meetings in 7 Days",
				subtitle:
					"Scraped 1,400 unique leads from a niche industry directory, enriched them with Deal Scale, and booked 19 meetings in the first week.",
			},
			{
				title: "Client Retention & Time Savings",
				subtitle:
					"Client upgraded to a 3-month retainer. Agency saved 10+ hours of manual scraping work weekly.",
			},
		],
		solutions: [
			"Scraped niche industry directory for unique leads",
			"Cleaned and normalized data using Lead Standard Format",
			"Exported 1,400 unique leads ready for enrichment",
			"Enriched and scored leads using Deal Scale",
			"Sent personalized AI follow-up campaigns",
		],
		description:
			"This gave us leads Apollo could never find. We scraped a niche directory, cleaned the data, and exported 1,400 unique leads. After enriching them in Deal Scale, we booked 19 meetings in a week. It's our new secret weapon for finding leads competitors can't access.",
		results: [
			{
				title: "Booked Meetings in Week 1",
				value: "19",
			},
			{
				title: "Unique Leads Scraped",
				value: "1,400",
			},
			{
				title: "Hours Saved Per Week",
				value: "10+",
			},
		],
		featured: true,
		redirectToContact: false,
	},
	{
		id: "sdr-revops-03",
		title:
			"We turned competitor case studies into a targeted outbound campaign.",
		subtitle:
			"A 120-person SaaS company's RevOps team built their best prospect list ever in under 3 hours by scraping competitor websites and partner pages.",
		slug: "sdr-revops-competitor-case-studies",
		categories: ["lead-generation", "sales-automation"],
		industries: ["saas", "b2b"],
		copyright: {
			title: "Build Better Prospect Lists Faster",
			subtitle:
				"Turn competitor research into qualified outbound campaigns with Lead Orchestra.",
			ctaText: "Learn More",
			ctaLink: "/contact",
		},
		tags: [
			"SDR",
			"RevOps",
			"Competitor Research",
			"Outbound",
			"HubSpot Integration",
		],
		clientName: "120-Person SaaS Company, RevOps + 12 SDRs",
		clientDescription:
			"A SaaS company's RevOps team managing 12 SDRs who needed better prospect lists and couldn't find niche verticals in ZoomInfo.",
		featuredImage:
			"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=80",
		thumbnailImage:
			"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80",
		businessChallenges: [
			"SDRs were wasting time researching prospects manually.",
			"ZoomInfo lacked niche verticals they needed for targeting.",
			"Quota was slipping due to poor lead quality.",
			"Manual research was too slow to keep up with demand.",
		],
		lastModified: new Date("2025-01-21T10:00:00.000Z"),
		howItWorks: leadGenHowItWorks,
		businessOutcomes: [
			{
				title: "27% Lift in Response Rate",
				subtitle:
					"SDR call list quality improved dramatically, resulting in 14 booked meetings in week one and a 27% increase in response rates.",
			},
			{
				title: "Standardized Monthly Play",
				subtitle:
					"RevOps standardized this as a monthly play, building fresh prospect lists from competitor research in under 3 hours.",
			},
		],
		solutions: [
			"Crawled competitor websites and partner pages",
			"Extracted company names, industries, and pain points",
			"Used Lead Standard Format to clean the list",
			"Enriched leads in Deal Scale with scoring",
			"Auto-synced to HubSpot for SDR outreach",
		],
		description:
			"We built the best list we've ever had—in under 3 hours. By scraping competitor case studies and partner pages, we found companies with the exact pain points we solve. After enriching in Deal Scale and syncing to HubSpot, our SDRs saw a 27% lift in response rates and booked 14 meetings in the first week.",
		results: [
			{
				title: "Response Rate Improvement",
				value: "27%",
			},
			{
				title: "Booked Meetings (Week 1)",
				value: "14",
			},
			{
				title: "Time to Build List",
				value: "<3 hours",
			},
		],
		featured: false,
		redirectToContact: false,
	},
	{
		id: "real-estate-investor-04",
		title:
			"We scraped FSBO listings, enriched them, and Deal Scale's AI booked 6 appointments automatically.",
		subtitle:
			"A 3-person wholesaling team automated their entire acquisition engine, from scraping FSBO listings to AI-powered follow-up that booked appointments without manual work.",
		slug: "real-estate-investor-fsbo-scraping",
		categories: ["real-estate-automation", "lead-generation"],
		industries: ["real-estate-investing", "wholesaling"],
		copyright: {
			title: "Automate Your Deal Pipeline",
			subtitle:
				"Scrape FSBO listings, enrich them, and let AI handle the follow-up automatically.",
			ctaText: "Get Started",
			ctaLink: "/contact",
		},
		tags: [
			"Real Estate",
			"Wholesaling",
			"FSBO",
			"AI Automation",
			"Deal Pipeline",
		],
		clientName: "3-Person Wholesaling Team",
		clientDescription:
			"A wholesaling team doing off-market deals who needed to automate their scraping and follow-up process.",
		featuredImage:
			"https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop&q=80",
		thumbnailImage:
			"https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&q=80",
		businessChallenges: [
			"Manual scraping was too slow to keep up with market opportunities.",
			"Skip tracing costs were too high for their budget.",
			"Follow-up was inconsistent, leading to missed deals.",
			"Couldn't scale without adding headcount.",
		],
		lastModified: new Date("2025-01-21T10:00:00.000Z"),
		howItWorks: offMarketAdvantageHowItWorks,
		businessOutcomes: [
			{
				title: "6 Appointments Booked Automatically",
				subtitle:
					"AI handled all follow-up, booking 6 appointments and resulting in 2 signed contracts with zero manual work.",
			},
			{
				title: "Complete Acquisition Engine",
				subtitle:
					"Lead Orchestra + Deal Scale became their entire acquisition engine, from scraping to enrichment to AI-powered follow-up.",
			},
		],
		solutions: [
			"Scraped FSBO listings in their target region",
			"Lead Orchestra cleaned and normalized owner and property info",
			"Pushed data directly into Deal Scale for enrichment",
			"Deal Scale enriched owners, skip traced, and ran AI calling and texting",
			"Automated appointment booking with zero manual intervention",
		],
		description:
			"The AI did the follow-up for us. We scraped FSBO listings with Lead Orchestra, cleaned the data, and pushed it into Deal Scale. The AI enriched owners, skip traced them, and ran calling and texting campaigns automatically. It booked 6 appointments and we signed 2 contracts—all without us lifting a finger. Lead Orchestra + Deal Scale is our entire acquisition engine now.",
		results: [
			{
				title: "Appointments Booked by AI",
				value: "6",
			},
			{
				title: "Contracts Signed",
				value: "2",
			},
			{
				title: "Manual Follow-up Required",
				value: "0",
			},
		],
		featured: true,
		redirectToContact: false,
	},
	{
		id: "indie-hacker-05",
		title:
			"I launched a SaaS MVP powered by Lead Orchestra scraping in 24 hours.",
		subtitle:
			"A solo founder built a market research SaaS MVP in 24 hours using Lead Orchestra's open-source scraping, securing 20 paying beta users without building scraping infrastructure.",
		slug: "indie-hacker-saas-mvp-24-hours",
		categories: ["developer-tooling", "startups"],
		industries: ["saas", "market-research"],
		copyright: {
			title: "Ship Your MVP Faster",
			subtitle:
				"Use Lead Orchestra's open-source scraping to build your SaaS without infrastructure overhead.",
			ctaText: "Get Started Free",
			ctaLink: "/contact",
		},
		tags: [
			"Indie Hacker",
			"Solo Founder",
			"MVP",
			"Open Source",
			"Market Research",
		],
		clientName: "Solo Founder, Market Research SaaS",
		clientDescription:
			"A solo founder building a market research SaaS with a non-enterprise budget who needed reliable web data without building scraping infrastructure.",
		featuredImage:
			"https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop&q=80",
		thumbnailImage:
			"https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&q=80",
		businessChallenges: [
			"Needed reliable web data for the SaaS product.",
			"Didn't want to build and maintain scraping infrastructure.",
			"Couldn't afford enterprise data APIs on a bootstrap budget.",
			"Needed to ship MVP quickly to validate the idea.",
		],
		lastModified: new Date("2025-01-21T10:00:00.000Z"),
		howItWorks: generalHowItWorks,
		businessOutcomes: [
			{
				title: "MVP Shipped in 24 Hours",
				subtitle:
					"Cloned Lead Orchestra repo, added 2 custom MCP scrapers, built workflow using Lead Standard Format, and shipped MVP in one day.",
			},
			{
				title: "20 Paying Beta Users",
				subtitle:
					"Secured 20 paying beta users with zero scraping maintenance required. Used Deal Scale to enrich and score leads automatically.",
			},
		],
		solutions: [
			"Cloned Lead Orchestra open-source repo",
			"Added 2 custom MCP scrapers for target data sources",
			"Built workflow using Lead Standard Format",
			"Exported results directly to backend",
			"Used Deal Scale to enrich and score leads automatically",
		],
		description:
			"Lead Orchestra became the backbone of my SaaS—and it cost $0 to start. I cloned the repo, added 2 custom scrapers, and shipped my MVP in 24 hours. No infrastructure to maintain, no enterprise API costs. I secured 20 paying beta users and used Deal Scale to automatically enrich and score leads. It's the perfect solution for solo founders who need reliable data without the overhead.",
		results: [
			{
				title: "Time to MVP",
				value: "24 hours",
			},
			{
				title: "Paying Beta Users",
				value: "20",
			},
			{
				title: "Scraping Maintenance Required",
				value: "0",
			},
		],
		featured: false,
		redirectToContact: false,
	},
	{
		id: "job-board-scraper-06",
		title:
			"We scraped 8 job boards and found 200 companies actively hiring. Deal Scale handled the outreach.",
		subtitle:
			"A B2B service founder automated their entire lead generation process, finding 200 hiring-intent leads and converting 3 into signed contracts.",
		slug: "job-board-scraper-saas-pipeline",
		categories: ["lead-generation", "sales-automation"],
		industries: ["b2b-services", "recruiting"],
		copyright: {
			title: "Find Hiring-Intent Leads",
			subtitle:
				"Scrape job boards to find companies actively hiring, then let Deal Scale handle the outreach automatically.",
			ctaText: "Start Scraping",
			ctaLink: "/contact",
		},
		tags: [
			"Job Boards",
			"Hiring Intent",
			"B2B Services",
			"Lead Generation",
			"AI Outreach",
		],
		clientName: "Founder, B2B Dev Staffing Service",
		clientDescription:
			"A founder selling dev staffing solutions who needed leads with hiring intent that cold lists couldn't provide.",
		featuredImage:
			"https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=800&fit=crop&q=80",
		thumbnailImage:
			"https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop&q=80",
		businessChallenges: [
			"Cold lists weren't converting because they lacked hiring intent.",
			"Needed leads from companies actively hiring developers.",
			"Manual research was too slow to keep up with demand.",
			"Spent 40+ hours per month on manual lead research.",
		],
		lastModified: new Date("2025-01-21T10:00:00.000Z"),
		howItWorks: leadGenHowItWorks,
		businessOutcomes: [
			{
				title: "200 Hiring-Intent Leads Found",
				subtitle:
					"Scraped 8 job boards to extract hiring patterns and company data, finding 200 companies actively hiring developers.",
			},
			{
				title: "3 Signed Contracts",
				subtitle:
					"After enriching and auto-follow-up via Deal Scale, generated 12 active conversations and signed 3 contracts.",
			},
		],
		solutions: [
			"Crawled 8 job boards for hiring patterns",
			"Extracted company data and hiring signals",
			"Cleaned data using Lead Standard Format",
			"Enriched leads in Deal Scale",
			"Automated follow-up via Deal Scale AI outreach",
		],
		description:
			"This automated what used to take us 40 hours per month. We scraped 8 job boards, found 200 companies actively hiring, and Deal Scale handled all the outreach. We got 12 active conversations and signed 3 contracts. It's completely transformed how we find and engage prospects.",
		results: [
			{
				title: "Hiring-Intent Leads Found",
				value: "200",
			},
			{
				title: "Active Conversations",
				value: "12",
			},
			{
				title: "Signed Contracts",
				value: "3",
			},
		],
		featured: false,
		redirectToContact: false,
	},
];

export const caseStudyCategories: Category[] = [
	{ id: "all", name: "All" },
	...Array.from(new Set(caseStudies.flatMap((study) => study.categories))).map(
		(category) => ({
			id: category,
			name: category.charAt(0).toUpperCase() + category.slice(1),
		}),
	),
];
