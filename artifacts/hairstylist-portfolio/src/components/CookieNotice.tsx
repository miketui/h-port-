import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("cookie-notice-dismissed");
    if (!dismissed) {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    localStorage.setItem("cookie-notice-dismissed", "1");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-card border-t border-border"
        >
          <div className="container mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 max-w-4xl">
            <p className="text-sm text-muted-foreground leading-relaxed">
              This site uses essential technologies including Google Fonts. No tracking cookies are used.{" "}
              <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
            </p>
            <button
              onClick={dismiss}
              aria-label="Dismiss cookie notice"
              className="shrink-0 text-xs uppercase tracking-widest border border-border px-4 py-2 hover:border-primary hover:text-primary transition-colors flex items-center gap-2"
            >
              Got it <X className="w-3 h-3" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
