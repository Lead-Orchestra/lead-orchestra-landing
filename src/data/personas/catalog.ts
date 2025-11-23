import {
	HERO_COPY_V7,
	DEFAULT_PERSONA as HERO_DEFAULT_PERSONA,
	PERSONA_GOAL as HERO_INVESTOR_GOAL,
	type HeroPersonaKey,
} from "@/components/home/heros/live-dynamic-hero-demo/_config";

// Extended persona type to include legacy real estate personas
export type PersonaKey =
	| HeroPersonaKey
	| "agent"
	| "investor"
	| "founder"
	| "wholesaler"
	| "loan_officer";

const HERO_PERSONA_LABELS: Record<PersonaKey, string> = {
	developer: "Developers & Engineers",
	agency: "Lead Gen Agencies",
	startup: "Startups & Founders",
	enterprise: "Enterprise Teams",
	// Legacy real estate personas (kept for backward compatibility)
	agent: "Real Estate Agents",
	investor: "Real Estate Investors",
	founder: "Proptech Founders",
	wholesaler: "Real Estate Wholesalers",
	loan_officer: "Mortgage Loan Officers",
};

const GOAL_OVERRIDES: Partial<Record<PersonaKey, string>> = {
	developer: "Scrape, normalize, and export lead data",
	agency: "Scrape niche sources your competitors ignore",
	startup: "Focus on product-market fit, not scraping infrastructure",
	enterprise: "Integrate scraping into your existing stack",
	// Legacy real estate personas
	investor: HERO_INVESTOR_GOAL,
	agent: "Scrape fresh leads from Zillow, Realtor, and MLS",
	wholesaler: "Extract off-market property data automatically",
	founder: "Build scraping pipelines without infrastructure overhead",
	loan_officer: "Scrape borrower leads from multiple sources",
};

const deriveGoal = (persona: PersonaKey): string => {
	const override = GOAL_OVERRIDES[persona];
	if (override) {
		return override;
	}

	// Only access HERO_COPY_V7.personas for valid HeroPersonaKey values
	if (persona in HERO_COPY_V7.personas) {
		const personaConfig = HERO_COPY_V7.personas[persona as HeroPersonaKey];
		return (
			personaConfig.solution[0] ?? personaConfig.hope[0] ?? HERO_INVESTOR_GOAL
		);
	}

	// Fallback for legacy personas
	return HERO_INVESTOR_GOAL;
};

export const PERSONA_GOALS: Record<PersonaKey, string> = (
	Object.keys(HERO_COPY_V7.personas) as PersonaKey[]
).reduce(
	(accumulator, key) => {
		accumulator[key] = deriveGoal(key);
		return accumulator;
	},
	{} as Record<PersonaKey, string>,
);

export const PERSONA_LABELS: Record<PersonaKey, string> = HERO_PERSONA_LABELS;

export const PERSONA_DISPLAY_ORDER: PersonaKey[] = [
	"developer",
	"agency",
	"startup",
	"enterprise",
];

export const ALL_PERSONA_KEYS = Object.keys(
	HERO_COPY_V7.personas,
) as PersonaKey[];

export const DEFAULT_PERSONA_KEY: PersonaKey = HERO_DEFAULT_PERSONA;
