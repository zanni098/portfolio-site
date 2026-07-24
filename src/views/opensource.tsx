"use client";

import { Inview } from "@/components/animation/springs/in-view";

const majorContributions = [
  {
    name: "OpenClaw",
    description:
      "One of the most-starred open-source AI agent frameworks on GitHub (375K+ stars). Contributed to the core agent runtime, tool integration system, and community infrastructure.",
    stars: "375K+",
    url: "https://github.com/openclaw",
    role: "Active Contributor",
  },
  {
    name: "promptfoo",
    description:
      "Leading open-source LLM evaluation and prompt testing framework (21K+ stars). Contributed to evaluation pipelines, provider integrations, and developer tooling.",
    stars: "21K+",
    url: "https://github.com/promptfoo",
    role: "Active Contributor",
  },
  {
    name: "OpenClaude",
    description:
      "Open-source Claude AI toolkit and runtime (28K+ stars). Contributed to agent orchestration, memory systems, and API integration layers.",
    stars: "28K+",
    url: "https://github.com/openclaude",
    role: "Active Contributor",
  },
];

const ownPackages = [
  {
    name: "DuckTap",
    description:
      "CLI factory for AI agents — turns any API or website into agent-native CLIs, MCP servers, and skills. Published on PyPI. No bespoke code required.",
    stars: "1",
    url: "https://github.com/zanni098/DuckTap",
    type: "Published Package",
  },
  {
    name: "BirdEye",
    description:
      "Local-first mission control, collective memory, and MCP gateway for all your AI agent harnesses. One hub for every agent. MIT licensed.",
    stars: "1",
    url: "https://github.com/zanni098/BirdEye",
    type: "Open Source",
  },
  {
    name: "Anomalithic",
    description:
      "Open-core AI agent runtime — model-agnostic, with MCP, skills, hooks, multi-agent orchestration, and cross-session memory.",
    stars: "1",
    url: "https://github.com/zanni098/Anomalithic",
    type: "Open Core",
  },
  {
    name: "TriageKit",
    description:
      "GitHub issue intake generator for open-source maintainers. Streamlines the triage process with structured templates and automation.",
    stars: "1",
    url: "https://github.com/zanni098/triagekit",
    type: "Open Source",
  },
];

export function OpenSourceView() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <Inview from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0 }} mode="once">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand">
              Open Source
            </p>
            <h1 className="mt-4 text-4xl font-medium leading-display tracking-tight md:text-5xl lg:text-6xl">
              Contributing to projects with{" "}
              <span className="gradient-text">425K+ stars</span>.
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-foreground-muted">
              Active contributor to the most influential open-source AI projects
              on GitHub, and author of developer tools published on PyPI.
            </p>
          </Inview>
        </div>
      </section>

      {/* Major Contributions */}
      <section className="mx-auto max-w-content px-6 pb-16 md:px-10 md:pb-20">
        <Inview from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0 }} mode="once">
          <h2 className="text-2xl font-medium tracking-tight">Major Contributions</h2>
        </Inview>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {majorContributions.map((item, i) => (
            <Inview
              key={item.name}
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
              mode="once"
              delayIn={i * 100}
              config={{ tension: 100, friction: 20 }}
            >
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-border bg-surface-card p-6 transition-all duration-[var(--duration-normal)] ease-entrance hover:border-border-hover hover:bg-surface-card-hover"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-brand-light px-3 py-1 text-xs font-medium text-brand-dark">
                    {item.role}
                  </span>
                  <span className="text-sm font-medium text-accent">{item.stars} ★</span>
                </div>
                <h3 className="mt-4 text-lg font-medium">{item.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground-muted">
                  {item.description}
                </p>
                <span className="mt-4 text-xs font-medium uppercase tracking-widest text-brand transition-colors group-hover:text-brand-hover">
                  View on GitHub →
                </span>
              </a>
            </Inview>
          ))}
        </div>
      </section>

      {/* Own Packages */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-20">
          <Inview from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0 }} mode="once">
            <h2 className="text-2xl font-medium tracking-tight">Own Projects</h2>
          </Inview>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {ownPackages.map((item, i) => (
              <Inview
                key={item.name}
                from={{ opacity: 0, y: 30 }}
                to={{ opacity: 1, y: 0 }}
                mode="once"
                delayIn={i * 80}
                config={{ tension: 100, friction: 20 }}
              >
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-2xl border border-border bg-surface-card p-6 transition-all duration-[var(--duration-normal)] ease-entrance hover:border-border-hover hover:bg-surface-card-hover"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium uppercase tracking-widest text-brand">
                      {item.type}
                    </span>
                    <span className="text-xs text-foreground-muted">{item.stars} ★</span>
                  </div>
                  <h3 className="mt-3 text-lg font-medium">{item.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground-muted">
                    {item.description}
                  </p>
                  <span className="mt-4 text-xs font-medium uppercase tracking-widest text-brand transition-colors group-hover:text-brand-hover">
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