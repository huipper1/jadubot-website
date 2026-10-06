import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter, Noto_Serif_Bengali, Playfair_Display, Red_Hat_Display, Tiro_Bangla } from "next/font/google";

import { GoogleAnalytics } from "@next/third-parties/google";

import { seoConfig } from "@/config/seo";
import { siteConfig } from "@/config/site";
import { env } from "@/env";

import { Footer, Header } from "@/components/layouts";
import { Toaster } from "@/ui";
import { Providers } from "@/providers";

import "@/tailwind";

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap"
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "600", "700"],
  display: "swap"
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

const tiroBangla = Tiro_Bangla({
  variable: "--font-tiro-bangla",
  weight: "400",
  subsets: ["bengali"],
  display: "swap"
});

const notoSerifBengali = Noto_Serif_Bengali({
  variable: "--font-noto-serif-bengali",
  weight: ["400", "700"],
  subsets: ["bengali"],
  display: "swap"
});

export const metadata: Metadata = seoConfig;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={siteConfig.locale} suppressHydrationWarning className="dark overflow-x-clip">
      <body
        className={`${redHatDisplay.variable} ${inter.variable} ${playfairDisplay.variable} ${tiroBangla.variable} ${notoSerifBengali.variable} flex min-h-screen w-full max-w-full flex-col overflow-x-clip bg-background font-sans text-foreground antialiased selection:bg-brand/20 selection:text-brand`}
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
