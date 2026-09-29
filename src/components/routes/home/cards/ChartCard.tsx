"use client";

export function ChartCard() {
  return (
    <div
      data-preserve-radius="true"
      className="flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl bg-white/95 p-3.5 text-slate-800 backdrop-blur-md"
    >
      <div>
        <div className="font-heading text-xs font-bold leading-tight text-slate-900">
          Intelligence in <br /> Every Decision
        </div>

        {/* Mini stats */}
        <div className="mt-2 flex items-baseline gap-1.5">
          <span className="font-heading text-lg font-black text-slate-900">89.4%</span>
          <span className="text-[10px] font-semibold text-emerald-600">↑ High accuracy</span>
        </div>
      </div>

      {/* Inline SVG Smooth Area / Line Chart */}
      <div className="mt-2 w-full pt-1">
        <svg viewBox="0 0 100 48" className="h-16 w-full overflow-hidden" preserveAspectRatio="none">
          <defs>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.02" />
            </linearGradient>
          </defs>
          <path
            d="M 0 38 Q 20 40, 35 26 T 70 20 T 100 8 L 100 48 L 0 48 Z"
            fill="url(#areaGrad)"
          />
          <path
            d="M 0 38 Q 20 40, 35 26 T 70 20 T 100 8"
            fill="none"
            stroke="#0284c7"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>

        {/* Timeline markers */}
        <div className="flex justify-between border-t border-slate-100 pt-1 text-[8px] font-medium text-slate-400">
          <span>Mon</span>
          <span>Wed</span>
          <span>Fri</span>
          <span>Sun</span>
        </div>
      </div>
    </div>
  );
}
