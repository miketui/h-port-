# MDW Portfolio — Image Checklist

All original images live on GitHub at: `source-assets/originals/{category}/`

Cropped & upscaled versions go into: `artifacts/hairstylist-portfolio/public/images/portfolio/{category}/exports/{format}/`

The website currently uses the un-cropped originals as placeholders. When you have your final upscaled + cropped versions ready, drop them into the correct folder below with the **exact filename** shown. No code changes needed.

---

## Folder Structure

```
public/images/
├── hero-bg.png                          ← Homepage hero (full-width, ~1920x1080 or larger)
├── about-portrait.png                   ← About page portrait (tall, ~800x1200)
├── portfolio/
│   ├── cover/exports/
│   │   ├── 3x4/   ← Gallery grid images (portrait 3:4 ratio, ~600x800)
│   │   ├── 4x5/   ← Editorial layout images (portrait 4:5 ratio, ~640x800)
│   │   └── featured/ ← Category cover image (wide, ~1200x800)
│   ├── editorial/exports/
│   │   ├── 3x4/
│   │   ├── 4x5/
│   │   └── featured/
│   ├── red-carpet/exports/
│   │   ├── 3x4/
│   │   ├── 4x5/
│   │   └── featured/
│   ├── beauty/exports/
│   │   ├── 3x4/
│   │   ├── 4x5/
│   │   └── featured/
│   └── commercial-ecom/exports/
│       ├── 3x4/
│       ├── 4x5/
│       └── featured/
```

---

## Aspect Ratio Guide

| Format | Ratio | Recommended Size | Used For |
|--------|-------|-----------------|----------|
| `3x4` | 3:4 portrait | 600 x 800 px | Gallery grids, project thumbnails |
| `4x5` | 4:5 portrait | 640 x 800 px | Editorial layouts, category pages |
| `featured` | ~3:2 landscape | 1200 x 800 px | Category cover images, homepage strip |

---

## Special Images (Non-Portfolio)

| Filename | Location | Used On | Notes |
|----------|----------|---------|-------|
| `hero-bg.png` | `public/images/` | Homepage hero | Full-width cinematic image, at least 1920x1080 |
| `about-portrait.png` | `public/images/` | About page | Tall portrait, currently 1.2 MB |
| `opengraph.jpg` | `public/` | Social sharing preview | 1200x630 recommended |
| `favicon.svg` | `public/` | Browser tab icon | Already set |

---

## Homepage Editorial Strip (4 Images)

These 4 images appear in the animated strip below the hero. They use `featured` crops.

| # | Category | Filename | Folder |
|---|----------|----------|--------|
| 1 | Editorial | `editorial_2021_aurora-james_grazia-usa_34.jpg` | `editorial/exports/featured/` |
| 2 | Red Carpet | `redcarpet_2022_saniyya-sidney_hca-awards_09.jpg` | `red-carpet/exports/featured/` |
| 3 | Beauty | `beauty_2018_duckie-thot_harpers-bazaar_20.jpg` | `beauty/exports/featured/` |
| 4 | Commercial | `ecom_2020_veronika-vilim_le-specs_01.jpg` | `commercial-ecom/exports/featured/` |

---

## COVERS (9 images)

**Category cover** (featured format):

| Filename | Folder | Source Original |
|----------|--------|----------------|
| `cover_2022_gottmik_coveteur_09.jpg` | `cover/exports/featured/` | ✅ Match |

**Gallery images** (3x4 format):

| # | Filename | Folder | Source Original |
|---|----------|--------|----------------|
| 1 | `cover_2018_duckie-thot_harpers-bazaar_01.jpg` | `cover/exports/3x4/` | ✅ Match |
| 2 | `cover_2018_duckie-thot_wonderland_02.jpg` | `cover/exports/3x4/` | ✅ Match |
| 3 | `cover_2018_duckie-thot_stylist-uk_03.jpg` | `cover/exports/3x4/` | ✅ Match |
| 4 | `cover_2021_kylie-bunbury_emmy-magazine_04.jpg` | `cover/exports/3x4/` | ✅ Match |
| 5 | `cover_2022_alisha-wainwright_photobook_05.jpg` | `cover/exports/3x4/` | ✅ Match |
| 6 | `cover_2020_gugu-mbatha-raw_variety_06.jpg` | `cover/exports/3x4/` | ✅ Match |
| 7 | `cover_2018_duckie-thot-jazzelle_chic-album_07.jpg` | `cover/exports/3x4/` | ✅ Match |
| 8 | `cover_2022_aurora-james_glamour_08.jpg` | `cover/exports/3x4/` | ✅ Match |
| 9 | `cover_2022_gottmik_coveteur_09.jpg` | `cover/exports/3x4/` | ✅ Match |

---

## EDITORIAL (20 images)

**Category cover** (featured format):

| Filename | Folder | Source Original |
|----------|--------|----------------|
| `editorial_2021_aurora-james_grazia-usa_34.jpg` | `editorial/exports/featured/` | ✅ Match |

**Gallery images** (4x5 format):

| # | Filename | Folder | Source Original |
|---|----------|--------|----------------|
| 1 | `editorial_2018_duckie-thot_anais-bodysuits_22.jpg` | `editorial/exports/4x5/` | ✅ Match |
| 2 | `editorial_2018_duckie-thot_anais-bodysuits_23.jpg` | `editorial/exports/4x5/` | ✅ Match |
| 3 | `editorial_2018_duckie-thot_harpers-bazaar-mexico_24.jpg` | `editorial/exports/4x5/` | ✅ Match |
| 4 | `editorial_2021_arica-himmel_photobook_25.jpg` | `editorial/exports/4x5/` | ✅ Match |
| 5 | `editorial_2021_saniyya-sidney_refinery29_26.jpg` | `editorial/exports/4x5/` | ✅ Match |
| 6 | `editorial_2021_saniyya-demi_refinery29_27.jpg` | `editorial/exports/4x5/` | ✅ Match |
| 7 | `editorial_2018_henson_micaiah-carter_28.jpg` | `editorial/exports/4x5/` | ✅ Match |
| 8 | `editorial_2021_salem-mitchell_schon-magazine_29.jpg` | `editorial/exports/4x5/` | ✅ Match |
| 9 | `editorial_2021_salem-mitchell_schon-magazine_30.jpg` | `editorial/exports/4x5/` | ✅ Match |
| 10 | `editorial_2021_alyah-chanelle-scott_rollacoaster_31.jpg` | `editorial/exports/4x5/` | ✅ Match |
| 11 | `editorial_2021_alyah-chanelle-scott_rollacoaster_32.jpg` | `editorial/exports/4x5/` | ✅ Match |
| 12 | `editorial_2022_alisha-wainwright_photobook_33.jpg` | `editorial/exports/4x5/` | ✅ Match |
| 13 | `editorial_2021_aurora-james_grazia-usa_34.jpg` | `editorial/exports/4x5/` | ✅ Match |
| 14 | `editorial_2021_aurora-james_grazia-usa_35.jpg` | `editorial/exports/4x5/` | ✅ Match |
| 15 | `editorial_2021_kylie-bunbury_emmy-magazine_36.jpg` | `editorial/exports/4x5/` | ✅ Match |
| 16 | `editorial_2021_hailey-kilgore_contents-beauty_37.jpg` | `editorial/exports/4x5/` | ✅ Match |
| 17 | `editorial_2021_gugu-mbatha-raw_variety_38.jpg` | `editorial/exports/4x5/` | ✅ Match |
| 18 | `editorial_2019_elaine-welteroth_elle-uk_39.jpg` | `editorial/exports/4x5/` | ✅ Match |
| 19 | `editorial_2018_twins_lofficiel-malaysia_40.jpg` | `editorial/exports/4x5/` | ✅ Match |

Note: `editorial_2018_twins_lofficiel-malaysia_41.jpg` exists in source-assets but is not currently used by the website.

---

## RED CARPET (18 images)

**Category cover** (featured format):

| Filename | Folder | Source Original |
|----------|--------|----------------|
| `redcarpet_2022_saniyya-sidney_naacp-awards_03.jpg` | `red-carpet/exports/featured/` | ✅ Match |

**Gallery images** (3x4 format):

| # | Filename (website expects) | Folder | Source Original | Status |
|---|---------------------------|--------|----------------|--------|
| 1 | `redcarpet_2022_ebony-obsidian_red-carpet_01.jpg` | `red-carpet/exports/3x4/` | ✅ Match | |
| 2 | `redcarpet_2022_ebony-obsidian_red-carpet_02.jpg` | `red-carpet/exports/3x4/` | ✅ Match | |
| 3 | `redcarpet_2022_saniyya-sidney_naacp-awards_03.jpg` | `red-carpet/exports/3x4/` | ✅ Match | |
| 4 | `redcarpet_2018_aurora-james-elaine-welteroth_red-carpet_04.jpg` | `red-carpet/exports/3x4/` | ⚠️ Source is `redcarpet_unknown_aurora-james-elaine-welteroth_red-carpet_04.jpg` |
| 5 | `redcarpet_2021_elaine-welteroth_project-runway_05.jpg` | `red-carpet/exports/3x4/` | ✅ Match | |
| 6 | `redcarpet_2019_aurora-james_met-gala_06.jpg` | `red-carpet/exports/3x4/` | ✅ Match | |
| 7 | `redcarpet_2023_aurora-james_vanity-fair_07.jpg` | `red-carpet/exports/3x4/` | ✅ Match | |
| 8 | `redcarpet_2021_liesl-tommy_deadline-contenders_08.jpg` | `red-carpet/exports/3x4/` | ✅ Match | |
| 9 | `redcarpet_2022_saniyya-sidney_hca-awards_09.jpg` | `red-carpet/exports/3x4/` | ✅ Match | |
| 10 | `redcarpet_2019_chloe-coleman_red-carpet_10.jpg` | `red-carpet/exports/3x4/` | ⚠️ Source is `redcarpet_unknown_chloe-coleman_red-carpet_10.jpg` |
| 11 | `redcarpet_2022_mallori-johnson_kindred-premiere_11.jpg` | `red-carpet/exports/3x4/` | ✅ Match | |
| 12 | `redcarpet_2021_brittany-ogrady_sag-panel_12.jpg` | `red-carpet/exports/3x4/` | ✅ Match | |
| 13 | `redcarpet_2019_rihanna_bet-awards_13.jpg` | `red-carpet/exports/3x4/` | ✅ Match | |
| 14 | `redcarpet_2018_lupita-nyongo_ace-awards_14.jpg` | `red-carpet/exports/3x4/` | ✅ Match | |
| 15 | `redcarpet_2022_meena-harris_press_15.jpg` | `red-carpet/exports/3x4/` | ✅ Match | |
| 16 | `redcarpet_2022_billy-porter_city-of-hope_16.jpg` | `red-carpet/exports/3x4/` | ✅ Match | |
| 17 | `redcarpet_2022_billy-porter_spirit-day_17.jpg` | `red-carpet/exports/3x4/` | ✅ Match | |
| 18 | `redcarpet_2019_lizzo_the-daily-show_18.jpg` | `red-carpet/exports/3x4/` | ⚠️ Source is `redcarpet_unknown_lizzo_the-daily-show_18.jpg` |

---

## BEAUTY (13 images)

**Category cover** (featured format):

| Filename | Folder | Source Original |
|----------|--------|----------------|
| `beauty_2021_carmen-solomons_studio_11.jpg` | `beauty/exports/featured/` | ✅ Match |

**Gallery images** (3x4 format):

| # | Filename (website expects) | Folder | Source Original | Status |
|---|---------------------------|--------|----------------|--------|
| 1 | `beauty_2021_carmen-solomons_studio_11.jpg` | `beauty/exports/3x4/` | ✅ Match | |
| 2 | `beauty_2021_carmen-solomons_studio_12.jpg` | `beauty/exports/3x4/` | ✅ Match | |
| 3 | `beauty_2021_chloe-coleman_gunpowder-milkshake_13.jpg` | `beauty/exports/3x4/` | ✅ Match | |
| 4 | `beauty_2018_lupita-nyongo_ace-awards_14.jpg` | `beauty/exports/3x4/` | ✅ Match | |
| 5 | `beauty_rihanna_crop-over_15.jpg` | `beauty/exports/3x4/` | ✅ Match | |
| 6 | `beauty_2021_thuso-mbedu_underground-railroad_16.jpg` | `beauty/exports/3x4/` | ✅ Match | |
| 7 | `beauty_2017_liesl-tommy_crafted_17.jpg` | `beauty/exports/3x4/` | ⚠️ Source is `beauty_2021_liesl-tommy_crafted_17.jpg` |
| 8 | `beauty_2019_rihanna_savage-fenty_18.jpg` | `beauty/exports/3x4/` | ✅ Match | |
| 9 | `beauty_2018_lizzo_paper-magazine_19.jpg` | `beauty/exports/3x4/` | ✅ Match | |
| 10 | `beauty_2018_duckie-thot_harpers-bazaar_20.jpg` | `beauty/exports/3x4/` | ✅ Match | |
| 11 | `beauty_2018_duckie-thot_harpers-bazaar_21.jpg` | `beauty/exports/3x4/` | ✅ Match | |
| 12 | `beauty_2018_duckie-thot_harpers-bazaar_22.jpg` | `beauty/exports/3x4/` | ✅ Match | |
| 13 | `beauty_2018_duckie-thot_harpers-bazaar_23.jpg` | `beauty/exports/3x4/` | ✅ Match | |

---

## COMMERCIAL / ECOM (8 images)

**Category cover** (featured format):

| Filename | Folder | Source Original |
|----------|--------|----------------|
| `ecom_2019_tabria-majors_savage-x-fenty_02.jpg` | `commercial-ecom/exports/featured/` | ✅ Match |

**Gallery images** (4x5 format):

| # | Filename (website expects) | Folder | Source Original | Status |
|---|---------------------------|--------|----------------|--------|
| 1 | `ecom_2020_veronika-vilim_le-specs_01.jpg` | `commercial-ecom/exports/4x5/` | ✅ Match | |
| 2 | `ecom_2019_tabria-majors_savage-x-fenty_02.jpg` | `commercial-ecom/exports/4x5/` | ✅ Match | |
| 3 | `ecom_2019_nina-marie-daniele-and-models_savage-x-fenty_03.jpg` | `commercial-ecom/exports/4x5/` | ✅ Match | |
| 4 | `ecom_2019_nina-marie-daniele_savage-x-fenty_04.jpg` | `commercial-ecom/exports/4x5/` | ✅ Match | |
| 5 | `ecom_2018_mical-bockru_brother-vellies_05.jpg` | `commercial-ecom/exports/4x5/` | ⚠️ Source is `ecom_unknown_mical-bockru_brother-vellies_05.jpg` |
| 6 | `ecom_2018_mical-bockru_brother-vellies_06.jpg` | `commercial-ecom/exports/4x5/` | ⚠️ Source is `ecom_unknown_mical-bockru_brother-vellies_06.jpg` |
| 7 | `ecom_2018_ebony-riley-mical-bockru_brother-vellies_07.jpg` | `commercial-ecom/exports/4x5/` | ⚠️ Source is `ecom_unknown_ebony-riley-mical-bockru_brother-vellies_07.jpg` |
| 8 | `ecom_2020_lisa-rinna_christian-cowan_10.jpg` | `commercial-ecom/exports/4x5/` | ✅ Match | |

---

## ⚠️ FILENAME MISMATCHES (7 total)

These source originals use `unknown` for the year, but the website code expects a specific year. When you export your upscaled versions, use the **website filename** (left column) — not the source original name.

| Website expects (use this name) | Source original (current name on GitHub) |
|-------------------------------|----------------------------------------|
| `beauty_2017_liesl-tommy_crafted_17.jpg` | `beauty_2021_liesl-tommy_crafted_17.jpg` |
| `ecom_2018_mical-bockru_brother-vellies_05.jpg` | `ecom_unknown_mical-bockru_brother-vellies_05.jpg` |
| `ecom_2018_mical-bockru_brother-vellies_06.jpg` | `ecom_unknown_mical-bockru_brother-vellies_06.jpg` |
| `ecom_2018_ebony-riley-mical-bockru_brother-vellies_07.jpg` | `ecom_unknown_ebony-riley-mical-bockru_brother-vellies_07.jpg` |
| `redcarpet_2018_aurora-james-elaine-welteroth_red-carpet_04.jpg` | `redcarpet_unknown_aurora-james-elaine-welteroth_red-carpet_04.jpg` |
| `redcarpet_2019_chloe-coleman_red-carpet_10.jpg` | `redcarpet_unknown_chloe-coleman_red-carpet_10.jpg` |
| `redcarpet_2019_lizzo_the-daily-show_18.jpg` | `redcarpet_unknown_lizzo_the-daily-show_18.jpg` |

---

## Quick-Start Workflow

1. Open the original from `source-assets/originals/{category}/`
2. Upscale and crop to the correct aspect ratio (see ratio guide above)
3. Save with the **exact filename** from the "Website expects" column
4. Drop into the correct `exports/{format}/` folder
5. The website picks it up automatically — no code changes needed

## Total Image Count

| Category | Gallery | Cover | Homepage Strip | Total |
|----------|---------|-------|----------------|-------|
| Covers | 9 | 1 | — | 9 |
| Editorial | 19 | 1 | 1 | 20 |
| Red Carpet | 18 | 1 | 1 | 18 |
| Beauty | 13 | 1 | 1 | 13 |
| Commercial | 8 | 1 | 1 | 8 |
| Hero | — | — | — | 1 |
| About Portrait | — | — | — | 1 |
| **Total unique images** | | | | **~70** |
