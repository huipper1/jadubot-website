"use client";

import React from "react";

/**
 * HeroGridBackground
 * Pure CSS/SVG technical graph/blueprint grid with:
 * - 56px base square cell grid (fine line)
 * - Every 4th line (224px) emphasized in brand blue
 * - Soft radial mask fading toward edges and bottom
 * - Subtle dual ambient glows (primary royal blue & cyan/amber accent)
 * - Respects prefers-reduced-motion
 * - Strict pointer-events-none, z-0/behind content, no horizontal overflow
 */
export function HeroGridBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden select-none"
    >
      {/* 1. Base gradient background tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/60 via-background to-background dark:from-slate-950/80 dark:via-background dark:to-background" />

      {/* 2. Soft ambient radial glow orbs */}
      {/* Primary Brand Glow behind central headline */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 h-[420px] w-[680px] max-w-[90vw] rounded-full opacity-35 blur-[100px] sm:blur-[140px] dark:opacity-25"
        style={{
          background: "radial-gradient(circle, var(--color-primary, #155dfc) 0%, transparent 70%)"
        }}
      />
      {/* Secondary accent glow offset to the top-right */}
      <div
        className="absolute top-24 right-[-10%] h-[350px] w-[450px] rounded-full opacity-20 blur-[120px] dark:opacity-15"
        style={{
          background: "radial-gradient(circle, #38bdf8 0%, transparent 70%)"
        }}
      />

      {/* 3. Blueprint / Graph paper SVG Grid with 4th-line emphasis & masked fade */}
      <div
        className="absolute inset-0"
        style={{
          maskImage:
            "radial-gradient(ellipse 75% 65% at 50% 35%, black 20%, rgba(0,0,0,0.5) 60%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 65% at 50% 35%, black 20%, rgba(0,0,0,0.5) 60%, transparent 100%)"
        }}
      >
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <defs>
            {/* Small 56px base pattern (fine neutral-blue lines) */}
            <pattern
              id="hero-grid-sub"
              width="56"
              height="56"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 56 0 L 0 0 0 56"
                fill="none"
                stroke="currentColor"
                className="text-blue-900/10 dark:text-sky-300/10"
                strokeWidth="1"
              />
            </pattern>

            {/* Large 224px pattern (every 4th line in bold brand blue) */}
            <pattern
              id="hero-grid-main"
              width="224"
              height="224"
              patternUnits="userSpaceOnUse"
            >
              {/* Fill with subgrid */}
              <rect width="224" height="224" fill="url(#hero-grid-sub)" />

              {/* Major 4th lines */}
              <path
                d="M 224 0 L 0 0 0 224"
                fill="none"
                stroke="currentColor"
                className="text-primary/30 dark:text-sky-400/25"
                strokeWidth="1.5"
              />

              {/* Faint pixel highlight node at major intersection */}
              <circle
                cx="0"
                cy="0"
                r="2.5"
                fill="currentColor"
                className="text-primary/50 dark:text-sky-300/50"
              />
              <circle
                cx="224"
                cy="0"
                r="2.5"
                fill="currentColor"
                className="text-primary/50 dark:text-sky-300/50"
              />
              <circle
                cx="0"
                cy="224"
                r="2.5"
                fill="currentColor"
                className="text-primary/50 dark:text-sky-300/50"
              />
              <circle
                cx="224"
                cy="224"
                r="2.5"
                fill="currentColor"
                className="text-primary/50 dark:text-sky-300/50"
              />

              {/* Subtle accent highlight in a single cell */}
              <rect
                x="56"
                y="56"
                width="56"
                height="56"
                fill="currentColor"
                className="text-primary/[0.04] dark:text-sky-400/[0.05]"
              />
            </pattern>
          </defs>

          {/* Grid Canvas fill */}
          <rect width="100%" height="100%" fill="url(#hero-grid-main)" />
        </svg>
      </div>

      {/* 4. Bottom fade to blend cleanly into next section without hard edges */}
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-background via-background/70 to-transparent" />
    </div>
  );
}
