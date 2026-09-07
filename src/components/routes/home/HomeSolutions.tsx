"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/utils";

const SOLUTIONS_ITEMS = [
  {
    id: "sales",
    title: "Increased Sales",
    description:
      "Jadubot attends to your customer's queries 24/7 and closes more sales."
  },
  {
    id: "replies",
    title: "Instant Replies",
    description:
      "Jadubot instantly answers across all platforms and organize the messages for you."
  },
  {
    id: "productivity",
    title: "Increased Productivity",
    description:
      "Jadubot handles customers all day, so you can focus on your business growth."
  }
];

const ITEM_DURATION = 5000; // 5 seconds per item
const TOTAL_DURATION = ITEM_DURATION * SOLUTIONS_ITEMS.length; // 15 seconds total cycle

export function HomeSolutions() {
  const [activeTab, setActiveTab] = useState(0);
  const progressFillRef = useRef<HTMLDivElement | null>(null);
  const elapsedRef = useRef<number>(0);
  const lastTimeRef = useRef<number | null>(null);

  useEffect(() => {
    let animationFrameId: number;

    const updateProgress = (currentTime: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = currentTime;
      }

      const delta = currentTime - lastTimeRef.current;
      lastTimeRef.current = currentTime;

      elapsedRef.current = (elapsedRef.current + delta) % TOTAL_DURATION;

      const progressPercent = (elapsedRef.current / TOTAL_DURATION) * 100;

      if (progressFillRef.current) {
        progressFillRef.current.style.height = `${progressPercent}%`;
      }

      const currentTab = Math.min(
        Math.floor(elapsedRef.current / ITEM_DURATION),
        SOLUTIONS_ITEMS.length - 1
      );

      setActiveTab((prev) => (prev !== currentTab ? currentTab : prev));

      animationFrameId = requestAnimationFrame(updateProgress);
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lastTimeRef.current = null;
    };
  }, []);

  const handleTabClick = (index: number) => {
    elapsedRef.current = index * ITEM_DURATION;
    const progressPercent = (elapsedRef.current / TOTAL_DURATION) * 100;
    if (progressFillRef.current) {
      progressFillRef.current.style.height = `${progressPercent}%`;
    }
    setActiveTab(index);
  };

  return (
    <section id="solutions" className="relative py-16 md:py-28 overflow-hidden bg-[#0c0e12]">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Left-aligned matching screenshot */}
        <div className="max-w-3xl text-left">
          <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-[#0c2417] px-3.5 py-1 text-xs font-semibold text-emerald-400">
            Solutions
          </div>

          <h2 className="mt-4 font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.18] max-w-2xl">
            Jadubot replies to all of your customers so that you can focus on growth
          </h2>

          <p className="mt-3 text-base sm:text-lg text-[#cecfd2]/80 font-normal">
            Just like your superhuman sales agent
          </p>
        </div>

        {/* 2-Column Layout: Mobile = Video Top, Items Bottom; Desktop = Items Left, Video Right */}
        <div className="mt-12 lg:mt-16 grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Left Column (Items with one continuous vertical progress bar) */}
          <div className="order-2 lg:order-1 lg:col-span-5 relative pl-7 sm:pl-8">
            {/* Single continuous background vertical track */}
            <div className="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-full bg-white/10 overflow-hidden">
              {/* Green progress bar increasing over time */}
              <div
                ref={progressFillRef}
                className="w-full bg-emerald-400 rounded-full shadow-[0_0_12px_rgba(52,211,153,0.7)] will-change-[height]"
                style={{ height: "0%" }}
              />
            </div>

            {/* List of text items */}
            <div className="space-y-8 sm:space-y-10">
              {SOLUTIONS_ITEMS.map((item, idx) => {
                const isActive = activeTab === idx;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleTabClick(idx)}
                    className="relative w-full text-left group cursor-pointer transition-all duration-200 block"
                  >
                    <h3
                      className={cn(
                        "font-heading text-base sm:text-lg font-semibold transition-colors duration-200",
                        isActive ? "text-white" : "text-white/80 group-hover:text-white"
                      )}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={cn(
                        "mt-1.5 text-xs sm:text-sm leading-relaxed max-w-md transition-colors duration-200",
                        isActive
                          ? "text-[#cecfd2]"
                          : "text-[#cecfd2]/55 group-hover:text-[#cecfd2]/75"
                      )}
                    >
                      {item.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column (Video / Phone) - on mobile: order-1 (top); on desktop: order-2 (right) */}
          <div className="order-1 lg:order-2 lg:col-span-7 flex justify-center items-center">
            <video
              src="/assets/videos/solution-instant-reply.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[520px] object-contain select-none pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
