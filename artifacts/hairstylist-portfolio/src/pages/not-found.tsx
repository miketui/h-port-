import { Link } from "wouter";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <div className="text-center px-6 max-w-lg">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-accent text-xs uppercase tracking-[0.3em] mb-6 font-medium"
        >
          404
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-display tracking-tighter mb-8 text-foreground"
        >
          Page Not Found
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-muted-foreground text-lg mb-12 leading-relaxed"
        >
          The page you're looking for doesn't exist or has moved.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 border border-primary/50 hover:bg-primary hover:text-primary-foreground text-primary text-sm uppercase tracking-widest transition-all duration-300"
          >
            Return Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
