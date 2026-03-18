# README: MailerLite Setup (v1.0)

## A. What has already been created in MailerLite
- **Subscriber Group:** `Website Signups`
- **Group ID:** `182303148544623709`
- **Field Mapping:** Confirmed `email` and `name` are active.

## B. Automation Details
- **Automation Name:** `Welcome Heartfelt Sequence`
- **Status:** Currently in **DRAFT**. (Action required in Section C).
- **Trigger:** Subscriber joins the `Website Signups` group.
- **Recommended "From Name":** `Michael David Jr.`
- **Recommended "From Email":** `info@michaeldavidjr.beauty`
- **Recommended Preview Text:** `A personal note from Michael David Jr.`

## C. What still must be done in the MailerLite Dashboard
1. **Activate Automation:** Go to the "Automations" tab, select the "Welcome Heartfelt Sequence," and click the **On/Off** toggle to **On**.
2. **Finish Email Design:** Add your branding (logo, colors) to the welcome email draft in the automation editor.
3. **Verify Domain:** Ensure `michaeldavidjr.beauty` is authenticated in Account Settings > Domains (Check SPF/DKIM).
4. **Set From Details:** Ensure the sender is `Michael David Jr.` and the email is `info@michaeldavidjr.beauty`.

## D. What still must be done by the Designer
1. **Build the Forms:** Create the homepage and footer signup forms.
2. **Secure the Token:** Store the MailerLite API token as a server-side environment variable.
3. **Connect the API:** Write a backend script to securely call the MailerLite API.
4. **Implement reCAPTCHA:** Add spam protection to the website-side form and backend flow.

## E. What still must be done by Michael (Owner)
1. **Provide the Real API Token:** Send the token securely to the designer (it should not be in the project files).
2. **Final Review:** Send a test sign-up to your own email once the forms are live.

---
**⚠️ SECURITY NOTE:** The real MailerLite API token must be stored as a **server-side environment variable only**. It must **not** be exposed in browser JavaScript, committed to git, or shared in public/frontend packages.
