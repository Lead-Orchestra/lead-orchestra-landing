import { NextResponse } from "next/server";

export const runtime = "edge";

const YOUTUBE_FEED = process.env.YOUTUBE_CHANNEL_ID
	? `https://www.youtube.com/feeds/videos.xml?channel_id=${process.env.YOUTUBE_CHANNEL_ID}`
	: "https://www.youtube.com/feeds/videos.xml?channel_id=UCphkra97DMNIAIvA1y8hZ-A";
const CACHE_CONTROL = "s-maxage=900, stale-while-revalidate=3600";

export async function GET() {
	try {
		const response = await fetch(YOUTUBE_FEED, {
			headers: {
				"User-Agent": "DealScaleYouTubeRSSProxy/1.0 (+https://dealscale.io)",
				Accept: "application/atom+xml, application/xml;q=0.9, */*;q=0.8",
			},
		});

		if (!response.ok) {
			throw new Error(`YouTube returned status ${response.status}`);
		}

		const xml = await response.text();

		return new NextResponse(xml, {
			status: 200,
			headers: {
				"Content-Type": "application/atom+xml; charset=utf-8",
				"Cache-Control": CACHE_CONTROL,
			},
		});
	} catch (error) {
		console.error("Error fetching YouTube RSS feed:", error);
		return new NextResponse(
			'<?xml version="1.0" encoding="UTF-8"?><feed><title>DealScale YouTube Feed Error</title><subtitle>YouTube RSS temporarily unavailable.</subtitle></feed>',
			{
				status: 502,
				headers: { "Content-Type": "application/atom+xml; charset=utf-8" },
			},
		);
	}
}


