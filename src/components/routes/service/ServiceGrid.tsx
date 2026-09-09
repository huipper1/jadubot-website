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
        <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-tr from-[#0084ff] via-[#a855f7] to-[#00c6ff] p-0.5 shadow-[0_0_20px_rgba(0,132,255,0.6)] animate-float-slow">
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
          <div className="flex h-full w-full items-center justify-center rounded-2xl bg-[#140b1e]/90 backdrop-blur-md">
            <Instagram className="h-4 w-4 sm:h-5 sm:w-5 text-[#fe78e1] drop-shadow-[0_0_10px_rgba(254,120,225,0.8)]" />
          </div>
        </div>
      );

    case "lead":
      return (
        <div className="absolute top-1/2 -left-2 sm:-left-3 -translate-y-1/2 z-20 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-2xl border border-purple-500/40 bg-[#1e1035]/90 p-1.5 shadow-[0_0_18px_rgba(168,85,247,0.45)] backdrop-blur-md animate-float-slow">
          <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5 text-purple-300 drop-shadow-[0_0_8px_rgba(192,132,252,0.8)]" />
        </div>
      );

    case "store":
      return (
        <div className="absolute -top-2 right-3 sm:-top-3 sm:right-5 z-20 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-2xl border border-purple-500/40 bg-[#1e1035]/90 p-1.5 shadow-[0_0_18px_rgba(168,85,247,0.45)] backdrop-blur-md animate-float-delayed">
          <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5 text-purple-300 drop-shadow-[0_0_8px_rgba(192,132,252,0.8)]" />
        </div>
      );

    case "gps":
      return (
        <div className="absolute top-2 -right-2 sm:top-3 sm:-right-3 z-20 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-2xl border border-purple-500/40 bg-[#1e1035]/90 p-1.5 shadow-[0_0_18px_rgba(168,85,247,0.45)] backdrop-blur-md animate-float-slow">
          <Send className="h-4 w-4 sm:h-5 sm:w-5 text-purple-300 drop-shadow-[0_0_8px_rgba(192,132,252,0.8)]" />
        </div>
      );

    case "ai":
      return (
        <div className="absolute bottom-2 -right-2 sm:bottom-3 sm:-right-3 z-20 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-2xl border border-purple-500/40 bg-[#1e1035]/90 p-1.5 shadow-[0_0_18px_rgba(168,85,247,0.45)] backdrop-blur-md animate-float-delayed">
          <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-purple-300 drop-shadow-[0_0_8px_rgba(192,132,252,0.8)]" />
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
  const sectionRef = useRef<HTMLElement | null>(null);
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
          zIndex: (i + 1) * 10
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
    <section
      ref={sectionRef}
      id="services-showcase"
      className="relative flex flex-col justify-center overflow-hidden py-3 sm:py-4 lg:py-5 min-h-[calc(100vh-76px)]"
    >
      {/* Background Ambience consistent with other pages */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] opacity-70"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 -z-10 h-[550px] w-[900px] rounded-full bg-[#4a00e0]/12 blur-[170px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-2/3 -z-10 h-[500px] w-[500px] rounded-full bg-[#8e2de2]/10 blur-[160px]"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Step Indicator / Header Bar */}
        <div className="mx-auto mb-2 sm:mb-3 flex max-w-6xl items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-2.5">
            {SERVICE_ITEMS.map((item, idx) => (
              <div
                key={item.id}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeCardIndex === idx
                    ? "w-8 sm:w-9 bg-gradient-to-r from-purple-500 to-brand"
                    : "w-2.5 bg-[#373a41]/70"
                }`}
              />
            ))}
          </div>
          <span className="font-mono text-xs sm:text-sm font-semibold text-purple-300/80">
            0{activeCardIndex + 1} / 0{SERVICE_ITEMS.length}
          </span>
        </div>

        {/* Pinned Card Deck Stage - Perfectly sized to never overflow viewport */}
        <div className="relative mx-auto w-full max-w-6xl h-[410px] sm:h-[430px] lg:h-[450px] xl:h-[470px] max-h-[calc(100vh-130px)]">
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
                  zIndex: 10 * (index + 1)
                }}
              >
                <div className="group relative h-full w-full rounded-3xl border border-[#2d3142]/80 bg-gradient-to-b from-[#131524] via-[#0e101b] to-[#090b12] p-5 sm:p-6 md:p-7 lg:px-10 lg:py-6 xl:px-12 xl:py-7 shadow-[0_25px_70px_rgba(0,0,0,0.85)] backdrop-blur-2xl flex flex-col justify-center transition-colors hover:border-purple-500/40">
                  {/* Subtle Ambient Radial Lighting */}
                  <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-[380px] w-[380px] rounded-full bg-purple-600/12 blur-[120px]" />
                  <div className="pointer-events-none absolute -left-24 -bottom-24 -z-10 h-[320px] w-[320px] rounded-full bg-indigo-600/10 blur-[110px]" />

                  {/* 2-Column Responsive Alternating Layout */}
                  <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-12 lg:gap-8 xl:gap-10 lg:items-center">
                    {/* Content Column */}
                    <div
                      className={`flex flex-col justify-center ${
                        isContentLeft
                          ? "lg:col-span-5 order-2 lg:order-1"
                          : "lg:col-span-5 order-2 lg:order-2"
                      }`}
                    >
                      {/* Step Badge & Icon */}
                      <div className="flex items-center gap-2.5 sm:gap-3">
                        <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl border border-purple-500/35 bg-[#1b1232]/80 text-purple-300 shadow-[0_0_18px_rgba(168,85,247,0.25)]">
                          <Icon className="h-4 w-4 sm:h-4.5 sm:w-4.5 text-purple-400" />
                        </div>
                        <span className="text-xs sm:text-sm font-bold tracking-widest text-purple-400/90 font-mono">
                          {service.number}
                        </span>
                      </div>

                      {/* Card Title */}
                      <h3 className="mt-2 sm:mt-2.5 lg:mt-3 font-heading text-lg sm:text-xl lg:text-2xl xl:text-[27px] font-extrabold tracking-tight text-white leading-tight">
                        {service.title}
                      </h3>

                      {/* Card Description */}
                      <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm lg:text-[14px] xl:text-[15px] leading-relaxed text-slate-300/90">
                        {service.description}
                      </p>

                      {/* Checkmarks / Benefits List */}
                      <ul className="mt-2.5 sm:mt-3 space-y-1 sm:space-y-1.5 lg:space-y-2 border-t border-white/10 pt-2 sm:pt-2.5">
                        {service.benefits.map((benefit) => (
                          <li
                            key={benefit}
                            className="flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm font-medium text-slate-200"
                          >
                            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 text-white shadow-[0_0_8px_rgba(168,85,247,0.4)]">
                              <Check className="h-2.5 w-2.5 stroke-[3]" />
                            </span>
                            <span className="leading-snug">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Image Column - Combined directly into card without nested window frame */}
                    <div
                      className={`relative flex items-center justify-center ${
                        isContentLeft
                          ? "lg:col-span-7 order-1 lg:order-2"
                          : "lg:col-span-7 order-1 lg:order-1"
                      }`}
                    >
                      <div className="relative w-full overflow-visible flex items-center justify-center">
                        {/* Soft ambient lighting behind the graphic */}
                        <div
                          className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-tr from-purple-600/15 via-brand/12 to-transparent blur-3xl"
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
        </div>
      </div>
    </section>
  );
}

