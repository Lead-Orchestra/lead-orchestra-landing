import { getServerSession } from "@/lib/auth-edge";
import { type NextRequest, NextResponse } from "next/server";
const DEALSCALE_API_BASE =
	process.env.DEALSCALE_API_BASE || "https://api.dealscale.io";
export const runtime = 'edge';


/**
 * Simple debug endpoint to test if credits router works.
 */
export const runtime = "edge";

export async function GET(request: NextRequest) {
	try {
		const session = await getServerSession(request);
		if (!session?.user || !session?.dsTokens?.access_token) {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
		}

		// Call DealScale backend API for debug test
		const debugResponse = await fetch(
			`${DEALSCALE_API_BASE}/api/v1/credits/debug-test`,
			{
				method: "GET",
				headers: {
					Authorization: `Bearer ${session.dsTokens.access_token}`,
					"Content-Type": "application/json",
				},
			},
		);

		if (!debugResponse.ok) {
			console.error(
				"Failed to call credits debug test:",
				debugResponse.status,
				await debugResponse.text(),
			);
			return NextResponse.json(
				{ error: "Failed to call debug test" },
				{ status: 500 },
			);
		}

		const data = await debugResponse.json();
		return NextResponse.json(data);
	} catch (error) {
		console.error("Credits debug test error:", error);
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 },
		);
	}
}
