import { DEFAULT_PERSONA_KEY } from "@/data/personas/catalog";
import type { PersonaKey } from "@/data/personas/catalog";
import type { Testimonial } from "@/types/testimonial";

export interface PersonaTestimonial extends Testimonial {
	persona: PersonaKey;
}

export const personaTestimonials: Record<PersonaKey, PersonaTestimonial[]> = {
	developer: [
		{
			persona: "developer",
			id: 10,
			name: "Alex Chen",
			role: "Senior Engineer, Data Platform Team",
			content:
				"Lead Orchestra is the first scraping platform that feels like it was built for developers. I stopped rebuilding scrapers for every project. The MCP plugins, CLI, and SDKs make it trivial to scrape any source and export to our stack. Open-source means full control.",
			problem:
				"We were rebuilding scrapers and glue code for every project. Each new data source meant weeks of engineering time. Our scraping infrastructure was fragile and required constant maintenance.",
			solution:
				"Lead Orchestra's MCP plugins and Playwright engine let us scrape any source in minutes. The CLI and SDKs integrate seamlessly into our workflows. We focus on building features instead of scraping infrastructure.",
			rating: 5,
			company: "Data Platform Team",
		},
		{
			persona: "developer",
			id: 11,
			name: "Samira Patel",
			role: "Full-Stack Developer, Indie Hacker",
			content:
				"As a solo developer, Lead Orchestra replaced weeks of scraping work with a few MCP plugin calls. The open-source nature means no vendor lock-in, and the CLI makes it easy to automate scraping jobs. I can focus on building my product instead of maintaining scrapers.",
			problem:
				"Building scrapers from scratch for every project was eating into my development time. I needed a solution that worked out of the box without enterprise overhead.",
			solution:
				"Lead Orchestra's pre-built MCP plugins and simple CLI let me scrape any source quickly. The data normalization and export options integrate with my stack. I saved weeks of engineering time.",
			rating: 5,
			company: "Indie Hacker",
		},
	],
	agency: [
		{
			persona: "agency",
			id: 12,
			name: "Taylor Morgan",
			role: "Founder, Growth Marketing Agency",
			content:
				"Lead Orchestra lets us offer scraping as a service to clients. White-label options and custom pipelines mean we can deliver unique lead datasets competitors can't access. The API and webhooks integrate seamlessly with our client systems.",
			problem:
				"We were using the same Apollo lists as every other agency. Premium scraping APIs were eating into profit margins, and we couldn't find unique leads for clients.",
			solution:
				"Lead Orchestra's open-source scraping and white-label options let us scrape niche sources competitors ignore. We offer scraping as a service, creating new revenue streams. Client retention improved with unique datasets.",
			rating: 5,
			company: "Growth Marketing Agency",
		},
		{
			persona: "agency",
			id: 13,
			name: "Jordan Kim",
			role: "Lead Gen Director, Digital Agency",
			content:
				"Lead Orchestra transformed how we deliver lead generation services. We build custom scraping pipelines for each client using pre-built plugins or custom scrapers. Export to any format means seamless integration with client systems.",
			problem:
				"Managing scraping pipelines for multiple clients was complex. We needed a solution that could scale without scaling costs or engineering overhead.",
			solution:
				"Lead Orchestra's workspace features organize scraping jobs by client. Each client gets custom scrapers and export destinations. We save 20-40 hours per week per client with automated scraping.",
			rating: 5,
			company: "Digital Agency",
		},
	],
	startup: [
		{
			persona: "startup",
			id: 14,
			name: "Riley Davis",
			role: "CTO, Early-Stage SaaS Startup",
			content:
				"Lead Orchestra let us add scraping to our MVP without infrastructure overhead. The free tier meant we could validate needs before scaling. Focus on product-market fit, not scraping infrastructure.",
			problem:
				"We were spending engineering time on data ingestion instead of core features. Enterprise tools were too expensive and compliance-heavy for our stage.",
			solution:
				"Lead Orchestra's open-source scraping and free tier let us validate scraping needs quickly. MCP plugins and SDKs integrate with our stack. We launched faster without vendor lock-in.",
			rating: 5,
			company: "Early-Stage SaaS Startup",
		},
		{
			persona: "startup",
			id: 15,
			name: "Casey Martinez",
			role: "Founder, B2B Data Startup",
			content:
				"Lead Orchestra is perfect for startups who need scraping without enterprise overhead. The free tier, MCP plugins, and simple API let us build data pipelines fast. We focus on product-market fit while Lead Orchestra handles scraping infrastructure.",
			problem:
				"Our MVP was delayed by infrastructure work. We needed scraping but couldn't afford enterprise tools or burn runway on vendor costs.",
			solution:
				"Lead Orchestra's free tier and open-source approach let us add scraping without upfront costs. As we scale, we can self-host for full control. We launched faster and saved months of engineering time.",
			rating: 5,
			company: "B2B Data Startup",
		},
	],
	enterprise: [
		{
			persona: "enterprise",
			id: 16,
			name: "Morgan Lee",
			role: "VP of Data Engineering, Enterprise Corp",
			content:
				"Lead Orchestra gives us full control with self-hosting and enterprise licensing. The MCP API aggregator unifies scraping from multiple sources. SOC2/ISO compliance modules and audit trails meet our enterprise requirements.",
			problem:
				"We needed custom scrapers with enterprise compliance. Managing distributed scraping infrastructure and integrating with existing data pipelines was complex.",
			solution:
				"Lead Orchestra's self-hosted enterprise licensing gives us full control. The MCP API aggregator provides a unified interface for all sources. Seamless integration with our existing stack and compliance built-in.",
			rating: 5,
			company: "Enterprise Corp",
		},
		{
			persona: "enterprise",
			id: 17,
			name: "Drew Anderson",
			role: "Director of Data Operations, Fortune 500",
			content:
				"Lead Orchestra reduced our data acquisition costs by 60-80% compared to list providers. Self-hosting eliminates vendor lock-in, and the API integrates with Salesforce, HubSpot Enterprise, and Microsoft Dynamics. Central analytics track activity across all departments.",
			problem:
				"Data acquisition costs were high, and vendor lock-in limited flexibility. We needed a solution that could scale across departments with full compliance and control.",
			solution:
				"Lead Orchestra's self-hosted platform gives us full control and eliminates vendor dependencies. Department-specific workspaces with custom export destinations. Typical ROI is 5× through reduced costs and faster data pipelines.",
			rating: 5,
			company: "Fortune 500",
		},
	],
	investor: [
		{
			persona: "investor",
			id: 1,
			name: "Ava Moretti",
			role: "Principal, Moretti Capital Holdings",
			content:
				"Lead Orchestra transformed our data pipeline almost overnight. It is the first scraping tool that genuinely adds capacity instead of adding complexity. We scrape property data from Zillow and Realtor, normalize it automatically, and export to our deal pipeline—all without maintaining fragile scripts.",
			problem:
				"Our analysts were overwhelmed by inconsistent lead sources, manual data extraction, and scraping scripts that broke constantly. We were losing 3 to 5 solid opportunities every month because we couldn't get fresh data fast enough.",
			solution:
				"Lead Orchestra centralized our scraping through the MCP API aggregator, automatic data normalization, and flexible export options. We cut our data acquisition time by more than 50 percent and increased high quality deal flow across three markets with fresh, unique leads.",
			rating: 5,
			company: "Moretti Capital Holdings",
		},
		{
			persona: "investor",
			id: 2,
			name: "Raj Patel",
			role: "Managing Director, Horizon Equity Investments",
			content:
				"As a multi market investor, Lead Orchestra is the closest thing to having a full time data engineer running 24 hours a day. We set up automated scraping jobs for each market, and fresh property data flows into our pipeline automatically.",
			problem:
				"We were drowning in manual data entry and inconsistent scraping. Even with a strong team, we missed time sensitive off market opportunities because our data pipeline was too slow and unreliable.",
			solution:
				"Lead Orchestra's automated scraping jobs, data normalization layer, and export to CRM gave us reliable daily data flow. Our data acquisition costs dropped by nearly 40 percent and our pipeline is more predictable than ever with fresh leads.",
			rating: 5,
			company: "Horizon Equity Investments",
		},
		{
			persona: "investor",
			id: 3,
			name: "Sophia Kim",
			role: "Lead Acquisitions Strategist, Kim Equity Partners",
			content:
				"I recommend Lead Orchestra to every serious investor. It is built for fast moving acquisitions teams that need reliable data pipelines and consistent fresh leads. The open-source nature means we have full control over our data.",
			problem:
				"We were losing track of data sources and spending too much on list providers, especially in high volume weeks. Stale data cost us competitive deals in multiple markets.",
			solution:
				"Lead Orchestra's unified scraping interface, automatic normalization, and export capabilities gave us reliable daily deal flow. Our data quality increased by roughly 27 percent in the first month, and we're getting leads no one else has.",
			rating: 5,
			company: "Kim Equity Partners",
		},
	],
	wholesaler: [
		{
			persona: "wholesaler",
			id: 4,
			name: "Jordan Alvarez",
			role: "Founder, Alvarez Off Market Group",
			content:
				"Lead Orchestra automated our lead scraping more effectively than any list provider, manual extraction, or VA team we ever used. We scrape property listings from Zillow, Realtor, and MLS, normalize the data automatically, and export to our deal tracker—all in minutes.",
			problem:
				"Our lead sources were scattered across multiple list providers and manual extraction, leading to inconsistent data quality and high costs. We were constantly paying for stale, oversold lists.",
			solution:
				"Lead Orchestra unified our scraping from multiple sources, automatic data normalization, and export to our pipeline. Our lead acquisition costs dropped by more than 30 percent in 60 days, and we're getting fresh leads no one else has.",
			rating: 5,
			company: "Alvarez Off Market Group",
		},
		{
			persona: "wholesaler",
			id: 5,
			name: "Marcus Bishop",
			role: "CEO, Bishop Property Solutions",
			content:
				"My wholesaling business finally feels scalable. Lead Orchestra replaced inconsistent manual data extraction with a predictable automated scraping system. We set up daily scraping jobs, and fresh property data flows into our pipeline automatically.",
			problem:
				"Fast moving deals slipped through the cracks because we couldn't get fresh property data quickly enough. Our manual scraping was slow and unreliable.",
			solution:
				"Lead Orchestra's automated scraping jobs make data extraction instant, and the normalization layer ensures consistent data quality. We secured 4 contracts in the first two weeks using fresh leads we scraped ourselves.",
			rating: 5,
			company: "Bishop Property Solutions",
		},
		{
			persona: "wholesaler",
			id: 6,
			name: "Lila Torres",
			role: "Co Founder, Torres Home Buyers",
			content:
				"Lead Orchestra feels like hiring a full data engineering team without the overhead. It is incredibly consistent and removes all guesswork from lead acquisition. We scrape, normalize, and export—that's it.",
			problem:
				"Lead intake was slow, list providers delivered inconsistent quality, and we were losing momentum because we couldn't get fresh data fast enough.",
			solution:
				"Lead Orchestra's automated scraping and data normalization kept our entire pipeline fed with fresh leads. We increased our lead volume by more than 50 percent and our deal flow stabilized immediately with unique, high-quality data.",
			rating: 5,
			company: "Torres Home Buyers",
		},
	],
	agent: [
		{
			persona: "agent",
			id: 7,
			name: "Maya Thompson",
			role: "Top Producing Agent, Thompson and Co.",
			content:
				"Lead Orchestra is like having a personal data engineer working behind the scenes. I scrape listing data from Zillow and Realtor, normalize it automatically, and export to my CRM. My pipeline has never been this active with fresh, unique leads.",
			problem:
				"I could not keep up with finding new listings and extracting property data during peak season. Opportunities were slipping away because I was spending too much time on manual data entry.",
			solution:
				"Lead Orchestra scrapes listings instantly, normalizes the data automatically, and exports to my CRM. I set up daily scraping jobs, and fresh property data flows into my pipeline automatically. My lead volume doubled within 30 days.",
			rating: 5,
			company: "Thompson and Co.",
		},
		{
			persona: "agent",
			id: 8,
			name: "Chris Delgado",
			role: "Realtor, Delgado Realty Group",
			content:
				"I have tried every list provider and scraping tool, but Lead Orchestra is the only platform that keeps my data pipeline moving automatically without constant maintenance. The MCP plugins make it easy to add new sources.",
			problem:
				"Manual data extraction and inconsistent scraping scripts slowed me down and cost me listing opportunities. List providers sold me stale data everyone else already had.",
			solution:
				"Lead Orchestra scrapes any source, normalizes every lead automatically, and exports to my systems. I spend my time meeting clients instead of maintaining scrapers or buying stale lists.",
			rating: 5,
			company: "Delgado Realty Group",
		},
		{
			persona: "agent",
			id: 9,
			name: "Rebecca Shaw",
			role: "Associate Broker, Shaw Realty Advisors",
			content:
				"Lead Orchestra supercharged my listing pipeline and helped me find more seller opportunities in a competitive market. I scrape fresh property data that no one else has access to.",
			problem:
				"My data sources were too slow and competing agents beat me to new listings. My lead acquisition was inconsistent on busy weeks because I relied on list providers.",
			solution:
				"Lead Orchestra's automated scraping, data normalization, and export capabilities helped me get fresh property data faster. My listing opportunities increased by 35 percent in the first month with unique leads I scraped myself.",
			rating: 5,
			company: "Shaw Realty Advisors",
		},
	],
	founder: [],
	loan_officer: [],
};

export const getTestimonialsForPersona = (
	persona: PersonaKey,
): PersonaTestimonial[] =>
	personaTestimonials[persona]?.length
		? personaTestimonials[persona]
		: personaTestimonials[DEFAULT_PERSONA_KEY];

export const findFirstPersonaTestimonial = (): PersonaTestimonial =>
	personaTestimonials[DEFAULT_PERSONA_KEY][0];
