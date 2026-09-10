"use client";

import {
  MessageCircle,
  Phone,
  Calendar,
  ArrowUpRight,
  ShieldCheck,
  Clock
} from "lucide-react";
import { PopIn } from "@/components/animations";
import { siteConfig, CALENDLY_DEMO_URL } from "@/config/site";

export function FaqSupportMatrix() {
  const whatsappUrl = `https://wa.me/8809611609565?text=${encodeURIComponent(
    "Hi Jadubot team, I have a specific question not covered in your FAQ."
  )}`;

  return (
    <section className="relative py-16 sm:py-20 md:py-24 border-t border-border">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <PopIn className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#38bdf8]">
            <Clock className="h-3.5 w-3.5" />
            <span>Human Support Available Daily</span>
          </div>
          <h2 className="mt-2 font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight">
            Still Have Questions? Talk to Our Engineers
          </h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Our Dhaka-based customer success and technical team is ready to answer specific inquiries about your page volume, custom workflows, or enterprise setup.
          </p>
        </PopIn>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: WhatsApp Fast Lane */}
          <PopIn delay={0.05} className="flex">
            <div className="group relative flex flex-col justify-between w-full rounded-2xl border border-emerald-500/25 bg-card p-6 shadow-card transition-all duration-300 hover:border-emerald-500/45 hover:shadow-[0_0_24px_rgba(16,185,129,0.15)]">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366]/15 text-[#25D366]">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground font-heading">
                  WhatsApp Fast Lane
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Fastest response channel for local merchants. Most inquiries answered in under 5 minutes.
                </p>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#25D366] px-4 py-2.5 text-xs font-semibold text-black transition hover:bg-[#20bd5a]"
              >
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </PopIn>

          {/* Card 2: Phone Helpline */}
          <PopIn delay={0.1} className="flex">
            <div className="group relative flex flex-col justify-between w-full rounded-2xl border border-border bg-card/80 p-6 shadow-card backdrop-blur-md transition-all duration-300 hover:border-primary/40">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted text-muted-foreground">
                  <Phone className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground font-heading">
                  Direct Helpline
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Speak directly with an automation consultant. 9:00 AM – 11:00 PM BST, 7 days a week.
                </p>
              </div>

              <a
                href={`tel:${siteConfig.phone}`}
                className="mt-6 inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-border bg-muted px-4 py-2.5 text-xs font-semibold text-foreground transition hover:bg-muted/80"
              >
                <span>{siteConfig.phone}</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </PopIn>

          {/* Card 3: 1-on-1 Calendly Demo */}
          <PopIn delay={0.15} className="flex">
            <div className="group relative flex flex-col justify-between w-full rounded-2xl border border-[#0172ff]/25 bg-card p-6 shadow-card transition-all duration-300 hover:border-primary/45 hover:shadow-card">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Calendar className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground font-heading">
                  Live 1-on-1 Demo
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  30-minute interactive Google Meet walkthrough tailored to your store or campaigns.
                </p>
              </div>

              <a
                href={CALENDLY_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#0172ff] to-[#0158c7] px-4 py-2.5 text-xs font-semibold text-white transition hover:brightness-110 shadow-[0_0_15px_rgba(1,114,255,0.3)]"
              >
                <span>Book 30-Min Demo</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </PopIn>
        </div>

        {/* Reassurance Footer */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground border-t border-border pt-6 text-center">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
            <span>Unconditional 7-day refund guarantee on all paid packages</span>
          </div>
          <span className="hidden sm:inline text-slate-600">•</span>
          <span>Daffodil Smart City (DSC), Birulia, Savar, Dhaka-1216</span>
        </div>
      </div>
    </section>
  );
}
