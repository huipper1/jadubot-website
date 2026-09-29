"use client";

import { Sparkles } from "lucide-react";

export function PartialEdgeCard() {
  return (
    <div
      data-preserve-radius="true"
      className="flex h-full w-full flex-col justify-between rounded-2xl bg-gradient-to-br from-emerald-500/10 via-white/90 to-sky-500/10 p-3.5 text-slate-800 backdrop-blur-md"
    >
      <div>
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500 text-white">
          <Sparkles className="h-4 w-4" />
        </div>
        <div className="mt-3 font-heading text-xs font-bold text-slate-900">
          Global Scale
        </div>
        <p className="mt-1 text-[10px] text-slate-500 line-clamp-2">
          Multi-region edge networks
        </p>
      </div>

      <div className="text-[9px] font-semibold text-emerald-600">
        99.99% Uptime
      </div>
    </div>
  );
}
