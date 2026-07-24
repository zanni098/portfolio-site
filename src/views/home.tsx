"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSpring, animated } from "@react-spring/web";
import { Inview } from "@/components/animation/springs/in-view";
import { VideoHero } from "@/components/ui/VideoHero";

const stats = [
  { label: "Projects", value: "11+" },
  { label: "OSS Stars", value: "425K+" },
  { label: "Revenue Led", value: "$47K" },
  { label: "Repos", value: "32+" },
];

const featuredProjects = [
  {
    title: "DuckTap",
    description: "CLI factory for AI agents — turns any API into agent-native CLIs, MCP servers, and skills. Published on PyPI.",
    tech: ["Python", "MCP", "CLI", "OpenAPI"],
    href: "/projects",
    github: "https://github.com/zanni098/DuckTap",
  },
  {
    title: "Anomalithic",
    description: "Model-agnostic AI agent runtime with MCP, skills, hooks, multi-agent orchestration, and cross-session memory.",
    tech: ["TypeScript", "AI Agents", "MCP", "Runtime"],
    href: "/projects",
    github: "https://github.com/zanni098/Anomalithic",
  },
  {
    title: "BirdEye",
    description: "Local-first mission control and MCP gateway for all your AI agent harnesses. One hub for every agent.",
    tech: ["TypeScript", "Dashboard", "MCP", "CLI"],
    href: "/projects",
    github: "https://github.com/zanni098/BirdEye",
  },
];

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={(el) => { if (el && !inView) setInView(true); }}>
      {count}{suffix}
    </span>
  );
}

const titleSpring = { tension: 120, friction: 20 };

export function HomeView() {
  const scrollIndicator = useSpring({
    from: { opacity: 0, y: 10 },
    to: { opacity: 1, y: 0 },
    delay: 2200,
    config: { tension: 80, friction: 30 },
  });

  return (
    <>
      {/* ──────── HERO ──────── */}
      <VideoHero videoSrc="/assets/hero/flower-arc.mp4" posterSrc="/assets/hero/flower-arc.jpg">
        <div className="max-w-3xl mx-auto">
          <Inview from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0 }} mode="once" config={titleSpring}>
            <p className="mb-5 text-sm font-medium text-foreground-muted tracking-[0.15em] uppercase">
              Full-Stack AI Engineer
            </p>
          </Inview>

          <Inview from={{ opacity: 0, y: 25 }} to={{ opacity: 1, y: 0 }} mode="once" delayIn={200} config={titleSpring}>
            <h1
              className="text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl"
              style={{ fontFeatureSettings: "'liga' 1", letterSpacing: "-0.04em" }}
            >
              <span className="text-foreground">Asad</span>{" "}
              <span className="gradient-text">Jehan Zeb</span>
            </h1>
          </Inview>

          <Inview from={{ opacity: 0, y: 25 }} to={{ opacity: 1, y: 0 }} mode="once" delayIn={400} config={titleSpring}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-foreground-muted md:text-lg">
              Building agentic AI tooling, contributing to open source at scale,
              and exploring generative filmmaking. Founder of Symbiothus.
            </p>
          </Inview>

          <Inview from={{ opacity: 0, y: 25 }} to={{ opacity: 1, y: 0 }} mode="once" delayIn={600} config={titleSpring}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/projects" className="btn-primary text-sm px-6 py-3">
                View Projects
              </Link>
              <Link href="/contact" className="btn-ghost text-sm px-6 py-3">
                Get in Touch
              </Link>
            </div>
          </Inview>
        </div>
      </VideoHero>

      {/* Scroll indicator */}
      <animated.div
        style={scrollIndicator}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2.5">
          <span className="text-[10px] font-medium text-foreground-muted uppercase tracking-[0.2em]">
            Scroll
          </span>
          <div className="h-8 w-px bg-gradient-to-b from-foreground-muted/50 to-transparent" />
        </div>
      </animated.div>

      {/* ──────── STATS ──────── */}
      <section className="border-b border-border-subtle">
        <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-24">
          <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
            {stats.map((stat, i) => (
              <Inview
                key={stat.label}
                from={{ opacity: 0, y: 20 }}
                to={{ opacity: 1, y: 0 }}
                mode="once"
                delayIn={i * 100}
                config={{ tension: 100, friction: 20 }}
              >
                <div className="text-center">
                  <div
                    className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl"
                    style={{ fontFeatureSettings: "'liga' 1", letterSpacing: "-0.03em" }}
                  >
                    <AnimatedCounter
                      target={parseInt(stat.value.replace(/[^0-9]/g, ""))}
                      suffix={stat.value.replace(/[0-9]/g, "")}
                    />
                  </div>
                  <div className="mt-2 text-xs font-medium uppercase tracking-[0.15em] text-foreground-muted">
                    {stat.label}
                  </div>
                </div>
              </Inview>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── FEATURED PROJECTS ──────── */}
      <section className="mx-auto max-w-content px-6 py-24 md:px-10 md:py-32">
        <Inview from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0 }} mode="once">
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand mb-4">
              Selected Work
            </p>
            <h2
              className="text-3xl font-semibold tracking-tight md:text-4xl"
              style={{ fontFeatureSettings: "'liga' 1", letterSpacing: "-0.03em" }}
            >
              Featured Projects
            </h2>
            <p className="mt-4 text-foreground-muted leading-relaxed">
              Selected projects from a portfolio spanning AI agent tooling, developer
              infrastructure, fintech, and consumer apps.
            </p>
          </div>
        </Inview>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <Inview
              key={project.title}
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
              mode="once"
              delayIn={i * 150}
              config={{ tension: 100, friction: 20 }}
            >
              <div className="card p-6 group h-full flex flex-col">
                <div className="mb-3">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="h-2 w-2 rounded-full bg-brand" />
                    <h3
                      className="text-lg font-semibold tracking-tight"
                      style={{ fontFeatureSettings: "'liga' 1", letterSpacing: "-0.02em" }}
                    >
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-foreground-muted">
                    {project.description}
                  </p>
                </div>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="pill text-[11px]">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-5 pt-2 border-t border-border-subtle">
                    <Link
                      href={project.href}
                      className="text-sm font-medium text-brand transition-colors duration-[var(--duration-fast)] ease-entrance hover:text-brand-hover"
                    >
                      Learn More →
                    </Link>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-foreground-muted transition-colors duration-[var(--duration-fast)] ease-entrance hover:text-foreground"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </Inview>
          ))}
        </div>
      </section>

      {/* ──────── OPEN SOURCE CTA ──────── */}
      <section className="border-t border-border-subtle">
        <div className="mx-auto max-w-content px-6 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <Inview from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0 }} mode="once">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand mb-4">
                Open Source
              </p>
              <h2
                className="text-3xl font-semibold tracking-tight md:text-4xl"
                style={{ fontFeatureSettings: "'liga' 1", letterSpacing: "-0.03em" }}
              >
                Contributing to projects with{" "}
                <span className="gradient-text">425K+</span> combined stars
              </h2>
              <p className="mt-5 text-foreground-muted leading-relaxed max-w-lg mx-auto">
                Active contributor to promptfoo, OpenClaw, and OpenClaude.
                Author of DuckTap, BirdEye, and Anomalithic.
              </p>
              <div className="mt-10">
                <Link
                  href="/opensource"
                  className="btn-ghost text-sm px-6 py-3"
                >
                  View Contributions →
                </Link>
              </div>
            </Inview>
          </div>
        </div>
      </section>
    </>
  );
}