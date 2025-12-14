import { NextResponse } from "next/server";
export const runtime = 'edge';
export async function POST() {
	try {
		return NextResponse.json({ ok: true });
	} catch (err) {
		const msg = err instanceof Error ? err.message : "revalidate failed";
		return NextResponse.json({ ok: false, error: msg }, { status: 500 });
	}
}
