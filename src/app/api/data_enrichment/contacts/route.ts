import { getServerSession } from "@/lib/auth-edge";
import { type NextRequest, NextResponse } from "next/server";
const DEALSCALE_API_BASE =
	process.env.DEALSCALE_API_BASE || "https://api.dealscale.io";
export const runtime = 'edge';


export const runtime = "edge";

export async function POST(req: NextRequest) {
	const session = await getServerSession(req);
	if (!session?.user || !session?.dsTokens?.access_token) {
		return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
	}

	const body = await req.json();
	const response = await fetch(
		`${DEALSCALE_API_BASE}/api/v1/data_enrichment/contacts`,
		{
			method: "POST",
			headers: {
				Authorization: `Bearer ${session.dsTokens.access_token}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		},
	);

	return NextResponse.json(await response.json());
}
