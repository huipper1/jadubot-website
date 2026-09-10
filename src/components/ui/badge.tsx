import type { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide transition-all duration-200 focus:outline-none uppercase",
  {
    variants: {
      variant: {
        default:
          "border border-primary/40 bg-primary/10 text-primary shadow-sm",
        secondary:
          "border border-border bg-card text-muted-foreground",
        outline:
          "border border-border text-foreground",
        glow:
          "border border-primary/50 bg-primary/20 text-primary shadow-[0_0_16px_rgba(1,114,255,0.25)]"
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
