"use client";

import { useRef } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { usePopAnimation } from "@/lib/animations";

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  imageWrapperClass: string;
  imageClass: string;
}

const STEPS: ProcessStep[] = [
  {
    id: "social-platforms",
    title: "Social Platforms Integration",
    description:
      "Connect your Facebook, Instagram, or WhatsApp accounts. Jadubot pulls everything in automatically.",
    image: "/assets/images/home/three-steps/social-integration.png",
    imageAlt: "Social Platforms Integration with WhatsApp, Facebook, and Instagram",
    imageWidth: 500,
    imageHeight: 349,
    imageWrapperClass: "mt-auto pt-6 px-4 sm:px-6 pb-2 flex justify-center items-end",
    imageClass: "w-full h-auto object-contain max-h-[220px]"
  },
  {
    id: "website-integration",
    title: "Website Integration",
    description:
      "Connect your website with one click. Your products, pricing and essentials will be updated in Jadubot.",
    image: "/assets/images/home/three-steps/web-integration.png",
    imageAlt: "Website Integration with Shopify and WooCommerce",
    imageWidth: 500,
    imageHeight: 349,
    imageWrapperClass: "mt-auto pt-6 px-4 sm:px-6 pb-2 flex justify-center items-end",
    imageClass: "w-full h-auto object-contain max-h-[220px]"
  },
  {
    id: "ai-instruction",
    title: "AI Instruction",
    description:
      "Tell Jadubot a few simple things about your business. It learns your tone, your catalog, and starts replying like your best sales rep.",
    image: "/assets/images/home/three-steps/ai-integration.png",
    imageAlt: "AI Instruction and Knowledge Base settings",
    imageWidth: 500,
    imageHeight: 434,
    imageWrapperClass: "mt-auto pt-4 pl-4 sm:pl-6 pr-0 pb-0 flex justify-end items-end overflow-hidden",
    imageClass: "w-full h-auto object-contain max-h-[240px] translate-x-1"
  }
];

export function HomeProcess() {
  const headerRef = usePopAnimation<HTMLDivElement>({ start: "top 85%" });
  const connectorRef = usePopAnimation<HTMLDivElement>({ start: "top 85%" });
  const cardsRef = useRef<HTMLDivElement[]>([]);

  usePopAnimation(cardsRef, {
    stagger: 0.1,
    start: "top 80%"
  });

  return (
    <section
      id="how-it-works"
      className="relative bg-background overflow-hidden py-16 sm:py-20 lg:py-28 border-t border-border/60"
    >
      {/* Background Ambience */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] opacity-70"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[800px] rounded-full bg-[#0052cc]/15 blur-[160px]"
        aria-hidden="true"
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="mx-auto max-w-3xl text-center lg:pb-10 will-change-transform origin-center">
          <div className="solution-badge inline-flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-[#38bdf8]" />
            <span>AI-Powered Automation</span>
          </div>

          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-[1.15]">
            Start in 3-simple Steps
          </h2>

          <p className="mt-4 text-sm sm:text-base lg:text-lg text-muted-foreground/80 leading-relaxed max-w-2xl mx-auto">
            AI-powered workflows help you connect channels, sync catalogs, and deploy your intelligent sales agent in under five minutes.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP CONNECTOR SYSTEM (>= 1024px): Central Orb + 3 Connecting Lines   */}
        {/* ========================================================================= */}
        <div
          ref={connectorRef}
          className="hidden lg:flex relative items-end justify-center h-[264px] max-w-[1020px] xl:max-w-[1140px] mx-auto mt-24 xl:mt-28 mb-0 select-none pointer-events-none will-change-transform origin-center"
        >
          {/* Central Logo & Radial Glow */}
          <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center w-[200px] h-[200px]">
            {/* Crisp Logo Image */}
            <Image
              src="/assets/images/home/three-steps/step-logo.png"
              alt="Start in 3 Steps Central Logo"
              width={200}
              height={200}
              className="relative z-10 w-[180px] xl:w-[200px] h-[180px] xl:h-[200px] object-contain drop-shadow-[0_0_30px_rgba(1,114,255,0.65)]"
              priority
            />
          </div>

          {/* Left Branch Line -> Leads to Card 1 */}
          <div className="flex-1 flex justify-end pr-8 xl:pr-12">
            <Image
              src="/assets/images/home/three-steps/step-left-p-500.png"
              alt=""
              width={328}
              height={264}
              className="w-full max-w-[328px] xl:max-w-[360px] h-auto object-contain object-bottom"
            />
          </div>

          {/* Center Vertical Line -> Leads to Card 2 */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2px] h-[164px] z-10">
            <Image
              src="/assets/images/home/three-steps/step-center.png"
              alt=""
              fill
              className="object-cover object-bottom"
            />
          </div>

          {/* Right Branch Line -> Leads to Card 3 */}
          <div className="flex-1 flex justify-start pl-8 xl:pl-12">
            <Image
              src="/assets/images/home/three-steps/step-right-p-500.png"
              alt=""
              width={330}
              height={264}
              className="w-full max-w-[330px] xl:max-w-[360px] h-auto object-contain object-bottom"
            />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE/TABLET ORB (< 1024px): Scaled Central Orb without connecting lines  */}
        {/* ========================================================================= */}
        <div className="flex lg:hidden justify-center items-center mt-10 mb-8 select-none">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-[180px] h-[180px] rounded-full bg-[#0172ff]/35 blur-[35px]" />
            <Image
              src="/assets/images/home/three-steps/step-logo.png"
              alt="Start in 3 Steps"
              width={130}
              height={130}
              className="relative z-10 w-[95px] sm:w-[125px] h-auto object-contain drop-shadow-[0_0_24px_rgba(1,114,255,0.6)]"
            />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3 STEP CARDS GRID: 1 col (mobile) -> 2 cols (tablet) -> 3 cols (desktop)  */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6 max-w-[1020px] xl:max-w-[1140px] mx-auto">
          {STEPS.map((step, idx) => (
            <div
              key={step.id}
              ref={(el) => {
                if (el) cardsRef.current[idx] = el;
              }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[1.5rem] border border-border/80 bg-card/90 min-h-[380px] sm:min-h-[420px] transition-all duration-300 hover:border-primary/50 hover:bg-card hover:shadow-card hover:-translate-y-1 will-change-transform origin-center"
              style={{
                boxShadow: "inset 0 0 20px 1px rgba(1, 114, 255, 0.06)"
              }}
            >
              {/* Card Title & Description Block */}
              <div className="p-6 sm:p-7 flex flex-col">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground/80 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Card Mockup Illustration */}
              <div className={step.imageWrapperClass}>
                <Image
                  src={step.image}
                  alt={step.imageAlt}
                  width={step.imageWidth}
                  height={step.imageHeight}
                  className={step.imageClass}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
