"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { gsap, useGSAP } from "@/lib/animations";
import { cn } from "@/lib/utils";

export interface FeatureItem {
  id: string;
  number: string;
  category: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  ctaHref: string;
  ctaText: string;
}

export const FEATURES: FeatureItem[] = [
  {
    id: "image-recognition",
    number: "01",
    category: "Visual AI / Catalog",
    name: "Image Recognition",
    description:
      "Jadubot is the only AI in the world that can recognize product images and reply with the exact item, price, and options.",
    image: "/assets/images/temp-placeholders/features/image-recognition-1.png",
    alt: "Jadubot Image Recognition showcase",
    ctaHref: "/platform/whatsapp-automation",
    ctaText: "Explore Visual AI"
  },
  {
    id: "multi-lingual",
    number: "02",
    category: "Conversational Intelligence",
    name: "Multi Lingual",
    description:
      "Jadubot replies naturally in the language your customers use. That can be Bangla, English, Banglish.",
    image: "/assets/images/temp-placeholders/features/multi-lingual-1.png",
    alt: "Jadubot Multi Lingual conversational automation",
    ctaHref: "/ai-agents",
    ctaText: "Explore Languages"
  },
  {
    id: "complaint-handling",
    number: "03",
    category: "Customer Experience & CRM",
    name: "Complaint Handling",
    description:
      "Whenever a customer reports a problem, Jadubot detects it and sorts those chats into a 'Complaint' section; making follow-ups fast and easy.",
    image: "/assets/images/temp-placeholders/features/complaint-handling-1.png",
    alt: "Jadubot Complaint ticket dashboard",
    ctaHref: "/service",
    ctaText: "Explore Ticketing"
  },
  {
    id: "app-support",
    number: "04",
    category: "Mobile & Omnichannel Suite",
    name: "App Support",
    description:
      "Jadubot is available on both the App Store and Play Store. Manage customer chats, track orders, and check analytics from anywhere.",
    image: "/assets/images/temp-placeholders/features/app-support-1.png",
    alt: "Jadubot Web and Mobile Dashboard",
    ctaHref: "/about",
    ctaText: "Explore Mobile App"
  }
];

export function FeatureShowcase() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const slidesRef = useRef<HTMLDivElement[]>([]);
  const [activeFeatureIndex, setActiveFeatureIndex] = useState<number>(0);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) {
        return;
      }

      const slides = slidesRef.current.filter(Boolean);
      if (slides.length <= 1) return;

      // Initial placement:
      // Slide 0 is in center (xPercent: 0, opacity: 1, visibility: visible)
      // Subsequent slides are pushed completely off-screen (xPercent: 120, autoAlpha: 0)
      slides.forEach((slide, i) => {
        gsap.set(slide, {
          xPercent: i === 0 ? 0 : 120,
          autoAlpha: i === 0 ? 1 : 0,
          zIndex: (i + 1) * 10
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "center center",
          end: () => `+=${FEATURES.length * (window.innerWidth < 1024 ? 650 : 850)}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const idx = Math.min(
              FEATURES.length - 1,
              Math.floor(self.progress * (FEATURES.length - 0.02))
            );
            setActiveFeatureIndex(idx);
          }
        }
      });

      // Animate slides 1, 2, 3 coming in from the right to stack/slide over previous
      for (let i = 1; i < slides.length; i++) {
        const prevSlide = slides[i - 1];
        const currentSlide = slides[i];
        const stepTime = (i - 1) * 1.5;

        // Slide current in from the right and make visible
        tl.to(
          currentSlide,
          {
            xPercent: 0,
            autoAlpha: 1,
            ease: "power2.inOut",
            duration: 1.2
          },
          stepTime + 0.1
        );

        // Subtly push previous slide back for cinematic depth
        if (prevSlide) {
          tl.to(
            prevSlide,
            {
              scale: 0.96,
              opacity: 0.25,
              ease: "power2.inOut",
              duration: 1.2
            },
            stepTime + 0.1
          );
        }
      }

      // Buffer hold at the end
      tl.to({}, { duration: 0.5 });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden border-t border-border/60 bg-background py-8 sm:py-12"
    >
      {/* Background Ambience */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] opacity-75"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/3 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[180px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-1/4 right-1/4 -z-10 h-[400px] w-[600px] rounded-full bg-sky-500/10 blur-[160px]"
        aria-hidden="true"
      />

      {/* Centered Content Container */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
        {/* Top Header & Step Indicator */}
        <div className="mb-6 flex w-full items-center justify-between sm:mb-8">
          <div>
            <span className="font-mono text-xs font-bold tracking-widest text-primary uppercase">
              Platform Capabilities
            </span>
            <h2 className="font-heading text-2xl font-black tracking-tight text-foreground uppercase sm:text-3xl lg:text-4xl">
              What Jadubot does
            </h2>
          </div>

          {/* Dynamic Slide Dots & Step Indicator */}
          <div className="flex items-center gap-3">
            <div className="hidden font-mono text-xs font-semibold text-muted-foreground sm:block">
              <span className="text-foreground">{FEATURES[activeFeatureIndex].number}</span>
              <span className="mx-1 text-border">/</span>
              <span>0{FEATURES.length}</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              {FEATURES.map((feat, idx) => (
                <div
                  key={feat.id}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    activeFeatureIndex === idx
                      ? "w-8 bg-gradient-to-r from-primary to-sky-400"
                      : "w-2 bg-muted-foreground/30"
                  )}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Main Slides Viewport Container */}
        <div className="relative mx-auto flex h-[480px] w-full items-center overflow-hidden rounded-3xl sm:h-[520px] lg:h-[580px]">
          {FEATURES.map((feat, idx) => (
            <div
              key={feat.id}
              ref={(el) => {
                if (el) slidesRef.current[idx] = el;
              }}
              className="absolute inset-0 flex items-center will-change-transform"
            >
              {/* Card Container without shadow */}
              <div className="relative grid h-full w-full grid-cols-1 items-stretch overflow-hidden rounded-3xl border border-border/80 bg-card/95 backdrop-blur-xl lg:grid-cols-12">
                {/* Giant Watermark Background Number */}
                <span
                  className="pointer-events-none absolute right-4 bottom-0 select-none font-mono text-8xl font-black text-foreground/[0.04] sm:right-8 sm:text-[14rem] lg:right-12 lg:text-[18rem]"
                  aria-hidden="true"
                >
                  {feat.number}
                </span>

                {/* Left Column: Overlapping Typography & Content */}
                <div className="relative z-20 flex flex-col justify-center p-6 sm:p-10 lg:col-span-6 lg:p-12 xl:col-span-5 xl:p-16">
                  {/* Category Header */}
                  <div className="flex items-center gap-2.5 font-mono text-xs font-bold tracking-widest text-muted-foreground uppercase">
                    <span className="text-primary">{feat.number}</span>
                    <span className="h-px w-6 bg-border" />
                    <span>{feat.category}</span>
                  </div>

                  {/* Overlapping Hero Title */}
                  <h3 className="font-heading mt-4 text-3xl font-black tracking-tight text-foreground uppercase sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
                    {feat.name}
                  </h3>

                  {/* Subtitle / Description */}
                  <p className="mt-4 max-w-md text-xs leading-relaxed text-muted-foreground sm:text-sm lg:text-base">
                    {feat.description}
                  </p>

                  {/* Explore Service / Feature Button */}
                  <div className="mt-6 flex items-center pt-2 sm:mt-8">
                    <Link
                      href={feat.ctaHref}
                      className="group/cta inline-flex items-center gap-3 rounded-full border border-border/90 bg-card/80 px-5 py-2.5 text-xs font-bold tracking-wider text-foreground uppercase backdrop-blur-md transition-all duration-200 hover:border-primary/50 hover:bg-card hover:text-primary sm:text-sm"
                    >
                      <span>{feat.ctaText}</span>
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-foreground text-background transition-transform duration-200 group-hover/cta:scale-110 group-hover/cta:bg-primary group-hover/cta:text-white">
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Right Column: Single Image with cover fit (matching screenshot) */}
                <div className="relative z-10 hidden h-full w-full overflow-hidden lg:col-span-6 lg:block xl:col-span-7">
                  <div className="relative h-full w-full">
                    <Image
                      src={feat.image}
                      alt={feat.alt}
                      fill
                      priority={idx === 0}
                      className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 55vw"
                    />
                    {/* Left gradient overlay for smooth blend into the text section */}
                    <div
                      className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-card via-card/50 to-transparent"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Hint */}
        <div className="mt-6 flex w-full items-center justify-between text-xs font-mono text-muted-foreground/60 sm:mt-8">
          <span>Scroll to explore features</span>
          <span className="hidden sm:inline-block">Jadubot AI Sales Agent Suite</span>
        </div>
      </div>
    </section>
  );
}
