# MDW — Michael David Warren Jr. Portfolio Website
### Complete Reference Guide for Designers, Developers & Image Processors

> **Stack:** React 19 · Vite · TypeScript · Tailwind CSS 4 · Framer Motion · Wouter  
> **Repo:** `github.com/miketui/h-port-`  
> **Domain:** `michaeldavidjr.beauty`

---

## Table of Contents

1. [Site Map](#1-site-map)
2. [Page Wireframes & Image Placement](#2-page-wireframes--image-placement)
3. [Design System](#3-design-system)
4. [Image Specifications — All 4 Export Sizes](#4-image-specifications--all-4-export-sizes)
5. [Complete Directory Tree](#5-complete-directory-tree)
6. [Remaining Tasks Before Go-Live](#6-remaining-tasks-before-go-live)

---

## 1. Site Map

```
michaeldavidjr.beauty/
│
├── /                          ← Home
├── /portfolio                 ← Portfolio Hub (5 category cards)
│   ├── /portfolio/cover       ← Covers category (9 images)
│   ├── /portfolio/editorial   ← Editorial category (20 images)
│   ├── /portfolio/red-carpet  ← Red Carpet category (18 images)
│   ├── /portfolio/beauty      ← Beauty category (13 images)
│   └── /portfolio/commercial-ecom ← Commercial/ECOM category (8 images)
├── /about                     ← About Michael
├── /press                     ← Press & Features (14 entries)
└── /contact                   ← Contact & Booking
```

---

## 2. Page Wireframes & Image Placement

---

### HOME PAGE `/`

```
┌─────────────────────────────────────────────────────────────┐
│ NAVBAR: MDW logo ──────────────── Home Portfolio About Press Book Now │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   HERO (full screen)                                        │
│   ┌─────────────────────────────────────────────────┐      │
│   │                                                 │      │
│   │   [IMAGE: hero-bg.png]                          │      │
│   │   Full bleed. Dark gradient overlay.            │      │
│   │                                                 │      │
│   │        HAIR DIRECTION • CELEBRITY • EDITORIAL   │      │
│   │        MICHAEL DAVID                            │      │
│   │                                                 │      │
│   │        [EXPLORE PORTFOLIO]   [BOOK NOW]         │      │
│   │                                                 │      │
│   └─────────────────────────────────────────────────┘      │
│   Required size: 3840 × 2160 px (4K)                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   EDITORIAL STRIP (4 animated panels side by side)          │
│   ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐                  │
│   │ [1]  │  │ [2]  │  │ [3]  │  │ [4]  │                  │
│   │      │  │      │  │      │  │      │                  │
│   │      │  │      │  │      │  │      │                  │
│   └──────┘  └──────┘  └──────┘  └──────┘                  │
│   Each panel: featured format 2400×1600 px                  │
│   [1] editorial_2021_aurora-james_grazia-usa_34.jpg          │
│   [2] redcarpet_2022_saniyya-sidney_hca-awards_09.jpg        │
│   [3] beauty_2018_duckie-thot_harpers-bazaar_20.jpg          │
│   [4] ecom_2020_veronika-vilim_le-specs_01.jpg               │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   SELECTED WORK (4-column grid)                             │
│   ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐                  │
│   │ [A]  │  │ [B]  │  │ [C]  │  │ [D]  │                  │
│   │      │  │      │  │      │  │      │                  │
│   │ 3:4  │  │ 3:4  │  │ 3:4  │  │ 3:4  │                  │
│   └──────┘  └──────┘  └──────┘  └──────┘                  │
│   Each card: 3x4 format, 1200×1600 px                       │
│   These are 4 featured work highlights from data.ts          │
├─────────────────────────────────────────────────────────────┤
│   MARQUEE STRIP — scrolling publication names               │
├─────────────────────────────────────────────────────────────┤
│   CLIENTS GRID — 30 client names, text only                 │
├─────────────────────────────────────────────────────────────┤
│   PRESS PREVIEW — 3 cards, text only                        │
├─────────────────────────────────────────────────────────────┤
│   EMAIL SIGNUP BANNER                                       │
├─────────────────────────────────────────────────────────────┤
│   CTA SECTION — "Work With MDW"                             │
├─────────────────────────────────────────────────────────────┤
│ FOOTER                                                      │
└─────────────────────────────────────────────────────────────┘
```

**Images used on Home:**

| Slot | File | Format | Size Required |
|------|------|--------|---------------|
| Hero background | `hero-bg.png` | Full bleed | **3840 × 2160 px** |
| Editorial strip 1 | `editorial_2021_aurora-james_grazia-usa_34.jpg` | featured | **2400 × 1600 px** |
| Editorial strip 2 | `redcarpet_2022_saniyya-sidney_hca-awards_09.jpg` | featured | **2400 × 1600 px** |
| Editorial strip 3 | `beauty_2018_duckie-thot_harpers-bazaar_20.jpg` | featured | **2400 × 1600 px** |
| Editorial strip 4 | `ecom_2020_veronika-vilim_le-specs_01.jpg` | featured | **2400 × 1600 px** |
| Selected Work cards (4) | Various from data.ts | 3x4 | **1200 × 1600 px** |

---

### PORTFOLIO HUB `/portfolio`

```
┌─────────────────────────────────────────────────────────────┐
│ NAVBAR                                                      │
├─────────────────────────────────────────────────────────────┤
│   "THE WORK"  (full-width heading)                          │
│   Subtitle text                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   5 CATEGORY CARDS (staggered grid)                        │
│                                                             │
│   ┌─────────────────────┐  ┌─────────────────────┐         │
│   │  COVERS             │  │  EDITORIAL          │         │
│   │  [cover featured]   │  │  [editorial featured]│         │
│   │  9 projects         │  │  20 projects        │         │
│   └─────────────────────┘  └─────────────────────┘         │
│                                                             │
│   ┌─────────────────────┐  ┌─────────────────────┐         │
│   │  RED CARPET         │  │  BEAUTY             │         │
│   │  [rc featured]      │  │  [beauty featured]  │         │
│   │  18 projects        │  │  13 projects        │         │
│   └─────────────────────┘  └─────────────────────┘         │
│                                                             │
│   ┌─────────────────────┐                                   │
│   │  COMMERCIAL/ECOM    │                                   │
│   │  [ecom featured]    │                                   │
│   │  8 projects         │                                   │
│   └─────────────────────┘                                   │
├─────────────────────────────────────────────────────────────┤
│ FOOTER                                                      │
└─────────────────────────────────────────────────────────────┘
```

**Category cover images (featured format, 2400×1600 px each):**

| Category | Cover Image File |
|----------|-----------------|
| Covers | `cover_2022_gottmik_coveteur_09.jpg` |
| Editorial | `editorial_2021_aurora-james_grazia-usa_34.jpg` |
| Red Carpet | `redcarpet_2022_saniyya-sidney_naacp-awards_03.jpg` |
| Beauty | `beauty_2021_carmen-solomons_studio_11.jpg` |
| Commercial | `ecom_2019_tabria-majors_savage-x-fenty_02.jpg` |

---

### CATEGORY PAGE `/portfolio/:category`

*(Same layout for all 5 categories — Covers, Editorial, Red Carpet, Beauty, Commercial/ECOM)*

```
┌─────────────────────────────────────────────────────────────┐
│ NAVBAR                                                      │
├─────────────────────────────────────────────────────────────┤
│   ← Back to Categories                                      │
│                                                             │
│   CATEGORY TITLE (very large display type)                  │
│   Category description text                                 │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   PROJECT GRID (3 columns on desktop)                       │
│                                                             │
│   ┌──────┐  ┌──────┐  ┌──────┐                            │
│   │      │  │      │  │      │                            │
│   │ img  │  │ img  │  │ img  │  ← 4:5 for Editorial/ECOM  │
│   │      │  │      │  │      │     3:4 for all others     │
│   └──────┘  └──────┘  └──────┘                            │
│   Title     Title     Title                                 │
│   Client•Yr Client•Yr  Client•Yr                            │
│                                                             │
│   [repeats for all images in category]                      │
├─────────────────────────────────────────────────────────────┤
│   ← Previous Category          Next Category →              │
├─────────────────────────────────────────────────────────────┤
│   EMAIL SIGNUP                                              │
├─────────────────────────────────────────────────────────────┤
│ FOOTER                                                      │
└─────────────────────────────────────────────────────────────┘
```

**Image format used per category in the gallery grid:**

| Category | Gallery Format | Size |
|----------|---------------|------|
| Covers | `3x4` portrait | **1200 × 1600 px** |
| Editorial | `4x5` portrait | **1280 × 1600 px** |
| Red Carpet | `3x4` portrait | **1200 × 1600 px** |
| Beauty | `3x4` portrait | **1200 × 1600 px** |
| Commercial/ECOM | `4x5` portrait | **1280 × 1600 px** |

---

### ABOUT PAGE `/about`

```
┌─────────────────────────────────────────────────────────────┐
│ NAVBAR                                                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌──────────────────┐    About Michael (heading)           │
│   │                  │    Bio text paragraphs...            │
│   │ [about-portrait] │                                      │
│   │                  │    The Turning Point story...        │
│   │   3:4 ratio      │                                      │
│   │                  │    Career continues...               │
│   │  ┌─────────────┐ │                                      │
│   │  │"Hair is     │ │                                      │
│   │  │never just   │                                        │
│   │  │hair."       │                                        │
│   │  └─────────────┘                                        │
│   └──────────────────┘                                      │
│   (sticky on desktop, stacked on mobile)                    │
├─────────────────────────────────────────────────────────────┤
│   CAREER TIMELINE (text only, 12 entries)                   │
├─────────────────────────────────────────────────────────────┤
│   SELECTED CLIENTS GRID (text only, 30 names)               │
├─────────────────────────────────────────────────────────────┤
│   EMAIL SIGNUP                                              │
├─────────────────────────────────────────────────────────────┤
│ FOOTER                                                      │
└─────────────────────────────────────────────────────────────┘
```

**Images used on About:**

| Slot | File | Size Required |
|------|------|---------------|
| Portrait (sticky sidebar) | `about-portrait.png` | **1600 × 2400 px** |

---

### PRESS PAGE `/press`

```
┌─────────────────────────────────────────────────────────────┐
│ NAVBAR                                                      │
├─────────────────────────────────────────────────────────────┤
│   PRESS  (large heading)                                    │
│   Subtitle                                                  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   14 PRESS CARDS (3-column grid, text only)                 │
│                                                             │
│   ┌──────────────┐ ┌──────────────┐ ┌──────────────┐       │
│   │ VOGUE • 2022 │ │ VOGUE • 2022 │ │VANITY FAIR   │       │
│   │ "Lupita..."  │ │ "Raoul..."   │ │ "Maria..."   │       │
│   │ excerpt text │ │ excerpt text │ │ excerpt text │       │
│   │ [Read Feature│ │ [Read Feature│ │ [Read Feature│       │
│   └──────────────┘ └──────────────┘ └──────────────┘       │
│   [repeats for all 14 press entries]                        │
├─────────────────────────────────────────────────────────────┤
│ FOOTER                                                      │
└─────────────────────────────────────────────────────────────┘
```

**No images required on Press page** — text and publication names only.

---

### CONTACT PAGE `/contact`

```
┌─────────────────────────────────────────────────────────────┐
│ NAVBAR                                                      │
├─────────────────────────────────────────────────────────────┤
│   CONTACT  (large heading)                                  │
│   "Available globally for..."                               │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌──────────────────────────┐  ┌───────────────────┐      │
│   │ CONTACT FORM             │  │ CONTACT INFO      │      │
│   │                          │  │                   │      │
│   │ [Name          ]         │  │ Email address     │      │
│   │ [Email         ]         │  │ Instagram link    │      │
│   │ [Project Type ▼]         │  │ LinkedIn link     │      │
│   │ [Budget Range ▼]         │  │                   │      │
│   │ [Timeline      ]         │  │ LA — NY — Global  │      │
│   │ [Message       ]         │  │                   │      │
│   │                          │  │                   │      │
│   │ [SEND INQUIRY]           │  │                   │      │
│   └──────────────────────────┘  └───────────────────┘      │
├─────────────────────────────────────────────────────────────┤
│ FOOTER                                                      │
└─────────────────────────────────────────────────────────────┘
```

**No images required on Contact page** — form and text only.

---

## 3. Design System

### Colors

| Token | Value | Used For |
|-------|-------|---------|
| Background | `hsl(0, 0%, 7%)` → `#121212` | Page background |
| Foreground | `hsl(0, 0%, 93%)` | Primary text |
| Primary (Antique Gold) | `hsl(37, 32%, 52%)` → `#9A7B4F` | CTAs, accents, gold line |
| Accent (Vivid Jade) | `hsl(158, 78%, 36%)` → `#10A070` | Secondary accents, hover states |
| Muted Foreground | `hsl(0, 0%, 45%)` | Captions, labels |
| Card | `hsl(0, 0%, 10%)` | Image placeholder backgrounds |
| Border | `hsl(0, 0%, 15%)` | Dividers, borders |

### Typography

| Use | Font | Style |
|-----|------|-------|
| Headings / Display | **Playfair Display** | Serif, italic available |
| Body / UI | **Inter** | Sans-serif, 300–700 |

### Visual Style

- **Sharp edges** — `border-radius: 0` throughout. No rounded corners anywhere.
- **Dark luxury** — Deep near-black backgrounds, warm gold accents, minimal color
- **Generous whitespace** — Large section padding (`py-24` to `py-32`)
- **Cinematic scale** — Hero text at `text-8xl` to `text-9xl`, category titles even larger

---

## 4. Image Specifications — All 4 Export Sizes

Every portfolio image must be exported in **4 sizes**. Each size serves a different layout context on the website.

### Why 4 Sizes?

The website displays images differently depending on where they appear:
- A **gallery grid** needs a tall portrait so images stack neatly
- An **editorial layout** needs a slightly different portrait ratio for editorial pages
- A **category cover or homepage strip** needs a wide landscape crop for cinematic feel
- **Social media sharing** needs a square

Rather than stretching one image into all shapes (which causes distortion and quality loss), each image is pre-cropped and pre-sized for its exact use case. The website code already knows which folder to pull from for each purpose — no code changes needed when you drop in new files.

### The 4 Formats

| Format Name | Folder | Pixel Size | Ratio | Use On Site |
|-------------|--------|-----------|-------|-------------|
| `3x4` | `exports/3x4/` | **1200 × 1600 px** | 3:4 portrait | Gallery grids on Covers, Red Carpet, Beauty pages |
| `4x5` | `exports/4x5/` | **1280 × 1600 px** | 4:5 portrait | Gallery grids on Editorial and Commercial pages |
| `featured` | `exports/featured/` | **2400 × 1600 px** | 3:2 landscape | Category cover cards on Portfolio Hub + all 4 homepage animated strip slots |
| `social` | `exports/social/` | **1080 × 1080 px** | 1:1 square | Social media sharing |

### Special Images (not in portfolio folders)

| Image | Where It Lives | Required Size | Used On |
|-------|---------------|---------------|---------|
| `hero-bg.png` | `public/images/` | **3840 × 2160 px** | Home page hero (full screen) |
| `about-portrait.png` | `public/images/` | **1600 × 2400 px** | About page portrait sidebar |

### Crop Priority Guide

When cropping each image, preserve in this order:
1. **Face** — always keep the subject's face fully in frame
2. **Hair** — this is a hairstylist portfolio; the hair is the work
3. **Neckline / statement look** — especially important for red carpet
4. For the **featured (landscape)** crop: choose the most striking horizontal band through the face and hair — this is the most visible crop on the site

---

## 5. Complete Directory Tree

This is the full folder structure the website expects. Every file listed must exist with the correct name for the site to display it.

```
artifacts/hairstylist-portfolio/public/
│
├── images/
│   ├── hero-bg.png                              ← 3840×2160 HOME HERO
│   ├── about-portrait.png                       ← 1600×2400 ABOUT PORTRAIT
│   │
│   └── portfolio/
│       │
│       ├── cover/exports/
│       │   ├── 3x4/           (1200×1600 px)
│       │   │   ├── cover_2018_duckie-thot_harpers-bazaar_01.jpg
│       │   │   ├── cover_2018_duckie-thot_wonderland_02.jpg
│       │   │   ├── cover_2018_duckie-thot_stylist-uk_03.jpg
│       │   │   ├── cover_2021_kylie-bunbury_emmy-magazine_04.jpg
│       │   │   ├── cover_2022_alisha-wainwright_photobook_05.jpg
│       │   │   ├── cover_2020_gugu-mbatha-raw_variety_06.jpg
│       │   │   ├── cover_2018_duckie-thot-jazzelle_chic-album_07.jpg
│       │   │   ├── cover_2022_aurora-james_glamour_08.jpg
│       │   │   └── cover_2022_gottmik_coveteur_09.jpg
│       │   │
│       │   ├── 4x5/           (1280×1600 px)
│       │   │   ├── cover_2018_duckie-thot_harpers-bazaar_01.jpg
│       │   │   ├── cover_2018_duckie-thot_wonderland_02.jpg
│       │   │   ├── cover_2018_duckie-thot_stylist-uk_03.jpg
│       │   │   ├── cover_2021_kylie-bunbury_emmy-magazine_04.jpg
│       │   │   ├── cover_2022_alisha-wainwright_photobook_05.jpg
│       │   │   ├── cover_2020_gugu-mbatha-raw_variety_06.jpg
│       │   │   ├── cover_2018_duckie-thot-jazzelle_chic-album_07.jpg
│       │   │   ├── cover_2022_aurora-james_glamour_08.jpg
│       │   │   └── cover_2022_gottmik_coveteur_09.jpg
│       │   │
│       │   ├── featured/      (2400×1600 px)  ← CATEGORY COVER CARD
│       │   │   ├── cover_2018_duckie-thot_harpers-bazaar_01.jpg
│       │   │   ├── cover_2018_duckie-thot_wonderland_02.jpg
│       │   │   ├── cover_2018_duckie-thot_stylist-uk_03.jpg
│       │   │   ├── cover_2021_kylie-bunbury_emmy-magazine_04.jpg
│       │   │   ├── cover_2022_alisha-wainwright_photobook_05.jpg
│       │   │   ├── cover_2020_gugu-mbatha-raw_variety_06.jpg
│       │   │   ├── cover_2018_duckie-thot-jazzelle_chic-album_07.jpg
│       │   │   ├── cover_2022_aurora-james_glamour_08.jpg
│       │   │   └── cover_2022_gottmik_coveteur_09.jpg  ← COVER PAGE HERO
│       │   │
│       │   └── social/        (1080×1080 px)
│       │       ├── cover_2018_duckie-thot_harpers-bazaar_01.jpg
│       │       ├── cover_2018_duckie-thot_wonderland_02.jpg
│       │       ├── cover_2018_duckie-thot_stylist-uk_03.jpg
│       │       ├── cover_2021_kylie-bunbury_emmy-magazine_04.jpg
│       │       ├── cover_2022_alisha-wainwright_photobook_05.jpg
│       │       ├── cover_2020_gugu-mbatha-raw_variety_06.jpg
│       │       ├── cover_2018_duckie-thot-jazzelle_chic-album_07.jpg
│       │       ├── cover_2022_aurora-james_glamour_08.jpg
│       │       └── cover_2022_gottmik_coveteur_09.jpg
│       │
│       ├── editorial/exports/
│       │   ├── 3x4/           (1200×1600 px)
│       │   │   ├── editorial_2018_duckie-thot_anais-bodysuits_22.jpg
│       │   │   ├── editorial_2018_duckie-thot_anais-bodysuits_23.jpg
│       │   │   ├── editorial_2018_duckie-thot_harpers-bazaar-mexico_24.jpg
│       │   │   ├── editorial_2021_arica-himmel_photobook_25.jpg
│       │   │   ├── editorial_2021_saniyya-sidney_refinery29_26.jpg
│       │   │   ├── editorial_2021_saniyya-demi_refinery29_27.jpg
│       │   │   ├── editorial_2018_henson_micaiah-carter_28.jpg
│       │   │   ├── editorial_2021_salem-mitchell_schon-magazine_29.jpg
│       │   │   ├── editorial_2021_salem-mitchell_schon-magazine_30.jpg
│       │   │   ├── editorial_2021_alyah-chanelle-scott_rollacoaster_31.jpg
│       │   │   ├── editorial_2021_alyah-chanelle-scott_rollacoaster_32.jpg
│       │   │   ├── editorial_2022_alisha-wainwright_photobook_33.jpg
│       │   │   ├── editorial_2021_aurora-james_grazia-usa_34.jpg
│       │   │   ├── editorial_2021_aurora-james_grazia-usa_35.jpg
│       │   │   ├── editorial_2021_kylie-bunbury_emmy-magazine_36.jpg
│       │   │   ├── editorial_2021_hailey-kilgore_contents-beauty_37.jpg
│       │   │   ├── editorial_2021_gugu-mbatha-raw_variety_38.jpg
│       │   │   ├── editorial_2019_elaine-welteroth_elle-uk_39.jpg
│       │   │   └── editorial_2018_twins_lofficiel-malaysia_40.jpg
│       │   │
│       │   ├── 4x5/           (1280×1600 px)  ← USED IN GALLERY GRID
│       │   │   ├── editorial_2018_duckie-thot_anais-bodysuits_22.jpg
│       │   │   ├── editorial_2018_duckie-thot_anais-bodysuits_23.jpg
│       │   │   ├── editorial_2018_duckie-thot_harpers-bazaar-mexico_24.jpg
│       │   │   ├── editorial_2021_arica-himmel_photobook_25.jpg
│       │   │   ├── editorial_2021_saniyya-sidney_refinery29_26.jpg
│       │   │   ├── editorial_2021_saniyya-demi_refinery29_27.jpg
│       │   │   ├── editorial_2018_henson_micaiah-carter_28.jpg
│       │   │   ├── editorial_2021_salem-mitchell_schon-magazine_29.jpg
│       │   │   ├── editorial_2021_salem-mitchell_schon-magazine_30.jpg
│       │   │   ├── editorial_2021_alyah-chanelle-scott_rollacoaster_31.jpg
│       │   │   ├── editorial_2021_alyah-chanelle-scott_rollacoaster_32.jpg
│       │   │   ├── editorial_2022_alisha-wainwright_photobook_33.jpg
│       │   │   ├── editorial_2021_aurora-james_grazia-usa_34.jpg
│       │   │   ├── editorial_2021_aurora-james_grazia-usa_35.jpg
│       │   │   ├── editorial_2021_kylie-bunbury_emmy-magazine_36.jpg
│       │   │   ├── editorial_2021_hailey-kilgore_contents-beauty_37.jpg
│       │   │   ├── editorial_2021_gugu-mbatha-raw_variety_38.jpg
│       │   │   ├── editorial_2019_elaine-welteroth_elle-uk_39.jpg
│       │   │   └── editorial_2018_twins_lofficiel-malaysia_40.jpg
│       │   │
│       │   ├── featured/      (2400×1600 px)  ← EDITORIAL CATEGORY HERO + HOMEPAGE STRIP
│       │   │   ├── editorial_2018_duckie-thot_anais-bodysuits_22.jpg
│       │   │   ├── editorial_2018_duckie-thot_anais-bodysuits_23.jpg
│       │   │   ├── editorial_2018_duckie-thot_harpers-bazaar-mexico_24.jpg
│       │   │   ├── editorial_2021_arica-himmel_photobook_25.jpg
│       │   │   ├── editorial_2021_saniyya-sidney_refinery29_26.jpg
│       │   │   ├── editorial_2021_saniyya-demi_refinery29_27.jpg
│       │   │   ├── editorial_2018_henson_micaiah-carter_28.jpg
│       │   │   ├── editorial_2021_salem-mitchell_schon-magazine_29.jpg
│       │   │   ├── editorial_2021_salem-mitchell_schon-magazine_30.jpg
│       │   │   ├── editorial_2021_alyah-chanelle-scott_rollacoaster_31.jpg
│       │   │   ├── editorial_2021_alyah-chanelle-scott_rollacoaster_32.jpg
│       │   │   ├── editorial_2022_alisha-wainwright_photobook_33.jpg
│       │   │   ├── editorial_2021_aurora-james_grazia-usa_34.jpg  ← EDITORIAL HERO + STRIP PANEL 1
│       │   │   ├── editorial_2021_aurora-james_grazia-usa_35.jpg
│       │   │   ├── editorial_2021_kylie-bunbury_emmy-magazine_36.jpg
│       │   │   ├── editorial_2021_hailey-kilgore_contents-beauty_37.jpg
│       │   │   ├── editorial_2021_gugu-mbatha-raw_variety_38.jpg
│       │   │   ├── editorial_2019_elaine-welteroth_elle-uk_39.jpg
│       │   │   └── editorial_2018_twins_lofficiel-malaysia_40.jpg
│       │   │
│       │   └── social/        (1080×1080 px)
│       │       └── [same 19 filenames as above]
│       │
│       ├── red-carpet/exports/
│       │   ├── 3x4/           (1200×1600 px)  ← USED IN GALLERY GRID
│       │   │   ├── redcarpet_2022_ebony-obsidian_red-carpet_01.jpg
│       │   │   ├── redcarpet_2022_ebony-obsidian_red-carpet_02.jpg
│       │   │   ├── redcarpet_2022_saniyya-sidney_naacp-awards_03.jpg
│       │   │   ├── redcarpet_2018_aurora-james-elaine-welteroth_red-carpet_04.jpg  ⚠️ rename
│       │   │   ├── redcarpet_2021_elaine-welteroth_project-runway_05.jpg
│       │   │   ├── redcarpet_2019_aurora-james_met-gala_06.jpg
│       │   │   ├── redcarpet_2023_aurora-james_vanity-fair_07.jpg
│       │   │   ├── redcarpet_2021_liesl-tommy_deadline-contenders_08.jpg
│       │   │   ├── redcarpet_2022_saniyya-sidney_hca-awards_09.jpg
│       │   │   ├── redcarpet_2019_chloe-coleman_red-carpet_10.jpg              ⚠️ rename
│       │   │   ├── redcarpet_2022_mallori-johnson_kindred-premiere_11.jpg
│       │   │   ├── redcarpet_2021_brittany-ogrady_sag-panel_12.jpg
│       │   │   ├── redcarpet_2019_rihanna_bet-awards_13.jpg
│       │   │   ├── redcarpet_2018_lupita-nyongo_ace-awards_14.jpg
│       │   │   ├── redcarpet_2022_meena-harris_press_15.jpg
│       │   │   ├── redcarpet_2022_billy-porter_city-of-hope_16.jpg
│       │   │   ├── redcarpet_2022_billy-porter_spirit-day_17.jpg
│       │   │   └── redcarpet_2019_lizzo_the-daily-show_18.jpg                  ⚠️ rename
│       │   │
│       │   ├── 4x5/           (1280×1600 px)
│       │   │   └── [same 18 filenames as 3x4 above]
│       │   │
│       │   ├── featured/      (2400×1600 px)  ← RED CARPET CATEGORY HERO + STRIP PANEL 2
│       │   │   ├── redcarpet_2022_saniyya-sidney_naacp-awards_03.jpg  ← RC CATEGORY COVER
│       │   │   ├── redcarpet_2022_saniyya-sidney_hca-awards_09.jpg    ← HOMEPAGE STRIP PANEL 2
│       │   │   └── [remaining 16 filenames]
│       │   │
│       │   └── social/        (1080×1080 px)
│       │       └── [same 18 filenames]
│       │
│       ├── beauty/exports/
│       │   ├── 3x4/           (1200×1600 px)  ← USED IN GALLERY GRID + EDITORIAL PAGE (e1)
│       │   │   ├── beauty_2021_carmen-solomons_studio_11.jpg   ← BEAUTY HERO + editorial e1
│       │   │   ├── beauty_2021_carmen-solomons_studio_12.jpg
│       │   │   ├── beauty_2021_chloe-coleman_gunpowder-milkshake_13.jpg
│       │   │   ├── beauty_2018_lupita-nyongo_ace-awards_14.jpg
│       │   │   ├── beauty_rihanna_crop-over_15.jpg
│       │   │   ├── beauty_2021_thuso-mbedu_underground-railroad_16.jpg
│       │   │   ├── beauty_2017_liesl-tommy_crafted_17.jpg                      ⚠️ rename
│       │   │   ├── beauty_2019_rihanna_savage-fenty_18.jpg
│       │   │   ├── beauty_2018_lizzo_paper-magazine_19.jpg
│       │   │   ├── beauty_2018_duckie-thot_harpers-bazaar_20.jpg
│       │   │   ├── beauty_2018_duckie-thot_harpers-bazaar_21.jpg
│       │   │   ├── beauty_2018_duckie-thot_harpers-bazaar_22.jpg
│       │   │   └── beauty_2018_duckie-thot_harpers-bazaar_23.jpg
│       │   │
│       │   ├── 4x5/           (1280×1600 px)
│       │   │   └── [same 13 filenames as 3x4 above]
│       │   │
│       │   ├── featured/      (2400×1600 px)  ← BEAUTY CATEGORY HERO + STRIP PANEL 3
│       │   │   ├── beauty_2021_carmen-solomons_studio_11.jpg   ← BEAUTY CATEGORY COVER
│       │   │   ├── beauty_2018_duckie-thot_harpers-bazaar_20.jpg ← HOMEPAGE STRIP PANEL 3
│       │   │   └── [remaining 11 filenames]
│       │   │
│       │   └── social/        (1080×1080 px)
│       │       └── [same 13 filenames]
│       │
│       └── commercial-ecom/exports/
│           ├── 3x4/           (1200×1600 px)
│           │   ├── ecom_2020_veronika-vilim_le-specs_01.jpg
│           │   ├── ecom_2019_tabria-majors_savage-x-fenty_02.jpg
│           │   ├── ecom_2019_nina-marie-daniele-and-models_savage-x-fenty_03.jpg
│           │   ├── ecom_2019_nina-marie-daniele_savage-x-fenty_04.jpg
│           │   ├── ecom_2018_mical-bockru_brother-vellies_05.jpg               ⚠️ rename
│           │   ├── ecom_2018_mical-bockru_brother-vellies_06.jpg               ⚠️ rename
│           │   ├── ecom_2018_ebony-riley-mical-bockru_brother-vellies_07.jpg   ⚠️ rename
│           │   └── ecom_2020_lisa-rinna_christian-cowan_10.jpg
│           │
│           ├── 4x5/           (1280×1600 px)  ← USED IN GALLERY GRID
│           │   └── [same 8 filenames as 3x4 above]
│           │
│           ├── featured/      (2400×1600 px)  ← COMMERCIAL CATEGORY HERO + STRIP PANEL 4
│           │   ├── ecom_2019_tabria-majors_savage-x-fenty_02.jpg  ← ECOM CATEGORY COVER
│           │   ├── ecom_2020_veronika-vilim_le-specs_01.jpg        ← HOMEPAGE STRIP PANEL 4
│           │   └── [remaining 6 filenames]
│           │
│           └── social/        (1080×1080 px)
│               └── [same 8 filenames]
│
├── favicon.svg
├── robots.txt                  ← MISSING — needs to be created
├── sitemap.xml                 ← MISSING — needs to be created
└── opengraph.jpg               ← MISSING — needs to be created (1200×630 px)
```

### File Count Summary

| Category | Images | × 4 formats | Export files |
|----------|--------|-------------|-------------|
| Covers | 9 | × 4 | 36 |
| Editorial | 19 | × 4 | 76 |
| Red Carpet | 18 | × 4 | 72 |
| Beauty | 13 | × 4 | 52 |
| Commercial/ECOM | 8 | × 4 | 32 |
| **Portfolio total** | **67** | | **268** |
| Special (hero, about) | 2 | — | 2 |
| **Grand total** | **69** | | **270** |

### ⚠️ 7 Files That Must Be Renamed on Export

The source originals have incorrect years in their filename. The exports must use the website's expected name:

| Export file must be named | Source original name |
|--------------------------|---------------------|
| `beauty_2017_liesl-tommy_crafted_17.jpg` | `beauty_2021_liesl-tommy_crafted_17.jpg` |
| `ecom_2018_mical-bockru_brother-vellies_05.jpg` | `ecom_unknown_mical-bockru_brother-vellies_05.jpg` |
| `ecom_2018_mical-bockru_brother-vellies_06.jpg` | `ecom_unknown_mical-bockru_brother-vellies_06.jpg` |
| `ecom_2018_ebony-riley-mical-bockru_brother-vellies_07.jpg` | `ecom_unknown_ebony-riley-mical-bockru_brother-vellies_07.jpg` |
| `redcarpet_2018_aurora-james-elaine-welteroth_red-carpet_04.jpg` | `redcarpet_unknown_aurora-james-elaine-welteroth_red-carpet_04.jpg` |
| `redcarpet_2019_chloe-coleman_red-carpet_10.jpg` | `redcarpet_unknown_chloe-coleman_red-carpet_10.jpg` |
| `redcarpet_2019_lizzo_the-daily-show_18.jpg` | `redcarpet_unknown_lizzo_the-daily-show_18.jpg` |

---

## 6. Remaining Tasks Before Go-Live

These are the outstanding items that must be completed before the site is ready to publish.

---

### 🔴 BLOCKING — Site cannot go live without these

#### 1. Image Processing (All 270 export files)
The most important task. Currently the export folders contain placeholder copies of the originals — uncropped and unsized. Every portfolio image needs to be processed into its 4 correct sizes. The homepage animated strip and all category cover cards will look wrong (stretched or blurry) until this is done.

**Processing priority order:**
1. `hero-bg.png` — needs 2.81× upscale to 3840×2160 px
2. `about-portrait.png` — needs 1.88× upscale to 1600×2400 px
3. 4 homepage strip images (featured crops) — most visible images after the hero
4. 5 category cover images (featured crops) — first thing users see on Portfolio Hub
5. Remaining 62 gallery images — crop only for most, minor upscale for 16

**Recommended pipeline:**
- Topaz Gigapixel or Adobe Super Resolution for the 15 high-priority upscales
- Manus AI for batch crop, rename, and folder sorting of all 270 exports

#### 2. `opengraph.jpg` — Social Sharing Preview Image
File is referenced in `index.html` but does not exist. Required size: **1200 × 630 px**.  
Without it, every social media share of the site will show a blank card with no image.
Location: `public/opengraph.jpg`

#### 3. Domain & DNS Configuration
Domain `michaeldavidjr.beauty` needs to point to the hosting provider. This requires:
- Deploying the site to a host (Replit Deployments, Vercel, Netlify, etc.)
- Adding the deployment's IP or CNAME to the DNS records for `michaeldavidjr.beauty`

---

### 🟡 IMPORTANT — Affects quality and professionalism

#### 4. `robots.txt`
Tells search engines what they can and can't crawl. Missing entirely.  
Location: `public/robots.txt`

**Minimum content:**
```
User-agent: *
Allow: /
Sitemap: https://michaeldavidjr.beauty/sitemap.xml
```

#### 5. `sitemap.xml`
Helps Google index all pages. Missing entirely.  
Location: `public/sitemap.xml`

Should include all 8 routes: `/`, `/portfolio`, `/portfolio/cover`, `/portfolio/editorial`, `/portfolio/red-carpet`, `/portfolio/beauty`, `/portfolio/commercial-ecom`, `/about`, `/press`, `/contact`

#### 6. Contact Form Endpoint (Formspree)
The contact form and email signup both use Formspree. The Formspree form ID (`xojkkjgz`) is currently hardcoded as a fallback. For production:
- Create a dedicated Formspree form at `formspree.io`
- Set the Formspree form ID in environment variable: `VITE_FORMSPREE_ID=your_id`
- Confirm the form receives test submissions before going live

#### 7. Lightbox / Full-Screen Image Viewer
Clicking a portfolio image in the gallery grid does nothing. For a visual portfolio this is a significant UX gap — visitors expect to be able to view images at full size. A lightbox component needs to be built and wired to the gallery grid.

---

### 🟢 NICE TO HAVE — Polish and reach

#### 8. Analytics
No tracking is currently set up. Consider Plausible (privacy-friendly) or Google Analytics to understand which portfolio categories and projects get the most engagement.

#### 9. Structured Data (JSON-LD)
Adding `Person` and `CreativeWork` schema markup to the HTML helps Google understand who MDW is and surface his work in rich results. Recommended for a professional portfolio.

#### 10. Press Page Visual Upgrade
All 14 press cards are text-only. Adding publication logos or a featured image for the entries that have photography would significantly improve the visual hierarchy of this page.

#### 11. Print Stylesheet
The Press page is exactly the kind of content people print or save as PDF. A `@media print` stylesheet would make it look polished in that context.

---

### Task Completion Tracker

| # | Task | Priority | Status |
|---|------|----------|--------|
| 1 | Process all 270 image exports | 🔴 Blocking | ⬜ Not started |
| 2 | Create `opengraph.jpg` (1200×630) | 🔴 Blocking | ⬜ Not started |
| 3 | Deploy site + configure DNS | 🔴 Blocking | ⬜ Not started |
| 4 | Add `robots.txt` | 🟡 Important | ⬜ Not started |
| 5 | Add `sitemap.xml` | 🟡 Important | ⬜ Not started |
| 6 | Set `VITE_FORMSPREE_ID` env var | 🟡 Important | ⬜ Not started |
| 7 | Build lightbox image viewer | 🟡 Important | ⬜ Not started |
| 8 | Analytics setup | 🟢 Nice to have | ⬜ Not started |
| 9 | JSON-LD structured data | 🟢 Nice to have | ⬜ Not started |
| 10 | Press page visual upgrade | 🟢 Nice to have | ⬜ Not started |
| 11 | Print stylesheet | 🟢 Nice to have | ⬜ Not started |

---

*Last updated: March 2026 — MDW Portfolio v1.0 pre-launch*
