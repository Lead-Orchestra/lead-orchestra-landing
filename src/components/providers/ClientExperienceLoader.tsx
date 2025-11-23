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
 * Client-only component loader that NEVER renders during SSR.
 * This component is only imported and rendered on the client side.
 */
export function ClientExperienceLoader(props: ClientExperienceProps) {
	// This should NEVER execute during SSR because this component is only
	// imported/rendered on client. But add safety check anyway.
	if (typeof window === "undefined") {
		console.error(
			"[ClientExperienceLoader PRERENDER ERROR] Rendered during SSR! This should never happen.",
		);
		console.error("[ClientExperienceLoader PRERENDER] props:", props);
		console.error(
			"[ClientExperienceLoader PRERENDER] Stack trace:",
			new Error().stack,
		);
		return null;
	}

	console.error("[ClientExperienceLoader] Rendering on client");

	const [isLoaded, setIsLoaded] = useState(false);
	const ComponentRef = useRef<ComponentType<ClientExperienceProps> | null>(
		null,
	);

	useEffect(() => {
		console.log("[ClientExperienceLoader] Loading ClientExperienceWrapper...");
		import("./ClientExperienceWrapper")
			.then((mod) => {
				console.log("[ClientExperienceLoader] ClientExperienceWrapper loaded");
				ComponentRef.current = mod.ClientExperienceWrapper;
				setIsLoaded(true);
			})
			.catch((error) => {
				console.error("[ClientExperienceLoader] Failed to load:", error);
			});
	}, []);

	if (!isLoaded || !ComponentRef.current) {
		return null;
	}

	const Component = ComponentRef.current;
	return <Component {...props} />;
}
