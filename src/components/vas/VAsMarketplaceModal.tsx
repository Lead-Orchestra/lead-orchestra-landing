"use client";

import { mockVAs } from "@/data/vas/mockVAs";
import type { VAProfile } from "@/types/va";
import { ChevronLeft, ChevronRight, MessageCircle, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import BecomeAVACard from "./BecomeAVACard";

interface VAsMarketplaceModalProps {
	isOpen: boolean;
	onClose: () => void;
	onApplyClick?: () => void;
	onHire?: (va: VAProfile) => void;
	onMessage?: (va: VAProfile) => void;
}

interface VACardProps {
	va: VAProfile;
	onApplyClick?: () => void;
	onHire?: (va: VAProfile) => void;
	onMessage?: (va: VAProfile) => void;
}

// Lazy loading wrapper component using Intersection Observer
const LazyVACard = ({ va, onApplyClick, onHire, onMessage }: VACardProps) => {
	const [isVisible, setIsVisible] = useState(false);
	const cardRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ rootMargin: "50px" },
		);

		if (cardRef.current) {
			observer.observe(cardRef.current);
		}

		return () => observer.disconnect();
	}, []);

	if (!isVisible) {
		return (
			<div
				ref={cardRef}
				className="flex min-h-[220px] animate-pulse flex-col rounded-lg border border-slate-200 bg-slate-100 p-6 dark:border-slate-700 dark:bg-slate-800"
			>
				<div className="mb-4 h-16 w-16 rounded-full bg-slate-300 dark:bg-slate-600" />
				<div className="mb-2 h-4 w-3/4 rounded bg-slate-300 dark:bg-slate-600" />
				<div className="mb-4 h-4 w-1/2 rounded bg-slate-300 dark:bg-slate-600" />
				<div className="h-20 w-full rounded bg-slate-300 dark:bg-slate-600" />
			</div>
		);
	}

	return (
		<VACard
			va={va}
			onApplyClick={onApplyClick}
			onHire={onHire}
			onMessage={onMessage}
		/>
	);
};

const VACard = ({ va, onApplyClick, onHire, onMessage }: VACardProps) => {
	const router = useRouter();

	const handleHire = useCallback(() => {
		if (onHire) {
			onHire(va);
		} else if (onApplyClick) {
			onApplyClick();
		} else {
			router.push(`/vas/hire/${va.id}`);
		}
	}, [onHire, onApplyClick, router, va]);

	const handleMessage = useCallback(() => {
		if (onMessage) {
			onMessage(va);
		} else {
			router.push(`/vas/message/${va.id}`);
		}
	}, [onMessage, router, va]);

	return (
		<div className="flex min-h-[220px] flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-md transition-all hover:shadow-lg dark:border-slate-700 dark:bg-slate-800">
			<div className="mb-4 flex items-start justify-between">
				<div className="flex items-center gap-4">
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
					<div>
						<h3 className="font-semibold text-slate-900 dark:text-white">
							{va.name}
						</h3>
						<p className="text-slate-600 text-sm dark:text-slate-400">
							{va.title}
						</p>
						<div className="mt-1 flex items-center gap-2">
							<span className="font-medium text-sm text-yellow-600 dark:text-yellow-500">
								★ {va.rating}
							</span>
							<span className="text-slate-500 text-xs dark:text-slate-400">
								({va.reviews} reviews)
							</span>
						</div>
					</div>
				</div>
			</div>

			<div className="mb-4 flex-1">
				<p className="mb-3 text-slate-700 text-sm dark:text-slate-300">
					{va.bio}
				</p>

				<div className="mb-3">
					<p className="mb-1 font-semibold text-slate-600 text-xs dark:text-slate-400">
						Specialties:
					</p>
					<div className="flex flex-wrap gap-1">
						{va.specialties.map((specialty) => (
							<span
								key={specialty}
								className="rounded bg-blue-100 px-2 py-1 text-blue-800 text-xs dark:bg-blue-900 dark:text-blue-200"
							>
								{specialty}
							</span>
						))}
					</div>
				</div>

				<div className="mb-3">
					<p className="mb-1 font-semibold text-slate-600 text-xs dark:text-slate-400">
						CRM Experience:
					</p>
					<div className="flex flex-wrap gap-1">
						{va.crmExperience.map((crm) => (
							<span
								key={crm}
								className="rounded bg-purple-100 px-2 py-1 text-purple-800 text-xs dark:bg-purple-900 dark:text-purple-200"
							>
								{crm}
							</span>
						))}
					</div>
				</div>

				<div className="mb-3 space-y-2 text-sm">
					<div className="flex items-center justify-between">
						<span className="text-slate-600 dark:text-slate-400">
							Leads Managed:{" "}
						</span>
						<span className="font-semibold text-slate-900 dark:text-white">
							{va.leadsManaged.toLocaleString()}
						</span>
					</div>
					<div className="flex items-center justify-between">
						<span className="text-slate-600 dark:text-slate-400">Rate: </span>
						<span className="font-semibold text-slate-900 dark:text-white">
							${va.hourlyRate}/hr
						</span>
					</div>
					{va.commissionPercentage && (
						<div className="flex items-center justify-between">
							<span className="text-slate-600 dark:text-slate-400">
								Commission:{" "}
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
									Hybrid SaaS:{" "}
								</span>
								<span className="font-semibold text-purple-700 dark:text-purple-300">
									{va.hybridSaaS.commissionPercentage}% ({va.hybridSaaS.split}{" "}
									split)
								</span>
							</div>
						</div>
					)}
				</div>

				<div className="mt-2 flex items-center gap-2 text-slate-500 text-xs dark:text-slate-400">
					<span>{va.location}</span>
					<span>•</span>
					<span>{va.availability}</span>
				</div>
			</div>

			<div className="mt-4 flex gap-2">
				<button
					type="button"
					onClick={handleHire}
					className="flex-1 rounded-lg bg-blue-600 px-4 py-2 font-medium text-sm text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
				>
					Hire {va.name.split(" ")[0]}
				</button>
				<button
					type="button"
					onClick={handleMessage}
					className="flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 font-medium text-slate-700 text-sm transition-colors hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
					aria-label={`Message ${va.name}`}
				>
					<MessageCircle className="h-4 w-4" />
				</button>
			</div>
		</div>
	);
};

const VAsMarketplaceModal = ({
	isOpen,
	onClose,
	onApplyClick,
	onHire,
	onMessage,
}: VAsMarketplaceModalProps) => {
	const router = useRouter();
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 6;

	const handleApplyClick = useCallback(() => {
		if (onApplyClick) {
			onApplyClick();
		} else {
			router.push("/vas/apply");
		}
	}, [onApplyClick, router]);

	const top3VAs = useMemo(() => {
		return mockVAs
			.sort((a, b) => {
				// Sort by rating first, then by leads managed
				if (b.rating !== a.rating) return b.rating - a.rating;
				return b.leadsManaged - a.leadsManaged;
			})
			.slice(0, 3);
	}, []);

	const paginatedVAs = useMemo(() => {
		// Skip top 3 VAs in pagination since they're shown separately
		const remainingVAs = mockVAs
			.sort((a, b) => {
				if (b.rating !== a.rating) return b.rating - a.rating;
				return b.leadsManaged - a.leadsManaged;
			})
			.slice(3);
		const startIndex = (currentPage - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;
		return remainingVAs.slice(startIndex, endIndex);
	}, [currentPage]);

	const totalPages = Math.ceil((mockVAs.length - 3) / itemsPerPage);

	const handlePreviousPage = useCallback(() => {
		setCurrentPage((prev) => Math.max(1, prev - 1));
	}, []);

	const handleNextPage = useCallback(() => {
		setCurrentPage((prev) => Math.min(totalPages, prev + 1));
	}, [totalPages]);

	if (!isOpen) return null;

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
			onClick={onClose}
			onKeyDown={(e) => {
				if (e.key === "Escape") onClose();
			}}
		>
			<div
				className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto scroll-smooth rounded-lg bg-white shadow-xl dark:bg-slate-900"
				onClick={(e) => e.stopPropagation()}
				onKeyDown={(e) => e.stopPropagation()}
				style={{
					scrollBehavior: "smooth",
					scrollPaddingTop: "1rem",
				}}
			>
				<div className="sticky top-0 z-10 flex items-center justify-between border-slate-200 border-b bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
					<div className="flex items-center gap-3">
						<h2 className="font-bold text-2xl text-slate-900 dark:text-white">
							Virtual Assistants
						</h2>
						<span className="rounded-full bg-blue-100 px-3 py-1 font-semibold text-blue-800 text-xs dark:bg-blue-900 dark:text-blue-200">
							All VAs
						</span>
						<span className="rounded-full bg-purple-100 px-3 py-1 font-semibold text-purple-800 text-xs dark:bg-purple-900 dark:text-purple-200">
							{mockVAs.length} Available
						</span>
					</div>
					<button
						type="button"
						onClick={onClose}
						className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
						aria-label="Close modal"
					>
						<X className="h-6 w-6" />
					</button>
				</div>

				<div className="p-6">
					{/* Top 3 VAs + Apply Card */}
					<div className="mb-6">
						<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
							<BecomeAVACard onClick={handleApplyClick} className="w-full" />
							{top3VAs.map((va) => (
								<VACard
									key={va.id}
									va={va}
									onApplyClick={handleApplyClick}
									onHire={onHire}
									onMessage={onMessage}
								/>
							))}
						</div>
					</div>

					{/* All Other VAs with Lazy Loading */}
					{paginatedVAs.length > 0 && (
						<div className="mb-4">
							<div className="mb-4 flex items-center gap-2">
								<h3 className="font-semibold text-lg text-slate-900 dark:text-white">
									All Virtual Assistants
								</h3>
								<span className="rounded-full bg-slate-100 px-2 py-1 text-slate-600 text-xs dark:bg-slate-800 dark:text-slate-400">
									{mockVAs.length - 3} more
								</span>
							</div>
							<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
								{paginatedVAs.map((va) => (
									<LazyVACard
										key={va.id}
										va={va}
										onApplyClick={handleApplyClick}
										onHire={onHire}
										onMessage={onMessage}
									/>
								))}
							</div>
						</div>
					)}

					{totalPages > 0 && paginatedVAs.length > 0 && (
						<div className="mt-6 flex items-center justify-center gap-4">
							<button
								type="button"
								onClick={handlePreviousPage}
								disabled={currentPage === 1}
								className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 font-medium text-slate-700 text-sm transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
							>
								<ChevronLeft className="h-4 w-4" />
								Previous
							</button>
							<span className="text-slate-600 text-sm dark:text-slate-400">
								Page {currentPage} of {totalPages}
							</span>
							<button
								type="button"
								onClick={handleNextPage}
								disabled={currentPage === totalPages}
								className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 font-medium text-slate-700 text-sm transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
							>
								Next
								<ChevronRight className="h-4 w-4" />
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default VAsMarketplaceModal;
