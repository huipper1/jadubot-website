"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  MessageSquare,
  Instagram,
  FileText,
  ShoppingCart,
  Send,
  Cpu,
  Check,
  Zap,
  Sparkles,
  ShieldCheck
} from "lucide-react";
import { gsap, useGSAP } from "@/lib/animations";
import { SERVICE_ITEMS, type ServiceItem } from "./service-data";

// Floating Badges matching the screenshot visuals
function FloatingBadge({ type }: { type: ServiceItem["iconType"] }) {
  switch (type) {
    case "messenger":
      return (
        <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-tr from-[#0084ff] via-[#0172ff] to-[#00c6ff] p-0.5 shadow-[0_0_20px_rgba(0,132,255,0.6)] animate-float-slow">
          <div className="flex h-full w-full items-center justify-center rounded-full bg-[#0084ff]/90 backdrop-blur-md">
            <svg
              className="h-4 w-4 sm:h-5 sm:w-5 fill-white text-white drop-shadow-md"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.477 2 2 6.145 2 11.26c0 2.915 1.45 5.518 3.716 7.15V22l3.433-1.884c.915.254 1.884.39 2.851.39 5.523 0 10-4.145 10-9.26C22 6.145 17.523 2 12 2zm1.06 12.443l-2.67-2.85-5.21 2.85 5.73-6.08 2.73 2.85 5.15-2.85-5.73 6.08z" />
            </svg>
          </div>
        </div>
      );

    case "instagram":
      return (
        <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af] p-0.5 shadow-[0_0_20px_rgba(221,42,123,0.5)] animate-float-delayed">
          <div className="flex h-full w-full items-center justify-center rounded-2xl bg-card/90 backdrop-blur-md">
            <Instagram className="h-4 w-4 sm:h-5 sm:w-5 text-[#fe78e1] drop-shadow-[0_0_10px_rgba(254,120,225,0.8)]" />
          </div>
        </div>
      );

    case "lead":
      return (
        <div className="absolute top-1/2 -left-2 sm:-left-3 -translate-y-1/2 z-20 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-2xl border border-primary/30 bg-card p-1.5 shadow-card backdrop-blur-md animate-float-slow">
          <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5 text-primary drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
        </div>
      );

    case "store":
      return (
        <div className="absolute -top-2 right-3 sm:-top-3 sm:right-5 z-20 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-2xl border border-primary/30 bg-card p-1.5 shadow-card backdrop-blur-md animate-float-delayed">
          <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5 text-primary drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
        </div>
      );

    case "gps":
      return (
        <div className="absolute top-2 -right-2 sm:top-3 sm:-right-3 z-20 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-2xl border border-primary/30 bg-card p-1.5 shadow-card backdrop-blur-md animate-float-slow">
          <Send className="h-4 w-4 sm:h-5 sm:w-5 text-primary drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
        </div>
      );

    case "ai":
      return (
        <div className="absolute bottom-2 -right-2 sm:bottom-3 sm:-right-3 z-20 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-2xl border border-primary/30 bg-card p-1.5 shadow-card backdrop-blur-md animate-float-delayed">
          <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-primary drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
        </div>
      );

    default:
      return null;
  }
}

function getServiceIcon(type: ServiceItem["iconType"]) {
  switch (type) {
    case "messenger":
      return MessageSquare;
    case "instagram":
      return Instagram;
    case "lead":
      return FileText;
    case "store":
      return ShoppingCart;
    case "gps":
      return Send;
    case "ai":
      return Cpu;
    default:
      return Zap;
  }
}

export function ServiceGrid() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        return;
      }

      const cards = cardsRef.current.filter(Boolean);
      if (cards.length === 0) return;

      // Initial setup: Card 0 sits at y: "0%", subsequent cards sit below at y: "120%"
      cards.forEach((card, i) => {
        gsap.set(card, {
          y: i === 0 ? "0%" : "120%",
          scale: 1,
          opacity: 1,
          zIndex: (i + 1) * 2
        });
      });

      const getNavbarHeight = () => {
        if (typeof window === "undefined") return 72;
        const header = document.querySelector("header");
        return header
          ? Math.round(header.getBoundingClientRect().height)
          : window.innerWidth < 1024
            ? 72
            : 88;
      };

      // Pinned scrub timeline: section locks into place, cards slide from below one by one
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: () => `top ${getNavbarHeight() + 6}px`,
          end: () =>
            `+=${SERVICE_ITEMS.length * (window.innerWidth < 1024 ? 500 : 700)}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const idx = Math.min(
              SERVICE_ITEMS.length - 1,
              Math.floor(self.progress * SERVICE_ITEMS.length)
            );
            setActiveCardIndex(idx);
          }
        }
      });

      // Chain each card stacking on top of earlier cards without dimming/disappearing
      for (let i = 1; i < cards.length; i++) {
        const startTime = (i - 1) * 1.2;

        tl.to(
          cards[i],
          {
            y: "0%",
            ease: "none",
            duration: 1
          },
          startTime + 0.1
        );
      }

      // Buffer hold at the end so user can view the final card comfortably before unpinning
      tl.to({}, { duration: 0.5 });
    },
    { scope: sectionRef }
  );

  return (
    <div
      ref={sectionRef}
      id="services-showcase"
      className="relative flex flex-col justify-center py-2 sm:py-3 min-h-[calc(100vh-90px)]"
    >
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Pinned Card Deck Stage - Perfectly sized to never overflow viewport */}
        <div className="relative z-10 mx-auto w-full max-w-6xl h-[430px] sm:h-[460px] lg:h-[490px] xl:h-[510px] max-h-[calc(100vh-120px)]">
          {SERVICE_ITEMS.map((service, index) => {
            const Icon = getServiceIcon(service.iconType);
            const isContentLeft = service.layout === "content-left";

            return (
              <div
                key={service.id}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="absolute inset-0 w-full h-full will-change-transform"
                style={{
                  zIndex: 2 * (index + 1)
                }}
              >
                <div className="group relative h-full w-full rounded-[2rem] sm:rounded-[2.5rem] border border-border/80 bg-card dark:bg-gradient-to-b dark:from-[#131524] dark:via-[#0e101b] dark:to-[#090b12] p-5 sm:p-7 md:p-8 lg:px-12 lg:py-8 backdrop-blur-2xl flex flex-col justify-center transition-colors hover:border-primary/40">
                  {/* Subtle Ambient Radial Lighting */}
                  {/* <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-[380px] w-[380px] rounded-full bg-blue-600/12 blur-[120px]" />
                  <div className="pointer-events-none absolute -left-24 -bottom-24 -z-10 h-[320px] w-[320px] rounded-full bg-indigo-600/10 blur-[110px]" /> */}

                  {/* 2-Column Responsive Alternating Layout */}
                  <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-12 lg:gap-8 xl:gap-10 lg:items-center pt-8 sm:pt-10 lg:pt-0">
                    {/* Content Column */}
                    <div
                      className={`flex flex-col justify-center ${isContentLeft
                        ? "lg:col-span-5 order-2 lg:order-1"
                        : "lg:col-span-5 order-2 lg:order-2"
                        }`}
                    >
                      {/* Step Badge & Icon */}
                      <div className="flex items-center gap-2.5 sm:gap-3">
                        <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl border border-primary/35 bg-primary/10 text-primary shadow-[0_0_18px_rgba(1,114,255,0.25)]">
                          <Icon className="h-4 w-4 sm:h-4.5 sm:w-4.5 text-primary" />
                        </div>
                        <span className="text-xs sm:text-sm font-bold tracking-widest text-primary font-mono">
                          {service.number}
                        </span>
                      </div>

                      {/* Card Title */}
                      <h3 className="mt-2 sm:mt-2.5 lg:mt-3 font-heading text-lg sm:text-xl lg:text-2xl xl:text-[27px] font-extrabold tracking-tight text-foreground leading-tight">
                        {service.title}
                      </h3>

                      {/* Card Description */}
                      <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm lg:text-[14px] xl:text-[15px] leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>

                      {/* Checkmarks / Benefits List */}
                      <ul className="mt-2.5 sm:mt-3 space-y-1 sm:space-y-1.5 lg:space-y-2 border-t border-border pt-2 sm:pt-2.5">
                        {service.benefits.map((benefit) => (
                          <li
                            key={benefit}
                            className="flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm font-medium text-foreground"
                          >
                            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-[#0052cc] to-[#0172ff] text-white shadow-[0_0_8px_rgba(1,114,255,0.4)]">
                              <Check className="h-2.5 w-2.5 stroke-[3]" />
                            </span>
                            <span className="leading-snug">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Image Column - Combined directly into card without nested window frame */}
                    <div
                      className={`relative flex items-center justify-center ${isContentLeft
                        ? "lg:col-span-7 order-1 lg:order-2"
                        : "lg:col-span-7 order-1 lg:order-1"
                        }`}
                    >
                      <div className="relative w-full overflow-visible flex items-center justify-center">
                        {/* Soft ambient lighting behind the graphic */}
                        <div
                          className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-tr from-blue-600/15 via-[#0172ff]/12 to-transparent blur-3xl"
                          aria-hidden="true"
                        />

                        {/* Direct Image Graphic */}
                        <Image
                          src={service.image}
                          alt={service.imageAlt}
                          width={service.imageWidth}
                          height={service.imageHeight}
                          quality={95}
                          priority={index < 2}
                          className="w-full max-h-[160px] sm:max-h-[200px] lg:max-h-[250px] xl:max-h-[280px] h-auto object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.55)] transition-transform duration-500 group-hover:scale-[1.015]"
                        />

                        {/* Floating 3D Badge */}
                        <FloatingBadge type={service.iconType} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Top-Left Floating Badge (from screenshot) - Always on top */}
          <div className="pointer-events-none absolute top-3 left-4 sm:top-4 sm:left-6 z-50 hidden sm:flex items-center gap-2.5 rounded-2xl border border-border/70 dark:border-white/15 bg-card/90 dark:bg-[#121420]/90 backdrop-blur-md px-3.5 py-2 sm:px-4 sm:py-2.5 shadow-xl">
            <div className="flex items-center justify-center text-primary">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 16 16">
                <circle cx="8" cy="2" r="1.6" />
                <circle cx="2" cy="8" r="1.6" />
                <circle cx="14" cy="8" r="1.6" />
                <circle cx="8" cy="14" r="1.6" />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs sm:text-[13px] font-semibold text-foreground dark:text-white tracking-tight leading-tight">
                Automation in 45 days
              </span>
              <span className="text-[10px] sm:text-[11px] text-muted-foreground dark:text-white/60 font-normal leading-tight">
                Clear timeline. Measurable results.
              </span>
            </div>
          </div>

          {/* Top-Right Step / Progress Indicator - Always on top */}
          <div className="pointer-events-none absolute top-3 right-4 sm:top-4 sm:right-6 z-50 hidden sm:flex items-center gap-2.5 rounded-2xl border border-border/70 dark:border-white/15 bg-card/90 dark:bg-[#121420]/90 backdrop-blur-md px-3.5 py-2 shadow-xl">
            <div className="flex items-center gap-1.5">
              {SERVICE_ITEMS.map((item, idx) => (
                <div
                  key={item.id}
                  className={`h-1.5 rounded-full transition-all duration-300 ${activeCardIndex === idx
                    ? "w-6 bg-gradient-to-r from-primary to-sky-400"
                    : "w-2 bg-muted-foreground/30"
                    }`}
                />
              ))}
            </div>
            <span className="font-mono text-xs font-semibold text-primary pl-1">
              0{activeCardIndex + 1}/0{SERVICE_ITEMS.length}
            </span>
          </div>

          {/* Bottom-Right Floating Badge (from screenshot) - Always on top */}
          <div className="pointer-events-none absolute bottom-3 right-4 sm:bottom-4 sm:right-6 z-50 hidden sm:flex items-center gap-3 rounded-2xl border border-border/70 dark:border-white/15 bg-card/90 dark:bg-[#121420]/90 backdrop-blur-md px-3.5 py-2 sm:px-4 sm:py-2.5 shadow-xl">
            {/* 3 Overlapping Avatars */}
            <div className="flex -space-x-2 overflow-hidden shrink-0">
              <Image
                src="/assets/images/shared/33.jpg"
                alt="Client portrait"
                width={26}
                height={26}
                className="inline-block h-6.5 w-6.5 rounded-full ring-2 ring-background dark:ring-[#121420] object-cover"
              />
              <Image
                src="/assets/images/shared/44.jpg"
                alt="Client portrait"
                width={26}
                height={26}
                className="inline-block h-6.5 w-6.5 rounded-full ring-2 ring-background dark:ring-[#121420] object-cover"
              />
              <Image
                src="/assets/images/shared/42.jpg"
                alt="Client portrait"
                width={26}
                height={26}
                className="inline-block h-6.5 w-6.5 rounded-full ring-2 ring-background dark:ring-[#121420] object-cover"
              />
            </div>
            {/* Rating & Text */}
            <div className="flex flex-col text-left">
              <div className="flex items-center text-amber-500 dark:text-amber-400 text-[10px] sm:text-[11px] leading-none mb-0.5">
                {"★★★★★"}
              </div>
              <span className="text-[11px] sm:text-xs font-semibold text-foreground dark:text-white tracking-tight leading-tight">
                Trusted by 50+ companies
              </span>
            </div>
            {/* Diamond Sparkle Icon */}
            <div className="flex items-center justify-center text-primary pl-0.5">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 16 16">
                <circle cx="8" cy="2" r="1.6" />
                <circle cx="2" cy="8" r="1.6" />
                <circle cx="14" cy="8" r="1.6" />
                <circle cx="8" cy="14" r="1.6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

