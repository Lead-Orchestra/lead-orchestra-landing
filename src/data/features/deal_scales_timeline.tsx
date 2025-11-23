import type { TimelineEntry } from "@/components/ui/timeline";
// ! This file uses JSX and must be .tsx for correct TypeScript and Biome support.
import React from "react";
// * Lead Orchestra Feature Timeline
// ! Images should be optimized and have descriptive alt text
// todo: Refine milestone content and images as product evolves
// ! Use a CDN or Next.js <Image> for further optimization if/when migrated

export const dealScalesTimeline: TimelineEntry[] = [
	{
		title: "Q3 2024: Discovering the Data Scraping Problem",
		content: (
			<div>
				<p className="mb-8 font-normal text-neutral-800 text-xs md:text-sm dark:text-neutral-200">
					The journey began with deep-dive interviews with developers, agencies,
					and data teams. We identified the pain points in manual data
					extraction and saw a gap for open-source, developer-friendly scraping
					tools with unified MCP architecture.
				</p>
				<div className="grid grid-cols-2 gap-4">
					<img
						src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop"
						alt="Brainstorming session: identifying scraping bottlenecks with team at whiteboard."
						width={500}
						height={500}
						loading="lazy"
						className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
					/>
					<img
						src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop"
						alt="Team mapping scraping architecture and MCP plugin opportunities on diagrams."
						width={500}
						height={500}
						loading="lazy"
						className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
					/>
				</div>
			</div>
		),
	},
	{
		title: "Q4 2024: MVP Launch & Early Traction",
		content: (
			<div>
				<p className="mb-4 font-normal text-neutral-800 text-xs md:text-sm dark:text-neutral-200">
					Our MVP launched, focused on core scraping engine, MCP API aggregator,
					and data normalization. Early adopters saw a 70% reduction in manual
					data extraction time and access to fresh leads no one else had.
				</p>
				<div className="mb-8 space-y-2">
					<div className="flex items-center gap-2 text-neutral-700 text-xs md:text-sm dark:text-neutral-300">
						✅ 100+ developers and agencies onboarded with actionable feedback.
					</div>
					<div className="flex items-center gap-2 font-semibold text-neutral-800 text-xs md:text-sm dark:text-neutral-200">
						✅ 50+ custom scraping sources created using MCP plugin
						architecture.
					</div>
					<div className="flex items-center gap-2 text-neutral-700 text-xs md:text-sm dark:text-neutral-300">
						✅ Teams reported 3x faster lead acquisition with fresh, unique
						data.
					</div>
				</div>
				<div className="grid grid-cols-2 gap-4">
					<img
						src="https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?q=80&w=800&auto=format&fit=crop"
						alt="Team celebrating MVP launch with confetti and laptops."
						width={500}
						height={500}
						loading="lazy"
						className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
					/>
					<img
						src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=800&auto=format&fit=crop"
						alt="Dashboard showing scraping success analytics and data pipeline growth charts."
						width={500}
						height={500}
						loading="lazy"
						className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
					/>
				</div>
			</div>
		),
	},
	{
		title: "Q1 2025: Open-Source Ecosystem Expansion",
		content: (
			<div>
				<p className="font-normal text-neutral-800 text-xs md:text-sm dark:text-neutral-200">
					With feedback from early users, we doubled down on developer tooling,
					SDKs, and plugin marketplace. The platform began enabling teams to
					scrape any source, normalize data automatically, and export to their
					existing infrastructure.
				</p>
				<p className="mt-4 font-normal text-neutral-800 text-xs md:text-sm dark:text-neutral-200">
					Our mission: to become the essential scraping engine for every
					developer, agency, and data team who wants fresh leads, not rented
					lists.
				</p>
			</div>
		),
	},
];
