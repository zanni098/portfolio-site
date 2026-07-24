"use client";

import { Inview } from "@/components/animation/springs/in-view";

const toolkit = [
  "TypeScript", "React", "Next.js", "Python", "Rust",
  "Node.js", "Tailwind CSS", "PostgreSQL", "Redis",
  "Docker", "Git", "MCP", "LangChain", "OpenAI API",
  "Claude API", "Gemini", "PyPI", "Linux", "CI/CD",
];

const education = [
  { school: "University of Utah", degree: "B.Sc. Computer Engineering", period: "2025 — Present" },
  { school: "The Fazlehaq College, Mardan", degree: "F.Sc. Pre-Engineering · GCE O Levels (Cambridge)", period: "2018 — 2022" },
];

export function AboutView() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <Inview from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0 }} mode="once">
            <p className="mb-4 text-sm font-medium text-foreground-muted" style={{ letterSpacing: "-0.01em" }}>
              About
            </p>
            <h1 className="text-4xl font-medium leading-display tracking-display md:text-5xl lg:text-6xl" style={{ fontFeatureSettings: "'liga' 1" }}>
              Engineer, builder,{" "}
              <span className="gradient-text">founder</span>.
            </h1>
          </Inview>
        </div>
      </section>

      <section className="mx-auto max-w-content px-6 pb-20 md:px-10 md:pb-28">
        <div className="grid gap-8 md:grid-cols-2">
          <Inview from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0 }} mode="once">
            <div className="space-y-4 text-base leading-relaxed text-foreground-secondary md:text-lg">
              <p>Asad Jehan Zeb is a full-stack engineer focused on AI-agent tooling, LLM evaluation, and developer infrastructure. Based in Islamabad, Pakistan, he builds at the intersection of agentic AI and production software engineering.</p>
              <p>He is the founder of <strong className="text-foreground">Symbiothus</strong>, an umbrella company for a family of AI, developer, and consumer products — built, shipped, and run end-to-end. From open-source developer tools to fintech payment rails, every product ships with the same engineering DNA: agentic AI, secure infrastructure, and relentless shipping.</p>
              <p>As the author of <strong className="text-foreground">DuckTap</strong>, published on PyPI, he created a CLI factory that turns any API or website into agent-native tools. His open-core runtime <strong className="text-foreground">Anomalithic</strong> provides a model-agnostic agent runtime with MCP, skills, hooks, and multi-agent orchestration.</p>
            </div>
          </Inview>
          <Inview from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0 }} mode="once" delayIn={150}>
            <div className="space-y-4 text-base leading-relaxed text-foreground-secondary md:text-lg">
              <p>Previously, he led <strong className="text-foreground">E-study Card</strong>, a government-backed education platform, from concept to $47,862 in revenue — building a comprehensive digital learning ecosystem for students across Pakistan.</p>
              <p>He contributes actively to major open-source projects including promptfoo (21K+ stars), OpenClaw (375K+ stars), and OpenClaude (28K+ stars), and is building Mjord — an agentic AI orchestration platform that brings AI agents to non-technical users.</p>
              <p>Beyond engineering, he explores generative AI filmmaking through The Boring Studio, and writes about the agentic era on Medium.</p>
            </div>
          </Inview>
        </div>
      </section>

      <section className="shadow-border">
        <div className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-20">
          <Inview from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0 }} mode="once">
            <h2 className="text-2xl font-medium tracking-heading" style={{ fontFeatureSettings: "'liga' 1" }}>Toolkit</h2>
          </Inview>
          <div className="mt-8 flex flex-wrap gap-3">
            {toolkit.map((tech, i) => (
              <Inview key={tech} from={{ opacity: 0, scale: 0.9 }} to={{ opacity: 1, scale: 1 }} mode="once" delayIn={i * 30} config={{ tension: 120, friction: 15 }}>
                <span className="pill">{tech}</span>
              </Inview>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-20">
        <Inview from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0 }} mode="once">
          <h2 className="text-2xl font-medium tracking-heading" style={{ fontFeatureSettings: "'liga' 1" }}>Education</h2>
        </Inview>
        <div className="mt-8 space-y-6">
          {education.map((item, i) => (
            <Inview key={item.school} from={{ opacity: 0, x: -20 }} to={{ opacity: 1, x: 0 }} mode="once" delayIn={i * 100}>
              <div className="card p-6 flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-medium tracking-tight" style={{ fontFeatureSettings: "'liga' 1" }}>{item.school}</h3>
                  <p className="text-sm text-foreground-muted">{item.degree}</p>
                </div>
                <span className="text-sm text-foreground-subtle">{item.period}</span>
              </div>
            </Inview>
          ))}
        </div>
      </section>
    </>
  );
}