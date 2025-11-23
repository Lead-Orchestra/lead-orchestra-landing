import { ProductCategory, type ProductType } from "@/types/products";

export const vaProducts: ProductType[] = [
	{
		id: "virtual-assistants-marketplace",
		name: "Virtual Assistants",
		description:
			"Connect with professional virtual assistants specializing in lead orchestration, CRM management, and outreach automation. Apply to become a VA or hire experienced assistants for your team.",
		price: 0,
		sku: "DS-VA-MARKETPLACE",
		slug: "virtual-assistants",
		images: ["/products/vas.png"],
		reviews: [],
		categories: [
			ProductCategory.Agents,
			ProductCategory.Monetize,
			ProductCategory.AddOn,
		],
		types: [],
		colors: [],
		sizes: [],
	},
];
