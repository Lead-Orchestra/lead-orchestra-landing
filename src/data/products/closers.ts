import {
	LicenseType,
	ProductCategory,
	type ProductType,
} from "@/types/products";

export const closerProducts: ProductType[] = [
	{
		id: "virtual-assistants-marketplace",
		name: "Virtual Assistants (VA's)",
		price: 0, // Free to browse, application required
		sku: "LO-VA-MARKETPLACE",
		slug: "virtual-assistants",
		licenseName: LicenseType.Proprietary,
		description:
			"Connect with skilled virtual assistants who specialize in data entry, lead processing, CRM management, and scraping workflow support. Apply to become a VA or hire experienced assistants for your Lead Orchestra operations. Our marketplace connects you with vetted professionals ready to help scale your data operations.",
		categories: [
			ProductCategory.RemoteClosers, // Keep category ID for backward compatibility
			ProductCategory.Monetize,
			ProductCategory.AddOn,
		],
		images: [
			"https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop&q=80",
		],
		types: [],
		reviews: [],
		colors: [],
		sizes: [],
		faqs: [
			{
				question: "What is a Virtual Assistant (VA)?",
				answer:
					"Virtual Assistants are skilled professionals who specialize in data operations, lead processing, CRM management, and supporting Lead Orchestra scraping workflows. They help you scale your data operations without hiring full-time staff.",
			},
			{
				question: "How do I become a Virtual Assistant?",
				answer:
					"Click on the Virtual Assistants card to apply. We'll review your application, data processing experience, and skills. Once approved, you'll be added to our marketplace where clients can book your services.",
			},
			{
				question: "What are the requirements to become a VA?",
				answer:
					"Requirements include experience with data entry, CRM systems, lead processing, and familiarity with scraping workflows. Strong communication skills and availability for remote work are essential.",
			},
			{
				question: "How does the booking system work?",
				answer:
					"Once you're approved as a VA, clients can browse your profile, see your ratings and experience, and book you for their data operations. You'll receive notifications and can accept or decline assignments based on your availability.",
			},
		],
	},
];
