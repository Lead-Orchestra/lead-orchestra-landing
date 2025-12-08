/**
 * Next-auth route handler - replaced with Edge-compatible auth
 * This route is kept for backward compatibility but redirects to login
 */
import { type NextRequest, NextResponse } from "next/server";
export const runtime = 'edge';


export async function GET(req: NextRequest) {
	// Redirect to login page or return error
	return NextResponse.json(
		{
			error: "Next-auth is not available in Edge Runtime. Please use /api/auth/login instead.",
		},
		{ status: 410 }, // 410 Gone - indicates the resource is no longer available
	);
}

export async function POST(req: NextRequest) {
	return NextResponse.json(
		{
			error: "Next-auth is not available in Edge Runtime. Please use /api/auth/login instead.",
		},
		{ status: 410 },
	);
}
