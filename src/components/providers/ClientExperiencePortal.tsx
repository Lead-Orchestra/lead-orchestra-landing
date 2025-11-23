"use client";

import type { ComponentType } from "react";
import { useEffect, useRef, useState } from "react";

import type { AnalyticsConfig } from "@/lib/analytics/config";

type ClientExperiencePortalProps = {
	clarityProjectId?: string;
	zohoWidgetCode?: string;
	facebookPixelId?: string;
	plausibleDomain?: string;
	plausibleEndpoint?: string;
	initialAnalyticsConfig?: Partial<AnalyticsConfig>;
};

/**
 * Client-only portal component that loads ClientExperienceLoader.
 * This component is NEVER rendered during SSR - it's only imported and rendered on the client.
 * Uses native import() instead of dynamic() to avoid component object creation during SSR.
 */
export function ClientExperiencePortal(props: ClientExperiencePortalProps) {
	const [isLoaded, setIsLoaded] = useState(false);
	const componentRef =
		useRef<ComponentType<ClientExperiencePortalProps> | null>(null);

	useEffect(() => {
		// This only runs on client
		if (typeof window === "undefined") {
			if (process.env.NODE_ENV === "development") {
				console.warn(
					"[ClientExperiencePortal PRERENDER ERROR] Should never render during SSR!",
				);
			}
			return;
		}

		if (process.env.NODE_ENV === "development") {
			console.log(
				"[ClientExperiencePortal CLIENT] Loading component with native import...",
			);
		}
		// Use native import() instead of dynamic() - this avoids creating component objects
		import("./ClientExperienceLoader")
			.then((mod) => {
				if (process.env.NODE_ENV === "development") {
					console.log(
						"[ClientExperiencePortal CLIENT] Component loaded, storing in ref",
					);
				}
				// Store the actual component, not a dynamic wrapper
				componentRef.current = mod.ClientExperienceLoader;
				// Use state only to trigger re-render
				setIsLoaded(true);
			})
			.catch((error) => {
				console.error("[ClientExperiencePortal] Failed to load:", error);
			});
	}, []);

	if (!isLoaded || !componentRef.current) {
		return null;
	}

	const Component = componentRef.current;
	return <Component {...props} />;
}
