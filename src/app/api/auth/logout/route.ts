import { clearSessionCookie, getServerSession } from "@/lib/auth-edge";
import { type NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

const DEALSCALE_API_BASE =
	process.env.DEALSCALE_API_BASE || "https://api.dealscale.io";

/**
 * Logout endpoint - Edge-compatible replacement for next-auth logout
 */
export async function POST(req: NextRequest) {
	try {
		const session = await getServerSession(req);

		if (session?.dsTokens?.access_token) {
			// Call DealScale logout endpoint to invalidate backend session
			try {
				await fetch(`${DEALSCALE_API_BASE}/api/v1/auth/logout`, {
					method: "POST",
					headers: {
						Authorization: `Bearer ${session.dsTokens.access_token}`,
						"Content-Type": "application/json",
					},
				});
			} catch (error) {
				console.error("Failed to logout from DealScale backend:", error);
				// Continue with logout even if backend call fails
			}
		}

		// Create response and clear session cookie
		const response = NextResponse.json({
			message: "Logged out successfully",
			success: true,
		});

		clearSessionCookie(response);

		return response;
	} catch (error) {
		console.error("Logout error:", error);
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 },
		);
	}
}
