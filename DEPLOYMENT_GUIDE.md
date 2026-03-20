# MDW — Michael David Hairstylist Portfolio: Deployment Guide & Site Preview

> **What this document covers:** A complete, standalone reference for deploying the MDW portfolio website to Vercel (and alternative platforms), understanding every page and visual detail before the site goes live, configuring environment variables, running the project locally, and verifying a successful deployment.

This site is the professional portfolio of **Michael David Warren Jr. (MDW)** — celebrity hairstylist known for editorial work with Rihanna, Lizzo, Lupita Nyong'o, Aurora James, and Billy Porter. His work has been published in Vogue, Harper's Bazaar, Vanity Fair, Glamour, and ELLE UK. This portfolio showcases his body of work across Covers, Editorial, Red Carpet, Beauty, and Commercial categories, and allows potential clients to make direct inquiries.

---

## Table of Contents

1. [What You'll See When the Site Goes Live](#1-what-youll-see-when-the-site-goes-live)
2. [Complete Tech Stack](#2-complete-tech-stack)
3. [Project Structure](#3-project-structure)
4. [How to Run Locally](#4-how-to-run-locally)
5. [How to Deploy to Vercel](#5-how-to-deploy-to-vercel)
6. [Environment Variables Reference](#6-environment-variables-reference)
7. [API Routes Reference](#7-api-routes-reference)
8. [Vercel Configuration Breakdown](#8-vercel-configuration-breakdown)
9. [Alternative Deployment Options](#9-alternative-deployment-options)
10. [Custom Domain Setup](#10-custom-domain-setup)
11. [Post-Deployment Checklist](#11-post-deployment-checklist)
12. [Troubleshooting](#12-troubleshooting)

---

## 1. What You'll See When the Site Goes Live

This section paints a complete picture of every page — written for someone who has never visited the site.

---

### 🏠 Homepage (`/`)

The homepage is the centerpiece of the portfolio. It is dark, cinematic, and immersive, making an immediate impression.

**Hero Section**
- Full-viewport hero (95 vh height, minimum 700 px) with a large background photograph of Michael David as the centrepiece.
- Overlaid in small uppercase tracked letters: `Hair Direction • Celebrity • Editorial` — a three-line descriptor that immediately frames his work.
- Below that, a massive display heading **"MICHAEL DAVID"** rendered in Playfair Display serif font, scaling from large on mobile up to 9xl on wide screens.
- Two call-to-action buttons side by side: **"Explore Portfolio"** (links to `/portfolio`) and **"Book Now"** (links to `/contact`). Both use a gold/primary border style that stands out against the dark background.
- As the user scrolls, the hero image performs a **parallax effect**: it scales subtly to 1.08× and fades to 0 opacity, giving a smooth cinematic transition into the next section.

**Editorial Image Strip**
- Immediately below the hero: four editorial images displayed in a grid, each representing a different category of work:
  - Editorial (GRAZIA USA)
  - Red Carpet (Lupita Nyong'o)
  - Beauty (Savage X Fenty)
  - Commercial (Phaidon)
- Each image has a **staggered cinematic reveal animation**: they fly in from different origin points as the section enters the viewport.

**Intro Statement**
- Large display-size quote text referencing Rihanna and MDW's role in shaping culture's most visible figures. This acts as an editorial statement — not a list of facts, but a designed moment of impact.

**Categories Grid**
- A grid of **five portfolio category cards**: Covers, Editorial, Red Carpet, Beauty, Commercial/ECOM.
- Each card is a large image with the category name overlaid.
- On desktop: the first card (Covers) and fourth card span two columns each, creating a dynamic asymmetric layout.
- Hover effect: images zoom in slightly, and an overlay with a short description appears.

**Credibility Marquee**
- An infinite horizontally-scrolling strip of brand and publication names in **outlined (stroke) text** — the kind of typographic treatment associated with luxury editorial design.
- Names featured: Vogue, Harper's Bazaar, W Magazine, Vanity Fair, Savage X Fenty, Nike, Teen Vogue, Refinery29, Glamour, Elle UK.

**Selected Work**
- A grid of four featured work highlights — hand-picked images that represent the breadth of MDW's output.

**Selected Clients Grid**
- A grid of 30+ celebrity and brand names including: Rihanna, Lizzo, Lupita Nyong'o, Aurora James, Billy Porter, Beyoncé, Cardi B, Zendaya, and many others. This section communicates the calibre of clients at a glance.

**Press Preview**
- Three press mention cards — teaser versions of the full press page — each showing the publication name, article title, and a brief excerpt.

**Email Signup Banner**
- A newsletter subscription form with two fields: **Name** and **Email**. On submission, the form POSTs to `/api/subscribe`.

**CTA Section**
- A final "Work With MDW" call-to-action section at the bottom of the page. Features a radial gradient background, a heading, a short line of text, and a button linking to `/contact`.

---

### 🗂️ Portfolio Hub (`/portfolio`)

- Large uppercase **"PORTFOLIO"** heading (up to 9xl font size).
- A short description paragraph with a prominent left-border accent styling.
- A grid of **five category cards**, each with a cover image, the category name, and hover effects that reveal the project count.
- On desktop, the first category (Covers) spans the full width of the grid.
- Clicking any card navigates to `/portfolio/:category`.

---

### 🖼️ Category Pages (`/portfolio/:category`)

Five category pages, each following the same layout template:

| Route | Category | Image Count | Publications / Context |
|---|---|---|---|
| `/portfolio/cover` | Covers | **9 images** | Harper's Bazaar, Coveteur, Glamour, Emmy Magazine |
| `/portfolio/editorial` | Editorial | **20 images** | GRAZIA USA, Rollacoaster, Schon Magazine, ELLE UK |
| `/portfolio/red-carpet` | Red Carpet | **18 images** | Met Gala, BET Awards, NAACP Awards, Vanity Fair |
| `/portfolio/beauty` | Beauty | **13 images** | Savage X Fenty, Harper's Bazaar, Paper Magazine |
| `/portfolio/commercial-ecom` | Commercial / ECOM | **8 images** | Savage X Fenty, Brother Vellies, Le Specs |

**Total: 69 portfolio images across all categories.**

**Every category page contains:**
- A ← back link to `/portfolio`.
- A large uppercase category title and short description.
- A **responsive image grid**: 1 column on mobile, 2 columns on tablet, 3 columns on desktop.
- **Lightbox**: clicking any image opens a full-screen overlay showing the image at full size. The lightbox supports:
  - ← / → keyboard arrow keys
  - Swipe gestures on mobile
  - Previous/Next buttons
  - Close button (or press Escape)
- **Previous / Next Category** navigation links at the bottom of the page (e.g. from Editorial, links to Covers and Red Carpet).
- An **Email Signup** section before the footer.

---

### 👤 About Page (`/about`)

- **Two-column layout on desktop** (single-column stack on mobile):
  - **Left column** — a large portrait photograph, sticky-positioned so it stays in view as you scroll through the bio on the right. On desktop, hovering the portrait transitions it from greyscale to full colour.
  - **Right column** — the full written biography of Michael David Warren Jr.
- A **floating quote card** overlaid on the portrait area with the line: *"Hair is never just hair."*
- **Biography** covers:
  - Early career assisting the legendary Guido Palau.
  - Styling Rihanna for four years across editorial, red carpet, and personal appearances.
  - Building a client roster spanning global pop culture and Hollywood.
- A **"Turning Point" blockquote**: a highlighted passage describing a meaningful client moment during lockdown that reframed the emotional importance of the work.
- A **Career Highlights** timeline displayed in a 3-column grid, marking key milestones.
- A **Selected Clients** grid using 6 columns of name tags.
- An **Email Signup** section.
- **Rich JSON-LD structured data** (Schema.org `Person` type) embedded in the page head for SEO — this helps search engines understand who the person is and what they do.

---

### 📰 Press Page (`/press`)

- Large uppercase **"PRESS"** heading.
- A **3-column grid of press mention cards** (single column on mobile).
- Each card shows:
  - Publication name (e.g., Vogue, Vanity Fair)
  - Article date
  - Article title in italics
  - A brief excerpt
  - A "Read Feature" external link (opens in a new tab)
- Publications include: Vogue, Vanity Fair, Harper's Bazaar, ELLE UK, W Magazine, and others.
- **Email Signup** section at the bottom.

---

### ✉️ Contact Page (`/contact`)

- **Two-column layout on desktop**:
  - **Left column — Contact Information:**
    - Email: `info@michaeldavidjr.beauty`
    - Instagram: `@md.warren`
    - Locations: Los Angeles, New York City, Global
    - Expected response time: 48–72 hours
  - **Right column — Inquiry Form:**
    - Fields: Name, Email, Project Type (dropdown), Message
    - **Project Type dropdown options:** Editorial, Red Carpet, Celebrity Styling, Commercial/Campaign, Beauty/Covers, Everyday Client, Brand Consulting, Speaking Engagement, Other
    - Validation is powered by **Zod schema** + **react-hook-form** — validation errors appear inline below each field before submission.
    - On successful submission: a **toast notification** confirms the message was received.
    - On error: a toast notification explains what went wrong.
    - The form POSTs to `/api/contact`.
- **Email Signup** section at the bottom.
- **JSON-LD structured data** (Schema.org `ContactPage` type) for SEO.

---

### ❓ 404 Page

Any URL that doesn't match a defined route shows a clean 404 page:
- A centred "404" label in small uppercase.
- A "Page Not Found" heading.
- A "Return Home" button linking back to `/`.

---

### 🌐 Global Elements (Present on Every Page)

**Navbar**
- Fixed to the top of every page.
- **On scroll-top**: fully transparent, blending into the dark hero.
- **On scroll**: transitions to a semi-transparent dark background with a `backdrop-blur` effect, ensuring legibility over any page content.
- **Desktop layout**: "MDW" logo/wordmark on the left; navigation links on the right (Home, Portfolio, About, Press, Contact). The Portfolio link has a **dropdown menu** with links to all 5 category sub-pages plus "Portfolio Hub". A "Book Now" button with primary-colour border appears at the far right.
- **Mobile layout**: The navigation collapses to a hamburger icon. Tapping it opens a **full-screen overlay menu** with staggered entry animations for each navigation link.

**Footer**
- Dark background (`#0b0b0b`).
- 3-column grid layout:
  - **Column 1**: MDW branding, a short tagline, and a compact email signup form.
  - **Column 2**: Portfolio category links (Covers, Editorial, Red Carpet, Beauty, Commercial).
  - **Column 3**: Inquiries email address and social media links (Instagram, LinkedIn).
- Copyright year (dynamically updated).
- A gradient divider line separating the footer content from the copyright line.

---

### 🎨 Design Language Summary

| Attribute | Value |
|---|---|
| Background colour | `#121212` (very dark near-black) |
| Text colour | Warm off-white |
| Primary/accent colour | Gold (`~#b09054`) |
| Secondary accent | Teal/emerald (`~#0fa35e`) |
| Card/surface colour | Dark charcoal |
| Display font | **Playfair Display** (serif) — used for all headings and display text |
| Body font | **Inter** (sans-serif) — used for body copy, captions, UI |
| Border radius | **Zero** — sharp rectangular corners throughout |
| Animations | Framer Motion: page transitions (fade + slide up), scroll-triggered reveals, image hover zooms, staggered list entrances |
| Responsive grid | Mobile-first: 1 column → 2 columns → 3 columns |
| Mobile navigation | Full-screen overlay with staggered animation |

---

## 2. Complete Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **React** | 19.1.0 | UI component library and rendering engine |
| **Vite** | 7.3.1 | Build tool and dev server (HMR, ES module bundling) |
| **TypeScript** | ES2020 target | Type-safe JavaScript across all source files |
| **Tailwind CSS** | 4.2.1 | Utility-first CSS with `@tailwindcss/vite` v4 plugin |
| **Framer Motion** | 12.35.1 | Declarative animations and page transitions |
| **wouter** | 3.3.5 | Lightweight client-side routing (React Router alternative) |
| **react-helmet-async** | 3.0.0 | SEO meta tags and JSON-LD structured data in the `<head>` |
| **@tanstack/react-query** | 5.90.21 | Async data fetching and server-state management |
| **react-hook-form** | 7.71.2 | Performant form state management with minimal re-renders |
| **@hookform/resolvers** | 5.2.2 | Connects Zod schemas to react-hook-form for validation |
| **zod** | 3.25.76 | Schema declaration and runtime validation |
| **@radix-ui/react-toast** | 1.2.7 | Accessible toast notification primitive |
| **@radix-ui/react-tooltip** | 1.2.0 | Accessible tooltip primitive |
| **@radix-ui/react-slot** | 1.2.0 | Composition primitive for Radix UI components |
| **lucide-react** | 0.545.0 | Icon library (SVG icons as React components) |
| **class-variance-authority** | 0.7.1 | Variant-based CSS class management for UI components |
| **clsx** | 2.1.1 | Conditional className utility |
| **tailwind-merge** | 3.5.0 | Merges conflicting Tailwind classes safely |
| **@vercel/node** | 3 | Runtime for Vercel Serverless Functions (`api/*.ts`) |

---

## 3. Project Structure

```
h-port-/                                  ← Repository root
├── vercel.json                           ← Vercel build + routing configuration
├── netlify.toml                          ← Alternative: Netlify build config
├── .gitignore
├── README.md
├── DEPLOYMENT_GUIDE.md                   ← This document
│
├── api/                                  ← Vercel Serverless Functions
│   ├── contact.ts                        ← POST /api/contact — contact form
│   ├── subscribe.ts                      ← POST /api/subscribe — newsletter
│   └── health.ts                         ← GET /api/health — health check
│
└── artifacts/
    └── hairstylist-portfolio/            ← The React application
        ├── package.json                  ← Dependencies and npm scripts
        ├── package-lock.json
        ├── vite.config.ts                ← Vite build configuration
        ├── tsconfig.json                 ← TypeScript configuration
        ├── netlify.toml                  ← App-level Netlify config
        ├── index.html                    ← HTML entry point
        │
        ├── public/                       ← Static assets (served as-is)
        │   ├── favicon.ico / .svg / .png variants
        │   ├── icon-192.png / icon-512.png / maskable-icon-512.png
        │   ├── apple-touch-icon.png
        │   ├── opengraph.jpg             ← Default Open Graph image
        │   ├── og_beauty_rihanna.jpg     ← OG image variant
        │   ├── og_editorial_aurora.jpg   ← OG image variant
        │   ├── site.webmanifest          ← PWA manifest
        │   ├── robots.txt
        │   ├── sitemap.xml
        │   └── images/
        │       └── portfolio/            ← All 69 portfolio images
        │           ├── covers/           ← 9 cover images
        │           ├── editorial/        ← 20 editorial images
        │           ├── red-carpet/       ← 18 red carpet images
        │           ├── beauty/           ← 13 beauty images
        │           └── commercial-ecom/  ← 8 commercial images
        │
        └── src/                          ← Application source code
            ├── main.tsx                  ← App entry point
            ├── App.tsx                   ← Router setup and layout wrapper
            ├── index.css                 ← Global styles + Tailwind imports
            │
            ├── pages/                    ← Route-level page components
            │   ├── Home.tsx              ← / (homepage)
            │   ├── Portfolio.tsx         ← /portfolio (hub)
            │   ├── Category.tsx          ← /portfolio/:category
            │   ├── About.tsx             ← /about
            │   ├── Press.tsx             ← /press
            │   ├── Contact.tsx           ← /contact
            │   └── not-found.tsx         ← 404
            │
            ├── components/
            │   ├── EmailSignup.tsx       ← Reusable newsletter form
            │   ├── Lightbox.tsx          ← Full-screen image viewer
            │   ├── SEO.tsx               ← Helmet-async wrapper
            │   ├── layout/
            │   │   ├── Navbar.tsx        ← Fixed top navigation
            │   │   ├── Footer.tsx        ← Site footer
            │   │   └── PageTransition.tsx ← Framer Motion route transition
            │   └── ui/
            │       ├── toast.tsx         ← Toast component (Radix UI)
            │       ├── toaster.tsx       ← Toast container
            │       └── tooltip.tsx       ← Tooltip component (Radix UI)
            │
            ├── hooks/
            │   ├── use-mobile.tsx        ← Responsive breakpoint hook
            │   └── use-toast.ts          ← Toast state management hook
            │
            └── lib/
                ├── data.ts               ← All portfolio data (images, clients, press)
                └── utils.ts              ← Utility helpers (cn, etc.)
```

---

## 4. How to Run Locally

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm v9 or later (comes with Node.js)
- Git

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/miketui/h-port-.git

# 2. Navigate into the app directory
cd h-port-/artifacts/hairstylist-portfolio

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The dev server starts at **http://localhost:5173** with hot module replacement (HMR) — any file change will instantly update the browser.

> ⚠️ **Note about API routes locally:** The contact form (`/api/contact`) and newsletter signup (`/api/subscribe`) run as Vercel Serverless Functions and are **not** served by the Vite dev server. To test them locally you need to either:
> - Use the [Vercel CLI](https://vercel.com/docs/cli): `vercel dev` from the repo root, or
> - Set `API_PORT` in a `.env` file to point at a local Express server (advanced).
>
> Without the API running, the site loads and displays perfectly — the forms just show an error toast on submission.

### Setting up a local `.env` file (optional)

Create `artifacts/hairstylist-portfolio/.env` (this file is git-ignored):

```env
MAILERLITE_API_TOKEN=your_mailerlite_token_here
MAILERLITE_GROUP_ID=your_group_id_here   # optional
```

### Other available commands

| Command | What it does |
|---|---|
| `npm run dev` | Start development server at http://localhost:5173 |
| `npm run build` | Compile TypeScript + bundle with Vite into `dist/` |
| `npm run preview` | Serve the built `dist/` folder locally for final testing |
| `npm run typecheck` | Run TypeScript type-checker without emitting files |

---

## 5. How to Deploy to Vercel

### Prerequisites

- ✅ A **GitHub account** with access to the `miketui/h-port-` repository
- ✅ A **Vercel account** — the free Hobby tier is sufficient ([sign up here](https://vercel.com/signup))
- 🟡 *(Optional)* A **MailerLite account** for contact form and newsletter functionality ([mailerlite.com](https://www.mailerlite.com))
- 🟡 *(Optional)* A **custom domain** (e.g. `michaeldavidjr.beauty`)

---

### Step 1 — Sign in to Vercel

Go to [https://vercel.com](https://vercel.com) and sign in using your GitHub account. This authorises Vercel to access your repositories.

---

### Step 2 — Create a New Project

From the Vercel dashboard, click **"Add New"** → **"Project"**.

---

### Step 3 — Import the Repository

In the repository list, find and click **"Import"** next to `miketui/h-port-`.

> If you don't see the repository, click "Adjust GitHub App Permissions" and grant Vercel access to the `miketui` organisation or the specific repo.

---

### Step 4 — Configure the Project

Vercel will auto-detect the framework as **Vite**. Make the following settings:

| Setting | Value |
|---|---|
| **Framework Preset** | Vite (auto-detected) |
| **Root Directory** | *(leave blank / leave as repo root)* |

> ⚠️ **Do NOT change the Root Directory to `artifacts/hairstylist-portfolio`.**
> The `vercel.json` at the repo root already configures the build correctly. Changing the root directory will break the build.

The `vercel.json` automatically sets these build values:

```
Build Command:   cd artifacts/hairstylist-portfolio && npm install && npm run build
Output Dir:      artifacts/hairstylist-portfolio/dist
Install Command: cd artifacts/hairstylist-portfolio && npm install
```

You do not need to enter these manually — Vercel reads them from `vercel.json`.

---

### Step 5 — Set Environment Variables

Before clicking Deploy, go to **"Environment Variables"** (shown on the configuration screen) and add:

| Variable Name | Value | Notes |
|---|---|---|
| `MAILERLITE_API_TOKEN` | `your_token_here` | **Required** for forms to work. Get from MailerLite → Integrations → API |
| `MAILERLITE_GROUP_ID` | `your_group_id` | Optional. Assign subscribers to a specific group |

> 💡 If you skip `MAILERLITE_API_TOKEN`, the site will still deploy and display perfectly. The contact form and newsletter signup will show error messages on submission, but nothing else breaks.

---

### Step 6 — Deploy

Click **"Deploy"**.

Vercel will:
1. Clone the repository
2. Run `cd artifacts/hairstylist-portfolio && npm install && npm run build`
3. Upload the `dist/` folder as static assets
4. Deploy `api/*.ts` as Serverless Functions

The first deploy takes approximately 2–4 minutes. Subsequent deploys triggered by a `git push` are typically 60–90 seconds.

---

### Step 7 — Visit Your Site

Once the build completes, Vercel provides a deployment URL like:
```
https://h-port-[random].vercel.app
```

Click it to see the live site. 🎉

---

### Step 8 — (Optional) Add a Custom Domain

See [Section 10 — Custom Domain Setup](#10-custom-domain-setup).

---

### Automatic Re-deploys

After the initial setup, every `git push` to the **main branch** will automatically trigger a new deployment. Pull requests get their own preview deployment URL — great for reviewing changes before merging.

---

## 6. Environment Variables Reference

| Variable | Required | Where Used | Description |
|---|---|---|---|
| `MAILERLITE_API_TOKEN` | **Yes** (for forms) | `api/contact.ts`, `api/subscribe.ts` | MailerLite API Bearer token. Used to add subscribers and submit contact form data. Obtain from: MailerLite Dashboard → Integrations → API |
| `MAILERLITE_GROUP_ID` | No | `api/contact.ts`, `api/subscribe.ts` | MailerLite group/segment ID. When set, new subscribers are automatically added to this group. Leave blank to add to the default list. |
| `BASE_PATH` | No | `vite.config.ts` | Base URL path for the site (defaults to `/`). Only change this if deploying to a subdirectory (e.g. `/portfolio/`). Should not be changed for Vercel root deployments. |
| `PORT` | No | `vite.config.ts` | Dev server port (defaults to `5173`). Only relevant for local development. |
| `API_PORT` | No | `vite.config.ts` | When set, the Vite dev server proxies `/api/*` requests to `http://localhost:{API_PORT}`. Only relevant for local development with a separate API server. Not used in production. |

> 📌 **Key point:** If `MAILERLITE_API_TOKEN` is not set, the serverless functions return a `500` error with `"Server configuration error"`. The rest of the site (all pages, images, navigation) continues to work perfectly.

---

## 7. API Routes Reference

All API routes are implemented as Vercel Serverless Functions in `api/*.ts` at the repo root. They are deployed alongside the static site and are accessible at the same domain.

---

### `POST /api/contact` — Contact Form Submission

**Purpose:** Receives contact form submissions and creates a subscriber in MailerLite with the enquiry details stored as custom fields.

**Request body (JSON):**
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "projectType": "Editorial",
  "message": "I'd love to collaborate on an upcoming shoot..."
}
```

**Validation:**
- `name` — required string, non-empty
- `email` — required, valid email format
- `message` — required string, non-empty
- `projectType` — optional string

**Success response (`200`):**
```json
{ "success": true, "message": "Message received" }
```

**Error responses:**
- `400` — Missing or invalid field (with specific error message)
- `405` — Method not allowed (non-POST request)
- `500` — Server configuration error (MAILERLITE_API_TOKEN not set) or MailerLite API failure

**Notes:**
- Includes full CORS headers (`Access-Control-Allow-Origin: *`) and handles OPTIONS preflight.
- If the email already exists in MailerLite (422 "already exists"), the endpoint still returns `200 success` to avoid revealing subscriber status.

---

### `POST /api/subscribe` — Newsletter Signup

**Purpose:** Adds an email address to the MailerLite subscriber list.

**Request body (JSON):**
```json
{ "email": "jane@example.com" }
```

**Validation:**
- `email` — required, valid email format regex

**Success response (`200`):**
```json
{ "success": true, "message": "Subscribed successfully" }
```

**Error responses:**
- `400` — Email missing or invalid format
- `405` — Method not allowed
- `500` — Server configuration error or MailerLite API failure

**Notes:**
- Includes CORS headers and OPTIONS preflight handling.
- Optionally assigns subscriber to a group if `MAILERLITE_GROUP_ID` is set.

---

### `GET /api/health` — Health Check

**Purpose:** Simple liveness endpoint for monitoring and uptime checks.

**Success response (`200`):**
```json
{ "status": "ok" }
```

---

## 8. Vercel Configuration Breakdown

The `vercel.json` at the repository root controls every aspect of how Vercel builds and serves the site. Here is a field-by-field explanation:

```json
{
  "buildCommand": "cd artifacts/hairstylist-portfolio && npm install && npm run build",
  "outputDirectory": "artifacts/hairstylist-portfolio/dist",
  "installCommand": "cd artifacts/hairstylist-portfolio && npm install",
  "framework": "vite",
  "functions": {
    "api/*.ts": {
      "runtime": "@vercel/node@3"
    }
  },
  "rewrites": [
    { "source": "/api/:path*", "destination": "/api/:path*" },
    { "source": "/(.*)",       "destination": "/index.html"  }
  ],
  "headers": [
    {
      "source": "/images/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    },
    {
      "source": "/assets/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

| Field | Explanation |
|---|---|
| `buildCommand` | Overrides the default build. Navigates into the app directory first, installs dependencies, then runs Vite's build. The `dist/` folder is created inside `artifacts/hairstylist-portfolio/`. |
| `outputDirectory` | Tells Vercel where to find the compiled static files to serve. Must match where Vite writes its output (`dist/` relative to the app root). |
| `installCommand` | Overrides the install step. Navigates into the app subdirectory before running `npm install`. |
| `framework` | Tells Vercel this is a Vite project, enabling Vite-specific optimisations and the framework preset. |
| `functions."api/*.ts"` | Declares every `.ts` file in the `api/` directory as a Vercel Serverless Function using the `@vercel/node@3` runtime (Node.js). These are compiled and deployed as individual Lambda functions. |
| `rewrites[0]` — API passthrough | Routes `/api/*` requests to the serverless functions. This rule must come before the SPA fallback rule, otherwise API calls would be swallowed by the catch-all. |
| `rewrites[1]` — SPA fallback | The catch-all rewrite that makes client-side routing work. Without this, refreshing any page other than `/` would return a 404 from Vercel's file server (because `about.html` doesn't physically exist — it's a client-side route). |
| `headers` — Image caching | Sets a 1-year `Cache-Control: immutable` header for all files under `/images/` and `/assets/`. Because Vite adds content hashes to asset filenames, these files never change — so a 1-year cache is safe and significantly improves repeat-visit performance. |

---

## 9. Alternative Deployment Options

The `vercel.json` and `api/*.ts` functions are Vercel-specific. The static frontend can be deployed anywhere, but the API routes require adaptation.

---

### Netlify

A `netlify.toml` is already present at the repo root and inside `artifacts/hairstylist-portfolio/`.

```toml
[build]
  base    = "artifacts/hairstylist-portfolio"
  command = "npm run build"
  publish = "dist"
```

**For API routes:** Convert `api/contact.ts` and `api/subscribe.ts` to [Netlify Functions](https://docs.netlify.com/functions/overview/) by placing them in a `netlify/functions/` directory and adjusting the handler signature from `(req: VercelRequest, res: VercelResponse)` to the Netlify `(event, context)` format.

**SPA routing:** Netlify requires a `_redirects` file in the `public/` directory:
```
/*    /index.html    200
```
Or configure it via `netlify.toml`:
```toml
[[redirects]]
  from   = "/*"
  to     = "/index.html"
  status = 200
```

---

### Cloudflare Pages

1. Connect the GitHub repository in the Cloudflare Pages dashboard.
2. Set build configuration:
   - **Build command:** `cd artifacts/hairstylist-portfolio && npm install && npm run build`
   - **Build output directory:** `artifacts/hairstylist-portfolio/dist`
3. For SPA routing, add a `_redirects` file to `public/`:
   ```
   /*    /index.html    200
   ```
4. **For API routes:** Convert to [Cloudflare Workers](https://workers.cloudflare.com/) or [Cloudflare Pages Functions](https://developers.cloudflare.com/pages/functions/). The HTTP handler shape is different from Vercel.

---

### Traditional VPS / Docker

1. Build locally: `npm run build` inside `artifacts/hairstylist-portfolio/`
2. Serve the `dist/` folder with any static file server (Nginx, Caddy, etc.).
3. Configure the web server to serve `index.html` for all routes (SPA fallback).
4. Deploy `api/*.ts` as a separate Node.js Express service, converting the handlers to Express middleware, and proxy `/api/*` traffic to it.

**Example Nginx SPA config:**
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

---

## 10. Custom Domain Setup

After deploying to Vercel, you can connect a custom domain like `michaeldavidjr.beauty`:

### Step 1 — Add the domain in Vercel

1. Open your project in the Vercel dashboard.
2. Go to **Settings → Domains**.
3. Enter your domain (e.g. `michaeldavidjr.beauty`) and click **Add**.
4. Vercel will show you the DNS records to configure.

### Step 2 — Update DNS at your registrar

Log in to your domain registrar (e.g. GoDaddy, Namecheap, Cloudflare) and add the records Vercel gives you. Typically:

| Type | Name | Value |
|---|---|---|
| `A` | `@` | `76.76.21.21` (Vercel's IP) |
| `CNAME` | `www` | `cname.vercel-dns.com` |

DNS changes propagate in 5–60 minutes (occasionally up to 24 hours).

### Step 3 — Verify

Vercel automatically provisions a **free SSL/TLS certificate** (via Let's Encrypt) once DNS propagation is complete. Your site will be accessible over HTTPS at your custom domain.

> 💡 Vercel also automatically redirects `www` → apex domain (or vice versa) based on your preference.

---

## 11. Post-Deployment Checklist

Run through these checks after every fresh deployment:

- [ ] **Homepage loads** with the dark hero image, "MICHAEL DAVID" heading, and both CTA buttons visible
- [ ] **Parallax effect** works on the hero image when scrolling
- [ ] **Credibility marquee** scrolls infinitely
- [ ] **All 6 navigation links** work: Home, Portfolio, About, Press, Contact
- [ ] **Portfolio dropdown** in the navbar shows all 5 category sub-links + Portfolio Hub
- [ ] **Portfolio hub** (`/portfolio`) shows all 5 category cards
- [ ] **Category pages** show the correct image counts:
  - Covers: 9 images
  - Editorial: 20 images
  - Red Carpet: 18 images
  - Beauty: 13 images
  - Commercial/ECOM: 8 images
  - **Total: 69 images**
- [ ] **Lightbox** opens when clicking an image in any category page
- [ ] **Lightbox navigation** — arrow keys and swipe gestures work
- [ ] **About page** portrait loads and shows greyscale-to-colour hover effect on desktop
- [ ] **Press page** shows press cards with external links that open in a new tab
- [ ] **Contact form** submits successfully (requires `MAILERLITE_API_TOKEN`)
- [ ] **Toast notification** appears after contact form submission
- [ ] **Newsletter signup** works (in homepage, footer, and all pages)
- [ ] **Mobile menu** opens and closes correctly with staggered animations
- [ ] **Page transitions** animate smoothly between all routes
- [ ] **Footer** displays correctly with all three columns and the email signup form
- [ ] **SEO meta tags** are present — check with browser View Source or DevTools → Elements → `<head>`
- [ ] **Open Graph image** appears correctly when the URL is shared on social media (test with [opengraph.xyz](https://www.opengraph.xyz/))
- [ ] **404 page** appears when navigating to a nonexistent URL (e.g. `/xyz`)
- [ ] **Page refresh** on a sub-route (e.g. `/about`) still loads correctly (tests the SPA rewrite)
- [ ] **Custom domain resolves** (if configured)
- [ ] **HTTPS is active** — the padlock icon appears in the browser address bar

---

## 12. Troubleshooting

### 🔴 Build fails on Vercel

**Symptom:** The Vercel deployment log shows an npm or TypeScript compilation error.

**Check:**
1. Look at the full build log in Vercel → your project → the failing deployment → "Build Logs".
2. Ensure `react-hook-form` and `@hookform/resolvers` are present in `package.json` under `dependencies`.
3. Run the build locally to reproduce: `cd artifacts/hairstylist-portfolio && npm install && npm run build`.
4. Run the type-checker: `npm run typecheck`.

---

### ⬜ Blank page after deploy

**Symptom:** The site URL loads a blank white page with no content or errors.

**Check:**
1. Open the browser DevTools console — look for `404` errors on JS/CSS files.
2. Verify the `outputDirectory` in `vercel.json` matches where Vite actually wrote the build output (`artifacts/hairstylist-portfolio/dist`).
3. Confirm the `base` path in `vite.config.ts` matches the domain root (`/`).

---

### 🔴 Contact form returns 500 error

**Symptom:** Submitting the contact form shows an error toast: "Failed to send message".

**Check:**
1. Verify `MAILERLITE_API_TOKEN` is set in Vercel → Settings → Environment Variables.
2. After adding/changing env vars, **redeploy** the project (env var changes require a new deployment to take effect).
3. Test the API route directly: `POST https://your-domain.vercel.app/api/contact` with a JSON body.
4. Check the Function logs in Vercel → your project → the relevant deployment → "Functions" tab.

---

### 🖼️ Images not loading

**Symptom:** Portfolio images, hero image, or other photos show broken image icons.

**Check:**
1. Confirm that image files exist in `artifacts/hairstylist-portfolio/public/images/portfolio/`.
2. The portfolio image list is defined in `src/lib/data.ts` — check that each filename in the data array exactly matches the file in the `public/` folder (case-sensitive on Linux servers).
3. If using a custom `BASE_PATH`, ensure all image references account for it.

---

### 🔄 Routing breaks on page refresh (404 on sub-routes)

**Symptom:** Navigating directly to `/about` or `/portfolio/editorial` shows Vercel's default 404 page instead of the site.

**Check:**
1. Ensure the SPA rewrite rule is present and correct in `vercel.json`:
   ```json
   { "source": "/(.*)", "destination": "/index.html" }
   ```
2. Ensure the API passthrough rule comes **before** the SPA fallback in the `rewrites` array.

---

### 📧 Newsletter signup fails silently

**Symptom:** Submitting an email in the newsletter form doesn't show a success toast, or shows an error.

**Check:**
1. `MAILERLITE_API_TOKEN` must be set (same as contact form).
2. Check the browser Network tab — the `POST /api/subscribe` request should return `200`. If it returns `500`, check env vars. If it returns `400`, check the request payload (email field must be present and valid).

---

### 🔑 How to get a MailerLite API Token

1. Log in to [app.mailerlite.com](https://app.mailerlite.com).
2. Go to **Integrations → API**.
3. Create a new API token with "Full access" scope (or at minimum: Subscriber read/write).
4. Copy the token and paste it into Vercel's Environment Variables as `MAILERLITE_API_TOKEN`.

---

*Last updated: March 2026 · MDW Portfolio — `miketui/h-port-`*
