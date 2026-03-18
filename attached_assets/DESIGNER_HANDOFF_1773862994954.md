# Designer Handoff: MailerLite Website Integration

## 1. Implementation Goal
Create a custom, premium signup experience for both the homepage and footer.

## 2. Forms
- **Homepage Form:** Inline, `name` + `email` fields.
- **Footer Form:** Simple, `name` + `email` fields.

## 3. Recommended Backend Implementation
- **Proposed Route:** `/api/subscribe` (or `/api/newsletter-signup`)
- **Method:** `POST`
- **Frontend Body:** Expects `name` and `email`.
- **Validation:** Frontend and backend should validate email format.
- **Backend Role:** The backend should take the `name` and `email`, add the `MAILERLITE_API_TOKEN` and `MAILERLITE_GROUP_ID` (from `.env`), and proxy the request to the MailerLite endpoint.

## 4. MailerLite API Details (Proxy Destination)
- **Base URL:** `https://connect.mailerlite.com/api/subscribers`
- **Method:** `POST`
- **Headers:**
  - `Authorization: Bearer [YOUR_SERVER_SIDE_TOKEN]`
  - `Content-Type: application/json`
  - `Accept: application/json`

## 5. Request Body Example (Backend to MailerLite)
```json
{
  "email": "customer@example.com",
  "fields": {
    "name": "Customer Name"
  },
  "groups": ["182303148544623709"],
  "status": "unconfirmed"
}
```
*Note: Setting `status` to `unconfirmed` triggers the double opt-in confirmation.*

## 6. Website Messages
- **Success Message:** "Thank you! Please check your email to confirm your subscription."
- **Error Message:** "Something went wrong. Please try again or contact us at info@michaeldavidjr.beauty."
- **Double Opt-In Info:** "One more step! Click the link in your confirmation email."

## 7. Configuration Reference
- **Automation Status:** Draft (Needs manual activation in Dashboard).
- **Sender Details:** `Michael David Jr.` <`info@michaeldavidjr.beauty`>
- **Preview Text:** `A personal note from Michael David Jr.`

## 8. Security & Requirements
- **Server-Side ONLY:** The API token must be stored as a server-side environment variable. Never expose it in the frontend.
- **reCAPTCHA:** Please implement reCAPTCHA (v2 or v3) on the website-side forms/backend flow to prevent bot sign-ups.

---
**⚠️ CRITICAL:** The real MailerLite API token must be stored as a **server-side environment variable only**. Do not expose it in browser JavaScript or public packages.
