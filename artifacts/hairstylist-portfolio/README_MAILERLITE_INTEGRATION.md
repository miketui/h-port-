# MailerLite Newsletter Integration

## What Was Built

### Backend API Endpoint
- **File:** `server/index.ts`
- **Route:** `POST /api/subscribe`
- **What it does:** Accepts `name` and `email` from the frontend, validates input, then securely proxies the request to the MailerLite API using server-side credentials. Returns safe success/error responses without exposing any secrets.
- **Double opt-in:** Subscribers are created with `status: "unconfirmed"`, which triggers MailerLite's double opt-in confirmation email.

### Frontend Forms (Updated)
- **Homepage:** The banner signup form (bottom of homepage) now collects **name + email** and submits to `/api/subscribe`.
- **Footer:** The compact signup form in the site footer now collects **name + email** and submits to `/api/subscribe`.
- **Contact page:** The inline compact signup at the bottom of the Contact page also uses the updated form.

All forms show:
- A loading spinner while submitting
- A green success message: "Thank you! Please check your email to confirm your subscription."
- A red error message if something goes wrong, with instructions to contact info@michaeldavidjr.beauty.

### Architecture
```
Browser → Vite Dev Server (proxy /api → :8080) → Express Server → MailerLite API
```
The MailerLite API token never leaves the server. The frontend only sends name + email to your own backend.

---

## Required Secrets (Environment Variables)

| Variable | Where | Purpose |
|---|---|---|
| `MAILERLITE_API_TOKEN` | Replit Secrets | Your MailerLite API token (server-side only) |
| `MAILERLITE_GROUP_ID` | Replit Secrets | The subscriber group ID (`182303148544623709`) |

Both are already configured in Replit Secrets.

---

## How the Endpoint Works

1. Frontend sends `POST /api/subscribe` with `{ name, email }`.
2. Server validates that both fields are present and email format is valid.
3. Server reads `MAILERLITE_API_TOKEN` and `MAILERLITE_GROUP_ID` from environment.
4. Server sends request to `https://connect.mailerlite.com/api/subscribers` with:
   ```json
   {
     "email": "user@example.com",
     "fields": { "name": "User Name" },
     "groups": ["182303148544623709"],
     "status": "unconfirmed"
   }
   ```
5. Server returns a safe success/error response to the frontend (no secrets exposed).

---

## How to Test the Signup Flow

1. **Open the website** and scroll to the newsletter signup on the homepage or footer.
2. **Enter a test name and email** (use a real email you can check).
3. **Click Subscribe** — you should see the success message.
4. **Check your email inbox** for a confirmation email from MailerLite.
5. **Click the confirmation link** in the email.
6. **Verify in MailerLite dashboard** that your subscriber status changed from "Unconfirmed" to "Active."
7. **Wait a few minutes** — you should receive the welcome email from the automation (if activated).

---

## What Still Must Be Done in MailerLite Dashboard

1. **Activate the Automation:**
   - Go to Automations tab → find "Welcome Heartfelt Sequence"
   - Toggle it **On**
2. **Finish Email Design:**
   - Add your branding (logo, colors) to the welcome email draft
3. **Set Sender Details:**
   - From Name: `Michael David Jr.`
   - From Email: `info@michaeldavidjr.beauty`
4. **Verify Domain:**
   - Go to Account Settings → Domains
   - Ensure `michaeldavidjr.beauty` shows as authenticated (SPF/DKIM verified)

---

## Namecheap DNS Setup (Beginner Walkthrough)

### Step 1: Open Namecheap Advanced DNS
1. Log in to **Namecheap** (namecheap.com).
2. Click **Domain List** in the left sidebar.
3. Find `michaeldavidjr.beauty` and click **Manage**.
4. Click the **Advanced DNS** tab at the top.

### Step 2: Get the Required Records from MailerLite
1. Log in to **MailerLite** (app.mailerlite.com).
2. Go to **Account Settings** → **Domains**.
3. Find `michaeldavidjr.beauty` and click it.
4. MailerLite will show you two DNS records you need to add:
   - **DKIM record** (TXT type)
   - **SPF record** (TXT type)

### Step 3: Compare and Add Records in Namecheap
For each record MailerLite shows:

**DKIM Record:**
- **Type:** TXT Record
- **Host:** Usually `ml._domainkey` (copy exactly from MailerLite)
- **Value:** A long string provided by MailerLite (copy exactly)
- In Namecheap, click **Add New Record**, select TXT, paste the host and value.

**SPF Record:**
- **Type:** TXT Record
- **Host:** `@`
- **Value:** Usually `v=spf1 include:_spf.mlsend.com ~all`
- **Important:** You should only have ONE TXT record starting with `v=spf1`. If you already have one (e.g., from another email provider), combine them like: `v=spf1 include:_spf.mlsend.com include:other_provider.com ~all`

### Step 4: How to Tell If a Record Is Missing or Wrong
- If MailerLite shows a record and you don't see a matching entry in Namecheap → it's **missing** (add it).
- If the Host or Value doesn't match exactly → it's **mismatched** (edit it to match).
- Watch for: trailing dots, extra spaces, or duplicate entries.

### Step 5: After Adding Records
1. Save all changes in Namecheap.
2. Go back to MailerLite → Domains → click **Check DNS** or **Verify**.

### Step 6: Propagation Delay
- DNS changes can take **1 to 24 hours** to spread across the internet.
- If MailerLite says "Pending" right after you add records, that's normal.
- Check back in a few hours.
- If it still says "Unauthenticated" after 24 hours, double-check:
  - Record types match exactly
  - No extra spaces in values
  - No duplicate SPF records

---

## reCAPTCHA

> **Status: TODO**
>
> reCAPTCHA is recommended but not yet implemented. To add it:
>
> 1. Sign up at [Google reCAPTCHA](https://www.google.com/recaptcha/admin) and get a **Site Key** (frontend) and **Secret Key** (backend).
> 2. Add the Site Key to frontend as `VITE_RECAPTCHA_SITE_KEY` (this one is safe to expose).
> 3. Add the Secret Key to Replit Secrets as `RECAPTCHA_SECRET_KEY` (server-side only).
> 4. In the frontend form, add the reCAPTCHA widget and send the token with the subscribe request.
> 5. In `server/index.ts`, verify the token with Google's API before calling MailerLite.
>
> The current form includes basic input validation but no bot protection beyond that.

---

## Files Created/Modified

| File | Action | Purpose |
|---|---|---|
| `server/index.ts` | **Created** | Express API server with `/api/subscribe` endpoint |
| `src/components/EmailSignup.tsx` | **Modified** | Added name field, switched from Formspree to `/api/subscribe` |
| `vite.config.ts` | **Modified** | Added base-path-aware API proxy |
| `package.json` | **Modified** | Added express, cors, tsx, concurrently; updated dev script |
| `.env.example` | **Created** | Documents required environment variables |
| `README_MAILERLITE_INTEGRATION.md` | **Created** | This file |
