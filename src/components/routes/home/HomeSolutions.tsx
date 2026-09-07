"use client";

import { useState, useEffect } from "react";
import { TrendingUp, Zap, Clock } from "lucide-react";
import { cn } from "@/utils";

const SOLUTIONS_TABS = [
  {
    id: "sales",
    title: "Increased Sales",
    subtitle: "Turn chats into immediate purchases",
    description:
      "Jadubot turns every conversation into a sales opportunity. Answer product inquiries, recommend items based on customer preference, and take orders inside chat 24/7.",
    icon: TrendingUp,
    videoSrc: "/assets/videos/solution-sales-demo.mp4"
  },
  {
    id: "replies",
    title: "Instant Replies",
    subtitle: "Under 10-second response time 24/7",
    description:
      "Zero waiting time. Jadubot replies within seconds on Facebook Messenger, Instagram DMs, and WhatsApp so you never lose an impatient customer to competitors.",
    icon: Zap,
    videoSrc: "/assets/videos/solution-instant-reply.mp4"
  },
  {
    id: "productivity",
    title: "Increased Productivity",
    subtitle: "Cut 80% of repetitive support tickets",
    description:
      "Automate 80% of repetitive questions about price, delivery times, and stock availability. Free up your human staff to handle high-ticket custom orders.",
    icon: Clock,
    videoSrc: "/assets/videos/solution-productivity.mp4"
  }
];

export function HomeSolutions() {
  const [activeTab, setActiveTab] = useState(0);

  // Auto-advance tabs every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % SOLUTIONS_TABS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [activeTab]);

  return (
    <section id="solutions" className="relative py-20 md:py-32 overflow-hidden bg-[#0c0e12]">
      <div className="container">
        {/* Section Header matching LazyChat */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="solution-badge">Solutions</div>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl leading-tight">
            Replies to all of your customers so you can focus on growth
          </h2>
          <p className="mt-4 text-base text-[#cecfd2]">
            Deliver human-like, instantaneous conversations at scale across all your social channels.
          </p>
        </div>

        {/* 3-Tab Interactive Showcase */}
        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Left: Tab Selectors */}
          <div className="space-y-4 lg:col-span-5">
            {SOLUTIONS_TABS.map((tab, idx) => {
              const Icon = tab.icon;
              const isActive = activeTab === idx;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={cn(
                    "relative w-full rounded-2xl p-6 text-left transition-all duration-300",
                    isActive
                      ? "border border-[#8e2de2]/50 bg-[#181d27] shadow-[0_8px_32px_rgba(142,45,226,0.18)]"
                      : "border border-[#373a41]/60 bg-[#12151c]/60 hover:border-[#373a41] hover:bg-[#12151c]"
                  )}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={cn(
                        "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors",
                        isActive
                          ? "bg-gradient-to-br from-[#4a00e0] to-[#8e2de2] text-white shadow-[0_0_15px_rgba(142,45,226,0.4)]"
                          : "bg-[#181d27] text-[#cecfd2]"
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-heading text-lg font-bold text-white">
                          {tab.title}
                        </h3>
                        {isActive && (
                          <span className="text-[10px] font-semibold text-[#c084fc] uppercase tracking-wider">
                            Active
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-xs font-medium text-[#c084fc]">
                        {tab.subtitle}
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-[#cecfd2]/80">
                        {tab.description}
                      </p>
                    </div>
                  </div>

                  {/* Progress Line */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden rounded-b-2xl bg-[#373a41]">
                      <div className="h-full bg-gradient-to-r from-[#4a00e0] to-[#8e2de2] animate-pulse" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: Looping Video Screen */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-2xl border border-[#373a41] bg-[#12151c] p-2 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-black">
                <video
                  key={SOLUTIONS_TABS[activeTab].videoSrc}
                  src={SOLUTIONS_TABS[activeTab].videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-lg bg-black/60 px-4 py-2 text-xs text-white backdrop-blur-md">
                  <span className="font-semibold text-[#d8b4fe]">
                    Live Demonstration
                  </span>
                  <span className="text-[#cecfd2]/70 font-mono">
                    {SOLUTIONS_TABS[activeTab].title}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
