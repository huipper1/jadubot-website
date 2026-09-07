"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useCounter(target: number, duration: number = 1.6) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const obj = { val: 0 };

    const tween = gsap.to(obj, {
      val: target,
      duration: prefersReducedMotion ? 0.01 : duration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
        once: true
      },
      onUpdate: () => {
        setCount(Math.floor(obj.val));
      }
    });

    return () => {
      tween.kill();
    };
  }, [target, duration]);

  return { count, ref };
}
