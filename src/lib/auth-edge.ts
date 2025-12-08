/**
 * Edge-compatible authentication utilities
 * Replaces next-auth for Cloudflare Pages deployment
 * Uses JWT tokens stored in HTTP-only cookies
 */

import { SignJWT, jwtVerify, type JWTPayload } from "jose";
import { type NextRequest, NextResponse } from "next/server";

const DEALSCALE_API_BASE =
	process.env.DEALSCALE_API_BASE || "https://api.dealscale.io";

// JWT secret - must be set in environment variables
function getJWTSecret(): Uint8Array {
	const secret = process.env.JWT_SECRET || process.env.NEXTAUTH_SECRET;
	if (!secret) {
		throw new Error(
			"JWT_SECRET or NEXTAUTH_SECRET environment variable is required",
		);
	}
	return new TextEncoder().encode(secret);
}

// Cookie name for session token
const SESSION_COOKIE_NAME = "deal-scale-session";

// Session data structure
export interface DealScaleTokens {
	access_token: string;
	refresh_token: string;
	token_type: string;
	expires_in: number;
	session_id: string;
	profile_setup_status: "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";
}

export interface SessionUser {
	id: string;
	email: string | null;
	name: string | null;
}

export interface SessionData extends JWTPayload {
	user: SessionUser;
	dsTokens: DealScaleTokens;
	iat?: number;
	exp?: number;
}

/**
 * Create a JWT session token
 */
export async function createSessionToken(
	user: SessionUser,
	dsTokens: DealScaleTokens,
): Promise<string> {
	const secret = getJWTSecret();
	const expiresIn = dsTokens.expires_in || 3600; // Default to 1 hour

	const token = await new SignJWT({
		user,
		dsTokens,
	})
		.setProtectedHeader({ alg: "HS256" })
		.setIssuedAt()
		.setExpirationTime(Math.floor(Date.now() / 1000) + expiresIn)
		.sign(secret);

	return token;
}

/**
 * Verify and decode a JWT session token
 */
export async function verifySessionToken(
	token: string,
): Promise<SessionData | null> {
	try {
		const secret = getJWTSecret();
		const { payload } = await jwtVerify<SessionData>(token, secret);
		return payload;
	} catch (error) {
		console.error("Token verification failed:", error);
		return null;
	}
}

/**
 * Get session from request cookies (Edge-compatible replacement for getServerSession)
 */
export async function getServerSession(
	req: NextRequest,
): Promise<SessionData | null> {
	// Use Next.js cookies API (Edge-compatible)
	const sessionToken = req.cookies.get(SESSION_COOKIE_NAME)?.value;
	if (!sessionToken) {
		return null;
	}

	return verifySessionToken(sessionToken);
}

/**
 * Set session cookie in response
 */
export function setSessionCookie(
	response: NextResponse,
	token: string,
	maxAge: number = 3600,
): void {
	response.cookies.set(SESSION_COOKIE_NAME, token, {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: "lax",
		maxAge,
		path: "/",
	});
}

/**
 * Clear session cookie
 */
export function clearSessionCookie(response: NextResponse): void {
	response.cookies.delete(SESSION_COOKIE_NAME);
}

/**
 * Authenticate with DealScale API and create session
 */
export async function authenticateWithDealScale(
	email: string,
	password: string,
): Promise<{ user: SessionUser; dsTokens: DealScaleTokens }> {
	const response = await fetch(`${DEALSCALE_API_BASE}/api/v1/auth/login`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			email,
			password,
			device_info: { user_agent: "nextjs-app" },
			remember_me: false,
		}),
	});

	if (!response.ok) {
		let message = "Invalid credentials";
		try {
			const data = await response.json();
			message = data?.detail ?? data?.message ?? message;
		} catch {}
		throw new Error(message);
	}

	const data = await response.json();

	const user: SessionUser = {
		id: data.user?.id ?? data.session_id ?? "user",
		email: data.user?.email ?? email,
		name: data.user?.name ?? data.user?.first_name ?? null,
	};

	const dsTokens: DealScaleTokens = {
		access_token: data.access_token,
		refresh_token: data.refresh_token,
		token_type: data.token_type,
		expires_in: data.expires_in,
		session_id: data.session_id,
		profile_setup_status: data.profile_setup_status,
	};

	return { user, dsTokens };
}

/**
 * Authenticate with phone OTP (for phone-based login)
 */
export async function authenticateWithPhone(
	phoneNumber: string,
	authData: {
		access_token: string;
		refresh_token: string;
		token_type: string;
		expires_in: number;
		session_id: string;
		profile_setup_status: "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";
		user?: {
			id?: string;
			name?: string;
			first_name?: string;
			email?: string;
		};
	},
): Promise<{ user: SessionUser; dsTokens: DealScaleTokens }> {
	const user: SessionUser = {
		id: authData.user?.id ?? authData.session_id ?? "user",
		email: phoneNumber,
		name: authData.user?.name ?? authData.user?.first_name ?? null,
	};

	const dsTokens: DealScaleTokens = {
		access_token: authData.access_token,
		refresh_token: authData.refresh_token,
		token_type: authData.token_type,
		expires_in: authData.expires_in,
		session_id: authData.session_id,
		profile_setup_status: authData.profile_setup_status,
	};

	return { user, dsTokens };
}

