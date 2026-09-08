"use client";

import { useRef } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { gsap, useGSAP } from "@/lib/animations";

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
  const containerRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const orbRef = useRef<HTMLDivElement | null>(null);
  const linesRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) return;

      const cards = cardsRef.current.filter(Boolean);

      // Stagger entrance for the 3 cards
      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cards[0],
              start: "top 88%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Stagger entrance for the 3 cards
      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cards[0],
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="how-it-works"
      className="relative bg-[#0c0e12] overflow-hidden py-16 sm:py-20 lg:py-28 border-t border-[#373a41]/60"
    >
      {/* Background Ambience */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] opacity-70"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[800px] rounded-full bg-[#4a00e0]/15 blur-[160px]"
        aria-hidden="true"
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center lg:pb-10">
          <div className="solution-badge inline-flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-[#c084fc]" />
            <span>AI-Powered Automation</span>
          </div>

          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl leading-[1.15]">
            Start in 3-simple Steps
          </h2>

          <p className="mt-4 text-sm sm:text-base lg:text-lg text-[#cecfd2]/80 leading-relaxed max-w-2xl mx-auto">
            AI-powered workflows help you connect channels, sync catalogs, and deploy your intelligent sales agent in under five minutes.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP CONNECTOR SYSTEM (>= 1024px): Central Orb + 3 Connecting Lines   */}
        {/* ========================================================================= */}
        <div
          ref={linesRef}
          className="hidden lg:flex relative items-end justify-center h-[264px] max-w-[1020px] xl:max-w-[1140px] mx-auto mt-24 xl:mt-28 mb-0 select-none pointer-events-none"
        >
          {/* Central Logo & Radial Glow */}
          <div
            ref={orbRef}
            className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center w-[200px] h-[200px]"
          >
            {/* Diffuse Conic/Radial Glow behind logo */}
            <div
              className="absolute w-[280px] h-[280px] rounded-full opacity-65 blur-[45px] pointer-events-none"
              style={{
                background:
                  "conic-gradient(from 180deg at 50% 50%, #A6AAFF 63deg, #894BF6 140deg, #984AF6 180deg, #D87AFF 238deg, #FFF0FF 305deg, #8C66FF 360deg)"
              }}
            />
            <div className="absolute w-[180px] h-[180px] rounded-full bg-[#894bf6]/50 blur-[30px] pointer-events-none" />

            {/* Crisp Logo Image - without blurring filter */}
            <Image
              src="/assets/images/home/three-steps/step-logo.png"
              alt="Start in 3 Steps Central Logo"
              width={200}
              height={200}
              className="relative z-10 w-[180px] xl:w-[200px] h-[180px] xl:h-[200px] object-contain drop-shadow-[0_0_30px_rgba(142,45,226,0.65)]"
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
            <div className="absolute w-[180px] h-[180px] rounded-full bg-[#894bf6]/35 blur-[35px]" />
            <Image
              src="/assets/images/home/three-steps/step-logo.png"
              alt="Start in 3 Steps"
              width={130}
              height={130}
              className="relative z-10 w-[95px] sm:w-[125px] h-auto object-contain drop-shadow-[0_0_24px_rgba(142,45,226,0.6)]"
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
              className="group relative flex flex-col justify-between overflow-hidden rounded-[1.5rem] border border-[#373a41]/80 bg-[#12151c]/90 min-h-[380px] sm:min-h-[420px] transition-all duration-300 hover:border-[#8e2de2]/50 hover:bg-[#181d27]/90 hover:shadow-[0_12px_36px_-8px_rgba(142,45,226,0.2),_inset_0_0_24px_2px_rgba(142,45,226,0.08)] hover:-translate-y-1"
              style={{
                boxShadow: "inset 0 0 20px 1px rgba(158, 119, 237, 0.06)"
              }}
            >
              {/* Card Title & Description Block */}
              <div className="p-6 sm:p-7 flex flex-col">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-[#c084fc] transition-colors">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#cecfd2]/80 leading-relaxed">
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
