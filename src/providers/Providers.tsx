"use client";

import type { ReactNode } from "react";

import { QueryProvider, ThemeProvider } from "@/providers";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <QueryProvider>{children}</QueryProvider>
    </ThemeProvider>
  );
}
