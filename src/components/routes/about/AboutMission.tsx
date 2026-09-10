"use client";

import { PopIn } from "@/components/animations";

const PRINCIPLES = [
  {
    num: "01",
    title: "Bangla & Banglish Native",
    summary:
      "We don't rely on generic English translation. Our NLP models are trained on how Bangladeshis actually text, bargain, and transact—fluently parsing phonetic Banglish, regional phrasing, and casual conversational rhythms."
  },
  {
    num: "02",
    title: "Sub-Second Response Velocity",
    summary:
      "In social commerce, response time is directly proportional to conversion rate. Replying within seconds secures the customer while their purchase impulse is hot, eliminating lost sales to competing shops."
  },
  {
    num: "03",
    title: "Official Meta & WhatsApp Cloud Compliance",
    summary:
      "Every integration is built 100% on official Meta Graph APIs and WhatsApp Cloud API infrastructure. We never use brittle browser scrapers or unofficial hacks that could compromise merchant pages or trigger account bans."
  },
  {
    num: "04",
    title: "Democratic Access for Local SMBs",
    summary:
      "From solo home bakers and artisan fashion designers to nationwide retail chains, our lifetime free plan and transparent BDT pricing ensure enterprise-grade automation is within reach of every Bangladeshi business."
  }
];

export function AboutMission() {
  return (
    <section className="relative py-16 md:py-24 border-t border-white/10 bg-[#070a10]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <PopIn className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#38bdf8]">
            Core Principles
          </span>
          <h2 className="mt-3 font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            How we engineer conversational technology.
          </h2>
          <p className="mt-4 text-base text-slate-400">
            No superficial marketing shortcuts. Four uncompromising commitments behind every message and order processed by Jadubot.
          </p>
        </PopIn>

        {/* Numbered Hairline-Divided List - Absolutely NO boxy cards */}
        <PopIn stagger={0.08} className="mt-12 sm:mt-16 divide-y divide-white/10 border-y border-white/10">
          {PRINCIPLES.map((principle) => (
            <div
              key={principle.num}
              className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline transition-colors hover:bg-white/[0.015]"
            >
              <div className="md:col-span-2">
                <span className="font-mono text-xl sm:text-2xl font-bold text-[#38bdf8]/80">
                  {principle.num}
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-white">
                  {principle.title}
                </h3>
              </div>
              <div className="md:col-span-6">
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {principle.summary}
                </p>
              </div>
            </div>
          ))}
        </PopIn>
      </div>
    </section>
  );
}
