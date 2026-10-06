"use client";

import { Plus } from "@/components/icons";

export function BluePlusCard() {
  return (
    <div
      data-preserve-radius="true"
      className="flex h-full w-full flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-[#0084ff] via-[#0172ff] to-[#0052cc] p-4 text-center text-white"
    >
      {/* Centered Plus Icon in Circle */}
      <div
        data-preserve-radius="true"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-transform duration-300 hover:scale-110"
      >
        <Plus className="h-6 w-6 text-white stroke-[2.5]" />
      </div>

      <div className="mt-3.5">
        <h4 className="font-heading text-sm font-extrabold tracking-wide text-white">
          Datatraining
        </h4>
        <p className="mt-0.5 text-[10px] text-white/80">
          Continuous sync
        </p>
      </div>
    </div>
  );
}
