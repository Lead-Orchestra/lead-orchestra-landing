"use client";

import { useEffect, useRef, useState } from "react";
import type { ComponentType } from "react";

/**
 * Server-safe wrapper for LiveDynamicHero.
 * Dynamically imports ClientLiveDynamicHero to prevent SSR evaluation.
 * This component is used in server components (like page.tsx).
 */
export default function ServerLiveDynamicHero() {
	const [isLoaded, setIsLoaded] = useState(false);
	const componentRef = useRef<ComponentType | null>(null);

	useEffect(() => {
		// Only run on client
		if (typeof window === "undefined") return;

		// Dynamically import the client wrapper component
		import("./ClientLiveDynamicHero")
			.then((mod) => {
				componentRef.current = mod.default;
				setIsLoaded(true);
			})
			.catch((error) => {
				console.error("[ServerLiveDynamicHero] Failed to load:", error);
			});
	}, []);

	if (!isLoaded || !componentRef.current) {
		// Return loading state that matches the hero section
		return (
			<section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-gradient-to-b from-background via-muted/40 to-background text-foreground">
				<div className="pointer-events-none absolute inset-0">
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.22)_0%,rgba(15,23,42,0)_62%)] opacity-80" />
				</div>
				<div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-8 px-6 py-16 text-center sm:px-10">
					<h1 className="font-bold text-4xl text-foreground leading-tight sm:text-5xl md:text-6xl">
						Loading...
					</h1>
				</div>
			</section>
		);
	}

	const Component = componentRef.current;
	return <Component />;
}
