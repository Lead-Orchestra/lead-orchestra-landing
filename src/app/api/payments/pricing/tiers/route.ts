import { getServerSession } from "@/lib/auth-edge";
import { type NextRequest, NextResponse } from "next/server";
const DEALSCALE_API_BASE =
	process.env.DEALSCALE_API_BASE || "https://api.dealscale.io";
export const runtime = 'edge';


/**
 * Get all available pricing tiers and discount information.
 *
 * Uses centralized pricing utility to show available bulk discounts
 * Returns comprehensive information about pricing tiers for promotional use.
 */
export const runtime = "edge";

export async function GET(request: NextRequest) {
	try {
		const session = await getServerSession(request);
		if (!session?.user || !session?.dsTokens?.access_token) {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
		}

		// Call DealScale backend API to get pricing tiers
		const tiersResponse = await fetch(
			`${DEALSCALE_API_BASE}/api/v1/payments/pricing/tiers`,
			{
				method: "GET",
				headers: {
					Authorization: `Bearer ${session.dsTokens.access_token}`,
					"Content-Type": "application/json",
				},
			},
		);

		if (!tiersResponse.ok) {
			console.error(
				"Failed to get pricing tiers:",
				tiersResponse.status,
				await tiersResponse.text(),
			);
			return NextResponse.json(
				{ error: "Failed to get pricing tiers" },
				{ status: 500 },
			);
		}

		const data = await tiersResponse.json();
		return NextResponse.json(data);
	} catch (error) {
		console.error("Pricing tiers error:", error);
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 },
		);
	}
}
