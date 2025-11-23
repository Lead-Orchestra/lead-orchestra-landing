export const runtime = 'edge';

import Header from "@/components/common/Header";
import VAApplicationForm from "@/components/contact/form/VAApplicationForm";
import { mapSeoMetaToMetadata } from "@/utils/seo/mapSeoMetaToMetadata";
import { getStaticSeo } from "@/utils/seo/staticSeo";
import type { Metadata } from "next";

// Force dynamic rendering to avoid static generation issues with client components
export const dynamic = "force-dynamic";
export const dynamicParams = true;

export async function generateMetadata(): Promise<Metadata> {
	const seo = getStaticSeo("/vas/apply");
	return mapSeoMetaToMetadata(seo);
}

export default function VAApplyPage() {
	return (
		<>
			<Header title="Apply to Become a Virtual Assistant" />
			<div className="container mx-auto max-w-4xl px-4 py-12">
				<div className="mb-8">
					<h1 className="mb-4 font-bold text-4xl text-slate-900 dark:text-white">
						Apply to Become a Virtual Assistant
					</h1>
					<p className="text-lg text-slate-600 dark:text-slate-400">
						Join our marketplace of professional virtual assistants. Help
						businesses scale their lead orchestration and earn revenue remotely.
					</p>
				</div>
				<VAApplicationForm />
			</div>
		</>
	);
}
