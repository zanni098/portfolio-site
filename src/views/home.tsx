"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSpring, animated, useTrail } from "@react-spring/web";
import { Inview } from "@/components/animation/springs/in-view";

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
const titleFrom = { opacity: 0, transform: "translateY(40px)" };
const titleTo = { opacity: 1, transform: "translateY(0px)" };

export function HomeView() {
  const trail = useTrail(3, {
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
    config: { tension: 120, friction: 18 },
    delay: 800,
  });

  const scrollIndicator = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 2000,
    config: { tension: 80, friction: 30 },
  });

  return (
    <>
      {/* ──────── HERO ──────── */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-950 via-background to-background" />

        {/* Animated grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Gradient orbs */}
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[120px]" />
        <div className="pointer-events-none absolute right-1/4 top-2/3 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[100px]" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto max-w-content px-6 text-center md:px-10">
          <Inview from={titleFrom} to={titleTo} config={titleSpring} mode="once">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-brand">
              Full-Stack AI Engineer
            </p>
          </Inview>

          <Inview from={titleFrom} to={titleTo} config={titleSpring} mode="once" delayIn={200}>
            <h1 className="text-5xl font-medium leading-display tracking-tight md:text-7xl lg:text-8xl">
              Asad{" "}
              <span className="gradient-text">Jehan Zeb</span>
            </h1>
          </Inview>

          <Inview from={titleFrom} to={titleTo} config={titleSpring} mode="once" delayIn={400}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground-muted md:text-xl">
              Building agentic AI tooling, contributing to open source at scale,
              and exploring generative filmmaking. Founder of Symbiothus.
            </p>
          </Inview>

          <Inview from={titleFrom} to={titleTo} config={titleSpring} mode="once" delayIn={600}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/projects"
                className="rounded-full bg-brand px-6 py-3 text-sm font-medium text-foreground-inverse transition-all duration-[var(--duration-fast)] ease-entrance hover:bg-brand-hover"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground-muted transition-all duration-[var(--duration-fast)] ease-entrance hover:border-foreground-muted hover:text-foreground"
              >
                Get in Touch
              </Link>
            </div>
          </Inview>
        </div>

        {/* Scroll indicator */}
        <animated.div
          style={scrollIndicator}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-foreground-muted">
              Scroll
            </span>
            <div className="h-8 w-px bg-gradient-to-b from-foreground-muted to-transparent" />
          </div>
        </animated.div>
      </section>

      {/* ──────── STATS ──────── */}
      <section className="border-y border-border">
        <div className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-20">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <Inview
                key={stat.label}
                from={{ opacity: 0, y: 20 }}
                to={{ opacity: 1, y: 0 }}
                mode="once"
                config={{ tension: 100, friction: 20 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-medium tracking-tight md:text-4xl">
                    <AnimatedCounter
                      target={parseInt(stat.value.replace(/[^0-9]/g, ""))}
                      suffix={stat.value.replace(/[0-9]/g, "")}
                    />
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-foreground-muted">
                    {stat.label}
                  </div>
                </div>
              </Inview>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── FEATURED PROJECTS ──────── */}
      <section className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
        <Inview from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0 }} mode="once">
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
            Featured Work
          </h2>
          <p className="mt-3 max-w-xl text-foreground-muted">
            Selected projects from a portfolio spanning AI agent tooling, developer
            infrastructure, fintech, and consumer apps.
          </p>
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
              <div className="group relative flex h-full flex-col rounded-2xl border border-border bg-surface-card p-6 transition-all duration-[var(--duration-normal)] ease-entrance hover:border-border-hover hover:bg-surface-card-hover">
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-brand" />
                  <h3 className="text-lg font-medium">{project.title}</h3>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-foreground-muted">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-background-muted px-3 py-1 text-xs text-foreground-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <Link
                    href={project.href}
                    className="text-xs font-medium uppercase tracking-widest text-brand transition-colors duration-[var(--duration-fast)] ease-entrance hover:text-brand-hover"
                  >
                    Learn More
                  </Link>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-foreground-muted transition-colors duration-[var(--duration-fast)] ease-entrance hover:text-foreground"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </Inview>
          ))}
        </div>
      </section>

      {/* ──────── OPEN SOURCE CTA ──────── */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-narrow text-center">
            <Inview from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0 }} mode="once">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand">
                Open Source
              </p>
              <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">
                Merged into projects with{" "}
                <span className="gradient-text">425K+ combined stars</span>
              </h2>
              <p className="mt-4 text-foreground-muted">
                Active contributor to promptfoo, OpenClaw, and OpenClaude.
                Author of DuckTap, BirdEye, and Anomalithic.
              </p>
              <Link
                href="/opensource"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-brand transition-colors duration-[var(--duration-fast)] ease-entrance hover:text-brand-hover"
              >
                View Contributions →
              </Link>
            </Inview>
          </div>
        </div>
      </section>
    </>
  );
}