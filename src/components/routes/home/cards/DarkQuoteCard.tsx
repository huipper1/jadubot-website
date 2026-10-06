"use client";

import { ArrowUpRight } from "@/components/icons";

export function DarkQuoteCard() {
  return (
    <div
      data-preserve-radius="true"
      className="flex h-full w-full flex-col justify-between rounded-2xl bg-[#0e121a] p-4 text-white border-0"
    >
      <div>
        <div className="flex items-center justify-between text-slate-400">
          <span className="text-[10px] font-mono tracking-wider uppercase">Strategic Core</span>
          <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />
        </div>

        <p className="mt-4 font-heading text-sm font-extrabold leading-snug tracking-tight text-white sm:text-base">
          Expertise <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 align-middle mx-1 shadow-[0_0_8px_#34d399]" />
          that Combines Strategy, Data, and Artificial Intelligence
        </p>
      </div>

      <div className="flex items-center justify-between border-t border-white/10 pt-2 text-[10px] text-slate-400">
        <span>Autonomous Suite</span>
        <span className="font-semibold text-emerald-400">Ready</span>
      </div>
    </div>
  );
}
