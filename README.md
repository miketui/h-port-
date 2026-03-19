# MDW — Michael David Hairstylist Portfolio

A celebrity hairstylist portfolio for **Michael David (MDW)** — featuring editorial work with Rihanna, Lizzo, Lupita Nyong'o, Aurora James, Billy Porter, and more. Published in Vogue, Harper's Bazaar, Vanity Fair, Glamour, ELLE UK.

## Tech Stack

- **React 19** — UI library
- **Vite** — build tool & dev server
- **Tailwind CSS v4** — utility-first styling
- **Framer Motion** — animations & page transitions
- **TypeScript** — type safety
- **wouter** — lightweight client-side routing
- **react-helmet-async** — dynamic SEO meta tags

## Project Structure

```
artifacts/hairstylist-portfolio/
├── index.html              # App entry point with OG/SEO meta tags
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration (self-contained)
├── package.json
├── .env.example            # Environment variable documentation
├── public/
│   ├── favicon.svg / .ico / 16x16 / 32x32
│   ├── apple-touch-icon.png
│   ├── icon-192.png / icon-512.png / maskable-icon-512.png
│   ├── opengraph.jpg
│   ├── robots.txt
│   ├── site.webmanifest
│   ├── sitemap.xml
│   └── images/
│       └── portfolio/
│           ├── beauty/          (13 images)
│           ├── commercial-ecom/ (8 images)
│           ├── cover/           (9 images)
│           ├── editorial/       (20 images)
│           ├── homepage/        (11 images)
│           └── red-carpet/      (18 images)
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── components/
    │   ├── EmailSignup.tsx
    │   ├── Lightbox.tsx
    │   ├── SEO.tsx
    │   └── layout/  (Navbar, Footer, PageTransition)
    ├── hooks/
    ├── lib/            (data.ts, utils.ts)
    └── pages/          (Home, Portfolio, Category, About, Press, Contact)
```

## Getting Started Locally

```bash
cd artifacts/hairstylist-portfolio
npm install
npm run dev
```

The dev server starts at `http://localhost:5173`.

## Deploying to Vercel

1. Import the repository into [Vercel](https://vercel.com)
2. Vercel will auto-detect the framework as **Vite**
3. Set the **Root Directory** to the repo root (not `artifacts/hairstylist-portfolio`)
4. The `vercel.json` at the repo root handles the build configuration
5. Set the required [environment variables](#environment-variables) in the Vercel dashboard

Vercel will use:
- **Build Command:** `cd artifacts/hairstylist-portfolio && npm install && npm run build`
- **Output Directory:** `artifacts/hairstylist-portfolio/dist`
- **API Routes:** `api/*.ts` — Vercel serverless functions (Node.js runtime)

## Environment Variables

Set these in your Vercel project dashboard under **Settings → Environment Variables**:

| Variable | Required | Description |
|---|---|---|
| `MAILERLITE_API_TOKEN` | Yes | MailerLite API token for newsletter signup |
| `MAILERLITE_GROUP_ID` | No | MailerLite group ID to assign subscribers to |

Copy `artifacts/hairstylist-portfolio/.env.example` to `artifacts/hairstylist-portfolio/.env` for local development.

## Portfolio Categories

| Category | Images | Highlights |
|---|---|---|
| Covers | 9 | Harper's Bazaar, Coveteur, Glamour, Emmy Magazine |
| Editorial | 20 | GRAZIA USA, Rollacoaster, Schon Magazine, ELLE UK |
| Red Carpet | 18 | Met Gala, BET Awards, NAACP Awards, Vanity Fair |
| Beauty | 13 | Savage X Fenty, Harper's Bazaar, Paper Magazine |
| Commercial/ECOM | 8 | Savage X Fenty, Brother Vellies, Le Specs |

**69 total portfolio images** across 5 categories.

## License

All portfolio images and content are the property of Michael David. Code is provided for portfolio display purposes.
