import express from "express";
import cors from "cors";

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

const MAILERLITE_API_URL = "https://connect.mailerlite.com/api/subscribers";

app.post("/api/subscribe", async (req, res) => {
  const { name, email } = req.body;

  if (!email || typeof email !== "string" || !email.includes("@") || !email.includes(".")) {
    res.status(400).json({ error: "Please provide a valid email address." });
    return;
  }

  if (!name || typeof name !== "string" || name.trim().length < 1) {
    res.status(400).json({ error: "Please provide your name." });
    return;
  }

  const token = process.env.MAILERLITE_API_TOKEN;
  const groupId = process.env.MAILERLITE_GROUP_ID;

  if (!token || !groupId) {
    console.error("Missing MAILERLITE_API_TOKEN or MAILERLITE_GROUP_ID");
    res.status(500).json({ error: "Server configuration error. Please try again later." });
    return;
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
        fields: {
          name: name.trim(),
        },
        groups: [groupId],
        status: "unconfirmed",
      }),
    });

    if (response.ok || response.status === 200 || response.status === 201) {
      res.json({
        success: true,
        message: "Thank you! Please check your email to confirm your subscription.",
      });
      return;
    }

    const errorData = await response.json().catch(() => null);

    if (response.status === 422 && errorData?.message?.toLowerCase().includes("already")) {
      res.json({
        success: true,
        message: "You're already on the list! Check your email for confirmation.",
      });
      return;
    }

    console.error("MailerLite API error:", response.status, errorData);
    res.status(502).json({
      error: "Something went wrong. Please try again or contact us at info@michaeldavidjr.beauty.",
    });
  } catch (err) {
    console.error("Subscribe endpoint error:", err);
    res.status(500).json({
      error: "Something went wrong. Please try again or contact us at info@michaeldavidjr.beauty.",
    });
  }
});

app.post("/api/contact", async (req, res) => {
  const { name, email, projectType, message } = req.body;

  if (!email || typeof email !== "string" || !email.includes("@") || !email.includes(".")) {
    res.status(400).json({ error: "Please provide a valid email address." });
    return;
  }

  if (!name || typeof name !== "string" || name.trim().length < 1) {
    res.status(400).json({ error: "Please provide your name." });
    return;
  }

  if (!message || typeof message !== "string" || message.trim().length < 10) {
    res.status(400).json({ error: "Please provide details about your inquiry." });
    return;
  }

  const token = process.env.MAILERLITE_API_TOKEN;
  const groupId = process.env.MAILERLITE_GROUP_ID;

  if (!token || !groupId) {
    console.error("Missing MAILERLITE_API_TOKEN or MAILERLITE_GROUP_ID");
    res.status(500).json({ error: "Server configuration error. Please try again later." });
    return;
  }

  try {
    // Add contact to MailerLite with custom fields
    const response = await fetch(MAILERLITE_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: email.trim().toLowerCase(),
        fields: {
          name: name.trim(),
          project_type: projectType || "Not specified",
          message: message.trim(),
        },
        groups: [groupId],
        status: "active",
      }),
    });

    if (response.ok || response.status === 200 || response.status === 201) {
      res.json({
        success: true,
        message: "Thank you. Michael will be in touch within 48–72 hours.",
      });
      return;
    }

    const errorData = await response.json().catch(() => null);

    if (response.status === 422 && errorData?.message?.toLowerCase().includes("already")) {
      res.json({
        success: true,
        message: "Thank you. Your inquiry has been received. Michael will be in touch within 48–72 hours.",
      });
      return;
    }

    console.error("MailerLite API error:", response.status, errorData);
    res.status(502).json({
      error: "Something went wrong. Please try again or email info@michaeldavidjr.beauty directly.",
    });
  } catch (err) {
    console.error("Contact endpoint error:", err);
    res.status(500).json({
      error: "Something went wrong. Please try again or email info@michaeldavidjr.beauty directly.",
    });
  }
});

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`API server running on port ${PORT}`);
});
