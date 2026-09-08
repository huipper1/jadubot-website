"use client";

import { useRef } from "react";
import { Check } from "lucide-react";
import { cn } from "@/utils";
import { gsap, useGSAP } from "@/lib/animations";

export const PRICING_TIERS = [
  {
    name: "Free Trial",
    price: "৳FREE",
    period: "Lifetime",
    badge: null,
    description: "Experience all the core automation features risk-free for Forever.",
    isPopular: false,
    features: [
      "Single Facebook Page",
      "Connect Account: 1",
      "Message Credit: 1K / Month",
      "Subscribers: 500",
      "Bot AI Token: 10K / Month",
      "Broadcast: 5K / Month",
      "Unlimited Auto Comment",
      "Comment to Inbox Automation"
    ]
  },
  {
    name: "Starter Plan",
    price: "৳1,000",
    period: "per month",
    badge: null,
    description: "1,000 contacts, unlimited replies, and integrations for your business.",
    isPopular: false,
    features: [
      "Multiple Facebook Pages",
      "Connect Account: 3",
      "Message Credit: 10K / Month",
      "Subscribers: 1K",
      "Bot AI Token: 10K / Month",
      "Broadcast: 5K / Month",
      "WhatsApp - 4 Active Flows",
      "Unlimited Auto Comment",
      "Comment to Inbox Automation"
    ]
  },
  {
    name: "Premium Plan",
    price: "৳3,000",
    period: "per month",
    badge: "Most Popular",
    description: "Growing businesses seeking multi-channel automation & CRM sync.",
    isPopular: true,
    features: [
      "Multiple Facebook Pages",
      "Connect Account: 3",
      "Message Credit: 100K / Month",
      "Subscribers: 100K",
      "Bot AI Token: 100K / Month",
      "Broadcast: 10K / Month",
      "Facebook, Instagram & WhatsApp",
      "Google Sheets & HTTP API Sync",
      "Telegram Group Manager",
      "Unlimited Auto Comment & Inbox"
    ]
  },
  {
    name: "Business Plan",
    price: "৳5,000",
    period: "per month",
    badge: "Enterprise",
    description: "Advanced features, high volume messages, and priority automation.",
    isPopular: false,
    features: [
      "Multiple Facebook Pages",
      "Connect Account: Unlimited",
      "Message Credit: 1M / Month",
      "Subscribers: 1M",
      "Bot AI Token: 1M / Month",
      "Unlimited WhatsApp Flows",
      "WhatsApp Appointment System",
      "Team Member Seats: 10",
      "Dedicated 24/7 Priority Support",
      "Unlimited Auto Comment & Inbox"
    ]
  }
];

export interface PricingCardsProps {
  className?: string;
  isStandalone?: boolean;
}

export function PricingCards({
  className,
  isStandalone = true
}: PricingCardsProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) return;

      const validCards = cardsRef.current.filter(Boolean);
      if (validCards.length > 0) {
        gsap.fromTo(
          validCards,
          {
            scale: 0.88,
            opacity: 0
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: gridRef.current || validCards[0],
              start: "top 82%",
              once: true
            }
          }
        );
      }
    },
    { scope: containerRef }
  );

  const gridContent = (
    <div
      ref={gridRef}
      className={cn("grid gap-6 sm:grid-cols-2 xl:grid-cols-4", className)}
    >
      {PRICING_TIERS.map((tier, idx) => (
        <div
          key={tier.name}
          ref={(el) => {
            if (el) cardsRef.current[idx] = el;
          }}
          className="h-full will-change-transform origin-center"
        >
          <div
            className={cn(
              "h-full relative flex flex-col justify-between rounded-2xl p-7 transition-all duration-300",
              tier.isPopular
                ? "border border-[#8e2de2]/50 bg-[#181d27] shadow-[0px_0px_36px_11px_rgba(142,_45,_226,_0.5)] scale-[1.02] z-10"
                : "border border-[#373a41] bg-[#12151c]/90 hover:border-[#373a41] hover:bg-[#181d27]"
            )}
          >
            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-lg font-bold text-white">
                  {tier.name}
                </h3>
                {tier.badge && (
                  <span className="rounded-full bg-gradient-to-r from-[#4a00e0] to-[#8e2de2] px-2.5 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider shadow-sm">
                    {tier.badge}
                  </span>
                )}
              </div>

              <div className="mt-5 flex items-baseline gap-1">
                <span className="font-heading text-3xl font-black text-white sm:text-4xl">
                  {tier.price}
                </span>
                <span className="text-xs text-[#cecfd2]/70 font-medium">
                  / {tier.period}
                </span>
              </div>

              <p className="mt-3 text-xs leading-relaxed text-[#cecfd2]/80">
                {tier.description}
              </p>

              {/* Primary CTA Button to Portal */}
              <div className="mt-6">
                <a
                  href="https://app.jadubot.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "w-full text-center text-xs font-semibold py-3 px-4 rounded-xl transition-all duration-200 block",
                    tier.isPopular
                      ? "btn-primary shadow-[0_0_20px_rgba(142,45,226,0.35)]"
                      : "btn-black hover:border-[#8e2de2]/50 hover:text-white"
                  )}
                >
                  Get Started
                </a>
              </div>

              {/* Features List */}
              <div className="mt-8 border-t border-[#373a41]/50 pt-6">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#cecfd2]/60 mb-4">
                  Features Included
                </p>
                <ul className="space-y-3 text-xs text-[#cecfd2]">
                  {tier.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#8e2de2]/15 text-[#c084fc]">
                        <Check className="h-2.5 w-2.5 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#373a41]/40 text-center">
              <span className="text-[11px] text-[#cecfd2]/50">
                *No credit card required
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  if (isStandalone) {
    return (
      <section ref={containerRef} className="relative py-12 md:py-16">
        <div className="container mx-auto max-w-7xl">{gridContent}</div>
      </section>
    );
  }

  return <div ref={containerRef}>{gridContent}</div>;
}
