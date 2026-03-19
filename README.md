# MDW — Michael David | Celebrity Hairstylist & Creative Director

Professional portfolio site for Michael David — celebrity hairstylist, creative director, and author. Features editorial work for Vogue, Harper's Bazaar, and Vanity Fair, with clients including Rihanna, Lizzo, Lupita Nyong'o, Aurora James, and Billy Porter.

## Tech Stack

- **Framework:** React 19 + Vite 7
- **Styling:** Tailwind CSS v4 + custom HSL design tokens
- **Animation:** Framer Motion
- **Routing:** wouter
- **Type Safety:** TypeScript (strict)
- **SEO:** react-helmet-async + static OpenGraph meta tags
- **API:** Netlify Functions (serverless)
- **Email / CRM:** MailerLite API

## Project Structure

```
artifacts/hairstylist-portfolio/
├── index.html                    # Vite entry with static OG meta tags
├── vite.config.ts
├── tsconfig.json
├── package.json
├── netlify.toml                  # Inner deploy config (base = ".")
├── .env.example                  # Required environment variables
├── netlify/functions/            # Serverless API handlers
│   ├── subscribe.ts              # POST /api/subscribe — newsletter signup
│   ├── contact.ts                # POST /api/contact — contact form
│   └── health.ts                 # GET  /api/health  — health check
├── server/
│   └── index.ts                  # Express dev server (local development only)
├── public/
│   ├── favicon.svg / favicon.ico / ...
│   ├── opengraph.jpg
│   ├── site.webmanifest
│   ├── sitemap.xml
│   ├── robots.txt
│   └── images/
│       └── portfolio/
│           ├── beauty/
│           ├── commercial-ecom/
│           ├── cover/
│           ├── editorial/
│           ├── homepage/
│           └── red-carpet/
└── src/
    ├── App.tsx
    ├── main.tsx
    ├── index.css
    ├── components/
    │   ├── EmailSignup.tsx
    │   ├── Lightbox.tsx
    │   ├── SEO.tsx
    │   ├── layout/  (Navbar, Footer, PageTransition)
    │   └── ui/      (toast, toaster, tooltip)
    ├── hooks/
    ├── lib/
    │   ├── data.ts   # All portfolio image data and metadata
    │   └── utils.ts
    └── pages/        (Home, Portfolio, Category, About, Press, Contact)
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Local Development

```bash
# Install dependencies
cd artifacts/hairstylist-portfolio
npm install

# Copy and configure environment variables
cp .env.example .env
# Edit .env with your MailerLite credentials

# Start the dev server (Vite + Express API)
npm run dev
```

The site will be available at `http://localhost:5173`. The API server runs on port 8080 and is proxied automatically by Vite during development.

## Deployment

### Netlify (Recommended)

1. Connect your GitHub repository to Netlify.
2. Netlify will auto-detect the root `netlify.toml` configuration:
   - **Base directory:** `artifacts/hairstylist-portfolio`
   - **Build command:** `npm install && npm run build`
   - **Publish directory:** `dist`
3. Set environment variables in the Netlify dashboard (see below).
4. Deploy.

API routes (`/api/subscribe`, `/api/contact`, `/api/health`) are automatically served via Netlify Functions.

### Vercel

A root `vercel.json` is also included for Vercel deployments. Set the same environment variables in the Vercel project settings.

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `MAILERLITE_API_TOKEN` | ✅ Yes | MailerLite API token for newsletter and contact form |
| `MAILERLITE_GROUP_ID` | ✅ Yes | MailerLite group/list ID to add subscribers to |

Set these in your Netlify or Vercel dashboard under **Site settings → Environment variables**.

## Portfolio Categories

| Category | Slug | Description |
|---|---|---|
| Covers | `cover` | Magazine cover work |
| Editorial | `editorial` | Fashion editorial spreads |
| Red Carpet | `red-carpet` | Celebrity event styling |
| Beauty | `beauty` | Close-up beauty photography |
| Commercial / ECOM | `commercial-ecom` | Brand and e-commerce campaigns |

## License

All portfolio images and content are the property of Michael David. Site code is available for reference.
