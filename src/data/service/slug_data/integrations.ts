import type { TechStack } from "@/types/service/services";
import freedomsoftSvg from "../../../assets/svgs/integrations/FreedomSoft.svg";
import gohighlevelSvg from "../../../assets/svgs/integrations/GHL.svg";
import reisiftSvg from "../../../assets/svgs/integrations/REISift.svg";
import resimpliSvg from "../../../assets/svgs/integrations/REsimpli.svg";
import dialerSvg from "../../../assets/svgs/integrations/dialer.svg";
import googleSheetsSvg from "../../../assets/svgs/integrations/google-sheets.svg";
import instantlySvg from "../../../assets/svgs/integrations/instantly.svg";
import podioSvg from "../../../assets/svgs/integrations/podio.svg";
import salesforceSvg from "../../../assets/svgs/integrations/salesforce.svg";
import superhumanSvg from "../../../assets/svgs/integrations/superhuman.svg";
import universalSvg from "../../../assets/svgs/integrations/universal.svg";
import zapierSvg from "../../../assets/svgs/integrations/zapier.svg";

export const leadGenIntegrations: TechStack[] = [
	{
		category: "Universal Connectivity",
		libraries: [
			{
				name: "CSV / JSON Export",
				description:
					"Export scraped leads as CSV or JSON files, making it compatible with virtually any CRM, database, or data platform. Perfect for manual imports and data analysis.",
				customSvg: universalSvg,
			},
			{
				name: "Database Export",
				description:
					"Directly export normalized leads to PostgreSQL, MySQL, MongoDB, or any database. Automated schema mapping and bulk insert for high-performance data ingestion.",
				customSvg: universalSvg,
			},
			{
				name: "S3 / Cloud Storage",
				description:
					"Export scraped data directly to AWS S3, Google Cloud Storage, or Azure Blob Storage. Perfect for data lakes, ETL pipelines, and enterprise data workflows.",
				customSvg: universalSvg,
			},
			{
				name: "REST API & Webhooks",
				description:
					"Real-time data export via REST API or webhook triggers. Integrate Lead Orchestra with any system that accepts HTTP requests. Custom payload formatting and authentication.",
				customSvg: universalSvg,
			},
		],
	},
	{
		category: "Popular CRM & Marketing Platforms",
		libraries: [
			{
				name: "Salesforce",
				description:
					"Export normalized leads directly to Salesforce. Automatic field mapping, duplicate detection, and bulk import for enterprise sales teams.",
				customSvg: salesforceSvg,
			},
			{
				name: "HubSpot",
				description:
					"Sync scraped leads to HubSpot CRM with automatic contact creation, deal association, and custom property mapping. Real-time webhook integration available.",
				customSvg: gohighlevelSvg,
			},
			{
				name: "GoHighLevel",
				description:
					"Export lead lists to GoHighLevel for automated marketing funnels, SMS campaigns, and client communication workflows.",
				customSvg: gohighlevelSvg,
			},
			{
				name: "Pipedrive",
				description:
					"Import scraped leads into Pipedrive with automatic pipeline assignment and activity tracking. Perfect for sales teams managing lead flow.",
				customSvg: podioSvg,
			},
		],
	},
	{
		category: "Workflow Engines & Automation",
		libraries: [
			{
				name: "n8n",
				description:
					"Connect Lead Orchestra to n8n workflows for automated scraping jobs, data processing, and multi-step automation. Pre-built templates available.",
				customSvg: zapierSvg,
			},
			{
				name: "Zapier",
				description:
					"Connect Lead Orchestra to thousands of apps via Zapier. Automatically send scraped leads to your CRM, trigger marketing campaigns, or sync data across platforms.",
				customSvg: zapierSvg,
			},
			{
				name: "Make (Integromat)",
				description:
					"Build complex automation workflows with Make. Connect Lead Orchestra scraping jobs to data processing, enrichment, and export pipelines.",
				customSvg: zapierSvg,
			},
			{
				name: "Kestra",
				description:
					"Orchestrate Lead Orchestra scraping jobs with Kestra workflows. Schedule automated scraping, data normalization, and export tasks with enterprise-grade reliability.",
				customSvg: zapierSvg,
			},
			{
				name: "Google Sheets / Excel",
				description:
					"Export scraped leads directly to Google Sheets or Microsoft Excel for easy analysis, sharing, and manual tracking. Perfect for quick data review.",
				customSvg: googleSheetsSvg,
			},
		],
	},
];

export const aiSocialMediaOutreachIntegrations: TechStack[] = [
	{
		category: "Social Media Platforms",
		libraries: [
			{
				name: "LinkedIn",
				description:
					"Leverage AI for targeted B2B prospecting, investor networking, and identifying professional sellers or buyers.",
				lucideIcon: "Linkedin", // Ensure 'Linkedin' is a valid LucideIcon name in your IconName type
			},
			{
				name: "Facebook",
				description:
					"Automate outreach in relevant groups and identify local sellers/buyers based on activity and profile data.",
				lucideIcon: "Facebook", // Ensure 'Facebook' is a valid LucideIcon name
			},
			{
				name: "Instagram",
				description:
					"Engage visually with prospects, identify lifestyle-driven sellers/buyers, and connect with local influencers or property showcases.",
				lucideIcon: "Instagram", // Ensure 'Instagram' is a valid LucideIcon name
			},
		],
	},
	{
		category: "Deal Scale Core Integrations",
		libraries: [
			{
				name: "Deal Scale CRM Sync",
				description:
					"Automatically sync new leads and interactions from social media outreach to your Deal Scale CRM or connected third-party CRM.",
				lucideIcon: "DatabaseZap", // Ensure 'DatabaseZap' is valid
			},
			{
				name: "AI Virtual Agent Handoff",
				description:
					"Seamlessly transition warm social media leads to Deal Scale's AI Virtual Agents for automated call follow-ups and appointment setting.",
				lucideIcon: "PhoneForwarded", // Ensure 'PhoneForwarded' is valid, or use an alternative like "PhoneCall" or "Bot"
			},
		],
	},
];

export const embeddableAIChatbotIntegrations: TechStack[] = [
	{
		category: "Website Integration",
		libraries: [
			{
				name: "HTML Embed Code",
				description:
					"Simple JavaScript snippet for easy embedding on any website.",
				lucideIcon: "Code2",
			}, // Assuming Code2 is valid
		],
	},
	{
		category: "Deal Scale Core Platform",
		libraries: [
			{
				name: "Deal Scale CRM",
				description:
					"Automatic synchronization of lead data, conversation history, and qualification status.",
				lucideIcon: "DatabaseZap",
			},
			{
				name: "Deal Scale Calendar",
				description:
					"Direct appointment booking into connected sales team calendars.",
				lucideIcon: "CalendarPlus",
			},
			{
				name: "Deal Scale AI Conversation Engine",
				description:
					"Powers the natural language understanding and dialogue management of the chatbot.",
				lucideIcon: "BrainCircuit",
			},
			{
				name: "Deal Scale Notifications",
				description:
					"Real-time alerts to sales agents for hot leads or live transfer requests.",
				lucideIcon: "Bell",
			},
		],
	},
	{
		category: "Optional Third-Party Integrations",
		libraries: [
			{
				name: "Google Analytics",
				description:
					"Track chatbot interactions and conversions within your website analytics.",
				lucideIcon: "BarChartHorizontal",
			}, // Assuming valid icon
			{
				name: "Zapier / Webhooks",
				description:
					"Connect chatbot events to thousands of other applications for custom workflows.",
				lucideIcon: "Zap",
			},
		],
	},
];

export const aiSocialMediaIntegrations: TechStack[] = [
	{
		category: "Official Social Platform APIs",
		libraries: [
			{
				name: "Meta for Developers",
				description:
					"Our system is built on the official, compliant Messenger API from Meta, ensuring reliable and safe integration with Facebook and Instagram.",
				customSvg: "/logos/meta-logo.svg",
			},
		],
	},
	{
		category: "Integrated CRM",
		libraries: [
			{
				name: "Deal Scale CRM",
				description:
					"All qualified leads and conversation data are automatically synced to your native Deal Scale CRM, creating a unified system of record.",
				customSvg: "/logos/dealscale-logo.svg",
			},
		],
	},
];
