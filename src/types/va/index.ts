export interface VAProfile {
	id: string;
	name: string;
	title: string;
	image: string;
	rating: number;
	reviews: number;
	leadsManaged: number;
	specialties: string[];
	location: string;
	bio: string;
	hourlyRate: number;
	availability: "Full-time" | "Part-time" | "On-demand";
	languages: string[];
	crmExperience: string[];
	certifications?: string[];
	commissionPercentage?: number;
	hybridSaaS?: {
		commissionPercentage: number;
		split: string; // e.g., "70/30" or "80/20"
	};
}
