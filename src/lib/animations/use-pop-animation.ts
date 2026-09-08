"use client";

import { RefObject, useRef } from "react";
import { gsap, useGSAP } from "./gsap-init";

export interface PopAnimationOptions {
  trigger?: RefObject<HTMLElement | null> | HTMLElement | string | null;
  start?: string;
  duration?: number;
  delay?: number;
  stagger?: number;
  scale?: number;
  ease?: string;
  once?: boolean;
  clearProps?: string;
  animateChildren?: boolean;
  scope?: RefObject<HTMLElement | null>;
}

export type PopTarget =
  | RefObject<HTMLElement | HTMLElement[] | (HTMLElement | null)[] | null>
  | RefObject<HTMLElement | null>[]
  | string;

/**
 * Reusable hook for the signature pop entrance animation:
 * scale: 0.88 -> 1, opacity: 0 -> 1 with ease: "back.out(1.4)" and scrollTrigger.
 */
export function usePopAnimation<T extends HTMLElement = HTMLDivElement>(
  targetOrOptions?: PopTarget | PopAnimationOptions,
  maybeOptions?: PopAnimationOptions
): RefObject<T | null> {
  const localRef = useRef<T | null>(null);

  const isFirstArgOptions =
    !targetOrOptions ||
    (typeof targetOrOptions === "object" &&
      !("current" in targetOrOptions) &&
      !Array.isArray(targetOrOptions));

  const options: PopAnimationOptions = isFirstArgOptions
    ? (targetOrOptions as PopAnimationOptions) || {}
    : maybeOptions || {};

  const target = isFirstArgOptions ? localRef : targetOrOptions;

  const {
    trigger,
    start = "top 85%",
    duration = 0.8,
    delay = 0,
    stagger,
    scale = 0.88,
    ease = "back.out(1.4)",
    once = true,
    clearProps = "transform,opacity",
    animateChildren = false,
    scope
  } = options;

  useGSAP(
    () => {
      if (typeof window === "undefined") return;
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReducedMotion) return;

      let targets: HTMLElement[] = [];

      if (typeof target === "string") {
        const container = scope?.current || document;
        targets = Array.from(container.querySelectorAll(target)) as HTMLElement[];
      } else if (Array.isArray(target)) {
        target.forEach((t) => {
          if (t && "current" in t && t.current) {
            if (Array.isArray(t.current)) {
              targets.push(...(t.current.filter(Boolean) as HTMLElement[]));
            } else {
              targets.push(t.current as HTMLElement);
            }
          }
        });
      } else if (target && "current" in target) {
        const curr = target.current;
        if (curr) {
          if (Array.isArray(curr)) {
            targets = curr.filter(Boolean) as HTMLElement[];
          } else if (animateChildren && (curr as HTMLElement).children) {
            targets = Array.from((curr as HTMLElement).children) as HTMLElement[];
          } else {
            targets = [curr as HTMLElement];
          }
        }
      }

      if (targets.length === 0) return;

      // Add standard utility classes for smooth GPU transform & center origin
      targets.forEach((el) => {
        if (el && el.classList) {
          el.classList.add("will-change-transform", "origin-center");
        }
      });

      // Resolve trigger element
      let triggerEl: HTMLElement | string | null = null;
      if (typeof trigger === "string") {
        triggerEl = trigger;
      } else if (trigger && "current" in trigger && trigger.current) {
        triggerEl = trigger.current;
      } else if (trigger instanceof HTMLElement) {
        triggerEl = trigger;
      }
      if (!triggerEl) {
        triggerEl = targets[0];
      }

      gsap.fromTo(
        targets,
        {
          scale,
          opacity: 0
        },
        {
          scale: 1,
          opacity: 1,
          duration,
          delay,
          stagger: stagger && stagger > 0 ? stagger : undefined,
          ease,
          clearProps,
          scrollTrigger: {
            trigger: triggerEl,
            start,
            once
          }
        }
      );
    },
    { scope: scope || undefined }
  );

  return localRef;
}

/**
 * Imperative helper function to animate targets with the pop effect.
 */
export function animatePop(
  targets: gsap.TweenTarget,
  options: PopAnimationOptions = {}
) {
  if (typeof window === "undefined") return;
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (prefersReducedMotion) return;

  const {
    trigger,
    start = "top 85%",
    duration = 0.8,
    delay = 0,
    stagger,
    scale = 0.88,
    ease = "back.out(1.4)",
    once = true,
    clearProps = "transform,opacity"
  } = options;

  let triggerEl: HTMLElement | string | null = null;
  if (typeof trigger === "string") {
    triggerEl = trigger;
  } else if (trigger && "current" in trigger && trigger.current) {
    triggerEl = trigger.current;
  } else if (trigger instanceof HTMLElement) {
    triggerEl = trigger;
  }

  return gsap.fromTo(
    targets,
    {
      scale,
      opacity: 0
    },
    {
      scale: 1,
      opacity: 1,
      duration,
      delay,
      stagger: stagger && stagger > 0 ? stagger : undefined,
      ease,
      clearProps,
      scrollTrigger: triggerEl
        ? {
            trigger: triggerEl,
            start,
            once
          }
        : undefined
    }
  );
}
