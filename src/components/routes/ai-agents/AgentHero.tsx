"use client";

import { useRef } from "react";

import {
  ArrowRight,
  Bot,
  Calendar,
  CheckCircle2,
  Clock,
  Headphones,
  RotateCcw,
  ShoppingCart,
  TrendingUp,
  UserCheck,
  Zap
} from "lucide-react";

import type { AgentData } from "@/types/ai-agent";
import { CALENDLY_DEMO_URL } from "@/config/site";
import { usePopAnimation } from "@/lib/animations";

interface AgentHeroProps {
  agent: AgentData;
}

export function AgentHero({ agent }: AgentHeroProps) {
  const contentRef = usePopAnimation<HTMLDivElement>({ start: "top 95%", duration: 0.8 });
  const visualRef = usePopAnimation<HTMLDivElement>({
    start: "top 90%",
    delay: 0.15,
    duration: 0.85
  });

  const statsContainerRef = useRef<HTMLDivElement | null>(null);
  const statsCardsRef = useRef<HTMLDivElement[]>([]);

  usePopAnimation(statsCardsRef, {
    trigger: statsContainerRef,
    stagger: 0.08,
    start: "top 85%"
  });

  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-44">
      {/* Ambient background glows */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 h-96 w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-primary/20 via-sky-400/10 to-transparent opacity-60 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Headline and CTAs */}
          <div
            ref={contentRef}
            className="text-center will-change-transform lg:col-span-7 lg:text-left"
          >
            <h1 className="font-heading text-3xl leading-[1.12] font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {agent.heroTitle.includes(agent.heroHighlight) ? (
                <>
                  {agent.heroTitle.split(agent.heroHighlight)[0]}
                  <span className="text-blue-gradient">{agent.heroHighlight}</span>
                  {agent.heroTitle.split(agent.heroHighlight)[1]}
                </>
              ) : (
                agent.heroTitle
              )}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
              {agent.heroDescription}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href={CALENDLY_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full rounded-xl px-6 py-3.5 text-sm shadow-[0_4px_20px_rgba(1,114,255,0.35)] sm:w-auto"
              >
                <span>Book a live demo</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="https://app.jadubot.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-black w-full rounded-xl border border-border px-6 py-3.5 text-sm sm:w-auto"
              >
                <span>Portal Login</span>
              </a>
            </div>

            {/* Micro assurances */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-xs text-muted-foreground lg:justify-start">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span>Autonomous Action Execution</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span>Zero Hallucination Safeguards</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span>Continuous Knowledge Sync</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Mockup */}
          <div ref={visualRef} className="will-change-transform lg:col-span-5">
            <AgentHeroVisual visualType={agent.heroVisualType} />
          </div>
        </div>

        {/* Stats Strip */}
        <div ref={statsContainerRef} className="mt-16 border-t border-border/80 pt-8 sm:mt-20">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {agent.heroStats.map((stat, idx) => (
              <div
                key={idx}
                ref={(el) => {
                  if (el) statsCardsRef.current[idx] = el;
                }}
                className="flex items-center justify-center gap-4 rounded-2xl border border-border/80 bg-card/60 p-4 will-change-transform lg:justify-start"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  {idx === 0 && <Clock className="h-6 w-6" />}
                  {idx === 1 && <Zap className="h-6 w-6" />}
                  {idx === 2 && <TrendingUp className="h-6 w-6" />}
                </div>
                <div>
                  <div className="font-heading text-2xl font-extrabold tracking-tight text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface AgentHeroVisualProps {
  visualType:
    | "lead-qualification"
    | "customer-support"
    | "sales-agent"
    | "shopify-whatsapp"
    | "woocommerce-whatsapp";
}

function AgentHeroVisual({ visualType }: AgentHeroVisualProps) {
  if (visualType === "lead-qualification") {
    return (
      <div className="shadow-elevated relative mx-auto w-full max-w-md rounded-3xl border border-primary/30 bg-card p-5">
        <div className="flex items-center justify-between border-b border-border pb-3.5">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <UserCheck className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-foreground">Lead Scoring Engine</div>
              <div className="text-[11px] font-medium text-emerald-500">
                Active Scoring • BANT Model
              </div>
            </div>
          </div>
          <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[10px] font-bold text-emerald-500">
            HIGH INTENT (94/100)
          </span>
        </div>

        {/* Diagnostic Scorecard */}
        <div className="my-4 space-y-2.5 text-xs">
          <div className="flex items-center justify-between rounded-xl border border-border bg-surface-subtle p-2.5">
            <span className="text-muted-foreground">Budget Qualified:</span>
            <span className="font-semibold text-foreground">$10,000 - $25,000 / yr</span>
          </div>
          <div className="flex items-center justify-between rounded-xl border border-border bg-surface-subtle p-2.5">
            <span className="text-muted-foreground">Purchase Timeline:</span>
            <span className="font-semibold text-foreground">Within 14 Days</span>
          </div>
          <div className="flex items-center justify-between rounded-xl border border-border bg-surface-subtle p-2.5">
            <span className="text-muted-foreground">Target Channels:</span>
            <span className="font-semibold text-foreground">WhatsApp + Instagram</span>
          </div>

          <div className="mt-3 rounded-xl border border-primary/20 bg-primary/10 p-3">
            <div className="mb-1 flex items-center gap-2 text-xs font-bold text-primary">
              <Calendar className="h-3.5 w-3.5" />
              <span>Demo Booked via Calendly</span>
            </div>
            <p className="text-[11px] text-foreground">Tomorrow at 3:00 PM • Routed to Senior AE</p>
          </div>
        </div>
      </div>
    );
  }

  if (visualType === "customer-support") {
    return (
      <div className="shadow-elevated relative mx-auto w-full max-w-md rounded-3xl border border-primary/30 bg-card p-5">
        <div className="flex items-center justify-between border-b border-border pb-3.5">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <Headphones className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-foreground">Support AI Specialist</div>
              <div className="text-[11px] font-medium text-primary">Grounded in Knowledge Base</div>
            </div>
          </div>
          <span className="text-[10px] text-muted-foreground">Latency: 0.9s</span>
        </div>

        <div className="my-4 space-y-3 text-xs">
          <div className="flex justify-end">
            <div className="max-w-[85%] rounded-2xl rounded-tr-xs border border-border bg-muted p-3 text-foreground">
              <p>Can I exchange a product purchased 10 days ago?</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] text-white">
              <Bot className="h-4 w-4" />
            </div>
            <div className="max-w-[88%] rounded-2xl rounded-tl-xs border border-border bg-card p-3 shadow-sm">
              <p className="text-foreground">
                Yes! Our policy allows hassle-free returns and exchanges within 14 days of delivery.
              </p>
              <div className="mt-2 flex items-center gap-1 text-[10px] text-muted-foreground">
                <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                <span>Verified Source: Return Policy § 2.4</span>
              </div>
              <div className="mt-2.5 flex items-center justify-between border-t border-border pt-2 text-[11px]">
                <span className="font-semibold text-primary">Start Exchange Ticket</span>
                <span className="text-muted-foreground">Talk to Human</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (visualType === "sales-agent") {
    return (
      <div className="shadow-elevated relative mx-auto w-full max-w-md rounded-3xl border border-primary/30 bg-card p-5">
        <div className="flex items-center justify-between border-b border-border pb-3.5">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <ShoppingCart className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-foreground">Conversational Storefront</div>
              <div className="text-[11px] font-medium text-emerald-500">
                Catalog Synced • Live Stock
              </div>
            </div>
          </div>
          <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-bold text-primary">
            IN-CHAT CHECKOUT
          </span>
        </div>

        <div className="my-4 space-y-3 text-xs">
          <div className="rounded-2xl border border-border bg-surface-subtle p-3.5">
            <div className="flex items-center justify-between text-sm font-bold text-foreground">
              <span>Wireless Audio Earbuds Pro</span>
              <span className="text-primary">$79.00</span>
            </div>
            <p className="mt-1 text-[11px] text-muted-foreground">
              Active Noise Cancelling • 36h Battery Life • Matte Black
            </p>
            <div className="mt-3 flex gap-2">
              <span className="flex-1 rounded-xl bg-primary py-2 text-center text-[11px] font-semibold text-white shadow-sm">
                Confirm Cash on Delivery
              </span>
              <span className="rounded-xl border border-border bg-card px-3 py-2 text-[11px] font-medium text-foreground">
                Pay Online
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Commerce (Shopify / WooCommerce)
  return (
    <div className="shadow-elevated relative mx-auto w-full max-w-md rounded-3xl border border-primary/30 bg-card p-5">
      <div className="flex items-center justify-between border-b border-border pb-3.5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-primary">
            <RotateCcw className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-bold text-foreground">Cart Recovery Listener</div>
            <div className="text-[11px] font-medium text-emerald-500">Webhook Connected</div>
          </div>
        </div>
        <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold text-emerald-500">
          RECOVERED
        </span>
      </div>

      <div className="my-4 space-y-2.5 text-xs">
        <div className="rounded-xl border border-border bg-surface-subtle p-3">
          <div className="flex items-center justify-between font-semibold text-foreground">
            <span>Abandoned Cart Triggered</span>
            <span className="text-muted-foreground">30 min delay</span>
          </div>
          <p className="mt-1 text-muted-foreground">Shopper left 2 items in cart worth $124.00.</p>
        </div>

        <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-3">
          <div className="font-semibold text-emerald-700 dark:text-emerald-400">
            WhatsApp Recovery Message Sent
          </div>
          <p className="mt-1 text-[11px] text-foreground">
            &quot;Hey Alex, your cart is reserved! Tap below to complete with 10% off.&quot;
          </p>
          <div className="mt-2.5 rounded-lg bg-emerald-600 px-3 py-1.5 text-center text-[11px] font-semibold text-white">
            1-Click Restore Cart & Checkout
          </div>
        </div>
      </div>
    </div>
  );
}
