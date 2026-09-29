"use client";

import { useState } from "react";
import { LayoutGroup, motion } from "framer-motion";

import {
  BluePlusCard,
  ChartCard,
  DarkQuoteCard,
  DashboardCard,
  PartialEdgeCard,
  PercentageCard,
  PhotoCard,
  StatsCard
} from "./cards";
import { HERO_CARDS_LIST } from "@/data/hero-strip-data";

const CARD_COMPONENTS = [
  DashboardCard,
  PhotoCard,
  ChartCard,
  DarkQuoteCard,
  BluePlusCard,
  StatsCard,
  PercentageCard,
  PartialEdgeCard
];

export function CardStrip() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="relative w-full max-w-full overflow-hidden py-4 sm:py-6 md:py-8 select-none">
      {/* ========================================================
          MOBILE VIEW (phone: < sm / < 640px)
          Show only 1 hero card centered with NO effects (flat, zero 3D, zero hover tilt)
         ======================================================== */}
      <div className="flex sm:hidden w-full max-w-full items-center justify-center px-4 py-4">
        <div className="relative h-[240px] w-full max-w-[280px] overflow-hidden rounded-2xl border-0">
          <ChartCard />
        </div>
      </div>

      {/* ========================================================
          TABLET VIEW (sm to lg: 640px - 1024px)
          Show only 3 center cards with balanced spacing
         ======================================================== */}
      <div
        className="hidden sm:flex lg:hidden mx-auto w-full max-w-3xl items-center justify-center px-6"
        style={{ perspective: "1200px" }}
      >
        <div
          className="flex w-full items-center justify-center gap-4 py-6"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Card 2: PhotoCard */}
          <div
            className="relative h-[250px] w-[180px] shrink-0 rounded-2xl border-0"
            style={{
              transform: "translateY(8px) rotateY(10deg)",
              transformStyle: "preserve-3d"
            }}
          >
            <PhotoCard />
          </div>

          {/* Card 3: ChartCard (Center) */}
          <div
            className="relative h-[260px] w-[210px] shrink-0 rounded-2xl border-0 z-20"
            style={{
              transform: "translateY(0px) rotateY(0deg)",
              transformStyle: "preserve-3d"
            }}
          >
            <ChartCard />
          </div>

          {/* Card 4: DarkQuoteCard */}
          <div
            className="relative h-[250px] w-[180px] shrink-0 rounded-2xl border-0"
            style={{
              transform: "translateY(8px) rotateY(-10deg)",
              transformStyle: "preserve-3d"
            }}
          >
            <DarkQuoteCard />
          </div>
        </div>
      </div>

      {/* ========================================================
          DESKTOP VIEW (lg+: >= 1024px)
          Show full 8-card curved panoramic strip with Framer Motion hover push-aside
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
              const Component = CARD_COMPONENTS[idx];
              const isHovered = hoveredIdx === idx;
              const hasHover = hoveredIdx !== null;

              // 3D rotation & curve calculation
              const rotateY = isHovered ? 0 : card.defaultRotateY;
              const translateY = isHovered ? -20 : card.curveY;
              const scale = isHovered ? 1.25 : hasHover ? 0.92 : card.scaleFactor;
              const opacity = 1; // Solid with no transparency effect

              // Animated width spring expansion: sibling cards get pushed sideways naturally
              const width = isHovered ? 240 : 160;

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
                    opacity
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
                  className="relative h-[240px] shrink-0 cursor-pointer snap-center rounded-2xl border-0 outline-none select-none sm:h-[260px]"
                >
                  <Component />
                </motion.div>
              );
            })}
          </motion.div>
        </LayoutGroup>
      </div>
    </div>
  );
}


