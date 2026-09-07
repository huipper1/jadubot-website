"use client";

import { useState } from "react";
import { cn } from "@/utils";

const VIDEO_ITEMS = [
  {
    title: "Tag & Segment System",
    description: "Automatically organize and label leads based on purchase intent and interaction history.",
    videoSrc: "/assets/videos/feature-comment-automation.mp4"
  },
  {
    title: "AI Product Suggestions",
    description: "Recommend related products, popular sizes, and matching accessories during conversation.",
    videoSrc: "/assets/videos/feature-product-suggestion.mp4"
  },
  {
    title: "Out-of-Stock Alerts",
    description: "Capture interested shoppers when inventory runs out and notify them automatically on restock.",
    videoSrc: "/assets/videos/feature-stock-alert.mp4"
  },
  {
    title: "Comment-to-Inbox Automation",
    description: "Turn every public Facebook comment into a private, high-converting Messenger conversation.",
    videoSrc: "/assets/videos/feature-comment-automation.mp4"
  },
  {
    title: "Built-in Order Cart",
    description: "Complete order checkout with item selection and customer address capture right inside chat.",
    videoSrc: "/assets/videos/feature-in-chat-checkout.mp4"
  },
  {
    title: "Click-to-Message Ads",
    description: "Connect Facebook and Instagram Ads directly to AI chat funnels with zero drop-off.",
    videoSrc: "/assets/videos/feature-click-to-message-ads.mp4"
  }
];

export function HomeVideoSlider() {
  const [activeVideo, setActiveVideo] = useState(0);

  return (
    <section className="relative py-20 md:py-32 border-t border-[#373a41]/60 bg-[#0c0e12]">
      <div className="container">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="solution-badge">Interactive Demos</div>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            How Jadubot does charms in e-commerce
          </h2>
          <p className="mt-4 text-base text-[#cecfd2]">
            Watch live demonstrations of our most popular social commerce workflows.
          </p>
        </div>

        {/* Video Tabs Selector */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
          {VIDEO_ITEMS.map((item, idx) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActiveVideo(idx)}
              className={cn(
                "rounded-xl px-4 py-2 text-xs font-semibold transition-all duration-200",
                activeVideo === idx
                  ? "bg-gradient-to-r from-[#4a00e0] to-[#8e2de2] text-white shadow-[0_0_15px_rgba(142,45,226,0.35)]"
                  : "border border-[#373a41] bg-[#12151c] text-[#cecfd2] hover:border-[#8e2de2]/40 hover:text-white"
              )}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Main Video Display Screen */}
        <div className="mt-10 mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-2xl border border-[#373a41] bg-[#12151c] p-2 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-black">
              <video
                key={VIDEO_ITEMS[activeVideo].videoSrc + activeVideo}
                src={VIDEO_ITEMS[activeVideo].videoSrc}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-xl bg-black/70 p-4 backdrop-blur-md border border-white/10">
                <div>
                  <h3 className="text-base font-bold text-white">
                    {VIDEO_ITEMS[activeVideo].title}
                  </h3>
                  <p className="text-xs text-[#cecfd2]">
                    {VIDEO_ITEMS[activeVideo].description}
                  </p>
                </div>

                <a
                  href="https://app.jadubot.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs shrink-0 !py-2 !px-4"
                >
                  Try this flow
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
