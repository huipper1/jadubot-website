"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

/* ═══════════════════════════════════════════════════════════════════
 * TUNING CONSTANTS (Easily adjust the visual rhythm & performance)
 * ═══════════════════════════════════════════════════════════════════ */
export const GRID_CELL_SIZE = 56; // Grid square cell size in px (matches CSS pattern)
export const MAJOR_LINE_INTERVAL = 4; // Emphasize every 4th line (224px)
export const TARGET_ACTIVE_PERCENT = 0.11; // 11% of visible cells active at once (~8-14%)
export const SCAN_INTERVAL_MS = 7500; // Trigger data pulse every ~7.5s (6-9s range)
export const CELL_FADE_IN_MS = 1800; // ~1.2s - 2.5s fade in
export const CELL_HOLD_MS = 800; // ~0.5s - 1.0s hold duration
export const CELL_FADE_OUT_MS = 2200; // ~1.5s - 3.0s fade out
export const TARGET_MAX_FPS = 35; // Cap at ~35 fps for smooth, battery-friendly rendering

interface ActiveCell {
  gx: number;
  gy: number;
  state: "in" | "hold" | "out";
  elapsed: number;
  fadeInDuration: number;
  holdDuration: number;
  fadeOutDuration: number;
  maxAlpha: number;
}

interface ScanPulse {
  orientation: "h" | "v";
  lineIdx: number; // grid line coordinate
  pos: number; // current travel distance in px
  speed: number; // px per second
  maxPos: number;
  active: boolean;
}

export function HeroGridBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      // For reduced motion, render a static soft pattern of ~10 cells once and skip loop
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const width = container.clientWidth;
        const height = container.clientHeight;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);

        const isDark = resolvedTheme === "dark";
        ctx.fillStyle = isDark
          ? "rgba(56, 189, 248, 0.12)"
          : "rgba(21, 93, 252, 0.08)";
        ctx.strokeStyle = isDark
          ? "rgba(56, 189, 248, 0.3)"
          : "rgba(21, 93, 252, 0.2)";
        ctx.lineWidth = 1;

        const cols = Math.floor(width / GRID_CELL_SIZE);
        const rows = Math.floor(height / GRID_CELL_SIZE);
        const staticPicks = [
          [Math.floor(cols / 2), 2],
          [Math.floor(cols / 2) - 2, 3],
          [Math.floor(cols / 2) + 2, 4],
          [Math.floor(cols / 2) - 4, 2],
          [Math.floor(cols / 2) + 3, 3],
          [Math.floor(cols / 2) - 1, 5],
          [Math.floor(cols / 2) + 1, 6],
          [Math.floor(cols / 2) - 3, 4]
        ];

        staticPicks.forEach(([x, y]) => {
          if (x >= 0 && x < cols && y >= 0 && y < rows) {
            ctx.fillRect(
              x * GRID_CELL_SIZE,
              y * GRID_CELL_SIZE,
              GRID_CELL_SIZE,
              GRID_CELL_SIZE
            );
            ctx.strokeRect(
              x * GRID_CELL_SIZE,
              y * GRID_CELL_SIZE,
              GRID_CELL_SIZE,
              GRID_CELL_SIZE
            );
          }
        });
      }
      return;
    }

    let isVisible = true;
    let isTabFocused = !document.hidden;
    let animationFrameId: number;
    let lastTimestamp = performance.now();
    const frameInterval = 1000 / TARGET_MAX_FPS;

    // Mouse coordinates in grid space
    let mouseGX = -100;
    let mouseGY = -100;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      mouseGX = Math.floor(clientX / GRID_CELL_SIZE);
      mouseGY = Math.floor(clientY / GRID_CELL_SIZE);
    };

    const onMouseLeave = () => {
      mouseGX = -100;
      mouseGY = -100;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseleave", onMouseLeave, { passive: true });

    // IntersectionObserver to pause loop when off-screen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    const onVisibilityChange = () => {
      isTabFocused = !document.hidden;
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    // Grid sizing
    let width = container.clientWidth;
    let height = container.clientHeight;
    let cols = Math.max(1, Math.floor(width / GRID_CELL_SIZE));
    let rows = Math.max(1, Math.floor(height / GRID_CELL_SIZE));

    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      if (!container || !canvas || !ctx) return;
      width = container.clientWidth;
      height = container.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      cols = Math.max(1, Math.floor(width / GRID_CELL_SIZE));
      rows = Math.max(1, Math.floor(height / GRID_CELL_SIZE));
    };

    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
    });
    resizeObserver.observe(container);
    resizeCanvas();

    // Active Cells Pool
    const activeCells: ActiveCell[] = [];
    let nextScanPulseTime = performance.now() + SCAN_INTERVAL_MS * 0.7;
    const activePulses: ScanPulse[] = [];

    // Animation Loop
    const loop = (now: number) => {
      animationFrameId = requestAnimationFrame(loop);

      if (!isVisible || !isTabFocused) {
        lastTimestamp = now;
        return;
      }

      const delta = now - lastTimestamp;
      if (delta < frameInterval) return;
      lastTimestamp = now - (delta % frameInterval);

      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      const isDark = resolvedTheme === "dark";

      // Color tokens
      const cellFillBase = isDark ? "56, 189, 248" : "21, 93, 252"; // Sky / Royal Blue
      const cellBorderBase = isDark ? "56, 189, 248" : "21, 93, 252";

      // Calculate desired active cells based on 11% target density
      const totalCells = cols * rows;
      const targetActiveCount = Math.floor(totalCells * TARGET_ACTIVE_PERCENT);

      // Spawn new cells if below target density
      while (activeCells.length < targetActiveCount) {
        // Bias spawning towards headline area (center top: rows 1 to 7, middle cols)
        let gx: number;
        let gy: number;
        if (Math.random() < 0.65) {
          const centerCol = Math.floor(cols / 2);
          const spreadCol = Math.floor(cols * 0.35);
          gx = Math.min(
            cols - 1,
            Math.max(
              0,
              centerCol + Math.floor((Math.random() - 0.5) * spreadCol * 2)
            )
          );
          gy = Math.floor(Math.random() * Math.min(rows, 9));
        } else {
          gx = Math.floor(Math.random() * cols);
          gy = Math.floor(Math.random() * rows);
        }

        // Avoid duplicates
        if (!activeCells.some((c) => c.gx === gx && c.gy === gy)) {
          activeCells.push({
            gx,
            gy,
            state: "in",
            elapsed: 0,
            fadeInDuration: CELL_FADE_IN_MS * (0.8 + Math.random() * 0.5),
            holdDuration: CELL_HOLD_MS * (0.7 + Math.random() * 0.6),
            fadeOutDuration: CELL_FADE_OUT_MS * (0.8 + Math.random() * 0.5),
            maxAlpha: (isDark ? 0.22 : 0.14) * (0.7 + Math.random() * 0.6)
          });
        }
      }

      // 1. Update and render active cells
      for (let i = activeCells.length - 1; i >= 0; i--) {
        const cell = activeCells[i];
        cell.elapsed += delta;

        let alpha = 0;
        if (cell.state === "in") {
          const progress = Math.min(1, cell.elapsed / cell.fadeInDuration);
          alpha = cell.maxAlpha * progress;
          if (progress >= 1) {
            cell.state = "hold";
            cell.elapsed = 0;
          }
        } else if (cell.state === "hold") {
          alpha = cell.maxAlpha;
          if (cell.elapsed >= cell.holdDuration) {
            cell.state = "out";
            cell.elapsed = 0;
          }
        } else if (cell.state === "out") {
          const progress = Math.min(1, cell.elapsed / cell.fadeOutDuration);
          alpha = cell.maxAlpha * (1 - progress);
          if (progress >= 1) {
            activeCells.splice(i, 1);
            continue;
          }
        }

        // Mouse hover proximity boost
        if (mouseGX >= 0 && mouseGY >= 0) {
          const dist = Math.hypot(cell.gx - mouseGX, cell.gy - mouseGY);
          if (dist <= 3.5) {
            alpha += (1 - dist / 3.5) * (isDark ? 0.25 : 0.18);
          }
        }

        // Render cell
        const px = cell.gx * GRID_CELL_SIZE;
        const py = cell.gy * GRID_CELL_SIZE;
        ctx.fillStyle = `rgba(${cellFillBase}, ${alpha})`;
        ctx.fillRect(px, py, GRID_CELL_SIZE, GRID_CELL_SIZE);

        ctx.strokeStyle = `rgba(${cellBorderBase}, ${alpha * 1.5})`;
        ctx.lineWidth = 1;
        ctx.strokeRect(px + 0.5, py + 0.5, GRID_CELL_SIZE - 1, GRID_CELL_SIZE - 1);
      }

      // 2. Scan pulse logic (every ~7.5s a soft data pulse along a grid line)
      if (now >= nextScanPulseTime) {
        nextScanPulseTime =
          now + SCAN_INTERVAL_MS * (0.8 + Math.random() * 0.4);
        const isHorizontal = Math.random() > 0.5;
        if (isHorizontal) {
          activePulses.push({
            orientation: "h",
            lineIdx: Math.floor(Math.random() * Math.min(rows, 9)),
            pos: 0,
            speed: width * 0.65, // completes in ~1.5s
            maxPos: width,
            active: true
          });
        } else {
          activePulses.push({
            orientation: "v",
            lineIdx: Math.floor(Math.random() * cols),
            pos: 0,
            speed: height * 0.75,
            maxPos: height,
            active: true
          });
        }
      }

      // Update and render pulses
      for (let p = activePulses.length - 1; p >= 0; p--) {
        const pulse = activePulses[p];
        pulse.pos += (pulse.speed * delta) / 1000;

        if (pulse.pos > pulse.maxPos + 180) {
          activePulses.splice(p, 1);
          continue;
        }

        // Draw glowing light streak along the grid line
        const pulseGradLen = 140;
        ctx.save();
        if (pulse.orientation === "h") {
          const lineY = pulse.lineIdx * GRID_CELL_SIZE;
          const grad = ctx.createLinearGradient(
            pulse.pos - pulseGradLen,
            lineY,
            pulse.pos,
            lineY
          );
          grad.addColorStop(0, "rgba(56, 189, 248, 0)");
          grad.addColorStop(0.7, `rgba(${cellFillBase}, ${isDark ? 0.45 : 0.3})`);
          grad.addColorStop(1, "#38bdf8");
          ctx.strokeStyle = grad;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(Math.max(0, pulse.pos - pulseGradLen), lineY);
          ctx.lineTo(pulse.pos, lineY);
          ctx.stroke();
        } else {
          const lineX = pulse.lineIdx * GRID_CELL_SIZE;
          const grad = ctx.createLinearGradient(
            lineX,
            pulse.pos - pulseGradLen,
            lineX,
            pulse.pos
          );
          grad.addColorStop(0, "rgba(56, 189, 248, 0)");
          grad.addColorStop(0.7, `rgba(${cellFillBase}, ${isDark ? 0.45 : 0.3})`);
          grad.addColorStop(1, "#38bdf8");
          ctx.strokeStyle = grad;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(lineX, Math.max(0, pulse.pos - pulseGradLen));
          ctx.lineTo(lineX, pulse.pos);
          ctx.stroke();
        }
        ctx.restore();
      }
    };

    animationFrameId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      observer.disconnect();
      resizeObserver.disconnect();
    };
  }, [resolvedTheme]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden select-none"
    >
      {/* 1. Base gradient background tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/60 via-background to-background dark:from-slate-950/80 dark:via-background dark:to-background" />

      {/* 2. Soft ambient radial glow orbs */}
      {/* Primary Brand Glow behind central headline */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 h-[420px] w-[680px] max-w-[90vw] rounded-full opacity-35 blur-[100px] sm:blur-[140px] dark:opacity-25"
        style={{
          background:
            "radial-gradient(circle, var(--color-primary, #155dfc) 0%, transparent 70%)"
        }}
      />
      {/* Secondary accent glow offset to the top-right */}
      <div
        className="absolute top-24 right-[-10%] h-[350px] w-[450px] rounded-full opacity-20 blur-[120px] dark:opacity-15"
        style={{
          background: "radial-gradient(circle, #38bdf8 0%, transparent 70%)"
        }}
      />

      {/* 3. Blueprint / Graph paper SVG Grid with 4th-line emphasis & masked fade */}
      <div
        className="absolute inset-0"
        style={{
          maskImage:
            "radial-gradient(ellipse 75% 65% at 50% 35%, black 20%, rgba(0,0,0,0.5) 60%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 65% at 50% 35%, black 20%, rgba(0,0,0,0.5) 60%, transparent 100%)"
        }}
      >
        {/* Animated dynamic pulse canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full pointer-events-none"
        />

        {/* Blueprint line grid SVG overlay */}
        <svg
          className="absolute inset-0 h-full w-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <defs>
            {/* Small 56px base pattern (fine neutral-blue lines) */}
            <pattern
              id="hero-grid-sub"
              width={GRID_CELL_SIZE}
              height={GRID_CELL_SIZE}
              patternUnits="userSpaceOnUse"
            >
              <path
                d={`M ${GRID_CELL_SIZE} 0 L 0 0 0 ${GRID_CELL_SIZE}`}
                fill="none"
                stroke="currentColor"
                className="text-blue-900/10 dark:text-sky-300/10"
                strokeWidth="1"
              />
            </pattern>

            {/* Large 224px pattern (every 4th line in bold brand blue) */}
            <pattern
              id="hero-grid-main"
              width={GRID_CELL_SIZE * MAJOR_LINE_INTERVAL}
              height={GRID_CELL_SIZE * MAJOR_LINE_INTERVAL}
              patternUnits="userSpaceOnUse"
            >
              {/* Fill with subgrid */}
              <rect
                width={GRID_CELL_SIZE * MAJOR_LINE_INTERVAL}
                height={GRID_CELL_SIZE * MAJOR_LINE_INTERVAL}
                fill="url(#hero-grid-sub)"
              />

              {/* Major 4th lines */}
              <path
                d={`M ${GRID_CELL_SIZE * MAJOR_LINE_INTERVAL} 0 L 0 0 0 ${GRID_CELL_SIZE * MAJOR_LINE_INTERVAL}`}
                fill="none"
                stroke="currentColor"
                className="text-primary/30 dark:text-sky-400/25"
                strokeWidth="1.5"
              />

              {/* Major intersection nodes */}
              <circle
                cx="0"
                cy="0"
                r="2.5"
                fill="currentColor"
                className="text-primary/50 dark:text-sky-300/50"
              />
              <circle
                cx={GRID_CELL_SIZE * MAJOR_LINE_INTERVAL}
                cy="0"
                r="2.5"
                fill="currentColor"
                className="text-primary/50 dark:text-sky-300/50"
              />
              <circle
                cx="0"
                cy={GRID_CELL_SIZE * MAJOR_LINE_INTERVAL}
                r="2.5"
                fill="currentColor"
                className="text-primary/50 dark:text-sky-300/50"
              />
              <circle
                cx={GRID_CELL_SIZE * MAJOR_LINE_INTERVAL}
                cy={GRID_CELL_SIZE * MAJOR_LINE_INTERVAL}
                r="2.5"
                fill="currentColor"
                className="text-primary/50 dark:text-sky-300/50"
              />
            </pattern>
          </defs>

          {/* Grid Canvas fill */}
          <rect width="100%" height="100%" fill="url(#hero-grid-main)" />
        </svg>
      </div>

      {/* 4. Bottom fade to blend cleanly into next section without hard edges */}
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-background via-background/70 to-transparent" />
    </div>
  );
}
