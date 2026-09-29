"use client";

import { useRef, useState } from "react";

import {
  AlertCircle,
  ArrowDown,
  CheckCircle2,
  Clock,
  Inbox,
  RotateCcw,
  TrendingDown
} from "lucide-react";

import { gsap, ScrollTrigger, useGSAP } from "@/lib/animations";

const CARD_ICONS = [TrendingDown, Inbox, RotateCcw];

const CARDS_DATA = [
  {
    number: 1,
    title: "Lost Sales",
    description: "Customers move on to competitors who reply instantly on Facebook and Instagram.",
    metricLabel: "Lead drop-off",
    impact: "67% of buyers leave within 10 minutes without a reply"
  },
  {
    number: 2,
    title: "Buried Inbox",
    description: "Comments and DMs pile up faster than your team can answer them.",
    metricLabel: "Unread backlog",
    impact: "Hundreds of inquiries slip unnoticed into archived requests"
  },
  {
    number: 3,
    title: "Repetitive Grind",
    description: "You spend hours typing the same price, stock, and delivery answers all day.",
    metricLabel: "Time wasted",
    impact: "3+ hours lost per agent answering the exact same 5 questions"
  }
];

export function ProblemSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const [activeStep, setActiveStep] = useState(0);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const cardElements = cardsRef.current.filter(Boolean);

      // Desktop layout (>= 1024px): Pre-warmed split sticky experience
      mm.add("(min-width: 1024px)", () => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (prefersReducedMotion) {
          gsap.set(cardElements, { opacity: 1, y: 0, scale: 1 });
          return;
        }

        // Pre-warmed entrance: Trigger as soon as the section top reaches 75% of the viewport
        const entranceTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
            onEnter: () => setActiveStep(0)
          }
        });

        // Cards stagger in immediately so they are already entering and visible without waiting
        entranceTl.fromTo(
          cardElements,
          {
            opacity: 0,
            y: 35,
            scale: 0.96
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.55,
            stagger: 0.12,
            ease: "power2.out"
          }
        );

        // Active spotlight transitions for Cards 2 and 3 as the user scrolls further down
        cardElements.forEach((card, index) => {
          gsap.timeline({
            scrollTrigger: {
              trigger: card,
              start: "top 55%",
              end: "bottom 45%",
              onEnter: () => setActiveStep(index),
              onEnterBack: () => setActiveStep(index)
            }
          });
        });

        // Track global timeline progress for the sticky progress bar indicator
        if (progressBarRef.current) {
          gsap.fromTo(
            progressBarRef.current,
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
                end: "bottom 70%",
                scrub: 0.3
              }
            }
          );
        }
      });

      // Mobile / Tablet layout (< 1024px): Early cascade reveal
      mm.add("(max-width: 1023px)", () => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (prefersReducedMotion) {
          gsap.set(cardElements, { opacity: 1, y: 0 });
          return;
        }

        // Stagger in early as section reaches 85% on mobile
        gsap.fromTo(
          cardElements,
          { opacity: 0, y: 28, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.55,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
              onEnter: () => setActiveStep(0)
            }
          }
        );

        // Update active step as each card crosses higher on the mobile screen
        cardElements.forEach((card, index) => {
          ScrollTrigger.create({
            trigger: card,
            start: "top 60%",
            end: "bottom 40%",
            onEnter: () => setActiveStep(index),
            onEnterBack: () => setActiveStep(index)
          });
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
      className="relative mt-8 overflow-hidden bg-background py-16 md:mt-12 md:py-24"
    >
      {/* Subtle Dotted Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] opacity-75"
        aria-hidden="true"
      />

      {/* Vignette Gradients */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background via-transparent to-background"
        aria-hidden="true"
      />

      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/4 -z-10 h-[420px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-2/3 right-10 -z-10 h-[380px] w-[460px] rounded-full bg-destructive/10 blur-[140px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Split-Screen Grid Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Sticky Narrative & Active Bottleneck Tracker */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-destructive/30 bg-destructive/10 px-3.5 py-1 text-xs font-semibold text-destructive">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-destructive opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-destructive" />
                </span>
                The Silent Revenue Killer
              </div>

              {/* Main Headline */}
              <h2 className="mt-5 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl lg:leading-tight">
                You are losing sales because of missed messages and late replies
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Every second a prospective buyer waits for a response is a second they spend looking
                at your competitor. That leads to...
              </p>

              {/* Step indicator rail on desktop */}
              <div className="mt-8 hidden space-y-3 lg:block">
                <p className="text-xs font-medium tracking-wider text-muted-foreground/70 uppercase">
                  Bottlenecks in your pipeline
                </p>

                <div className="space-y-2">
                  {CARDS_DATA.map((card, idx) => {
                    const isActive = activeStep === idx;
                    const Icon = CARD_ICONS[idx] || AlertCircle;

                    return (
                      <div
                        key={card.number}
                        className={`flex items-center gap-3.5 rounded-xl border p-3 transition-all duration-300 ${
                          isActive
                            ? "border-primary/40 bg-primary/10 shadow-sm"
                            : "border-border/40 bg-card/40 opacity-60 hover:opacity-85"
                        }`}
                      >
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
                            isActive
                              ? "bg-primary text-primary-foreground shadow-sm"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between">
                            <span
                              className={`text-xs font-semibold ${
                                isActive ? "text-foreground" : "text-muted-foreground"
                              }`}
                            >
                              0{card.number}. {card.title}
                            </span>
                            {isActive && (
                              <span className="text-[10px] font-medium text-primary">Active</span>
                            )}
                          </div>
                          <p className="truncate text-[11px] text-muted-foreground">
                            {card.metricLabel}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quick scroll helper */}
              <div className="mt-8 hidden items-center gap-2 text-xs text-muted-foreground/60 lg:flex">
                <ArrowDown className="h-3.5 w-3.5 animate-bounce text-primary" />
                <span>Scroll to examine each operational leak</span>
              </div>
            </div>
          </div>

          {/* Right Column: Scrolling Cards with Timeline Accent */}
          <div className="relative lg:col-span-7">
            {/* Timeline line connecting cards */}
            <div className="absolute top-8 bottom-8 left-6 hidden w-0.5 bg-border/60 lg:block">
              <div
                ref={progressBarRef}
                className="w-full origin-top bg-gradient-to-b from-primary via-accent to-destructive transition-transform duration-75"
                style={{ height: "100%" }}
              />
            </div>

            {/* Cards List */}
            <div className="space-y-6 sm:space-y-8 lg:pl-16">
              {CARDS_DATA.map((card, index) => {
                const Icon = CARD_ICONS[index] || AlertCircle;
                const isActive = activeStep === index;

                return (
                  <div
                    key={card.number}
                    ref={(el) => {
                      if (el) cardsRef.current[index] = el;
                    }}
                    className={`group relative overflow-hidden rounded-2xl border bg-card p-6 shadow-card backdrop-blur-md transition-all duration-300 sm:p-8 ${
                      isActive
                        ? "border-primary/50 ring-1 shadow-primary/5 ring-primary/20"
                        : "border-border/70 hover:border-primary/40"
                    }`}
                  >
                    {/* Glowing Top Border Accent */}
                    <div
                      className={`pointer-events-none absolute top-0 right-6 left-6 h-[1.5px] bg-gradient-to-r from-transparent via-primary/50 to-transparent transition-opacity duration-300 ${
                        isActive ? "opacity-100" : "opacity-40"
                      }`}
                      aria-hidden="true"
                    />

                    {/* Timeline Node on Left for desktop */}
                    <div
                      className={`absolute top-8 -left-[27px] hidden h-5 w-5 items-center justify-center rounded-full border-2 bg-background transition-all duration-300 lg:flex ${
                        isActive
                          ? "scale-110 border-primary shadow-[0_0_12px_rgba(59,130,246,0.6)]"
                          : "border-border"
                      }`}
                      aria-hidden="true"
                    >
                      <div
                        className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                          isActive ? "bg-primary" : "bg-muted-foreground/40"
                        }`}
                      />
                    </div>

                    <div>
                      {/* Card Header: Icon, Badge, and Index */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-colors ${
                              isActive
                                ? "border-primary/40 bg-primary/15 text-primary"
                                : "border-border/60 bg-muted/50 text-muted-foreground group-hover:text-foreground"
                            }`}
                          >
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <span className="text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
                              Bottleneck 0{card.number}
                            </span>
                            <h3 className="font-heading text-lg font-bold tracking-tight text-foreground sm:text-xl">
                              {card.title}
                            </h3>
                          </div>
                        </div>

                        <span className="rounded-md border border-primary/25 bg-primary/10 px-2.5 py-1 font-mono text-xs font-bold text-primary">
                          0{card.number}
                        </span>
                      </div>

                      {/* Main Description */}
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {card.description}
                      </p>

                      {/* Measurable Impact Box */}
                      <div className="mt-5 rounded-xl border border-destructive/20 bg-destructive/5 p-3.5 sm:p-4">
                        <div className="flex items-start gap-2.5">
                          <Clock className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                          <div>
                            <p className="text-xs font-semibold text-foreground">
                              {card.metricLabel}
                            </p>
                            <p className="mt-0.5 text-xs text-muted-foreground">{card.impact}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="mt-6 flex items-center justify-between border-t border-border/50 pt-3.5 text-xs">
                      <span className="flex items-center gap-1.5 font-medium text-destructive">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-destructive" />
                        Revenue leak
                      </span>
                      <span className="flex items-center gap-1 text-muted-foreground/70">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary/70" />
                        Solvable with Jadubot
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
