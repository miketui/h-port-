import { useState } from "react";

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
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  if (variant === "banner") {
    return (
      <section className={`py-20 bg-[#0a0a0a] border-y border-white/5 ${className}`}>
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h3 className="text-3xl md:text-4xl font-display mb-4">
            {heading || "Stay in the Loop"}
          </h3>
          {subheading && (
            <p className="text-muted-foreground text-base mb-8 max-w-lg mx-auto">
              {subheading}
            </p>
          )}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-all text-sm"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-widest font-semibold hover:bg-primary/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
          {status === "success" && (
            <p className="text-accent text-sm mt-4">You're on the list.</p>
          )}
        </div>
      </section>
    );
  }

  if (variant === "section") {
    return (
      <div className={`py-16 ${className}`}>
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-display mb-3">
            {heading || "Stay Connected"}
          </h3>
          {subheading && (
            <p className="text-muted-foreground text-sm max-w-md mx-auto">{subheading}</p>
          )}
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="flex-1 bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-all text-sm"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-widest font-semibold hover:bg-primary/90 transition-colors"
          >
            Join
          </button>
        </form>
        {status === "success" && (
          <p className="text-accent text-sm mt-4 text-center">You're on the list.</p>
        )}
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
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className="flex-1 bg-background border border-border px-3 py-2 text-foreground text-sm focus:outline-none focus:border-primary transition-all"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-primary text-primary-foreground text-xs uppercase tracking-widest font-semibold hover:bg-primary/90 transition-colors"
        >
          Join
        </button>
      </form>
      {status === "success" && (
        <p className="text-accent text-xs mt-2">You're on the list.</p>
      )}
    </div>
  );
}
