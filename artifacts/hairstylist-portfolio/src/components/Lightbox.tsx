import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { OptimizedImage } from "@/components/OptimizedImage";

type LightboxImage = {
  src: string;
  alt: string;
  title?: string;
  client?: string;
};

type LightboxProps = {
  images: LightboxImage[];
  initialIndex: number;
  onClose: () => void;
};

export function Lightbox({ images, initialIndex, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const current = images[currentIndex];

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, goNext, goPrev]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;
    if (diff > threshold) goNext();
    if (diff < -threshold) goPrev();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
        onClick={onClose}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          className="absolute top-4 right-4 md:top-6 md:right-6 z-50 text-white/70 hover:text-white transition-colors p-2"
          aria-label="Close lightbox"
        >
          <X className="w-6 h-6 md:w-8 md:h-8" />
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); goPrev(); }}
          className="absolute left-2 md:left-6 z-50 text-white/50 hover:text-white transition-colors p-2 hidden md:block"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); goNext(); }}
          className="absolute right-2 md:right-6 z-50 text-white/50 hover:text-white transition-colors p-2 hidden md:block"
          aria-label="Next image"
        >
          <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
        </button>

        <div
          className="flex flex-col items-center max-h-[90vh] max-w-[90vw] md:max-w-[80vw]"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="max-h-[80vh] max-w-full flex items-center justify-center"
          >
            <OptimizedImage
              src={current.src}
              alt={current.alt}
              sizes="100vw"
              quality={85}
              priority={true}
              className="max-h-[80vh] max-w-full object-contain select-none"
            />
          </motion.div>

          <div className="mt-4 text-center">
            {current.title && (
              <p className="text-white font-display text-lg">{current.title}</p>
            )}
            {current.client && (
              <p className="text-white/50 text-xs uppercase tracking-widest mt-1">
                {current.client}
              </p>
            )}
            <p className="text-white/30 text-xs mt-2">
              {currentIndex + 1} / {images.length}
            </p>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); }}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                i === currentIndex ? "bg-white w-4" : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
