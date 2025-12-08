/**
 * Edge-compatible encryption utilities using Web Crypto API
 * Replaces Node.js crypto for Cloudflare Pages deployment
 */

/**
 * Encrypt OAuth token using AES-256-CBC (Edge-compatible)
 */
export async function encryptOAuthToken(token: string): Promise<string> {
	const key = await getEncryptionKey();
	const iv = crypto.getRandomValues(new Uint8Array(16));

	const encoder = new TextEncoder();
	const data = encoder.encode(token);

	const cryptoKey = await crypto.subtle.importKey(
		"raw",
		key,
		{ name: "AES-CBC", length: 256 },
		false,
		["encrypt"],
	);

	const encrypted = await crypto.subtle.encrypt(
		{ name: "AES-CBC", iv },
		cryptoKey,
		data,
	);

	// Convert to hex strings
	const ivHex = Array.from(iv)
		.map((b) => b.toString(16).padStart(2, "0"))
		.join("");
	const encryptedHex = Array.from(new Uint8Array(encrypted))
		.map((b) => b.toString(16).padStart(2, "0"))
		.join("");

	return `${ivHex}:${encryptedHex}`;
}

/**
 * Decrypt OAuth token using AES-256-CBC (Edge-compatible)
 */
export async function decryptOAuthToken(encryptedToken: string): Promise<string> {
	const [ivHex, encryptedHex] = encryptedToken.split(":");

	// Convert hex strings to Uint8Array
	const iv = new Uint8Array(
		ivHex.match(/.{1,2}/g)?.map((byte) => parseInt(byte, 16)) || [],
	);
	const encrypted = new Uint8Array(
		encryptedHex.match(/.{1,2}/g)?.map((byte) => parseInt(byte, 16)) || [],
	);

	const key = await getEncryptionKey();

	const cryptoKey = await crypto.subtle.importKey(
		"raw",
		key,
		{ name: "AES-CBC", length: 256 },
		false,
		["decrypt"],
	);

	const decrypted = await crypto.subtle.decrypt(
		{ name: "AES-CBC", iv },
		cryptoKey,
		encrypted,
	);

	const decoder = new TextDecoder();
	return decoder.decode(decrypted);
}

/**
 * Get encryption key from environment variable
 */
async function getEncryptionKey(): Promise<Uint8Array> {
	const key = process.env.OAUTH_ENCRYPTION_KEY;
	if (!key) {
		throw new Error("OAUTH_ENCRYPTION_KEY environment variable is not set");
	}

	// Convert hex string to Uint8Array
	return new Uint8Array(
		key.match(/.{1,2}/g)?.map((byte) => parseInt(byte, 16)) || [],
	);
}
