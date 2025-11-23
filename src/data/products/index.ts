import type { ProductType } from "@/types/products";
import { agentProducts } from "./agents";
import { closerProducts } from "./closers";
import { creditProducts } from "./credits";
import { freeResourceProducts } from "./free-resources";
import { leadMagnetProducts } from "./lead-magnets";
import { monetizeProducts } from "./monetize";
import { notionProducts } from "./notion";
import { workflowProducts } from "./workflow";

export const mockProducts: ProductType[] = [
	...freeResourceProducts,
	...creditProducts,
	...leadMagnetProducts, // Replaced essentialsProducts with lead magnets
	...notionProducts,
	...workflowProducts,
	...agentProducts,
	...closerProducts,
	...monetizeProducts, // Marketplace entry points for monetization
];

export function getAllProducts(): ProductType[] {
	return mockProducts;
}
