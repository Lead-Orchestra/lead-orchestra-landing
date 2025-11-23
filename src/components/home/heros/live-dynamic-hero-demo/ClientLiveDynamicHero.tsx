"use client";

// TEMPORARILY DISABLED: Module-level dynamic() causes SSR serialization errors
// This file is not being used - LiveDynamicHero is commented out in page.tsx
// import dynamic from 'next/dynamic';

// Client wrapper component that handles dynamic import with ssr: false
// This prevents Next.js from trying to evaluate the component during SSR
// const LiveDynamicHero = dynamic(
// 	() => import('./page'),
// 	{
// 		ssr: false,
// 		loading: () => (
// 			<section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-gradient-to-b from-background via-muted/40 to-background text-foreground">
// 				<div className="pointer-events-none absolute inset-0">
// 					<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.22)_0%,rgba(15,23,42,0)_62%)] opacity-80" />
// 				</div>
// 				<div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-8 px-6 py-16 text-center sm:px-10">
// 					<h1 className="font-bold text-4xl text-foreground leading-tight sm:text-5xl md:text-6xl">
// 						Loading...
// 					</h1>
// 				</div>
// 			</section>
// 		),
// 	}
// );

export default function ClientLiveDynamicHero() {
	// Return null since this component is not being used
	return null;
	// return <LiveDynamicHero />;
}
