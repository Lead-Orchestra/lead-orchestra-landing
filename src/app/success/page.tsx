import StatusPageClient from "@/components/ui/StatusPageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Success | Lead Orchestra",
	description: "Your action was successful",
	openGraph: {
		title: "Success | Lead Orchestra",
		description: "Your action was completed successfully",
	},
};

export default function SuccessPage() {
	return <StatusPageClient type="success" />;
}
