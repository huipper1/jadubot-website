"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/utils";
import { Sparkle } from "@/components/icons";

export interface SectionImageProps {
  src: string;
  alt: string;
  aspect?: "16/10" | "4/3" | "1/1" | "21/9";
  priority?: boolean;
  className?: string;
  sizes?: string;
  badge?: string;
}

const ASPECT_CLASSES = {
  "16/10": "aspect-[16/10]",
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
  "21/9": "aspect-[21/9]"
};

export function SectionImage({
  src,
  alt,
  aspect = "16/10",
  priority = false,
  className = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px",
  badge
}: SectionImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const aspectClass = ASPECT_CLASSES[aspect] || ASPECT_CLASSES["16/10"];

  return (
    <figure
      className={cn(
        "group relative mx-auto w-full overflow-hidden rounded-2xl md:rounded-3xl",
        "border border-border/80 bg-card/60 backdrop-blur-sm",
        "shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-card",
        aspectClass,
        className
      )}
    >
      {/* Ambient background glow in brand blue */}
      <div
        className="pointer-events-none absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-tr from-primary/15 via-sky-400/10 to-transparent opacity-50 blur-xl transition-opacity duration-300 group-hover:opacity-80"
        aria-hidden="true"
      />

      {/* Fallback state if image file is missing or fails */}
      {hasError ? (
        <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-primary/5 via-card to-sky-500/10 p-6 text-center">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Sparkle className="h-6 w-6" />
          </div>
          <p className="max-w-xs text-xs font-semibold text-foreground/80">{alt}</p>
          <span className="mt-1 text-[11px] text-muted-foreground">Interactive Jadubot Module</span>
        </div>
      ) : (
        <>
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            onError={() => setHasError(true)}
            onLoad={() => setIsLoaded(true)}
            className={cn(
              "object-cover object-center transition-all duration-700 group-hover:scale-[1.03]",
              isLoaded ? "opacity-100" : "opacity-0"
            )}
          />

          {/* Inner subtle gradient overlay so image looks balanced in light & dark mode */}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-60"
            aria-hidden="true"
          />

          {/* Optional decorative chip */}
          {badge && (
            <div className="absolute top-3 left-3 z-10 rounded-full border border-border/80 bg-background/85 px-3 py-1 text-[10px] font-bold tracking-wider text-foreground backdrop-blur-md">
              {badge}
            </div>
          )}
        </>
      )}
    </figure>
  );
}
