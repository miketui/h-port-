import type { VercelRequest, VercelResponse } from '@vercel/node';

const MAILERLITE_API_URL = "https://connect.mailerlite.com/api/subscribers";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message, projectType } = req.body || {};

  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    return res.status(400).json({ error: 'Name is required' });
  }

  if (!email || typeof email !== 'string') {
    return res.status(400).json({ error: 'Email is required' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    return res.status(400).json({ error: 'Message is required' });
  }

  const apiToken = process.env.MAILERLITE_API_TOKEN;
  const groupId = process.env.MAILERLITE_GROUP_ID;

  if (!apiToken) {
    console.error('MAILERLITE_API_TOKEN not configured');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const payload: Record<string, unknown> = {
      email: email.trim().toLowerCase(),
      fields: {
        name: name.trim(),
        project_type: (projectType && typeof projectType === 'string' && projectType.trim()) || 'Not specified',
        message: message.trim(),
      },
      status: 'active',
    };

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
      return res.status(200).json({ success: true, message: 'Message received' });
    }

    const errorData = await response.json().catch(() => null);

    if (response.status === 422 && errorData?.message?.toLowerCase().includes('already')) {
      return res.status(200).json({ success: true, message: 'Message received' });
    }

    console.error('MailerLite error:', response.status, errorData);
    return res.status(500).json({ error: 'Failed to process contact form' });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
