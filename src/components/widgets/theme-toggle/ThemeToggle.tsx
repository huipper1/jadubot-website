"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <div
        className="h-9 w-9 rounded-full border border-border bg-white/5"
        aria-hidden="true"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white/5 text-muted-foreground transition-all duration-200 hover:border-brand/40 hover:bg-brand/10 hover:text-brand focus:outline-none"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDark ? (
        <Sun className="h-4 w-4 transition-transform hover:rotate-45" />
      ) : (
        <Moon className="h-4 w-4 transition-transform hover:-rotate-12" />
      )}
    </button>
  );
}
