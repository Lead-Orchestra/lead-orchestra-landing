/**
 * Notion SEO Sync Utilities
 *
 * Functions to fetch and sync SEO metadata from Notion to both
 * static and dynamic SEO configurations.
 *
 * This module provides utilities to:
 * 1. Fetch SEO data from Notion pages/databases
 * 2. Map Notion data to SeoMeta format
 * 3. Merge with existing SEO data
 * 4. Update both static and dynamic SEO files
 */

import { DEFAULT_SEO } from "@/data/constants/seo";
import type { SeoMeta } from "./seo";

export interface NotionSeoPage {
	pagePath: string; // e.g., "/", "/pricing", "/features"
	title: string;
	description: string;
	keywords?: string[];
	canonical?: string;
	image?: string;
	priority?: number;
	changeFrequency?: SeoMeta["changeFrequency"];
	type?: SeoMeta["type"];
	datePublished?: string;
	dateModified?: string;
}

/**
 * Maps Notion SEO data to SeoMeta format
 */
export function mapNotionSeoToSeoMeta(notionSeo: NotionSeoPage): SeoMeta {
	return {
		title: notionSeo.title || DEFAULT_SEO.title,
		description: notionSeo.description || DEFAULT_SEO.description,
		canonical:
			notionSeo.canonical || `${DEFAULT_SEO.canonical}${notionSeo.pagePath}`,
		keywords: notionSeo.keywords || DEFAULT_SEO.keywords,
		image: notionSeo.image || DEFAULT_SEO.image,
		type: notionSeo.type || DEFAULT_SEO.type,
		priority: notionSeo.priority,
		changeFrequency: notionSeo.changeFrequency,
		datePublished: notionSeo.datePublished,
		dateModified: notionSeo.dateModified,
		siteName: DEFAULT_SEO.siteName,
	};
}

/**
 * Extracts SEO metadata from Notion page content
 * Parses markdown content to find SEO-related sections
 */
export function extractSeoFromNotionContent(
	content: string,
): Partial<NotionSeoPage> {
	const seo: Partial<NotionSeoPage> = {};

	// Extract title (usually in H1 or first line)
	const titleMatch =
		content.match(/^#\s+(.+)$/m) || content.match(/title[:\s]+(.+)/i);
	if (titleMatch) {
		seo.title = titleMatch[1].trim();
	}

	// Extract description (look for "description:" or meta description patterns)
	const descMatch =
		content.match(/description[:\s]+(.+?)(?:\n|$)/i) ||
		content.match(/meta\s+description[:\s]+(.+?)(?:\n|$)/i);
	if (descMatch) {
		seo.description = descMatch[1].trim();
	}

	// Extract keywords (comma-separated or array)
	const keywordsMatch = content.match(/keywords?[:\s]+(.+?)(?:\n|$)/i);
	if (keywordsMatch) {
		seo.keywords = keywordsMatch[1]
			.split(",")
			.map((k) => k.trim())
			.filter(Boolean);
	}

	// Extract canonical URL
	const canonicalMatch = content.match(/canonical[:\s]+(.+?)(?:\n|$)/i);
	if (canonicalMatch) {
		seo.canonical = canonicalMatch[1].trim();
	}

	// Extract image
	const imageMatch =
		content.match(/image[:\s]+(.+?)(?:\n|$)/i) ||
		content.match(/og:image[:\s]+(.+?)(?:\n|$)/i);
	if (imageMatch) {
		seo.image = imageMatch[1].trim();
	}

	return seo;
}

/**
 * Merges Notion SEO data with existing static SEO
 * Preserves existing values if Notion data is missing
 */
export function mergeSeoData(
	existing: SeoMeta,
	notion: Partial<NotionSeoPage>,
): SeoMeta {
	return {
		...existing,
		...(notion.title && { title: notion.title }),
		...(notion.description && { description: notion.description }),
		...(notion.keywords && { keywords: notion.keywords }),
		...(notion.canonical && { canonical: notion.canonical }),
		...(notion.image && { image: notion.image }),
		...(notion.priority !== undefined && { priority: notion.priority }),
		...(notion.changeFrequency && { changeFrequency: notion.changeFrequency }),
		...(notion.type && { type: notion.type }),
		...(notion.datePublished && { datePublished: notion.datePublished }),
		...(notion.dateModified && { dateModified: notion.dateModified }),
	};
}

/**
 * Page path to Notion page ID mapping
 * Update this as you add SEO pages in Notion
 */
export const NOTION_SEO_PAGE_MAP: Record<string, string> = {
	"/": "2b2e9c25-ecb0-8002-a26d-e4431e05c790", // Brand guidelines (contains homepage SEO)
	// Add more mappings as you create SEO pages in Notion
};

/**
 * Updates static SEO constants file with Notion data
 * This should be called iteratively to sync SEO
 */
export async function syncStaticSeoFromNotion() {
	const updates: Array<{ path: string; data: Partial<NotionSeoPage> }> = [];

	// Fetch SEO data for each mapped page
	for (const [path, pageId] of Object.entries(NOTION_SEO_PAGE_MAP)) {
		try {
			// This would use Notion MCP in actual implementation
			// For now, return structure for manual updates
			updates.push({
				path,
				data: {
					pagePath: path,
					// Data would be fetched from Notion here
				},
			});
		} catch (error) {
			console.error(`Failed to fetch SEO for ${path}:`, error);
		}
	}

	return updates;
}

/**
 * Updates dynamic SEO generators with Notion data
 * This should be called iteratively to sync SEO
 */
export async function syncDynamicSeoFromNotion() {
	// This would update:
	// - services.ts: Service page SEO
	// - case-studies.ts: Case study SEO
	// - blog.ts: Blog post SEO
	// - product.ts: Product page SEO

	console.log("Syncing dynamic SEO from Notion...");
	// TODO: Implement actual sync logic
}
