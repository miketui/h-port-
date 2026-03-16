import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "About", href: "/about" },
    { label: "Press", href: "/press" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/90 backdrop-blur-md py-4 border-b border-white/5" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link href="/" className="group flex items-center">
            <h1 className="font-display text-xl md:text-2xl font-semibold tracking-widest text-foreground transition-colors group-hover:text-primary">
              ARIA NOIR
            </h1>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-widest uppercase transition-colors duration-300 hover:text-primary ${
                  location === link.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-6 py-2 border border-primary/30 text-primary text-xs uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Book
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-background flex flex-col"
          >
            <div className="container mx-auto px-6 py-6 flex justify-between items-center">
              <Link href="/" className="font-display text-xl font-semibold tracking-widest text-foreground">
                ARIA NOIR
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-foreground hover:text-primary transition-colors"
                aria-label="Close menu"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            <nav className="flex-1 flex flex-col justify-center items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`font-display text-4xl hover:text-primary transition-colors ${
                      location === link.href ? "text-primary italic" : "text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="py-12 flex justify-center">
              <p className="text-xs tracking-widest text-muted-foreground">© ARIA NOIR {new Date().getFullYear()}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
