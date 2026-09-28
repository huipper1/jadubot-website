"use client";

import { Clock, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";

import { siteConfig } from "@/config/site";

import { PopIn } from "@/components/animations";

export function AboutLocation() {
  return (
    <section className="relative border-t border-border py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <PopIn className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left 5 Cols: Location Header */}
          <div className="space-y-4 lg:col-span-5">
            <span className="text-xs font-bold tracking-widest text-primary uppercase">
              Presence &amp; Operations
            </span>
            <h2 className="font-heading text-2xl leading-tight font-extrabold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              Rooted in Dhaka, serving merchants nationwide.
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Our engineering and operations teams are based out of Daffodil Smart City (DSC) in
              Savar, Dhaka. We welcome founders, partners, and online merchants to visit us or
              connect directly.
            </p>
          </div>

          {/* Right 7 Cols: Open Ledger of Office Details - No Cards */}
          <div className="divide-y divide-border border-y border-border lg:col-span-7">
            {/* Address Row */}
            <div className="flex items-start gap-4 py-6">
              <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground">Innovation Campus HQ</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Daffodil Smart City (DSC), Birulia, Savar, Dhaka 1216, Bangladesh
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground/80">
                  Engineering, product development, and customer success center.
                </p>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="flex items-start gap-4 py-6">
              <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 dark:text-emerald-400">
                <Clock className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground">
                  Office &amp; Support Availability
                </h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Sunday – Thursday: 9:00 AM – 8:00 PM (GMT+6)
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground/80">
                  Platform infrastructure and automated cloud bots operate 24/7/365 with live
                  monitoring.
                </p>
              </div>
            </div>

            {/* Direct Connect */}
            <div className="flex items-start gap-4 py-6">
              <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-purple-500/10 text-purple-500 dark:text-purple-400">
                <Mail className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground">Direct Communications</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Email:{" "}
                  <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">
                    {siteConfig.email}
                  </a>
                </p>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  Phone / WhatsApp:{" "}
                  <span className="font-medium text-foreground">{siteConfig.phone}</span>
                </p>
              </div>
            </div>
          </div>
        </PopIn>
      </div>
    </section>
  );
}
