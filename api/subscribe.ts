import type { VercelRequest, VercelResponse } from '@vercel/node';

const MAILERLITE_API_URL = "https://connect.mailerlite.com/api/subscribers";

const ALLOWED_ORIGINS = [
    'https://h-port-alpha.vercel.app',
    'https://michaeldavidjr.beauty',
    'https://www.michaeldavidjr.beauty',
  ];

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // CORS headers
  const origin = req.headers.origin as string | undefined;
    const allowedOrigin = origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
    res.setHeader('Access-Control-Allow-Origin', allowedOrigin);
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Vary', 'Origin');

  if (req.method === 'OPTIONS') {
        return res.status(200).end();
  }

  if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, website } = req.body || {};

  // Honeypot check — if filled, it's a bot
  if (website) {
        return res.status(200).json({ success: true, message: 'Subscribed successfully' });
  }

  if (!email || typeof email !== 'string') {
        return res.status(400).json({ error: 'Email is required' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const normalizedEmail = email.trim().toLowerCase();
    if (!emailRegex.test(normalizedEmail)) {
          return res.status(400).json({ error: 'Invalid email format' });
    }

  const apiToken = process.env.MAILERLITE_API_TOKEN;
    const groupId = process.env.MAILERLITE_GROUP_ID;

  if (!apiToken) {
        console.error('MAILERLITE_API_TOKEN not configured');
        return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
        const payload: Record<string, unknown> = {
                email: normalizedEmail,
                status: 'active',
        };

      // Include name in subscriber fields if provided
      if (name && typeof name === 'string' && name.trim()) {
              payload.fields = { name: name.trim() };
      }

      if (groupId) {
              payload.groups = [groupId];
      }

      const response = await fetch(MAILERLITE_API_URL, {
              method: 'POST',
              headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${apiToken}`,
              },
              body: JSON.stringify(payload),
      });

      if (response.status === 200 || response.status === 201) {
              return res.status(200).json({ success: true, message: 'Subscribed successfully' });
      }

      const errorData = await response.json().catch(() => null);

      // MailerLite returns 422 if subscriber already exists — treat as success
      if (response.status === 422 && errorData?.message?.toLowerCase().includes('already')) {
              return res.status(200).json({ success: true, message: 'Subscribed successfully' });
      }

      console.error('MailerLite error:', response.status, errorData);
        return res.status(502).json({ error: 'Subscription failed. Please try again.' });
  } catch (error) {
        console.error('Subscribe error:', error);
        return res.status(500).json({ error: 'Internal server error' });
  }
}
