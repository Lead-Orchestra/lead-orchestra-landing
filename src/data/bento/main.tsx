import appointmentSetting from "@/assets/animations/appointment_setting.json";
import dealScaleOutcome from "@/assets/animations/deal_scale_outcome.json";
import launchLoading from "@/assets/animations/launchLoading.json";
import marketAnalysis from "@/assets/animations/market_analysis.json";
import voiceWave from "@/assets/animations/voice_wave_lottie.json";
import {
	DEFAULT_PERSONA,
	DEFAULT_PERSONA_DISPLAY,
	HERO_COPY_V7,
	PERSONA_GOAL,
	PERSONA_LABEL,
} from "@/components/home/heros/live-dynamic-hero-demo/_config";
import { Badge } from "@/components/ui/badge";
import type { BentoFeature } from "@/types/bento/features";
import Lottie from "lottie-react";
import {
	CalendarCheck,
	Clock,
	Code,
	DatabaseZap,
	Download,
	Globe,
	PlaneTakeoff,
} from "lucide-react";

const chipClassName =
	"mt-6 w-fit rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground backdrop-blur-sm";

const layout = {
	startOne: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
	startTwo: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-4",
	startThree: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
	startFour: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
	startFive: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
} as const;

export const MainBentoFeatures: BentoFeature[] = [
	{
		title: "Get started in 3 minutes or less",
		description: "Start scraping leads in minutes, not hours.",
		icon: <PlaneTakeoff className="h-6 w-6 text-accent" />,
		className: layout.startOne,
		background: (
			<Lottie
				animationData={launchLoading}
				className="h-36 w-36 opacity-60"
				loop
				autoplay
			/>
		),
		content: (
			<div className="space-y-4 text-foreground">
				<div className="space-y-1">
					<h3 className="font-semibold text-white text-xl leading-tight [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
						Scrape in One Click
					</h3>
					<p className="font-medium text-sm text-white/90 [text-shadow:0_1px_1px_rgba(0,0,0,0.3)]">
						Paste a URL, configure, and scrape instantly
					</p>
				</div>
				<p className="text-sm text-white/90 leading-6 [text-shadow:0_1px_1px_rgba(0,0,0,0.3)]">
					Paste a URL from Zillow, Realtor, or any source, configure your
					scraping parameters, and start extracting leads in seconds. No complex
					setup required.
				</p>
				<Badge
					variant="secondary"
					className="w-fit rounded-full bg-accent/15 px-3 py-1 font-semibold text-accent-foreground text-xs"
				>
					First scrape in under 60 seconds
				</Badge>
			</div>
		),
	},
	{
		title: "Scraping That Works While You Sleep",
		description: "Never miss a fresh lead again",
		icon: <Clock className="h-6 w-6 text-accent" />,
		className: layout.startTwo,
		background: (
			<Lottie
				animationData={dealScaleOutcome}
				className="h-44 w-44 opacity-60"
				loop
				autoplay
			/>
		),
		content: (
			<div className="space-y-4 text-foreground">
				<div className="space-y-1">
					<h3 className="font-semibold text-white text-xl leading-tight [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
						Scraping That Works While You Sleep
					</h3>
					<p className="font-medium text-sm text-white/90 [text-shadow:0_1px_1px_rgba(0,0,0,0.3)]">
						Never miss a fresh lead again
					</p>
				</div>
				<p className="text-sm text-white/90 leading-6 [text-shadow:0_1px_1px_rgba(0,0,0,0.3)]">
					Set up automated scraping jobs that run 24/7. Schedule daily scrapes
					from Zillow, Realtor, MLS, and social platforms. Fresh leads are
					automatically normalized and exported to your pipeline while you
					sleep.
				</p>
				<Badge
					variant="secondary"
					className="w-fit rounded-full bg-accent/15 px-3 py-1 font-semibold text-accent-foreground text-xs"
				>
					Automated scraping 24/7 — zero manual work
				</Badge>
			</div>
		),
	},
	{
		title: "Export Everywhere, Not Just CSV",
		description: "Your data, your way",
		icon: <Download className="h-6 w-6 text-accent" />,
		className: layout.startThree,
		background: (
			<Lottie
				animationData={appointmentSetting}
				className="h-36 w-36 opacity-60"
				loop
				autoplay
			/>
		),
		content: (
			<div className="space-y-4 text-foreground">
				<div className="space-y-1">
					<h3 className="font-semibold text-white text-xl leading-tight [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
						Export Everywhere, Not Just CSV
					</h3>
					<p className="font-medium text-sm text-white/90 [text-shadow:0_1px_1px_rgba(0,0,0,0.3)]">
						Your data, your way
					</p>
				</div>
				<p className="text-sm text-white/90 leading-6 [text-shadow:0_1px_1px_rgba(0,0,0,0.3)]">
					Export normalized data to CRM, CSV, JSON, Database, S3, or any system
					via API. Webhooks trigger actions in your deal tracker or custom
					tools. Your scraped leads flow seamlessly into your workflow.
				</p>
				<Badge
					variant="secondary"
					className="w-fit rounded-full bg-accent/15 px-3 py-1 font-semibold text-accent-foreground text-xs"
				>
					Export to any format or system
				</Badge>
			</div>
		),
	},
	{
		title: "Unlimited Scraping",
		description: "Fresh leads that don't cost extra",
		icon: <DatabaseZap className="h-6 w-6 text-accent" />,
		className: layout.startFive,
		background: (
			<Lottie
				animationData={marketAnalysis}
				className="h-36 w-36 opacity-60"
				loop
				autoplay
			/>
		),
		content: (
			<div className="space-y-4 text-foreground">
				<div className="space-y-1">
					<h3 className="font-semibold text-white text-xl leading-tight [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
						Unlimited Scraping
					</h3>
					<p className="font-medium text-sm text-white/90 [text-shadow:0_1px_1px_rgba(0,0,0,0.3)]">
						Fresh leads that don't cost extra
					</p>
				</div>
				<p className="text-sm text-white/90 leading-6 [text-shadow:0_1px_1px_rgba(0,0,0,0.3)]">
					Scrape unlimited leads from Zillow, Realtor, LinkedIn, MLS, and more.
					No per-record fees, no limits. Get fresh data directly from the
					source, not rented lists. Open-source means you control your data
					pipeline.
				</p>
				<Badge
					variant="secondary"
					className="w-fit rounded-full bg-accent/15 px-3 py-1 font-semibold text-accent-foreground text-xs"
				>
					Unlimited scraping — no per-record costs
				</Badge>
			</div>
		),
	},
	{
		title: "Scrape Any Source",
		description: "MCP API Aggregator: Unified scraping interface",
		icon: <Globe className="h-6 w-6 text-accent" />,
		className: layout.startFour,
		background: (
			<Lottie
				animationData={voiceWave}
				className="h-40 w-40 opacity-60"
				loop
				autoplay
			/>
		),
		content: (
			<div className="space-y-4 rounded-2xl bg-gradient-to-br from-primary/15 via-accent/10 to-primary/5 p-4 text-left text-foreground shadow-[0_24px_60px_-38px_rgba(99,102,241,0.45)] backdrop-blur-md sm:p-6">
				<div className="space-y-1">
					<p className="font-semibold text-accent text-xs uppercase tracking-wide [text-shadow:0_1px_1px_rgba(0,0,0,0.3)]">
						MCP API Aggregator
					</p>
					<h3 className="font-semibold text-white text-xl leading-tight [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
						Scrape Any Source
					</h3>
				</div>
				<div className="space-y-3 text-sm text-white/90">
					<p className="font-medium text-white/90 [text-shadow:0_1px_1px_rgba(0,0,0,0.3)]">
						Pre-built plugins for Zillow, Realtor, LinkedIn, MLS, Facebook,
						Reddit, and Twitter. All sources normalized to Lead Standard Format
						(LSF) schemas.
					</p>
					<p className="[text-shadow:0_1px_1px_rgba(0,0,0,0.3)]">
						Use the Playwright engine to scrape any website. The unified MCP
						spec makes it easy to add new sources or create custom scrapers for
						your specific needs.
					</p>
				</div>
				<Badge
					variant="secondary"
					className="w-fit rounded-full bg-primary/20 px-3 py-1 font-semibold text-primary-foreground text-xs backdrop-blur-sm"
				>
					One interface, unlimited sources
				</Badge>
			</div>
		),
	},
];
