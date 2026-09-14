"use client";

import Image from "next/image";
import { CLIENT_LOGOS } from "./pricing-data";

const BRAND_LOGOS = [
  { name: "Easydrop", src: "/assets/images/home/easydrop-1-e1738610976518.png" },
  { name: "Green WordPress", src: "/assets/images/home/greenwordpress-logo-1.png" },
  { name: "Khabodabo", src: "/assets/images/home/khabodabo-logo-1.png" },
  { name: "LearninBD", src: "/assets/images/home/learninbd-logo-1.png" },
  { name: "Mitali FC", src: "/assets/images/home/mitalifc-logo-e1738611032855.png" },
  { name: "PayTK", src: "/assets/images/home/paytk-logo.png" }
];

export function PricingLogoMarquee() {
  // Duplicate array so translateX(-50%) creates an infinite seamless loop
  const marqueeItems = [...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS];

  return (
    <section className="relative overflow-hidden py-12 sm:py-16">
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marqueeScroll 35s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="container mx-auto max-w-7xl px-4 text-center">
        <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-muted-foreground">
          Trusted by 500+ high-performing Bangladeshi brands &amp; merchants
        </p>

        {/* Marquee Wrapper with side gradient masks */}
        <div className="relative mt-8 w-full overflow-hidden">
          {/* Left Gradient Fade Mask */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-28"
            style={{
              background: "linear-gradient(to right, var(--background) 0%, transparent 100%)"
            }}
            aria-hidden="true"
          />

          {/* Right Gradient Fade Mask */}
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-28"
            style={{
              background: "linear-gradient(to left, var(--background) 0%, transparent 100%)"
            }}
            aria-hidden="true"
          />

          {/* Infinite Moving Track */}
          <div className="marquee-track items-center gap-6 sm:gap-10">
            {marqueeItems.map((brand, idx) => (
              <div
                key={idx}
                className="flex shrink-0 items-center gap-3 rounded-full border border-border bg-card/70 px-5 py-2.5 shadow-xs transition-all hover:border-primary/40 hover:bg-card"
              >
                <div className="relative h-6 w-16 sm:h-7 sm:w-20 shrink-0">
                  <Image
                    src={brand.src}
                    alt={brand.name}
                    fill
                    className="object-contain filter grayscale contrast-125 dark:brightness-150 transition-all hover:grayscale-0"
                  />
                </div>
                <span className="text-xs font-semibold text-foreground/80 tracking-tight whitespace-nowrap">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Category Badges Strip */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {CLIENT_LOGOS.slice(0, 6).map((client, idx) => (
            <span
              key={idx}
              className="rounded-full border border-border/80 bg-muted/40 px-3 py-1 text-[11px] font-medium text-muted-foreground"
            >
              {client.name} • {client.category}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
