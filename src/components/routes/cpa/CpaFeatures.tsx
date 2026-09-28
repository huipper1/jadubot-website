"use client";

import { PopIn } from "@/components/animations";

const CAPABILITIES = [
  {
    num: "01",
    title: "Comment-to-Postback Funnels",
    tag: "Instant DM Injection",
    description:
      "When users comment on your sponsored posts or dark ads, Jadubot instantly likes the comment, drops a public engagement reply to boost organic viral reach, and delivers a private DM with dynamic {clickid} parameters directly into their inbox."
  },
  {
    num: "02",
    title: "Server-to-Server (S2S) Postbacks",
    tag: "Zero Pixel Loss",
    description:
      "Real-time server-side webhook syncing with Voluum, RedTrack, BeMob, MaxBounty, ClickDealer, and Everflow. Bypasses browser ad blockers, third-party cookie restrictions, and iOS privacy drop-offs with 100% conversion accuracy."
  },
  {
    num: "03",
    title: "Smart Traffic & Geo Routing",
    tag: "Dynamic Targeting",
    description:
      "Automatically route prospects to location-specific CPA offers based on country, device operating system (iOS vs Android), and carrier connection. Ensure zero wasted ad spend on unqualified clicks."
  },
  {
    num: "04",
    title: "Anti-Ban Algorithmic Pacing",
    tag: "Meta API Safe",
    description:
      "Engineered with randomized delay intervals, spintax message spinning, and simulated human typing indicators. Keeps sending velocity looking entirely organic and well within official Meta Graph API rate thresholds."
  }
];

export function CpaFeatures() {
  return (
    <section className="relative border-t border-border bg-background py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <PopIn className="max-w-3xl">
          <span className="text-xs font-bold tracking-widest text-primary uppercase">
            Technical Capabilities
          </span>
          <h2 className="mt-3 font-heading text-2xl leading-tight font-extrabold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Engineered for high-volume affiliate campaigns.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Eliminate wasted ad clicks, bypass manual inbox limitations, and route motivated
            prospects straight into your highest-converting CPA funnels.
          </p>
        </PopIn>

        {/* Unboxed Technical Capabilities Matrix - Zero Cards */}
        <PopIn
          stagger={0.08}
          className="mt-12 divide-y divide-border border-y border-border sm:mt-16"
        >
          {CAPABILITIES.map((item) => (
            <div
              key={item.num}
              className="grid grid-cols-1 items-baseline gap-4 py-8 transition-colors hover:bg-muted/30 sm:py-10 md:grid-cols-12 md:gap-8"
            >
              <div className="flex items-center gap-3 md:col-span-2">
                <span className="font-mono text-xl font-bold text-primary/80 sm:text-2xl">
                  {item.num}
                </span>
                <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold text-primary md:hidden">
                  {item.tag}
                </span>
              </div>
              <div className="space-y-1.5 md:col-span-4">
                <h3 className="font-heading text-lg font-bold text-foreground sm:text-xl">
                  {item.title}
                </h3>
                <span className="hidden rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold text-primary md:inline-block">
                  {item.tag}
                </span>
              </div>
              <div className="md:col-span-6">
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </PopIn>
      </div>
    </section>
  );
}
