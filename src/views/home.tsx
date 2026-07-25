"use client";

import Link from "next/link";
import { Inview } from "@/components/animation/springs/in-view";
import { VideoHero } from "@/components/ui/VideoHero";

/**
 * The site's existing claims. Rendered statically with tabular numerals — the
 * outgoing scroll counter set state inside a ref callback (so it never actually
 * detected the viewport) and its suffix regex printed `$47K` as `47$K`.
 */
const ledger = [
  { label: "Shipped projects", value: "11+" },
  { label: "Combined OSS stars", value: "425K+" },
  { label: "Revenue led", value: "$47K" },
  { label: "Public repos", value: "32+" },
] as const;

const selectedWork = [
  {
    ordinal: "01",
    title: "DuckTap",
    description:
      "A CLI factory for AI agents. Turns any OpenAPI surface into agent-native CLIs, MCP servers, and skills. Published on PyPI.",
    tech: ["Python", "MCP", "CLI", "OpenAPI"],
    github: "https://github.com/zanni098/DuckTap",
  },
  {
    ordinal: "02",
    title: "Anomalithic",
    description:
      "A model-agnostic agent runtime — MCP, skills, hooks, multi-agent orchestration, and memory that survives the session.",
    tech: ["TypeScript", "Runtime", "MCP", "Agents"],
    github: "https://github.com/zanni098/Anomalithic",
  },
  {
    ordinal: "03",
    title: "BirdEye",
    description:
      "Local-first mission control and MCP gateway for every agent harness on the machine. One hub, one memory graph.",
    tech: ["TypeScript", "Dashboard", "MCP", "CLI"],
    github: "https://github.com/zanni098/BirdEye",
  },
] as const;

const reveal = { tension: 120, friction: 26 };

/**
 * Ledger cell rules. Two columns on mobile, four on desktop; a hairline only
 * ever sits *between* cells, never at the start of a visual row — hence the
 * `odd:` resets at the mobile breakpoint and the `first:` reset at md.
 */
const LEDGER_CELL = [
  "border-l border-border-subtle py-10 pl-5 pr-5",
  "odd:border-l-0 odd:pl-0",
  "[&:nth-child(-n+2)]:border-b",
  "md:py-12 md:pl-8 md:pr-8 md:odd:border-l md:odd:pl-8",
  "md:first:border-l-0 md:first:pl-0",
  "md:[&:nth-child(-n+2)]:border-b-0",
].join(" ");

export function HomeView() {
  return (
    <>
      {/* ─────────────── 00 · FOLD ───────────────
          Marquee Hero: the film fills the fold, no CTA above the rule. */}
      <VideoHero
        videoSrc="/assets/hero/flower-arc.mp4"
        posterSrc="/assets/hero/flower-arc.jpg"
        align="left"
        focal="78% center"
        label="Night-lit floral arch rising over a field of blue blooms"
      >
        <Inview
          tag="p"
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          mode="once"
          config={reveal}
          className="eyebrow mb-6 text-foreground-muted"
        >
          Full-stack AI engineer · Islamabad, PK
        </Inview>

        <Inview
          tag="h1"
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          mode="once"
          delayIn={140}
          config={reveal}
          className="display max-w-[9ch] text-[length:var(--text-display)]"
        >
          Asad Jehan Zeb
        </Inview>

        <Inview
          tag="p"
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          mode="once"
          delayIn={280}
          config={reveal}
          className="mt-8 max-w-lg text-base leading-relaxed text-foreground-secondary md:text-lg"
        >
          Agent runtimes, developer tooling, and generative filmmaking. Founder
          of Symbiothus.
        </Inview>
      </VideoHero>

      {/* ─────────────── LEDGER ───────────────
          Reads as a printed readout, not a stat grid. Static values. */}
      <section
        aria-label="By the numbers"
        className="blueprint border-b border-border"
      >
        <ul className="mx-auto grid max-w-content grid-cols-2 px-[var(--page-gutter)] md:grid-cols-4">
          {ledger.map((entry) => (
            <li key={entry.label} className={LEDGER_CELL}>
              <p className="display text-[length:var(--text-stat)] tabular-nums">
                {entry.value}
              </p>
              <p className="eyebrow mt-3">{entry.label}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ─────────────── 01 · SELECTED WORK ───────────────
          Index rows, not a three-card grid. */}
      <section className="blueprint border-b border-border">
        <div className="mx-auto max-w-content px-[var(--page-gutter)] py-24 md:py-32">
          <Inview
            tag="div"
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            mode="once"
            config={reveal}
            className="max-w-xl"
          >
            <p className="eyebrow mb-5">
              <span className="eyebrow-ord">01</span> · Selected work
            </p>
            <h2 className="display text-[length:var(--text-heading)]">
              Three of eleven.
            </h2>
            <p className="mt-5 leading-relaxed text-foreground-muted">
              Agent tooling and developer infrastructure, mostly public. The
              full index lives on the projects page.
            </p>
          </Inview>

          <ol className="mt-16 border-t border-border">
            {selectedWork.map((project, index) => (
              <Inview
                key={project.title}
                tag="li"
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                mode="once"
                delayIn={index * 90}
                config={reveal}
                className="group border-b border-border"
              >
                <div className="grid gap-6 py-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] md:gap-12 md:py-12">
                  <div>
                    <h3 className="display flex flex-wrap items-baseline gap-x-4 text-[length:var(--text-heading)]">
                      <span className="eyebrow eyebrow-ord">
                        {project.ordinal}
                      </span>
                      <span>{project.title}</span>
                    </h3>
                    <ul className="mt-5 flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <li key={tech} className="pill">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="leading-relaxed text-foreground-muted">
                      {project.description}
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3">
                      <Link
                        href="/projects"
                        className="whitespace-nowrap text-sm font-medium text-brand transition-colors duration-[var(--duration-fast)] ease-entrance hover:text-brand-hover"
                      >
                        Read the overview
                      </Link>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="eyebrow whitespace-nowrap transition-colors duration-[var(--duration-fast)] ease-entrance hover:text-foreground"
                      >
                        Source
                      </a>
                    </div>
                  </div>
                </div>
              </Inview>
            ))}
          </ol>

          <div className="mt-14">
            <Link href="/projects" className="btn-ghost">
              See all eleven projects
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────── 02 · OPEN SOURCE ─────────────── */}
      <section className="blueprint">
        <div className="mx-auto max-w-content px-[var(--page-gutter)] py-24 md:py-32">
          <Inview
            tag="div"
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            mode="once"
            config={reveal}
            className="max-w-2xl"
          >
            <p className="eyebrow mb-5">
              <span className="eyebrow-ord">02</span> · Open source
            </p>
            <h2 className="display text-[length:var(--text-display-s)]">
              Most of it <span className="verb">ships</span> in public.
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-foreground-muted">
              Contributor to promptfoo, OpenClaw, and OpenClaude. Author of
              DuckTap, BirdEye, and Anomalithic — 425K+ combined stars across
              the projects worked on.
            </p>
            <div className="mt-10">
              <Link href="/opensource" className="btn-primary">
                View contributions
              </Link>
            </div>
          </Inview>
        </div>
      </section>
    </>
  );
}
