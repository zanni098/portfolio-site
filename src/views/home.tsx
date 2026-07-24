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
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 2000,
    config: { tension: 80, friction: 30 },
  });

  return (
    <>
      {/* ──────── HERO ──────── */}
      <VideoHero videoSrc="/assets/hero/flower-arc.mp4" posterSrc="/assets/hero/flower-arc.jpg">
        <Inview from={{ opacity: 0, y: 30 }} to={{ opacity: 1, y: 0 }} mode="once" config={titleSpring}>
          <p className="mb-4 text-sm font-medium text-foreground-muted" style={{ letterSpacing: "-0.01em" }}>
            Full-Stack AI Engineer
          </p>
        </Inview>

        <Inview from={{ opacity: 0, y: 30 }} to={{ opacity: 1, y: 0 }} mode="once" delayIn={200} config={titleSpring}>
          <h1
            className="text-5xl font-medium leading-display tracking-display md:text-7xl lg:text-8xl"
            style={{ fontFeatureSettings: "'liga' 1" }}
          >
            Asad{" "}
            <span className="gradient-text">Jehan Zeb</span>
          </h1>
        </Inview>

        <Inview from={{ opacity: 0, y: 30 }} to={{ opacity: 1, y: 0 }} mode="once" delayIn={400} config={titleSpring}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground-muted">
            Building agentic AI tooling, contributing to open source at scale,
            and exploring generative filmmaking. Founder of Symbiothus.
          </p>
        </Inview>

        <Inview from={{ opacity: 0, y: 30 }} to={{ opacity: 1, y: 0 }} mode="once" delayIn={600} config={titleSpring}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/projects" className="btn-primary">
              View Projects
            </Link>
            <Link href="/contact" className="btn-ghost">
              Get in Touch
            </Link>
          </div>
        </Inview>
      </VideoHero>

      {/* Scroll indicator */}
      <animated.div
        style={scrollIndicator}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium text-foreground-muted uppercase tracking-widest">
            Scroll
          </span>
          <div className="h-8 w-px bg-gradient-to-b from-foreground-muted to-transparent" />
        </div>
      </animated.div>

      {/* ──────── STATS ──────── */}
      <section className="shadow-border">
        <div className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-20">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
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
                    className="text-3xl font-medium tracking-display md:text-4xl"
                    style={{ fontFeatureSettings: "'liga' 1" }}
                  >
                    <AnimatedCounter
                      target={parseInt(stat.value.replace(/[^0-9]/g, ""))}
                      suffix={stat.value.replace(/[0-9]/g, "")}
                    />
                  </div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-widest text-foreground-muted">
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
          <h2
            className="text-3xl font-medium tracking-heading md:text-4xl"
            style={{ fontFeatureSettings: "'liga' 1" }}
          >
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
              <div className="card p-6 group">
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-brand" />
                  <h3
                    className="text-lg font-medium tracking-tight"
                    style={{ fontFeatureSettings: "'liga' 1" }}
                  >
                    {project.title}
                  </h3>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-foreground-muted">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="pill">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <Link
                    href={project.href}
                    className="text-sm font-medium text-brand transition-colors duration-[var(--duration-fast)] ease-entrance hover:text-brand-hover"
                    style={{ fontFeatureSettings: "'liga' 1" }}
                  >
                    Learn More
                  </Link>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground-muted transition-colors duration-[var(--duration-fast)] ease-entrance hover:text-foreground"
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
      <section className="shadow-border">
        <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-narrow text-center">
            <Inview from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0 }} mode="once">
              <p className="mb-4 text-sm font-medium text-brand" style={{ letterSpacing: "-0.01em" }}>
                Open Source
              </p>
              <h2
                className="text-3xl font-medium tracking-heading md:text-4xl"
                style={{ fontFeatureSettings: "'liga' 1" }}
              >
                Merged into projects with{" "}
                <span className="gradient-text">425K+ combined stars</span>
              </h2>
              <p className="mt-4 text-foreground-muted">
                Active contributor to promptfoo, OpenClaw, and OpenClaude.
                Author of DuckTap, BirdEye, and Anomalithic.
              </p>
              <Link
                href="/opensource"
                className="btn-ghost mt-8 inline-flex"
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