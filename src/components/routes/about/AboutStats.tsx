"use client";

import { PopIn } from "@/components/animations";

const STATS = [
  {
    value: "1,200+",
    label: "Active BD Merchants",
    detail: "From boutique fashion brands to nationwide electronics retailers across Bangladesh."
  },
  {
    value: "500K+",
    label: "Monthly Inquiries Handled",
    detail: "Automating product inquiries, order placement, and comment-to-inbox workflows 24/7."
  },
  {
    value: "99.9%",
    label: "Platform Availability",
    detail: "High-uptime, scalable cloud infrastructure tailored for peak Eid and seasonal sale surges."
  },
  {
    value: "< 1 sec",
    label: "Response Velocity",
    detail: "Sub-second AI replies that catch buyers at peak purchase intent without manual waiting."
  }
];

export function AboutStats() {
  return (
    <section className="relative border-y border-white/10 bg-white/[0.015] py-12 md:py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <PopIn stagger={0.06} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
          {STATS.map((item, idx) => (
            <div
              key={item.label}
              className="flex flex-col justify-between lg:px-8 first:lg:pl-0 last:lg:pr-0"
            >
              <div>
                <div className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                  {item.value}
                </div>
                <div className="mt-2 text-sm font-bold text-slate-200">
                  {item.label}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </PopIn>
      </div>
    </section>
  );
}
