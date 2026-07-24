"use client";

import { Inview } from "@/components/animation/springs/in-view";

const projects = [
  {
    title: "DuckTap",
    tagline: "Tape any API to your agent in one command.",
    description: "CLI factory for AI agents — prints Python CLIs, MCP servers, and skills from any OpenAPI spec, HAR file, or website. Published on PyPI.",
    tech: ["Python", "MCP", "CLI", "OpenAPI", "PyPI"],
    github: "https://github.com/zanni098/DuckTap",
    category: "Dev Tooling",
  },
  {
    title: "Anomalithic",
    tagline: "One model-agnostic agent runtime to rule them all.",
    description: "Open-core AI agent runtime with MCP, skills, hooks, multi-agent orchestration, cross-session memory, and a thinking-time ad network.",
    tech: ["TypeScript", "AI Agents", "MCP", "Runtime", "Multi-Agent"],
    github: "https://github.com/zanni098/Anomalithic",
    category: "AI / Agents",
  },
  {
    title: "BirdEye",
    tagline: "One hub, every bird. Local-first mission control.",
    description: "Local-first mission control, collective memory, and MCP gateway for all your AI agent harnesses. Free, MIT, no cloud, no telemetry.",
    tech: ["TypeScript", "Dashboard", "MCP", "CLI", "Local-First"],
    github: "https://github.com/zanni098/BirdEye",
    category: "Dev Tooling",
  },
  {
    title: "TriageKit",
    tagline: "Issue intake for open-source maintainers.",
    description: "GitHub issue intake generator that helps open-source maintainers triage, organize, and respond to incoming issues more efficiently.",
    tech: ["TypeScript", "GitHub API", "Developer Tools"],
    github: "https://github.com/zanni098/triagekit",
    category: "Dev Tooling",
  },
  {
    title: "Mjord",
    tagline: "Agentic AI for non-technical users.",
    description: "Agentic AI orchestration platform that lets non-technical people run AI agents with no terminal required.",
    tech: ["AI Agents", "Orchestration", "No-Code"],
    category: "AI / Agents",
  },
  {
    title: "Markuce",
    tagline: "Accept payments from anywhere Stripe won't.",
    description: "Fintech payment platform enabling businesses to accept payments in regions and scenarios where traditional processors don't operate.",
    tech: ["Fintech", "Payments", "API"],
    category: "Fintech",
  },
  {
    title: "NutriSnap",
    tagline: "Snap a meal, know your macros.",
    description: "AI-powered nutrition tracking app. Snap a photo of any meal and instantly get calorie counts, macros, and a full nutritional breakdown.",
    tech: ["AI Vision", "Gemini", "Nutrition", "Mobile"],
    github: "https://github.com/NutriSnap/NutriSnap",
    category: "Consumer",
  },
  {
    title: "Moviola",
    tagline: "Open, self-hostable creative studio.",
    description: "Formerly Vidius — a unified interface for generating images and video across many AI providers. Self-hostable open-source creative studio.",
    tech: ["AI Media", "Image Gen", "Video Gen", "Self-Hosted"],
    category: "AI Media",
  },
  {
    title: "Hemdal",
    tagline: "Zero-knowledge secrets, sealed in Rust.",
    description: "Desktop security application providing zero-knowledge secrets management, built in Rust for maximum performance and safety.",
    tech: ["Rust", "Security", "Desktop", "Zero-Knowledge"],
    category: "Security",
  },
  {
    title: "Onramp",
    tagline: "Non-custodial stablecoin payments.",
    description: "Web3 payment infrastructure for non-custodial stablecoin payments that just settle.",
    tech: ["Web3", "Stablecoins", "Payments", "Blockchain"],
    category: "Fintech",
  },
];

export function ProjectsView() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <Inview from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0 }} mode="once">
            <p className="mb-4 text-sm font-medium text-foreground-muted" style={{ letterSpacing: "-0.01em" }}>
              Projects
            </p>
            <h1 className="text-4xl font-medium leading-display tracking-display md:text-5xl lg:text-6xl" style={{ fontFeatureSettings: "'liga' 1" }}>
              Building across the{" "}
              <span className="gradient-text">stack</span>.
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-foreground-muted">
              From agentic AI runtimes to fintech payment rails — every project
              ships with the same engineering DNA.
            </p>
          </Inview>
        </div>
      </section>

      <section className="mx-auto max-w-content px-6 pb-20 md:px-10 md:pb-28">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Inview
              key={project.title}
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
              mode="once"
              delayIn={i * 60}
              config={{ tension: 100, friction: 20 }}
            >
              <div className="card p-6 group">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-medium uppercase tracking-widest text-brand">
                      {project.category}
                    </span>
                    <h2 className="mt-1 text-xl font-medium tracking-tight" style={{ fontFeatureSettings: "'liga' 1" }}>{project.title}</h2>
                  </div>
                </div>
                <p className="mt-2 text-sm font-medium text-foreground-secondary">
                  {project.tagline}
                </p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground-muted">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="pill">{t}</span>
                  ))}
                </div>
                {project.github && (
                  <div className="mt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-brand transition-colors duration-[var(--duration-fast)] ease-entrance hover:text-brand-hover"
                      style={{ fontFeatureSettings: "'liga' 1" }}
                    >
                      View on GitHub →
                    </a>
                  </div>
                )}
              </div>
            </Inview>
          ))}
        </div>
      </section>
    </>
  );
}