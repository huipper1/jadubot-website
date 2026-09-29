"use client";

import Image from "next/image";

export function PhotoCard() {
  return (
    <div
      data-preserve-radius="true"
      className="group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl bg-white/95 p-2 backdrop-blur-md"
    >
      {/* Photo Area */}
      <div
        data-preserve-radius="true"
        className="relative h-32 w-full overflow-hidden rounded-xl sm:h-36"
      >
        <Image
          src="/assets/images/industry/agency.jpg"
          alt="Smiling Team Member"
          fill
          sizes="240px"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <span
          data-preserve-radius="true"
          className="absolute bottom-2 left-2 rounded-full bg-emerald-500/90 px-2 py-0.5 text-[9px] font-bold text-white uppercase backdrop-blur-xs"
        >
          Growth +24%
        </span>
      </div>

      {/* Two Stat Chips Below */}
      <div className="mt-2.5 flex items-center justify-between gap-1.5 px-1">
        <div
          data-preserve-radius="true"
          className="flex-1 rounded-xl bg-slate-50 p-1.5 text-center dark:bg-slate-100"
        >
          <div className="text-[9px] font-medium text-slate-500">Revenue</div>
          <div className="font-heading text-xs font-black text-slate-900">$2,870</div>
        </div>

        <div
          data-preserve-radius="true"
          className="flex-1 rounded-xl bg-slate-50 p-1.5 text-center dark:bg-slate-100"
        >
          <div className="text-[9px] font-medium text-slate-500">Expenses</div>
          <div className="font-heading text-xs font-black text-slate-900">$1,200</div>
        </div>
      </div>
    </div>
  );
}
