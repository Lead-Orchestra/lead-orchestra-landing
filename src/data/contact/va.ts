import { z } from "zod";

export const vaFormSchema = z.object({
	firstName: z
		.string()
		.min(2, { message: "First name must be at least 2 characters." }),
	lastName: z
		.string()
		.min(2, { message: "Last name must be at least 2 characters." }),
	email: z.string().email({ message: "Please enter a valid email address." }),
	phone: z
		.string()
		.min(10, { message: "Phone number must be at least 10 digits." }),
	yearsExperience: z
		.string()
		.min(1, { message: "Please select years of experience." }),
	specialties: z
		.array(z.string())
		.min(1, { message: "Please select at least one specialty." }),
	crmExperience: z
		.array(z.string())
		.min(1, { message: "Please select at least one CRM platform." }),
	languages: z
		.array(z.string())
		.min(1, { message: "Please select at least one language." }),
	availability: z.enum(["Full-time", "Part-time", "On-demand"], {
		required_error: "Please select your availability.",
	}),
	hourlyRateRange: z
		.string()
		.min(1, { message: "Please select your hourly rate range." }),
	portfolioUrl: z
		.string()
		.url({ message: "Please enter a valid URL." })
		.optional()
		.or(z.literal("")),
	whyApply: z.string().min(50, {
		message:
			"Please provide at least 50 characters explaining why you want to apply.",
	}),
	termsAccepted: z.boolean().refine((val) => val === true, {
		message: "You must accept the terms and conditions.",
	}),
});

export type VAFormValues = z.infer<typeof vaFormSchema>;
