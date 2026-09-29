import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Hind_Siliguri, Inter, Plus_Jakarta_Sans } from "next/font/google";

import { GoogleAnalytics } from "@next/third-parties/google";

import { seoConfig } from "@/config/seo";
import { siteConfig } from "@/config/site";
import { env } from "@/env";

import { Footer, Header } from "@/components/layouts";
import { Toaster } from "@/ui";
import { Providers } from "@/providers";

import "@/tailwind";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"]
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["bengali", "latin"]
});

export const metadata: Metadata = seoConfig;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={siteConfig.locale} suppressHydrationWarning className="dark overflow-x-clip">
      <body
        className={`${plusJakartaSans.variable} ${inter.variable} ${hindSiliguri.variable} flex min-h-screen w-full max-w-full flex-col overflow-x-clip bg-background font-sans text-foreground antialiased selection:bg-brand/20 selection:text-brand`}
      >
        <Providers>
          <Header />
          <main className="flex-1 w-full max-w-full overflow-x-clip">{children}</main>
          <Footer />
          <Toaster richColors />
        </Providers>

        {env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={env.NEXT_PUBLIC_GA_ID} />}
      </body>
    </html>
  );
}
