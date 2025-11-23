import { type NextRequest, NextResponse } from "next/server";
export const runtime = 'edge';
export async function POST(req: NextRequest) {
	const headers = Object.fromEntries(req.headers);
	return NextResponse.json({ headers });
}
