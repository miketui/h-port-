# Final Testing Checklist (Go-Live)

## 1. Website Form Test
- Enter a test email in the **Homepage Form**.
- Verify you see the "Success" message on the screen.
- Enter a different test email in the **Footer Form**.
- Verify it also works correctly.

## 2. Double Opt-In Test
- Check your test email inbox for the **"Please confirm your subscription"** email.
- Click the confirmation button.
- Verify that your status in MailerLite changes from "Unconfirmed" to "Active."

## 3. Automation Test
- Once you click the confirmation link, wait a few moments.
- Verify you receive the **"So glad you're here"** welcome email.
- Check that the "From" address is `info@michaeldavidjr.beauty`.

## 4. Design & Behavior Check
- **Desktop:** Verify the forms look premium and are aligned correctly.
- **Mobile:** Ensure the forms are easy to tap and read on a phone screen.
- **Validation:** Try submitting an empty email or an invalid format (like "name@test") to ensure the error messages show up correctly.

## 5. Security Verification
- **Browser Check:** Right-click your website, click "Inspect," and search for your API token. It **SHOULD NOT** be found anywhere in the source code.
