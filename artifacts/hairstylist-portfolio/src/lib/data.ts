export type Project = {
  id: string;
  title: string;
  client: string;
  year: string;
  imageUrl: string;
  imageAlt: string;
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

// Placeholder Unsplash images — will be replaced with real images
export const PORTFOLIO_CATEGORIES: Category[] = [
  {
    id: "0",
    slug: "covers",
    title: "Covers",
    description: "Magazine covers spanning the world's most prestigious publications.",
    coverImage: "https://images.unsplash.com/photo-1524502397800-2eeaead7c3fe?q=80&w=1200&auto=format&fit=crop",
    projects: [
      { id: "cov1", title: "Harper's Bazaar", client: "Duckie Thot", year: "2022", imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop", imageAlt: "Duckie Thot Harper's Bazaar Cover", publication: "Harper's Bazaar" },
      { id: "cov2", title: "Wonderland", client: "Duckie Thot", year: "2022", imageUrl: "https://images.unsplash.com/photo-1515347619362-75fe3f0e08f2?q=80&w=800&auto=format&fit=crop", imageAlt: "Duckie Thot Wonderland Cover", publication: "Wonderland" },
      { id: "cov3", title: "Stylist UK", client: "Duckie Thot", year: "2022", imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop", imageAlt: "Duckie Thot Stylist UK Cover", publication: "Stylist UK" },
      { id: "cov4", title: "Variety", client: "Gugu Mbatha-Raw", year: "2021", imageUrl: "https://images.unsplash.com/photo-1516053641324-4f05ba7b55f1?q=80&w=800&auto=format&fit=crop", imageAlt: "Gugu Mbatha-Raw Variety Cover", publication: "Variety" },
      { id: "cov5", title: "Emmy Magazine", client: "Kylie Bunbury", year: "2021", imageUrl: "https://images.unsplash.com/photo-1485230405346-71acb9518d9c?q=80&w=800&auto=format&fit=crop", imageAlt: "Kylie Bunbury Emmy Magazine Cover", publication: "Emmy Magazine" },
      { id: "cov6", title: "PhotoBook Magazine", client: "Alisha Wainwright", year: "2022", imageUrl: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800&auto=format&fit=crop", imageAlt: "Alisha Wainwright PhotoBook Cover", publication: "PhotoBook", link: "https://www.photobookmagazine.com/features/alisha-wainwright" },
      { id: "cov7", title: "Glamour", client: "Aurora James", year: "2022", imageUrl: "https://images.unsplash.com/photo-1524502397800-2eeaead7c3fe?q=80&w=800&auto=format&fit=crop", imageAlt: "Aurora James Glamour Cover", publication: "Glamour", link: "https://www.glamour.com/story/aurora-james-glamour-women-of-the-year-2022" },
      { id: "cov8", title: "Coveteur", client: "Gottmik", year: "2022", imageUrl: "https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?q=80&w=800&auto=format&fit=crop", imageAlt: "Gottmik Coveteur Cover", publication: "Coveteur" },
      { id: "cov9", title: "Chic Album", client: "Duckie Thot", year: "2021", imageUrl: "https://images.unsplash.com/photo-1526413232644-8a407dd5d2f0?q=80&w=800&auto=format&fit=crop", imageAlt: "Duckie Thot Chic Album Cover", publication: "Chic" },
    ]
  },
  {
    id: "1",
    slug: "editorial",
    title: "Editorial",
    description: "Fashion editorial storytelling spanning the world's leading publications — from conceptual fashion stories to intimate portrait series.",
    coverImage: "https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=1200&auto=format&fit=crop",
    projects: [
      { id: "e1", title: "Anais Bodysuits", client: "Duckie Thot", year: "2022", imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop", imageAlt: "Duckie Thot editorial", publication: "Harper's Bazaar Mexico" },
      { id: "e2", title: "Aurora Rising", client: "Aurora James", year: "2022", imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop", imageAlt: "Aurora James editorial", publication: "Grazia USA", link: "https://graziamagazine.com/us/articles/aurora-rising-aurora-james/" },
      { id: "e3", title: "Salem", client: "Salem Mitchell", year: "2022", imageUrl: "https://images.unsplash.com/photo-1485230405346-71acb9518d9c?q=80&w=1000&auto=format&fit=crop", imageAlt: "Salem Mitchell editorial", publication: "Schön" },
      { id: "e4", title: "Rollacoaster", client: "Alyah Chanelle Scott", year: "2022", imageUrl: "https://images.unsplash.com/photo-1515347619362-75fe3f0e08f2?q=80&w=1000&auto=format&fit=crop", imageAlt: "Alyah Chanelle Scott editorial", publication: "Rollacoaster" },
      { id: "e5", title: "Spotlight", client: "Saniyya Sidney", year: "2022", imageUrl: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1000&auto=format&fit=crop", imageAlt: "Saniyya Sidney editorial", publication: "Cultured Magazine", link: "https://www.culturedmag.com/article/2022/03/15/saniyya-sidney-is-ready-for-the-spotlight/" },
      { id: "e6", title: "Variety Feature", client: "Gugu Mbatha-Raw", year: "2021", imageUrl: "https://images.unsplash.com/photo-1516053641324-4f05ba7b55f1?q=80&w=1000&auto=format&fit=crop", imageAlt: "Gugu Mbatha-Raw editorial", publication: "Variety" },
      { id: "e7", title: "Emmy Magazine", client: "Kylie Bunbury", year: "2021", imageUrl: "https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?q=80&w=1000&auto=format&fit=crop", imageAlt: "Kylie Bunbury editorial", publication: "Emmy Magazine", link: "https://www.televisionacademy.com/video/under-cover-big-sky" },
      { id: "e8", title: "PhotoBook Feature", client: "Alisha Wainwright", year: "2022", imageUrl: "https://images.unsplash.com/photo-1526413232644-8a407dd5d2f0?q=80&w=1000&auto=format&fit=crop", imageAlt: "Alisha Wainwright editorial", publication: "PhotoBook Magazine", link: "https://www.photobookmagazine.com/features/alisha-wainwright" },
      { id: "e9", title: "Women of the Year", client: "Aurora James", year: "2022", imageUrl: "https://images.unsplash.com/photo-1524502397800-2eeaead7c3fe?q=80&w=1000&auto=format&fit=crop", imageAlt: "Aurora James Glamour", publication: "Glamour", link: "https://www.glamour.com/story/aurora-james-glamour-women-of-the-year-2022" },
      { id: "e10", title: "Elle UK", client: "Elaine Welteroth", year: "2019", imageUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1000&auto=format&fit=crop", imageAlt: "Elaine Welteroth Elle UK", publication: "Elle UK", link: "https://gb.readly.com/magazines/elle-uk/2019-08-08/5d4d07ac11cba3b7e745f866" },
      { id: "e11", title: "PhotoBook", client: "Arica Himmel", year: "2022", imageUrl: "https://images.unsplash.com/photo-1512413914439-011853f0cc57?q=80&w=1000&auto=format&fit=crop", imageAlt: "Arica Himmel editorial", publication: "PhotoBook Magazine" },
      { id: "e12", title: "L'Officiel Malaysia", client: "Hao Zeng", year: "2022", imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1000&auto=format&fit=crop", imageAlt: "L'Officiel Malaysia editorial", publication: "L'Officiel Malaysia", link: "https://www.beautyscene.net/editorial/lofficiel-malaysia-hao-zeng/" },
      { id: "e13", title: "Composure", client: "Ritu Arya", year: "2022", imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop", imageAlt: "Ritu Arya editorial", publication: "Composure Magazine", link: "https://composuremagazine.com/ritu-arya/" },
      { id: "e14", title: "Content Mode", client: "Hailey Kilgore", year: "2022", imageUrl: "https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?q=80&w=1000&auto=format&fit=crop", imageAlt: "Hailey Kilgore editorial", publication: "Contents Beauty", link: "https://contentmode.com/10196-2/" },
      { id: "e15", title: "Flaunt", client: "Chloe Coleman", year: "2022", imageUrl: "https://images.unsplash.com/photo-1550614000-4b95d4edaa3b?q=80&w=1000&auto=format&fit=crop", imageAlt: "Chloe Coleman Flaunt editorial", publication: "Flaunt Magazine" },
      { id: "e16", title: "W Magazine", client: "FoushÉe", year: "2022", imageUrl: "https://images.unsplash.com/photo-1516053641324-4f05ba7b55f1?q=80&w=1000&auto=format&fit=crop", imageAlt: "FoushÉe W Magazine", publication: "W Magazine", link: "https://www.wmagazine.com/culture/foushee-deep-end-tiktok-time-machine-interview" },
      { id: "e17", title: "Vogue", client: "Raoul Alejandre", year: "2022", imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop", imageAlt: "Vogue editorial", publication: "Vogue", link: "https://www.vogue.com/article/raoul-alejandre-valentino-global-makeup-artist" },
      { id: "e18", title: "Zaria Portrait", client: "Zaria", year: "2022", imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop", imageAlt: "Zaria portrait", publication: "Andi Elloway", link: "https://www.andielloway.com/celebrity-/-portrait/zaria" },
      { id: "e19", title: "WhoWhatWear", client: "Summer Ones to Watch", year: "2022", imageUrl: "https://images.unsplash.com/photo-1485230405346-71acb9518d9c?q=80&w=1000&auto=format&fit=crop", imageAlt: "WhoWhatWear editorial", publication: "Who What Wear", link: "https://www.whowhatwear.com/summer-tv-film-ones-to-watch-2022" },
      { id: "e20", title: "Micaiah Carter", client: "Henson", year: "2022", imageUrl: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1000&auto=format&fit=crop", imageAlt: "Henson editorial by Micaiah Carter", photographer: "Micaiah Carter" },
    ]
  },
  {
    id: "2",
    slug: "red-carpet",
    title: "Red Carpet",
    description: "High-stakes glamour crafted for cinema's biggest stages, award shows, and international galas.",
    coverImage: "https://images.unsplash.com/photo-1516053641324-4f05ba7b55f1?q=80&w=1200&auto=format&fit=crop",
    projects: [
      { id: "rc1", title: "City of Hope Gala", client: "Billy Porter", year: "2022", imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1000&auto=format&fit=crop", imageAlt: "Billy Porter City of Hope" },
      { id: "rc2", title: "Spirit Day", client: "Billy Porter", year: "2022", imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop", imageAlt: "Billy Porter Spirit Day" },
      { id: "rc3", title: "Met Gala", client: "Aurora James", year: "2022", imageUrl: "https://images.unsplash.com/photo-1524502397800-2eeaead7c3fe?q=80&w=1000&auto=format&fit=crop", imageAlt: "Aurora James Met Gala" },
      { id: "rc4", title: "Vanity Fair Oscar Party", client: "Aurora James", year: "2022", imageUrl: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1000&auto=format&fit=crop", imageAlt: "Aurora James Vanity Fair Oscar Party", publication: "Vanity Fair" },
      { id: "rc5", title: "NAACP Image Awards", client: "Saniyya Sidney", year: "2022", imageUrl: "https://images.unsplash.com/photo-1515347619362-75fe3f0e08f2?q=80&w=1000&auto=format&fit=crop", imageAlt: "Saniyya Sidney NAACP Awards", link: "https://www.redcarpet-fashionawards.com/2022/02/25/saniyya-sidney-wore-philosophy-di-lorenzo-serafini-to-the-2022-naacp-image-awards-nominees-reception/" },
      { id: "rc6", title: "HCA Awards", client: "Saniyya Sidney", year: "2022", imageUrl: "https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?q=80&w=1000&auto=format&fit=crop", imageAlt: "Saniyya Sidney HCA Awards" },
      { id: "rc7", title: "SAG Awards GRWM", client: "Saniyya Sidney", year: "2022", imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop", imageAlt: "Saniyya Sidney SAG Awards", publication: "Teen Vogue", link: "https://www.teenvogue.com/story/king-richard-star-saniyya-sidney-sag-awards-2022-grwm" },
      { id: "rc8", title: "ACE Awards", client: "Lupita Nyong'o", year: "2022", imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop", imageAlt: "Lupita Nyong'o ACE Awards", publication: "Vogue", link: "https://www.vogue.com/article/lupita-nyongo-beauty-facial-jewels-orange-eyeshadow-new-york-city" },
      { id: "rc9", title: "Project Runway", client: "Elaine Welteroth", year: "2022", imageUrl: "https://images.unsplash.com/photo-1526413232644-8a407dd5d2f0?q=80&w=1000&auto=format&fit=crop", imageAlt: "Elaine Welteroth Project Runway" },
      { id: "rc10", title: "Kindred Premiere", client: "Mallori Johnson", year: "2022", imageUrl: "https://images.unsplash.com/photo-1485230405346-71acb9518d9c?q=80&w=1000&auto=format&fit=crop", imageAlt: "Mallori Johnson Kindred Premiere" },
      { id: "rc11", title: "Deadline Contenders", client: "Liesl Tommy", year: "2022", imageUrl: "https://images.unsplash.com/photo-1516053641324-4f05ba7b55f1?q=80&w=1000&auto=format&fit=crop", imageAlt: "Liesl Tommy Deadline Contenders" },
      { id: "rc12", title: "BET Awards", client: "Rihanna", year: "2022", imageUrl: "https://images.unsplash.com/photo-1550614000-4b95d4edaa3b?q=80&w=1000&auto=format&fit=crop", imageAlt: "Rihanna BET Awards" },
      { id: "rc13", title: "SAG Panel", client: "Brittany O'Grady", year: "2022", imageUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1000&auto=format&fit=crop", imageAlt: "Brittany O'Grady SAG Panel" },
      { id: "rc14", title: "Event Appearance", client: "Meena Harris", year: "2022", imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1000&auto=format&fit=crop", imageAlt: "Meena Harris red carpet" },
      { id: "rc15", title: "The Daily Show", client: "Lizzo", year: "2022", imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop", imageAlt: "Lizzo Daily Show" },
      { id: "rc16", title: "Red Carpet Appearance", client: "Ebony Obsidian", year: "2022", imageUrl: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1000&auto=format&fit=crop", imageAlt: "Ebony Obsidian red carpet" },
      { id: "rc17", title: "Red Carpet Appearance", client: "Chloe Coleman", year: "2022", imageUrl: "https://images.unsplash.com/photo-1512413914439-011853f0cc57?q=80&w=1000&auto=format&fit=crop", imageAlt: "Chloe Coleman red carpet" },
      { id: "rc18", title: "NBC Olympics / Super Bowl", client: "Maria Taylor", year: "2022", imageUrl: "https://images.unsplash.com/photo-1524502397800-2eeaead7c3fe?q=80&w=1000&auto=format&fit=crop", imageAlt: "Maria Taylor NBC Olympics", publication: "Vanity Fair", link: "https://www.vanityfair.com/hollywood/2022/02/maria-taylor-espn-nbc-olympics-super-bowl" },
    ]
  },
  {
    id: "3",
    slug: "beauty",
    title: "Beauty",
    description: "Detail-obsessed close-up work that honors texture, radiance, and the artistry of natural hair.",
    coverImage: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1200&auto=format&fit=crop",
    projects: [
      { id: "b1", title: "Studio Portrait I", client: "Carmen Solomons", year: "2022", imageUrl: "https://images.unsplash.com/photo-1526413232644-8a407dd5d2f0?q=80&w=1000&auto=format&fit=crop", imageAlt: "Carmen Solomons studio portrait" },
      { id: "b2", title: "Studio Portrait II", client: "Carmen Solomons", year: "2022", imageUrl: "https://images.unsplash.com/photo-1512413914439-011853f0cc57?q=80&w=1000&auto=format&fit=crop", imageAlt: "Carmen Solomons studio portrait II" },
      { id: "b3", title: "Gunpowder Milkshake", client: "Chloe Coleman", year: "2022", imageUrl: "https://images.unsplash.com/photo-1550614000-4b95d4edaa3b?q=80&w=1000&auto=format&fit=crop", imageAlt: "Chloe Coleman Gunpowder Milkshake" },
      { id: "b4", title: "ACE Awards Beauty", client: "Lupita Nyong'o", year: "2022", imageUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1000&auto=format&fit=crop", imageAlt: "Lupita Nyong'o ACE Awards beauty", link: "https://www.vogue.com/article/lupita-nyongo-beauty-facial-jewels-orange-eyeshadow-new-york-city" },
      { id: "b5", title: "Crop Over", client: "Rihanna", year: "2019", imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop", imageAlt: "Rihanna Crop Over beauty" },
      { id: "b6", title: "Underground Railroad", client: "Thuso Mbedu", year: "2021", imageUrl: "https://images.unsplash.com/photo-1515347619362-75fe3f0e08f2?q=80&w=1000&auto=format&fit=crop", imageAlt: "Thuso Mbedu Underground Railroad" },
    ]
  },
  {
    id: "4",
    slug: "commercial-ecom",
    title: "Commercial / ECOM",
    description: "Brand campaigns and e-commerce productions for global names — polished, strategic, and campaign-ready.",
    coverImage: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
    projects: [
      { id: "com1", title: "Spring 2019 Campaign", client: "Savage X Fenty — Tabria Majors", year: "2019", imageUrl: "https://images.unsplash.com/photo-1550614000-4b95d4edaa3b?q=80&w=1000&auto=format&fit=crop", imageAlt: "Savage X Fenty Spring 2019" },
      { id: "com2", title: "Group Campaign", client: "Savage X Fenty — Nina Marie Daniele", year: "2019", imageUrl: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=1000&auto=format&fit=crop", imageAlt: "Savage X Fenty group campaign" },
      { id: "com3", title: "Le Specs x Christian Cowan", client: "Veronika Vilim", year: "2020", imageUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1000&auto=format&fit=crop", imageAlt: "Christian Cowan x Le Specs", link: "https://lespecs.com/blogs/le-specs/christian-cowan-x-le-specs-1" },
      { id: "com4", title: "Brother Vellies Campaign", client: "Mical Bockru", year: "2021", imageUrl: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1000&auto=format&fit=crop", imageAlt: "Brother Vellies campaign" },
      { id: "com5", title: "Brother Vellies Campaign", client: "Ebony Riley", year: "2021", imageUrl: "https://images.unsplash.com/photo-1485230405346-71acb9518d9c?q=80&w=1000&auto=format&fit=crop", imageAlt: "Brother Vellies campaign II" },
      { id: "com6", title: "Christian Cowan 2020", client: "Lisa Rinna", year: "2020", imageUrl: "https://images.unsplash.com/photo-1526413232644-8a407dd5d2f0?q=80&w=1000&auto=format&fit=crop", imageAlt: "Lisa Rinna Christian Cowan" },
      { id: "com7", title: "Nike Greatest Dynasty Ever", client: "Nike Campaign", year: "2021", imageUrl: "https://images.unsplash.com/photo-1512413914439-011853f0cc57?q=80&w=1000&auto=format&fit=crop", imageAlt: "Nike Greatest Dynasty Ever" },
      { id: "com8", title: "Le Specs Feature", client: "Christian Cowan x Le Specs", year: "2020", imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1000&auto=format&fit=crop", imageAlt: "Christian Cowan Le Specs models.com", link: "https://models.com/work/christian-cowan-christian-cowan-x-le-specs" },
    ]
  }
];

export const FEATURED_CLIENTS = [
  "Rihanna", "Nike", "Savage X Fenty", "Brother Vellies", "Christian Cowan", "Le Specs",
  "Vogue", "Harper's Bazaar", "W Magazine", "Vanity Fair", "Variety", "Glamour",
  "Teen Vogue", "Refinery29", "Elle UK", "Grazia", "Emmy Magazine", "Rollacoaster",
  "Schön", "Cultured", "Composure", "L'Officiel", "Flaunt", "PhotoBook"
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
    publication: "Vanity Fair",
    date: "2022",
    title: "Maria Taylor: ESPN, NBC Olympics & Super Bowl",
    excerpt: "Warren's editorial precision brought Maria Taylor's on-screen presence to life for NBC's Olympic and Super Bowl coverage.",
    link: "https://www.vanityfair.com/hollywood/2022/02/maria-taylor-espn-nbc-olympics-super-bowl"
  },
  {
    id: "3",
    publication: "W Magazine",
    date: "2022",
    title: "FoushÉe: Deep End",
    excerpt: "On set with FoushÉe for W Magazine — hair direction by Michael David",
    link: "https://www.wmagazine.com/culture/foushee-deep-end-tiktok-time-machine-interview"
  },
  {
    id: "4",
    publication: "Teen Vogue",
    date: "2022",
    title: "King Richard Star Saniyya Sidney's SAG Awards GRWM",
    excerpt: "A behind-the-scenes look at getting Saniyya Sidney red-carpet ready for the 2022 SAG Awards.",
    link: "https://www.teenvogue.com/story/king-richard-star-saniyya-sidney-sag-awards-2022-grwm"
  },
  {
    id: "5",
    publication: "Glamour",
    date: "2022",
    title: "Aurora James — Women of the Year 2022",
    excerpt: "Aurora James photographed for Glamour's Women of the Year — hair by Michael David",
    link: "https://www.glamour.com/story/aurora-james-glamour-women-of-the-year-2022"
  },
  {
    id: "6",
    publication: "Grazia USA",
    date: "2022",
    title: "Aurora Rising: Aurora James",
    excerpt: "A profile of designer Aurora James with hair direction by Michael David",
    link: "https://graziamagazine.com/us/articles/aurora-rising-aurora-james/"
  },
  {
    id: "7",
    publication: "Refinery29",
    date: "2022",
    title: "Black Women Creators to Watch",
    excerpt: "Refinery29 spotlights emerging Black creators — featuring work by Michael David",
    link: "https://www.refinery29.com/en-us/2022/12/11221549/black-women-creators-elsa-lala-aliyah-fannita-cleotrapa"
  },
  {
    id: "8",
    publication: "Cultured Magazine",
    date: "2022",
    title: "Saniyya Sidney Is Ready for the Spotlight",
    excerpt: "Cultured Magazine's feature on Saniyya Sidney — styled with hair direction by Michael David",
    link: "https://www.culturedmag.com/article/2022/03/15/saniyya-sidney-is-ready-for-the-spotlight/"
  },
  {
    id: "9",
    publication: "Composure Magazine",
    date: "2022",
    title: "Ritu Arya",
    excerpt: "A portrait feature on Ritu Arya for Composure Magazine — hair by Michael David",
    link: "https://composuremagazine.com/ritu-arya/"
  },
  {
    id: "10",
    publication: "L'Officiel Malaysia",
    date: "2022",
    title: "L'Officiel Malaysia — Hao Zeng",
    excerpt: "An editorial for L'Officiel Malaysia photographed by Hao Zeng — hair direction by Michael David",
    link: "https://www.beautyscene.net/editorial/lofficiel-malaysia-hao-zeng/"
  },
  {
    id: "11",
    publication: "PhotoBook Magazine",
    date: "2022",
    title: "Alisha Wainwright",
    excerpt: "PhotoBook's feature on actress Alisha Wainwright — hair by Michael David",
    link: "https://www.photobookmagazine.com/features/alisha-wainwright"
  },
  {
    id: "12",
    publication: "PhotoBook Magazine",
    date: "2022",
    title: "Gracie Marie Bradley",
    excerpt: "Gracie Marie Bradley photographed for PhotoBook Magazine — hair direction by Michael David",
    link: "https://www.photobookmagazine.com/features/gracie-marie-bradley"
  }
];

export const CAREER_TIMELINE = [
  { year: "Early 2000s", event: "Began as an assistant stylist", detail: "Started assisting leading hairstylists in the fashion and entertainment industry, building foundational craft across editorial and celebrity work." },
  { year: "Mid-2000s", event: "First editorial credits", detail: "Earned first major editorial credits in regional and national publications, establishing a voice rooted in texture and natural hair artistry." },
  { year: "2010s", event: "Joined Rihanna's creative team", detail: "Worked with Rihanna and her creative circle during a pivotal era, contributing to tours, campaigns, and appearances that defined global pop culture." },
  { year: "2015–2019", event: "Global editorial expansion", detail: "Built a portfolio spanning Vogue, Harper's Bazaar, W Magazine, Vanity Fair, and international editions — working across New York, London, Los Angeles, and beyond." },
  { year: "2019–2020", event: "Major brand campaigns", detail: "Directed hair for Savage X Fenty, Nike's Greatest Dynasty Ever, and the Christian Cowan x Le Specs campaign — marking a transition into luxury commercial work." },
  { year: "2020–2022", event: "Published Curls & Contemplation", detail: "Authored Curls & Contemplation, a book exploring the intersection of Black identity, beauty culture, and self-expression — cementing Michael's role as a creative thinker and cultural voice." },
  { year: "2022–Present", event: "Founder / Author / Creative Director", detail: "Now operating as a creative entrepreneur — providing hair direction, consulting, and creative vision for top-tier editorial, celebrity, and commercial clients globally." },
];
