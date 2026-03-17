import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
  noPadding?: boolean;
}

export function PageTransition({ children, className = "", noPadding = false }: PageTransitionProps) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`${noPadding ? "" : "pt-28"} ${className}`}
    >
      {children}
    </motion.main>
  );
}
