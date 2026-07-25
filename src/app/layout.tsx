import type { Metadata, Viewport } from "next";
import {
  Instrument_Sans,
  Instrument_Serif,
  JetBrains_Mono,
} from "next/font/google";

import {
  generateMetadata,
  generateViewport,
} from "@/utils/seo/generate-page-metadata";
import { getSiteStructuredData } from "@/utils/seo/structured-data";

import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/ui/Footer";
import { LazyCookie } from "@/components/common/Cookie";
import { AdaptiveGrid } from "@/components/common/grid";
import { ReducedMotion } from "@/components/common/reduced-motion";
import { ScrollLayout } from "@/layouts/scroll-layout";

import "@/app/globals.css";

/**
 * Self-hosted through next/font — no CDN round-trip and no flash of unstyled
 * text. Do not reintroduce a fonts.googleapis.com @import in globals.css.
 */
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: "normal",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const fontVariables = [
  instrumentSerif.variable,
  instrumentSans.variable,
  jetbrainsMono.variable,
].join(" ");

/**
 * Runs before first paint so the page never flashes the wrong theme.
 * Precedence: stored choice > an explicit OS light preference > dark.
 * Dark is the designed default — the heroes are dark footage.
 */
const THEME_INIT = `(function(){try{
var s=localStorage.getItem("theme");
var t=(s==="light"||s==="dark")?s:(window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");
document.documentElement.dataset.theme=t;
document.documentElement.style.colorScheme=t;
}catch(e){document.documentElement.dataset.theme="dark";}})();`;

export const metadata: Metadata = generateMetadata();
export const viewport: Viewport = generateViewport();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getSiteStructuredData()),
          }}
        />
        <ScrollLayout>
          <AdaptiveGrid />
          <ReducedMotion />
          <Navigation />
          <main id="main-content">{children}</main>
          <Footer />
          <LazyCookie />
        </ScrollLayout>
      </body>
    </html>
  );
}