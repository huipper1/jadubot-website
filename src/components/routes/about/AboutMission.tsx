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
    <section className="relative border-t border-border bg-background py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <PopIn className="max-w-3xl">
          <span className="text-xs font-bold tracking-widest text-primary uppercase">
            Core Principles
          </span>
          <h2 className="mt-3 font-heading text-2xl leading-tight font-extrabold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            How we engineer conversational technology.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            No superficial marketing shortcuts. Four uncompromising commitments behind every message
            and order processed by Jadubot.
          </p>
        </PopIn>

        {/* Numbered Hairline-Divided List - Absolutely NO boxy cards */}
        <PopIn
          stagger={0.08}
          className="mt-12 divide-y divide-border border-y border-border sm:mt-16"
        >
          {PRINCIPLES.map((principle) => (
            <div
              key={principle.num}
              className="grid grid-cols-1 items-baseline gap-4 py-8 transition-colors hover:bg-muted/30 sm:py-10 md:grid-cols-12 md:gap-8"
            >
              <div className="md:col-span-2">
                <span className="font-mono text-xl font-bold text-primary sm:text-2xl">
                  {principle.num}
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-heading text-lg font-bold text-foreground sm:text-xl">
                  {principle.title}
                </h3>
              </div>
              <div className="md:col-span-6">
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
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
