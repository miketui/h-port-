import { Link } from "wouter";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/layout/PageTransition";
import { PORTFOLIO_CATEGORIES } from "@/lib/data";

export default function Portfolio() {
  return (
    <PageTransition>
      <div className="container mx-auto px-6 md:px-12 pt-12 pb-24">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-display mb-6">Portfolio</h1>
          <p className="text-muted-foreground tracking-wide leading-relaxed">
            A curated selection of hair direction spanning high fashion editorial, red carpet moments, and commercial campaigns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {PORTFOLIO_CATEGORIES.map((category, i) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className={`group ${i % 2 !== 0 ? 'md:mt-24' : ''}`}
            >
              <Link href={`/portfolio/${category.slug}`} className="block">
                <div className="img-zoom-wrapper aspect-[3/4] mb-8 bg-card">
                  <img 
                    src={category.coverImage} 
                    alt={category.title} 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-3xl font-display mb-2 group-hover:text-primary transition-colors">{category.title}</h2>
                    <p className="text-sm text-muted-foreground">{category.projects.length} Projects</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-background transition-all duration-300">
                    <span className="sr-only">View</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
