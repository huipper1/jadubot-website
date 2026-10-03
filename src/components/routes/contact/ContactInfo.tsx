"use client";

import {
  ArrowUpRight,
  Calendar,
  Clock,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Users
} from "lucide-react";

import { WhatsAppIcon } from "@/components/icons";

import { CALENDLY_DEMO_URL, siteConfig } from "@/config/site";

import { PopIn } from "@/components/animations";

export function ContactInfo() {
  const whatsappUrl = `https://wa.me/8809611609565?text=${encodeURIComponent(
    "Hi Jadubot team, I would like to consult with an automation specialist."
  )}`;

  return (
    <PopIn className="space-y-6">
      {/* Intro Context */}
      <div>
        <h3 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
          Direct Channels &amp; Rapid Access
        </h3>
        <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
          Skip the queue. Connect directly with our automation engineering and customer success
          specialists through your preferred channel.
        </p>
      </div>

      {/* Hero WhatsApp Fast-Lane Card */}
      <div className="relative overflow-hidden rounded-2xl border border-emerald-500/25 bg-card p-5 shadow-card transition hover:border-emerald-500/40 sm:p-6 dark:bg-gradient-to-br dark:from-[#0c1815] dark:to-[#0a1210]">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/15 text-[#25D366]">
              <WhatsAppIcon className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-foreground">WhatsApp Fast Lane</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-300">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  Online
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                Direct message our sales &amp; support desk
              </p>
            </div>
          </div>
        </div>

        <p className="mt-3 text-xs text-muted-foreground">
          Fastest channel for Bangladeshi merchants. Most chats answered in less than 5 minutes
          during operating hours.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-xs font-semibold text-black transition hover:bg-[#20bd5a]"
        >
          <span>Chat on WhatsApp Now</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Book a 1-on-1 Demo Banner */}
      <div className="rounded-2xl border border-primary/25 bg-card p-5 shadow-card sm:p-6 dark:bg-gradient-to-br dark:from-[#0b1424] dark:to-[#090d16]">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
            <Calendar className="h-4.5 w-4.5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-foreground">Book a Live 1-on-1 Strategy Demo</h4>
            <p className="text-xs text-muted-foreground">30-min Google Meet walkthrough</p>
          </div>
        </div>
        <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">
          Need an interactive demonstration with your team? Pick a time on our calendar to explore
          custom bot flows and CPA integrations.
        </p>
        <a
          href={CALENDLY_DEMO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3.5 inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition hover:text-primary/80"
        >
          <span>Schedule on Calendly</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Direct Contact Details Ledger */}
      <div className="space-y-4 rounded-2xl border border-border bg-card p-5 shadow-card backdrop-blur-md sm:p-6">
        {/* Phone */}
        <div className="flex items-start gap-3.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted/40 text-muted-foreground">
            <Phone className="h-4 w-4" />
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Helpline Phone</div>
            <a
              href={`tel:${siteConfig.phone}`}
              className="text-sm font-bold text-foreground transition hover:text-primary"
            >
              {siteConfig.phone}
            </a>
            <div className="text-[11px] text-muted-foreground/70">
              9:00 AM – 11:00 PM BST • 7 Days a Week
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-3.5 border-t border-border pt-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted/40 text-muted-foreground">
            <Mail className="h-4 w-4" />
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Official Inquiries &amp; Enterprise</div>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm font-bold text-foreground transition hover:text-primary"
            >
              {siteConfig.email}
            </a>
            <div className="text-[11px] text-muted-foreground/70">
              RFP, billing, partnerships &amp; technical queries
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start gap-3.5 border-t border-border pt-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted/40 text-muted-foreground">
            <MapPin className="h-4 w-4" />
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Headquarters &amp; AI Lab</div>
            <div className="text-sm font-medium text-foreground">{siteConfig.address}</div>
            <div className="text-[11px] text-muted-foreground/70">
              Visits by appointment for enterprise consultations
            </div>
          </div>
        </div>
      </div>

      {/* Community & Verification Footer */}
      <div className="flex items-center justify-between gap-4 rounded-xl border border-border/60 bg-card/60 px-4 py-3 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 shrink-0 text-primary" />
          <span>Official Bangladeshi Merchant Group</span>
        </div>
        <a
          href={siteConfig.social.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1 font-semibold text-foreground transition hover:text-primary"
        >
          <span>Facebook Page</span>
          <ArrowUpRight className="h-3 w-3" />
        </a>
      </div>
    </PopIn>
  );
}
