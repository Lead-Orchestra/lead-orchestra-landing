import { getServerSession } from "@/lib/auth-edge";
import { type NextRequest, NextResponse } from "next/server";
const DEALSCALE_API_BASE =
	process.env.DEALSCALE_API_BASE || "https://api.dealscale.io";
export const runtime = 'edge';


export const runtime = "edge";

export async function GET(request: NextRequest) {
	try {
		const session = await getServerSession(request);
		if (!session?.user || !session?.dsTokens?.access_token) {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
		}

		const response = await fetch(`${DEALSCALE_API_BASE}/api/v1/cart/products`, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${session.dsTokens.access_token}`,
				"Content-Type": "application/json",
			},
		});

		if (!response.ok) {
			console.error(
				"Failed to get cart products:",
				response.status,
				await response.text(),
			);
			return NextResponse.json(
				{ error: "Failed to get cart products" },
				{ status: 500 },
			);
		}

		const data = await response.json();
		return NextResponse.json(data);
	} catch (error) {
		console.error("Get cart products error:", error);
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 },
		);
	}
}
