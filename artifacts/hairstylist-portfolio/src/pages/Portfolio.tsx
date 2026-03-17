import { Link } from "wouter";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/layout/PageTransition";
import { PORTFOLIO_CATEGORIES } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function Portfolio() {
  return (
    <PageTransition>
      <div className="container mx-auto px-6 md:px-12 pt-8 pb-32">
        <div className="max-w-4xl mb-20">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-6xl md:text-8xl lg:text-9xl font-display tracking-tighter mb-6 uppercase"
          >
            Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl font-sans leading-relaxed border-l-2 border-accent/40 pl-6"
          >
            A curated body of work spanning editorial, celebrity, red carpet, beauty, and commercial hair direction.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_CATEGORIES.map((category, idx) => (
            <Link
              key={category.id}
              href={`/portfolio/${category.slug}`}
              className={`group block relative overflow-hidden aspect-[4/5] bg-card ${
                idx === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="absolute inset-0 bg-background/20 group-hover:bg-background/0 transition-colors duration-500 z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10" />
              <img
                src={category.coverImage}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full flex justify-between items-end">
                <div>
                  <span className="text-xs text-accent font-medium uppercase tracking-[0.2em] mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                    {category.projects.length} Projects
                  </span>
                  <h3 className="text-3xl md:text-4xl font-display text-white">
                    {category.title}
                  </h3>
                  <p className="text-sm text-white/60 mt-2 max-w-md hidden md:block">
                    {category.description}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-4 group-hover:translate-x-0 group-hover:bg-accent group-hover:border-accent text-white">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
