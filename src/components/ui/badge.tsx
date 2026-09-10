import type { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide transition-all duration-200 focus:outline-none uppercase",
  {
    variants: {
      variant: {
        default:
          "border border-[#0172ff]/40 bg-[#0172ff]/15 text-[#93c5fd] shadow-[0_0_12px_rgba(1,114,255,0.2)]",
        secondary:
          "border border-[#373a41] bg-[#181d27] text-[#cecfd2]",
        outline:
          "border border-[#373a41] text-[#f7f7f7]",
        glow:
          "border border-[#0172ff]/50 bg-[#0172ff]/25 text-white shadow-[0_0_16px_rgba(1,114,255,0.35)]"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

export interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
