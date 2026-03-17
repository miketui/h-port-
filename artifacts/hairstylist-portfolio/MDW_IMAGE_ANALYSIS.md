# MDW Portfolio — Image Upscaling & Enhancement Analysis

Every source image was measured against what the website actually needs at retina (2x) resolution. Images are graded by how much work they need.

---

## How to Read This Report

- **Retina target** = the ideal pixel size for sharp display on modern screens (2x CSS pixels)
- **Upscale needed** = how much larger the image needs to become (e.g. 1.25x = 25% bigger)
- **Heavy crop** = the source aspect ratio is very different from what the website shows, meaning a lot of the image gets cut off when fitted into the frame

---

## CRITICAL — Hero & About Portrait

These two images are the most prominent on the entire site and both need significant upscaling.

| Image | Current Size | Retina Target | Upscale Needed |
|-------|-------------|---------------|----------------|
| **hero-bg.png** | 1408 x 768 | 3840 x 2160 | **2.81x** |
| **about-portrait.png** | 896 x 1280 | 1600 x 2400 | **1.88x** |

**hero-bg.png** is the single most important image — it fills the entire screen on load. At 1408px wide it will look soft/blurry on any laptop or desktop. Needs to be upscaled to at least 2800px wide (ideally 3840px for 4K screens).

**about-portrait.png** fills nearly half the About page. At 896px wide it will look noticeably soft on retina displays. Needs upscaling to at least 1600px wide.

---

## HIGH PRIORITY — 13 Portfolio Images

These need upscaling, heavy cropping, or both. They will look noticeably degraded on the website without processing.

### Need Upscaling + Portrait-to-Landscape Crop (Featured/Cover Use)

These are portrait photos being used as landscape "featured" images (category covers or homepage strip). They lose significant content when cropped to landscape AND need upscaling afterward.

| Image | Source Size | After Crop | Retina Target | Upscale | Used As |
|-------|-----------|-----------|---------------|---------|---------|
| beauty_2018_duckie-thot_harpers-bazaar_20.jpg | 1920x2325 | 1920x1280 | 2400x1600 | 1.25x | Homepage strip |
| beauty_2021_carmen-solomons_studio_11.jpg | 1920x2014 | 1920x1280 | 2400x1600 | 1.25x | Beauty category cover |
| ecom_2020_veronika-vilim_le-specs_01.jpg | 1920x1952 | 1920x1280 | 2400x1600 | 1.25x | Homepage strip |
| cover_2022_gottmik_coveteur_09.jpg | 1920x2390 | 1920x1280 | 2400x1600 | 1.25x | Covers category cover |
| editorial_2021_aurora-james_grazia-usa_34.jpg | 1920x2409 | 1920x1280 | 2400x1600 | 1.25x | Editorial category cover + homepage strip |
| redcarpet_2022_saniyya-sidney_hca-awards_09.jpg | 1920x2501 | 1920x1280 | 2400x1600 | 1.25x | Homepage strip |
| redcarpet_2022_saniyya-sidney_naacp-awards_03.jpg | 1920x2501 | 1920x1280 | 2400x1600 | 1.25x | Red Carpet category cover |
| ecom_2019_tabria-majors_savage-x-fenty_02.jpg | 1920x1542 | 1920x1280 | 2400x1600 | 1.25x | Commercial category cover |

### Need Upscaling + Heavy Crop (Gallery Use)

These are landscape or near-square images being fitted into portrait gallery frames. They lose a lot of width when cropped AND need upscaling.

| Image | Source Size | Source Ratio | Target Ratio | After Crop | Retina Target | Upscale |
|-------|-----------|-------------|-------------|-----------|---------------|---------|
| beauty_2019_rihanna_savage-fenty_18.jpg | 1920x1245 | 1.54 (landscape) | 0.75 (3:4 portrait) | 934x1245 | 1200x1600 | 1.29x |
| editorial_2018_twins_lofficiel-malaysia_40.jpg | 1920x1246 | 1.54 (landscape) | 0.80 (4:5 portrait) | 997x1246 | 1280x1600 | 1.28x |
| editorial_2021_arica-himmel_photobook_25.jpg | 1920x1255 | 1.53 (landscape) | 0.80 (4:5 portrait) | 1004x1255 | 1280x1600 | 1.27x |
| ecom_2019_nina-marie-daniele-and-models_savage-x-fenty_03.jpg | 1920x1542 | 1.25 (landscape) | 0.80 (4:5 portrait) | 1234x1542 | 1280x1600 | 1.04x |
| ecom_2019_nina-marie-daniele_savage-x-fenty_04.jpg | 1920x1542 | 1.25 (landscape) | 0.80 (4:5 portrait) | 1234x1542 | 1280x1600 | 1.04x |

---

## MEDIUM PRIORITY — 22 Portfolio Images

These have moderate aspect ratio mismatches that require noticeable cropping, or need minor upscaling. They'll work but won't look their sharpest.

### Need Moderate Cropping (no upscaling needed)

The source images are large enough but their aspect ratio means ~20-35% of the image gets cropped off to fit the website frame.

| Image | Source Size | Source Ratio | Target Ratio | Crop Loss |
|-------|-----------|-------------|-------------|-----------|
| beauty_2018_lupita-nyongo_ace-awards_14.jpg | 1920x1909 | 1.01 (square) | 0.75 (3:4) | ~25% width lost |
| beauty_2021_carmen-solomons_studio_12.jpg | 1920x2014 | 0.95 | 0.75 (3:4) | ~20% width lost |
| beauty_2021_liesl-tommy_crafted_17.jpg | 1920x2014 | 0.95 | 0.75 (3:4) | ~20% width lost |
| cover_2018_duckie-thot-jazzelle_chic-album_07.jpg | 1920x1909 | 1.01 (square) | 0.75 (3:4) | ~25% width lost |
| cover_2021_kylie-bunbury_emmy-magazine_04.jpg | 1920x2014 | 0.95 | 0.75 (3:4) | ~20% width lost |
| editorial_2018_duckie-thot_anais-bodysuits_22.jpg | 1920x1909 | 1.01 (square) | 0.80 (4:5) | ~20% width lost |
| editorial_2018_duckie-thot_anais-bodysuits_23.jpg | 1920x1909 | 1.01 (square) | 0.80 (4:5) | ~20% width lost |
| editorial_2021_alyah-chanelle-scott_rollacoaster_31.jpg | 1920x1952 | 0.98 | 0.80 (4:5) | ~18% width lost |
| editorial_2021_alyah-chanelle-scott_rollacoaster_32.jpg | 1920x1952 | 0.98 | 0.80 (4:5) | ~18% width lost |
| editorial_2021_gugu-mbatha-raw_variety_38.jpg | 1920x1952 | 0.98 | 0.80 (4:5) | ~18% width lost |
| editorial_2021_hailey-kilgore_contents-beauty_37.jpg | 1920x2014 | 0.95 | 0.80 (4:5) | ~15% width lost |
| editorial_2021_kylie-bunbury_emmy-magazine_36.jpg | 1920x2014 | 0.95 | 0.80 (4:5) | ~15% width lost |
| editorial_2021_saniyya-demi_refinery29_27.jpg | 1920x2014 | 0.95 | 0.80 (4:5) | ~15% width lost |
| editorial_2021_saniyya-sidney_refinery29_26.jpg | 1920x2014 | 0.95 | 0.80 (4:5) | ~15% width lost |
| redcarpet_2018_lupita-nyongo_ace-awards_14.jpg | 1920x1909 | 1.01 (square) | 0.75 (3:4) | ~25% width lost |
| redcarpet_2019_rihanna_bet-awards_13.jpg | 1920x1952 | 0.98 | 0.75 (3:4) | ~23% width lost |
| redcarpet_2021_liesl-tommy_deadline-contenders_08.jpg | 1920x2014 | 0.95 | 0.75 (3:4) | ~20% width lost |
| redcarpet_unknown_aurora-james-elaine-welteroth_red-carpet_04.jpg | 1920x1909 | 1.01 (square) | 0.75 (3:4) | ~25% width lost |
| redcarpet_unknown_lizzo_the-daily-show_18.jpg | 1920x2054 | 0.93 | 0.75 (3:4) | ~18% width lost |

### Need Minor Upscaling + Moderate Crop

| Image | Source Size | After Crop | Retina Target | Upscale |
|-------|-----------|-----------|---------------|---------|
| ecom_2020_lisa-rinna_christian-cowan_10.jpg | 1510x1536 | 1229x1536 | 1280x1600 | 1.04x |
| ecom_unknown_ebony-riley-mical-bockru_brother-vellies_07.jpg | 1920x1909 | (ratio mismatch) | — | crop only |

---

## LOW PRIORITY — 3 Portfolio Images

These are slightly under retina target but will look fine on most screens. Only noticeable on high-end 4K displays.

| Image | Source Size | After Crop | Retina Target | Upscale |
|-------|-----------|-----------|---------------|---------|
| beauty_2021_thuso-mbedu_underground-railroad_16.jpg | 1170x1392 | 1044x1392 | 1200x1600 | 1.15x |
| cover_2018_duckie-thot_harpers-bazaar_01.jpg | 1200x1437 | 1078x1437 | 1200x1600 | 1.11x |
| redcarpet_2019_aurora-james_met-gala_06.jpg | 1170x1468 | 1101x1468 | 1200x1600 | 1.09x |

---

## NO ISSUES — 29 Portfolio Images

These are large enough and close enough to the target aspect ratio. A simple crop is all they need — no upscaling required.

- beauty_2018_duckie-thot_harpers-bazaar_21.jpg (1920x2325)
- beauty_2018_duckie-thot_harpers-bazaar_22.jpg (1920x2635)
- beauty_2018_duckie-thot_harpers-bazaar_23.jpg (1920x2202)
- beauty_2018_lizzo_paper-magazine_19.jpg (1920x2485)
- beauty_2021_chloe-coleman_gunpowder-milkshake_13.jpg (1920x2284)
- beauty_rihanna_crop-over_15.jpg (1920x2325)
- ecom_unknown_mical-bockru_brother-vellies_05.jpg (1920x2348)
- ecom_unknown_mical-bockru_brother-vellies_06.jpg (1920x2348)
- cover_2018_duckie-thot_stylist-uk_03.jpg (1920x2344)
- cover_2020_gugu-mbatha-raw_variety_06.jpg (1920x2367)
- cover_2022_alisha-wainwright_photobook_05.jpg (1920x2501)
- cover_2022_aurora-james_glamour_08.jpg (1920x2753)
- editorial_2018_duckie-thot_harpers-bazaar-mexico_24.jpg (1920x2325)
- editorial_2018_henson_micaiah-carter_28.jpg (1920x2348)
- editorial_2019_elaine-welteroth_elle-uk_39.jpg (1920x2409)
- editorial_2021_aurora-james_grazia-usa_35.jpg (1920x2409)
- editorial_2021_salem-mitchell_schon-magazine_29.jpg (1920x2284)
- editorial_2021_salem-mitchell_schon-magazine_30.jpg (1920x2284)
- editorial_2022_alisha-wainwright_photobook_33.jpg (1920x2501)
- redcarpet_2021_brittany-ogrady_sag-panel_12.jpg (1920x2501)
- redcarpet_2021_elaine-welteroth_project-runway_05.jpg (1920x2348)
- redcarpet_2022_billy-porter_city-of-hope_16.jpg (1920x2753)
- redcarpet_2022_billy-porter_spirit-day_17.jpg (1920x2753)
- redcarpet_2022_ebony-obsidian_red-carpet_01.jpg (1920x2501)
- redcarpet_2022_ebony-obsidian_red-carpet_02.jpg (1920x2753)
- redcarpet_2022_mallori-johnson_kindred-premiere_11.jpg (1920x2753)
- redcarpet_2022_meena-harris_press_15.jpg (1920x2753)
- redcarpet_2023_aurora-james_vanity-fair_07.jpg (1920x2182)
- redcarpet_unknown_chloe-coleman_red-carpet_10.jpg (1920x2284)

---

## Summary

| Priority | Count | What's Needed |
|----------|-------|---------------|
| **CRITICAL** | 2 | Hero + About portrait — substantial upscaling (1.9x – 2.8x) |
| **HIGH** | 13 | Upscaling 1.04x–1.29x and/or portrait-to-landscape crop with content loss |
| **MEDIUM** | 22 | Heavy cropping (15–25% content loss) but no upscaling needed |
| **LOW** | 3 | Minor upscaling (1.09x–1.15x) — fine for most screens |
| **No issues** | 29 | Ready to crop and use as-is |
| **Total** | **69** | |

## Recommended Processing Order

1. **Hero image** — most visible, most undersized, do this first
2. **About portrait** — second most prominent single image
3. **8 featured/cover images** — these are category covers and homepage strip; prominent, landscape crop from portrait source
4. **5 gallery images with upscaling needed** — landscape originals being squeezed into portrait frames
5. **22 medium-priority crops** — use smart/subject-aware cropping to minimize content loss
6. **3 low-priority** — upscale slightly for retina crispness
7. **29 no-issue images** — simple center crop to target ratio, no upscaling
