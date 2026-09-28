"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/utils";

const SOLUTIONS_ITEMS = [
  {
    id: "sales",
    title: "Increased Sales",
    description: "Jadubot attends to your customer's queries 24/7 and closes more sales."
  },
  {
    id: "replies",
    title: "Instant Replies",
    description: "Jadubot instantly answers across all platforms and organize the messages for you."
  },
  {
    id: "productivity",
    title: "Increased Productivity",
    description: "Jadubot handles customers all day, so you can focus on your business growth."
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
    <section id="solutions" className="relative overflow-hidden bg-background py-16 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header - Left-aligned matching screenshot */}
        <div className="max-w-3xl text-left">
          <h2 className="max-w-2xl font-heading text-3xl leading-[1.18] font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Jadubot replies to all of your customers so that you can focus on growth
          </h2>

          <p className="mt-3 text-base font-normal text-muted-foreground/80 sm:text-lg">
            Just like your superhuman sales agent
          </p>
        </div>

        {/* 2-Column Layout: Mobile = Video Top, Items Bottom; Desktop = Items Left, Video Right */}
        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:items-center">
          {/* Left Column (Items with one continuous vertical progress bar) */}
          <div className="relative order-2 pl-7 sm:pl-8 lg:order-1 lg:col-span-5">
            {/* Single continuous background vertical track */}
            <div className="absolute top-1.5 bottom-1.5 left-0 w-[3px] overflow-hidden rounded-full bg-muted">
              {/* Green progress bar increasing over time */}
              <div
                ref={progressFillRef}
                className="w-full rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)] will-change-[height]"
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
                    className="group relative block w-full cursor-pointer text-left transition-all duration-200"
                  >
                    <h3
                      className={cn(
                        "font-heading text-base font-semibold transition-colors duration-200 sm:text-lg",
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground group-hover:text-foreground"
                      )}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={cn(
                        "mt-1.5 max-w-md text-xs leading-relaxed transition-colors duration-200 sm:text-sm",
                        isActive
                          ? "text-muted-foreground"
                          : "text-muted-foreground/55 group-hover:text-muted-foreground/75"
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
          <div className="order-1 flex items-center justify-center lg:order-2 lg:col-span-7">
            <video
              src="/assets/videos/solution-instant-reply.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="pointer-events-none w-full max-w-[380px] object-contain select-none sm:max-w-[440px] lg:max-w-[520px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
