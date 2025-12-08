/**
 * Cloudinary API client using fetch (Edge Runtime compatible)
 * Replaces the cloudinary SDK which requires Node.js built-ins
 */

/**
 * Get Cloudinary credentials (lazy evaluation to avoid build-time errors)
 */
function getCloudinaryConfig() {
	const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
	const apiKey = process.env.CLOUDINARY_API_KEY;
	const apiSecret = process.env.CLOUDINARY_API_SECRET;

	if (!cloudName || !apiKey || !apiSecret) {
		throw new Error(
			"Missing Cloudinary environment variables: CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET",
		);
	}

	return { cloudName, apiKey, apiSecret };
}

/**
 * Upload file to Cloudinary using REST API
 */
export async function uploadFile(
	file: string,
	type: "image" | "video" | "raw" | "auto" = "raw",
) {
	// Add prefix if file is a base64 string and not already prefixed
	let uploadInput = file;
	if (
		typeof file === "string" &&
		/^[A-Za-z0-9+/=]+$/.test(file) &&
		file.length > 100 &&
		!file.startsWith("data:")
	) {
		uploadInput = `data:image/png;base64,${file}`;
	}

	// Get Cloudinary config
	const { cloudName, apiKey, apiSecret } = getCloudinaryConfig();

	// Create form data
	const formData = new FormData();
	formData.append("file", uploadInput);
	formData.append("api_key", apiKey);
	formData.append("resource_type", type);

	// Generate timestamp for signature
	const timestamp = Math.floor(Date.now() / 1000).toString();

	// Create signature parameters
	const signatureParams: Record<string, string> = {
		timestamp,
		resource_type: type,
	};

	// Generate signature using crypto.subtle (Edge compatible)
	const sortedParams = Object.keys(signatureParams)
		.sort()
		.map((key) => `${key}=${signatureParams[key]}`)
		.join("&");
	const signatureString = `${sortedParams}${apiSecret}`;

	// Use Web Crypto API to generate SHA-1 hash
	const encoder = new TextEncoder();
	const data = encoder.encode(signatureString);
	const hashBuffer = await crypto.subtle.digest("SHA-1", data);
	const hashArray = Array.from(new Uint8Array(hashBuffer));
	const signature = hashArray
		.map((b) => b.toString(16).padStart(2, "0"))
		.join("");

	formData.append("timestamp", timestamp);
	formData.append("signature", signature);

	// Upload to Cloudinary
	const response = await fetch(
		`https://api.cloudinary.com/v1_1/${cloudName}/${type}/upload`,
		{
			method: "POST",
			body: formData,
		},
	);

	if (!response.ok) {
		const errorText = await response.text();
		throw new Error(
			`Cloudinary upload failed: ${response.status} ${response.statusText} - ${errorText}`,
		);
	}

	const result = await response.json();
	return result;
}

/**
 * Delete file from Cloudinary using REST API
 */
export async function deleteFile(
	file_id: string,
	type: "image" | "video" | "raw" | "auto" = "raw",
) {
	// Get Cloudinary config
	const { cloudName, apiKey, apiSecret } = getCloudinaryConfig();

	// Generate timestamp for signature
	const timestamp = Math.floor(Date.now() / 1000).toString();

	// Create signature parameters
	const signatureParams: Record<string, string> = {
		public_id: file_id,
		timestamp,
		resource_type: type,
	};

	// Generate signature
	const sortedParams = Object.keys(signatureParams)
		.sort()
		.map((key) => `${key}=${signatureParams[key]}`)
		.join("&");
	const signatureString = `${sortedParams}${apiSecret}`;

	// Use Web Crypto API to generate SHA-1 hash
	const encoder = new TextEncoder();
	const data = encoder.encode(signatureString);
	const hashBuffer = await crypto.subtle.digest("SHA-1", data);
	const hashArray = Array.from(new Uint8Array(hashBuffer));
	const signature = hashArray
		.map((b) => b.toString(16).padStart(2, "0"))
		.join("");

	// Create form data
	const formData = new FormData();
	formData.append("public_id", file_id);
	formData.append("api_key", apiKey);
	formData.append("timestamp", timestamp);
	formData.append("signature", signature);
	formData.append("resource_type", type);

	// Delete from Cloudinary
	const response = await fetch(
		`https://api.cloudinary.com/v1_1/${cloudName}/${type}/destroy`,
		{
			method: "POST",
			body: formData,
		},
	);

	if (!response.ok) {
		const errorText = await response.text();
		throw new Error(
			`Cloudinary delete failed: ${response.status} ${response.statusText} - ${errorText}`,
		);
	}

	const result = await response.json();
	return result;
}

/**
 * Upload image to Cloudinary (convenience wrapper)
 */
export async function uploadImage(file: string) {
	return uploadFile(file, "image");
}

/**
 * Delete image from Cloudinary (convenience wrapper)
 */
export async function deleteImage(file_id: string) {
	return deleteFile(file_id, "image");
}
