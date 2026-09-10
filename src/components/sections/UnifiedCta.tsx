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
      className={`relative py-20 sm:py-24 md:py-28 overflow-hidden bg-[#0a0c10] border-t border-white/[0.08] ${className}`}
    >
      {/* Dynamic atmospheric ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[850px] max-w-full rounded-full bg-gradient-to-r from-blue-600/12 via-sky-500/8 to-blue-600/12 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-5xl rounded-3xl border border-white/10 bg-gradient-to-b from-[#0d1424]/90 via-[#0a0f1c]/90 to-[#070b14]/95 p-8 sm:p-12 md:p-16 text-center shadow-[0_0_50px_rgba(1,114,255,0.15)] backdrop-blur-2xl">
          <PopIn>
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-[#0b162b]/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-300 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-sky-400" />
              <span>{badge}</span>
            </div>

            {/* Main Heading with Brand Gradient */}
            <h2 className="mt-6 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl leading-[1.15]">
              {title}{" "}
              {highlightedTitle && (
                <span className="bg-gradient-to-r from-[#93c5fd] via-[#38bdf8] to-[#0172ff] bg-clip-text text-transparent">
                  {highlightedTitle}
                </span>
              )}{" "}
              {titleEnd}
            </h2>

            {/* Subtitle Description */}
            <p className="mx-auto mt-5 max-w-2xl text-base text-slate-300 sm:text-lg leading-relaxed">
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

              {secondaryCta &&
                (secondaryCta.external ? (
                  <a
                    href={secondaryCta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-medium text-slate-200 backdrop-blur-sm transition-all hover:border-[#0172ff]/50 hover:bg-[#0172ff]/10 hover:text-white"
                  >
                    {secondaryCta.icon ?? <Calendar className="h-4 w-4 text-sky-400" />}
                    <span>{secondaryText}</span>
                  </a>
                ) : (
                  <Link
                    href={secondaryCta.href}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-medium text-slate-200 backdrop-blur-sm transition-all hover:border-[#0172ff]/50 hover:bg-[#0172ff]/10 hover:text-white"
                  >
                    {secondaryCta.icon ?? <Calendar className="h-4 w-4 text-sky-400" />}
                    <span>{secondaryText}</span>
                  </Link>
                ))}
            </div>

            {/* Trust Highlights */}
            {trustBadges && trustBadges.length > 0 && (
              <div className="mt-9 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 border-t border-white/[0.08] pt-6">
                {trustBadges.map((badgeText, idx) => (
                  <span key={idx} className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-sky-400" />
                    <span>{badgeText}</span>
                  </span>
                ))}
              </div>
            )}
          </PopIn>
        </div>
      </div>
    </section>
  );
}
