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

  let body: { name?: unknown; email?: unknown };
  try {
    body = JSON.parse(event.body ?? "{}");
  } catch {
    return {
      statusCode: 400,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: "Invalid request body." }),
    };
  }

  const { name, email } = body;

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
        email: email.trim().toLowerCase(),
        fields: { name: name.trim() },
        groups: [groupId],
        status: "unconfirmed",
      }),
    });

    if (response.ok) {
      return {
        statusCode: 200,
        headers: CORS_HEADERS,
        body: JSON.stringify({
          success: true,
          message: "Thank you! Please check your email to confirm your subscription.",
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
          message: "You're already on the list! Check your email for confirmation.",
        }),
      };
    }

    console.error("MailerLite API error:", response.status, errorData);
    return {
      statusCode: 502,
      headers: CORS_HEADERS,
      body: JSON.stringify({
        error: "Something went wrong. Please try again or contact us at info@michaeldavidjr.beauty.",
      }),
    };
  } catch (err) {
    console.error("Subscribe function error:", err);
    return {
      statusCode: 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({
        error: "Something went wrong. Please try again or contact us at info@michaeldavidjr.beauty.",
      }),
    };
  }
};

export { handler };
