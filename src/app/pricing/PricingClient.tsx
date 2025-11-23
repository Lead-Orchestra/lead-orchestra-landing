"use client";

import ExitIntentBoundary from "@/components/exit-intent/ExitIntentBoundary";
import CatalogPricing from "@/components/pricing/CatalogPricing";
import { exitIntentEnabled } from "@/lib/config/exitIntent";
import { usePersonaStore } from "@/stores/usePersonaStore";
import type { PricingCatalog } from "@/types/service/plans";
import { useSearchParams } from "next/navigation";

/**
 * Props for PricingClient, supporting callbackUrl for post-auth/payment redirects.
 */
interface PricingProps {
	title?: string;
	subtitle?: string;
	catalog: PricingCatalog;
}

const PricingClient: React.FC<PricingProps> = ({
	title = "Success-Based Pricing",
	subtitle = "Invest in automation outcomes with pilot pricing locked for two years.",
	catalog,
}: PricingProps) => {
	const searchParams = useSearchParams();
	const callbackUrl = searchParams?.get("callbackUrl") || undefined;
	const persona = usePersonaStore((state) => state.persona);

	// Show open source preview for developers, free trial for agencies
	const showFreePreview = persona === "developer" || persona === "agency";
	const showOpenSource = persona === "developer";

	const shouldRenderExitIntent = exitIntentEnabled();
	const content = (
		<div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16 dark:from-black dark:to-gray-900">
			<CatalogPricing
				title={title}
				subtitle={subtitle}
				catalog={catalog}
				callbackUrl={callbackUrl}
				showFreePreview={showFreePreview}
				showOpenSource={showOpenSource}
			/>
		</div>
	);

	return shouldRenderExitIntent ? (
		<ExitIntentBoundary variant="pricing">{content}</ExitIntentBoundary>
	) : (
		content
	);
};

export default PricingClient;
