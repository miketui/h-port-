import { Router, type IRouter, type Request, type Response } from "express";

const router: IRouter = Router();

router.post("/subscribe", async (req: Request, res: Response) => {
  const { email, source } = req.body as { email?: string; source?: string };

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    res.status(400).json({ error: "Valid email address is required." });
    return;
  }

  const apiKey = process.env["BEEHIIV_API_KEY"];
  const publicationId = process.env["BEEHIIV_PUBLICATION_ID"];

  if (!apiKey || !publicationId) {
    console.error("Beehiiv credentials not configured.");
    res.status(500).json({ error: "Newsletter service not configured." });
    return;
  }

  try {
    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          email,
          reactivate_existing: true,
          send_welcome_email: true,
          utm_source: "mdw-website",
          utm_medium: source ?? "organic",
        }),
      }
    );

    if (!response.ok) {
      const body = await response.text();
      console.error(`Beehiiv error ${response.status}: ${body}`);
      res.status(502).json({ error: "Could not add subscriber. Please try again." });
      return;
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Beehiiv request failed:", err);
    res.status(500).json({ error: "Subscription failed. Please try again." });
  }
});

export default router;
