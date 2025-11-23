"use client";

import type { ComponentType } from "react";
import { useEffect, useRef, useState } from "react";

import type { AnalyticsConfig } from "@/lib/analytics/config";

type ClientExperienceProps = {
	clarityProjectId?: string;
	zohoWidgetCode?: string;
	facebookPixelId?: string;
	plausibleDomain?: string;
	plausibleEndpoint?: string;
	initialAnalyticsConfig?: Partial<AnalyticsConfig>;
};

/**
 * Client-only renderer that safely renders ClientExperienceWrapper.
 * NEVER renders during SSR/prerendering - returns null immediately.
 * Uses native dynamic import inside useEffect and stores component in ref (not state)
 * to avoid React serialization during prerendering.
 */
export function ClientExperienceRenderer({
	props,
}: { props: ClientExperienceProps }) {
	// During SSR, return null immediately - never evaluate anything
	// This check MUST be first, before any hooks
	if (typeof window === "undefined") {
		console.log(
			"[ClientExperienceRenderer] SSR detected - returning null immediately",
		);
		return null;
	}

	const [shouldRender, setShouldRender] = useState(false);
	const componentRef = useRef<ComponentType<ClientExperienceProps> | null>(
		null,
	);

	// Only load component on client after mount
	useEffect(() => {
		console.log("[ClientExperienceRenderer] useEffect running on client");
		import("./ClientExperienceWrapper")
			.then((mod) => {
				console.log("[ClientExperienceRenderer] Component loaded successfully");
				// Store in ref (not state) to avoid React serialization
				componentRef.current = mod.ClientExperienceWrapper;
				// Use state flag to trigger re-render
				setShouldRender(true);
			})
			.catch((error) => {
				console.error(
					"[ClientExperienceRenderer] Failed to load component:",
					error,
				);
			});
	}, []);

	// Don't render until component is loaded
	if (!shouldRender || !componentRef.current) {
		if (typeof window !== "undefined") {
			console.log(
				"[ClientExperienceRenderer] Not rendering yet - shouldRender:",
				shouldRender,
				"hasComponent:",
				!!componentRef.current,
			);
		}
		return null;
	}

	const Component = componentRef.current;
	console.log("[ClientExperienceRenderer] Rendering component");
	return <Component {...props} />;
}
