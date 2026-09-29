"use client";

export function PercentageCard() {
  return (
    <div
      data-preserve-radius="true"
      className="flex h-full w-full flex-col justify-between rounded-2xl bg-white/95 p-3.5 text-slate-800 backdrop-blur-md"
    >
      <div>
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-semibold text-slate-500 uppercase">Conversion</span>
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
        </div>

        <div className="mt-2 flex items-baseline gap-1">
          <span className="font-heading text-2xl font-black text-slate-900">4%</span>
          <span className="text-[10px] font-bold text-emerald-600">Avg lift</span>
        </div>
      </div>

      {/* Mini Bar Chart Columns */}
      <div className="mt-2 flex items-end justify-between gap-1.5 h-14 border-b border-slate-100 pb-1">
        <div className="w-full rounded-t bg-slate-100 h-[30%]" />
        <div className="w-full rounded-t bg-slate-200 h-[45%]" />
        <div className="w-full rounded-t bg-slate-300 h-[35%]" />
        <div className="w-full rounded-t bg-sky-400 h-[65%]" />
        <div className="w-full rounded-t bg-primary h-[95%]" />
      </div>

      <div className="flex items-center justify-between pt-1 text-[9px] text-slate-400">
        <span>Benchmark</span>
        <span className="font-bold text-slate-700">Top 5%</span>
      </div>
    </div>
  );
}
