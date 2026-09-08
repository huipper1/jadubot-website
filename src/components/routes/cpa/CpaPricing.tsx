import { Check, ArrowRight, ShieldCheck } from "lucide-react";
import { PopIn } from "@/components/animations";
import { CPA_PLANS } from "./cpa-data";

export function CpaPricing() {
  return (
    <section id="cpapricing" className="relative py-16 md:py-24 border-t border-[#373a41]/60">
      <div className="container mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1 text-xs font-semibold text-brand">
            Performance Marketer Pricing
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            CPA Marketing Automation Packages
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Scale your performance campaigns with precision-built automation tools, randomized
            delay algorithms, and instant server-to-server lead handoffs.
          </p>
        </div>

        <PopIn stagger={0.08} className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CPA_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`glass-card glass-card-hover group relative flex flex-col justify-between rounded-2xl p-7 transition-all duration-300 ${
                plan.isPopular
                  ? "border-brand/50 shadow-[0_0_30px_rgba(142,45,226,0.25)] ring-1 ring-brand/40"
                  : ""
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#4a00e0] to-[#8e2de2] px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
                  Most Popular
                </div>
              )}

              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-brand">
                  {plan.tag}
                </span>
                <h3 className="mt-2 text-xl font-bold text-foreground">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-foreground">{plan.price}</span>
                  <span className="text-xs text-muted-foreground">/{plan.period}</span>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  {plan.description}
                </p>

                <div className="mt-6 border-t border-white/5 pt-5">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-foreground/80 mb-3">
                    Included Features:
                  </div>
                  <ul className="space-y-2.5 text-xs text-muted-foreground">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                        <span className="text-foreground/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5">
                <a
                  href={plan.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex w-full items-center justify-center gap-2 rounded-xl py-3 text-xs font-bold transition-all ${
                    plan.isPopular
                      ? "btn-primary shadow-[0_0_20px_rgba(142,45,226,0.35)]"
                      : "btn-black border border-[#373a41] hover:border-brand/40"
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </PopIn>

        <div className="mt-12 flex items-center justify-center gap-3 text-xs text-muted-foreground">
          <ShieldCheck className="h-4 w-4 text-emerald-400" />
          <span>7-Day Money-Back Guarantee &bull; bKash, Nagad, Card &amp; Bank Transfer Accepted</span>
        </div>
      </div>
    </section>
  );
}
