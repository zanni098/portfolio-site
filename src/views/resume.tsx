"use client";

import { Inview } from "@/components/animation/springs/in-view";

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "HTML/CSS",
      "Framer Motion",
      "React Spring",
    ],
  },
  {
    name: "Backend",
    skills: [
      "Node.js",
      "Python",
      "Rust",
      "PostgreSQL",
      "Redis",
      "REST APIs",
      "GraphQL",
    ],
  },
  {
    name: "AI / ML",
    skills: [
      "LLM Integration",
      "AI Agents",
      "MCP Protocol",
      "Prompt Engineering",
      "LangChain",
      "OpenAI / Claude / Gemini APIs",
      "LLM Evaluation",
    ],
  },
  {
    name: "Tools & Infrastructure",
    skills: [
      "Git",
      "Docker",
      "Linux",
      "CI/CD",
      "PyPI Publishing",
      "Cloudflare",
      "Vercel",
    ],
  },
];

const languages = [
  { name: "English", level: "C1 (Duolingo 130)" },
  { name: "Urdu", level: "Fluent" },
  { name: "Pashto", level: "Native" },
];

export function ResumeView() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <Inview from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0 }} mode="once">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand">
              Resume
            </p>
            <h1 className="mt-4 text-4xl font-medium leading-display tracking-tight md:text-5xl lg:text-6xl">
              Skills &{" "}
              <span className="gradient-text">expertise</span>.
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-foreground-muted">
              Full-stack AI engineer with deep expertise in agentic AI tooling,
              developer infrastructure, and production software engineering.
            </p>
          </Inview>
        </div>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-content px-6 pb-16 md:px-10 md:pb-20">
        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((cat, i) => (
            <Inview
              key={cat.name}
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
              mode="once"
              delayIn={i * 100}
              config={{ tension: 100, friction: 20 }}
            >
              <div className="rounded-2xl border border-border bg-surface-card p-6">
                <h3 className="text-sm font-medium uppercase tracking-widest text-brand">
                  {cat.name}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border px-3 py-1 text-sm transition-colors duration-[var(--duration-fast)] ease-entrance hover:border-foreground-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Inview>
          ))}
        </div>
      </section>

      {/* Languages */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-20">
          <Inview from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0 }} mode="once">
            <h2 className="text-2xl font-medium tracking-tight">Languages</h2>
          </Inview>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {languages.map((lang, i) => (
              <Inview
                key={lang.name}
                from={{ opacity: 0, y: 20 }}
                to={{ opacity: 1, y: 0 }}
                mode="once"
                delayIn={i * 100}
              >
                <div className="rounded-xl border border-border bg-surface-card p-4">
                  <div className="text-sm font-medium">{lang.name}</div>
                  <div className="mt-1 text-xs text-foreground-muted">{lang.level}</div>
                </div>
              </Inview>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}