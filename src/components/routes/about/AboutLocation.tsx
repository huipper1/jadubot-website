"use client";

import { MapPin, Mail, Phone, Clock, ShieldCheck } from "lucide-react";
import { PopIn } from "@/components/animations";
import { siteConfig } from "@/config/site";

export function AboutLocation() {
  return (
    <section className="relative py-16 md:py-24 border-t border-white/10">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <PopIn className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left 5 Cols: Location Header */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#38bdf8]">
              Presence &amp; Operations
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Rooted in Dhaka, serving merchants nationwide.
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Our engineering and operations teams are based out of Daffodil Smart City (DSC) in Savar, Dhaka. We welcome founders, partners, and online merchants to visit us or connect directly.
            </p>
          </div>

          {/* Right 7 Cols: Open Ledger of Office Details - No Cards */}
          <div className="lg:col-span-7 divide-y divide-white/10 border-y border-white/10">
            {/* Address Row */}
            <div className="py-6 flex items-start gap-4">
              <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-[#38bdf8]">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Innovation Campus HQ</h4>
                <p className="mt-1 text-sm text-slate-300">
                  Daffodil Smart City (DSC), Birulia, Savar, Dhaka 1216, Bangladesh
                </p>
                <p className="mt-0.5 text-xs text-slate-500">
                  Engineering, product development, and customer success center.
                </p>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="py-6 flex items-start gap-4">
              <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                <Clock className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Office &amp; Support Availability</h4>
                <p className="mt-1 text-sm text-slate-300">
                  Sunday – Thursday: 9:00 AM – 8:00 PM (GMT+6)
                </p>
                <p className="mt-0.5 text-xs text-slate-500">
                  Platform infrastructure and automated cloud bots operate 24/7/365 with live monitoring.
                </p>
              </div>
            </div>

            {/* Direct Connect */}
            <div className="py-6 flex items-start gap-4">
              <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                <Mail className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Direct Communications</h4>
                <p className="mt-1 text-sm text-slate-300">
                  Email: <a href={`mailto:${siteConfig.email}`} className="text-[#38bdf8] hover:underline">{siteConfig.email}</a>
                </p>
                <p className="mt-0.5 text-sm text-slate-300">
                  Phone / WhatsApp: <span className="text-slate-200">{siteConfig.phone}</span>
                </p>
              </div>
            </div>
          </div>
        </PopIn>
      </div>
    </section>
  );
}
