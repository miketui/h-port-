import { useState } from "react";

type OptimizedImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  quality?: number;
  sizes?: string;
  className?: string;
  loading?: "lazy" | "eager";
  priority?: boolean;
  aspectRatio?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
};

// Vercel Image Optimization endpoint
function vercelImageUrl(src: string, width: number, quality: number = 75): string {
  const encodedUrl = encodeURIComponent(src);
  return `/_vercel/image?url=${encodedUrl}&w=${width}&q=${quality}`;
}

// Common responsive breakpoints for srcset
const SRCSET_WIDTHS = [320, 640, 768, 1024, 1280, 1536, 1920];

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  quality = 75,
  sizes = "100vw",
  className = "",
  loading = "lazy",
  priority = false,
  aspectRatio,
  onClick,
  style,
}: OptimizedImageProps) {
  const [loaded, setLoaded] = useState(false);

  // Build srcset for responsive images using Vercel's optimization
  const srcSet = SRCSET_WIDTHS
    .map((w) => `${vercelImageUrl(src, w, quality)} ${w}w`)
    .join(", ");

  // Default src uses a mid-range width
  const defaultSrc = vercelImageUrl(src, 1024, quality);

  const imgStyle: React.CSSProperties = {
    ...style,
    ...(aspectRatio ? { aspectRatio } : {}),
  };

  return (
    <img
      src={import.meta.env.DEV ? src : defaultSrc}
      srcSet={import.meta.env.DEV ? undefined : srcSet}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : loading}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : undefined}
      className={`${className} ${loaded ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
      style={imgStyle}
      onLoad={() => setLoaded(true)}
      onError={() => setLoaded(true)}
      onClick={onClick}
    />
  );
}
