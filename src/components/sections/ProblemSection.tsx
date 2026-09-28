"use client";

import { useRef } from "react";

import { AlertCircle, Inbox, RotateCcw, TrendingDown } from "lucide-react";

import { gsap, useGSAP } from "@/lib/animations";

const CARD_ICONS = [TrendingDown, Inbox, RotateCcw];

// Diagonal position classes for desktop (>=768px) across max-w-7xl
const CARD_DIAGONAL_CLASSES = [
  "md:top-0 md:left-[2%] lg:left-[3%]",
  "md:top-[22%] md:left-[35%] lg:left-[36%]",
  "md:top-[44%] md:left-[67%] lg:left-[68%]"
];

export function ProblemSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const cards = [
    {
      number: 1,
      title: "Lost Sales",
      description: "Customers move on to competitors who reply instantly on Facebook and Instagram."
    },
    {
      number: 2,
      title: "Buried Inbox",
      description: "Comments and DMs pile up faster than your team can answer them."
    },
    {
      number: 3,
      title: "Repetitive Grind",
      description: "You spend hours typing the same price, stock, and delivery answers all day."
    }
  ];

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const cardElements = cardsRef.current.filter(Boolean);

      // Desktop layout: Pinned scroll-scrubbed reveal where cards start out of visible width and enter one after another
      mm.add("(min-width: 768px)", () => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (prefersReducedMotion) {
          gsap.set(cardElements, { opacity: 1, x: 0, y: 0, scale: 1 });
          return;
        }

        // Helper to calculate the exact X distance to place each card completely outside the visible viewport width
        const getOffscreenDelta = (el: HTMLElement) => {
          const currentX = (gsap.getProperty(el, "x") as number) || 0;
          const naturalLeft = el.getBoundingClientRect().left - currentX;
          return Math.max(window.innerWidth - naturalLeft + 80, 500);
        };

        // Initially position all cards completely outside the visible width to the right
        cardElements.forEach((card) => {
          gsap.set(card, {
            x: getOffscreenDelta(card),
            opacity: 0,
            scale: 0.96
          });
        });

        // Helper to calculate navbar height so section stops right below the hovering navbar
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

        // Cards enter one after another from out of the visible width
        // Card 1: Enters from offscreen right to its respective position
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
          // Card 2: Enters from offscreen right to its respective position
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
          // Card 3: Enters from offscreen right to its respective position
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
          // Resting period where all 3 cards remain fully visible before unpinning
          .to({}, { duration: 0.6 });
      });

      // Mobile layout: Stacked vertically, each card glides in from right as it enters the viewport
      mm.add("(max-width: 767px)", () => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (prefersReducedMotion) {
          gsap.set(cardElements, { opacity: 1, x: 0, y: 0, scale: 1 });
          return;
        }

        cardElements.forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0, x: 120, scale: 0.96 },
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
      id="problem"
      className="relative mt-6 overflow-hidden bg-background md:mt-10"
    >
      {/* Subtle Dotted Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] opacity-75"
        aria-hidden="true"
      />

      {/* Subtle Top & Bottom Vignette for seamless transitions */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background via-transparent to-background"
        aria-hidden="true"
      />

      {/* Jadubot blue ambient glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[380px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[140px]"
        aria-hidden="true"
      />

      {/* Section Container with max-w-7xl */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-xl leading-tight font-bold tracking-tight text-foreground sm:text-2xl md:text-3xl lg:text-4xl">
            You are losing sales because of missed messages and late replies
          </h2>

          <p className="mt-3 text-sm font-normal text-muted-foreground sm:text-base">
            That leads to ...
          </p>
        </div>

        {/* Diagonal Cascade Container with max-w-7xl */}
        <div className="relative mx-auto mt-12 flex w-full max-w-7xl flex-col gap-5 md:mt-16 md:block md:min-h-[420px] lg:min-h-[460px]">
          {cards.map((card, index) => {
            const Icon = CARD_ICONS[index] || AlertCircle;
            const diagonalPos = CARD_DIAGONAL_CLASSES[index] || "";

            return (
              <div
                key={card.number}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card/90 p-6 shadow-card backdrop-blur-md transition-colors hover:border-primary/60 hover:bg-card sm:p-7 md:absolute md:w-[30%] md:max-w-[360px] ${diagonalPos}`}
              >
                {/* Subtle top edge accent glow line matching cards */}
                <div
                  className="pointer-events-none absolute top-0 right-4 left-4 h-[1px] bg-gradient-to-r from-transparent via-primary/45 to-transparent"
                  aria-hidden="true"
                />

                <div>
                  {/* Header: Icon & Number Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white dark:text-sky-400">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <span className="rounded border border-primary/25 bg-primary/10 px-2 py-0.5 font-mono text-xs font-bold text-primary dark:text-sky-400/90">
                      0{card.number}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="mt-4 font-heading text-base font-bold tracking-tight text-foreground sm:text-lg">
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground/80 sm:text-[13px]">
                    {card.description}
                  </p>
                </div>

                {/* Card Footer Tag */}
                <div className="mt-5 flex items-center justify-between border-t border-border/50 pt-3 text-[11px]">
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                    <span className="font-medium text-accent">Critical bottleneck</span>
                  </span>
                  <span className="font-mono text-[10px] tracking-wider text-muted-foreground/40 uppercase">
                    Loss 0{card.number}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
