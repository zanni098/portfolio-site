/**
 * Site-wide configuration — single source of truth for SEO.
 */
import { publicEnv } from "@/env";

export const siteConfig = {
  name: "Asad Jehan Zeb",
  description:
    "Full-stack AI engineer building agentic tooling, contributing to open source (promptfoo, OpenClaw, OpenClaude), and exploring generative AI filmmaking. Founder of Symbiothus.",
  url: publicEnv.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ogImage: "/open-graph.png",
  twitterHandle: "@zanni098",
  author: "Asad Jehan Zeb",
  themeColor: "#0a0a0a",
  email: "asad@example.com",
  location: "Islamabad, Pakistan",
  available: true,
  social: {
    github: "https://github.com/zanni098",
    linkedin: "https://www.linkedin.com/in/asad-jehan-zeb-66b920276",
    contra: "https://contra.com/Zucchhini",
    youtube: "https://youtube.com/@theboringstudio-w9b",
    medium: "https://medium.com/@zuhaibkhann098",
    twitter: "https://x.com/User1013106",
    instagram: "https://www.instagram.com/zuhaib._.official",
  },
} as const;