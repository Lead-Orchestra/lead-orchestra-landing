"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";

import { type VAFormValues, vaFormSchema } from "@/data/contact/va";

import MultiSelectDropdown from "@/components/ui/MultiSelectDropdown";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const specialtyOptions = [
	{ value: "Lead Qualification", label: "Lead Qualification" },
	{ value: "CRM Management", label: "CRM Management" },
	{ value: "Email Outreach", label: "Email Outreach" },
	{ value: "Appointment Booking", label: "Appointment Booking" },
	{ value: "Data Enrichment", label: "Data Enrichment" },
	{ value: "Data Entry", label: "Data Entry" },
	{ value: "Phone Calling", label: "Phone Calling" },
];

const crmOptions = [
	{ value: "HubSpot", label: "HubSpot" },
	{ value: "GoHighLevel", label: "GoHighLevel" },
	{ value: "Salesforce", label: "Salesforce" },
	{ value: "Zoho", label: "Zoho" },
	{ value: "Follow Up Boss", label: "Follow Up Boss" },
	{ value: "Outreach.io", label: "Outreach.io" },
];

const languageOptions = [
	{ value: "English", label: "English" },
	{ value: "Spanish", label: "Spanish" },
	{ value: "Mandarin", label: "Mandarin" },
	{ value: "Korean", label: "Korean" },
	{ value: "Portuguese", label: "Portuguese" },
];

const yearsExperienceOptions = [
	{ value: "0-1", label: "0-1 years" },
	{ value: "2-3", label: "2-3 years" },
	{ value: "4-5", label: "4-5 years" },
	{ value: "6-8", label: "6-8 years" },
	{ value: "9+", label: "9+ years" },
];

const hourlyRateOptions = [
	{ value: "$15-25", label: "$15-25/hr" },
	{ value: "$25-40", label: "$25-40/hr" },
	{ value: "$40-60", label: "$40-60/hr" },
	{ value: "$60-75", label: "$60-75/hr" },
	{ value: "$75+", label: "$75+/hr" },
];

export default function VAApplicationForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const router = useRouter();

	const form = useForm<VAFormValues>({
		resolver: zodResolver(vaFormSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			yearsExperience: "",
			specialties: [],
			crmExperience: [],
			languages: [],
			availability: undefined,
			hourlyRateRange: "",
			portfolioUrl: "",
			whyApply: "",
			termsAccepted: false,
		},
	});

	const onSubmit = async (data: VAFormValues) => {
		setIsSubmitting(true);
		try {
			const response = await fetch("/api/vas/apply", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				const errorData = await response
					.json()
					.catch(() => ({ message: "Submission failed" }));
				throw new Error(errorData.message || "Failed to submit application");
			}

			toast.success("VA application submitted successfully!");
			form.reset();
		} catch (error) {
			console.error("[VAApplicationForm] Submission error:", error);
			toast.error(
				error instanceof Error
					? error.message
					: "Failed to submit application. Please try again.",
			);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<FormProvider {...form}>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
					<div className="space-y-4">
						<h2 className="font-semibold text-slate-900 text-xl dark:text-white">
							Personal Information
						</h2>

						<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
							<FormField
								control={form.control}
								name="firstName"
								render={({ field }) => (
									<FormItem>
										<FormLabel>First Name</FormLabel>
										<FormControl>
											<Input placeholder="John" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="lastName"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Last Name</FormLabel>
										<FormControl>
											<Input placeholder="Doe" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											type="email"
											placeholder="john@example.com"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="phone"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Phone</FormLabel>
									<FormControl>
										<Input
											type="tel"
											placeholder="+1 (555) 123-4567"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<div className="space-y-4">
						<h2 className="font-semibold text-slate-900 text-xl dark:text-white">
							VA Experience & Skills
						</h2>

						<FormField
							control={form.control}
							name="yearsExperience"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Years of VA Experience</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select years of experience" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{yearsExperienceOptions.map((option) => (
												<SelectItem key={option.value} value={option.value}>
													{option.label}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="specialties"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Specialties (select all that apply)</FormLabel>
									<FormControl>
										<MultiSelectDropdown
											options={specialtyOptions}
											value={field.value || []}
											onChange={field.onChange}
											placeholder="Select specialties"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="crmExperience"
							render={({ field }) => (
								<FormItem>
									<FormLabel>CRM Experience (select all that apply)</FormLabel>
									<FormControl>
										<MultiSelectDropdown
											options={crmOptions}
											value={field.value || []}
											onChange={field.onChange}
											placeholder="Select CRM platforms"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="languages"
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										Languages Spoken (select all that apply)
									</FormLabel>
									<FormControl>
										<MultiSelectDropdown
											options={languageOptions}
											value={field.value || []}
											onChange={field.onChange}
											placeholder="Select languages"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="availability"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Availability</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select availability" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectItem value="Full-time">Full-time</SelectItem>
											<SelectItem value="Part-time">Part-time</SelectItem>
											<SelectItem value="On-demand">On-demand</SelectItem>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="hourlyRateRange"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Hourly Rate Range</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select hourly rate range" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{hourlyRateOptions.map((option) => (
												<SelectItem key={option.value} value={option.value}>
													{option.label}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="portfolioUrl"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Portfolio URL (optional)</FormLabel>
									<FormControl>
										<Input
											type="url"
											placeholder="https://yourportfolio.com"
											{...field}
											value={field.value || ""}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="whyApply"
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										Why do you want to join our VA marketplace? (min. 50
										characters)
									</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Tell us about your experience and why you'd be a great fit..."
											className="min-h-[120px]"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<FormField
						control={form.control}
						name="termsAccepted"
						render={({ field }) => (
							<FormItem className="flex flex-row items-start space-x-3 space-y-0">
								<FormControl>
									<Checkbox
										checked={field.value}
										onCheckedChange={field.onChange}
									/>
								</FormControl>
								<div className="space-y-1 leading-none">
									<FormLabel>I accept the terms and conditions</FormLabel>
								</div>
							</FormItem>
						)}
					/>

					<Button type="submit" disabled={isSubmitting} className="w-full">
						{isSubmitting ? (
							<>
								<Loader2 className="mr-2 h-4 w-4 animate-spin" />
								Submitting...
							</>
						) : (
							"Submit Application"
						)}
					</Button>
				</form>
			</Form>
		</FormProvider>
	);
}
