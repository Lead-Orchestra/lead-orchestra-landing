import type { Testimonial } from "@/types/testimonial";

export const generalDealScaleTestimonials: Testimonial[] = [
	{
		id: 1,
		name: "Alex Ramirez",
		role: "Founder & Lead Developer",
		content:
			"As a small team, we were drowning in manual data extraction and inconsistent scraping scripts. Lead Orchestra completely changed the game. We can scrape any website, normalize the data automatically, and export to our pipeline in minutes. It handles all the heavy lifting, letting us 3x our lead volume without adding headcount. We now focus on closing deals, not maintaining scrapers.",
		problem:
			"Our small team was spending 20+ hours a week manually extracting leads from websites and maintaining fragile scraping scripts. Good leads were slipping through the cracks because our scrapers kept breaking or getting blocked.",
		solution:
			"Lead Orchestra became our scraping engine. It handles anti-bot bypass, data normalization, and export automatically. We paste a URL, configure once, and get clean, normalized leads exported to CSV or our CRM. The MCP plugin system makes it easy to add new sources.",

		rating: 5,
		company: "Momentum Data Solutions",
		companyLogo: "/logos/momentum-logo.svg",
	},
	{
		id: 2,
		name: "Jessica Miller",
		role: "Data Team Lead",
		content:
			"We were wasting time and money on list providers that sold us the same stale data everyone else had. Lead Orchestra lets us scrape fresh leads directly from niche websites—Zillow, Realtor, LinkedIn, MLS—and normalize them automatically. It turned our data pipeline from a cost center into our competitive advantage. We get leads no one else has.",
		problem:
			"Leads from list providers were stale and oversold. By the time we got them, our competitors had already contacted them multiple times, resulting in poor response rates and wasted marketing spend.",
		solution:
			"Lead Orchestra's MCP API aggregator provides a unified interface for scraping multiple sources. We scrape fresh data directly from the source, normalize it to Lead Standard Format, and export to our systems. The data is always fresh and unique to us.",

		rating: 5,
		company: "NextGen Data Agency",
		companyLogo: "/logos/nextgen-logo.svg",
	},
	{
		id: 3,
		name: "Marcus Thorne",
		role: "Principal Developer",
		content:
			"Before Lead Orchestra, our scraping infrastructure was a mess of disconnected scripts and manual data cleaning. Now, our entire data ingestion pipeline lives in one system. We scrape from any source, normalize automatically, and export to CRM, Database, S3, or CSV. It's the first scraping platform that feels like it was actually built for developers who need reliable, scalable data pipelines.",
		problem:
			"Our team used separate scraping scripts for each source, manual data cleaning workflows, and inconsistent export formats. Nothing was integrated, data quality was inconsistent, and our process was inefficient and difficult to scale.",
		solution:
			"Lead Orchestra unified our entire scraping workflow. We now have an integrated system for scraping multiple sources, automatic data normalization, de-duplication, and flexible export options. The CLI and SDKs make it easy to automate scraping jobs and integrate with our existing infrastructure.",

		rating: 5,
		company: "Apex Data Ventures",
		companyLogo: "/logos/apex-capital-logo.svg",
	},
];
export const leadGenTestimonials: Testimonial[] = [
	{
		id: 1,
		name: "Marcus Thorne",
		role: "Owner / Lead Wholesaler",
		content:
			"Before Lead Orchestra, we were juggling three different list providers and still driving for dollars. It was a time-suck and our deal flow was a rollercoaster. Now, everything is in one place. The ability to pull a hyper-targeted list from their massive database in minutes is an absolute game-changer. Our pipeline has never been more consistent.",
		problem:
			"Our team wasted countless hours and money on multiple, often outdated lead sources, which resulted in a very inconsistent and unpredictable deal flow.",
		solution:
			"Lead Orchestra became our single source of truth. We now pull highly targeted lists from their 140M+ property database in minutes, not days, creating a predictable and steady pipeline.",

		rating: 5,
		company: "Apex Property Ventures",
		companyLogo: "/images/logos/apex-logo.svg", // Placeholder logo path
	},
	{
		id: 2,
		name: "Sarah Jenkins",
		role: "Real Estate Investor",
		content:
			"I'm an investor, not a data entry clerk. The grind of manually extracting property data from websites was killing my productivity. Lead Orchestra's scraping platform is incredibly powerful. I can scrape from Zillow, Realtor, or MLS, filter for the *exact* type of property I'm looking for, and export clean, normalized data. I'm now spending my time analyzing great deals, not scraping websites.",
		problem:
			"As a solo investor, I was spending over 80% of my time on the manual, tedious task of extracting property data from multiple websites in a very competitive area.",
		solution:
			"Lead Orchestra's scraping engine and data normalization allowed me to extract property data from any source automatically. It normalizes everything to Lead Standard Format, so I can focus my energy on analysis and closing deals instead of data entry.",

		rating: 5,
		company: "Blue Ridge Capital",
		companyLogo: "/images/logos/blue-ridge-logo.svg", // Placeholder logo path
	},
	{
		id: 3,
		name: "David Chen",
		role: "Co-Founder",
		content:
			"Expanding into a new city was daunting. We had no network and no data. Lead Orchestra was our secret weapon. We were able to generate targeted, high-quality lead lists for the entire metro area on day one. It saved us months of work and thousands in marketing waste. We closed our first deal in that market within 45 days, which is unheard of for us.",
		problem:
			"Our small team was trying to scale into a new market but lacked the local knowledge and resources to build lead lists effectively, resulting in a very high cost-per-lead.",
		solution:
			"Lead Orchestra allowed us to instantly generate qualified leads in the new market. This eliminated the usual ramp-up period, dramatically lowered our entry costs, and helped us close our first deal in record time.",

		rating: 5,
		company: "Momentum Data Solutions",
		companyLogo: "/images/logos/momentum-logo.svg", // Placeholder logo path
	},
];

export const socialLeadGenTestimonials: Testimonial[] = [
	{
		id: 1,
		name: "Jessica Miller",
		role: "Marketing Manager",
		content:
			"We run 'We Buy Houses' ads on Facebook and used to be overwhelmed with comments. Now, Lead Orchestra's AI handles everything from the first message to the final follow-up. I don't just get a list of leads anymore; I get actual appointments booked on my acquisition team's calendar. Our show-up rate is fantastic because the leads are so warm.",
		problem:
			"Our ad campaigns generated hundreds of comments, but our small team couldn't respond fast enough, causing us to lose high-intent leads before we could even speak to them.",
		solution:
			"The Social Lead feature automates the entire process from engagement to appointment. It increased our lead-to-appointment ratio by over 200% and freed up my team to focus on negotiating deals, not chasing social media notifications.",
		image: "/images/testimonials/jessica-miller.jpg",
		rating: 5,
		company: "Right Offer Properties",
		companyLogo: "/images/logos/right-offer-logo.svg",
	},
	{
		id: 2,
		name: "Carlos Reyes",
		role: "Solo Investor",
		content:
			"As a one-man show, I can't be on my phone 24/7. I was missing out on deals from my Instagram content. I activated this feature, and last week, I was driving when my phone rang. It was the Lead Orchestra AI hot-transferring a motivated seller who had commented on a post just an hour earlier. We're now under contract. It's unbelievable.",
		problem:
			"Being a solo operator, I lacked the bandwidth to instantly engage and nurture leads from my social media channels, resulting in significant lost opportunity cost.",
		solution:
			"Lead Orchestra acts as my personal ISA. It automatically engages, qualifies, and nurtures prospects, connecting me via live call transfer only when they are genuinely sales-ready.",
		image: "/images/testimonials/carlos-reyes.jpg",
		rating: 5,
		company: "CR Investments",
		companyLogo: "/images/logos/cr-investments-logo.svg",
	},
];

export const snailMailTestimonials: Testimonial[] = [
	{
		id: 1,
		name: "David Chen",
		role: "Co-Founder",
		content:
			"The real magic happened when the calls came in from our postcard campaign. I was in a meeting and couldn't answer, but I got a notification that the AI had answered, qualified the seller, and booked an appointment right on my calendar for the next day. That one automated appointment turned into a $20k wholesale fee. It completely changed the ROI of our direct mail.",
		problem:
			"Our direct mail efforts were a huge time sink, and worse, we were constantly missing calls from interested sellers when we were busy on other projects.",
		solution:
			"Lead Orchestra not only automated the entire mailing process but also acted as our inbound receptionist and qualifier, ensuring every marketing dollar was maximized by converting calls into concrete appointments.",
		image: "/images/testimonials/david-chen.jpg",
		rating: 5,
		company: "Momentum Data Solutions",
		companyLogo: "/images/logos/momentum-logo.svg",
	},
	{
		id: 2,
		name: "Michael Carter",
		role: "Solo Real Estate Investor",
		content:
			"Being a solo operator, I'm always juggling tasks. I ran a campaign, and a week later, my phone rang. I answered, and it was the Lead Orchestra AI saying, 'I have a motivated seller for 123 Main St. on the line for you, press 1 to connect.' It seamlessly transferred a live, pre-vetted seller to me while I was walking through Home Depot. It's the most powerful tool I have.",
		problem:
			"As a solo investor, every inbound call is critical, but I don't have a team to field them. I needed a way to qualify callers without stopping everything I was doing.",
		solution:
			"The AI Agent with the live hot-transfer feature acts as my personal inbound sales team. It filters out tire-kickers and connects me directly to motivated sellers, saving me hours and letting me focus on closing deals.",
		image: "/images/testimonials/michael-carter.jpg", // Placeholder image
		rating: 5,
		company: "Carter Property Group",
		companyLogo: "/images/logos/carter-property-logo.svg", // Placeholder logo
	},
];
export const phoneNumberHunterTestimonials: Testimonial[] = [
	{
		id: 1,
		name: "Samantha Jones",
		role: "Wholesaler",
		content:
			"We used to waste so much time texting and calling dead leads or invalid numbers. Now, I run every list through Phone Number Hunter before any outreach. It instantly tells me if the number is real, mobile, and even gives me the owner's name. My campaigns are way more efficient and I'm reaching the right people on the first try.",
		problem:
			"Outreach campaigns were plagued by bad or outdated phone numbers, leading to wasted effort and frustration for my team.",
		solution:
			"Phone Number Hunter enriches and validates every phone number, flagging landlines, VOIP, and high-risk numbers before we ever hit send. Our contact rates have improved dramatically and we don't waste time on dead ends.",
		image: "/images/testimonials/samantha-jones.jpg",
		rating: 5,
		company: "Bluebird Properties",
		companyLogo: "/images/logos/bluebird-logo.svg",
	},
];

export const emailIntelligenceTestimonials: Testimonial[] = [
	{
		id: 1,
		name: "Maria Garcia",
		role: "Acquisitions Manager",
		content:
			"We get leads from website forms, and it's hard to know who's real. With the Email Intelligence tool, I plugged in an email and immediately saw it was linked to an active Instagram and professional LinkedIn profile. This told me it was a real person and gave me instant context about their background before my call. It's a huge confidence booster.",
		problem:
			"We were wasting time on outreach to unverified email addresses and lacked the context to personalize our messages effectively.",
		solution:
			"The Email Intelligence tool allows us to instantly verify a lead's digital footprint by finding their social accounts, saving time and dramatically improving our ability to build rapport.",
		image: "/images/testimonials/maria-garcia.jpg",
		rating: 5,
		company: "Keystone Acquisitions",
		companyLogo: "/images/logos/keystone-logo.svg",
	},
];
export const domainReconTestimonials: Testimonial[] = [
	{
		id: 1,
		name: "Kimberly Torres",
		role: "Residential Real Estate Agent",
		content:
			"I used to go into cold calls with barely any information. Now, before I ever pick up the phone, I run a lead’s email or company website through Domain Recon. In seconds, I get a full picture—company size, social links, recent news, and even key decision makers. I can personalize my outreach, ask smarter questions, and prequalify leads faster. The conversations are so much warmer and my close rate has noticeably improved.",
		problem:
			"Going into lead outreach blindly meant I missed key context, wasted time on unqualified prospects, and struggled to build rapport quickly.",
		solution:
			"Domain Recon transforms a simple website into a detailed dossier—revealing company details, team members, and digital presence. I use these insights to prequalify leads and tailor my approach for each conversation.",
		image: "/images/testimonials/kimberly-torres.jpg",
		rating: 5,
		company: "Torres Realty Group",
		companyLogo: "/images/logos/torres-realty-logo.svg",
	},
];

export const socialProfileHunterTestimonials: Testimonial[] = [
	{
		id: 1,
		name: "Jessica Miller",
		role: "Wholesaler & Marketer",
		content:
			"I got a lead from an anonymous username on a local Facebook real estate group. I didn't have a name or number. I plugged the username into the Social Profile Hunter, and it instantly found their LinkedIn, X, and personal blog. From LinkedIn, I got their full name and professional background. This turned an anonymous username into a fully qualified lead I could have a real conversation with.",
		problem:
			"Leads from social media forums were often anonymous, making professional follow-up nearly impossible.",
		solution:
			"The Social Profile Hunter transforms a single username into a complete digital dossier, providing the names and context needed to turn anonymous interest into a professional relationship.",
		image: "/images/testimonials/jessica-miller.jpg",
		rating: 5,
		company: "Right Offer Properties",
		companyLogo: "/images/logos/right-offer-logo.svg",
	},
];

export const leadDossierTestimonials: Testimonial[] = [
	{
		id: 1,
		name: "Kevin Zhang",
		role: "Real Estate Syndicator",
		content:
			"I was vetting a potential partner who went by 'SyndicatorPro' online. The Dossier tool not only found his professional accounts but also a secondary username, 'CityFlipper88,' on his personal Twitter. The recursive search then used that second name to find him on niche hobby forums. This gave me a complete 360-degree view of the person, far beyond just their professional persona. The relationship map was incredible.",
		problem:
			"It was impossible to connect a person's professional and personal online identities, leaving a huge gap in my due diligence process.",
		solution:
			"The Lead Dossier Generator's recursive search automatically found and linked a secondary username, building a complete and unified profile that gave me the confidence to move forward.",
		image: "/images/testimonials/kevin-zhang.jpg",
		rating: 5,
		company: "Confluence Capital",
		companyLogo: "/images/logos/confluence-capital-logo.svg",
	},
];

export const dataEnrichmentTestimonials: Testimonial[] = [
	{
		id: 1,
		name: "Marcus Thorne",
		role: "Lead Wholesaler",
		content:
			"We bought a list of 1,000 'vacant' properties that was basically just addresses. Instead of manually skip tracing, we ran the whole list through the Reverse Address API. In about 10 minutes, we had owner names and phone numbers for over 80% of them. That one action filled our pipeline for the entire quarter.",
		problem:
			"We had high-potential property addresses but no efficient way to find the owner's contact information at scale.",
		solution:
			"The Data Enrichment Suite's Reverse Address API allowed us to enrich an entire list of addresses in minutes, saving us hundreds of hours of manual work and generating immediate leads.",
		image: "/images/testimonials/marcus-thorne.jpg",
		rating: 5,
		company: "Apex Property Ventures",
		companyLogo: "/images/logos/apex-logo.svg",
	},
];
export const marketAnalysisTestimonials: Testimonial[] = [
	{
		id: 1,
		name: "Terrence Booker",
		role: "Investor & Syndicator",
		content:
			"The AI Market Analysis is my go-to due diligence tool. I can pull a report on a new zip code in seconds. The best part is arming my AI agent with it. The agent called a seller and mentioned that 'rents for 2-bedroom properties in your area have increased by 8% year-over-year.' That level of specific data, delivered automatically, is something no competitor can match. It builds instant credibility.",
		problem:
			"It was difficult to quickly analyze new markets and even harder to convey that market expertise to potential sellers in a scalable way.",
		solution:
			"The AI Market Analysis tool not only provides instant reports but allows me to feed those insights directly to my AI agents, who use the data to have more intelligent, persuasive conversations.",
		image: "/images/testimonials/terrence-booker.jpg",
		rating: 5,
		company: "Atlanta Property Group",
		companyLogo: "/images/logos/apg-logo.svg",
	},
];

export const performanceHubTestimonials: Testimonial[] = [
	{
		id: 1,
		name: "Samantha Jones",
		role: "Wholesaler & Team Lead",
		content:
			"This is two tools in one. First, I logged in and the AI had already added three 'First Contact' tasks for my new hire. Then, I added my own task: 'Send follow-up email to the lead from 123 Main St'. A second later, a button appeared: 'Let AI do this?'. I clicked yes, and it was done. It not only tells me what to do, it does the work for me.",
		problem:
			"My day was a mix of strategic planning and being bogged down by repetitive administrative tasks.",
		solution:
			"The AI Command Center acts as both a strategist—creating tasks for my team—and an assistant—automating the manual tasks I create for myself. It has fundamentally changed how I spend my time.",
		image: "/images/testimonials/samantha-jones.jpg",
		rating: 5,
		company: "Bluebird Properties",
		companyLogo: "/images/logos/bluebird-logo.svg",
	},
];

export const aiPhoneAgentTestimonials: Testimonial[] = [
	{
		id: 1,
		name: "Marcus Thorne",
		role: "Lead Wholesaler",
		content:
			"I used to hate cold calling. It was a soul-crushing grind. The first day I activated the AI Phone Agent, I went to lunch. When I got back, my phone buzzed with a calendar notification: 'Appointment with Motivated Seller: 123 Main St'. The AI had called, qualified, and booked it without me lifting a finger. I'm never making a cold call again.",
		problem:
			"My business partner and I were spending over half our day on unproductive cold calls, which was burning us out and limiting our growth.",
		solution:
			"The AI Phone Agent completely automated our top-of-funnel outreach. We now spend our time on what matters: taking high-quality appointments and closing deals. Our revenue doubled in the first three months.",
		image: "/images/testimonials/marcus-thorne.jpg",
		rating: 5,
		company: "Apex Property Ventures",
		companyLogo: "/images/logos/apex-logo.svg",
	},
];

export const aiInboundAgentTestimonials: Testimonial[] = [
	{
		id: 1,
		name: "David Chen",
		role: "Co-Founder",
		content:
			"We launched a big direct mail campaign and the AI Inbound Agent was our secret weapon. The phone would ring at all hours, and every time, the AI was there to handle it. The best part? Waking up to my calendar already populated with qualified seller appointments that came in overnight. It feels like we have a 24/7 acquisitions team.",
		problem:
			"We couldn't scale our marketing because we didn't have the manpower to handle the inbound call volume, leading to missed calls and lost deals.",
		solution:
			"The AI Inbound Agent became our automated front desk, handling 100% of our inbound calls, qualifying leads perfectly, and booking appointments, which allowed us to scale our marketing confidently.",
		image: "/images/testimonials/david-chen.jpg",
		rating: 5,
		company: "Momentum Data Solutions",
		companyLogo: "/images/logos/momentum-logo.svg",
	},
];
export const proprietaryVoiceCloningTestimonials: Testimonial[] = [
	{
		id: 1,
		name: "Sarah L.",
		role: "CEO", // Role within the company
		company: "Keystone Real Estate Group",
		content:
			"I was absolutely blown away by Lead Orchestra's voice cloning technology! It's genuinely my voice on the AI, and the way leads are responding is incredible. It feels like I'm personally reaching out to each one, building trust from the first word.",
		problem:
			"Our automated outreach felt impersonal and was not converting as well as we hoped. Leads were hesitant to engage with a generic AI voice.",
		solution:
			"Lead Orchestra's Proprietary AI Voice Cloning allowed us to use my actual voice for AI interactions. This created an immediate sense of familiarity and trust, significantly boosting lead engagement and our appointment setting rates.",
		image: "/testimonials/sarah-l.jpg", // Placeholder path to an image
		rating: 5,
		companyLogo: "/company-logos/keystone-real-estate-group-logo.svg", // Placeholder path to company logo
	},
	{
		id: 2,
		name: "Michael B.",
		role: "Lead Wholesaler", // Role within the company
		company: "Apex Property Finders",
		content:
			"Lead Orchestra's AI Voice Cloning is a total game-changer for us. Our automated outreach now carries my personal, authentic touch because it *is* my voice. The trust and rapport it builds instantly are invaluable and have significantly boosted our appointment rates.",
		problem:
			"We struggled to scale personalized outreach. Generic AI voices didn't reflect our brand's personal touch, leading to lower trust and connection with potential sellers.",
		solution:
			"By cloning my voice with Lead Orchestra's technology, our AI agents now sound exactly like me. This has made our outreach feel incredibly personal, even at scale, dramatically improving rapport and the number of qualified leads willing to schedule a call.",
		image: "/testimonials/michael-b.jpg", // Placeholder path to an image
		rating: 5,
		companyLogo: "/company-logos/apex-property-finders-logo.svg", // Placeholder path to company logo
	},
	{
		id: 3,
		name: "Jessica Y.",
		role: "Head of Investor Relations",
		company: "Momentum Capital Ventures",
		content:
			"The authenticity that Lead Orchestra's voice cloning brings to our AI communication is unparalleled. Our investors have commented on the personal touch, even from automated updates. It's truly next-level.",
		problem:
			"Keeping a large investor base personally updated was time-consuming, and generic automated messages lacked the warmth our brand strives for.",
		solution:
			"Lead Orchestra's Voice Cloning allowed our AI to deliver updates and engage with investors using our managing partner's voice. This maintained a high level of personalization and trust, even with automated communications, strengthening investor relations.",
		image: "/testimonials/jessica-y.jpg", // Placeholder
		rating: 4,
		companyLogo: "/company-logos/momentum-capital-logo.svg", // Placeholder
	},
];

export const aiSocialMediaOutreachTestimonials: Testimonial[] = [
	{
		id: 101,
		name: "David Chen",
		role: "Broker/Owner",
		company: "MetroConnect Realty",
		content:
			"Lead Orchestra's AI Social Outreach is a beast! It takes comments on our posts and turns them into booked appointments. The blend of scripted responses and smart AI messages is incredibly effective.",
		problem:
			"We were getting social media engagement but struggled to convert those interactions into actual meetings. It was a manual and leaky funnel.",
		solution:
			"The AI now handles all the initial DMs and qualification. We just see appointments appear on our calendar from genuinely interested leads found on LinkedIn. It's brilliant!",
		image: "/testimonials/david-chen.jpg",
		rating: 5,
		companyLogo: "/company-logos/metroconnect-realty-logo.svg",
	},
	{
		id: 102,
		name: "Linda Rodriguez",
		role: "Real Estate Investor",
		company: "LR Property Ventures",
		content:
			"I'm amazed how Lead Orchestra converts Facebook comments into qualified seller leads and even sets the initial call. The AI knows what to say, whether it's a script or its own response.",
		problem:
			"My Facebook engagement was high, but I had no time to personally DM and qualify everyone. Leads were slipping through the cracks.",
		solution:
			"Lead Orchestra's AI jumps on comments immediately, uses smart scripts to qualify, and I get notified for a hot transfer or see a call booked. It's like having a top-tier ISA for social media.",
		image: "/testimonials/linda-rodriguez.jpg",
		rating: 5,
		companyLogo: "/company-logos/lr-property-ventures-logo.svg",
	},
];

export const aiSocialAdLeadNurturingTestimonials: Testimonial[] = [
	{
		id: 201,
		name: "Angela Wu",
		role: "Marketing Director",
		company: "Prestige Homes International",
		content:
			"Lead Orchestra's automated follow-up for our Meta Ad leads is phenomenal. The AI calls and texts go out instantly, and we've seen our lead-to-appointment rate triple. The social chat automation on Facebook is a huge bonus too!",
		problem:
			"Our expensive Meta Ad leads were going stale because our team couldn't follow up fast enough. We were wasting a significant portion of our ad budget.",
		solution:
			"The moment a lead form is submitted, Lead Orchestra's AI is on it with texts and calls. It qualifies them and books appointments. It’s like having an always-on ISA for our ad spend and social pages.",
		image: "/testimonials/angela-wu.jpg",
		rating: 5,
		companyLogo: "/company-logos/prestige-homes-logo.svg",
	},
	{
		id: 202,
		name: "Mark Johnson",
		role: "Real Estate Team Lead",
		company: "Johnson & Associates Realty",
		content:
			"The whitelabeled chat system for LinkedIn and Facebook has automated so much of our initial lead engagement. Then, the AI call follow-up seals the deal. It's a comprehensive lead nurturing machine.",
		problem:
			"We were active on social media but struggled to consistently engage and follow up with every interaction, especially on LinkedIn. Meta Ad follow-up was also a manual bottleneck.",
		solution:
			"Lead Orchestra provides automated chat flows for social, then AI calls and texts take over for deeper nurturing. Leads from ads and social are now managed end-to-end, leading to more qualified appointments.",
		image: "/testimonials/mark-johnson.jpg",
		rating: 5,
		companyLogo: "/company-logos/johnson-realty-logo.svg",
	},
];

export const aiTextMessageOutreachTestimonials: Testimonial[] = [
	{
		id: 301,
		name: "Kevin Miller",
		role: "Wholesaler",
		company: "QuickFlip Properties",
		content:
			"Lead Orchestra's AI Texting has revolutionized how I reach motivated sellers. The AI's ability to personalize messages and have initial conversations filters out the noise and gets me talking to serious prospects faster.",
		problem:
			"Cold calling was time-consuming with low contact rates. Generic SMS blasts were ignored. I needed a scalable way to have personalized initial contact.",
		solution:
			"The AI text outreach gets high open and response rates. The AI handles the first few messages, qualifies them, and I only step in for warm leads. It's like having an army of texters working for me.",
		image: "/testimonials/kevin-miller.jpg",
		rating: 5,
		companyLogo: "/company-logos/quickflip-logo.svg",
	},
	{
		id: 302,
		name: "Sophia Chen",
		role: "Real Estate Agent",
		company: "UrbanNest Realty",
		content:
			"The AI-powered SMS campaigns are perfect for nurturing my database and re-engaging old leads. The conversational AI keeps them warm until they're ready to transact. Compliance is also handled, which is a huge relief.",
		problem:
			"I had a large database of past clients and leads but struggled to nurture them consistently via text without it feeling spammy or taking all my time.",
		solution:
			"Lead Orchestra's AI texting allows me to send personalized check-ins and market updates. The AI even handles replies to common questions. It's kept my pipeline full and my clients engaged.",
		image: "/testimonials/sophia-chen.jpg",
		rating: 4,
		companyLogo: "/company-logos/urbannest-realty-logo.svg",
	},
];

export const embeddableAIChatbotTestimonials: Testimonial[] = [
	{
		id: 401,
		name: "Emily Carter",
		role: "Marketing Manager",
		company: "Sunrise Homes Development",
		content:
			"The Lead Orchestra AI Chatbot on our website has been a game-changer. It captures leads 24/7 and pre-qualifies them perfectly. Our sales team loves getting warm leads with all the initial info already gathered!",
		problem:
			"We were losing potential leads who visited our website after hours or didn't want to fill out a long form. Our sales team was also bogged down with initial calls to unqualified visitors.",
		solution:
			"The chatbot engages every visitor, answers basic questions, and qualifies them based on our criteria. Qualified leads are then smoothly passed to our sales team, making them far more efficient.",
		image: "/testimonials/emily-carter.jpg",
		rating: 5,
		companyLogo: "/company-logos/sunrise-homes-logo.svg",
	},
	{
		id: 402,
		name: "Jason Lee",
		role: "Founder",
		company: "InvestRight Real Estate",
		content:
			"Integrating the AI chatbot was surprisingly easy. It now handles most of our website's initial inquiries, pre-qualifies investor leads, and even books consultation calls directly into my calendar. It's like having an extra team member.",
		problem:
			"As a small firm, we couldn't offer 24/7 live chat. Many website inquiries required asking the same initial qualifying questions over and over.",
		solution:
			"Lead Orchestra's AI chatbot now handles that front line of communication 24/7. It filters for serious investors and books them straight into my calendar, saving me immense time and improving lead quality.",
		image: "/testimonials/jason-lee.jpg",
		rating: 5,
		companyLogo: "/company-logos/investright-logo.svg",
	},
];

export const aiOutboundQualificationTestimonials: Testimonial[] = [
	{
		id: 501,
		name: "Richard Bell",
		role: "Sales Manager",
		company: "Momentum Investment Group",
		content:
			"Lead Orchestra's AI Outbound Agent is like having a team of super-efficient SDRs. It calls and texts our cold leads, pre-qualifies them, and either books them straight into our closers' calendars or hot-transfers the really eager ones. Our sales team's productivity has skyrocketed!",
		problem:
			"Our sales team was spending 70% of their time on cold outreach with very low success rates, trying to find and qualify leads themselves.",
		solution:
			"The AI now handles all the front-end outbound work. It filters out the unqualified leads and delivers either booked appointments or live warm transfers. Our closers can now focus purely on selling to interested prospects.",
		image: "/testimonials/richard-bell.jpg", // Placeholder image path
		rating: 5,
		companyLogo: "/company-logos/momentum-group-logo.svg", // Placeholder logo path
	},
	{
		id: 502,
		name: "Chloe Davis",
		role: "Business Development Lead",
		company: "Apex Commercial Real Estate",
		content:
			"The ability of the AI to not just qualify but also intelligently decide whether to book an appointment or attempt a hot transfer is incredible. It ensures we connect with hot leads instantly. The AI calls sound very natural too.",
		problem:
			"We struggled with timely follow-up on outbound leads and often missed the window when a prospect was most interested. Scheduling was also a manual pain point.",
		solution:
			"Lead Orchestra's AI acts immediately. It qualifies leads through natural AI calls and texts. If a lead is highly qualified and ready to talk, we get a hot transfer. Otherwise, it's a booked meeting. It’s a perfect system.",
		image: "/testimonials/chloe-davis.jpg", // Placeholder image path
		rating: 5,
		companyLogo: "/company-logos/apex-commercial-logo.svg", // Placeholder logo path
	},
];
export const aiDirectMailNurturingTestimonials: Testimonial[] = [
	{
		id: 601,
		name: "Marcus Thorne",
		role: "Luxury Property Specialist",
		company: "Thorne Premium Properties",
		content:
			"In a world of endless emails, Lead Orchestra's AI-personalized direct mail letters get noticed. We've re-engaged several high-net-worth leads who were unresponsive digitally. The quality and personalization are top-notch.",
		problem:
			"Reaching ultra-high-value, busy individuals who ignore most digital communication was a major challenge for our luxury segment.",
		solution:
			"Strategically sent, beautifully printed and AI-personalized letters via Lead Orchestra have opened doors that emails and calls couldn't. It adds a level of prestige and seriousness.",
		image: "/testimonials/marcus-thorne.jpg",
		rating: 5,
		companyLogo: "/company-logos/thorne-properties-logo.svg",
	},
	{
		id: 602,
		name: "Brenda Smith",
		role: "Seasoned Investor & Mentor",
		company: "Legacy REI Group",
		content:
			"We use Lead Orchestra's automated postcard system for long-term farm area nurturing. The AI helps tailor messages based on time since last contact, and it's surprisingly effective for keeping our brand visible. The 'set it and forget it' aspect is fantastic.",
		problem:
			"Maintaining consistent, non-intrusive contact with potential sellers in our target farm areas over many months or years was manually intensive.",
		solution:
			"Lead Orchestra automates personalized postcard drops at strategic intervals. It’s a low-effort, high-impact way to stay top-of-mind, and the AI helps vary the messaging so it doesn’t feel repetitive.",
		image: "/testimonials/brenda-smith.jpg",
		rating: 4,
		companyLogo: "/company-logos/legacy-rei-logo.svg",
	},
];

export const aiInboundTestimonials: Testimonial[] = [
	{
		id: 1,
		name: "David Chen",
		role: "Acquisitions Manager",
		content:
			"We were losing deals to voicemail after 5 PM. The AI bot now catches them all. It qualified a seller at 9 PM on a Tuesday, and the appointment was on my calendar when I woke up. That single deal paid for the service for years to come.",
		problem:
			"Our team couldn't answer calls 24/7, causing high-value leads from our marketing to go to voicemail and get lost after business hours.",
		solution:
			"Lead Orchestra's AI answers every call, day or night. It successfully captured and qualified a motivated seller lead late in the evening, directly leading to a closed deal we would have otherwise missed.",
		image: "/testimonials/david-chen.jpg", // Example image path
		rating: 5,
		company: "Prime Equity Partners",
		companyLogo: "/logos/prime-equity-logo.svg", // Example logo path
	},
	{
		id: 2,
		name: "Sarah Jones",
		role: "Operations Director",
		content:
			"Our front desk was overwhelmed. The AI bot now handles 70% of our inbound traffic, booking standard appointments and answering basic questions. Our staff is happier and can focus on more complex tasks. It's been a total game-changer for our workflow.",
		problem:
			"Our skilled front-desk staff was getting bogged down with repetitive, low-level calls, preventing them from focusing on high-priority operational tasks.",
		solution:
			"The AI Agent automated the vast majority of routine inbound calls, acting as a perfect filter. This freed up our staff to manage more complex client needs, increasing overall team efficiency and morale.",
		image: "/testimonials/sarah-jones.jpg", // Example image path
		rating: 5,
		company: "Keystone Holdings",
		companyLogo: "/logos/keystone-holdings-logo.svg", // Example logo path
	},
];

export const aiSocialMediaTestimonials: Testimonial[] = [
	{
		id: 1,
		name: "Jessica Miller",
		role: "Founder & Wholesaler",
		content:
			"I was running Facebook ads but by the time I woke up and saw the DMs from overnight, the leads were unresponsive. The AI agent engages them instantly, asks my key questions, and I wake up to pre-qualified leads with phone numbers. It's like having a virtual assistant working while I sleep.",
		problem:
			"Losing high-intent leads from Facebook ads because of slow, manual response times, especially for inquiries that came in overnight.",
		solution:
			"The Lead Orchestra AI provided instant, 24/7 engagement on all DMs and comments, capturing lead details at the moment of highest intent and converting them into actionable, pre-qualified contacts.",
		image: "/testimonials/jessica-miller.jpg",
		rating: 5,
		company: "NextGen Home Buyers",
		companyLogo: "/logos/nextgen-logo.svg",
	},
];

export const aiTextMessageTestimonials: Testimonial[] = [
	{
		id: 1,
		name: "Alex Ramirez",
		role: "Real Estate Investor",
		content:
			"I was manually texting leads from my phone, and it was a nightmare to track. The Lead Orchestra AI agent is a machine. It handles all the back-and-forth and just tags me when a lead is actually qualified and ready to talk. The iMessage support is a huge trust signal.",
		problem:
			"Manually texting leads was unprofessional, impossible to scale, and had no clear tracking or integration with a CRM.",
		solution:
			"Lead Orchestra's AI automated the entire SMS qualification process, allowing for scalable, professional outreach while using iMessage to build trust and increase engagement with prospects.",
		image: "/testimonials/alex-ramirez.jpg",
		rating: 5,
		company: "Momentum Properties",
		companyLogo: "/logos/momentum-logo.svg",
	},
];

export const rentEstimatorTestimonials: Testimonial[] = [
	{
		id: 1,
		name: "Katie Robinson",
		role: "Real Estate Investor, Cleveland, OH",
		content:
			"Lead Orchestra's Rent Estimator is the most accurate and useful tool I've found for looking up rents and running comps. It's an absolute must-have for active real estate investors like me!",
		problem:
			"Needed a fast, reliable way to verify rental income potential and understand local market health before making an offer on a new property.",
		solution:
			"The tool provided instant, accurate rent estimates and market trends, allowing for quick and confident analysis of potential investment properties.",
		image: "/testimonials/katie-robinson.jpg",
		rating: 5,
		company: "Robinson Real Estate",
		companyLogo: "/logos/robinson-re-logo.svg",
	},
];

export const marketAnalyzerTestimonials: Testimonial[] = [
	{
		id: 1,
		name: "Terrence Booker",
		role: "Investor, Atlanta, GA",
		content:
			"Having access to accurate rental data has been great. Lead Orchestra's market reports are professional, easy to understand, and contain a lot of useful data and trends that help us make confident investment decisions.",
		problem:
			"Making decisions on where to expand our rental portfolio was challenging without a reliable source for market-level data and trends.",
		solution:
			"The Market Analyzer provided clear, professional reports with all the key statistics needed to compare different zip codes and identify the most promising areas for investment.",
		image: "/testimonials/terrence-booker.jpg",
		rating: 5,
		company: "Booker Investment Group",
		companyLogo: "/logos/booker-ig-logo.svg",
	},
];

export const portfolioDashboardTestimonials: Testimonial[] = [
	{
		id: 1,
		name: "Casey Lange",
		role: "Partner, Oceanview Property Group",
		content:
			"We recently started tracking our clients' portfolios with Lead Orchestra and have been blown away. The dashboard helps us better understand local market trends and proactively plan future rent increases. Our clients are impressed with the new level of reporting we can provide.",
		problem:
			"Needed a scalable solution to track hundreds of properties for multiple clients and provide professional, data-driven performance reports.",
		solution:
			"The Enterprise Portfolio Dashboard allowed them to centralize all portfolio data, automate rent optimization, and generate white-labeled reports that increased client satisfaction and retention.",
		image: "/testimonials/casey-lange.jpg",
		rating: 5,
		company: "Oceanview Property Group",
		companyLogo: "/logos/oceanview-logo.svg",
	},
];
