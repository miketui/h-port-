# MDW Portfolio — Per-Image Processing Guide
### Every image. 4 sizes. Exact specs. Step-by-step chain.

---

## How to Use This Guide

Each image has:
- **Source** — current pixel dimensions of the original file
- **Priority** — how urgent the work is (CRITICAL / HIGH / MEDIUM / LOW / CROP ONLY)
- **Enhancement Chain** — the exact steps to take, in order
- **4 checkboxes** — one per export format, with the exact output target size and crop guidance

### The 4 Export Formats

| Format | Folder | Output Size (2x retina) | Ratio | Used For |
|--------|--------|------------------------|-------|----------|
| `3x4` | `exports/3x4/` | **1200 × 1600 px** | 3:4 portrait | Gallery grids |
| `4x5` | `exports/4x5/` | **1280 × 1600 px** | 4:5 portrait | Editorial layouts |
| `featured` | `exports/featured/` | **2400 × 1600 px** | 3:2 landscape | Category covers, homepage strip |
| `social` | `exports/social/` | **1080 × 1080 px** | 1:1 square | Social media sharing |

### Enhancement Chain Key

| Code | Meaning |
|------|---------|
| 🔴 AI UPSCALE → CROP | Run through AI upscaling tool first (Topaz Gigapixel / Adobe Enhance / Lightroom AI), then crop. Always upscale before cropping. |
| 🟡 CROP ONLY | Image is large enough. Just crop to each target ratio — no upscaling needed. |
| 🟠 RENAME → CROP | File has a year mismatch. Rename before exporting (see ⚠️ note). |
| ⭐ FEATURED PRIORITY | This image is used on the homepage animated strip — visible to every visitor on load. Treat with extra care. |

### Crop Guidance Symbols

- **CC** = Center crop (crop equal amounts from both sides)
- **SC** = Subject-aware crop (crop toward the subject — preserve face/hair)
- **TC** = Top crop (keep top of image, crop from bottom)
- **HC** = Horizontal band crop (for featured/landscape — choose the best horizontal slice)

---

## SPECIAL IMAGES

---

### hero-bg.png
**Source:** 1408 × 768 px | **Location:** `public/images/` | **Priority:** 🔴 CRITICAL

**Enhancement Chain:**
1. AI upscale to minimum 2800 × 1530 px (ideally 3840 × 2160 for 4K)
2. Ensure full-bleed landscape — subject should be centered-right
3. Export as PNG or high-quality JPG (quality 90+)

| ☐ | Format | Target Size | Instructions |
|----|--------|-------------|-------------|
| ☐ | **hero-bg** | 3840 × 2160 px | AI upscale 2.81x. Cinematic full-bleed. Subject (model's face/hair) should sit in upper-center. Keep dark moody atmosphere. |

---

### about-portrait.png
**Source:** 896 × 1280 px | **Location:** `public/images/` | **Priority:** 🔴 CRITICAL

**Enhancement Chain:**
1. AI upscale to 1600 × 2400 px (1.88x)
2. Crop to strict 2:3 portrait if needed
3. Export as PNG or high-quality JPG

| ☐ | Format | Target Size | Instructions |
|----|--------|-------------|-------------|
| ☐ | **about-portrait** | 1600 × 2400 px | AI upscale 1.88x. SC — keep face and upper body prominent. Sharp detail on hair texture. |

---

---

## BEAUTY CATEGORY (13 images)

---

### beauty_2018_duckie-thot_harpers-bazaar_20.jpg ⭐
**Source:** 1920 × 2325 px | **Priority:** 🔴 HIGH — Homepage strip + upscale needed

**Enhancement Chain:**
1. AI upscale 1.25x → output ~2400 × 2906 px
2. Crop each format from the upscaled version
3. ⭐ Featured crop is the homepage strip — preserve face + hair drama, horizontal center band

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — center crop, keep face & neck. Hair crown at top. |
| ☐ | `4x5` | 1280 × 1600 px | SC — slight wider crop than 3x4, same subject centering. |
| ☐ | `featured` | 2400 × 1600 px | HC — horizontal band through mid-face/neck area. This is homepage strip — most visible crop. Choose the most striking horizontal slice. |
| ☐ | `social` | 1080 × 1080 px | SC — tight square on face + hair. |

---

### beauty_2018_duckie-thot_harpers-bazaar_21.jpg
**Source:** 1920 × 2325 px | **Priority:** 🟡 CROP ONLY

**Enhancement Chain:** No upscaling needed. Crop to each format directly.

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — center on face, keep hair volume at top. |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly wider than 3x4. |
| ☐ | `featured` | 2400 × 1600 px | HC — horizontal band through mid-face. |
| ☐ | `social` | 1080 × 1080 px | SC — tight square on face. |

---

### beauty_2018_duckie-thot_harpers-bazaar_22.jpg
**Source:** 1920 × 2635 px | **Priority:** 🟡 CROP ONLY

**Enhancement Chain:** No upscaling needed. Image is extra tall — generous crop options.

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — center on subject, keep head room. |
| ☐ | `4x5` | 1280 × 1600 px | SC — center on subject. |
| ☐ | `featured` | 2400 × 1600 px | HC — choose best horizontal band (face or hair). |
| ☐ | `social` | 1080 × 1080 px | SC — tight square on face/hair. |

---

### beauty_2018_duckie-thot_harpers-bazaar_23.jpg
**Source:** 1920 × 2202 px | **Priority:** 🟡 CROP ONLY

**Enhancement Chain:** No upscaling needed.

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — center on face. |
| ☐ | `4x5` | 1280 × 1600 px | SC — center on face, slightly wider. |
| ☐ | `featured` | 2400 × 1600 px | HC — horizontal band through face/neck. |
| ☐ | `social` | 1080 × 1080 px | SC — square on face. |

---

### beauty_2018_lizzo_paper-magazine_19.jpg
**Source:** 1920 × 2485 px | **Priority:** 🟡 CROP ONLY

**Enhancement Chain:** No upscaling needed.

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — center on face + hair. |
| ☐ | `4x5` | 1280 × 1600 px | SC — center on subject. |
| ☐ | `featured` | 2400 × 1600 px | HC — horizontal band through mid-subject. |
| ☐ | `social` | 1080 × 1080 px | SC — square on face. |

---

### beauty_2018_lupita-nyongo_ace-awards_14.jpg
**Source:** 1920 × 1909 px (near-square) | **Priority:** 🟡 MEDIUM — Heavy crop needed (~25% width lost)

**Enhancement Chain:** No upscaling needed. Image is near-square — converting to portrait means cropping ~25% of width. Use subject-aware crop to keep Lupita centered.

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — crop 25% from sides, keep face + hair centered. |
| ☐ | `4x5` | 1280 × 1600 px | SC — crop ~20% from sides. |
| ☐ | `featured` | 2400 × 1600 px | HC — landscape crop is easier here (image already near-square). Choose horizontal band through face. |
| ☐ | `social` | 1080 × 1080 px | SC — square crop, center on face. Easiest format for this near-square original. |

---

### beauty_2019_rihanna_savage-fenty_18.jpg
**Source:** 1920 × 1245 px (landscape) | **Priority:** 🔴 HIGH — Landscape original, needs upscale + heavy portrait crop

**Enhancement Chain:**
1. AI upscale 1.29x → output ~2477 × 1606 px
2. For portrait formats: crop will lose ~60% of width — use subject-aware crop centered on Rihanna
3. For featured: landscape original is actually ideal — minimal crop needed

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — tight crop on Rihanna, lose most of the background. Keep hair and face prominent. |
| ☐ | `4x5` | 1280 × 1600 px | SC — same as 3x4 approach, slightly less tight. |
| ☐ | `featured` | 2400 × 1600 px | HC — image is already landscape. Minimal crop. Keep full composition. |
| ☐ | `social` | 1080 × 1080 px | SC — square tight on face + hair. |

---

### beauty_2021_carmen-solomons_studio_11.jpg ⭐ CATEGORY COVER
**Source:** 1920 × 2014 px | **Priority:** 🔴 HIGH — Category cover + upscale needed

**Enhancement Chain:**
1. AI upscale 1.25x → output ~2400 × 2518 px
2. Featured crop = Beauty category cover page — this is the hero of the Beauty section
3. Portrait crops from upscaled version

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — keep face + hair. Crop ~20% from each side. |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly wider than 3x4. |
| ☐ | `featured` | 2400 × 1600 px | HC — this is the Beauty category COVER. Choose the most striking horizontal band. Carmen's face + hair should dominate. |
| ☐ | `social` | 1080 × 1080 px | SC — square on face. |

---

### beauty_2021_carmen-solomons_studio_12.jpg
**Source:** 1920 × 2014 px | **Priority:** 🟡 MEDIUM — ~20% width crop

**Enhancement Chain:** No upscaling needed. Crop ~20% from each side for portrait formats.

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — keep face + hair. Crop sides evenly. |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly wider than 3x4. |
| ☐ | `featured` | 2400 × 1600 px | HC — horizontal band through face/neck. |
| ☐ | `social` | 1080 × 1080 px | SC — square on face. |

---

### beauty_2021_chloe-coleman_gunpowder-milkshake_13.jpg
**Source:** 1920 × 2284 px | **Priority:** 🟡 CROP ONLY

**Enhancement Chain:** No upscaling needed.

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — center on face + hair. |
| ☐ | `4x5` | 1280 × 1600 px | SC — center on subject. |
| ☐ | `featured` | 2400 × 1600 px | HC — horizontal band through face. |
| ☐ | `social` | 1080 × 1080 px | SC — square on face/hair. |

---

### beauty_2021_liesl-tommy_crafted_17.jpg
**Source:** 1920 × 2014 px | **Priority:** 🟡 MEDIUM — ~20% width crop
⚠️ **RENAME ON EXPORT:** Save as `beauty_2017_liesl-tommy_crafted_17.jpg` (source has wrong year)

**Enhancement Chain:**
1. Crop each format
2. Save with corrected filename: `beauty_2017_liesl-tommy_crafted_17.jpg`

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — keep face + hair. Crop ~20% each side. Save as `beauty_2017_liesl-tommy_crafted_17.jpg` |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly wider. Save as `beauty_2017_liesl-tommy_crafted_17.jpg` |
| ☐ | `featured` | 2400 × 1600 px | HC — horizontal band. Save as `beauty_2017_liesl-tommy_crafted_17.jpg` |
| ☐ | `social` | 1080 × 1080 px | SC — square on face. Save as `beauty_2017_liesl-tommy_crafted_17.jpg` |

---

### beauty_2021_thuso-mbedu_underground-railroad_16.jpg
**Source:** 1170 × 1392 px | **Priority:** 🔴 LOW — Upscale 1.15x needed

**Enhancement Chain:**
1. AI upscale 1.15x → output ~1346 × 1601 px
2. Crop from upscaled version

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — upscale first, then crop tight on face/hair. |
| ☐ | `4x5` | 1280 × 1600 px | SC — upscale first, then crop. |
| ☐ | `featured` | 2400 × 1600 px | HC — upscale 1.5x minimum for featured. Horizontal band through face. |
| ☐ | `social` | 1080 × 1080 px | SC — square on face. |

---

### beauty_rihanna_crop-over_15.jpg
**Source:** 1920 × 2325 px | **Priority:** 🟡 CROP ONLY

**Enhancement Chain:** No upscaling needed.

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — center on Rihanna's face + hair. |
| ☐ | `4x5` | 1280 × 1600 px | SC — center on subject. |
| ☐ | `featured` | 2400 × 1600 px | HC — horizontal band, keep Rihanna prominent. |
| ☐ | `social` | 1080 × 1080 px | SC — square on face. |

---

---

## COMMERCIAL / ECOM CATEGORY (8 images)

---

### ecom_2020_veronika-vilim_le-specs_01.jpg ⭐
**Source:** 1920 × 1952 px | **Priority:** 🔴 HIGH — Homepage strip + upscale needed

**Enhancement Chain:**
1. AI upscale 1.25x → output ~2400 × 2440 px
2. ⭐ Featured crop = homepage animated strip — preserve model + glasses composition

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — keep face + Le Specs glasses centered. Crop ~20% each side. |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly wider than 3x4. |
| ☐ | `featured` | 2400 × 1600 px | HC — ⭐ Homepage strip. Horizontal band through face/glasses — this is a beauty + accessory shot so keep full face visible. |
| ☐ | `social` | 1080 × 1080 px | SC — square, sunglasses + face prominent. |

---

### ecom_2019_tabria-majors_savage-x-fenty_02.jpg ⭐ CATEGORY COVER
**Source:** 1920 × 1542 px (landscape) | **Priority:** 🔴 HIGH — Category cover + upscale needed

**Enhancement Chain:**
1. AI upscale 1.25x → output ~2400 × 1928 px
2. For portrait formats: heavy crop — loses ~60% of width
3. Featured: landscape original → good for featured with slight crop

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — tight portrait crop on Tabria. Lose most background. Keep face + hair. |
| ☐ | `4x5` | 1280 × 1600 px | SC — same as 3x4, slightly wider. |
| ☐ | `featured` | 2400 × 1600 px | HC — ⭐ Commercial category COVER. Landscape original = ideal for this. Keep full Savage X Fenty composition. |
| ☐ | `social` | 1080 × 1080 px | SC — square on face/hair. |

---

### ecom_2019_nina-marie-daniele-and-models_savage-x-fenty_03.jpg
**Source:** 1920 × 1542 px (landscape) | **Priority:** 🔴 HIGH — Landscape original, heavy portrait crop + upscale

**Enhancement Chain:**
1. AI upscale 1.04x → output ~1997 × 1604 px (minimal upscale but brings to retina threshold)
2. Portrait crops will lose ~60% of width — choose which subject(s) to focus on

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — crop to main subject. Decide which model to center on. |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly wider, may include more models. |
| ☐ | `featured` | 2400 × 1600 px | HC — landscape original is ideal. Keep group composition. |
| ☐ | `social` | 1080 × 1080 px | CC — square from center of group shot. |

---

### ecom_2019_nina-marie-daniele_savage-x-fenty_04.jpg
**Source:** 1920 × 1542 px (landscape) | **Priority:** 🔴 HIGH — Same situation as _03

**Enhancement Chain:**
1. AI upscale 1.04x → output ~1997 × 1604 px
2. Portrait crops = heavy width loss

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — center on Nina Marie Daniele, lose background. |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly wider portrait. |
| ☐ | `featured` | 2400 × 1600 px | HC — landscape original, keep full composition. |
| ☐ | `social` | 1080 × 1080 px | SC — square on face/hair. |

---

### ecom_unknown_mical-bockru_brother-vellies_05.jpg
**Source:** 1920 × 2348 px | **Priority:** 🟡 CROP ONLY
⚠️ **RENAME ON EXPORT:** Save as `ecom_2018_mical-bockru_brother-vellies_05.jpg`

**Enhancement Chain:**
1. Crop each format
2. Save with corrected filename: `ecom_2018_mical-bockru_brother-vellies_05.jpg`

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — keep model face/hair. Save as `ecom_2018_mical-bockru_brother-vellies_05.jpg` |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly wider. Rename on save. |
| ☐ | `featured` | 2400 × 1600 px | HC — horizontal band. Rename on save. |
| ☐ | `social` | 1080 × 1080 px | SC — square on face. Rename on save. |

---

### ecom_unknown_mical-bockru_brother-vellies_06.jpg
**Source:** 1920 × 2348 px | **Priority:** 🟡 CROP ONLY
⚠️ **RENAME ON EXPORT:** Save as `ecom_2018_mical-bockru_brother-vellies_06.jpg`

**Enhancement Chain:** Crop each format. Rename on save.

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — keep face/hair. Save as `ecom_2018_mical-bockru_brother-vellies_06.jpg` |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly wider. Rename on save. |
| ☐ | `featured` | 2400 × 1600 px | HC — horizontal band. Rename on save. |
| ☐ | `social` | 1080 × 1080 px | SC — square. Rename on save. |

---

### ecom_unknown_ebony-riley-mical-bockru_brother-vellies_07.jpg
**Source:** 1920 × 1909 px (near-square) | **Priority:** 🟡 MEDIUM — ~20% width crop
⚠️ **RENAME ON EXPORT:** Save as `ecom_2018_ebony-riley-mical-bockru_brother-vellies_07.jpg`

**Enhancement Chain:** No upscaling needed. Near-square crop to portrait formats. Rename on save.

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — crop ~20% each side. Save as `ecom_2018_ebony-riley-mical-bockru_brother-vellies_07.jpg` |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly wider crop. Rename. |
| ☐ | `featured` | 2400 × 1600 px | HC — landscape crop from near-square. Rename. |
| ☐ | `social` | 1080 × 1080 px | CC — square crop is easiest from near-square. Rename. |

---

### ecom_2020_lisa-rinna_christian-cowan_10.jpg
**Source:** 1510 × 1536 px (near-square) | **Priority:** 🟡 MEDIUM — Upscale 1.04x + crop

**Enhancement Chain:**
1. AI upscale 1.04x → output ~1570 × 1597 px
2. Portrait crops require heavy width loss (~20%)

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — upscale first, then crop. Keep Lisa Rinna face + hair centered. |
| ☐ | `4x5` | 1280 × 1600 px | SC — upscale first, slightly wider crop. |
| ☐ | `featured` | 2400 × 1600 px | HC — needs additional upscale to 2.4x for featured. Horizontal band through face. |
| ☐ | `social` | 1080 × 1080 px | CC — square crop from near-square original (good match). |

---

---

## COVERS CATEGORY (9 images)

---

### cover_2022_gottmik_coveteur_09.jpg ⭐ CATEGORY COVER
**Source:** 1920 × 2390 px | **Priority:** 🔴 HIGH — Category cover + upscale needed

**Enhancement Chain:**
1. AI upscale 1.25x → output ~2400 × 2988 px
2. ⭐ Featured = Covers category cover page

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — keep Gottmik's face + hair. |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly wider. |
| ☐ | `featured` | 2400 × 1600 px | HC — ⭐ Covers category COVER. Landscape crop — choose dramatic horizontal band through face/hair. |
| ☐ | `social` | 1080 × 1080 px | SC — tight square on face. |

---

### cover_2018_duckie-thot_harpers-bazaar_01.jpg
**Source:** 1200 × 1437 px | **Priority:** 🔴 LOW — Upscale 1.11x needed

**Enhancement Chain:**
1. AI upscale 1.11x → output ~1332 × 1595 px
2. For featured (landscape): upscale to ~2.5x minimum

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — upscale 1.11x, then crop. Keep Duckie's face + cover masthead. |
| ☐ | `4x5` | 1280 × 1600 px | SC — upscale 1.11x, slightly wider. |
| ☐ | `featured` | 2400 × 1600 px | HC — needs ~2.5x upscale for featured. Horizontal band through face. |
| ☐ | `social` | 1080 × 1080 px | SC — square, face prominent. |

---

### cover_2018_duckie-thot_wonderland_02.jpg
**Source:** 960 × 1200 px | **Priority:** 🟡 MEDIUM — Upscale 1.33x needed

**Enhancement Chain:**
1. AI upscale 1.33x → output ~1277 × 1596 px
2. For featured: upscale ~3x minimum

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — upscale 1.33x, then crop. Keep Duckie's face/hair. |
| ☐ | `4x5` | 1280 × 1600 px | SC — upscale 1.33x, slightly wider crop. |
| ☐ | `featured` | 2400 × 1600 px | HC — needs significant upscale (~3x). Horizontal band through face. |
| ☐ | `social` | 1080 × 1080 px | SC — square, face prominent. |

---

### cover_2018_duckie-thot_stylist-uk_03.jpg
**Source:** 1920 × 2344 px | **Priority:** 🟡 CROP ONLY

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — keep face + cover type. |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly wider. |
| ☐ | `featured` | 2400 × 1600 px | HC — horizontal band through face. |
| ☐ | `social` | 1080 × 1080 px | SC — square on face. |

---

### cover_2021_kylie-bunbury_emmy-magazine_04.jpg
**Source:** 1920 × 2014 px | **Priority:** 🟡 MEDIUM — ~20% width crop

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — crop ~20% each side. Keep Kylie's face + Emmy type. |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly wider crop. |
| ☐ | `featured` | 2400 × 1600 px | HC — horizontal band through face. |
| ☐ | `social` | 1080 × 1080 px | SC — square on face. |

---

### cover_2020_gugu-mbatha-raw_variety_06.jpg
**Source:** 1920 × 2367 px | **Priority:** 🟡 CROP ONLY

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — keep Gugu's face + Variety cover branding. |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly wider. |
| ☐ | `featured` | 2400 × 1600 px | HC — horizontal band through face/hair. |
| ☐ | `social` | 1080 × 1080 px | SC — square on face. |

---

### cover_2022_alisha-wainwright_photobook_05.jpg
**Source:** 1920 × 2501 px | **Priority:** 🟡 CROP ONLY

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — keep face + hair. |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly wider. |
| ☐ | `featured` | 2400 × 1600 px | HC — horizontal band through face. |
| ☐ | `social` | 1080 × 1080 px | SC — square on face/hair. |

---

### cover_2018_duckie-thot-jazzelle_chic-album_07.jpg
**Source:** 1920 × 1909 px (near-square) | **Priority:** 🟡 MEDIUM — ~25% width crop

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — crop ~25% each side. Keep both subjects or choose primary. |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly less crop than 3x4. |
| ☐ | `featured` | 2400 × 1600 px | HC — landscape crop easy from near-square. Keep both subjects in frame. |
| ☐ | `social` | 1080 × 1080 px | CC — square crop is near-perfect match for near-square original. |

---

### cover_2022_aurora-james_glamour_08.jpg
**Source:** 1920 × 2753 px | **Priority:** 🟡 CROP ONLY (extra tall — generous crop options)

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — TC (keep top with face + Glamour masthead). |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly wider, same top-crop approach. |
| ☐ | `featured` | 2400 × 1600 px | HC — horizontal band through face/hair. |
| ☐ | `social` | 1080 × 1080 px | SC — square on face. |

---

---

## EDITORIAL CATEGORY (19 images + 1 category cover)

---

### editorial_2021_aurora-james_grazia-usa_34.jpg ⭐ CATEGORY COVER + HOMEPAGE STRIP
**Source:** 1920 × 2409 px | **Priority:** 🔴 HIGH — Dual use: Editorial cover AND homepage strip

**Enhancement Chain:**
1. AI upscale 1.25x → output ~2400 × 3011 px
2. ⭐ Featured = BOTH Editorial category cover AND homepage animated strip
3. Most prominent editorial image on the entire site

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — Aurora James, face + hair crown. Keep Grazia editorial feel. |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly wider portrait. |
| ☐ | `featured` | 2400 × 1600 px | HC — ⭐ BOTH category cover + homepage strip. Choose the most striking horizontal band — Aurora's face/hair should be centered and dramatic. This crop will be seen by every visitor. |
| ☐ | `social` | 1080 × 1080 px | SC — tight square on face + crown hair. |

---

### editorial_2021_aurora-james_grazia-usa_35.jpg
**Source:** 1920 × 2409 px | **Priority:** 🟡 CROP ONLY

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — keep face + hair. |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly wider. |
| ☐ | `featured` | 2400 × 1600 px | HC — horizontal band. |
| ☐ | `social` | 1080 × 1080 px | SC — square on face. |

---

### editorial_2018_duckie-thot_anais-bodysuits_22.jpg
**Source:** 1920 × 1909 px (near-square) | **Priority:** 🟡 MEDIUM — ~20% width crop

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — crop ~20% each side. Keep Duckie centered. |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly less crop. |
| ☐ | `featured` | 2400 × 1600 px | HC — near-square to landscape = easy. Keep full body or face band. |
| ☐ | `social` | 1080 × 1080 px | CC — near-square original = near-perfect square crop. |

---

### editorial_2018_duckie-thot_anais-bodysuits_23.jpg
**Source:** 1920 × 1909 px (near-square) | **Priority:** 🟡 MEDIUM — ~20% width crop

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — crop ~20% each side. |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly less crop. |
| ☐ | `featured` | 2400 × 1600 px | HC — near-square to landscape. |
| ☐ | `social` | 1080 × 1080 px | CC — near-square works well. |

---

### editorial_2018_duckie-thot_harpers-bazaar-mexico_24.jpg
**Source:** 1920 × 2325 px | **Priority:** 🟡 CROP ONLY

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — keep face + hair. |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly wider. |
| ☐ | `featured` | 2400 × 1600 px | HC — horizontal band. |
| ☐ | `social` | 1080 × 1080 px | SC — square on face. |

---

### editorial_2021_arica-himmel_photobook_25.jpg
**Source:** 1920 × 1255 px (landscape) | **Priority:** 🔴 HIGH — Landscape original, heavy portrait crop + upscale 1.27x

**Enhancement Chain:**
1. AI upscale 1.27x → output ~2438 × 1594 px
2. Portrait crops = very heavy width loss (~65%)

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — very tight portrait crop. Center on Arica's face + hair. Most of image width will be lost. |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly wider portrait. Same tight approach. |
| ☐ | `featured` | 2400 × 1600 px | HC — landscape original is well-suited for featured. Keep full composition. |
| ☐ | `social` | 1080 × 1080 px | SC — square tight on face. |

---

### editorial_2021_saniyya-sidney_refinery29_26.jpg
**Source:** 1920 × 2014 px | **Priority:** 🟡 MEDIUM — ~15% width crop

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — keep Saniyya's face + hair. Slight side crop. |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly wider. |
| ☐ | `featured` | 2400 × 1600 px | HC — horizontal band through face/hair. |
| ☐ | `social` | 1080 × 1080 px | SC — square on face. |

---

### editorial_2021_saniyya-demi_refinery29_27.jpg
**Source:** 1920 × 2014 px | **Priority:** 🟡 MEDIUM — ~15% width crop

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — keep face + hair. Slight side crop. |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly wider. |
| ☐ | `featured` | 2400 × 1600 px | HC — horizontal band. |
| ☐ | `social` | 1080 × 1080 px | SC — square on face. |

---

### editorial_2018_henson_micaiah-carter_28.jpg
**Source:** 1920 × 2348 px | **Priority:** 🟡 CROP ONLY

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — keep face + hair. |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly wider. |
| ☐ | `featured` | 2400 × 1600 px | HC — horizontal band. |
| ☐ | `social` | 1080 × 1080 px | SC — square on face. |

---

### editorial_2021_salem-mitchell_schon-magazine_29.jpg
**Source:** 1920 × 2284 px | **Priority:** 🟡 CROP ONLY

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — keep Salem's face + hair. |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly wider. |
| ☐ | `featured` | 2400 × 1600 px | HC — horizontal band. |
| ☐ | `social` | 1080 × 1080 px | SC — square on face. |

---

### editorial_2021_salem-mitchell_schon-magazine_30.jpg
**Source:** 1920 × 2284 px | **Priority:** 🟡 CROP ONLY

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — keep face + hair. |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly wider. |
| ☐ | `featured` | 2400 × 1600 px | HC — horizontal band. |
| ☐ | `social` | 1080 × 1080 px | SC — square on face. |

---

### editorial_2021_alyah-chanelle-scott_rollacoaster_31.jpg
**Source:** 1920 × 1952 px (near-square) | **Priority:** 🟡 MEDIUM — ~18% width crop

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — crop ~18% each side. Keep Alyah's face + hair. |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly less crop. |
| ☐ | `featured` | 2400 × 1600 px | HC — near-square to landscape = manageable. |
| ☐ | `social` | 1080 × 1080 px | CC — near-square original is ideal for square. |

---

### editorial_2021_alyah-chanelle-scott_rollacoaster_32.jpg
**Source:** 1920 × 1952 px (near-square) | **Priority:** 🟡 MEDIUM — ~18% width crop

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — crop ~18% each side. |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly less crop. |
| ☐ | `featured` | 2400 × 1600 px | HC — near-square to landscape. |
| ☐ | `social` | 1080 × 1080 px | CC — near-perfect square crop. |

---

### editorial_2022_alisha-wainwright_photobook_33.jpg
**Source:** 1920 × 2501 px | **Priority:** 🟡 CROP ONLY

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — keep Alisha's face + hair. |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly wider. |
| ☐ | `featured` | 2400 × 1600 px | HC — horizontal band through face. |
| ☐ | `social` | 1080 × 1080 px | SC — square on face. |

---

### editorial_2021_kylie-bunbury_emmy-magazine_36.jpg
**Source:** 1920 × 2014 px | **Priority:** 🟡 MEDIUM — ~15% width crop

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — crop ~15% each side. Keep Kylie's face + Emmy branding. |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly wider. |
| ☐ | `featured` | 2400 × 1600 px | HC — horizontal band through face. |
| ☐ | `social` | 1080 × 1080 px | SC — square on face. |

---

### editorial_2021_hailey-kilgore_contents-beauty_37.jpg
**Source:** 1920 × 2014 px | **Priority:** 🟡 MEDIUM — ~15% width crop

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — crop ~15% each side. Keep Hailey's face. |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly wider. |
| ☐ | `featured` | 2400 × 1600 px | HC — horizontal band through face. |
| ☐ | `social` | 1080 × 1080 px | SC — square on face. |

---

### editorial_2021_gugu-mbatha-raw_variety_38.jpg
**Source:** 1920 × 1952 px (near-square) | **Priority:** 🟡 MEDIUM — ~18% width crop

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — crop ~18% each side. Keep Gugu's face + hair. |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly less crop. |
| ☐ | `featured` | 2400 × 1600 px | HC — near-square to landscape = manageable. |
| ☐ | `social` | 1080 × 1080 px | CC — near-square to square is easy. |

---

### editorial_2019_elaine-welteroth_elle-uk_39.jpg
**Source:** 1920 × 2409 px | **Priority:** 🟡 CROP ONLY

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — keep Elaine's face + Elle UK type. |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly wider. |
| ☐ | `featured` | 2400 × 1600 px | HC — horizontal band. |
| ☐ | `social` | 1080 × 1080 px | SC — square on face. |

---

### editorial_2018_twins_lofficiel-malaysia_40.jpg
**Source:** 1920 × 1246 px (landscape) | **Priority:** 🔴 HIGH — Landscape, heavy portrait crop + upscale 1.28x

**Enhancement Chain:**
1. AI upscale 1.28x → output ~2458 × 1595 px
2. Portrait crops = very tight — choose which twin(s) to feature

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — decide: center on both twins or focus on one. Heavy crop. |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly wider — may fit both twins. |
| ☐ | `featured` | 2400 × 1600 px | HC — landscape original is ideal for featured. Keep both twins in frame. |
| ☐ | `social` | 1080 × 1080 px | CC — square crop, center between twins. |

---

---

## RED CARPET CATEGORY (18 images)

---

### redcarpet_2022_saniyya-sidney_naacp-awards_03.jpg ⭐ CATEGORY COVER
**Source:** 1920 × 2501 px | **Priority:** 🔴 HIGH — Category cover + upscale needed

**Enhancement Chain:**
1. AI upscale 1.25x → output ~2400 × 3126 px
2. ⭐ Featured = Red Carpet category cover page

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — keep Saniyya's face + hair + gown neckline. |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly wider. |
| ☐ | `featured` | 2400 × 1600 px | HC — ⭐ Red Carpet category COVER. Horizontal band — face + neckline + gown. Choose most glamorous band. |
| ☐ | `social` | 1080 × 1080 px | SC — square, face + hair prominent. |

---

### redcarpet_2022_saniyya-sidney_hca-awards_09.jpg ⭐
**Source:** 1920 × 2501 px | **Priority:** 🔴 HIGH — Homepage strip + upscale needed

**Enhancement Chain:**
1. AI upscale 1.25x → output ~2400 × 3126 px
2. ⭐ Featured = homepage animated strip

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — keep face + hair + gown. |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly wider. |
| ☐ | `featured` | 2400 × 1600 px | HC — ⭐ Homepage strip. Choose most striking horizontal band — face/hair/gown combination. |
| ☐ | `social` | 1080 × 1080 px | SC — square on face. |

---

### redcarpet_2022_ebony-obsidian_red-carpet_01.jpg
**Source:** 1920 × 2501 px | **Priority:** 🟡 CROP ONLY

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — keep face + hair + gown. |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly wider. |
| ☐ | `featured` | 2400 × 1600 px | HC — horizontal band. |
| ☐ | `social` | 1080 × 1080 px | SC — square on face. |

---

### redcarpet_2022_ebony-obsidian_red-carpet_02.jpg
**Source:** 1920 × 2753 px | **Priority:** 🟡 CROP ONLY (extra tall)

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — TC, keep face + gown top. |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly wider. |
| ☐ | `featured` | 2400 × 1600 px | HC — horizontal band through face/hair. |
| ☐ | `social` | 1080 × 1080 px | SC — square on face. |

---

### redcarpet_unknown_aurora-james-elaine-welteroth_red-carpet_04.jpg
**Source:** 1920 × 1909 px (near-square) | **Priority:** 🟡 MEDIUM — ~25% width crop
⚠️ **RENAME ON EXPORT:** Save as `redcarpet_2018_aurora-james-elaine-welteroth_red-carpet_04.jpg`

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — crop ~25% each side. Keep both Aurora + Elaine. Save as `redcarpet_2018_aurora-james-elaine-welteroth_red-carpet_04.jpg` |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly less crop. Rename. |
| ☐ | `featured` | 2400 × 1600 px | HC — near-square to landscape = easy. Keep both subjects. Rename. |
| ☐ | `social` | 1080 × 1080 px | CC — near-square works well as square. Rename. |

---

### redcarpet_2021_elaine-welteroth_project-runway_05.jpg
**Source:** 1920 × 2348 px | **Priority:** 🟡 CROP ONLY

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — keep Elaine's face + hair. |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly wider. |
| ☐ | `featured` | 2400 × 1600 px | HC — horizontal band. |
| ☐ | `social` | 1080 × 1080 px | SC — square on face. |

---

### redcarpet_2019_aurora-james_met-gala_06.jpg
**Source:** 1170 × 1468 px | **Priority:** 🔴 LOW — Upscale 1.09x needed

**Enhancement Chain:**
1. AI upscale 1.09x → output ~1275 × 1600 px
2. For featured: needs ~2.5x upscale

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — upscale 1.09x. Keep Aurora's face + Met Gala look. |
| ☐ | `4x5` | 1280 × 1600 px | SC — upscale 1.09x, slightly wider. |
| ☐ | `featured` | 2400 × 1600 px | HC — needs 2.5x upscale for featured. Horizontal band through face. |
| ☐ | `social` | 1080 × 1080 px | SC — square on face/hair. |

---

### redcarpet_2023_aurora-james_vanity-fair_07.jpg
**Source:** 1920 × 2182 px | **Priority:** 🟡 CROP ONLY

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — keep face + hair. |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly wider. |
| ☐ | `featured` | 2400 × 1600 px | HC — horizontal band. |
| ☐ | `social` | 1080 × 1080 px | SC — square on face. |

---

### redcarpet_2021_liesl-tommy_deadline-contenders_08.jpg
**Source:** 1920 × 2014 px | **Priority:** 🟡 MEDIUM — ~20% width crop

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — crop ~20% each side. Keep Liesl's face + hair. |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly wider. |
| ☐ | `featured` | 2400 × 1600 px | HC — horizontal band through face. |
| ☐ | `social` | 1080 × 1080 px | SC — square on face. |

---

### redcarpet_unknown_chloe-coleman_red-carpet_10.jpg
**Source:** 1920 × 2284 px | **Priority:** 🟡 CROP ONLY
⚠️ **RENAME ON EXPORT:** Save as `redcarpet_2019_chloe-coleman_red-carpet_10.jpg`

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — keep Chloe's face + hair. Save as `redcarpet_2019_chloe-coleman_red-carpet_10.jpg` |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly wider. Rename. |
| ☐ | `featured` | 2400 × 1600 px | HC — horizontal band. Rename. |
| ☐ | `social` | 1080 × 1080 px | SC — square on face. Rename. |

---

### redcarpet_2022_mallori-johnson_kindred-premiere_11.jpg
**Source:** 1920 × 2753 px | **Priority:** 🟡 CROP ONLY (extra tall)

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — TC, keep face + hair + gown top. |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly wider. |
| ☐ | `featured` | 2400 × 1600 px | HC — horizontal band through face/hair. |
| ☐ | `social` | 1080 × 1080 px | SC — square on face. |

---

### redcarpet_2021_brittany-ogrady_sag-panel_12.jpg
**Source:** 1920 × 2501 px | **Priority:** 🟡 CROP ONLY

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — keep face + hair. |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly wider. |
| ☐ | `featured` | 2400 × 1600 px | HC — horizontal band. |
| ☐ | `social` | 1080 × 1080 px | SC — square on face. |

---

### redcarpet_2019_rihanna_bet-awards_13.jpg
**Source:** 1920 × 1952 px (near-square) | **Priority:** 🟡 MEDIUM — ~23% width crop

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — crop ~23% each side. Keep Rihanna's face + gown. |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly less crop. |
| ☐ | `featured` | 2400 × 1600 px | HC — near-square to landscape. |
| ☐ | `social` | 1080 × 1080 px | CC — near-square works well as square. |

---

### redcarpet_2018_lupita-nyongo_ace-awards_14.jpg
**Source:** 1920 × 1909 px (near-square) | **Priority:** 🟡 MEDIUM — ~25% width crop

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — crop ~25% each side. Keep Lupita's face + gown neckline. |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly less crop. |
| ☐ | `featured` | 2400 × 1600 px | HC — near-square to landscape = keep full look. |
| ☐ | `social` | 1080 × 1080 px | CC — near-square to square, center on face. |

---

### redcarpet_2022_meena-harris_press_15.jpg
**Source:** 1920 × 2753 px | **Priority:** 🟡 CROP ONLY (extra tall)

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — TC, keep face + hair. |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly wider. |
| ☐ | `featured` | 2400 × 1600 px | HC — horizontal band through face. |
| ☐ | `social` | 1080 × 1080 px | SC — square on face. |

---

### redcarpet_2022_billy-porter_city-of-hope_16.jpg
**Source:** 1920 × 2753 px | **Priority:** 🟡 CROP ONLY (extra tall)

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — TC, keep Billy's face + dramatic outfit. |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly wider. |
| ☐ | `featured` | 2400 × 1600 px | HC — horizontal band, keep outfit drama. |
| ☐ | `social` | 1080 × 1080 px | SC — square on face + look. |

---

### redcarpet_2022_billy-porter_spirit-day_17.jpg
**Source:** 1920 × 2753 px | **Priority:** 🟡 CROP ONLY (extra tall)

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — TC, keep face + look. |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly wider. |
| ☐ | `featured` | 2400 × 1600 px | HC — horizontal band through face/look. |
| ☐ | `social` | 1080 × 1080 px | SC — square on face. |

---

### redcarpet_unknown_lizzo_the-daily-show_18.jpg
**Source:** 1920 × 2054 px | **Priority:** 🟡 MEDIUM — ~18% width crop
⚠️ **RENAME ON EXPORT:** Save as `redcarpet_2019_lizzo_the-daily-show_18.jpg`

| ☐ | Format | Target Size | Crop Instructions |
|----|--------|-------------|------------------|
| ☐ | `3x4` | 1200 × 1600 px | SC — crop ~18% each side. Keep Lizzo's face + hair. Save as `redcarpet_2019_lizzo_the-daily-show_18.jpg` |
| ☐ | `4x5` | 1280 × 1600 px | SC — slightly wider. Rename. |
| ☐ | `featured` | 2400 × 1600 px | HC — horizontal band. Rename. |
| ☐ | `social` | 1080 × 1080 px | SC — square on face. Rename. |

---

---

## MASTER CHECKLIST SUMMARY

| # | Priority | Image | 3x4 | 4x5 | Featured | Social | Rename? |
|---|----------|-------|-----|-----|----------|--------|---------|
| 1 | 🔴 CRITICAL | hero-bg.png | — | — | ☐ | — | No |
| 2 | 🔴 CRITICAL | about-portrait.png | — | — | ☐ | — | No |
| 3 | 🔴 HIGH ⭐ | beauty_..._20 (homepage strip) | ☐ | ☐ | ☐ | ☐ | No |
| 4 | 🟡 CROP | beauty_..._21 | ☐ | ☐ | ☐ | ☐ | No |
| 5 | 🟡 CROP | beauty_..._22 | ☐ | ☐ | ☐ | ☐ | No |
| 6 | 🟡 CROP | beauty_..._23 | ☐ | ☐ | ☐ | ☐ | No |
| 7 | 🟡 CROP | beauty_..._lizzo_19 | ☐ | ☐ | ☐ | ☐ | No |
| 8 | 🟡 MEDIUM | beauty_..._lupita_14 | ☐ | ☐ | ☐ | ☐ | No |
| 9 | 🔴 HIGH | beauty_..._rihanna_18 | ☐ | ☐ | ☐ | ☐ | No |
| 10 | 🔴 HIGH ⭐ | beauty_..._carmen_11 (cover) | ☐ | ☐ | ☐ | ☐ | No |
| 11 | 🟡 MEDIUM | beauty_..._carmen_12 | ☐ | ☐ | ☐ | ☐ | No |
| 12 | 🟡 CROP | beauty_..._chloe_13 | ☐ | ☐ | ☐ | ☐ | No |
| 13 | 🟡 MEDIUM | beauty_..._liesl_17 | ☐ | ☐ | ☐ | ☐ | ⚠️ YES |
| 14 | 🔴 LOW | beauty_..._thuso_16 | ☐ | ☐ | ☐ | ☐ | No |
| 15 | 🟡 CROP | beauty_rihanna_crop-over_15 | ☐ | ☐ | ☐ | ☐ | No |
| 16 | 🔴 HIGH ⭐ | ecom_..._le-specs_01 (homepage strip) | ☐ | ☐ | ☐ | ☐ | No |
| 17 | 🔴 HIGH ⭐ | ecom_..._tabria_02 (cover) | ☐ | ☐ | ☐ | ☐ | No |
| 18 | 🔴 HIGH | ecom_..._nina-group_03 | ☐ | ☐ | ☐ | ☐ | No |
| 19 | 🔴 HIGH | ecom_..._nina_04 | ☐ | ☐ | ☐ | ☐ | No |
| 20 | 🟡 CROP | ecom_unknown_..._05 | ☐ | ☐ | ☐ | ☐ | ⚠️ YES |
| 21 | 🟡 CROP | ecom_unknown_..._06 | ☐ | ☐ | ☐ | ☐ | ⚠️ YES |
| 22 | 🟡 MEDIUM | ecom_unknown_..._07 | ☐ | ☐ | ☐ | ☐ | ⚠️ YES |
| 23 | 🟡 MEDIUM | ecom_..._lisa-rinna_10 | ☐ | ☐ | ☐ | ☐ | No |
| 24 | 🔴 HIGH ⭐ | cover_..._gottmik_09 (cover) | ☐ | ☐ | ☐ | ☐ | No |
| 25 | 🔴 LOW | cover_..._duckie-hb_01 | ☐ | ☐ | ☐ | ☐ | No |
| 26 | 🟡 MEDIUM | cover_..._wonderland_02 | ☐ | ☐ | ☐ | ☐ | No |
| 27 | 🟡 CROP | cover_..._stylist-uk_03 | ☐ | ☐ | ☐ | ☐ | No |
| 28 | 🟡 MEDIUM | cover_..._kylie_04 | ☐ | ☐ | ☐ | ☐ | No |
| 29 | 🟡 CROP | cover_..._variety_06 | ☐ | ☐ | ☐ | ☐ | No |
| 30 | 🟡 CROP | cover_..._alisha_05 | ☐ | ☐ | ☐ | ☐ | No |
| 31 | 🟡 MEDIUM | cover_..._jazzelle_07 | ☐ | ☐ | ☐ | ☐ | No |
| 32 | 🟡 CROP | cover_..._aurora-glamour_08 | ☐ | ☐ | ☐ | ☐ | No |
| 33 | 🔴 HIGH ⭐ | editorial_..._aurora-34 (cover+strip) | ☐ | ☐ | ☐ | ☐ | No |
| 34 | 🟡 CROP | editorial_..._aurora-35 | ☐ | ☐ | ☐ | ☐ | No |
| 35 | 🟡 MEDIUM | editorial_..._anais-22 | ☐ | ☐ | ☐ | ☐ | No |
| 36 | 🟡 MEDIUM | editorial_..._anais-23 | ☐ | ☐ | ☐ | ☐ | No |
| 37 | 🟡 CROP | editorial_..._hb-mexico_24 | ☐ | ☐ | ☐ | ☐ | No |
| 38 | 🔴 HIGH | editorial_..._arica_25 | ☐ | ☐ | ☐ | ☐ | No |
| 39 | 🟡 MEDIUM | editorial_..._saniyya-sid_26 | ☐ | ☐ | ☐ | ☐ | No |
| 40 | 🟡 MEDIUM | editorial_..._saniyya-demi_27 | ☐ | ☐ | ☐ | ☐ | No |
| 41 | 🟡 CROP | editorial_..._henson_28 | ☐ | ☐ | ☐ | ☐ | No |
| 42 | 🟡 CROP | editorial_..._salem-29 | ☐ | ☐ | ☐ | ☐ | No |
| 43 | 🟡 CROP | editorial_..._salem-30 | ☐ | ☐ | ☐ | ☐ | No |
| 44 | 🟡 MEDIUM | editorial_..._alyah-31 | ☐ | ☐ | ☐ | ☐ | No |
| 45 | 🟡 MEDIUM | editorial_..._alyah-32 | ☐ | ☐ | ☐ | ☐ | No |
| 46 | 🟡 CROP | editorial_..._alisha-33 | ☐ | ☐ | ☐ | ☐ | No |
| 47 | 🟡 MEDIUM | editorial_..._kylie-36 | ☐ | ☐ | ☐ | ☐ | No |
| 48 | 🟡 MEDIUM | editorial_..._hailey-37 | ☐ | ☐ | ☐ | ☐ | No |
| 49 | 🟡 MEDIUM | editorial_..._gugu-38 | ☐ | ☐ | ☐ | ☐ | No |
| 50 | 🟡 CROP | editorial_..._elaine-39 | ☐ | ☐ | ☐ | ☐ | No |
| 51 | 🔴 HIGH | editorial_..._twins-40 | ☐ | ☐ | ☐ | ☐ | No |
| 52 | 🔴 HIGH ⭐ | redcarpet_..._saniyya-naacp_03 (cover) | ☐ | ☐ | ☐ | ☐ | No |
| 53 | 🔴 HIGH ⭐ | redcarpet_..._saniyya-hca_09 (strip) | ☐ | ☐ | ☐ | ☐ | No |
| 54 | 🟡 CROP | redcarpet_..._ebony-01 | ☐ | ☐ | ☐ | ☐ | No |
| 55 | 🟡 CROP | redcarpet_..._ebony-02 | ☐ | ☐ | ☐ | ☐ | No |
| 56 | 🟡 MEDIUM | redcarpet_unknown_..._aurora-elaine_04 | ☐ | ☐ | ☐ | ☐ | ⚠️ YES |
| 57 | 🟡 CROP | redcarpet_..._elaine-pw_05 | ☐ | ☐ | ☐ | ☐ | No |
| 58 | 🔴 LOW | redcarpet_..._aurora-met_06 | ☐ | ☐ | ☐ | ☐ | No |
| 59 | 🟡 CROP | redcarpet_..._aurora-vf_07 | ☐ | ☐ | ☐ | ☐ | No |
| 60 | 🟡 MEDIUM | redcarpet_..._liesl_08 | ☐ | ☐ | ☐ | ☐ | No |
| 61 | 🟡 CROP | redcarpet_unknown_..._chloe_10 | ☐ | ☐ | ☐ | ☐ | ⚠️ YES |
| 62 | 🟡 CROP | redcarpet_..._mallori_11 | ☐ | ☐ | ☐ | ☐ | No |
| 63 | 🟡 CROP | redcarpet_..._brittany_12 | ☐ | ☐ | ☐ | ☐ | No |
| 64 | 🟡 MEDIUM | redcarpet_..._rihanna-bet_13 | ☐ | ☐ | ☐ | ☐ | No |
| 65 | 🟡 MEDIUM | redcarpet_..._lupita_14 | ☐ | ☐ | ☐ | ☐ | No |
| 66 | 🟡 CROP | redcarpet_..._meena_15 | ☐ | ☐ | ☐ | ☐ | No |
| 67 | 🟡 CROP | redcarpet_..._billy-city_16 | ☐ | ☐ | ☐ | ☐ | No |
| 68 | 🟡 CROP | redcarpet_..._billy-spirit_17 | ☐ | ☐ | ☐ | ☐ | No |
| 69 | 🟡 MEDIUM | redcarpet_unknown_..._lizzo_18 | ☐ | ☐ | ☐ | ☐ | ⚠️ YES |

---

**Total images: 69 portfolio + 2 special = 71 | Checkboxes: 284 | Renames needed: 7**
