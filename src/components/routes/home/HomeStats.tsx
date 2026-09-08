"use client";

import { useCounter } from "@/lib/animations";
import { PopIn } from "@/components/animations";

function StatItem({
  value,
  suffix,
  label,
  sublabel
}: {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}) {
  const { count, ref } = useCounter(value);

  return (
    <div className="glass-card group relative flex flex-col items-center rounded-2xl p-8 text-center transition-all duration-300 hover:border-brand/30">
      <div className="font-mono text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
        <span ref={ref}>{count}</span>
        <span className="text-brand">{suffix}</span>
      </div>
      <div className="mt-3 text-base font-bold text-foreground transition-colors group-hover:text-brand">
        {label}
      </div>
      <div className="mt-1 text-xs text-muted-foreground">{sublabel}</div>
    </div>
  );
}

export function HomeStats() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container mx-auto max-w-7xl">
        <PopIn stagger={0.08} className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          <StatItem
            value={25}
            suffix="%"
            label="Revenue Boost"
            sublabel="Average merchant increase"
          />
          <StatItem
            value={10}
            suffix="x"
            label="Faster Replies"
            sublabel="Under 2-second response"
          />
          <StatItem
            value={500}
            suffix="k+"
            label="Automated Chats"
            sublabel="Customer inquiries answered"
          />
          <StatItem
            value={99}
            suffix=".9%"
            label="Reliable Uptime"
            sublabel="Never misses a message"
          />
        </PopIn>
      </div>
    </section>
  );
}
