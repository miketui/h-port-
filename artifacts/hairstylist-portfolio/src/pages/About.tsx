import { motion } from "framer-motion";
import { PageTransition } from "@/components/layout/PageTransition";

export default function About() {
  return (
    <PageTransition>
      <div className="container mx-auto px-6 md:px-12 pt-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="aspect-[3/4] relative bg-card overflow-hidden">
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10" />
              <img 
                src={`${import.meta.env.BASE_URL}images/about-portrait.png`}
                alt="Aria Noir Portrait" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#050505] border border-white/5 flex items-center justify-center p-8 hidden md:flex z-20">
              <p className="font-display italic text-2xl text-center">"Hair is architecture in motion."</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <h1 className="text-5xl md:text-7xl font-display mb-10">About Aria</h1>
            
            <div className="space-y-6 text-muted-foreground font-sans leading-relaxed text-lg mb-12">
              <p>
                Aria Noir is a London-based celebrity hair artist and creative director known for her architectural approach to styling and unwavering attention to detail. 
              </p>
              <p>
                With over a decade of experience spanning Paris, New York, and London, her work bridges the gap between classic glamour and avant-garde editorial concepts. She views hair not just as an accessory, but as a crucial structural element of a subject's identity.
              </p>
              <p>
                Her signature style—often described as "undone elegance"—has graced the covers of Vogue, Harper's Bazaar, and W Magazine, while her red carpet direction has shaped iconic moments at the Met Gala, Cannes, and the Academy Awards.
              </p>
            </div>

            <div className="pt-8 border-t border-white/10">
              <h3 className="text-sm uppercase tracking-[0.2em] text-primary mb-6">Selected Clients & Collaborators</h3>
              <div className="grid grid-cols-2 gap-y-4 font-display text-xl text-foreground/80">
                <p>Isabella Thorne</p>
                <p>Marcus Vance</p>
                <p>Elena Rostova</p>
                <p>Sarah Jenkins</p>
                <p>Vogue Paris</p>
                <p>Dior Beauty</p>
                <p>NET-A-PORTER</p>
                <p>YSL</p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </PageTransition>
  );
}
