"use client";

import { useRef } from "react";
import { AlertCircle, TrendingDown, Inbox, RotateCcw } from "lucide-react";
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
      description:
        "Customers move on to competitors who reply instantly on Facebook and Instagram."
    },
    {
      number: 2,
      title: "Buried Inbox",
      description:
        "Comments and DMs pile up faster than your team can answer them."
    },
    {
      number: 3,
      title: "Repetitive Grind",
      description:
        "You spend hours typing the same price, stock, and delivery answers all day."
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
      className="relative bg-[#0c0e12] overflow-hidden mt-6 md:mt-10"
    >
      {/* Subtle Dotted Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] opacity-75"
        aria-hidden="true"
      />

      {/* Subtle Top & Bottom Vignette for seamless transitions */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#0c0e12] via-transparent to-[#0c0e12]"
        aria-hidden="true"
      />

      {/* Royal purple ambient glow matching LazyChat website theme */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[380px] w-[640px] rounded-full bg-[#4a00e0]/15 blur-[140px]"
        aria-hidden="true"
      />

      {/* Section Container with max-w-7xl */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="solution-badge">
            <AlertCircle className="h-3.5 w-3.5 text-[#c084fc]" />
            <span>Problem</span>
          </div>

          <h2 className="mt-4 font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
            You are losing sales because of missed messages and late replies
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#cecfd2] font-normal">
            That leads to ...
          </p>
        </div>

        {/* Diagonal Cascade Container with max-w-7xl */}
        <div className="relative mt-12 md:mt-16 flex flex-col gap-5 md:block md:min-h-[420px] lg:min-h-[460px] w-full max-w-7xl mx-auto">
          {cards.map((card, index) => {
            const Icon = CARD_ICONS[index] || AlertCircle;
            const diagonalPos = CARD_DIAGONAL_CLASSES[index] || "";

            return (
              <div
                key={card.number}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#373a41] bg-[#12151c]/90 p-6 sm:p-7 shadow-[0_16px_36px_rgba(0,0,0,0.45)] backdrop-blur-md transition-colors hover:border-[#8e2de2]/60 hover:bg-[#181d27] md:absolute md:w-[30%] md:max-w-[360px] ${diagonalPos}`}
              >
                {/* Subtle top edge accent glow line matching LazyChat cards */}
                <div
                  className="pointer-events-none absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-[#8e2de2]/45 to-transparent"
                  aria-hidden="true"
                />

                <div>
                  {/* Header: Icon & Number Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#8e2de2]/30 bg-[#8e2de2]/10 text-[#c084fc] transition-colors group-hover:bg-[#8e2de2] group-hover:text-white">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#c084fc]/90 px-2 py-0.5 rounded border border-[#8e2de2]/25 bg-[#8e2de2]/10">
                      0{card.number}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="mt-4 font-heading text-base sm:text-lg font-bold text-white tracking-tight">
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-[#cecfd2]/80">
                    {card.description}
                  </p>
                </div>

                {/* Card Footer Tag */}
                <div className="mt-5 pt-3 border-t border-[#373a41]/50 flex items-center justify-between text-[11px]">
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#fe78e1] animate-pulse" />
                    <span className="text-[#fe78e1]/90 font-medium">
                      Critical bottleneck
                    </span>
                  </span>
                  <span className="font-mono text-[10px] text-[#cecfd2]/40 uppercase tracking-wider">
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
