import {
	authenticateWithDealScale,
	authenticateWithPhone,
	createSessionToken,
	setSessionCookie,
} from "@/lib/auth-edge";
import { type NextRequest, NextResponse } from "next/server";
export const runtime = 'edge';


export const runtime = "edge";

/**
 * Login endpoint - Edge-compatible replacement for next-auth
 */
export async function POST(req: NextRequest) {
	try {
		const body = await req.json();
		const { email, password, phoneAuth } = body;

		let user, dsTokens;

		if (phoneAuth && email?.startsWith("phone:")) {
			// Phone-based authentication
			const phoneNumber = email.replace("phone:", "");
			user = await authenticateWithPhone(phoneNumber, phoneAuth);
			dsTokens = user.dsTokens;
		} else if (email && password) {
			// Email/password authentication
			const authResult = await authenticateWithDealScale(email, password);
			user = authResult.user;
			dsTokens = authResult.dsTokens;
		} else {
			return NextResponse.json(
				{ error: "Missing email or password" },
				{ status: 400 },
			);
		}

		// Create session token
		const sessionToken = await createSessionToken(user, dsTokens);

		// Create response
		const response = NextResponse.json({
			user: {
				id: user.id,
				email: user.email,
				name: user.name,
			},
			dsTokens,
		});

		// Set session cookie
		setSessionCookie(response, sessionToken, dsTokens.expires_in || 3600);

		return response;
	} catch (error) {
		console.error("Login error:", error);
		const message =
			error instanceof Error ? error.message : "Authentication failed";
		return NextResponse.json({ error: message }, { status: 401 });
	}
}





