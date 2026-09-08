"use client";

import React, { useRef } from "react";
import { cn } from "@/utils";
import { usePopAnimation, PopAnimationOptions } from "@/lib/animations";

export interface PopInProps extends PopAnimationOptions {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

/**
 * Reusable wrapper component that applies the signature pop entrance animation:
 * scale: 0.88 -> 1, opacity: 0 -> 1 with ease: "back.out(1.4)" on scrollTrigger.
 * If stagger is passed or animateChildren is true, direct children will be staggered!
 */
export function PopIn({
  children,
  className,
  as: Component = "div",
  animateChildren,
  start = "top 85%",
  duration = 0.8,
  stagger,
  scale = 0.88,
  ease = "back.out(1.4)",
  delay = 0,
  once = true,
  trigger,
  clearProps = "transform,opacity",
  scope,
  ...props
}: PopInProps & React.HTMLAttributes<HTMLElement>) {
  const containerRef = useRef<HTMLElement | null>(null);

  const shouldAnimateChildren =
    animateChildren || (typeof stagger === "number" && stagger > 0);

  usePopAnimation(containerRef, {
    animateChildren: shouldAnimateChildren,
    stagger,
    start,
    duration,
    scale,
    ease,
    delay,
    once,
    trigger,
    clearProps,
    scope
  });

  return (
    <Component
      ref={containerRef}
      className={cn(
        !shouldAnimateChildren && "will-change-transform origin-center",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
