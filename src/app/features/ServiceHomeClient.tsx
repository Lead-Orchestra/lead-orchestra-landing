"use client";
import BentoPage from "@/components/bento/page";
import { CTASection } from "@/components/common/CTASection";
import Header from "@/components/common/Header";
import { TechStackSection } from "@/components/common/TechStackSection";
import { FeatureTimelineTable } from "@/components/features/FeatureTimelineTable";
import UpcomingFeatures from "@/components/home/FeatureVote";
import ServicesSection from "@/components/home/Services";
import Hero from "@/components/home/heros/Hero";
import HeroSessionMonitor from "@/components/home/heros/HeroSessionMonitor";
import HeroSessionMonitorClientWithModal from "@/components/home/heros/HeroSessionMonitorClientWithModal";
import { Separator } from "@/components/ui/separator";
import { useHasMounted } from "@/hooks/useHasMounted";
import { useDataModule } from "@/stores/useDataModuleStore";
import {
	SERVICE_CATEGORIES,
	type ServiceCategoryValue,
} from "@/types/service/services";
import { useEffect, useMemo, useState } from "react";

const SectionFallback = ({
	label,
	error,
}: { label: string; error?: unknown }) => (
	<div className="flex items-center justify-center rounded-2xl border border-white/10 bg-black/20 p-10 text-white/70">
		<span className="text-sm">
			{error ? `Unable to load ${label}.` : `Loading ${label}…`}
		</span>
	</div>
);

export default function ServiceHomeClient() {
	const [activeTab, setActiveTab] = useState<ServiceCategoryValue>(
		SERVICE_CATEGORIES.LEAD_GENERATION,
	);
	const hasMounted = useHasMounted();
	const {
		status: integrationsStatus,
		stacks: integrationsStacks,
		error: integrationsError,
	} = useDataModule(
		"service/slug_data/integrations",
		({ status, data, error }) => ({
			status,
			stacks: data?.leadGenIntegrations ?? [],
			error,
		}),
	);
	const {
		status: bentoStatus,
		features: bentoFeatures,
		error: bentoError,
	} = useDataModule("bento/main", ({ status, data, error }) => ({
		status,
		features: data?.MainBentoFeatures ?? [],
		error,
	}));
	const {
		status: timelineStatus,
		milestones,
		error: timelineError,
	} = useDataModule("features/feature_timeline", ({ status, data, error }) => ({
		status,
		milestones: data?.featureTimeline ?? [],
		error,
	}));

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const industry = urlParams.get("industry");
		if (
			industry &&
			(Object.values(SERVICE_CATEGORIES) as string[]).includes(industry)
		) {
			setActiveTab(industry as ServiceCategoryValue);
		}
	}, []);

	const resolvedStacks = useMemo(
		() => (integrationsStatus === "ready" ? integrationsStacks : []),
		[integrationsStatus, integrationsStacks],
	);
	const resolvedBentoFeatures = useMemo(
		() => (bentoStatus === "ready" ? bentoFeatures : []),
		[bentoStatus, bentoFeatures],
	);
	const resolvedTimeline = useMemo(
		() => (timelineStatus === "ready" ? milestones : []),
		[timelineStatus, milestones],
	);

	const handleIndustryChange = (value: ServiceCategoryValue) => {
		setActiveTab(value);
		window.history.replaceState(
			null,
			"",
			`${window.location.pathname}?industry=${value}`,
		);
	};

	if (!hasMounted) return null;

	return (
		<>
			{/* <HeroSessionMonitorClientWithModal /> */}

			<section className="px-6 md:py-20 lg:px-8">
				<div className="mx-auto max-w-7xl">
					<ServicesSection
						title="Our Comprehensive Services"
						subtitle="Tailored solutions to meet your business needs"
						showTabs={[
							SERVICE_CATEGORIES.LEAD_GENERATION,
							SERVICE_CATEGORIES.LEAD_PREQUALIFICATION,
							SERVICE_CATEGORIES.SKIP_TRACING,
							SERVICE_CATEGORIES.AI_FEATURES,
							SERVICE_CATEGORIES.REAL_ESTATE_TOOLS,
						]}
						showSearch={false}
						showCategories={false}
						activeTab={activeTab}
						onTabChange={handleIndustryChange}
					/>
				</div>
			</section>
			<Separator className="mx-auto my-16 max-w-7xl border-white/10" />
			<section className="px-6 md:py-20 lg:px-8">
				<div className="mx-auto max-w-7xl">
					<UpcomingFeatures />
				</div>
			</section>
			<Separator className="mx-auto my-16 max-w-7xl border-white/10" />
			{integrationsStatus === "ready" ? (
				<TechStackSection
					title="Integrations"
					description="Connect Lead Orchestra seamlessly with your CRM, databases, workflow engines, and data platforms. Export scraped leads to any system via CSV, JSON, Database, S3, or API. Integrate with n8n, Make, Zapier, Kestra, and other automation tools trusted by developers and agencies."
					stacks={resolvedStacks}
				/>
			) : (
				<SectionFallback
					label="integrations"
					error={integrationsStatus === "error" ? integrationsError : undefined}
				/>
			)}
			<Separator className="mx-auto my-16 max-w-7xl border-white/10" />
			{bentoStatus === "ready" && resolvedBentoFeatures.length > 0 ? (
				<BentoPage
					features={resolvedBentoFeatures}
					title={"Why Developers & Agencies Choose Lead Orchestra"}
					subtitle={
						"Open-source scraping that plugs into anything. Scrape any website, normalize data, and export to your stack—no vendor lock-in."
					}
				/>
			) : (
				<SectionFallback
					label="feature highlights"
					error={bentoStatus === "error" ? bentoError : undefined}
				/>
			)}
			<div className="my-12">
				<Header
					title="How Lead Orchestra Works"
					subtitle="Here's a timeline of our journey."
				/>
				{timelineStatus === "ready" && resolvedTimeline.length > 0 ? (
					<FeatureTimelineTable rows={resolvedTimeline} />
				) : (
					<SectionFallback
						label="feature roadmap"
						error={timelineStatus === "error" ? timelineError : undefined}
					/>
				)}
				<Separator className="my-8" />
			</div>
			<CTASection
				title="Ready to Scrape Fresh Leads?"
				description="Lead Orchestra is your open-source scraping engine for extracting leads from any website. Scrape, normalize, and export—get fresh data no one else has. Built for developers, agencies, and data teams."
				buttonText="Start Scraping"
				href="/get-started"
			/>
		</>
	);
}
