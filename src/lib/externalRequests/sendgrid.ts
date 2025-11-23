/**
 * SendGrid API client using fetch (Edge Runtime compatible)
 * Replaces the @sendgrid/mail and @sendgrid/client SDKs which require Node.js built-ins
 */

/**
 * Get SendGrid API key (lazy evaluation to avoid build-time errors)
 */
function getSendGridKey(): string {
	const isDevEnv = process.env.STAGING_ENVIRONMENT === "DEV";
	const key = isDevEnv
		? process.env.SENDGRID_TEST_API_KEY
		: process.env.SENDGRID_API_KEY;
	if (!key) {
		throw new Error(
			"Missing SendGrid API key: SENDGRID_API_KEY or SENDGRID_TEST_API_KEY",
		);
	}
	return key;
}

/**
 * Get SendGrid support email (lazy evaluation to avoid build-time errors)
 */
function getSendGridSupportEmail(): string {
	const email = process.env.SENDGRID_SUPPORT_EMAIL;
	if (!email) {
		throw new Error("Missing SendGrid support email: SENDGRID_SUPPORT_EMAIL");
	}
	return email;
}

const SENDGRID_BASE_URL = "https://api.sendgrid.com/v3";

interface SendGridList {
	id: string;
	name: string;
	contact_count: number;
}

interface SendGridListsResponse {
	result: SendGridList[];
}

export interface Lead {
	firstName: string;
	lastName: string;
	companyName: string;
	landingPage: string;
	email: string;
	phone: string;
	postal_code: string;
	selectedService: string;
	message: string;
	termsAccepted: boolean;
	startupStage: string;
	fundingRaised: string;
	timeline: string;
	budget: string;
	newsletterSignup: boolean;
	files: File[];
	test_segment?: string;
	beta_tester?: boolean;
	pilot_member?: boolean;
}

interface SendGridEmailPayload {
	personalizations: Array<{
		to: Array<{ email: string }>;
		subject: string;
	}>;
	from: { email: string };
	reply_to?: { email: string };
	content: Array<{
		type: string;
		value: string;
	}>;
}

/**
 * Send email using SendGrid REST API
 */
async function sendEmailViaAPI(payload: SendGridEmailPayload): Promise<number> {
	const response = await fetch(`${SENDGRID_BASE_URL}/mail/send`, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${getSendGridKey()}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify(payload),
	});

	if (!response.ok) {
		const errorText = await response.text();
		throw new Error(
			`SendGrid API error: ${response.status} ${response.statusText} - ${errorText}`,
		);
	}

	return response.status;
}

export async function sendMail(
	email: string,
	message: string,
	p0: string,
	p1: string,
) {
	const supportEmail = getSendGridSupportEmail();
	const payload: SendGridEmailPayload = {
		personalizations: [
			{
				to: [{ email: supportEmail }],
				subject: "Sendgrid email",
			},
		],
		from: { email: supportEmail },
		content: [
			{
				type: "text/plain",
				value: message,
			},
		],
	};

	return sendEmailViaAPI(payload);
}

export async function sendMailHtml(
	sender: string,
	email: string,
	subject: string,
	message: string,
) {
	const supportEmail = getSendGridSupportEmail();
	const payload: SendGridEmailPayload = {
		personalizations: [
			{
				to: [{ email: supportEmail }],
				subject: subject,
			},
		],
		from: { email: supportEmail },
		reply_to: { email: sender },
		content: [
			{
				type: "text/html",
				value: message,
			},
		],
	};

	return sendEmailViaAPI(payload);
}

export async function contactForm(
	sender: string,
	message: string,
	subject: string,
	firstName: string,
	lastName: string,
	referral: string,
) {
	const htmlContent = `
          <section>
            <h1>Contact requested by ${firstName} ${lastName} </h1>
            
            <p>City: ${subject}</p>
            <div>
                <p>message: ${message}</p>
                <p>email: ${sender}</p>
                <p>Reffral: ${referral}</p>
            </div>          
          <section>
        `;

	const supportEmail = getSendGridSupportEmail();
	const payload: SendGridEmailPayload = {
		personalizations: [
			{
				to: [{ email: supportEmail }],
				subject: `Question/Message from ${sender} in ${subject}`,
			},
		],
		from: { email: supportEmail },
		reply_to: { email: sender },
		content: [
			{
				type: "text/html",
				value: htmlContent,
			},
		],
	};

	return sendEmailViaAPI(payload);
}

/**
 * Get SendGrid list by name
 */
async function getList(listName: string): Promise<SendGridList | undefined> {
	const queryParams = new URLSearchParams({
		page_size: "100",
	});

	const url = `${SENDGRID_BASE_URL}/marketing/lists?${queryParams.toString()}`;

	console.log("[SendGrid] Making API request to:", url);

	const response = await fetch(url, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${getSendGridKey()}`,
			"Content-Type": "application/json",
		},
	});

	if (!response.ok) {
		const errorText = await response.text();
		console.error(
			`[SendGrid] API error: ${response.status} ${response.statusText} - ${errorText}`,
		);
		return undefined;
	}

	const body = (await response.json()) as SendGridListsResponse;
	const availableListNames = body.result.map((l) => l.name);
	console.log("[SendGrid] Available list names:", availableListNames);

	for (const list of body.result) {
		if (list.name === listName) {
			console.log(`[SendGrid] Found list: ${listName} (ID: ${list.id})`);
			return list;
		}
	}

	console.error(
		`[SendGrid] List '${listName}' not found. Available lists:`,
		availableListNames,
	);
	return undefined;
}

export async function addToSendGrid(
	lead: Lead,
	listName: string,
): Promise<number> {
	try {
		const targetListName = listName;

		// Validate required parameters
		if (!targetListName) {
			throw new Error("SendGrid list name is not provided");
		}

		// Get the target list
		const list = await getList(targetListName);
		if (!list) {
			throw new Error(`Failed to retrieve SendGrid list: ${targetListName}`);
		}

		// Create contact data with metadata
		const data = {
			list_ids: [list.id],
			contacts: [
				{
					email: lead.email,
					first_name: lead.firstName,
					last_name: lead.lastName,
					phone: lead.phone,
					postal_code: lead.postal_code,
					custom_fields: {
						affiliate_id: "",
						affiliate_member: "",
						agree_terms: "",
						bank_name: "",
						beta_tester: lead.beta_tester ? "true" : undefined,
						billing_address: "",
						business_email: "",
						company_name: lead.companyName,
						cookies: "",
						current_crm: "",
						deals_closed_in_last_year: "",
						direct_real_estate_experience: "",
						discount_code: "",
						features_interested: "",
						features_voted_on: "",
						how_did_you_find_us: "",
						huge_win: "",
						industry_niche: "",
						nda: "",
						network_size: "",
						newsletter_signup: lead.newsletterSignup ? "yes" : "no",
						pain_points: "",
						pilot_member: lead.pilot_member ? "true" : undefined,
						primary_sources_for_deals: "",
						privacy: "",
						product_description: "",
						product_features: "",
						product_license: "",
						product_options: "",
						product_pain_points: "",
						product_solutions: "",
						product_title: "",
						referring_url: lead.landingPage,
						shipping_address: "",
						social_handle: "",
						source_url: "",
						team_size: "",
						terms: lead.termsAccepted ? "yes" : "no",
						website: "",
						test_segment: lead.test_segment ?? undefined,
					},
				},
			],
		};

		// Make the API call
		console.log(
			"[SendGrid] Making API request to: /v3/marketing/contacts",
			"with data:",
			JSON.stringify(data, null, 2),
		);

		const response = await fetch(`${SENDGRID_BASE_URL}/marketing/contacts`, {
			method: "PUT",
			headers: {
				Authorization: `Bearer ${getSendGridKey()}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		console.log("[SendGrid] API response:", {
			status: response.status,
			statusText: response.statusText,
		});

		if (!response.ok) {
			const errorText = await response.text();
			console.error("[SendGrid] API error:", errorText);
			throw new Error(
				`SendGrid API error: ${response.status} ${response.statusText} - ${errorText}`,
			);
		}

		return response.status;
	} catch (error) {
		if (error instanceof Error) {
			console.error("SendGrid Error:", error.message);
			throw error;
		}
		console.error("SendGrid Error:", error);
		throw new Error("Unknown SendGrid error");
	}
}

export async function sendPasswordEmail({
	email,
	password,
	subject,
}: {
	email: string;
	password: string;
	subject: string;
}) {
	const supportEmail = getSendGridSupportEmail();
	const htmlContent = `
          <section>
            <h1>Welcome to Deal Scale</h1>
            
            <p>Login using the following credentials:</p>
            <div>
                <p>username: ${email}</p>
                <p>password: ${password}</p>
            </div>          
          <section>
        `;

	const payload: SendGridEmailPayload = {
		personalizations: [
			{
				to: [{ email: supportEmail }],
				subject: subject,
			},
		],
		from: { email: supportEmail },
		content: [
			{
				type: "text/html",
				value: htmlContent,
			},
		],
	};

	return sendEmailViaAPI(payload);
}

export async function sendPasswordReset(
	email: string,
	token: string,
	subject = "Deal Scale crud credentials",
) {
	const supportEmail = getSendGridSupportEmail();
	const resetUrl = `${process.env.NEXTAUTH_URL || ""}/auth/reset?token=${token}`;
	const htmlContent = `
            <section>
              <h1>Welcome to Deal Scale</h1>
              
              <p>Click on the link to reset Password:</p>
              <div>
                  <p>username: ${email}</p>
                  <a href="${resetUrl}">Reset Password</a>
              </div>          
            <section>
          `;

	const payload: SendGridEmailPayload = {
		personalizations: [
			{
				to: [{ email: supportEmail }],
				subject: "Deal Scale Password reset request",
			},
		],
		from: { email: supportEmail },
		content: [
			{
				type: "text/html",
				value: htmlContent,
			},
		],
	};

	return sendEmailViaAPI(payload);
}

export async function updatePaymentStatus(
	email: string,
	status: boolean,
	listName: string,
): Promise<number | undefined> {
	const list = await getList(listName);
	if (!list) return undefined;

	const data = {
		list_ids: [list.id],
		contacts: [
			{
				email: email,
				custom_fields: {
					PaymentIsActive: status ? "True" : "False",
				},
			},
		],
	};

	console.log(
		"[SendGrid] Making API request to: /v3/marketing/contacts",
		"with data:",
		JSON.stringify(data, null, 2),
	);

	const response = await fetch(`${SENDGRID_BASE_URL}/marketing/contacts`, {
		method: "PUT",
		headers: {
			Authorization: `Bearer ${getSendGridKey()}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});

	console.log("[SendGrid] API response:", {
		status: response.status,
		statusText: response.statusText,
	});

	if (!response.ok) {
		const errorText = await response.text();
		console.error("[SendGrid] API error:", errorText);
		throw new Error(
			`SendGrid API error: ${response.status} ${response.statusText} - ${errorText}`,
		);
	}

	return response.status;
}
