"use client";

import { ArrowUpRight } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { usePopAnimation } from "@/lib/animations";
import { cn } from "@/lib/utils";

export interface ProcessStep {
  id: string;
  stepNumber: string;
  category: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
}

const STEPS: ProcessStep[] = [
  {
    id: "social-platforms",
    stepNumber: "01",
    category: "Channels & Omnichannel Sync",
    title: "Social Platforms Integration",
    description:
      "Connect your Facebook, Instagram, or WhatsApp accounts. Jadubot pulls everything in automatically.",
    ctaText: "Explore Platforms",
    ctaHref: "/platform/whatsapp-automation",
    image: "/assets/images/home/three-steps/social-integration.png",
    imageAlt: "Social Platforms Integration with WhatsApp, Facebook, and Instagram",
    imageWidth: 600,
    imageHeight: 418
  },
  {
    id: "website-integration",
    stepNumber: "02",
    category: "Store & Catalog Sync",
    title: "Website Integration",
    description:
      "Connect your website with one click. Your products, pricing and essentials will be updated in Jadubot.",
    ctaText: "View Integrations",
    ctaHref: "/service",
    image: "/assets/images/home/three-steps/web-integration.png",
    imageAlt: "Website Integration with Shopify and WooCommerce",
    imageWidth: 600,
    imageHeight: 418
  },
  {
    id: "ai-instruction",
    stepNumber: "03",
    category: "Agent Brain & Knowledge",
    title: "AI Instruction",
    description:
      "Tell Jadubot a few simple things about your business. It learns your tone, your catalog, and starts replying like your best sales rep.",
    ctaText: "Meet AI Agents",
    ctaHref: "/ai-agents",
    image: "/assets/images/home/three-steps/ai-integration.png",
    imageAlt: "AI Instruction and Knowledge Base settings",
    imageWidth: 600,
    imageHeight: 520
  }
];

export function HomeProcess() {
  const headerRef = usePopAnimation<HTMLDivElement>({ start: "top 85%" });
  const cardsRef = useRef<HTMLDivElement[]>([]);

  usePopAnimation(cardsRef, {
    stagger: 0.18,
    start: "top 80%"
  });

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden border-t border-border/60 bg-background py-16 sm:py-20 lg:py-28"
    >
      {/* Background Ambience */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] opacity-70"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[160px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-1/4 right-1/4 -z-10 h-[400px] w-[600px] rounded-full bg-sky-500/10 blur-[150px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="mx-auto max-w-3xl origin-center text-center will-change-transform pb-12 sm:pb-16 lg:pb-20"
        >
          <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-foreground/80" />
          <h2 className="font-heading text-3xl leading-[1.15] font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl uppercase">
            Start in 3-simple Steps
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground/80 sm:text-base lg:text-lg">
            AI-powered workflows help you connect channels, sync catalogs, and deploy your
            intelligent sales agent in under five minutes.
          </p>
        </div>

        {/* Stacked Alternating 50/50 Cards */}
        <div className="flex flex-col space-y-8 sm:space-y-12 lg:space-y-16">
          {STEPS.map((step, idx) => {
            const isImageLeft = idx % 2 === 0;

            return (
              <div
                key={step.id}
                ref={(el) => {
                  if (el) cardsRef.current[idx] = el;
                }}
                className={cn(
                  "group relative grid grid-cols-1 overflow-hidden rounded-2xl border border-border/80 lg:grid-cols-2",
                  "bg-card/90 shadow-card transition-all duration-300 will-change-transform hover:border-primary/40 hover:shadow-xl"
                )}
              >
                {/* Visual / Image Side */}
                <div
                  className={cn(
                    "relative flex min-h-[280px] items-center justify-center p-6 sm:min-h-[360px] sm:p-10 lg:min-h-[440px] xl:min-h-[480px]",
                    "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 dark:from-slate-950 dark:via-slate-900/90 dark:to-slate-950",
                    isImageLeft ? "order-1" : "order-1 lg:order-2"
                  )}
                >
                  {/* Subtle Inner Glow */}
                  <div
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(1,114,255,0.12),transparent_70%)]"
                    aria-hidden="true"
                  />

                  {/* Step Watermark Number */}
                  <span
                    className="pointer-events-none absolute top-4 left-6 select-none font-mono text-5xl font-black text-white/5 sm:text-7xl"
                    aria-hidden="true"
                  >
                    {step.stepNumber}
                  </span>

                  {/* Mockup Illustration */}
                  <div className="relative z-10 flex h-full w-full items-center justify-center">
                    <Image
                      src={step.image}
                      alt={step.imageAlt}
                      width={step.imageWidth}
                      height={step.imageHeight}
                      className="max-h-[260px] w-auto max-w-full object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-out group-hover:scale-[1.03] sm:max-h-[320px] lg:max-h-[360px]"
                    />
                  </div>
                </div>

                {/* Content / Text Side */}
                <div
                  className={cn(
                    "flex flex-col justify-center p-8 sm:p-12 lg:p-16",
                    "bg-card/95 backdrop-blur-md",
                    isImageLeft
                      ? "order-2 border-t border-border/80 lg:order-2 lg:border-t-0 lg:border-l"
                      : "order-2 border-t border-border/80 lg:order-1 lg:border-t-0 lg:border-r"
                  )}
                >
                  {/* Category / Step Badge */}
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold tracking-widest text-primary uppercase">
                      Step {step.stepNumber}
                    </span>
                    <span className="h-px w-6 bg-border" />
                    <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                      {step.category}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="font-heading mt-4 text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-3xl lg:text-4xl">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
                    {step.description}
                  </p>

                  {/* CTA Action */}
                  <div className="mt-8 flex items-center pt-2">
                    <Link
                      href={step.ctaHref}
                      className="group/cta inline-flex items-center gap-3 text-xs font-bold tracking-wider text-foreground uppercase transition-all duration-200 hover:text-primary sm:text-sm"
                    >
                      <span className="font-mono tracking-widest">{step.ctaText}</span>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-background transition-all duration-200 group-hover/cta:scale-110 group-hover/cta:bg-primary group-hover/cta:text-white">
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
                      </div>
                    </Link>
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
