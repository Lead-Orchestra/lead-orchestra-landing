import { getServerSession } from "@/lib/auth-edge";
import { type NextRequest, NextResponse } from "next/server";
const DEALSCALE_API_BASE =
	process.env.DEALSCALE_API_BASE || "https://api.dealscale.io";

export const runtime = "edge";

export async function GET(req: NextRequest) {
	const session = await getServerSession(req);
	if (!session?.user || !session?.dsTokens?.access_token) {
		return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
	}

	const { searchParams } = new URL(req.url);
	const page = searchParams.get("page") || "1";
	const perPage = searchParams.get("per_page") || "10";

	const response = await fetch(
		`${DEALSCALE_API_BASE}/api/v1/affiliates/commissions?page=${page}&per_page=${perPage}`,
		{
			headers: {
				Authorization: `Bearer ${session.dsTokens.access_token}`,
			},
		},
	);

	return NextResponse.json(await response.json());
}
