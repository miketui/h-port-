# MDW — Michael David Warren Portfolio Site

## Overview

This is a luxury editorial portfolio website for Michael David Warren, a celebrity hairstylist and creative director. The site showcases his work across five portfolio categories: Covers, Editorial, Red Carpet, Beauty, and Commercial/ECOM. Portfolio content is hardcoded in a data file. The contact form uses Formspree, and newsletter signups use a custom backend API that securely proxies to MailerLite.

The project lives inside a pnpm monorepo. The actual website app is at `artifacts/hairstylist-portfolio/`. Supporting library stubs (api-client-react, api-zod, db) exist in the `lib/` folder but are currently empty placeholders.

---

## User Preferences

Preferred communication style: Simple, everyday language.

---

## System Architecture

### Monorepo Structure
- **Tool:** pnpm workspaces
- **Root:** `package.json` + `tsconfig.base.json` define shared TypeScript settings
- **App location:** `artifacts/hairstylist-portfolio/` — this is the only active application
- **Lib stubs:** `lib/api-client-react`, `lib/api-zod`, `lib/db` are empty placeholders for future use; they export nothing meaningful yet

### Frontend
- **Framework:** React 18 with TypeScript
- **Build tool:** Vite with `@tailwindcss/vite` plugin
- **Routing:** Wouter (lightweight client-side router, not React Router)
- **Animation:** Framer Motion — used for page transitions, scroll-based parallax on the hero, staggered entrance animations, and `AnimatePresence` for exit animations
- **State management:** TanStack React Query is installed but not actively used (no API calls). Component-level `useState` handles all interactive state.
- **Styling:** Tailwind CSS v4 with CSS variables for theming. Custom design tokens defined in `index.css` using `@theme inline`. Two fonts: Playfair Display (display/headings) and Inter (body).
- **UI primitives:** shadcn/ui components built on Radix UI primitives (accordion, dialog, dropdown, etc.)
- **Form validation:** React Hook Form + Zod

### Pages / Routes
| Route | Component | Purpose |
|---|---|---|
| `/` | Home.tsx | Hero, editorial strip, category grid, press, featured work |
| `/portfolio` | Portfolio.tsx | Category hub with cover images |
| `/portfolio/:category` | Category.tsx | Image gallery for one category |
| `/about` | About.tsx | Bio, timeline, client list |
| `/press` | Press.tsx | Press mentions grid |
| `/contact` | Contact.tsx | Contact form |

### Data Layer
- All portfolio content is hardcoded in `src/lib/data.ts` — no CMS, no API
- Image URLs are constructed dynamically using `import.meta.env.BASE_URL` so the site works at any base path
- Portfolio categories: cover, editorial, red-carpet, beauty, commercial-ecom
- Each category has a `coverImage` (featured aspect), and projects with `3x4` gallery images

### Image Asset Structure
All 79 portfolio images are served from original high-res files (1920px+ on longest dimension). Eight formerly low-res images were AI-upscaled via FAL AI Aura SR.
```
public/images/
├── hero-bg.png
├── about-portrait.png
└── portfolio/{category}/originals/
    └── *.jpg     (1920px+ originals, uncropped)
```

### Lightbox Gallery
Category pages feature a fullscreen lightbox gallery (`src/components/Lightbox.tsx`). Clicking any image opens it fullscreen with:
- Swipe left/right on mobile, arrow keys on desktop
- Image counter (e.g. "3 / 19")
- Dot navigation at bottom
- Close via X button, Escape key, or clicking outside

### SEO
Dynamic per-page SEO via `react-helmet-async` (`src/components/SEO.tsx`):
- Unique title, description, canonical URL, OG tags, and Twitter cards per page
- JSON-LD structured data (ProfessionalService, Person, CollectionPage, ContactPage schemas)
- Static sitemap.xml and robots.txt for `michaeldavidjr.beauty`
- Note: This is a client-side SPA — Google renders JavaScript, but prerendering would further improve crawlability

### Code Splitting
All 6 page components are loaded with `React.lazy()` + `Suspense`, so only the visited page's code is loaded initially.

### Scroll Behavior
`ScrollToTop` component in `App.tsx` resets scroll position to top on every route change using `useLocation` from Wouter.

### Known Issues (from attached review)
- About page portrait has `grayscale` applied on desktop — color only shows on hover, which doesn't work on mobile (intentional design choice, but worth reconsidering)
- Featured work cards on Home page have `cursor-pointer` but no actual link/click handler
- OG image in `index.html` uses an absolute URL (`https://michaeldavidjr.beauty/opengraph.jpg`) — this is correct for social sharing

---

## External Dependencies

### Form Handling
- **Contact Form:** Uses **Formspree** (`Contact.tsx`). Formspree endpoint ID set via `VITE_FORMSPREE_ID` env variable (falls back to `"xojkkjgz"`).
- **Newsletter Signup:** Uses a custom **Express API server** (`server/index.ts`) that securely proxies to the **MailerLite API**. Collects name + email, sends to MailerLite group `182303148544623709` with double opt-in (`status: "unconfirmed"`). Token is server-side only.
- The API server runs on port 8080. Vite proxies `/api` requests to it during development.

### Fonts
- **Google Fonts** — Playfair Display and Inter loaded via CSS `@import` in `index.css`
- Preconnect hints in `index.html` for performance

### Animation
- **Framer Motion** — all animations, including page transitions, hero parallax, scroll-triggered entrance animations

### UI Components
- **Radix UI** — full suite of accessible primitives (many installed but not all actively used)
- **shadcn/ui** — component style layer on top of Radix (configured in `components.json`, style: "new-york")
- **Lucide React** — icons

### Replit-specific
- `@replit/vite-plugin-runtime-error-modal` — error overlay in dev
- `@replit/vite-plugin-cartographer` — Replit dev tooling (only active when `REPL_ID` env var is present)
- `@replit/vite-plugin-dev-banner` — dev banner (same condition)

### Environment Variables Required
| Variable | Purpose |
|---|---|
| `PORT` | Vite dev server port (required, throws if missing) |
| `BASE_PATH` | Vite base URL for asset paths (required, throws if missing) |
| `VITE_FORMSPREE_ID` | Formspree form ID (optional, has fallback) |
| `MAILERLITE_API_TOKEN` | MailerLite API token (server-side only, in Replit Secrets) |
| `MAILERLITE_GROUP_ID` | MailerLite subscriber group ID (server-side only, in Replit Secrets) |

### Backend API Server
- **Express server** at `server/index.ts`, runs on port 8080
- **Route:** `POST /api/subscribe` — accepts `{ name, email }`, proxies to MailerLite
- **Route:** `GET /api/health` — health check
- Dev script uses `concurrently` to run both Vite and the Express server
- MailerLite API token is never exposed to the frontend

### No Database
There is no database. The `lib/db` package exists as an empty stub. All content is static.