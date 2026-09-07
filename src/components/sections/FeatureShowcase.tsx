"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { gsap, useGSAP } from "@/lib/animations";

export interface FeatureItem {
  id: string;
  number: string;
  name: string;
  description: string;
  image: string;
  secondaryImage: string;
  alt: string;
  secondaryAlt: string;
}

// TODO: replace with Jadubot's own screenshots (temporary placeholder assets from lazychat.io)
export const FEATURES: FeatureItem[] = [
  {
    id: "image-recognition",
    number: "01",
    name: "Image Recognition",
    description:
      "Jadubot is the only AI in the world that can recognize product images and reply with the exact item, price, and options.",
    image: "/assets/images/temp-placeholders/features/image-recognition-1.png",
    secondaryImage:
      "/assets/images/temp-placeholders/features/image-recognition-2.png",
    alt: "Jadubot Image Recognition showcase",
    secondaryAlt: "Product ordering chat conversation with image recognition"
  },
  {
    id: "multi-lingual",
    number: "02",
    name: "Multi Lingual",
    description:
      "Jadubot replies naturally in the language your customers use. That can be Bangla, English, Banglish.",
    image: "/assets/images/temp-placeholders/features/multi-lingual-1.png",
    secondaryImage:
      "/assets/images/temp-placeholders/features/multi-lingual-2.gif",
    alt: "Jadubot Multi Lingual conversational automation",
    secondaryAlt: "Multilingual translation and dialect support"
  },
  {
    id: "complaint-handling",
    number: "03",
    name: "Complaint Handling",
    description:
      "Whenever a customer reports a problem, Jadubot detects it and sorts those chats into a 'Complaint' section; making follow-ups fast and easy.",
    image: "/assets/images/temp-placeholders/features/complaint-handling-1.png",
    secondaryImage:
      "/assets/images/temp-placeholders/features/complaint-handling-2.png",
    alt: "Jadubot Complaint ticket dashboard",
    secondaryAlt: "Smartphone screen with order issue notifications"
  },
  {
    id: "app-support",
    number: "04",
    name: "App Support",
    description:
      "Jadubot is available on both the App Store and Play Store. Manage customer chats, track orders, and check analytics from anywhere.",
    image: "/assets/images/temp-placeholders/features/app-support-1.png",
    secondaryImage:
      "/assets/images/temp-placeholders/features/app-support-2.png",
    alt: "Jadubot Web and Mobile Dashboard",
    secondaryAlt: "Jadubot Mobile App on tablet and smartphone"
  }
];

export function FeatureShowcase() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const textBlocksRef = useRef<HTMLDivElement[]>([]);
  const cardPairsRef = useRef<HTMLDivElement[]>([]);
  const [activeFeatureIndex, setActiveFeatureIndex] = useState<number>(0);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        return;
      }

      const textBlocks = textBlocksRef.current.filter(Boolean);
      const cardPairs = cardPairsRef.current.filter(Boolean);

      // Initial setup
      // First card pair sits at y: "0%", later card pairs sit below at y: "115%"
      cardPairs.forEach((pair, i) => {
        gsap.set(pair, {
          y: i === 0 ? "0%" : "115%",
          zIndex: (i + 1) * 10
        });
      });

      // Left/top text: item 0 visible, others hidden
      textBlocks.forEach((block, i) => {
        gsap.set(block, {
          opacity: i === 0 ? 1 : 0,
          y: i === 0 ? 0 : 20,
          zIndex: i === 0 ? 10 : 1
        });
      });

      const getNavbarHeight = () => {
        if (typeof window === "undefined") return 72;
        const header = document.querySelector("header");
        return header ? Math.round(header.getBoundingClientRect().height) : (window.innerWidth < 1024 ? 72 : 88);
      };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: () => `top ${getNavbarHeight()}px`,
          end: () => `+=${FEATURES.length * (window.innerWidth < 1024 ? 550 : 800)}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const idx = Math.min(
              FEATURES.length - 1,
              Math.floor(self.progress * FEATURES.length)
            );
            setActiveFeatureIndex(idx);
          }
        }
      });

      // Phase 1: Card 1 ("Multi Lingual") slides from bottom and stacks on top of Card 0
      tl.to(cardPairs[1], { y: "0%", ease: "none", duration: 1 }, 0.2)
        .to(textBlocks[0], { opacity: 0, y: -20, ease: "power1.out", duration: 0.4 }, 0.2)
        .to(textBlocks[1], { opacity: 1, y: 0, ease: "power1.out", duration: 0.5 }, 0.5)

      // Phase 2: Card 2 ("Complaint Handling") slides from bottom and stacks on top of Card 1
        .to(cardPairs[2], { y: "0%", ease: "none", duration: 1 }, 1.4)
        .to(textBlocks[1], { opacity: 0, y: -20, ease: "power1.out", duration: 0.4 }, 1.4)
        .to(textBlocks[2], { opacity: 1, y: 0, ease: "power1.out", duration: 0.5 }, 1.7)

      // Phase 3: Card 3 ("App Support") slides from bottom and stacks on top of Card 2
        .to(cardPairs[3], { y: "0%", ease: "none", duration: 1 }, 2.6)
        .to(textBlocks[2], { opacity: 0, y: -20, ease: "power1.out", duration: 0.4 }, 2.6)
        .to(textBlocks[3], { opacity: 1, y: 0, ease: "power1.out", duration: 0.5 }, 2.9)

      // Buffer hold at the end while viewing final feature before unpinning
        .to({}, { duration: 0.5 });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative bg-[#0c0e12] overflow-hidden py-8 sm:py-12 lg:py-24 border-t border-[#373a41]/60"
    >
      {/* Background Ambience */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] opacity-75"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[400px] w-[650px] rounded-full bg-[#4a00e0]/15 blur-[150px]"
        aria-hidden="true"
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Unified Layout: Column on mobile/phone, 2-column grid on desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center min-h-[520px] lg:min-h-[580px]">
          
          {/* Top (Mobile) / Left (Desktop) Column: Eyebrow + Heading + Cross-fading feature name/description */}
          <div className="w-full lg:col-span-5 flex flex-col justify-center text-left">
            <div>
              {/* Static Eyebrow Badge */}
              <div className="solution-badge inline-flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-[#c084fc]" />
                <span>Features</span>
              </div>

              {/* Static Main Section Title */}
              <h2 className="mt-2.5 sm:mt-4 font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-white leading-[1.15]">
                What Jadubot does
              </h2>
            </div>

            {/* Dynamic Swap Container: Feature Name + Description */}
            <div className="relative mt-4 sm:mt-6 lg:mt-10 min-h-[90px] sm:min-h-[110px] lg:min-h-[200px] w-full">
              {FEATURES.map((feat, idx) => (
                <div
                  key={feat.id}
                  ref={(el) => {
                    if (el) textBlocksRef.current[idx] = el;
                  }}
                  className="absolute inset-0 flex flex-col justify-start"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <span className="font-mono text-[11px] sm:text-xs font-bold text-[#c084fc] px-2 sm:px-2.5 py-0.5 rounded-full border border-[#8e2de2]/30 bg-[#8e2de2]/10">
                      {feat.number}
                    </span>
                    <h3 className="font-heading text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white tracking-tight">
                      {feat.name}
                    </h3>
                  </div>

                  <p className="mt-2 sm:mt-3 lg:mt-4 text-xs sm:text-sm lg:text-base xl:text-lg leading-relaxed text-[#cecfd2]/85 max-w-xl lg:max-w-md">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Feature Step Dots Indicator */}
            <div className="mt-3 sm:mt-5 lg:mt-8 flex items-center gap-2">
              {FEATURES.map((feat, idx) => (
                <div
                  key={feat.id}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeFeatureIndex === idx
                      ? "w-8 bg-gradient-to-r from-[#4a00e0] to-[#8e2de2]"
                      : "w-2 bg-[#373a41]/70"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Bottom (Mobile) / Right (Desktop) Column: Stack of Card Pairs sliding from bottom to stack on top of previous */}
          <div className="w-full lg:col-span-7 relative flex items-center justify-center mt-5 sm:mt-8 lg:mt-0">
            <div className="relative w-full max-w-[340px] sm:max-w-[440px] lg:max-w-[620px] xl:max-w-[650px] h-[260px] sm:h-[320px] lg:h-[500px] xl:h-[540px] overflow-hidden rounded-2xl sm:rounded-3xl">
              {FEATURES.map((feat, idx) => (
                <div
                  key={feat.id}
                  ref={(el) => {
                    if (el) cardPairsRef.current[idx] = el;
                  }}
                  className="absolute inset-0 flex items-start justify-center gap-3 sm:gap-4 xl:gap-6 will-change-transform pt-1 sm:pt-2"
                >
                  {/* Left card of the pair (positioned higher) */}
                  <div className="w-[47%] sm:w-[48%] aspect-[5/7] relative overflow-hidden rounded-xl sm:rounded-2xl xl:rounded-3xl border border-[#373a41]/90 bg-[#12151c]">
                    <Image
                      src={feat.image}
                      alt={feat.alt}
                      fill
                      sizes="(max-width: 640px) 160px, (max-width: 1024px) 220px, 300px"
                      priority={idx === 0}
                      className="object-cover object-top"
                    />
                  </div>

                  {/* Right card of the pair (staggered lower - not aligned with left card) */}
                  <div className="w-[47%] sm:w-[48%] aspect-[5/7] relative overflow-hidden rounded-xl sm:rounded-2xl xl:rounded-3xl border border-[#373a41]/90 bg-[#12151c] mt-4 sm:mt-6 lg:mt-8 xl:mt-10">
                    <Image
                      src={feat.secondaryImage}
                      alt={feat.secondaryAlt}
                      fill
                      sizes="(max-width: 640px) 160px, (max-width: 1024px) 220px, 300px"
                      priority={idx === 0}
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
