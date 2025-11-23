import { mapSeoMetaToMetadata } from "@/utils/seo/mapSeoMetaToMetadata";
import { getStaticSeo } from "@/utils/seo/staticSeo";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

const CAREERS_PORTAL_URL = "https://dealscale.zohorecruit.com/jobs/Careers";

export async function generateMetadata(): Promise<Metadata> {
	const seo = getStaticSeo("/careers");
	const metadata = mapSeoMetaToMetadata(seo);

	return {
		...metadata,
		title: "Careers at Lead Orchestra - Join Our Team",
		description:
			"Explore open roles at Lead Orchestra. We're building AI-powered tools for real estate professionals. Join us in revolutionizing the industry.",
		alternates: {
			canonical: CAREERS_PORTAL_URL,
		},
		robots: {
			index: true, // ✅ Enable indexing for SEO
			follow: true,
			googleBot: {
				index: true,
				follow: true,
			},
		},
		openGraph: {
			title: "Careers at Lead Orchestra",
			description:
				"Join our team and help build the future of real estate technology.",
			url: CAREERS_PORTAL_URL,
			type: "website",
		},
		twitter: {
			card: "summary_large_image",
			title: "Careers at Lead Orchestra",
			description: "Explore open roles at Lead Orchestra.",
		},
	};
}

export default function CareersRedirectPage() {
	redirect(CAREERS_PORTAL_URL);
}
