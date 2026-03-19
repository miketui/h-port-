import type { Handler, HandlerEvent } from "@netlify/functions";

const MAILERLITE_API_URL = "https://connect.mailerlite.com/api/subscribers";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const handler: Handler = async (event: HandlerEvent) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: CORS_HEADERS, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: "Method not allowed." }),
    };
  }

  let body: { name?: unknown; email?: unknown; projectType?: unknown; message?: unknown };
  try {
    body = JSON.parse(event.body ?? "{}");
  } catch {
    return {
      statusCode: 400,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: "Invalid request body." }),
    };
  }

  const { name, email, projectType, message } = body;

  if (!email || typeof email !== "string" || !email.includes("@") || !email.includes(".")) {
    return {
      statusCode: 400,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: "Please provide a valid email address." }),
    };
  }

  if (!name || typeof name !== "string" || name.trim().length < 1) {
    return {
      statusCode: 400,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: "Please provide your name." }),
    };
  }

  if (!message || typeof message !== "string" || message.trim().length < 10) {
    return {
      statusCode: 400,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: "Please provide details about your inquiry." }),
    };
  }

  const token = process.env.MAILERLITE_API_TOKEN;
  const groupId = process.env.MAILERLITE_GROUP_ID;

  if (!token || !groupId) {
    console.error("Missing MAILERLITE_API_TOKEN or MAILERLITE_GROUP_ID");
    return {
      statusCode: 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: "Server configuration error. Please try again later." }),
    };
  }

  try {
    const response = await fetch(MAILERLITE_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: (email as string).trim().toLowerCase(),
        fields: {
          name: (name as string).trim(),
          project_type: typeof projectType === "string" ? projectType : "Not specified",
          message: (message as string).trim(),
        },
        groups: [groupId],
        status: "active",
      }),
    });

    if (response.ok) {
      return {
        statusCode: 200,
        headers: CORS_HEADERS,
        body: JSON.stringify({
          success: true,
          message: "Thank you. Michael will be in touch within 48–72 hours.",
        }),
      };
    }

    const errorData = await response.json().catch(() => null);

    if (
      response.status === 422 &&
      typeof errorData?.message === "string" &&
      errorData.message.toLowerCase().includes("already")
    ) {
      return {
        statusCode: 200,
        headers: CORS_HEADERS,
        body: JSON.stringify({
          success: true,
          message:
            "Thank you. Your inquiry has been received. Michael will be in touch within 48–72 hours.",
        }),
      };
    }

    console.error("MailerLite API error:", response.status, errorData);
    return {
      statusCode: 502,
      headers: CORS_HEADERS,
      body: JSON.stringify({
        error:
          "Something went wrong. Please try again or email info@michaeldavidjr.beauty directly.",
      }),
    };
  } catch (err) {
    console.error("Contact function error:", err);
    return {
      statusCode: 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({
        error:
          "Something went wrong. Please try again or email info@michaeldavidjr.beauty directly.",
      }),
    };
  }
};

export { handler };
