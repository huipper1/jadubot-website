"use client";

import { useRef } from "react";

import { ArrowRight, CheckCircle as CheckCircle2 } from "@/components/icons";

import { CALENDLY_DEMO_URL } from "@/config/site";
import { usePopAnimation } from "@/lib/animations";

import { SectionImage } from "@/components/SectionImage";

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ProcessTimelineProps {
  badgeText?: string;
  title: string;
  subtitle?: string;
  steps: ProcessStep[];
  stepLabelPrefix?: string;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
  sectionImage?: {
    src: string;
    alt: string;
    aspect?: "16/10" | "4/3" | "1/1" | "21/9";
    badge?: string;
  };
  imagePosition?: "left" | "right";
}

export function ProcessTimeline({
  badgeText = "Simple Setup",
  title,
  subtitle,
  steps,
  stepLabelPrefix = "Step",
  ctaText = "Have questions about integration? Book an architect walkthrough",
  ctaHref = CALENDLY_DEMO_URL,
  className = "",
  sectionImage,
  imagePosition = "right"
}: ProcessTimelineProps) {
  const headerRef = usePopAnimation<HTMLDivElement>({ start: "top 85%" });
  const visualRef = usePopAnimation<HTMLDivElement>({ start: "top 85%", delay: 0.1 });
  const gridRef = useRef<HTMLDivElement | null>(null);
  const stepsRef = useRef<HTMLDivElement[]>([]);

  usePopAnimation(stepsRef, {
    trigger: gridRef,
    stagger: 0.08,
    start: "top 82%"
  });

  return (
    <section className={`relative overflow-hidden bg-background py-20 md:py-28 ${className}`}>
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="mx-auto mb-16 max-w-3xl origin-center text-center will-change-transform"
        >
          {badgeText && (
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
              <span>{badgeText}</span>
            </div>
          )}
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {subtitle}
            </p>
          )}
        </div>

        {/* Process Content */}
        {sectionImage ? (
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Steps Column */}
            <div
              ref={gridRef}
              className={`space-y-6 lg:col-span-7 ${imagePosition === "right" ? "lg:order-1" : "lg:order-2"}`}
            >
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  ref={(el) => {
                    if (el) stepsRef.current[idx] = el;
                  }}
                  className="group relative flex items-start gap-5 rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 will-change-transform hover:border-primary/40 hover:shadow-card"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 font-heading text-lg font-black text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    {step.step}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-heading text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                        {step.title}
                      </h3>
                      <span className="text-[11px] font-semibold text-primary">
                        {stepLabelPrefix} {idx + 1}
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Sticky Visual Column */}
            <div
              ref={visualRef}
              className={`lg:col-span-5 ${imagePosition === "right" ? "lg:order-2" : "lg:order-1"}`}
            >
              <div className="sticky top-28">
                <SectionImage
                  src={sectionImage.src}
                  alt={sectionImage.alt}
                  aspect={sectionImage.aspect || "4/3"}
                  badge={sectionImage.badge}
                />
              </div>
            </div>
          </div>
        ) : (
          /* Process Steps Grid without image */
          <div ref={gridRef} className="relative grid grid-cols-1 gap-8 md:grid-cols-3">
            {steps.map((step, idx) => (
              <div
                key={idx}
                ref={(el) => {
                  if (el) stepsRef.current[idx] = el;
                }}
                className="relative flex flex-col justify-between rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-300 will-change-transform hover:-translate-y-1 hover:border-primary/40"
              >
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <span className="font-heading text-4xl font-black text-primary/30">
                      {step.step}
                    </span>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="mb-3 font-heading text-xl font-bold tracking-tight text-foreground">
                    {step.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>

                <div className="mt-6 flex items-center gap-1 border-t border-border/60 pt-4 text-xs font-semibold text-primary">
                  <span>
                    {stepLabelPrefix} {idx + 1} of {steps.length}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Mini CTA */}
        {ctaText && ctaHref && (
          <div className="mt-14 text-center">
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
            >
              <span>{ctaText}</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
