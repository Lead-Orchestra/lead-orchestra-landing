import { getServerSession } from "@/lib/auth-edge";
// src/app/api/api-keys/admin/all/route.ts
import { type NextRequest, NextResponse } from "next/server";
const DEALSCALE_API_BASE =
	process.env.DEALSCALE_API_BASE || "https://api.dealscale.io";

export const runtime = "edge";

export async function GET(request: NextRequest) {
	try {
		const session = await getServerSession(request);
		if (!session?.user || !session?.dsTokens?.access_token) {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
		}

		const headers = {
			Authorization: `Bearer ${session.dsTokens.access_token}`,
			"Content-Type": "application/json",
		};

		const response = await fetch(
			`${DEALSCALE_API_BASE}/api/v1/api-keys/admin/all`,
			{
				method: "GET",
				headers,
			},
		);

		if (!response.ok) {
			console.error(
				"Failed to list all API keys:",
				response.status,
				await response.text(),
			);
			return NextResponse.json(
				{ error: "Failed to list API keys" },
				{ status: 500 },
			);
		}

		const data = await response.json();
		return NextResponse.json(data);
	} catch (error) {
		console.error("Admin list API keys error:", error);
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 },
		);
	}
}
