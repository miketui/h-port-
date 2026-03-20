import type { VercelRequest, VercelResponse } from '@vercel/node';

const MAILERLITE_API_URL = "https://connect.mailerlite.com/api/subscribers";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, website } = req.body || {};

  // Honeypot check — if filled, it's a bot
  if (website) {
    return res.status(200).json({ success: true, message: 'Subscribed successfully' });
  }

  if (!email || typeof email !== 'string') {
    return res.status(400).json({ error: 'Email is required' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  const apiToken = process.env.MAILERLITE_API_TOKEN;
  const groupId = process.env.MAILERLITE_GROUP_ID;

  if (!apiToken) {
    console.error('MAILERLITE_API_TOKEN not configured');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const payload: Record<string, unknown> = { email };
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

    if (!response.ok) {
      const errorData = await response.text();
      console.error('MailerLite error:', response.status, errorData);
      return res.status(response.status).json({ error: 'Subscription failed' });
    }

    return res.status(200).json({ success: true, message: 'Subscribed successfully' });
  } catch (error) {
    console.error('Subscribe error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
