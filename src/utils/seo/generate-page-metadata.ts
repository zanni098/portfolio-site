import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/lib/site";

interface PageMetadataProps {
  title?: string;
  description?: string;
  url?: string;
  ogImage?: string;
}

export function generateMetadata(
  props?: PageMetadataProps,
): Metadata {
  const title = props?.title
    ? `${props.title} — ${siteConfig.name}`
    : `${siteConfig.name} — Full-Stack AI Engineer`;

  const description = props?.description ?? siteConfig.description;

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: props?.url ?? siteConfig.url,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: props?.ogImage ?? siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
      title,
      description,
      images: [props?.ogImage ?? siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-icon-180x180.png",
    },
    manifest: "/manifest.json",
  };
}

export function generateViewport(): Viewport {
  return {
    themeColor: siteConfig.themeColor,
    width: "device-width",
    initialScale: 1,
  };
}