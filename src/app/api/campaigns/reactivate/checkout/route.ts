import { createPaymentIntent } from "@/lib/externalRequests/stripe";
import { NextResponse } from "next/server";
export const runtime = 'edge';
export async function POST(request: Request) {
	try {
		const { contactCount, isFreeTier } = await request.json();

		// For now, we'll make it free for small campaigns (< 100 contacts)
		// You can adjust this logic based on your business rules
		const isFree = contactCount <= 100 || isFreeTier;

		if (isFree) {
			return NextResponse.json({
				isFree: true,
				message: "Free tier campaign",
			});
		}

		// Calculate price (example: $0.10 per contact)
		const pricePerContact = 0.1;
		const totalPrice = Math.round(contactCount * pricePerContact * 100); // Convert to cents

		// Create payment intent
		const paymentIntent = await createPaymentIntent({
			price: totalPrice,
			description: `Lead Orchestra Lookalike Audience Generation - ${contactCount} contacts`,
			metadata: {
				contactCount: contactCount.toString(),
				campaignType: "lookalike-audience",
			},
		});

		return NextResponse.json({
			isFree: false,
			clientSecret: paymentIntent.client_secret,
			amount: paymentIntent.amount,
		});
	} catch (error) {
		console.error("Checkout initialization error:", error);
		return NextResponse.json(
			{ error: "Failed to initialize checkout" },
			{ status: 500 },
		);
	}
}
