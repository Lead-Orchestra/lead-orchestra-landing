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
 * Client-only wrapper for ClientExperience component.
 *
 * This component is loaded via Next.js dynamic() with ssr: false, so it should
 * never be rendered during SSR. However, we add extra safety checks to ensure
 * it's completely inert during build/prerendering.
 *
 * SOLUTION:
 * - Use native import() inside useEffect (never evaluated during build)
 * - Store component in ref (not state) to avoid React serialization
 * - Use a simple boolean state flag to trigger re-render
 * - Component ref is never part of React's serializable state
 * - Early return if window is undefined (extra safety)
 */
export function ClientExperienceWrapper(props: ClientExperienceProps) {
	// Extra safety: return null immediately if window is undefined
	// This should never happen with dynamic() ssr: false, but provides defense in depth
	if (typeof window === "undefined") {
		console.error(
			"[ClientExperienceWrapper PRERENDER ERROR] Component rendered during SSR! This should never happen.",
		);
		return null;
	}

	const [shouldRender, setShouldRender] = useState(false);
	const componentRef = useRef<ComponentType<ClientExperienceProps> | null>(
		null,
	);

	useEffect(() => {
		// Use native dynamic import - NOT evaluated during build
		import("./ClientExperience")
			.then((mod) => {
				// Store in ref (not state) to avoid React serialization
				componentRef.current = mod.ClientExperience;
				// Use state only to trigger re-render, not to store component
				setShouldRender(true);
			})
			.catch((error) => {
				if (process.env.NODE_ENV !== "production") {
					console.error("Failed to load ClientExperience:", error);
				}
			});
	}, []);

	// During initial render: shouldRender is false, return null
	// componentRef is never serialized because refs aren't part of React state
	if (!shouldRender || !componentRef.current) {
		return null;
	}

	// Only render on client after component is loaded
	// componentRef.current is safe because refs don't get serialized
	const Component = componentRef.current;
	return <Component {...props} />;
}
