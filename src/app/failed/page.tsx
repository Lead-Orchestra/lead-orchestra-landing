import StatusPageClient from "@/components/ui/StatusPageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Error | Lead Orchestra",
	description: "An error occurred",
	openGraph: {
		title: "Error | Lead Orchestra",
		description: "An error occurred while processing your request",
	},
};

export default function FailedPage() {
	return <StatusPageClient type="error" />;
}
