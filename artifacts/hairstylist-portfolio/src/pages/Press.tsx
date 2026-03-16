import { motion } from "framer-motion";
import { PageTransition } from "@/components/layout/PageTransition";
import { PRESS_MENTIONS } from "@/lib/data";
import { Download } from "lucide-react";

export default function Press() {
  return (
    <PageTransition>
      <div className="container mx-auto px-6 md:px-12 pt-12 pb-24">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-display mb-6">Press & Media</h1>
            <p className="text-muted-foreground text-lg">
              Interviews, features, and critical reception of Aria's industry-defining work.
            </p>
          </div>
          
          <button 
            onClick={() => alert("Press kit download simulated.")}
            className="flex items-center gap-3 px-6 py-3 border border-border hover:border-primary hover:text-primary transition-all uppercase tracking-widest text-xs"
          >
            <Download className="w-4 h-4" /> Download Press Kit
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main featured article */}
          <div className="lg:col-span-8">
            {PRESS_MENTIONS.slice(0, 1).map((press) => (
              <motion.article 
                key={press.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="group relative overflow-hidden"
              >
                <div className="aspect-[16/9] mb-8 overflow-hidden bg-card">
                  <img src={press.imageUrl} alt={press.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
                <div className="flex gap-4 items-center mb-4">
                  <span className="text-primary text-sm uppercase tracking-widest">{press.publication}</span>
                  <span className="w-12 h-[1px] bg-border"></span>
                  <span className="text-muted-foreground text-sm">{press.date}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display mb-4 italic group-hover:text-primary transition-colors">"{press.title}"</h2>
                <p className="text-lg text-muted-foreground mb-6 max-w-3xl">{press.excerpt}</p>
                <button className="text-sm font-semibold uppercase tracking-widest border-b border-foreground pb-1 hover:border-primary hover:text-primary transition-colors">
                  Read Full Feature
                </button>
              </motion.article>
            ))}
          </div>

          {/* Secondary articles */}
          <div className="lg:col-span-4 flex flex-col gap-12 mt-12 lg:mt-0">
            {PRESS_MENTIONS.slice(1).map((press, i) => (
              <motion.article 
                key={press.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + (i * 0.2) }}
                className="group border-t border-border pt-8 first:border-t-0 lg:first:border-t lg:first:pt-8 first:pt-0"
              >
                <div className="aspect-[4/3] mb-6 overflow-hidden bg-card hidden sm:block">
                  <img src={press.imageUrl} alt={press.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
                <div className="flex gap-3 items-center mb-3">
                  <span className="text-primary text-xs uppercase tracking-widest">{press.publication}</span>
                  <span className="w-6 h-[1px] bg-border"></span>
                  <span className="text-muted-foreground text-xs">{press.date}</span>
                </div>
                <h3 className="text-2xl font-display mb-3 group-hover:text-primary transition-colors">"{press.title}"</h3>
                <p className="text-muted-foreground text-sm mb-4">{press.excerpt}</p>
                <button className="text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
                  Read Article
                </button>
              </motion.article>
            ))}
          </div>

        </div>
      </div>
    </PageTransition>
  );
}
