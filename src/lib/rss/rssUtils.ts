const DEFAULT_TIMEOUT_MS = 8000;

export function ensureArray<T>(value: T | T[] | undefined | null): T[] {
	if (!value) return [];
	return Array.isArray(value) ? value : [value];
}

export function sanitizeXml(value: string): string {
	return value
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&apos;");
}

export function stripHtml(value: string): string {
	return value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

export function toUtcDateString(value?: string): string {
	if (!value) return new Date().toUTCString();
	const parsed = new Date(value);
	return Number.isNaN(parsed.getTime())
		? new Date().toUTCString()
		: parsed.toUTCString();
}

export async function fetchText(
	url: string,
	options?: { headers?: Record<string, string>; timeoutMs?: number },
): Promise<{ ok: true; text: string } | { ok: false; status: number; error: string }> {
	const controller = new AbortController();
	const timeoutMs = options?.timeoutMs ?? DEFAULT_TIMEOUT_MS;
	const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
	try {
		const resp = await fetch(url, {
			headers: options?.headers,
			signal: controller.signal,
		});
		if (!resp.ok) {
			const body = await resp.text().catch(() => "");
			return {
				ok: false,
				status: resp.status,
				error: `Upstream returned ${resp.status} ${resp.statusText}: ${body.slice(0, 200)}`,
			};
		}
		const text = await resp.text();
		return { ok: true, text };
	} catch (err) {
		const msg = err instanceof Error ? err.message : "fetch failed";
		return { ok: false, status: 0, error: msg };
	} finally {
		clearTimeout(timeoutId);
	}
}


