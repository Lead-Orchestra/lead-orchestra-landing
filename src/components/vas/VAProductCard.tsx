"use client";

import type { VAProfile } from "@/types/va";
import { MessageCircle, Star } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

interface VAProductCardProps {
	va: VAProfile;
	onClick?: () => void;
	onHire?: (va: VAProfile) => void;
	onMessage?: (va: VAProfile) => void;
	className?: string;
}

export const VAProductCard: React.FC<VAProductCardProps> = ({
	va,
	onClick,
	onHire,
	onMessage,
	className = "",
}) => {
	const router = useRouter();

	const handleHire = useCallback(() => {
		if (onHire) {
			onHire(va);
		} else if (onClick) {
			onClick();
		} else {
			router.push(`/vas/hire/${va.id}`);
		}
	}, [onHire, onClick, router, va]);

	const handleMessage = useCallback(() => {
		if (onMessage) {
			onMessage(va);
		} else {
			router.push(`/vas/message/${va.id}`);
		}
	}, [onMessage, router, va]);

	return (
		<div
			className={`relative flex h-full flex-col rounded-xl border border-slate-200 bg-gradient-to-b from-white via-white to-slate-50 p-6 text-slate-900 shadow-md transition-all duration-200 hover:shadow-lg dark:border-slate-800 dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-900/80 dark:to-slate-950 dark:text-slate-100 dark:shadow-lg/20 ${className}`}
		>
			{/* Avatar */}
			<div className="mb-4 flex items-center gap-4">
				<div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
					{va.image ? (
						<img
							src={va.image}
							alt={va.name}
							className="h-full w-full object-cover"
						/>
					) : (
						<div className="flex h-full w-full items-center justify-center font-semibold text-2xl text-slate-500">
							{va.name.charAt(0)}
						</div>
					)}
				</div>
				<div className="flex-1">
					<h3 className="font-semibold text-slate-900 dark:text-white">
						{va.name}
					</h3>
					<p className="text-slate-600 text-sm dark:text-slate-400">
						{va.title}
					</p>
					<div className="mt-1 flex items-center gap-2">
						<Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
						<span className="font-medium text-slate-900 text-sm dark:text-white">
							{va.rating}
						</span>
						<span className="text-slate-500 text-xs dark:text-slate-400">
							({va.reviews} reviews)
						</span>
					</div>
				</div>
			</div>

			{/* Bio Preview */}
			<p className="mb-4 line-clamp-2 text-slate-700 text-sm dark:text-slate-300">
				{va.bio}
			</p>

			{/* Specialties */}
			<div className="mb-4">
				<div className="flex flex-wrap gap-1">
					{va.specialties.slice(0, 3).map((specialty) => (
						<span
							key={specialty}
							className="rounded bg-blue-100 px-2 py-1 text-blue-800 text-xs dark:bg-blue-900 dark:text-blue-200"
						>
							{specialty}
						</span>
					))}
					{va.specialties.length > 3 && (
						<span className="rounded bg-slate-100 px-2 py-1 text-slate-600 text-xs dark:bg-slate-700 dark:text-slate-400">
							+{va.specialties.length - 3}
						</span>
					)}
				</div>
			</div>

			{/* Stats */}
			<div className="mb-4 space-y-2 border-slate-200 border-t pt-4 text-sm dark:border-slate-700">
				<div className="flex items-center justify-between">
					<span className="text-slate-600 dark:text-slate-400">
						Leads Managed:
					</span>
					<span className="font-semibold text-slate-900 dark:text-white">
						{va.leadsManaged.toLocaleString()}
					</span>
				</div>
				<div className="flex items-center justify-between">
					<span className="text-slate-600 dark:text-slate-400">Rate:</span>
					<span className="font-semibold text-slate-900 dark:text-white">
						${va.hourlyRate}/hr
					</span>
				</div>
				{va.commissionPercentage && (
					<div className="flex items-center justify-between">
						<span className="text-slate-600 dark:text-slate-400">
							Commission:
						</span>
						<span className="font-semibold text-green-600 dark:text-green-400">
							{va.commissionPercentage}%
						</span>
					</div>
				)}
				{va.hybridSaaS && (
					<div className="rounded-md bg-purple-50 p-2 dark:bg-purple-900/20">
						<div className="flex items-center justify-between text-xs">
							<span className="text-slate-600 dark:text-slate-400">
								Hybrid SaaS:
							</span>
							<span className="font-semibold text-purple-700 dark:text-purple-300">
								{va.hybridSaaS.commissionPercentage}% ({va.hybridSaaS.split})
							</span>
						</div>
					</div>
				)}
			</div>

			{/* Location & Availability */}
			<div className="mb-4 flex items-center gap-2 text-slate-500 text-xs dark:text-slate-400">
				<span>{va.location}</span>
				<span>•</span>
				<span>{va.availability}</span>
			</div>

			{/* CTA Buttons */}
			<div className="mt-auto flex gap-2">
				<button
					type="button"
					onClick={handleHire}
					className="flex-1 rounded-lg bg-blue-600 px-4 py-2.5 font-medium text-sm text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
				>
					Hire {va.name.split(" ")[0]}
				</button>
				<button
					type="button"
					onClick={handleMessage}
					className="flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 font-medium text-slate-700 text-sm transition-colors hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
					aria-label={`Message ${va.name}`}
				>
					<MessageCircle className="h-4 w-4" />
				</button>
			</div>
		</div>
	);
};
