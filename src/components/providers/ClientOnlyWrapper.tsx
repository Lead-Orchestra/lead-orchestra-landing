"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";

/**
 * Wrapper that only renders children on the client side.
 * This prevents any component objects from being serialized during SSR/prerendering.
 */
export function ClientOnlyWrapper({ children }: { children: ReactNode }) {
	// DEBUG: Log immediately
	if (typeof window === "undefined") {
		console.error(
			"[ClientOnlyWrapper PRERENDER ERROR] Rendered during SSR! This should never happen.",
		);
		console.error(
			"[ClientOnlyWrapper PRERENDER] children type:",
			typeof children,
		);
		console.error("[ClientOnlyWrapper PRERENDER] children:", children);
	}

	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		console.error(
			"[ClientOnlyWrapper] useEffect running - setting isClient to true",
		);
		setIsClient(true);
	}, []);

	// Never render during SSR - return null
	if (!isClient) {
		if (typeof window === "undefined") {
			console.error(
				"[ClientOnlyWrapper PRERENDER] Returning null - not client yet and window is undefined",
			);
		}
		return null;
	}

	console.error("[ClientOnlyWrapper] Rendering children on client");
	return <>{children}</>;
}
