"use client";

import { Activity } from "lucide-react";

export function StatsCard() {
  return (
    <div
      data-preserve-radius="true"
      className="flex h-full w-full flex-col justify-between rounded-2xl bg-white/95 p-3.5 text-slate-800 backdrop-blur-md"
    >
      <div>
        <div className="flex items-center justify-between text-slate-400">
          <span className="text-[10px] font-semibold tracking-wider text-slate-500 uppercase">Data Points</span>
          <Activity className="h-3.5 w-3.5 text-sky-500" />
        </div>

        <div className="mt-3">
          <div className="font-heading text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
            520k+
          </div>
          <p className="mt-0.5 text-[10px] font-medium text-slate-500">
            Processed messages &amp; events
          </p>
        </div>
      </div>

      {/* Mini Visual Metric Chips */}
      <div className="flex items-center justify-between border-t border-slate-100 pt-2 text-[9px]">
        <span className="rounded-md bg-emerald-50 px-1.5 py-0.5 font-bold text-emerald-600">
          +38.5% YoY
        </span>
        <span className="text-slate-400">Global sync</span>
      </div>
    </div>
  );
}
