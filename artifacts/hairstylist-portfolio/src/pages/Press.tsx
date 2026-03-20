import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { PageTransition } from "@/components/layout/PageTransition";
import { PRESS_MENTIONS } from "@/lib/data";
import { EmailSignup } from "@/components/EmailSignup";
import { SEO } from "@/components/SEO";

export default function Press() {
  const pressJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Press & Features — MDW",
    description: "MDW in the press — features and credits from Vogue, Vanity Fair, Harper's Bazaar, Elle, and the world's leading fashion publications.",
    url: "https://michaeldavidjr.beauty/press",
    isPartOf: {
      "@type": "WebSite",
      name: "MDW — Michael David",
      url: "https://michaeldavidjr.beauty",
    },
  };

  return (
    <PageTransition>
      <SEO
        title="Press & Features"
        description="MDW in the press — features and credits from Vogue, Vanity Fair, Harper's Bazaar, Elle, and the world's leading fashion publications."
        path="/press"
        keywords="Michael David Warren press, MDW press features, celebrity hairstylist press, Vogue hair feature, Vanity Fair hairstylist, Harper's Bazaar hair, Elle hair direction, fashion press hair stylist, editorial hair press coverage, celebrity stylist publications"
        jsonLd={pressJsonLd}
      />
      <div className="container mx-auto px-6 md:px-12 pt-8 pb-32">
        <div className="max-w-4xl mb-20">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-6xl md:text-8xl lg:text-9xl font-display tracking-tighter mb-6 uppercase"
          >
            Press
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl font-sans leading-relaxed border-l-2 border-accent/40 pl-6"
          >
            Selected features and credits from the world's leading publications.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRESS_MENTIONS.map((press, i) => (
            <motion.div
              key={press.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="p-8 border border-border bg-card/30 hover:border-primary/50 hover:bg-card transition-all duration-300 flex flex-col h-full"
            >
              <p className="text-accent text-xs font-medium uppercase tracking-widest mb-4">
                {press.publication}{" "}
                <span className="text-muted-foreground">&bull; {press.date}</span>
              </p>
              <h4 className="font-display text-2xl mb-4 italic leading-tight">
                "{press.title}"
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">
                {press.excerpt}
              </p>
              {press.link ? (
                <a
                  href={press.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-widest border-b border-border hover:border-primary pb-1 transition-colors inline-flex items-center gap-1 w-fit"
                >
                  Read Feature <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <span className="text-xs uppercase tracking-widest text-muted-foreground/50">
                  Publication Credit
                </span>
              )}
            </motion.div>
          ))}
        </div>

        <EmailSignup
          variant="section"
          source="press-page"
          heading="Follow the Press"
          subheading="Get notified about new features, credits, and publications."
        />
      </div>
    </PageTransition>
  );
}
