"use client";

import Image from "next/image";
import { useState } from "react";
import { LayoutGroup, motion } from "framer-motion";

import { HERO_CARDS_LIST } from "@/data/hero-strip-data";

export function CardStrip() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="relative w-full max-w-full overflow-hidden py-4 sm:py-6 md:py-8 select-none">
      {/* ========================================================
          MOBILE VIEW (phone: < sm / < 640px)
          Show horizontal swipe/snap carousel of cards without overflowing
         ======================================================== */}
      <div className="flex sm:hidden w-full overflow-x-auto no-scrollbar snap-x snap-mandatory px-4 py-2 gap-3">
        {HERO_CARDS_LIST.map((card, idx) => (
          <div
            key={card.id}
            className="relative h-[280px] w-[210px] shrink-0 snap-center overflow-hidden rounded-2xl border border-white/40 dark:border-white/10 shadow-md shadow-primary/5 bg-card/60 backdrop-blur-xs"
          >
            <Image
              src={card.src}
              alt={card.alt}
              fill
              priority={idx < 3}
              sizes="(max-width: 640px) 210px, 240px"
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
            {/* Subtle glassy highlight border overlay */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20 dark:ring-white/10" />
          </div>
        ))}
      </div>

      {/* ========================================================
          TABLET VIEW (sm to lg: 640px - 1024px)
          Show 3 center cards with balanced spacing and perspective
         ======================================================== */}
      <div
        className="hidden sm:flex lg:hidden mx-auto w-full max-w-3xl items-center justify-center px-6"
        style={{ perspective: "1200px" }}
      >
        <div
          className="flex w-full items-center justify-center gap-4 py-6"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Card 2 */}
          <div
            className="relative h-[260px] w-[185px] shrink-0 rounded-2xl overflow-hidden border border-white/50 dark:border-white/10 shadow-lg shadow-black/10 dark:shadow-black/40 transition-transform duration-300 hover:scale-105 hover:-translate-y-2 hover:rotate-0"
            style={{
              transform: "translateY(8px) rotateY(10deg)",
              transformStyle: "preserve-3d"
            }}
          >
            <Image
              src={HERO_CARDS_LIST[1].src}
              alt={HERO_CARDS_LIST[1].alt}
              fill
              sizes="185px"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/30 dark:ring-white/10" />
          </div>

          {/* Card 3 (Center) */}
          <div
            className="relative h-[280px] w-[210px] shrink-0 rounded-2xl overflow-hidden border border-white/60 dark:border-white/15 shadow-xl shadow-primary/10 dark:shadow-black/50 z-20 transition-transform duration-300 hover:scale-105 hover:-translate-y-2"
            style={{
              transform: "translateY(0px) rotateY(0deg)",
              transformStyle: "preserve-3d"
            }}
          >
            <Image
              src={HERO_CARDS_LIST[2].src}
              alt={HERO_CARDS_LIST[2].alt}
              fill
              priority
              sizes="210px"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/40 dark:ring-white/15" />
          </div>

          {/* Card 4 */}
          <div
            className="relative h-[260px] w-[185px] shrink-0 rounded-2xl overflow-hidden border border-white/50 dark:border-white/10 shadow-lg shadow-black/10 dark:shadow-black/40 transition-transform duration-300 hover:scale-105 hover:-translate-y-2 hover:rotate-0"
            style={{
              transform: "translateY(8px) rotateY(-10deg)",
              transformStyle: "preserve-3d"
            }}
          >
            <Image
              src={HERO_CARDS_LIST[3].src}
              alt={HERO_CARDS_LIST[3].alt}
              fill
              priority
              sizes="185px"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/30 dark:ring-white/10" />
          </div>
        </div>
      </div>

      {/* ========================================================
          DESKTOP VIEW (lg+: >= 1024px)
          Show full 8-card curved panoramic strip with full-bleed images,
          framer motion spring hover lift/straighten
         ======================================================== */}
      <div
        className="hidden lg:flex mx-auto w-full max-w-[1600px] items-center justify-center px-6"
        style={{ perspective: "1500px" }}
      >
        <LayoutGroup id="hero-card-strip">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            onMouseLeave={() => setHoveredIdx(null)}
            className="flex w-full items-center justify-center gap-3.5 xl:gap-4 py-8"
            style={{ transformStyle: "preserve-3d" }}
          >
            {HERO_CARDS_LIST.map((card, idx) => {
              const isHovered = hoveredIdx === idx;
              const hasHover = hoveredIdx !== null;

              // 3D rotation & curve calculation
              const rotateY = isHovered ? 0 : card.defaultRotateY;
              const translateY = isHovered ? -22 : card.curveY;
              const scale = isHovered ? 1.22 : hasHover ? 0.93 : card.scaleFactor;

              // Animated width spring expansion: hovered card expands smoothly
              const width = isHovered ? 240 : 160;

              // Prioritize LCP on center 3 cards (index 2, 3, 4)
              const isCenterPriority = idx === 2 || idx === 3 || idx === 4;

              return (
                <motion.div
                  key={card.id}
                  layout
                  tabIndex={0}
                  role="button"
                  aria-label={card.name}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onFocus={() => setHoveredIdx(idx)}
                  onBlur={() => setHoveredIdx(null)}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{
                    width,
                    rotateY,
                    y: translateY,
                    scale,
                    opacity: 1
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                    mass: 0.8
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                    zIndex: isHovered ? 50 : 30 - Math.abs(idx - 3)
                  }}
                  className="group relative h-[250px] shrink-0 cursor-pointer snap-center rounded-2xl overflow-hidden border border-white/60 bg-slate-900/10 shadow-lg shadow-black/8 outline-none select-none transition-shadow duration-300 hover:shadow-2xl hover:shadow-primary/20 dark:border-white/15 dark:bg-slate-950/40 dark:shadow-black/50 sm:h-[270px]"
                >
                  <Image
                    src={card.src}
                    alt={card.alt}
                    fill
                    priority={isCenterPriority}
                    sizes="(min-width: 1280px) 240px, 160px"
                    className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
                  />

                  {/* Subtle glassy border and inner highlight overlay */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20 transition-opacity duration-300 group-hover:ring-white/40 dark:ring-white/10 dark:group-hover:ring-sky-400/30" />
                  
                  {/* Gentle hover shine effect */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 opacity-60 transition-opacity duration-300 group-hover:opacity-20" />
                </motion.div>
              );
            })}
          </motion.div>
        </LayoutGroup>
      </div>
    </div>
  );
}
