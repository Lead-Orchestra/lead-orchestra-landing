"use client";

import { useHeroTrialCheckout } from "@/components/home/heros/useHeroTrialCheckout";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { File, Info, Loader2, Play, Search, Upload } from "lucide-react";
import {
	CheckCircle2,
	Database,
	MessageSquare,
	Phone,
	Zap,
} from "lucide-react";
import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { ProcessingStatusList } from "./ProcessingStatusList";
import {
	type BadgeMetrics,
	ReactivateCampaignBadges,
} from "./ReactivateCampaignBadges";

interface ReactivateCampaignInputProps {
	onActivationComplete?: (metrics: BadgeMetrics) => void;
	className?: string;
}

const PLACEHOLDER_OPTIONS = [
	"Scrape leads from Zillow",
	"Extract data from any website",
	"Normalize and export lead data",
	"Scrape niche sources competitors miss",
	"Export to CRM, CSV, or Database",
	"Integrate with Zapier, Make, or n8n",
	"Create lookalike audience",
	"Scrape niche create lookalike audience",
	"Extract leads create lookalike audience",
];

const PricingCheckoutDialog = dynamic(
	() => import("@/components/home/pricing/PricingCheckoutDialog"),
	{ ssr: false, loading: () => null },
);

export function ReactivateCampaignInput({
	onActivationComplete,
	className,
}: ReactivateCampaignInputProps) {
	const [searchValue, setSearchValue] = useState("");
	const [skipTrace, setSkipTrace] = useState(false);
	const [isProcessing, setIsProcessing] = useState(false);
	const [metrics, setMetrics] = useState<BadgeMetrics | null>(null);
	const [isFocused, setIsFocused] = useState(false);
	const [processingSteps, setProcessingSteps] = useState<
		Array<{
			id: string;
			label: string;
			icon: React.ReactNode;
			status: "pending" | "processing" | "completed";
		}>
	>([]);
	const [paymentCompleted, setPaymentCompleted] = useState(false);
	const [showEnrichInfo, setShowEnrichInfo] = useState(false);
	const [uploadedFile, setUploadedFile] = useState<File | null>(null);
	const [uploadMode, setUploadMode] = useState<"url" | "file">("url");
	const inputRef = useRef<HTMLInputElement>(null);
	const fileInputRef = useRef<HTMLInputElement>(null);
	const { checkoutState, startTrial, closeCheckout } = useHeroTrialCheckout();

	const resetActivationState = useCallback(() => {
		setIsProcessing(false);
		setProcessingSteps([]);
		setPaymentCompleted(false);
		setUploadedFile(null);
		closeCheckout();
	}, [closeCheckout]);

	const handleFileUpload = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const file = event.target.files?.[0];
			if (file) {
				setUploadedFile(file);
				setUploadMode("file");
				// Optionally read file content and set as search value
				if (file.type === "text/plain" || file.name.endsWith(".txt")) {
					const reader = new FileReader();
					reader.onload = (e) => {
						const text = e.target?.result as string;
						setSearchValue(text.trim().split("\n")[0] || "");
					};
					reader.readAsText(file);
				}
			}
		},
		[],
	);

	const handleFileClick = useCallback(() => {
		fileInputRef.current?.click();
	}, []);

	const handlePaymentSuccess = useCallback(() => {
		setPaymentCompleted(true);
		closeCheckout();

		// Continue with activation after payment success
		// The useEffect will trigger handleActivate when paymentCompleted becomes true
	}, [closeCheckout]);

	const handleActivate = useCallback(async () => {
		console.log("[ReactivateCampaign] Activation started", {
			searchValue: searchValue.trim(),
			skipTrace,
		});

		// Make search value optional - use default if empty
		const workflowRequirements =
			searchValue.trim() || "Scrape leads and export data";

		console.log("[ReactivateCampaign] Calling API with:", {
			url: searchValue.trim(),
			workflowRequirements,
			skipTrace,
		});

		// Initialize processing steps
		const initialSteps = [
			{
				id: "enrich",
				label: skipTrace ? "Normalizing data" : "Preparing scrape job",
				icon: <Database className="h-4 w-4" />,
				status: "pending" as const,
			},
			{
				id: "activate",
				label: "Scraping leads",
				icon: <Zap className="h-4 w-4" />,
				status: "pending" as const,
			},
			{
				id: "calling",
				label: "Extracting data points",
				icon: <Database className="h-4 w-4" />,
				status: "pending" as const,
			},
			{
				id: "texting",
				label: "Cleaning and validating",
				icon: <CheckCircle2 className="h-4 w-4" />,
				status: "pending" as const,
			},
			{
				id: "complete",
				label: "Export ready",
				icon: <CheckCircle2 className="h-4 w-4" />,
				status: "pending" as const,
			},
		];
		setProcessingSteps(initialSteps);
		setIsProcessing(true);

		// Simulate step progression
		const updateStep = (stepId: string, status: "processing" | "completed") => {
			setProcessingSteps((prev) =>
				prev.map((step) => (step.id === stepId ? { ...step, status } : step)),
			);
		};

		// Start first step - show initial processing
		setTimeout(() => updateStep("enrich", "processing"), 300);
		setTimeout(() => updateStep("enrich", "completed"), 800);

		// After initial processing, show payment modal
		setTimeout(async () => {
			try {
				await startTrial();
			} catch (error) {
				console.error("[ReactivateCampaign] Failed to start trial:", error);
				// Reset state on error
				resetActivationState();
				toast.error("Failed to start payment process. Please try again.");
			}
		}, 1000);
	}, [skipTrace, searchValue, startTrial, resetActivationState]);

	// Handle activation API call (separate from payment flow)
	const handleActivation = useCallback(async () => {
		if (!paymentCompleted) {
			console.log("[ReactivateCampaign] Waiting for payment completion");
			return;
		}

		const workflowRequirements =
			searchValue.trim() || "Scrape leads and export data";

		// Update step function for activation
		const updateStep = (stepId: string, status: "processing" | "completed") => {
			setProcessingSteps((prev) =>
				prev.map((step) => (step.id === stepId ? { ...step, status } : step)),
			);
		};

		// Start activation step
		setTimeout(() => updateStep("activate", "processing"), 100);

		try {
			const response = await fetch("/api/campaigns/reactivate", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					url: searchValue.trim(),
					skipTrace,
					workflowRequirements,
				}),
			});

			console.log("[ReactivateCampaign] API Response status:", response.status);

			if (!response.ok) {
				const errorData = await response
					.json()
					.catch(() => ({ error: "Unknown error", message: "Network error" }));
				console.error("[ReactivateCampaign] API Error:", errorData);

				// Handle specific error cases
				if (response.status === 401) {
					throw new Error(
						errorData.message || "Please sign in to activate campaigns",
					);
				}

				throw new Error(
					errorData.message ||
						errorData.error ||
						`Failed to activate contacts (${response.status})`,
				);
			}

			const data = await response.json();
			console.log("[ReactivateCampaign] API Success:", data);

			// Update steps based on API response
			setTimeout(() => updateStep("activate", "completed"), 100);
			setTimeout(() => updateStep("calling", "processing"), 200);
			setTimeout(() => updateStep("calling", "completed"), 600);
			setTimeout(() => updateStep("texting", "processing"), 700);
			setTimeout(() => updateStep("texting", "completed"), 1100);
			setTimeout(() => updateStep("complete", "processing"), 1200);
			setTimeout(() => updateStep("complete", "completed"), 1500);

			const calculatedMetrics: BadgeMetrics = {
				dollarAmount: data.metrics?.dollarAmount || 0,
				timeSavedHours: data.metrics?.timeSavedHours || 0,
				contactsActivated: data.metrics?.contactsActivated || 0,
				hobbyTimeHours: data.metrics?.hobbyTimeHours || 0,
			};

			// Wait for animation to complete before showing metrics
			setTimeout(() => {
				setMetrics(calculatedMetrics);
				toast.success(
					`Successfully activated ${calculatedMetrics.contactsActivated} contacts!`,
				);

				// Call completion callback
				onActivationComplete?.(calculatedMetrics);

				// Redirect to app.dealscale.io after a short delay
				setTimeout(() => {
					console.log("[ReactivateCampaign] Redirecting to app.dealscale.io");
					window.location.href = "https://app.dealscale.io";
				}, 2000);
			}, 1600);
		} catch (error) {
			console.error("[ReactivateCampaign] Activation error:", error);
			const errorMessage =
				error instanceof Error ? error.message : "Failed to activate contacts";
			toast.error(errorMessage);
		} finally {
			setIsProcessing(false);
		}
	}, [skipTrace, searchValue, onActivationComplete, paymentCompleted]);

	// Trigger activation API call when payment completes
	useEffect(() => {
		if (paymentCompleted && isProcessing) {
			// Small delay to ensure state is updated
			const timer = setTimeout(() => {
				handleActivation();
			}, 500);
			return () => clearTimeout(timer);
		}
	}, [paymentCompleted, isProcessing, handleActivation]);

	return (
		<div className={cn("mx-auto w-full max-w-4xl", className)}>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className="w-full"
			>
				{/* Search/Upload Bar Container */}
				<div className="relative flex w-full flex-col gap-3 rounded-2xl border border-sky-400/50 bg-white/80 px-4 py-4 shadow-[0_8px_30px_rgba(59,130,246,0.2)] backdrop-blur-xl transition-all duration-300 focus-within:border-sky-400 focus-within:shadow-[0_8px_30px_rgba(59,130,246,0.4)] dark:border-sky-500/40 dark:bg-white/10 dark:focus-within:border-sky-500 dark:focus-within:shadow-[0_8px_30px_rgba(59,130,246,0.3)]">
					{/* Search Input / File Upload */}
					<div className="relative flex flex-col gap-2">
						<div className="relative flex items-center gap-3">
							{uploadMode === "file" && uploadedFile ? (
								<File className="h-5 w-5 shrink-0 text-sky-500 opacity-70 dark:text-sky-400" />
							) : (
								<Search className="h-5 w-5 shrink-0 text-sky-500 opacity-70 dark:text-sky-400" />
							)}
							<div className="relative flex-1">
								{uploadMode === "file" && uploadedFile ? (
									<div className="flex items-center gap-2 rounded-lg bg-slate-100/50 px-3 py-2 dark:bg-slate-800/50">
										<File className="h-4 w-4 text-sky-500" />
										<span className="flex-1 truncate text-slate-700 text-sm dark:text-slate-300">
											{uploadedFile.name}
										</span>
										<Button
											type="button"
											variant="ghost"
											size="sm"
											onClick={() => {
												setUploadedFile(null);
												setUploadMode("url");
												setSearchValue("");
											}}
											className="h-6 w-6 p-0 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
										>
											×
										</Button>
									</div>
								) : (
									<>
										<Input
											ref={inputRef}
											type="text"
											value={searchValue}
											onChange={(e) => setSearchValue(e.target.value)}
											onFocus={() => setIsFocused(true)}
											onBlur={() => setIsFocused(false)}
											onKeyDown={(e) => {
												if (e.key === "Enter" && !isProcessing) {
													handleActivate();
												}
											}}
											className="flex-1 border-0 bg-transparent text-base text-slate-900 placeholder:text-transparent focus-visible:ring-0 focus-visible:ring-offset-0 dark:text-white"
											disabled={isProcessing}
										/>
										{/* Animated Placeholder Overlay */}
										{!searchValue && !isFocused && (
											<div className="pointer-events-none absolute inset-0 flex items-center">
												<TypingAnimation
													words={PLACEHOLDER_OPTIONS}
													typeSpeed={80}
													deleteSpeed={40}
													pauseDelay={2000}
													loop={true}
													startOnView={false}
													showCursor={true}
													blinkCursor={true}
													cursorStyle="line"
													className="text-base text-slate-500 dark:text-slate-400"
													as="span"
												/>
											</div>
										)}
									</>
								)}
							</div>
							{/* File Upload Button */}
							<Button
								type="button"
								onClick={handleFileClick}
								disabled={isProcessing}
								variant="ghost"
								className="h-10 w-10 shrink-0 rounded-full border border-sky-500/30 p-0 text-sky-500 transition-all hover:border-sky-500/50 hover:bg-sky-500/10 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 dark:border-sky-400/30 dark:text-sky-400 dark:hover:bg-sky-500/20"
								aria-label="Upload file"
								title="Upload file"
							>
								<Upload className="h-5 w-5" />
							</Button>
							<input
								ref={fileInputRef}
								type="file"
								accept=".txt,.csv,.json"
								onChange={handleFileUpload}
								className="hidden"
								disabled={isProcessing}
							/>
							<Button
								type="button"
								onClick={handleActivate}
								disabled={
									isProcessing ||
									(uploadMode === "url" && !searchValue.trim() && !uploadedFile)
								}
								className="h-10 w-10 shrink-0 rounded-full bg-sky-500 p-0 text-white shadow-lg transition-all hover:bg-sky-600 hover:shadow-xl active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
								aria-label="Start scraping"
								title="Start scraping"
							>
								{isProcessing ? (
									<Loader2 className="h-5 w-5 animate-spin" />
								) : (
									<Play className="h-5 w-5" fill="currentColor" />
								)}
							</Button>
						</div>
						{/* Mobile-only hint */}
						<p className="text-slate-600 text-xs sm:hidden dark:text-white/60">
							Enter a URL, search term, or upload a file
						</p>
					</div>

					{/* Enrich Toggle with Info */}
					<div className="flex items-center justify-end gap-1.5 border-slate-200/50 border-t pt-3 sm:gap-2 dark:border-white/10">
						<Label
							htmlFor="enrich"
							className="flex cursor-pointer items-center gap-1 text-slate-700 text-sm sm:gap-1.5 dark:text-white/90"
						>
							<span className="hidden sm:inline">Enrich</span>
							{/* Mobile: Use Dialog, Desktop: Use Popover */}
							<>
								<button
									type="button"
									className="focus:outline-none sm:hidden"
									aria-label="Learn more about enrichment"
									onClick={(e) => {
										e.preventDefault();
										e.stopPropagation();
										setShowEnrichInfo(true);
									}}
								>
									<Info className="h-4 w-4 text-sky-500 opacity-90 transition-opacity active:opacity-100 dark:text-sky-400" />
								</button>
								<Popover>
									<PopoverTrigger asChild>
										<button
											type="button"
											className="hidden focus:outline-none sm:block"
											aria-label="Learn more about enrichment"
										>
											<Info className="h-3.5 w-3.5 text-sky-500 opacity-80 transition-opacity hover:opacity-100 dark:text-sky-400" />
										</button>
									</PopoverTrigger>
									<PopoverContent
										className="z-50 w-80 border-sky-500/30 bg-background-dark text-white"
										side="top"
										align="end"
									>
										<div className="space-y-3">
											<div>
												<h4 className="mb-2 font-semibold text-base text-white">
													What is Enrichment?
												</h4>
												<p className="text-sm text-white/80 leading-relaxed">
													Automatically enhance your contact data with verified
													phone numbers, email addresses, and additional
													metadata to improve data quality rate.
												</p>
											</div>
											<div>
												<h5 className="mb-2 font-semibold text-sky-400 text-sm">
													What you get:
												</h5>
												<ul className="space-y-1.5 text-sm text-white/80">
													<li className="flex items-start gap-2">
														<span className="mt-0.5 text-sky-400">✓</span>
														<span>
															Verified contact information (phone, email)
														</span>
													</li>
													<li className="flex items-start gap-2">
														<span className="mt-0.5 text-sky-400">✓</span>
														<span>Enhanced lead data for better targeting</span>
													</li>
													<li className="flex items-start gap-2">
														<span className="mt-0.5 text-sky-400">✓</span>
														<span>
															Higher conversion rates with accurate contacts
														</span>
													</li>
													<li className="flex items-start gap-2">
														<span className="mt-0.5 text-sky-400">✓</span>
														<span>Time saved on manual data verification</span>
													</li>
												</ul>
											</div>
										</div>
									</PopoverContent>
								</Popover>
							</>
						</Label>
						<Switch
							id="enrich"
							checked={skipTrace}
							onCheckedChange={setSkipTrace}
							disabled={isProcessing}
							className="h-7 w-12 shrink-0 border-2 border-slate-300/50 data-[state=checked]:border-sky-500 data-[state=checked]:bg-sky-500 data-[state=unchecked]:bg-slate-200/80 dark:border-slate-600/50 dark:data-[state=checked]:border-sky-500 dark:data-[state=checked]:bg-sky-500 dark:data-[state=unchecked]:bg-slate-700/80 [&>span]:h-6 [&>span]:w-6 [&>span]:shadow-md"
						/>
					</div>
				</div>

				{/* Processing Status Modal - Show during activation (after payment) */}
				<Dialog
					open={isProcessing && processingSteps.length > 0 && paymentCompleted}
				>
					<DialogContent className="border-sky-500/30 bg-slate-900/95 backdrop-blur-xl sm:max-w-md">
						<DialogHeader>
							<DialogTitle className="text-white">
								Processing Scrape Job
							</DialogTitle>
							<DialogDescription className="text-white/70">
								Processing your scrape job and preparing data export
							</DialogDescription>
						</DialogHeader>
						<div className="mt-4">
							<ProcessingStatusList steps={processingSteps} />
						</div>
					</DialogContent>
				</Dialog>

				{/* Enrich Info Dialog for Mobile */}
				<Dialog open={showEnrichInfo} onOpenChange={setShowEnrichInfo}>
					<DialogContent className="border-sky-500/30 bg-slate-900/95 backdrop-blur-xl sm:max-w-md [&>button]:text-white [&>button]:hover:bg-white/10 [&>button]:hover:text-white/80">
						<DialogHeader>
							<DialogTitle className="text-white">
								Data Enrichment & Export
							</DialogTitle>
							<DialogDescription className="text-white/70">
								Learn about our data enrichment and export features
							</DialogDescription>
						</DialogHeader>
						<Tabs defaultValue="enrichment" className="w-full">
							<TabsList className="grid w-full grid-cols-2 bg-slate-800/50">
								<TabsTrigger
									value="enrichment"
									className="text-white data-[state=active]:bg-sky-500 data-[state=active]:text-white"
								>
									Enrichment
								</TabsTrigger>
								<TabsTrigger
									value="export"
									className="text-white data-[state=active]:bg-sky-500 data-[state=active]:text-white"
								>
									Export
								</TabsTrigger>
							</TabsList>
							<TabsContent value="enrichment" className="space-y-3 pt-4">
								<div>
									<h4 className="mb-2 font-semibold text-base text-white">
										What is Data Enrichment?
									</h4>
									<p className="text-sm text-white/80 leading-relaxed">
										Automatically enhance your scraped data with verified phone
										numbers, email addresses, and additional metadata to improve
										data quality and completeness.
									</p>
								</div>
								<div>
									<h5 className="mb-2 font-semibold text-sky-400 text-sm">
										What you get:
									</h5>
									<ul className="space-y-1.5 text-sm text-white/80">
										<li className="flex items-start gap-2">
											<span className="mt-0.5 text-sky-400">✓</span>
											<span>Verified contact information (phone, email)</span>
										</li>
										<li className="flex items-start gap-2">
											<span className="mt-0.5 text-sky-400">✓</span>
											<span>Normalized data in Lead Standard Format (LSF)</span>
										</li>
										<li className="flex items-start gap-2">
											<span className="mt-0.5 text-sky-400">✓</span>
											<span>De-duplication and data validation</span>
										</li>
										<li className="flex items-start gap-2">
											<span className="mt-0.5 text-sky-400">✓</span>
											<span>Time saved on manual data cleaning</span>
										</li>
									</ul>
								</div>
							</TabsContent>
							<TabsContent value="export" className="space-y-3 pt-4">
								<div>
									<h4 className="mb-2 font-semibold text-base text-white">
										Export Your Data
									</h4>
									<p className="text-sm text-white/80 leading-relaxed">
										Lead Orchestra exports scraped data to CRM, CSV/JSON,
										Database, S3, or any system. Integrate with MCP protocol,
										APIs, webhooks, and workflow engines like Kestra, Make,
										Zapier, and n8n. Connect directly to CRMs, data warehouses,
										and automation platforms.
									</p>
								</div>
								<div>
									<h5 className="mb-2 font-semibold text-sky-400 text-sm">
										Export Options:
									</h5>
									<ul className="space-y-1.5 text-sm text-white/80">
										<li className="flex items-start gap-2">
											<span className="mt-0.5 text-sky-400">✓</span>
											<span>
												CSV and JSON exports for spreadsheets and tools
											</span>
										</li>
										<li className="flex items-start gap-2">
											<span className="mt-0.5 text-sky-400">✓</span>
											<span>Direct Database and S3 integration</span>
										</li>
										<li className="flex items-start gap-2">
											<span className="mt-0.5 text-sky-400">✓</span>
											<span>
												CRM integration (HubSpot, Salesforce, and more)
											</span>
										</li>
										<li className="flex items-start gap-2">
											<span className="mt-0.5 text-sky-400">✓</span>
											<span>Workflow engines: Kestra, Make, Zapier, n8n</span>
										</li>
										<li className="flex items-start gap-2">
											<span className="mt-0.5 text-sky-400">✓</span>
											<span>REST API, webhooks, and MCP protocol support</span>
										</li>
										<li className="flex items-start gap-2">
											<span className="mt-0.5 text-sky-400">✓</span>
											<span>
												GitHub Actions templates for CI/CD integration
											</span>
										</li>
									</ul>
								</div>
							</TabsContent>
						</Tabs>
					</DialogContent>
				</Dialog>

				{/* Payment Modal */}
				{checkoutState && (
					<PricingCheckoutDialog
						clientSecret={checkoutState.clientSecret}
						plan={checkoutState.plan}
						planType={checkoutState.planType}
						mode={checkoutState.mode}
						context={checkoutState.context}
						postTrialAmount={checkoutState.postTrialAmount}
						onClose={() => {
							// Reset state if payment is cancelled
							resetActivationState();
							toast.info("Payment cancelled. Activation has been reset.");
						}}
						onSuccess={handlePaymentSuccess}
					/>
				)}

				{/* Badges Display - Show demo badges initially, then real metrics after activation */}
				{!isProcessing && (
					<AnimatePresence mode="wait">
						{metrics ? (
							<motion.div
								key="real-metrics"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								transition={{ duration: 0.4 }}
							>
								<ReactivateCampaignBadges metrics={metrics} />
							</motion.div>
						) : (
							<motion.div
								key="demo-metrics"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
							>
								<ReactivateCampaignBadges
									metrics={{
										dollarAmount: 12500,
										timeSavedHours: 100,
										contactsActivated: 50,
										hobbyTimeHours: 15,
									}}
								/>
							</motion.div>
						)}
					</AnimatePresence>
				)}
			</motion.div>
		</div>
	);
}
