import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";

interface EmailSignupProps {
  variant?: "banner" | "compact" | "section";
  source?: string;
  heading?: string;
  subheading?: string;
  className?: string;
}

export function EmailSignup({
  variant = "compact",
  source = "unknown",
  heading,
  subheading,
  className = "",
}: EmailSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === "loading") return;
    setStatus("loading");
    try {
      const formspreeId = import.meta.env.VITE_FORMSPREE_ID || "xojkkjgz";
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          email,
          _source: source,
          _subject: `MDW newsletter signup — ${source}`,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (variant === "banner") {
    return (
      <section className={`py-20 bg-[#0a0a0a] border-y border-white/5 relative overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">Newsletter</p>
          <h3 className="text-3xl md:text-4xl font-display mb-4">
            {heading || "Stay in the Loop"}
          </h3>
          {subheading && (
            <p className="text-muted-foreground text-base mb-8 max-w-lg mx-auto leading-relaxed">
              {subheading}
            </p>
          )}
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-center gap-2 text-accent text-sm uppercase tracking-widest py-4"
              >
                <Check className="w-4 h-4" /> You're on the list.
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto border border-white/10"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 bg-transparent px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none border-b sm:border-b-0 sm:border-r border-white/10"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="px-6 py-4 bg-primary/20 hover:bg-primary text-primary hover:text-primary-foreground text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 shrink-0"
                >
                  {status === "loading" ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>Subscribe <ArrowRight className="w-4 h-4" /></>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
          {status === "error" && (
            <p className="text-red-400 text-xs mt-3 tracking-wider">Something went wrong — please try again.</p>
          )}
        </div>
      </section>
    );
  }

  if (variant === "section") {
    return (
      <div className={`py-16 border-t border-white/5 ${className}`}>
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-3">Newsletter</p>
          <h3 className="text-2xl md:text-3xl font-display mb-3">
            {heading || "Stay Connected"}
          </h3>
          {subheading && (
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed max-w-sm">{subheading}</p>
          )}
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-accent text-sm uppercase tracking-widest py-3"
              >
                <Check className="w-4 h-4" /> You're on the list.
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="flex border border-white/10 max-w-sm"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="flex-1 bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none min-w-0"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="px-4 py-3 border-l border-white/10 hover:bg-primary/20 text-primary text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-1.5 shrink-0"
                >
                  {status === "loading" ? (
                    <Loader2 className="w-3 h-3 animate-spin" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
          {status === "error" && (
            <p className="text-red-400 text-xs mt-2">Something went wrong — please try again.</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      {heading && (
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3 font-medium">
          {heading}
        </p>
      )}
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-accent text-xs uppercase tracking-widest py-2"
          >
            <Check className="w-3 h-3" /> You're on the list.
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={handleSubmit} className="flex border border-white/10">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
              className="flex-1 bg-transparent px-3 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none min-w-0"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              aria-label="Subscribe"
              className="px-3 py-2.5 border-l border-white/10 hover:bg-primary/20 text-primary transition-all duration-300 shrink-0"
            >
              {status === "loading" ? (
                <Loader2 className="w-3 h-3 animate-spin" />
              ) : (
                <ArrowRight className="w-3 h-3" />
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
      {status === "error" && (
        <p className="text-red-400 text-[10px] mt-1.5">Please try again.</p>
      )}
    </div>
  );
}
