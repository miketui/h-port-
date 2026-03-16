import { motion } from "framer-motion";
import { PageTransition } from "@/components/layout/PageTransition";
import { FEATURED_CLIENTS, CAREER_TIMELINE } from "@/lib/data";
import { EmailSignup } from "@/components/EmailSignup";

export default function About() {
  return (
    <PageTransition>
      <div className="container mx-auto px-6 md:px-12 pt-12 pb-24">
        
        {/* Main Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="aspect-[3/4] relative bg-card overflow-hidden border border-white/5">
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10" />
              <img 
                src={`${import.meta.env.BASE_URL}images/about-portrait.png`}
                alt="Michael David Portrait" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 p-8 bg-[#0a0a0a] border-l-2 border-l-accent border border-white/5 hidden md:block z-20 shadow-2xl">
              <p className="font-display italic text-2xl text-center text-foreground/90">"Hair is a creative medium."</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <h1 className="text-5xl md:text-7xl font-display mb-10 text-foreground">About Michael</h1>
            
            <div className="space-y-6 text-muted-foreground font-sans leading-relaxed text-lg">
              <p>
                Michael David is a Los Angeles and New York-based celebrity hairstylist, creative director, and author whose work spans the intersection of fashion, culture, and identity. His client roster reads like a cultural map of the moment — Rihanna, Lupita Nyong'o, Aurora James, Saniyya Sidney, Billy Porter, Lizzo — names that define this era of visual storytelling.
              </p>
              <p>
                With credits across Vogue, Harper's Bazaar, W Magazine, Vanity Fair, Glamour, Teen Vogue, Elle UK, and Refinery29 — alongside campaigns for Nike, Savage X Fenty, and Brother Vellies — Michael's work blurs the line between hairstyling and creative direction. He approaches every project with an eye for texture, narrative, and the deeper story a subject carries.
              </p>
              <p>
                Beyond the chair, Michael is the author of <span className="italic text-accent">Curls & Contemplation</span>, a landmark work exploring Black identity, beauty culture, and the emotional power of hair. His philosophy is simple: hair is a creative medium, and every person who sits with him deserves to leave transformed — not just styled.
              </p>
            </div>

            <div className="pt-12 mt-12 border-t border-white/10">
              <a href="/contact" className="inline-block px-8 py-4 border border-primary text-sm uppercase tracking-widest text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                Book Michael
              </a>
            </div>
          </motion.div>
          
        </div>

        {/* Career Highlights — Editorial Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-4">Career Highlights</h2>
            <div className="w-12 h-px bg-primary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAREER_TIMELINE.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                className="group p-8 bg-card/30 border border-border hover:border-accent/40 transition-all duration-500"
              >
                <span className="text-accent text-xs font-medium tracking-[0.3em] uppercase block mb-4">{item.year}</span>
                <h3 className="text-xl font-display text-foreground mb-3 group-hover:text-primary transition-colors">{item.event}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Selected Clients Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
           <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display mb-4">Selected Clients</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-8 gap-x-4 text-center">
            {FEATURED_CLIENTS.map((client, idx) => (
              <div key={idx} className="p-4">
                <p className="font-display text-lg text-foreground/80 hover:text-accent transition-colors cursor-default">{client}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Email Signup */}
        <EmailSignup
          variant="section"
          source="about-page"
          heading="Follow the Creative Journey"
          subheading="Join the MDW insider list — new work, collaborations, and behind-the-scenes moments delivered directly to you."
          className="mt-8"
        />

      </div>
    </PageTransition>
  );
}
