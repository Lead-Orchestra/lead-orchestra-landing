import { type NextRequest, NextResponse } from "next/server";
const DEALSCALE_API_BASE =
	process.env.DEALSCALE_API_BASE || "http://localhost:4000";

export const runtime = 'edge';
export async function POST(req: NextRequest) {
	try {
		const body = await req.json();

		const response = await fetch(`${DEALSCALE_API_BASE}/api/vas/apply`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		});

		const data = await response.json();

		if (!response.ok) {
			return NextResponse.json(data, { status: response.status });
		}

		return NextResponse.json(data, { status: 200 });
	} catch (error) {
		console.error("[VA Apply API] Error:", error);
		const errorMessage =
			error instanceof Error ? error.message : "An unknown error occurred";
		return NextResponse.json(
			{ error: "An internal server error occurred.", details: errorMessage },
			{ status: 500 },
		);
	}
}
