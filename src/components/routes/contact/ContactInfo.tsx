"use client";

import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowUpRight,
  MessageCircle,
  Calendar,
  ShieldCheck,
  Users
} from "lucide-react";
import { PopIn } from "@/components/animations";
import { siteConfig, CALENDLY_DEMO_URL } from "@/config/site";

export function ContactInfo() {
  const whatsappUrl = `https://wa.me/8809611609565?text=${encodeURIComponent(
    "Hi Jadubot team, I would like to consult with an automation specialist."
  )}`;

  return (
    <PopIn className="space-y-6">
      {/* Intro Context */}
      <div>
        <h3 className="text-xl font-bold text-white sm:text-2xl font-heading">
          Direct Channels &amp; Rapid Access
        </h3>
        <p className="mt-1.5 text-xs sm:text-sm text-slate-400 leading-relaxed">
          Skip the queue. Connect directly with our automation engineering and customer success specialists through your preferred channel.
        </p>
      </div>

      {/* Hero WhatsApp Fast-Lane Card */}
      <div className="relative overflow-hidden rounded-2xl border border-emerald-500/25 bg-gradient-to-br from-[#0c1815] to-[#0a1210] p-5 sm:p-6 shadow-xl transition hover:border-emerald-500/40">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/15 text-[#25D366]">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white">WhatsApp Fast Lane</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online
                </span>
              </div>
              <p className="text-xs text-slate-300">Direct message our sales &amp; support desk</p>
            </div>
          </div>
        </div>

        <p className="mt-3 text-xs text-slate-400">
          Fastest channel for Bangladeshi merchants. Most chats answered in less than 5 minutes during operating hours.
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
      <div className="rounded-2xl border border-[#0172ff]/25 bg-gradient-to-br from-[#0b1424] to-[#090d16] p-5 sm:p-6 shadow-lg">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#0172ff]/15 text-sky-400">
            <Calendar className="h-4.5 w-4.5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">Book a Live 1-on-1 Strategy Demo</h4>
            <p className="text-xs text-slate-400">30-min Google Meet walkthrough</p>
          </div>
        </div>
        <p className="mt-2.5 text-xs text-slate-300 leading-relaxed">
          Need an interactive demonstration with your team? Pick a time on our calendar to explore custom bot flows and CPA integrations.
        </p>
        <a
          href={CALENDLY_DEMO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3.5 inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition"
        >
          <span>Schedule on Calendly</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Direct Contact Details Ledger */}
      <div className="space-y-4 rounded-2xl border border-white/[0.08] bg-[#0c1017]/60 p-5 sm:p-6 backdrop-blur-md">
        {/* Phone */}
        <div className="flex items-start gap-3.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.05] text-slate-300">
            <Phone className="h-4 w-4" />
          </div>
          <div>
            <div className="text-xs text-slate-400">Helpline Phone</div>
            <a
              href={`tel:${siteConfig.phone}`}
              className="text-sm font-bold text-white transition hover:text-[#38bdf8]"
            >
              {siteConfig.phone}
            </a>
            <div className="text-[11px] text-slate-500">9:00 AM – 11:00 PM BST • 7 Days a Week</div>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-3.5 pt-3 border-t border-white/[0.05]">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.05] text-slate-300">
            <Mail className="h-4 w-4" />
          </div>
          <div>
            <div className="text-xs text-slate-400">Official Inquiries &amp; Enterprise</div>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm font-bold text-white transition hover:text-[#38bdf8]"
            >
              {siteConfig.email}
            </a>
            <div className="text-[11px] text-slate-500">RFP, billing, partnerships &amp; technical queries</div>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start gap-3.5 pt-3 border-t border-white/[0.05]">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.05] text-slate-300">
            <MapPin className="h-4 w-4" />
          </div>
          <div>
            <div className="text-xs text-slate-400">Headquarters &amp; AI Lab</div>
            <div className="text-sm font-medium text-white">
              {siteConfig.address}
            </div>
            <div className="text-[11px] text-slate-500">Visits by appointment for enterprise consultations</div>
          </div>
        </div>
      </div>

      {/* Community & Verification Footer */}
      <div className="flex items-center justify-between gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-sky-400 shrink-0" />
          <span>Official Bangladeshi Merchant Group</span>
        </div>
        <a
          href={siteConfig.social.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-semibold text-white hover:text-sky-300 transition shrink-0"
        >
          <span>Facebook Page</span>
          <ArrowUpRight className="h-3 w-3" />
        </a>
      </div>
    </PopIn>
  );
}
