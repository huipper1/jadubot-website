"use client";

import { useRef, useState } from "react";
import { Users, Smile, TrendingUp, Heart } from "lucide-react";
import { gsap, useGSAP } from "@/lib/animations";
import { SectionHeader } from "@/ui";
import { PopIn } from "@/components/animations";

const METRICS = [
  {
    target: 5,
    suffix: "+",
    unit: "YEARS",
    title: "Experience You Can Trust",
    description: "Powering businesses with reliable automation since 2019.",
    icon: Users
  },
  {
    target: 97,
    suffix: "%",
    unit: "SATISFACTION",
    title: "Happy Businesses",
    description: "Businesses rate our solutions as reliable, effective, and easy to use.",
    icon: Smile
  },
  {
    target: 73,
    suffix: "%",
    unit: "HIGHER",
    title: "Higher Sales & Engagement",
    description: "Our clients see an average 73% increase in customer engagement.",
    icon: TrendingUp
  },
  {
    target: 89,
    suffix: "%",
    unit: "RETAINED",
    title: "Return-Scale Relationships",
    description: "Most of our clients continue working with us for new features and advancements.",
    icon: Heart
  }
];

export function ServiceMetrics() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        setCounts(METRICS.map((m) => m.target));
        return;
      }

      const targets = METRICS.map((m) => m.target);
      const counterObj = { v0: 0, v1: 0, v2: 0, v3: 0 };

      gsap.to(counterObj, {
        v0: targets[0],
        v1: targets[1],
        v2: targets[2],
        v3: targets[3],
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true
        },
        onUpdate: () => {
          setCounts([
            Math.round(counterObj.v0),
            Math.round(counterObj.v1),
            Math.round(counterObj.v2),
            Math.round(counterObj.v3)
          ]);
        }
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0c0e12] py-20 sm:py-24 lg:py-28"
    >
      {/* Background Ambience */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] opacity-70"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[380px] w-[650px] rounded-full bg-[#0172ff]/10 blur-[140px]"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          badge="REAL IMPACT"
          title="Helping Bangladeshi Businesses Deliver a"
          gradientTitle="Better Customer Experience"
          description={
            <>
              Businesses across Bangladesh are using our automation solutions to save time,
              <br className="hidden sm:inline" />{" "}
              increase sales, and build stronger customer relationships.
            </>
          }
        />
        <PopIn>
          {/* Metrics Grid with Dividers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {METRICS.map((metric, index) => {
              const Icon = metric.icon;

              return (
                <div
                  key={metric.title}
                  className={`group relative flex flex-col justify-start py-8 px-4 sm:px-6 lg:px-8 xl:px-10 border-[#2d3142]/70 ${
                    // Mobile (1-column): border-b on all except last
                    "border-b last:border-b-0"
                    } ${
                    // Tablet (2x2 grid): top row has border-b, bottom row does not
                    index < 2 ? "sm:border-b" : "sm:border-b-0"
                    } ${
                    // Tablet (2x2 grid): left column has border-r, right column does not
                    index % 2 === 0 ? "sm:border-r" : "sm:border-r-0"
                    } ${
                    // Desktop (4 columns): no horizontal borders
                    "lg:border-b-0"
                    } ${
                    // Desktop (4 columns): items 0, 1, 2 have border-r, item 3 has none
                    index < 3 ? "lg:border-r" : "lg:border-r-0"
                    }`}
                >
                  {/* Circular Icon */}
                  <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full border border-blue-500/40 bg-[#0b162b]/90 shadow-[0_0_22px_rgba(1,114,255,0.18)] backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:border-blue-400/60 group-hover:shadow-[0_0_30px_rgba(1,114,255,0.3)]">
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-blue-300 transition-colors group-hover:text-blue-200" />
                  </div>

                  {/* Number + Unit */}
                  <div className="mt-6 sm:mt-8 flex items-baseline gap-2.5">
                    <span className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-none">
                      {counts[index]}
                      {metric.suffix}
                    </span>
                    <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#38bdf8]">
                      {metric.unit}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-3 font-heading text-base sm:text-lg font-bold text-white tracking-tight">
                    {metric.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-400">
                    {metric.description}
                  </p>
                </div>
              );
            })}
          </div></PopIn>
      </div>
    </section>
  );
}
