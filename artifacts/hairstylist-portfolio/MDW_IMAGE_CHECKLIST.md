# MDW Portfolio — Complete Image Checklist

Every image the site needs, where it goes, and what size it should be.
All paths are relative to `artifacts/hairstylist-portfolio/public/`.

---

## ROUND 0 — Branding (do first)

| File | Path | Size | Notes |
|------|------|------|-------|
| Favicon | `favicon.svg` | 180x180 SVG | Currently a generic orange square. Replace with MDW monogram or logo mark. Can also use `favicon.ico` (32x32 or 48x48). |
| Open Graph | `opengraph.jpg` | 1200 x 630 | Social share image (Facebook, LinkedIn, iMessage previews). Should be a designed composition, not a raw photo crop. |

---

## ROUND 1 — Hero + Editorial Strip + About Portrait (highest visibility)

### Hero image (1 image — single dominant)

One cinematic image fills the entire opening screen. No carousel, no rotation.
It has a subtle parallax zoom as the user scrolls. This image does the emotional work.

| File | Path | Size | Notes |
|------|------|------|-------|
| Hero | `images/hero.jpg` | 1920 x 2400 min | Your absolute strongest image. Premium, fashion-forward, memorable. Not necessarily the most famous person — the best photo. |

Portrait orientation. Dark gradient overlay fades bottom-to-top. The old `hero-bg.png` can be deleted once this is placed.

### Editorial strip (4 images — proving range)

These appear as a luxury 4-up horizontal panel directly below the hero. Generous spacing, hover reveals the category label with a subtle gradient. No dots, no arrows — feels editorial, not template.

| File | Path | Size | Notes |
|------|------|------|-------|
| Strip — Editorial | `images/strip-editorial.jpg` | 1200 x 1600 | Best editorial shot. Fashion story or magazine work. |
| Strip — Red Carpet | `images/strip-redcarpet.jpg` | 1200 x 1600 | Strongest red carpet / event moment. |
| Strip — Beauty | `images/strip-beauty.jpg` | 1200 x 1600 | Close-up beauty work showing texture and detail. |
| Strip — Commercial | `images/strip-commercial.jpg` | 1200 x 1600 | Campaign or brand collaboration. |

3:4 ratio (portrait). These prove range — four distinct strengths visible at once.

### About portrait

| File | Path | Size | Notes |
|------|------|------|-------|
| About portrait | `images/about-portrait.png` | 1200 x 1600 | Currently a placeholder. Replace with a real portrait or strong editorial self-image. Displays with grayscale-to-color hover effect. |

---

## ROUND 2 — Category Cover Cards (5 images)

These appear on the homepage grid and the Portfolio Hub page. Each needs to exist in the `exports/featured/` subfolder of its category.

| Category | Filename | Path | Size |
|----------|----------|------|------|
| Cover | `cover_2022_gottmik_coveteur_09.jpg` | `images/portfolio/cover/exports/featured/` | 1200 x 1600 |
| Editorial | `editorial_2021_aurora-james_grazia-usa_34.jpg` | `images/portfolio/editorial/exports/featured/` | 1200 x 1600 |
| Red Carpet | `redcarpet_2022_saniyya-sidney_naacp-awards_03.jpg` | `images/portfolio/red-carpet/exports/featured/` | 1200 x 1600 |
| Beauty | `beauty_2021_carmen-solomons_studio_11.jpg` | `images/portfolio/beauty/exports/featured/` | 1200 x 1600 |
| Commercial | `ecom_2019_tabria-majors_savage-x-fenty_02.jpg` | `images/portfolio/commercial-ecom/exports/featured/` | 1200 x 1600 |

These same 5 images also appear in the portfolio grids (Round 3 below), so each one needs to exist in BOTH `exports/featured/` AND `exports/3x4/` (or `exports/4x5/`). You can use the same file in both or make a separate crop for the featured version.

---

## ROUND 3 — Portfolio Grid Images

### Cover category — 9 images

All go in `images/portfolio/cover/exports/3x4/`
Target size: 1200 x 1600 (3:4 ratio)

| # | Filename | Client | Year |
|---|----------|--------|------|
| 1 | `cover_2018_duckie-thot_harpers-bazaar_01.jpg` | Duckie Thot | 2018 |
| 2 | `cover_2018_duckie-thot_wonderland_02.jpg` | Duckie Thot | 2018 |
| 3 | `cover_2018_duckie-thot_stylist-uk_03.jpg` | Duckie Thot | 2018 |
| 4 | `cover_2021_kylie-bunbury_emmy-magazine_04.jpg` | Kylie Bunbury | 2021 |
| 5 | `cover_2022_alisha-wainwright_photobook_05.jpg` | Alisha Wainwright | 2022 |
| 6 | `cover_2020_gugu-mbatha-raw_variety_06.jpg` | Gugu Mbatha-Raw | 2020 |
| 7 | `cover_2018_duckie-thot-jazzelle_chic-album_07.jpg` | Duckie Thot & Jazzelle | 2018 |
| 8 | `cover_2022_aurora-james_glamour_08.jpg` | Aurora James | 2022 |
| 9 | `cover_2022_gottmik_coveteur_09.jpg` | GottMik | 2022 |

### Editorial category — 19 images

All go in `images/portfolio/editorial/exports/4x5/`
Target size: 1200 x 1500 (4:5 ratio)

Note: e1 (Carmen Solomons) pulls from beauty/exports/3x4/ — no file needed in editorial for that one.

| # | Filename | Client | Year |
|---|----------|--------|------|
| 1 | `editorial_2018_duckie-thot_anais-bodysuits_22.jpg` | Duckie Thot | 2018 |
| 2 | `editorial_2018_duckie-thot_anais-bodysuits_23.jpg` | Duckie Thot | 2018 |
| 3 | `editorial_2018_duckie-thot_harpers-bazaar-mexico_24.jpg` | Duckie Thot | 2018 |
| 4 | `editorial_2021_arica-himmel_photobook_25.jpg` | Arica Himmel | 2021 |
| 5 | `editorial_2021_saniyya-sidney_refinery29_26.jpg` | Saniyya Sidney | 2021 |
| 6 | `editorial_2021_saniyya-demi_refinery29_27.jpg` | Saniyya & Demi | 2021 |
| 7 | `editorial_2018_henson_micaiah-carter_28.jpg` | Henson | 2018 |
| 8 | `editorial_2021_salem-mitchell_schon-magazine_29.jpg` | Salem Mitchell | 2021 |
| 9 | `editorial_2021_salem-mitchell_schon-magazine_30.jpg` | Salem Mitchell | 2021 |
| 10 | `editorial_2021_alyah-chanelle-scott_rollacoaster_31.jpg` | Alyah Chanelle Scott | 2021 |
| 11 | `editorial_2021_alyah-chanelle-scott_rollacoaster_32.jpg` | Alyah Chanelle Scott | 2021 |
| 12 | `editorial_2022_alisha-wainwright_photobook_33.jpg` | Alisha Wainwright | 2022 |
| 13 | `editorial_2021_aurora-james_grazia-usa_34.jpg` | Aurora James | 2021 |
| 14 | `editorial_2021_aurora-james_grazia-usa_35.jpg` | Aurora James | 2021 |
| 15 | `editorial_2021_kylie-bunbury_emmy-magazine_36.jpg` | Kylie Bunbury | 2021 |
| 16 | `editorial_2021_hailey-kilgore_contents-beauty_37.jpg` | Hailey Kilgore | 2021 |
| 17 | `editorial_2021_gugu-mbatha-raw_variety_38.jpg` | Gugu Mbatha-Raw | 2021 |
| 18 | `editorial_2019_elaine-welteroth_elle-uk_39.jpg` | Elaine Welteroth | 2019 |
| 19 | `editorial_2018_twins_lofficiel-malaysia_40.jpg` | Twins | 2018 |

### Red Carpet category — 17 images

All go in `images/portfolio/red-carpet/exports/3x4/`
Target size: 1200 x 1600 (3:4 ratio)

| # | Filename | Client | Year |
|---|----------|--------|------|
| 1 | `redcarpet_2022_ebony-obsidian_red-carpet_01.jpg` | Ebony Obsidian | 2022 |
| 2 | `redcarpet_2022_ebony-obsidian_red-carpet_02.jpg` | Ebony Obsidian | 2022 |
| 3 | `redcarpet_2022_saniyya-sidney_naacp-awards_03.jpg` | Saniyya Sidney | 2022 |
| 4 | `redcarpet_2018_aurora-james-elaine-welteroth_red-carpet_04.jpg` | Aurora James & Elaine Welteroth | 2018 |
| 5 | `redcarpet_2021_elaine-welteroth_project-runway_05.jpg` | Elaine Welteroth | 2021 |
| 6 | `redcarpet_2019_aurora-james_met-gala_06.jpg` | Aurora James | 2019 |
| 7 | `redcarpet_2023_aurora-james_vanity-fair_07.jpg` | Aurora James | 2023 |
| 8 | `redcarpet_2021_liesl-tommy_deadline-contenders_08.jpg` | Liesl Tommy | 2021 |
| 9 | `redcarpet_2022_saniyya-sidney_hca-awards_09.jpg` | Saniyya Sidney | 2022 |
| 10 | `redcarpet_2019_chloe-coleman_red-carpet_10.jpg` | Chloe Coleman | 2019 |
| 11 | `redcarpet_2022_mallori-johnson_kindred-premiere_11.jpg` | Mallori Johnson | 2022 |
| 12 | `redcarpet_2021_brittany-ogrady_sag-panel_12.jpg` | Brittany O'Grady | 2021 |
| 13 | `redcarpet_2019_rihanna_bet-awards_13.jpg` | Rihanna | 2019 |
| 14 | `redcarpet_2018_lupita-nyongo_ace-awards_14.jpg` | Lupita Nyong'o | 2018 |
| 15 | `redcarpet_2022_meena-harris_press_15.jpg` | Meena Harris | 2022 |
| 16 | `redcarpet_2022_billy-porter_city-of-hope_16.jpg` | Billy Porter | 2022 |
| 17 | `redcarpet_2022_billy-porter_spirit-day_17.jpg` | Billy Porter | 2022 |

### Beauty category — 13 images

All go in `images/portfolio/beauty/exports/3x4/`
Target size: 1200 x 1600 (3:4 ratio)

| # | Filename | Client | Year |
|---|----------|--------|------|
| 1 | `beauty_2021_carmen-solomons_studio_11.jpg` | Carmen Solomons | 2021 |
| 2 | `beauty_2021_carmen-solomons_studio_12.jpg` | Carmen Solomons | 2021 |
| 3 | `beauty_2021_chloe-coleman_gunpowder-milkshake_13.jpg` | Chloe Coleman | 2021 |
| 4 | `beauty_2018_lupita-nyongo_ace-awards_14.jpg` | Lupita Nyong'o | 2018 |
| 5 | `beauty_rihanna_crop-over_15.jpg` | Rihanna | — |
| 6 | `beauty_2021_thuso-mbedu_underground-railroad_16.jpg` | Thuso Mbedu | 2021 |
| 7 | `beauty_2017_liesl-tommy_crafted_17.jpg` | Liesl Tommy | 2017 |
| 8 | `beauty_2019_rihanna_savage-fenty_18.jpg` | Rihanna | 2019 |
| 9 | `beauty_2018_lizzo_paper-magazine_19.jpg` | Lizzo | 2018 |
| 10 | `beauty_2018_duckie-thot_harpers-bazaar_20.jpg` | Duckie Thot | 2018 |
| 11 | `beauty_2018_duckie-thot_harpers-bazaar_21.jpg` | Duckie Thot | 2018 |
| 12 | `beauty_2018_duckie-thot_harpers-bazaar_22.jpg` | Duckie Thot | 2018 |
| 13 | `beauty_2018_duckie-thot_harpers-bazaar_23.jpg` | Duckie Thot | 2018 |

### Commercial / ECOM category — 8 images

All go in `images/portfolio/commercial-ecom/exports/4x5/`
Target size: 1200 x 1500 (4:5 ratio)

| # | Filename | Client | Year |
|---|----------|--------|------|
| 1 | `ecom_2020_veronika-vilim_le-specs_01.jpg` | Veronika Vilim | 2020 |
| 2 | `ecom_2019_tabria-majors_savage-x-fenty_02.jpg` | Tabria Majors | 2019 |
| 3 | `ecom_2019_nina-marie-daniele-and-models_savage-x-fenty_03.jpg` | Nina Marie Daniele | 2019 |
| 4 | `ecom_2019_nina-marie-daniele_savage-x-fenty_04.jpg` | Nina Marie Daniele | 2019 |
| 5 | `ecom_2018_mical-bockru_brother-vellies_05.jpg` | Mical Bockru | 2018 |
| 6 | `ecom_2018_mical-bockru_brother-vellies_06.jpg` | Mical Bockru | 2018 |
| 7 | `ecom_2018_ebony-riley-mical-bockru_brother-vellies_07.jpg` | Ebony Riley & Mical Bockru | 2018 |
| 8 | `ecom_2020_lisa-rinna_christian-cowan_10.jpg` | Lisa Rinna | 2020 |

---

## TOTALS

| Category | Grid images | Cover image | Subfolder |
|----------|-------------|-------------|-----------|
| Cover | 9 in `exports/3x4/` | 1 in `exports/featured/` | `images/portfolio/cover/` |
| Editorial | 19 in `exports/4x5/` | 1 in `exports/featured/` | `images/portfolio/editorial/` |
| Red Carpet | 17 in `exports/3x4/` | 1 in `exports/featured/` | `images/portfolio/red-carpet/` |
| Beauty | 13 in `exports/3x4/` | 1 in `exports/featured/` | `images/portfolio/beauty/` |
| Commercial | 8 in `exports/4x5/` | 1 in `exports/featured/` | `images/portfolio/commercial-ecom/` |
| **Subtotal** | **66 grid** | **5 covers** | |
| Hero image | 1 in `images/` | | `images/hero.jpg` |
| Editorial strip | 4 in `images/` | | `images/strip-editorial.jpg` etc. |
| About portrait | 1 in `images/` | | `images/about-portrait.png` |
| Open Graph | 1 in root of `public/` | | `opengraph.jpg` |
| Favicon | 1 in root of `public/` | | `favicon.svg` |
| **GRAND TOTAL** | **78 unique files** | | |

Note: 5 images appear in BOTH `exports/featured/` (as category covers) and `exports/3x4/` or `exports/4x5/` (in the grid). You can copy the same file to both or make separate crops. That means 78 unique source images but 83 total files to place.

---

## RECOMMENDED WORKFLOW

1. Start with Round 0 (favicon + OG) — quick wins
2. Do Round 1 (hero + strip + about) — makes the homepage real
3. Do Round 2 (5 covers) — makes Portfolio Hub and homepage grid real
4. Do Round 3 category by category — fills in the gallery pages

---

## FULL REPO STRUCTURE

```
h-port-/
  source-assets/
    originals/                          ← untouched screenshots / raw downloads
      beauty/           (13 files)
      commercial-ecom/  (8 files)
      cover/            (9 files)
      editorial/        (20 files)
      homepage/         (11 files)
      red-carpet/       (18 files)
    masters/                            ← cleaned/enhanced full-quality working files
      beauty/
      commercial-ecom/
      cover/
      editorial/
      homepage/                         ← hero, about-portrait, opengraph masters go HERE
      red-carpet/
    work-in-progress/                   ← scratch / temp files, not part of final system
      homepage/
      misc/
    MDW_Portfolio_Image_Credits.md

  artifacts/hairstylist-portfolio/
    public/                             ← final web-ready files ONLY
      favicon.svg
      opengraph.jpg
      images/
        hero-bg.png                     ← old single hero (delete after adding hero-1..5)
        about-portrait.png
        portfolio/
          beauty/exports/               3x4/ | 4x5/ | featured/ | social/
          commercial-ecom/exports/      3x4/ | 4x5/ | featured/ | social/
          cover/exports/                3x4/ | 4x5/ | featured/ | social/
          editorial/exports/            3x4/ | 4x5/ | featured/ | social/
          homepage/exports/             3x4/ | 4x5/ | featured/ | social/
          red-carpet/exports/           3x4/ | 4x5/ | featured/ | social/
```

---

## WHERE HERO / ABOUT / OPENGRAPH MASTERS LIVE

| Asset | Master location | Final export location |
|-------|----------------|----------------------|
| Hero image | `source-assets/masters/homepage/hero.jpg` | `artifacts/.../public/images/hero.jpg` |
| Strip — Editorial | `source-assets/masters/homepage/strip-editorial.jpg` | `artifacts/.../public/images/strip-editorial.jpg` |
| Strip — Red Carpet | `source-assets/masters/homepage/strip-redcarpet.jpg` | `artifacts/.../public/images/strip-redcarpet.jpg` |
| Strip — Beauty | `source-assets/masters/homepage/strip-beauty.jpg` | `artifacts/.../public/images/strip-beauty.jpg` |
| Strip — Commercial | `source-assets/masters/homepage/strip-commercial.jpg` | `artifacts/.../public/images/strip-commercial.jpg` |
| About portrait | `source-assets/masters/homepage/about-portrait.png` | `artifacts/.../public/images/about-portrait.png` |
| Open Graph | `source-assets/masters/homepage/opengraph.jpg` | `artifacts/.../public/opengraph.jpg` |
| Favicon | `source-assets/masters/homepage/favicon.svg` | `artifacts/.../public/favicon.svg` |

---

## 3-STAGE PROCESSING WORKFLOW

```
original → master → export

1. ORIGINAL (source-assets/originals/{category}/)
   Untouched source. Never modify. Never delete.

2. MASTER (source-assets/masters/{category}/)
   Cleaned, enhanced, color-corrected, full-resolution.
   This is your working file. Re-export from here anytime.

3. EXPORT (artifacts/.../public/images/portfolio/{category}/exports/{ratio}/)
   Final web-optimized, cropped to target ratio, ready for the live site.
   This is the ONLY thing that goes in public/.
```

Process: original → clean up → enhance → upscale → crop to target size → export to `artifacts/hairstylist-portfolio/public/images/`
