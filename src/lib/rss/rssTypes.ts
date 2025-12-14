export type RssEntry = {
	title: string;
	link: string;
	description: string;
	pubDate: string; // RFC 1123 / UTC string
	guid: string;
	source: "blog" | "youtube" | "github";
	categories?: string[];
};


