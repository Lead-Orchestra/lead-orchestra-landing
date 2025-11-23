import type { Event } from "@/types/event";
// Current date for comparison
const currentDate = new Date();

export const events: Event[] = [
	{
		id: "1",
		slug: "web-scraping-summit",
		title: "Web Scraping Summit",
		date: "2025-04-24",
		time: "09:00 - 17:00",
		description:
			"A hands-on conference for developers and data engineers at all levels, from beginners to experts, with a strong focus on web scraping techniques, anti-bot strategies, and data pipeline automation. Learn from industry leaders about building scalable scraping infrastructure.",
		thumbnailImage:
			"https://www.housingwire.com/wp-content/uploads/2024/03/The-main-stage-at-HousingWires-2023-housing-conference_2.png?w=1024",
		externalUrl: "https://webscrapingsummit.com/",
		category: "conference",
		location: "San Francisco, CA",
		isFeatured: true,
		accessType: "external",
		attendanceType: "in-person",
	},
	{
		id: "2",
		slug: "data-engineering-conference",
		title: "Data Engineering Conference",
		date: "2025-01-22",
		time: "09:00 - 18:00",
		description:
			"A premier event for data engineers, developers, and data teams to network with 1,200+ professionals, including data architects and engineering leaders, to discover new tools and techniques for building robust data pipelines and ingestion systems.",
		thumbnailImage:
			"https://www.housingwire.com/wp-content/uploads/2024/03/The-main-stage-at-HousingWires-2023-housing-conference_2.png?w=1024",
		externalUrl: "https://www.dataengineeringconf.com/",
		category: "conference",
		location: "Seattle, WA",
		isFeatured: true,
		accessType: "external",
		attendanceType: "in-person",
	},
	{
		id: "3",
		slug: "api-world",
		title: "API World: Developer & Integration Summit",
		date: "2025-03-10",
		time: "10:00 - 18:00",
		description:
			"The must-attend event for developers building APIs and integrations. Explore how MCP protocol, webhooks, and automation tools are transforming data workflows. Perfect for teams building scraping APIs and data aggregation platforms.",
		thumbnailImage:
			"https://www.housingwire.com/wp-content/uploads/2024/03/The-main-stage-at-HousingWires-2023-housing-conference_2.png?w=1024",
		externalUrl: "https://apiworld.co/",
		category: "proptech",
		location: "Las Vegas, NV",
		isFeatured: true,
		accessType: "external",
		attendanceType: "hybrid",
	},
	{
		id: "4",
		slug: "lead-gen-agency-summit",
		title: "Lead Gen Agency Summit",
		date: "2025-04-06",
		time: "09:00 - 17:00",
		description:
			"Connect with lead generation agencies, data teams, and growth engineers to share best practices on scraping strategies, data normalization, CRM integration, and building scalable lead acquisition pipelines.",
		thumbnailImage:
			"https://www.housingwire.com/wp-content/uploads/2024/03/The-main-stage-at-HousingWires-2023-housing-conference_2.png?w=1024",
		externalUrl: "https://leadgenagencysummit.com/",
		category: "summit",
		location: "Austin, TX",
		isFeatured: false,
		accessType: "external",
		attendanceType: "in-person",
	},
	{
		id: "5",
		slug: "open-source-data-tools-meetup",
		title: "Open Source Data Tools Meetup",
		date: "2025-01-22",
		time: "09:30 - 17:30",
		description:
			"A leading event for developers and data engineers focused on open-source scraping tools, MCP plugins, data normalization libraries, and building developer-friendly data infrastructure. Network with contributors and users of popular open-source projects.",
		thumbnailImage:
			"https://www.housingwire.com/wp-content/uploads/2024/03/The-main-stage-at-HousingWires-2023-housing-conference_2.png?w=1024",
		externalUrl: "https://opensourcedatatools.com/",
		category: "conference",
		location: "New York, NY",
		isFeatured: true,
		accessType: "external",
		attendanceType: "hybrid",
	},
	{
		id: "6",
		slug: "automation-workflow-conference",
		title: "Automation & Workflow Conference",
		date: "2025-06-02",
		time: "09:00 - 17:00",
		description:
			"A key event where automation engineers and workflow platform builders share strategies for building scalable data pipelines. Learn about integrating scraping jobs with n8n, Make, Zapier, and Kestra for end-to-end automation.",
		thumbnailImage:
			"https://www.housingwire.com/wp-content/uploads/2024/03/The-main-stage-at-HousingWires-2023-housing-conference_2.png?w=1024",
		externalUrl: "https://automationworkflowconf.com/",
		category: "conference",
		location: "Portland, OR",
		isFeatured: false,
		accessType: "external",
		attendanceType: "in-person",
	},
	{
		id: "7",
		slug: "developer-tools-hackathon",
		title: "Developer Tools Hackathon",
		date: "2025-02-01",
		time: "08:00 - 18:00",
		description:
			"An essential event for developers building scraping tools, MCP plugins, and data processing libraries. Build custom scrapers, contribute to open-source projects, and network with other developers working on data infrastructure.",
		thumbnailImage:
			"https://www.housingwire.com/wp-content/uploads/2024/03/The-main-stage-at-HousingWires-2023-housing-conference_2.png?w=1024",
		externalUrl: "https://devtoolshackathon.com/",
		category: "networking",
		location: "Denver, CO",
		isFeatured: false,
		accessType: "external",
		attendanceType: "in-person",
	},
	{
		id: "8",
		slug: "data-ingestion-workshop",
		title: "Data Ingestion & ETL Workshop",
		date: "2025-10-21",
		time: "09:00 - 18:00",
		description:
			"The largest data engineering workshop, bringing together data teams, engineers, and platform builders to cover innovations in data ingestion, ETL pipelines, and building scalable data infrastructure for scraping and processing large datasets.",
		thumbnailImage:
			"https://www.cretech.com/wp-content/uploads/2024/01/Cretech-NYC.png",
		externalUrl: "https://dataingestionworkshop.com/",
		category: "proptech",
		location: "Boston, MA",
		isFeatured: false,
		accessType: "external",
		attendanceType: "hybrid",
	},
];
// Helper functions to separate upcoming and past events
export const getUpcomingEvents = (): Event[] => {
	return events
		.filter((event) => new Date(event.date) >= currentDate)
		.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
};

export const getPastEvents = (): Event[] => {
	return events
		.filter((event) => new Date(event.date) < currentDate)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};
export const eventCategories = [
	{ id: "all", name: "All Events" },
	...Array.from(new Set(events.map((event) => event.category))).map(
		(category) => ({
			id: category,
			name: `${category.charAt(0).toUpperCase() + category.slice(1)}s`,
		}),
	),
];
