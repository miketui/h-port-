# MDW Portfolio — Page Wireframes & Structure
**Version:** 1.0 | **Date:** March 19, 2026 | **Domain:** michaeldavidjr.beauty

---

## Route Map

| Route | Page | Component | Lazy |
|-------|------|-----------|------|
| `/` | Home | Home.tsx | Yes |
| `/portfolio` | Portfolio Hub | Portfolio.tsx | Yes |
| `/portfolio/:slug` | Category Gallery | Category.tsx | Yes |
| `/about` | About | About.tsx | Yes |
| `/press` | Press | Press.tsx | Yes |
| `/contact` | Contact | Contact.tsx | Yes |
| `*` | 404 | not-found.tsx | No |

---

## Page 1: HOME (`/`)

### Section Flow (top to bottom):
1. **Hero** — Full-viewport parallax (95vh)
   - Background: `hero-bg.jpg` (Rihanna editorial, floral backdrop)
   - Parallax: scale 1→1.08 on scroll, opacity 55%→0%
   - Overlay: "HAIR DIRECTION • CELEBRITY • EDITORIAL" (accent green)
   - H1: "MICHAEL DAVID" (Playfair Display, 9xl)
   - CTAs: [EXPLORE PORTFOLIO] [BOOK NOW] (gold bordered)

2. **Editorial Strip** — "THE WORK — FOUR DISCIPLINES"
   - 4-column grid (2×2 on mobile), staggered cinematic reveal
   - Cards: Editorial (Grazia USA), Red Carpet, Beauty (ACE Awards), Icon (Phaidon)
   - Each: 3:4 aspect, hover zoom, label + subtitle overlay

3. **Credibility Marquee** — Infinite scroll
   - Brands: Vogue, Harper's Bazaar, W Magazine, Vanity Fair, Savage X Fenty, Nike, Teen Vogue, Refinery29, Glamour, Elle UK

4. **Selected Work** — 4-card featured grid
   - Pulls: Editorial e1, Cover cov2, Red Carpet rc1, Commercial com1
   - Links to respective category pages

5. **Clients Grid** — 30 names in bordered cells (4 cols desktop)

6. **Press Preview** — Top 3 press mentions (Vogue, Vanity Fair)

7. **Newsletter Banner** — EmailSignup (banner variant)

8. **CTA Section** — "Work With MDW" + radial gradient

---

## Page 2: PORTFOLIO HUB (`/portfolio`)

- H1: "PORTFOLIO" (9xl, uppercase)
- Tagline with jade left border
- Grid: 5 category cards (first spans full width on desktop)
  - Each: 4:5 aspect, cover image, gradient overlay
  - On hover: project count + arrow + description
  - Categories: Covers(9), Editorial(21), Red Carpet(18), Beauty(13), Commercial/ECOM(8)

---

## Page 3: CATEGORY GALLERY (`/portfolio/:slug`)

- Dynamic route reads from `PORTFOLIO_CATEGORIES` by slug
- H1: Category title (9xl)
- Description with jade border
- Grid: All projects in category
  - 3-column masonry-like layout
  - Each tile: image + client name + year
  - Lightbox on click

---

## Page 4: ABOUT (`/about`)

- Schema.org Person structured data (JSON-LD)
- Two-column layout:
  - Left: Portrait (about-portrait.jpg, grayscale→color on hover)
  - Right: Bio text, career philosophy
- Career Timeline: 12 milestones (2008–Present)
  - Scroll-triggered fade-in
- EmailSignup (section variant)

---

## Page 5: PRESS (`/press`)

- H1: "PRESS" (9xl)
- Grid: 14 press mentions (3 cols desktop)
  - Each card: publication, date, title, excerpt
  - External links for 7 entries (Vogue, Vanity Fair, W, Glamour, Grazia, PhotoBook)
  - "Publication Credit" badge for 7 without links

---

## Page 6: CONTACT (`/contact`)

- H1: "LET'S WORK TOGETHER"
- Form fields: Name, Email, Project Type, Message
- Submits to `/api/contact` → MailerLite with custom fields
- Success: "Michael will be in touch within 48–72 hours."

---

## Navigation

### Desktop:
- Fixed header, transparent→blur on scroll
- MDW logo (left), HOME | PORTFOLIO ▾ | ABOUT | PRESS | [BOOK NOW] (right)
- Portfolio dropdown: Hub, Covers, Editorial, Beauty, Commercial/ECOM, Red Carpet

### Mobile:
- Hamburger → fullscreen animated menu
- Portfolio section with indented sub-links
- [BOOK NOW] CTA at bottom

---

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `hsl(0 0% 7%)` | Obsidian Black |
| `--primary` | `hsl(37 32% 52%)` | Antique Gold |
| `--accent` | `hsl(158 78% 36%)` | Deep Jade |
| `--secondary` | `hsl(157 52% 76%)` | Soft Jade Mist |
| `--foreground` | `hsl(40 20% 87%)` | White Gold |
| Display font | Playfair Display | Headings, titles |
| Body font | Inter | UI, paragraphs |
