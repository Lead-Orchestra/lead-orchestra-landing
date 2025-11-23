import type { ProductType } from "@/types/products";
import { LicenseType, ProductCategory } from "@/types/products";
import { ABTest } from "../../types/testing/index";
import {
	buyerLeadNurtureWorkflowABTests,
	motivatedSellerWorkflowABTests,
	openHouseWorkflowABTests,
} from "./copy";

// Extended type for workflow products
export interface WorkflowProductType extends ProductType {
	workflowId: string;
	userId: string;
}

export const workflowProducts: WorkflowProductType[] = [
	{
		id: "zillow-scraping-workflow",
		name: "Zillow Scraping Workflow",
		abTest: motivatedSellerWorkflowABTests[0],
		price: 199,
		sku: "WF-ZILLOW-SCRAPE",
		slug: "zillow-scraping-workflow",
		licenseName: LicenseType.Proprietary,
		description:
			"Pre-configured Lead Orchestra workflow for scraping Zillow listings. Includes MCP plugin setup, data normalization, and automatic export to CRM. Get started scraping Zillow in minutes.",
		categories: [ProductCategory.Workflows, ProductCategory.Automation],
		images: ["/products/workflows.png"],
		types: [
			{ name: "Standard", value: "standard", price: 199 },
			{ name: "Premium", value: "premium", price: 399 },
		],
		reviews: [],
		colors: [],
		sizes: [],
		faqs: [
			{
				question: "What does this workflow include?",
				answer:
					"This workflow includes a pre-configured MCP plugin for Zillow, data normalization settings, and automatic export to your CRM. Just connect your Lead Orchestra instance and start scraping.",
			},
		],
		workflowId: "wf-001-zillow",
		userId: "user-assign-on-purchase",
	},
	{
		id: "linkedin-scraping-workflow",
		name: "LinkedIn Scraping Workflow",
		abTest: buyerLeadNurtureWorkflowABTests[0],
		price: 249,
		sku: "WF-LINKEDIN-SCRAPE",
		slug: "linkedin-scraping-workflow",
		licenseName: LicenseType.Proprietary,
		description:
			"Automate LinkedIn company and profile scraping with Lead Orchestra. Extract company data, employee information, and contact details. Perfect for B2B lead generation.",
		categories: [ProductCategory.Workflows, ProductCategory.Automation],
		images: ["/products/workflows.png"],
		types: [
			{ name: "Standard", value: "standard", price: 249 },
			{ name: "Premium", value: "premium", price: 499 },
		],
		reviews: [],
		colors: [],
		sizes: [],
		faqs: [
			{
				question: "What data can I scrape from LinkedIn?",
				answer:
					"This workflow allows you to scrape company pages, employee profiles, job postings, and contact information. All data is normalized to Lead Standard Format (LSF) for easy export.",
			},
		],
		workflowId: "wf-002-linkedin",
		userId: "user-assign-on-purchase",
	},
	{
		id: "multi-source-scraping-workflow",
		name: "Multi-Source Scraping Workflow",
		price: 399,
		sku: "WF-MULTI-SOURCE",
		slug: "multi-source-scraping-workflow",
		abTest: openHouseWorkflowABTests[0],
		licenseName: LicenseType.Proprietary,
		description:
			"Scrape from multiple sources simultaneously (Zillow, Realtor, LinkedIn, MLS) with unified data normalization and export. Perfect for agencies and data teams scaling their lead generation.",
		categories: [ProductCategory.Workflows, ProductCategory.Automation],
		images: ["/products/workflows.png"],
		types: [{ name: "Standard", value: "standard", price: 399 }],
		reviews: [],
		colors: [],
		sizes: [],
		faqs: [
			{
				question: "What sources are included?",
				answer:
					"This workflow includes pre-configured MCP plugins for Zillow, Realtor.com, LinkedIn, and MLS. All scraped data is automatically normalized to LSF and can be exported to CRM, CSV, or Database.",
			},
		],
		workflowId: "wf-003-multi-source",
		userId: "user-assign-on-purchase",
	},
];
