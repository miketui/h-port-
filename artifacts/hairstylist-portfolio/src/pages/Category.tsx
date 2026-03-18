import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/layout/PageTransition";
import { PORTFOLIO_CATEGORIES } from "@/lib/data";
import { EmailSignup } from "@/components/EmailSignup";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

export default function Category() {
  const params = useParams();
  const categorySlug = params.category;
  
  const categoryIndex = PORTFOLIO_CATEGORIES.findIndex(c => c.slug === categorySlug);
  const category = categoryIndex >= 0 ? PORTFOLIO_CATEGORIES[categoryIndex] : undefined;
  const prevCategory = categoryIndex > 0 ? PORTFOLIO_CATEGORIES[categoryIndex - 1] : null;
  const nextCategory = categoryIndex < PORTFOLIO_CATEGORIES.length - 1 ? PORTFOLIO_CATEGORIES[categoryIndex + 1] : null;

  if (!category) {
    return (
      <PageTransition className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h1 className="text-4xl font-display mb-4">Category Not Found</h1>
          <Link href="/portfolio" className="text-primary hover:underline uppercase tracking-widest text-sm">Return to Portfolio</Link>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="container mx-auto px-6 md:px-12 pt-8 pb-32">
        <Link href="/portfolio" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Categories
        </Link>
        
        <div className="max-w-4xl mb-24">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-6xl md:text-8xl lg:text-9xl font-display tracking-tighter mb-6 uppercase"
          >
            {category.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl font-sans leading-relaxed border-l-2 border-accent/40 pl-6"
          >
            {category.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {category.projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.2 }}
              className="group flex flex-col"
            >
              <div className="img-zoom-wrapper mb-6 bg-card border border-white/5">
                <img
                  src={project.imageUrl}
                  alt={project.imageAlt}
                  loading="lazy"
                  className="w-full h-auto block"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <h3 className="font-display text-2xl mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                
                <div className="flex justify-between items-end mt-auto">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    <span className="text-foreground">{project.client}</span> &bull; {project.year}
                    {project.publication && <span className="block mt-1 text-accent">{project.publication}</span>}
                  </p>
                  
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 border-b border-transparent hover:border-primary pb-0.5"
                    >
                      View Feature <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Next / Previous Category Navigation */}
        <div className="mt-24 pt-12 border-t border-white/5 flex justify-between items-center">
          {prevCategory ? (
            <Link href={`/portfolio/${prevCategory.slug}`} className="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <div>
                <span className="text-[10px] uppercase tracking-widest block mb-1">Previous</span>
                <span className="font-display text-lg text-foreground group-hover:text-primary transition-colors">{prevCategory.title}</span>
              </div>
            </Link>
          ) : <div />}
          {nextCategory ? (
            <Link href={`/portfolio/${nextCategory.slug}`} className="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-right">
              <div>
                <span className="text-[10px] uppercase tracking-widest block mb-1">Next</span>
                <span className="font-display text-lg text-foreground group-hover:text-primary transition-colors">{nextCategory.title}</span>
              </div>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : <div />}
        </div>

        {/* Email Signup */}
        <div className="mt-4">
          <EmailSignup
            variant="section"
            source={`category-${categorySlug}`}
            heading="Stay Ahead of the Work"
            subheading="New MDW projects, behind-the-scenes access, and press moments — straight to your inbox."
          />
        </div>

      </div>
    </PageTransition>
  );
}
