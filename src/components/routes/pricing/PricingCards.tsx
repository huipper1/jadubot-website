import { Check, Sparkles } from "lucide-react";
import { cn } from "@/utils";

const PRICING_TIERS = [
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

export function PricingCards() {
  return (
    <section className="relative py-12 md:py-16">
      <div className="container">
        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative flex flex-col justify-between rounded-2xl p-7 transition-all duration-300",
                tier.isPopular
                  ? "border-2 border-[#8e2de2] bg-[#181d27] shadow-[0_12px_40px_rgba(142,45,226,0.25)] scale-[1.02] z-10"
                  : "border border-[#373a41] bg-[#12151c]/90 hover:border-[#373a41] hover:bg-[#181d27]"
              )}
            >
              {tier.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#4a00e0] to-[#8e2de2] px-3.5 py-1 text-xs font-bold text-white shadow-lg">
                    <Sparkles className="h-3 w-3" />
                    Most Popular
                  </span>
                </div>
              )}

              <div>
                <h3 className="font-heading text-lg font-bold text-white">
                  {tier.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#cecfd2]/80 min-h-[32px]">
                  {tier.description}
                </p>

                <div className="mt-5 flex items-baseline gap-1">
                  <span className="font-heading text-3xl font-black text-white sm:text-4xl">
                    {tier.price}
                  </span>
                  <span className="text-xs text-[#cecfd2]/70 font-medium">
                    / {tier.period}
                  </span>
                </div>

                <div className="mt-6 border-t border-[#373a41]/50 pt-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#cecfd2]/60">
                    Included Features:
                  </span>
                  <ul className="mt-4 space-y-3 text-xs text-[#cecfd2]">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#8e2de2]/15 text-[#c084fc]">
                          <Check className="h-2.5 w-2.5 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#373a41]/40">
                <a
                  href="https://app.jadubot.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex w-full items-center justify-center rounded-xl py-3 text-xs font-semibold transition-all duration-200 block text-center",
                    tier.isPopular
                      ? "btn-primary shadow-[0_0_20px_rgba(142,45,226,0.35)]"
                      : "btn-black hover:border-[#8e2de2]/50 hover:text-white"
                  )}
                >
                  Get Started
                </a>
                <p className="mt-2 text-center text-[11px] text-[#cecfd2]/50">
                  *No credit card required
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
