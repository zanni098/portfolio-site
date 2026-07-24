"use client";

import { Inview } from "@/components/animation/springs/in-view";
import { VideoHero } from "@/components/ui/VideoHero";

const majorContributions = [
  {
    name: "OpenClaw",
    description: "One of the most-starred open-source AI agent frameworks on GitHub (375K+ stars). Contributed to the core agent runtime, tool integration system, and community infrastructure.",
    stars: "375K+",
    url: "https://github.com/openclaw",
    role: "Active Contributor",
  },
  {
    name: "promptfoo",
    description: "Leading open-source LLM evaluation and prompt testing framework (21K+ stars). Contributed to evaluation pipelines, provider integrations, and developer tooling.",
    stars: "21K+",
    url: "https://github.com/promptfoo",
    role: "Active Contributor",
  },
  {
    name: "OpenClaude",
    description: "Open-source Claude AI toolkit and runtime (28K+ stars). Contributed to agent orchestration, memory systems, and API integration layers.",
    stars: "28K+",
    url: "https://github.com/openclaude",
    role: "Active Contributor",
  },
];

const ownPackages = [
  {
    name: "DuckTap",
    description: "CLI factory for AI agents — turns any API or website into agent-native CLIs, MCP servers, and skills. Published on PyPI.",
    url: "https://github.com/zanni098/DuckTap",
    type: "Published Package",
  },
  {
    name: "BirdEye",
    description: "Local-first mission control, collective memory, and MCP gateway for all your AI agent harnesses. One hub for every agent. MIT licensed.",
    url: "https://github.com/zanni098/BirdEye",
    type: "Open Source",
  },
  {
    name: "Anomalithic",
    description: "Open-core AI agent runtime — model-agnostic, with MCP, skills, hooks, multi-agent orchestration, and cross-session memory.",
    url: "https://github.com/zanni098/Anomalithic",
    type: "Open Core",
  },
  {
    name: "TriageKit",
    description: "GitHub issue intake generator for open-source maintainers. Streamlines the triage process with structured templates and automation.",
    url: "https://github.com/zanni098/triagekit",
    type: "Open Source",
  },
];

export function OpenSourceView() {
  return (
    <>
      <VideoHero videoSrc="/assets/hero/hills.mp4" posterSrc="/assets/hero/hills.jpg">
          <Inview from={{ opacity: 0, y: 30 }} to={{ opacity: 1, y: 0 }} mode="once" config={{ tension: 120, friction: 20 }}>
            <p className="mb-4 text-sm font-medium text-foreground-muted" style={{ letterSpacing: "-0.01em" }}>
              Open Source
            </p>
            <h1 className="text-4xl font-medium leading-display tracking-display md:text-5xl lg:text-6xl" style={{ fontFeatureSettings: "'liga' 1" }}>
              Contributing to projects with{" "}
              <span className="gradient-text">425K+ stars</span>.
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-foreground-muted">
              Active contributor to the most influential open-source AI projects
              on GitHub, and author of developer tools published on PyPI.
            </p>
          </Inview>
      </VideoHero>

      <section className="mx-auto max-w-content px-6 pb-16 md:px-10 md:pb-20">
        <Inview from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0 }} mode="once">
          <h2 className="text-2xl font-medium tracking-heading" style={{ fontFeatureSettings: "'liga' 1" }}>Major Contributions</h2>
        </Inview>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {majorContributions.map((item, i) => (
            <Inview key={item.name} from={{ opacity: 0, y: 30 }} to={{ opacity: 1, y: 0 }} mode="once" delayIn={i * 100} config={{ tension: 100, friction: 20 }}>
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="card p-6 group flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <span className="pill">{item.role}</span>
                  <span className="text-sm font-medium tracking-tight text-brand">{item.stars} ★</span>
                </div>
                <h3 className="mt-4 text-lg font-medium tracking-tight" style={{ fontFeatureSettings: "'liga' 1" }}>{item.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground-muted">{item.description}</p>
                <span className="mt-4 text-sm font-medium text-brand transition-colors group-hover:text-brand-hover" style={{ fontFeatureSettings: "'liga' 1" }}>
                  View on GitHub →
                </span>
              </a>
            </Inview>
          ))}
        </div>
      </section>

      <section className="shadow-border">
        <div className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-20">
          <Inview from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0 }} mode="once">
            <h2 className="text-2xl font-medium tracking-heading" style={{ fontFeatureSettings: "'liga' 1" }}>Own Projects</h2>
          </Inview>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {ownPackages.map((item, i) => (
              <Inview key={item.name} from={{ opacity: 0, y: 30 }} to={{ opacity: 1, y: 0 }} mode="once" delayIn={i * 80} config={{ tension: 100, friction: 20 }}>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="card p-6 group flex h-full flex-col">
                  <span className="text-xs font-medium uppercase tracking-widest text-brand">{item.type}</span>
                  <h3 className="mt-3 text-lg font-medium tracking-tight" style={{ fontFeatureSettings: "'liga' 1" }}>{item.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground-muted">{item.description}</p>
                  <span className="mt-4 text-sm font-medium text-brand transition-colors group-hover:text-brand-hover" style={{ fontFeatureSettings: "'liga' 1" }}>
                    View on GitHub →
                  </span>
                </a>
              </Inview>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}