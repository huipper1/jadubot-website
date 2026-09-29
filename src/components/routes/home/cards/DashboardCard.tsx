"use client";

export function DashboardCard() {
  return (
    <div
      data-preserve-radius="true"
      className="flex h-full w-full flex-col justify-between rounded-2xl bg-white/95 p-3.5 text-slate-800 backdrop-blur-md"
    >
      <div>
        <div className="text-[10px] font-medium text-slate-500">Weekly Visitors</div>
        <div className="mt-0.5 text-base font-extrabold text-slate-900">$4,920 <span className="text-[10px] font-normal text-slate-400">/ $12,500</span></div>

        {/* Small Horizontal Bar Progress */}
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
          <div className="h-full w-3/5 rounded-full bg-sky-500" />
        </div>

        {/* Small Table Rows */}
        <div className="mt-3 space-y-1.5 border-t border-slate-100 pt-2 text-[11px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              <span className="font-medium text-slate-600">Organic</span>
            </div>
            <span className="font-bold text-slate-900">$340</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span className="font-medium text-slate-600">Referral</span>
            </div>
            <span className="font-bold text-slate-900">$190</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
              <span className="font-medium text-slate-600">Direct</span>
            </div>
            <span className="font-bold text-slate-900">$415</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 text-[9px] text-slate-400">
        <span>Updated live</span>
        <span className="font-semibold text-sky-600">+14.2%</span>
      </div>
    </div>
  );
}
