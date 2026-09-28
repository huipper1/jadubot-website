"use client";

import { useRef } from "react";
import Image from "next/image";

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
    imageWrapperClass:
      "mt-auto pt-4 pl-4 sm:pl-6 pr-0 pb-0 flex justify-end items-end overflow-hidden",
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
      className="relative overflow-hidden border-t border-border/60 bg-background py-16 sm:py-20 lg:py-28"
    >
      {/* Background Ambience */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] opacity-70"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0052cc]/15 blur-[160px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="mx-auto max-w-3xl origin-center text-center will-change-transform lg:pb-10"
        >
          <h2 className="font-heading text-3xl leading-[1.15] font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Start in 3-simple Steps
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground/80 sm:text-base lg:text-lg">
            AI-powered workflows help you connect channels, sync catalogs, and deploy your
            intelligent sales agent in under five minutes.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP CONNECTOR SYSTEM (>= 1024px): Central Orb + 3 Connecting Lines   */}
        {/* ========================================================================= */}
        <div
          ref={connectorRef}
          className="pointer-events-none relative mx-auto mt-24 mb-0 hidden h-[264px] max-w-[1020px] origin-center items-end justify-center will-change-transform select-none lg:flex xl:mt-28 xl:max-w-[1140px]"
        >
          {/* Central Logo & Radial Glow */}
          <div className="absolute top-0 left-1/2 z-20 flex h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
            {/* Crisp Logo Image */}
            <Image
              src="/assets/images/home/three-steps/step-logo.png"
              alt="Start in 3 Steps Central Logo"
              width={200}
              height={200}
              className="relative z-10 h-[180px] w-[180px] object-contain drop-shadow-[0_0_30px_rgba(1,114,255,0.65)] xl:h-[200px] xl:w-[200px]"
              priority
            />
          </div>

          {/* Left Branch Line -> Leads to Card 1 */}
          <div className="flex flex-1 justify-end pr-8 xl:pr-12">
            <Image
              src="/assets/images/home/three-steps/step-left-p-500.png"
              alt=""
              width={328}
              height={264}
              className="h-auto w-full max-w-[328px] object-contain object-bottom xl:max-w-[360px]"
            />
          </div>

          {/* Center Vertical Line -> Leads to Card 2 */}
          <div className="absolute bottom-0 left-1/2 z-10 h-[164px] w-[2px] -translate-x-1/2">
            <Image
              src="/assets/images/home/three-steps/step-center.png"
              alt=""
              fill
              className="object-cover object-bottom"
            />
          </div>

          {/* Right Branch Line -> Leads to Card 3 */}
          <div className="flex flex-1 justify-start pl-8 xl:pl-12">
            <Image
              src="/assets/images/home/three-steps/step-right-p-500.png"
              alt=""
              width={330}
              height={264}
              className="h-auto w-full max-w-[330px] object-contain object-bottom xl:max-w-[360px]"
            />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE/TABLET ORB (< 1024px): Scaled Central Orb without connecting lines  */}
        {/* ========================================================================= */}
        <div className="mt-10 mb-8 flex items-center justify-center select-none lg:hidden">
          <div className="relative flex items-center justify-center">
            <div className="absolute h-[180px] w-[180px] rounded-full bg-[#0172ff]/35 blur-[35px]" />
            <Image
              src="/assets/images/home/three-steps/step-logo.png"
              alt="Start in 3 Steps"
              width={130}
              height={130}
              className="relative z-10 h-auto w-[95px] object-contain drop-shadow-[0_0_24px_rgba(1,114,255,0.6)] sm:w-[125px]"
            />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3 STEP CARDS GRID: 1 col (mobile) -> 2 cols (tablet) -> 3 cols (desktop)  */}
        {/* ========================================================================= */}
        <div className="mx-auto grid max-w-[1020px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:max-w-[1140px] xl:gap-6">
          {STEPS.map((step, idx) => (
            <div
              key={step.id}
              ref={(el) => {
                if (el) cardsRef.current[idx] = el;
              }}
              className="group relative flex min-h-[380px] origin-center flex-col justify-between overflow-hidden rounded-[1.5rem] border border-border/80 bg-card/90 transition-all duration-300 will-change-transform hover:-translate-y-1 hover:border-primary/50 hover:bg-card hover:shadow-card sm:min-h-[420px]"
              style={{
                boxShadow: "inset 0 0 20px 1px rgba(1, 114, 255, 0.06)"
              }}
            >
              {/* Card Title & Description Block */}
              <div className="flex flex-col p-6 sm:p-7">
                <h3 className="font-heading text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-xl">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground/80 sm:text-sm">
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
