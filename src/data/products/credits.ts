import {
	LicenseType,
	ProductCategory,
	type ProductType,
	type Review,
} from "@/types/products";
import type { ABTestCopy } from "@/types/testing";
import {
	AIConversationCreditsABTest,
	abTestExample,
	skipTraceCreditsABTests,
} from "./copy";
import { reviews } from "./reviews";
import { sizingChart } from "./sizingChart";

export const creditProducts: ProductType[] = [
	{
		id: "ai-credits-bundle",
		name: "Lead Credits",
		price: 100, // Starting price for the smallest bundle
		sku: "DS-AI-CRED",
		slug: "lead-credits",
		licenseName: LicenseType.Proprietary,
		abTest: AIConversationCreditsABTest,
		description:
			"Power your lead scraping and data processing workflows with lead credits. Each credit is used for data operations like scraping leads, normalizing data, and exporting to your CRM. Keep your pipeline automation running smoothly by topping up your credits anytime.",
		categories: [
			ProductCategory.Credits,
			ProductCategory.AddOn,
			ProductCategory.Automation,
		],
		images: ["/products/coins.png"],
		// Different bundle sizes are offered as 'types'
		types: [
			{ name: "1,000", value: "1k-credits", price: 100 },
			{ name: "5,000", value: "5k-credits", price: 450 }, // Bulk discount
			{ name: "15,000", value: "15k-credits", price: 1200 }, // Better discount
		],
		reviews: [], // * Required by ProductType
		colors: [], // * Required by ProductType
		sizes: [], // * Required by ProductType
		faqs: [
			{
				question: "What is a Lead Credit used for?",
				answer:
					"Lead Credits are consumed during data operations managed by your scraping jobs. This includes scraping leads from websites, normalizing data, and exporting to your CRM or other systems.",
			},
			{
				question: "Do these credits expire?",
				answer:
					"Purchased credits do not expire and will roll over each month as long as you have an active Lead Orchestra account.",
			},
		],
	},
	{
		id: "lead-credits-bundle",
		name: "Targeted Lead Credits",
		price: 200, // Starting price
		sku: "DS-LEAD-CRED",
		slug: "targeted-lead-credits",
		licenseName: LicenseType.Proprietary,
		description:
			"Purchase new, high-quality leads directly from our database of over 140M+ properties. Use Lead Credits to build hyper-targeted lists based on your specific investment criteria, such as location, property type, and owner details.",
		categories: [
			ProductCategory.Credits,
			ProductCategory.AddOn,
			ProductCategory.Leads,
		],
		images: ["/products/coins.png"],
		types: [
			{ name: "50", value: "50-leads", price: 200 },
			{ name: "200", value: "200-leads", price: 700 },
			{ name: "500", value: "500-leads", price: 1500 },
		],
		reviews: [], // * Required by ProductType
		colors: [], // * Required by ProductType
		sizes: [], // * Required by ProductType
		faqs: [
			{
				question: "What information is included with each lead?",
				answer:
					"Each lead includes the property address, owner's name (when available), and basic property characteristics. Contact information is included as part of the lead data when available.",
			},
			{
				question: "Can I filter the leads I want to purchase?",
				answer:
					"Yes. Our platform allows you to apply various filters to define your ideal customer profile (ICP) before purchasing a list, ensuring you only pay for leads that match your strategy.",
			},
		],
	},
];
