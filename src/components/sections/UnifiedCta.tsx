"use client";

import Link from "next/link";
import { ArrowRight, Calendar, CheckCircle2, Sparkles, Zap } from "lucide-react";
import { PopIn } from "@/components/animations";
import { CALENDLY_DEMO_URL } from "@/config/site";

export interface UnifiedCtaAction {
  text?: string;
  label?: string;
  href: string;
  external?: boolean;
  icon?: React.ReactNode;
}

export interface UnifiedCtaProps {
  badge?: string;
  title?: React.ReactNode;
  highlightedTitle?: string;
  titleEnd?: string;
  description?: React.ReactNode;
  primaryCta?: UnifiedCtaAction;
  secondaryCta?: UnifiedCtaAction;
  trustBadges?: string[];
  className?: string;
  id?: string;
}

export function UnifiedCta({
  badge = "START YOUR AUTOMATION TODAY",
  title = "Ready to Turn Conversational Traffic Into",
  highlightedTitle = "Round-the-Clock Revenue?",
  titleEnd,
  description = "Join over 1,200+ Bangladeshi businesses automating Messenger replies, Instagram DM orders, and CPA campaigns with Jadubot.",
  primaryCta = {
    text: "Start Free Trial",
    href: "https://app.jadubot.com/",
    external: true
  },
  secondaryCta = {
    text: "Schedule 1-on-1 Demo",
    href: CALENDLY_DEMO_URL,
    external: true
  },
  trustBadges = [
    "No credit card required",
    "5-minute zero-code setup",
    "Official Meta Graph API partner"
  ],
  className = "",
  id = "cta-section"
}: UnifiedCtaProps) {
  const primaryText = primaryCta?.text || primaryCta?.label || "Start Free Trial";
  const secondaryText = secondaryCta?.text || secondaryCta?.label || "Schedule 1-on-1 Demo";
  return (
    <section
      id={id}
      className={`relative py-20 sm:py-24 md:py-28 overflow-hidden bg-background border-t border-border ${className}`}
    >
      {/* Dynamic atmospheric ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[850px] max-w-full rounded-full bg-gradient-to-r from-blue-600/12 via-sky-500/8 to-blue-600/12 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-5xl rounded-3xl border border-border bg-card dark:bg-gradient-to-b dark:from-[#0d1424]/90 dark:via-[#0a0f1c]/90 dark:to-[#070b14]/95 p-8 sm:p-12 md:p-16 text-center shadow-elevated backdrop-blur-2xl">
          <PopIn>
            {/* Pill Badge */}
            <div className="solution-badge inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span>{badge}</span>
            </div>

            {/* Main Heading with Brand Gradient */}
            <h2 className="mt-6 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl leading-[1.15]">
              {title}{" "}
              {highlightedTitle && (
                <span className="bg-gradient-to-r from-primary via-sky-400 to-primary bg-clip-text text-transparent">
                  {highlightedTitle}
                </span>
              )}{" "}
              {titleEnd}
            </h2>

            {/* Subtitle Description */}
            <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg leading-relaxed">
              {description}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              {primaryCta.external ? (
                <a
                  href={primaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(1,114,255,0.4)] transition-all hover:scale-[1.02]"
                >
                  {primaryCta.icon ?? <Zap className="h-4 w-4 fill-current text-white" />}
                  <span>{primaryText}</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              ) : (
                <Link
                  href={primaryCta.href}
                  className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(1,114,255,0.4)] transition-all hover:scale-[1.02]"
                >
                  {primaryCta.icon ?? <Zap className="h-4 w-4 fill-current text-white" />}
                  <span>{primaryText}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}

              {secondaryCta.external ? (
                <a
                  href={secondaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-muted/40 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-md transition-all hover:border-primary/50 hover:bg-muted/70 hover:scale-[1.02]"
                >
                  {secondaryCta.icon ?? <Calendar className="h-4 w-4 text-primary" />}
                  <span>{secondaryText}</span>
                </a>
              ) : (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-muted/40 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-md transition-all hover:border-primary/50 hover:bg-muted/70 hover:scale-[1.02]"
                >
                  {secondaryCta.icon ?? <Calendar className="h-4 w-4 text-primary" />}
                  <span>{secondaryText}</span>
                </Link>
              )}
            </div>

            {/* Trust Badges Bar */}
            {trustBadges && trustBadges.length > 0 && (
              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-6 border-t border-border/40">
                {trustBadges.map((badgeText, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>{badgeText}</span>
                  </div>
                ))}
              </div>
            )}
          </PopIn>
        </div>
      </div>
    </section>
  );
}
