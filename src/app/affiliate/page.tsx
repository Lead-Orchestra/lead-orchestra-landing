import { mapSeoMetaToMetadata } from "@/utils/seo/mapSeoMetaToMetadata";
import { getStaticSeo } from "@/utils/seo/staticSeo";
import type { Metadata } from "next";
import AffiliateApplication from "./AffiliateApplication";
export const runtime = 'edge';


// * Centralized SEO for /affiliate using getStaticSeo helper
export async function generateMetadata(): Promise<Metadata> {
	const seo = getStaticSeo("/affiliate");
	return mapSeoMetaToMetadata(seo);
}

export default AffiliateApplication;
