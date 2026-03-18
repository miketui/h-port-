export type Project = {
  id: string;
  title: string;
  client: string;
  year: string;
  imageUrl: string;
  imageAlt: string;
  filename: string;
  photographer?: string;
  publication?: string;
  link?: string;
};

export type Category = {
  id: string;
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  projects: Project[];
};

const img = (category: string, filename: string): string =>
  `${import.meta.env.BASE_URL}images/portfolio/${category}/exports/3x4/${filename}`;

const cover4x5 = (category: string, filename: string): string =>
  `${import.meta.env.BASE_URL}images/portfolio/${category}/exports/4x5/${filename}`;

const coverImg = (category: string, filename: string): string =>
  `${import.meta.env.BASE_URL}images/portfolio/${category}/exports/featured/${filename}`;

export const PORTFOLIO_CATEGORIES: Category[] = [
  {
    id: "0",
    slug: "cover",
    title: "Covers",
    description: "Magazine covers spanning the world's most prestigious publications.",
    coverImage: coverImg("cover", "cover_2018_duckie-thot_harpers-bazaar_01.jpg"),
    projects: [
      {
        id: "cov1",
        title: "Harper's Bazaar",
        client: "Duckie Thot",
        year: "2018",
        filename: "cover_2018_duckie-thot_harpers-bazaar_01.jpg",
        imageUrl: img("cover", "cover_2018_duckie-thot_harpers-bazaar_01.jpg"),
        imageAlt: "Duckie Thot Harper's Bazaar Cover",
        publication: "Harper's Bazaar"
      },
      {
        id: "cov2",
        title: "Wonderland",
        client: "Duckie Thot",
        year: "2018",
        filename: "cover_2018_duckie-thot_wonderland_02.jpg",
        imageUrl: img("cover", "cover_2018_duckie-thot_wonderland_02.jpg"),
        imageAlt: "Duckie Thot Wonderland Cover",
        publication: "Wonderland"
      },
      {
        id: "cov3",
        title: "Stylist UK",
        client: "Duckie Thot",
        year: "2018",
        filename: "cover_2018_duckie-thot_stylist-uk_03.jpg",
        imageUrl: img("cover", "cover_2018_duckie-thot_stylist-uk_03.jpg"),
        imageAlt: "Duckie Thot Stylist UK Cover",
        publication: "Stylist UK"
      },
      {
        id: "cov4",
        title: "Emmy Magazine",
        client: "Kylie Bunbury",
        year: "2021",
        filename: "cover_2021_kylie-bunbury_emmy-magazine_04.jpg",
        imageUrl: img("cover", "cover_2021_kylie-bunbury_emmy-magazine_04.jpg"),
        imageAlt: "Kylie Bunbury Emmy Magazine Cover",
        publication: "Emmy Magazine"
      },
      {
        id: "cov5",
        title: "PhotoBook Magazine",
        client: "Alisha Wainwright",
        year: "2022",
        filename: "cover_2022_alisha-wainwright_photobook_05.jpg",
        imageUrl: img("cover", "cover_2022_alisha-wainwright_photobook_05.jpg"),
        imageAlt: "Alisha Wainwright PhotoBook Cover",
        publication: "PhotoBook Magazine",
        link: "https://www.photobookmagazine.com/features/alisha-wainwright"
      },
      {
        id: "cov6",
        title: "Variety",
        client: "Gugu Mbatha-Raw",
        year: "2020",
        filename: "cover_2020_gugu-mbatha-raw_variety_06.jpg",
        imageUrl: img("cover", "cover_2020_gugu-mbatha-raw_variety_06.jpg"),
        imageAlt: "Gugu Mbatha-Raw Variety Cover",
        publication: "Variety"
      },
      {
        id: "cov7",
        title: "Chic Album Cover",
        client: "Duckie Thot & Jazzelle",
        year: "2018",
        filename: "cover_2018_duckie-thot-jazzelle_chic-album_07.jpg",
        imageUrl: img("cover", "cover_2018_duckie-thot-jazzelle_chic-album_07.jpg"),
        imageAlt: "Duckie Thot and Jazzelle Neil Rogers Chic Album Cover",
        publication: "Neil Rogers"
      },
      {
        id: "cov8",
        title: "Glamour",
        client: "Aurora James",
        year: "2022",
        filename: "cover_2022_aurora-james_glamour_08.jpg",
        imageUrl: img("cover", "cover_2022_aurora-james_glamour_08.jpg"),
        imageAlt: "Aurora James Glamour Cover",
        publication: "Glamour",
        link: "https://www.glamour.com/story/aurora-james-glamour-women-of-the-year-2022"
      },
      {
        id: "cov9",
        title: "Coveteur",
        client: "Gottmik",
        year: "2022",
        filename: "cover_2022_gottmik_coveteur_09.jpg",
        imageUrl: img("cover", "cover_2022_gottmik_coveteur_09.jpg"),
        imageAlt: "Gottmik Coveteur Cover",
        publication: "Coveteur"
      },
    ]
  },
  {
    id: "1",
    slug: "editorial",
    title: "Editorial",
    description: "Fashion editorial storytelling spanning the world's leading publications — from conceptual fashion stories to intimate portrait series.",
    coverImage: coverImg("editorial", "editorial_2021_salem-mitchell_schon-magazine_29.jpg"),
    projects: [
      {
        id: "e1",
        title: "Studio Portrait",
        client: "Carmen Solomons",
        year: "2021",
        filename: "beauty_2021_carmen-solomons_studio_11.jpg",
        imageUrl: img("beauty", "beauty_2021_carmen-solomons_studio_11.jpg"),
        imageAlt: "Carmen Solomons studio portrait"
      },
      {
        id: "e2",
        title: "Anaïs Bodysuits I",
        client: "Duckie Thot",
        year: "2018",
        filename: "editorial_2018_duckie-thot_anais-bodysuits_22.jpg",
        imageUrl: cover4x5("editorial", "editorial_2018_duckie-thot_anais-bodysuits_22.jpg"),
        imageAlt: "Duckie Thot Anaïs Bodysuits editorial"
      },
      {
        id: "e3",
        title: "Anaïs Bodysuits II",
        client: "Duckie Thot",
        year: "2018",
        filename: "editorial_2018_duckie-thot_anais-bodysuits_23.jpg",
        imageUrl: cover4x5("editorial", "editorial_2018_duckie-thot_anais-bodysuits_23.jpg"),
        imageAlt: "Duckie Thot Anaïs Bodysuits editorial II"
      },
      {
        id: "e4",
        title: "Harper's Bazaar Mexico",
        client: "Duckie Thot",
        year: "2018",
        filename: "editorial_2018_duckie-thot_harpers-bazaar-mexico_24.jpg",
        imageUrl: cover4x5("editorial", "editorial_2018_duckie-thot_harpers-bazaar-mexico_24.jpg"),
        imageAlt: "Duckie Thot Harper's Bazaar Mexico editorial",
        publication: "Harper's Bazaar Mexico"
      },
      {
        id: "e5",
        title: "PhotoBook Magazine",
        client: "Arica Himmel",
        year: "2021",
        filename: "editorial_2021_arica-himmel_photobook_25.jpg",
        imageUrl: cover4x5("editorial", "editorial_2021_arica-himmel_photobook_25.jpg"),
        imageAlt: "Arica Himmel PhotoBook editorial",
        publication: "PhotoBook Magazine"
      },
      {
        id: "e6",
        title: "Refinery29 Feature I",
        client: "Saniyya Sidney",
        year: "2021",
        filename: "editorial_2021_saniyya-sidney_refinery29_26.jpg",
        imageUrl: cover4x5("editorial", "editorial_2021_saniyya-sidney_refinery29_26.jpg"),
        imageAlt: "Saniyya Sidney Refinery29 editorial",
        publication: "Refinery29"
      },
      {
        id: "e7",
        title: "Refinery29 Feature II",
        client: "Saniyya Sidney & Demi Singleton",
        year: "2021",
        filename: "editorial_2021_saniyya-demi_refinery29_27.jpg",
        imageUrl: cover4x5("editorial", "editorial_2021_saniyya-demi_refinery29_27.jpg"),
        imageAlt: "Saniyya Sidney and Demi Singleton Refinery29",
        publication: "Refinery29"
      },
      {
        id: "e8",
        title: "Portrait",
        client: "Henson",
        year: "2018",
        filename: "editorial_2018_henson_micaiah-carter_28.jpg",
        imageUrl: cover4x5("editorial", "editorial_2018_henson_micaiah-carter_28.jpg"),
        imageAlt: "Henson portrait by Micaiah Carter",
        photographer: "Micaiah Carter"
      },
      {
        id: "e9",
        title: "Schön Magazine I",
        client: "Salem Mitchell",
        year: "2021",
        filename: "editorial_2021_salem-mitchell_schon-magazine_29.jpg",
        imageUrl: cover4x5("editorial", "editorial_2021_salem-mitchell_schon-magazine_29.jpg"),
        imageAlt: "Salem Mitchell Schön Magazine editorial",
        publication: "Schön Magazine"
      },
      {
        id: "e10",
        title: "Schön Magazine II",
        client: "Salem Mitchell",
        year: "2021",
        filename: "editorial_2021_salem-mitchell_schon-magazine_30.jpg",
        imageUrl: cover4x5("editorial", "editorial_2021_salem-mitchell_schon-magazine_30.jpg"),
        imageAlt: "Salem Mitchell Schön Magazine editorial II",
        publication: "Schön Magazine"
      },
      {
        id: "e11",
        title: "Rollacoaster Magazine I",
        client: "Alyah Chanelle Scott",
        year: "2021",
        filename: "editorial_2021_alyah-chanelle-scott_rollacoaster_31.jpg",
        imageUrl: cover4x5("editorial", "editorial_2021_alyah-chanelle-scott_rollacoaster_31.jpg"),
        imageAlt: "Alyah Chanelle Scott Rollacoaster Magazine",
        publication: "Rollacoaster Magazine"
      },
      {
        id: "e12",
        title: "Rollacoaster Magazine II",
        client: "Alyah Chanelle Scott",
        year: "2021",
        filename: "editorial_2021_alyah-chanelle-scott_rollacoaster_32.jpg",
        imageUrl: cover4x5("editorial", "editorial_2021_alyah-chanelle-scott_rollacoaster_32.jpg"),
        imageAlt: "Alyah Chanelle Scott Rollacoaster Magazine II",
        publication: "Rollacoaster Magazine"
      },
      {
        id: "e13",
        title: "PhotoBook Magazine",
        client: "Alisha Wainwright",
        year: "2022",
        filename: "editorial_2022_alisha-wainwright_photobook_33.jpg",
        imageUrl: cover4x5("editorial", "editorial_2022_alisha-wainwright_photobook_33.jpg"),
        imageAlt: "Alisha Wainwright PhotoBook Magazine editorial",
        publication: "PhotoBook Magazine",
        link: "https://www.photobookmagazine.com/features/alisha-wainwright"
      },
      {
        id: "e14",
        title: "Aurora Rising I",
        client: "Aurora James",
        year: "2021",
        filename: "editorial_2021_aurora-james_grazia-usa_34.jpg",
        imageUrl: cover4x5("editorial", "editorial_2021_aurora-james_grazia-usa_34.jpg"),
        imageAlt: "Aurora James Grazia USA editorial",
        publication: "Grazia USA",
        link: "https://graziamagazine.com/us/articles/aurora-rising-aurora-james/"
      },
      {
        id: "e15",
        title: "Aurora Rising II",
        client: "Aurora James",
        year: "2021",
        filename: "editorial_2021_aurora-james_grazia-usa_35.jpg",
        imageUrl: cover4x5("editorial", "editorial_2021_aurora-james_grazia-usa_35.jpg"),
        imageAlt: "Aurora James Grazia USA editorial II",
        publication: "Grazia USA",
        link: "https://graziamagazine.com/us/articles/aurora-rising-aurora-james/"
      },
      {
        id: "e16",
        title: "Emmy Magazine",
        client: "Kylie Bunbury",
        year: "2021",
        filename: "editorial_2021_kylie-bunbury_emmy-magazine_36.jpg",
        imageUrl: cover4x5("editorial", "editorial_2021_kylie-bunbury_emmy-magazine_36.jpg"),
        imageAlt: "Kylie Bunbury Emmy Magazine editorial",
        publication: "Emmy Magazine"
      },
      {
        id: "e17",
        title: "ContentsBeauté",
        client: "Hailey Kilgore",
        year: "2021",
        filename: "editorial_2021_hailey-kilgore_contents-beauty_37.jpg",
        imageUrl: cover4x5("editorial", "editorial_2021_hailey-kilgore_contents-beauty_37.jpg"),
        imageAlt: "Hailey Kilgore ContentsBeauté cover",
        publication: "ContentsBeauté"
      },
      {
        id: "e18",
        title: "Variety",
        client: "Gugu Mbatha-Raw",
        year: "2021",
        filename: "editorial_2021_gugu-mbatha-raw_variety_38.jpg",
        imageUrl: cover4x5("editorial", "editorial_2021_gugu-mbatha-raw_variety_38.jpg"),
        imageAlt: "Gugu Mbatha-Raw Variety editorial",
        publication: "Variety"
      },
      {
        id: "e19",
        title: "ELLE UK",
        client: "Elaine Welteroth",
        year: "2019",
        filename: "editorial_2019_elaine-welteroth_elle-uk_39.jpg",
        imageUrl: cover4x5("editorial", "editorial_2019_elaine-welteroth_elle-uk_39.jpg"),
        imageAlt: "Elaine Welteroth ELLE UK editorial",
        publication: "ELLE UK"
      },
      {
        id: "e20",
        title: "L'Officiel Malaysia",
        client: "Najiyah Imani & Marie",
        year: "2018",
        filename: "editorial_2018_twins_lofficiel-malaysia_40.jpg",
        imageUrl: cover4x5("editorial", "editorial_2018_twins_lofficiel-malaysia_40.jpg"),
        imageAlt: "Najiyah Imani and Marie L'Officiel Malaysia editorial",
        publication: "L'Officiel Malaysia"
      },
    ]
  },
  {
    id: "2",
    slug: "red-carpet",
    title: "Red Carpet",
    description: "High-stakes glamour crafted for cinema's biggest stages, award shows, and international galas.",
    coverImage: coverImg("red-carpet", "redcarpet_2022_saniyya-sidney_hca-awards_09.jpg"),
    projects: [
      {
        id: "rc1",
        title: "Red Carpet I",
        client: "Ebony Obsidian",
        year: "2022",
        filename: "redcarpet_2022_ebony-obsidian_red-carpet_01.jpg",
        imageUrl: img("red-carpet", "redcarpet_2022_ebony-obsidian_red-carpet_01.jpg"),
        imageAlt: "Ebony Obsidian red carpet 2022"
      },
      {
        id: "rc2",
        title: "Red Carpet II",
        client: "Ebony Obsidian",
        year: "2022",
        filename: "redcarpet_2022_ebony-obsidian_red-carpet_02.jpg",
        imageUrl: img("red-carpet", "redcarpet_2022_ebony-obsidian_red-carpet_02.jpg"),
        imageAlt: "Ebony Obsidian red carpet 2022 II"
      },
      {
        id: "rc3",
        title: "NAACP Image Awards",
        client: "Saniyya Sidney",
        year: "2022",
        filename: "redcarpet_2022_saniyya-sidney_naacp-awards_03.jpg",
        imageUrl: img("red-carpet", "redcarpet_2022_saniyya-sidney_naacp-awards_03.jpg"),
        imageAlt: "Saniyya Sidney NAACP Image Awards 2022"
      },
      {
        id: "rc4",
        title: "Red Carpet",
        client: "Aurora James & Elaine Welteroth",
        year: "2018",
        filename: "redcarpet_2018_aurora-james-elaine-welteroth_red-carpet_04.jpg",
        imageUrl: img("red-carpet", "redcarpet_2018_aurora-james-elaine-welteroth_red-carpet_04.jpg"),
        imageAlt: "Aurora James and Elaine Welteroth red carpet 2018"
      },
      {
        id: "rc5",
        title: "Project Runway",
        client: "Elaine Welteroth",
        year: "2021",
        filename: "redcarpet_2021_elaine-welteroth_project-runway_05.jpg",
        imageUrl: img("red-carpet", "redcarpet_2021_elaine-welteroth_project-runway_05.jpg"),
        imageAlt: "Elaine Welteroth Project Runway 2021"
      },
      {
        id: "rc6",
        title: "Met Gala",
        client: "Aurora James",
        year: "2019",
        filename: "redcarpet_2019_aurora-james_met-gala_06.jpg",
        imageUrl: img("red-carpet", "redcarpet_2019_aurora-james_met-gala_06.jpg"),
        imageAlt: "Aurora James Met Gala 2019"
      },
      {
        id: "rc7",
        title: "Vanity Fair",
        client: "Aurora James",
        year: "2023",
        filename: "redcarpet_2023_aurora-james_vanity-fair_07.jpg",
        imageUrl: img("red-carpet", "redcarpet_2023_aurora-james_vanity-fair_07.jpg"),
        imageAlt: "Aurora James Vanity Fair 2023",
        publication: "Vanity Fair"
      },
      {
        id: "rc8",
        title: "Deadline Contenders",
        client: "Liesl Tommy",
        year: "2021",
        filename: "redcarpet_2021_liesl-tommy_deadline-contenders_08.jpg",
        imageUrl: img("red-carpet", "redcarpet_2021_liesl-tommy_deadline-contenders_08.jpg"),
        imageAlt: "Liesl Tommy Deadline Contenders 2021"
      },
      {
        id: "rc9",
        title: "HCA Awards",
        client: "Saniyya Sidney",
        year: "2022",
        filename: "redcarpet_2022_saniyya-sidney_hca-awards_09.jpg",
        imageUrl: img("red-carpet", "redcarpet_2022_saniyya-sidney_hca-awards_09.jpg"),
        imageAlt: "Saniyya Sidney HCA Awards 2022"
      },
      {
        id: "rc10",
        title: "Red Carpet",
        client: "Chloe Coleman",
        year: "2019",
        filename: "redcarpet_2019_chloe-coleman_red-carpet_10.jpg",
        imageUrl: img("red-carpet", "redcarpet_2019_chloe-coleman_red-carpet_10.jpg"),
        imageAlt: "Chloe Coleman red carpet 2019"
      },
      {
        id: "rc11",
        title: "Kindred Premiere",
        client: "Mallori Johnson",
        year: "2022",
        filename: "redcarpet_2022_mallori-johnson_kindred-premiere_11.jpg",
        imageUrl: img("red-carpet", "redcarpet_2022_mallori-johnson_kindred-premiere_11.jpg"),
        imageAlt: "Mallori Johnson Kindred Premiere 2022"
      },
      {
        id: "rc12",
        title: "The White Lotus SAG Panel",
        client: "Brittany O'Grady",
        year: "2021",
        filename: "redcarpet_2021_brittany-ogrady_sag-panel_12.jpg",
        imageUrl: img("red-carpet", "redcarpet_2021_brittany-ogrady_sag-panel_12.jpg"),
        imageAlt: "Brittany O'Grady The White Lotus SAG Panel 2021"
      },
      {
        id: "rc13",
        title: "BET Awards",
        client: "Rihanna",
        year: "2019",
        filename: "redcarpet_2019_rihanna_bet-awards_13.jpg",
        imageUrl: img("red-carpet", "redcarpet_2019_rihanna_bet-awards_13.jpg"),
        imageAlt: "Rihanna BET Awards 2019"
      },
      {
        id: "rc14",
        title: "ACE Awards",
        client: "Lupita Nyong'o",
        year: "2018",
        filename: "redcarpet_2018_lupita-nyongo_ace-awards_14.jpg",
        imageUrl: img("red-carpet", "redcarpet_2018_lupita-nyongo_ace-awards_14.jpg"),
        imageAlt: "Lupita Nyong'o ACE Awards 2018"
      },
      {
        id: "rc15",
        title: "Press Event",
        client: "Meena Harris",
        year: "2022",
        filename: "redcarpet_2022_meena-harris_press_15.jpg",
        imageUrl: img("red-carpet", "redcarpet_2022_meena-harris_press_15.jpg"),
        imageAlt: "Meena Harris press event 2022"
      },
      {
        id: "rc16",
        title: "City of Hope Gala",
        client: "Billy Porter",
        year: "2022",
        filename: "redcarpet_2022_billy-porter_city-of-hope_16.jpg",
        imageUrl: img("red-carpet", "redcarpet_2022_billy-porter_city-of-hope_16.jpg"),
        imageAlt: "Billy Porter City of Hope Gala 2022"
      },
      {
        id: "rc17",
        title: "Spirit Day",
        client: "Billy Porter",
        year: "2022",
        filename: "redcarpet_2022_billy-porter_spirit-day_17.jpg",
        imageUrl: img("red-carpet", "redcarpet_2022_billy-porter_spirit-day_17.jpg"),
        imageAlt: "Billy Porter Spirit Day 2022"
      },
      {
        id: "rc18",
        title: "The Daily Show",
        client: "Lizzo",
        year: "2019",
        filename: "redcarpet_2019_lizzo_the-daily-show_18.jpg",
        imageUrl: img("red-carpet", "redcarpet_2019_lizzo_the-daily-show_18.jpg"),
        imageAlt: "Lizzo The Daily Show 2019"
      },
    ]
  },
  {
    id: "3",
    slug: "beauty",
    title: "Beauty",
    description: "Detail-obsessed close-up work that honors texture, radiance, and the artistry of natural hair.",
    coverImage: coverImg("beauty", "beauty_2021_carmen-solomons_studio_11.jpg"),
    projects: [
      {
        id: "b1",
        title: "Studio Portrait I",
        client: "Carmen Solomons",
        year: "2021",
        filename: "beauty_2021_carmen-solomons_studio_11.jpg",
        imageUrl: img("beauty", "beauty_2021_carmen-solomons_studio_11.jpg"),
        imageAlt: "Carmen Solomons studio portrait I"
      },
      {
        id: "b2",
        title: "Studio Portrait II",
        client: "Carmen Solomons",
        year: "2021",
        filename: "beauty_2021_carmen-solomons_studio_12.jpg",
        imageUrl: img("beauty", "beauty_2021_carmen-solomons_studio_12.jpg"),
        imageAlt: "Carmen Solomons studio portrait II"
      },
      {
        id: "b3",
        title: "Gunpowder Milkshake",
        client: "Chloe Coleman",
        year: "2021",
        filename: "beauty_2021_chloe-coleman_gunpowder-milkshake_13.jpg",
        imageUrl: img("beauty", "beauty_2021_chloe-coleman_gunpowder-milkshake_13.jpg"),
        imageAlt: "Chloe Coleman Gunpowder Milkshake beauty"
      },
      {
        id: "b4",
        title: "ACE Awards",
        client: "Lupita Nyong'o",
        year: "2018",
        filename: "beauty_2018_lupita-nyongo_ace-awards_14.jpg",
        imageUrl: img("beauty", "beauty_2018_lupita-nyongo_ace-awards_14.jpg"),
        imageAlt: "Lupita Nyong'o ACE Awards beauty 2018"
      },
      {
        id: "b5",
        title: "Crop Over",
        client: "Rihanna",
        year: "2019",
        filename: "beauty_rihanna_crop-over_15.jpg",
        imageUrl: img("beauty", "beauty_rihanna_crop-over_15.jpg"),
        imageAlt: "Rihanna Crop Over beauty"
      },
      {
        id: "b6",
        title: "Underground Railroad",
        client: "Thuso Mbedu",
        year: "2021",
        filename: "beauty_2021_thuso-mbedu_underground-railroad_16.jpg",
        imageUrl: img("beauty", "beauty_2021_thuso-mbedu_underground-railroad_16.jpg"),
        imageAlt: "Thuso Mbedu Underground Railroad beauty"
      },
      {
        id: "b7",
        title: "Tastemaker Session 2",
        client: "Liesl Tommy",
        year: "2017",
        filename: "beauty_2017_liesl-tommy_crafted_17.jpg",
        imageUrl: img("beauty", "beauty_2017_liesl-tommy_crafted_17.jpg"),
        imageAlt: "Liesl Tommy Crafted Tastemaker Session 2",
        publication: "Crafted"
      },
      {
        id: "b8",
        title: "Savage X Fenty",
        client: "Rihanna",
        year: "2019",
        filename: "beauty_2019_rihanna_savage-fenty_18.jpg",
        imageUrl: img("beauty", "beauty_2019_rihanna_savage-fenty_18.jpg"),
        imageAlt: "Rihanna Savage X Fenty beauty 2019"
      },
      {
        id: "b9",
        title: "Paper Magazine",
        client: "Lizzo",
        year: "2018",
        filename: "beauty_2018_lizzo_paper-magazine_19.jpg",
        imageUrl: img("beauty", "beauty_2018_lizzo_paper-magazine_19.jpg"),
        imageAlt: "Lizzo Paper Magazine beauty 2018",
        publication: "Paper Magazine"
      },
      {
        id: "b10",
        title: "Harper's Bazaar I",
        client: "Duckie Thot",
        year: "2018",
        filename: "beauty_2018_duckie-thot_harpers-bazaar_20.jpg",
        imageUrl: img("beauty", "beauty_2018_duckie-thot_harpers-bazaar_20.jpg"),
        imageAlt: "Duckie Thot Harper's Bazaar beauty I",
        publication: "Harper's Bazaar"
      },
      {
        id: "b11",
        title: "Harper's Bazaar II",
        client: "Duckie Thot",
        year: "2018",
        filename: "beauty_2018_duckie-thot_harpers-bazaar_21.jpg",
        imageUrl: img("beauty", "beauty_2018_duckie-thot_harpers-bazaar_21.jpg"),
        imageAlt: "Duckie Thot Harper's Bazaar beauty II",
        publication: "Harper's Bazaar"
      },
      {
        id: "b12",
        title: "Harper's Bazaar III",
        client: "Duckie Thot",
        year: "2018",
        filename: "beauty_2018_duckie-thot_harpers-bazaar_22.jpg",
        imageUrl: img("beauty", "beauty_2018_duckie-thot_harpers-bazaar_22.jpg"),
        imageAlt: "Duckie Thot Harper's Bazaar beauty III",
        publication: "Harper's Bazaar"
      },
      {
        id: "b13",
        title: "Harper's Bazaar IV",
        client: "Duckie Thot",
        year: "2018",
        filename: "beauty_2018_duckie-thot_harpers-bazaar_23.jpg",
        imageUrl: img("beauty", "beauty_2018_duckie-thot_harpers-bazaar_23.jpg"),
        imageAlt: "Duckie Thot Harper's Bazaar beauty IV",
        publication: "Harper's Bazaar"
      },
    ]
  },
  {
    id: "4",
    slug: "commercial-ecom",
    title: "Commercial / ECOM",
    description: "Brand campaigns and e-commerce productions for global names — polished, strategic, and campaign-ready.",
    coverImage: coverImg("commercial-ecom", "ecom_2019_tabria-majors_savage-x-fenty_02.jpg"),
    projects: [
      {
        id: "com1",
        title: "Christian Cowan x Le Specs",
        client: "Veronika Vilim",
        year: "2020",
        filename: "ecom_2020_veronika-vilim_le-specs_01.jpg",
        imageUrl: cover4x5("commercial-ecom", "ecom_2020_veronika-vilim_le-specs_01.jpg"),
        imageAlt: "Veronika Vilim Christian Cowan x Le Specs",
        link: "https://lespecs.com/blogs/le-specs/christian-cowan-x-le-specs-1"
      },
      {
        id: "com2",
        title: "Savage X Fenty Campaign",
        client: "Tabria Majors",
        year: "2019",
        filename: "ecom_2019_tabria-majors_savage-x-fenty_02.jpg",
        imageUrl: cover4x5("commercial-ecom", "ecom_2019_tabria-majors_savage-x-fenty_02.jpg"),
        imageAlt: "Tabria Majors Savage X Fenty campaign 2019"
      },
      {
        id: "com3",
        title: "Savage X Fenty Group Campaign",
        client: "Nina Marie Daniele & Models",
        year: "2019",
        filename: "ecom_2019_nina-marie-daniele-and-models_savage-x-fenty_03.jpg",
        imageUrl: cover4x5("commercial-ecom", "ecom_2019_nina-marie-daniele-and-models_savage-x-fenty_03.jpg"),
        imageAlt: "Nina Marie Daniele and models Savage X Fenty 2019"
      },
      {
        id: "com4",
        title: "Savage X Fenty Campaign",
        client: "Nina Marie Daniele",
        year: "2019",
        filename: "ecom_2019_nina-marie-daniele_savage-x-fenty_04.jpg",
        imageUrl: cover4x5("commercial-ecom", "ecom_2019_nina-marie-daniele_savage-x-fenty_04.jpg"),
        imageAlt: "Nina Marie Daniele Savage X Fenty 2019"
      },
      {
        id: "com5",
        title: "Brother Vellies Campaign I",
        client: "Mical Bockru",
        year: "2018",
        filename: "ecom_2018_mical-bockru_brother-vellies_05.jpg",
        imageUrl: cover4x5("commercial-ecom", "ecom_2018_mical-bockru_brother-vellies_05.jpg"),
        imageAlt: "Mical Bockru Brother Vellies campaign I"
      },
      {
        id: "com6",
        title: "Brother Vellies Campaign II",
        client: "Mical Bockru",
        year: "2018",
        filename: "ecom_2018_mical-bockru_brother-vellies_06.jpg",
        imageUrl: cover4x5("commercial-ecom", "ecom_2018_mical-bockru_brother-vellies_06.jpg"),
        imageAlt: "Mical Bockru Brother Vellies campaign II"
      },
      {
        id: "com7",
        title: "Brother Vellies Campaign",
        client: "Ebony Riley & Mical Bockru",
        year: "2018",
        filename: "ecom_2018_ebony-riley-mical-bockru_brother-vellies_07.jpg",
        imageUrl: cover4x5("commercial-ecom", "ecom_2018_ebony-riley-mical-bockru_brother-vellies_07.jpg"),
        imageAlt: "Ebony Riley and Mical Bockru Brother Vellies"
      },
      {
        id: "com8",
        title: "Christian Cowan",
        client: "Lisa Rinna",
        year: "2020",
        filename: "ecom_2020_lisa-rinna_christian-cowan_10.jpg",
        imageUrl: cover4x5("commercial-ecom", "ecom_2020_lisa-rinna_christian-cowan_10.jpg"),
        imageAlt: "Lisa Rinna Christian Cowan 2020"
      },
    ]
  }
];

export const FEATURED_CLIENTS = [
  "Rihanna", "Lizzo", "Lupita Nyong'o", "Aurora James", "Billy Porter",
  "Duckie Thot", "Gugu Mbatha-Raw", "Saniyya Sidney", "Mallori Johnson",
  "Elaine Welteroth", "Kylie Bunbury", "Gottmik", "Alisha Wainwright",
  "Savage X Fenty", "Brother Vellies", "Christian Cowan", "Le Specs",
  "Harper's Bazaar", "Vanity Fair", "Glamour", "ELLE UK", "Grazia USA",
  "Variety", "Coveteur", "Emmy Magazine", "PhotoBook Magazine",
  "Schön Magazine", "Rollacoaster", "L'Officiel Malaysia", "Refinery29"
];

export const CAREER_TIMELINE = [
  { year: "2008–2012", event: "Fashion Week Apprenticeships", detail: "Assisted Guido Palau, Jimmy Paul, and Jawara across New York, London, Milan, and Paris Fashion Weeks." },
  { year: "2012–2014", event: "Mentorship & Development", detail: "Creative mentorship under Yusef Williams, Vernon François, and Naeemah LaFond shaped his cultural approach to hair." },
  { year: "2014", event: "First Major Editorial", detail: "Landed his first significant independent editorial — marking the start of his solo career in high-fashion publishing." },
  { year: "2015–2019", event: "Rihanna Collaboration", detail: "Joined Rihanna's creative team, eventually becoming her day-to-day hairstylist across campaigns, editorials, and global events." },
  { year: "2018", event: "International Magazine Covers", detail: "Styled Duckie Thot for Harper's Bazaar, Wonderland, and Stylist UK covers — three major international covers in one year." },
  { year: "2019", event: "Savage X Fenty Show", detail: "Hair direction for Rihanna's Savage X Fenty runway show and campaign, broadcast globally on Amazon Prime." },
  { year: "2019", event: "Nike — Greatest Dynasty Ever", detail: "Lead hair stylist for Nike's landmark campaign celebrating women in sport." },
  { year: "2020–2021", event: "Hollywood Expansion", detail: "Extended into major entertainment with clients including Gugu Mbatha-Raw, Saniyya Sidney, and Elaine Welteroth for Variety, Emmy Magazine, and Refinery29." },
  { year: "2021", event: "Grazia USA — Aurora Rising", detail: "Collaborated with Aurora James on her Grazia USA cover feature, named one of the most cited editorial images of the year." },
  { year: "2022", event: "Glamour Women of the Year", detail: "Styled Aurora James for Glamour's Women of the Year — one of fashion's most anticipated annual covers." },
  { year: "2022", event: "Coveteur — Gottmik", detail: "Art-directed and styled the Gottmik Coveteur cover, widely recognized as a bold statement in gender-expansive beauty." },
  { year: "2023–Present", event: "Creative Direction & Education", detail: "Developing new ventures in beauty innovation, education, and consulting while continuing global editorial and commercial work." },
];

export const PRESS_MENTIONS = [
  {
    id: "1",
    publication: "Vogue",
    date: "2022",
    title: "Lupita Nyong'o's Beauty Look",
    excerpt: "Michael David crafted an ethereal look for Lupita Nyong'o at the ACE Awards — featuring facial jewels and vibrant orange eyeshadow.",
    link: "https://www.vogue.com/article/lupita-nyongo-beauty-facial-jewels-orange-eyeshadow-new-york-city"
  },
  {
    id: "2",
    publication: "Vogue",
    date: "2022",
    title: "Raoul Alejandre, Valentino Global Makeup Artist",
    excerpt: "Hair direction by Michael David for Vogue's profile of Valentino's global makeup artist Raoul Alejandre.",
    link: "https://www.vogue.com/article/raoul-alejandre-valentino-global-makeup-artist"
  },
  {
    id: "3",
    publication: "Vanity Fair",
    date: "2022",
    title: "Maria Taylor: ESPN, NBC Olympics & Super Bowl",
    excerpt: "Michael David's editorial precision brought Maria Taylor's on-screen presence to life for NBC's Olympic and Super Bowl coverage.",
    link: "https://www.vanityfair.com/hollywood/2022/02/maria-taylor-espn-nbc-olympics-super-bowl"
  },
  {
    id: "4",
    publication: "W Magazine",
    date: "2022",
    title: "Fousheé: Deep End",
    excerpt: "On set with Fousheé for W Magazine — hair direction by Michael David.",
    link: "https://www.wmagazine.com/culture/foushee-deep-end-tiktok-time-machine-interview"
  },
  {
    id: "5",
    publication: "Glamour",
    date: "2022",
    title: "Aurora James — Women of the Year 2022",
    excerpt: "Aurora James photographed for Glamour's Women of the Year — hair by Michael David.",
    link: "https://www.glamour.com/story/aurora-james-glamour-women-of-the-year-2022"
  },
  {
    id: "6",
    publication: "Grazia USA",
    date: "2021",
    title: "Aurora Rising",
    excerpt: "Aurora James in conversation with Grazia USA on building Brother Vellies into a cultural force — with hair by Michael David.",
    link: "https://graziamagazine.com/us/articles/aurora-rising-aurora-james/"
  },
  {
    id: "7",
    publication: "PhotoBook Magazine",
    date: "2022",
    title: "Alisha Wainwright",
    excerpt: "Alisha Wainwright shot for PhotoBook Magazine — styled by Michael David.",
    link: "https://www.photobookmagazine.com/features/alisha-wainwright"
  },
  {
    id: "8",
    publication: "Refinery29",
    date: "2021",
    title: "Saniyya Sidney & Demi Singleton",
    excerpt: "Michael David styled both leads for Refinery29's feature on the breakout stars of King Richard.",
    link: null
  },
  {
    id: "9",
    publication: "Emmy Magazine",
    date: "2021",
    title: "Kylie Bunbury Cover Story",
    excerpt: "Emmy Magazine's cover feature on Kylie Bunbury — hair direction by Michael David.",
    link: null
  },
  {
    id: "10",
    publication: "Variety",
    date: "2020",
    title: "Gugu Mbatha-Raw — Variety Portrait",
    excerpt: "Variety's portrait session with Gugu Mbatha-Raw, styled by Michael David.",
    link: null
  },
  {
    id: "11",
    publication: "ELLE UK",
    date: "2019",
    title: "Elaine Welteroth — ELLE UK",
    excerpt: "Elaine Welteroth featured in ELLE UK with hair by Michael David.",
    link: null
  },
  {
    id: "12",
    publication: "L'Officiel Malaysia",
    date: "2018",
    title: "Najiyah Imani & Marie",
    excerpt: "Twin cover story for L'Officiel Malaysia — hair direction by Michael David.",
    link: null
  },
  {
    id: "13",
    publication: "Schön Magazine",
    date: "2021",
    title: "Salem Mitchell",
    excerpt: "Salem Mitchell in a two-part feature for Schön Magazine — hairstyling by Michael David.",
    link: null
  },
  {
    id: "14",
    publication: "Rollacoaster Magazine",
    date: "2021",
    title: "Alyah Chanelle Scott",
    excerpt: "Alyah Chanelle Scott photographed for Rollacoaster Magazine — hair by Michael David.",
    link: null
  },
];
