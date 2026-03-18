# Namecheap DNS Checklist for MailerLite

## 1. Access MailerLite Domain Tab
- Go to **Account Settings** in MailerLite.
- Click **Domains**.
- Look for `michaeldavidjr.beauty`.

## 2. Access Namecheap DNS Settings
- Log in to **Namecheap**.
- Go to **Domain List** -> Click **Manage** next to `michaeldavidjr.beauty`.
- Click **Advanced DNS**.

## 3. Comparing Records
MailerLite will provide two main record types (DKIM and SPF). You must ensure these match exactly in Namecheap:

- **DKIM (TXT Record):**
  - **Host/Name:** Usually something like `ml._domainkey`.
  - **Value/Target:** A long string provided by MailerLite.
- **SPF (TXT Record):**
  - **Host/Name:** Use `@`.
  - **Value/Target:** Usually something like `v=spf1 include:_spf.mlsend.com ~all`.

## 4. Common Mistakes to Look For
- **Duplicate SPF records:** You should only have ONE TXT record starting with `v=spf1`. If you have an existing one, combine them.
- **Trailing dots:** Some providers add a dot at the end. Namecheap usually doesn't need them.
- **Extra spaces:** Make sure there are no hidden spaces when copying and pasting the long DKIM string.

## 5. Verify and Check
- After adding the records in Namecheap, return to MailerLite.
- Click the **Verify** or **Check DNS** button.
- **Propagation Delay:** DNS changes can take anywhere from **1 to 24 hours** to fully update across the internet. If it says "Pending," check back in a few hours.

## 6. When to Get Help
- If MailerLite still shows "Unauthenticated" after 24 hours.
- If you have existing complex DNS records and are unsure how to "combine" them.
