export type Project = {
  id: string;
  title: string;
  client: string;
  year: string;
  imageUrl: string;
  imageAlt: string;
};

export type Category = {
  id: string;
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  projects: Project[];
};

export const PORTFOLIO_CATEGORIES: Category[] = [
  {
    id: "1",
    slug: "editorial",
    title: "Editorial",
    description: "Avant-garde expressions and visionary hair direction for global fashion publications.",
    coverImage: "https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=1200&auto=format&fit=crop",
    projects: [
      { id: "e1", title: "The Modern Muse", client: "Vogue Paris", year: "2023", imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop", imageAlt: "Editorial look 1" },
      { id: "e2", title: "Structured Chaos", client: "i-D Magazine", year: "2023", imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop", imageAlt: "Editorial look 2" },
      { id: "e3", title: "Noir", client: "Another Magazine", year: "2022", imageUrl: "https://images.unsplash.com/photo-1485230405346-71acb9518d9c?q=80&w=1000&auto=format&fit=crop", imageAlt: "Editorial look 3" },
      { id: "e4", title: "Volume & Void", client: "Harper's Bazaar", year: "2022", imageUrl: "https://images.unsplash.com/photo-1515347619362-75fe3f0e08f2?q=80&w=1000&auto=format&fit=crop", imageAlt: "Editorial look 4" },
    ]
  },
  {
    id: "2",
    slug: "red-carpet",
    title: "Red Carpet",
    description: "Iconic, timeless elegance crafted for cinema's biggest nights.",
    coverImage: "https://images.unsplash.com/photo-1516053641324-4f05ba7b55f1?q=80&w=1200&auto=format&fit=crop",
    projects: [
      { id: "r1", title: "Cannes Film Festival", client: "Elena Rostova", year: "2023", imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1000&auto=format&fit=crop", imageAlt: "Red carpet look 1" },
      { id: "r2", title: "Met Gala", client: "Sarah Jenkins", year: "2023", imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop", imageAlt: "Red carpet look 2" },
      { id: "r3", title: "Oscars Vanity Fair", client: "Marcus Vance", year: "2022", imageUrl: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1000&auto=format&fit=crop", imageAlt: "Red carpet look 3" },
    ]
  },
  {
    id: "3",
    slug: "celebrity",
    title: "Celebrity",
    description: "Personal styling and image direction for leading global talent.",
    coverImage: "https://images.unsplash.com/photo-1524502397800-2eeaead7c3fe?q=80&w=1200&auto=format&fit=crop",
    projects: [
      { id: "c1", title: "Press Tour", client: "Isabella Thorne", year: "2023", imageUrl: "https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?q=80&w=1000&auto=format&fit=crop", imageAlt: "Celebrity look 1" },
      { id: "c2", title: "Album Art", client: "Jaxx", year: "2023", imageUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1000&auto=format&fit=crop", imageAlt: "Celebrity look 2" },
    ]
  },
  {
    id: "4",
    slug: "beauty",
    title: "Beauty",
    description: "Detail-obsessed campaigns focusing on texture, health, and perfection.",
    coverImage: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1200&auto=format&fit=crop",
    projects: [
      { id: "b1", title: "Luminous", client: "Oribe", year: "2023", imageUrl: "https://images.unsplash.com/photo-1526413232644-8a407dd5d2f0?q=80&w=1000&auto=format&fit=crop", imageAlt: "Beauty look 1" },
      { id: "b2", title: "Texture", client: "Bumble & Bumble", year: "2022", imageUrl: "https://images.unsplash.com/photo-1512413914439-011853f0cc57?q=80&w=1000&auto=format&fit=crop", imageAlt: "Beauty look 2" },
    ]
  },
  {
    id: "5",
    slug: "commercial",
    title: "Commercial",
    description: "Elevated brand campaigns that define modern luxury aesthetics.",
    coverImage: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
    projects: [
      { id: "com1", title: "Fall/Winter 23", client: "NET-A-PORTER", year: "2023", imageUrl: "https://images.unsplash.com/photo-1550614000-4b95d4edaa3b?q=80&w=1000&auto=format&fit=crop", imageAlt: "Commercial look 1" },
      { id: "com2", title: "The Row", client: "YSL", year: "2022", imageUrl: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=1000&auto=format&fit=crop", imageAlt: "Commercial look 2" },
    ]
  }
];

export const PRESS_MENTIONS = [
  {
    id: "1",
    publication: "Vogue",
    date: "October 2023",
    title: "The Visionary Behind This Year's Most Talked-About Hair",
    excerpt: "Aria Noir has quietly become the industry's most sought-after secret weapon, transforming how we view structural styling.",
    imageUrl: "https://images.unsplash.com/photo-1588514101887-84bc7da87611?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "2",
    publication: "Harper's Bazaar",
    date: "June 2023",
    title: "Master of Texture",
    excerpt: "In a world of uniform waves, Noir brings a refreshing edge and architectural brilliance to the red carpet.",
    imageUrl: "https://images.unsplash.com/photo-1515347619362-75fe3f0e08f2?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "3",
    publication: "W Magazine",
    date: "January 2023",
    title: "Creative Forces: Aria Noir",
    excerpt: "Discussing the intersection of art, fashion, and the emotional resonance of transformative hair design.",
    imageUrl: "https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=800&auto=format&fit=crop"
  }
];
