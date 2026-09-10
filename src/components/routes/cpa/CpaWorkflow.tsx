"use client";

import { useRef } from "react";
import Link from "next/link";
import { MessageCircle, Send, CheckCircle2, ArrowRight } from "lucide-react";
import { gsap, useGSAP } from "@/lib/animations";

const STEP_ICONS = [MessageCircle, Send, CheckCircle2];

// Diagonal position classes for desktop (>=768px) across max-w-7xl
const STEP_DIAGONAL_CLASSES = [
  "md:top-0 md:left-[2%] lg:left-[3%]",
  "md:top-[22%] md:left-[35%] lg:left-[36%]",
  "md:top-[44%] md:left-[67%] lg:left-[68%]"
];

export function CpaWorkflow() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const steps = [
    {
      number: 1,
      title: "Ad Engagement & Viral Spark",
      description:
        "Prospects comment on your dark post, reel, or video ad. Jadubot instantly likes and drops a natural public reply, driving algorithmic engagement that lowers your ad CPMs.",
      tag: "Phase 01 • Social Capture"
    },
    {
      number: 2,
      title: "Automated Inbox Funnel Push",
      description:
        "Jadubot slides into their inbox with a personalized quiz, pre-lander, or offer link containing dynamic tracking tokens and anti-spam randomized delay intervals.",
      tag: "Phase 02 • High-Intent Delivery"
    },
    {
      number: 3,
      title: "S2S Conversion & Postback",
      description:
        "Prospect completes the offer on the CPA network. Server-to-server (S2S) webhooks immediately notify Voluum, RedTrack, or your internal CRM in real time.",
      tag: "Phase 03 • Real-Time Attribution"
    }
  ];

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const cardElements = cardsRef.current.filter(Boolean);

      // Desktop layout: Pinned scroll-scrubbed reveal where cards start out of visible width and enter one after another
      mm.add("(min-width: 768px)", () => {
        const prefersReducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) {
          gsap.set(cardElements, { opacity: 1, x: 0, y: 0, scale: 1 });
          return;
        }

        // Helper to calculate the exact X distance to place each card completely outside visible viewport width
        const getOffscreenDelta = (el: HTMLElement) => {
          const currentX = (gsap.getProperty(el, "x") as number) || 0;
          const naturalLeft = el.getBoundingClientRect().left - currentX;
          return Math.max(window.innerWidth - naturalLeft + 80, 500);
        };

        // Initially position all cards completely outside visible width to the right
        cardElements.forEach((card) => {
          gsap.set(card, {
            x: getOffscreenDelta(card),
            opacity: 0,
            scale: 0.96
          });
        });

        // Helper to calculate navbar height
        const getNavbarHeight = () => {
          if (typeof window === "undefined") return 88;
          const header = document.querySelector("header");
          if (!header) return 88;
          return Math.round(header.getBoundingClientRect().height);
        };

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: () => `top ${getNavbarHeight()}px`,
            end: "+=2600", // Generous scrub distance so each card reveals deliberately in its own scroll phase
            pin: true,
            scrub: 1.2,
            anticipatePin: 1,
            invalidateOnRefresh: true
          }
        });

        // Cards enter sequentially
        tl.to(
          cardElements[0],
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 1.3,
            ease: "power2.out"
          },
          0.1
        )
          .to(
            cardElements[1],
            {
              x: 0,
              opacity: 1,
              scale: 1,
              duration: 1.3,
              ease: "power2.out"
            },
            1.4
          )
          .to(
            cardElements[2],
            {
              x: 0,
              opacity: 1,
              scale: 1,
              duration: 1.3,
              ease: "power2.out"
            },
            2.7
          )
          .to({}, { duration: 0.6 });
      });

      // Mobile layout: Stacked vertically, each card glides in as it enters viewport
      mm.add("(max-width: 767px)", () => {
        const prefersReducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) {
          gsap.set(cardElements, { opacity: 1, x: 0, y: 0, scale: 1 });
          return;
        }

        cardElements.forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0, x: 100, scale: 0.96 },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse"
              }
            }
          );
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="cpa-workflow"
      className="relative bg-card overflow-hidden py-16 md:py-24 border-t border-border"
    >
      {/* Subtle Dotted Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] opacity-75"
        aria-hidden="true"
      />

      {/* Top & Bottom Vignette */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background via-transparent to-background"
        aria-hidden="true"
      />

      {/* Ambient Cobalt Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[380px] w-[640px] rounded-full bg-[#0052cc]/15 blur-[140px]"
        aria-hidden="true"
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="solution-badge inline-flex items-center gap-2 rounded-full border border-primary/25 bg-card/80 px-3.5 py-1 text-xs font-semibold text-primary shadow-sm">
            Automated Conversion Cycle
          </div>

          <h2 className="mt-4 font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
            The 3-Step CPA Growth Loop
          </h2>

          <p className="mt-3 text-sm sm:text-base text-muted-foreground">
            How Jadubot turns casual social media engagements into tracked, high-paying CPA network conversions.
          </p>
        </div>

        {/* Diagonal Cascade Container */}
        <div className="relative mt-12 md:mt-16 flex flex-col gap-6 md:block md:min-h-[440px] lg:min-h-[480px] w-full max-w-7xl mx-auto">
          {steps.map((step, index) => {
            const Icon = STEP_ICONS[index] || MessageCircle;
            const diagonalPos = STEP_DIAGONAL_CLASSES[index] || "";

            return (
              <div
                key={step.number}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card/95 p-6 sm:p-7 shadow-card backdrop-blur-md transition-colors hover:border-primary/60 hover:bg-card md:absolute md:w-[30%] md:max-w-[360px] ${diagonalPos}`}
              >
                {/* Subtle top edge accent glow line */}
                <div
                  className="pointer-events-none absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                  aria-hidden="true"
                />

                <div>
                  {/* Header: Icon & Number Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-primary px-2 py-0.5 rounded border border-primary/25 bg-primary/10">
                      Step 0{step.number}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="mt-4 font-heading text-lg font-bold text-foreground tracking-tight">
                    {step.title}
                  </h3>

                  {/* Card Description */}
                  <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                {/* Card Footer Tag */}
                <div className="mt-6 pt-3 border-t border-border flex items-center justify-between text-[11px]">
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                    <span className="text-muted-foreground font-medium">
                      {step.tag}
                    </span>
                  </span>
                  <ArrowRight className="h-3 w-3 text-muted-foreground/60 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
