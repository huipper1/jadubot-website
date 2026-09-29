"use client";

import { useRef } from "react";

import { ArrowRight, CheckCircle2 } from "lucide-react";

import { CALENDLY_DEMO_URL } from "@/config/site";
import { usePopAnimation } from "@/lib/animations";

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
}

export function ProcessTimeline({
  badgeText = "Simple Setup",
  title,
  subtitle,
  steps,
  stepLabelPrefix = "Step",
  ctaText = "Have questions about integration? Book an architect walkthrough",
  ctaHref = CALENDLY_DEMO_URL,
  className = ""
}: ProcessTimelineProps) {
  const headerRef = usePopAnimation<HTMLDivElement>({ start: "top 85%" });
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

        {/* Process Steps Grid */}
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
                {/* Step badge */}
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
