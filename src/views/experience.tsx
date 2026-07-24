"use client";

import { Inview } from "@/components/animation/springs/in-view";
import { VideoHero } from "@/components/ui/VideoHero";

const experiences = [
  {
    company: "Symbiothus",
    role: "Founder & Engineer",
    period: "2025 — Present",
    description: "Founded Symbiothus, an umbrella company for a family of AI, developer, and consumer products — built, shipped, and run end-to-end. Overseeing 11+ products including DuckTap, Anomalithic, Markuce, BirdEye, NutriSnap, and more.",
    highlights: [
      "Built and shipped 11+ products under one umbrella",
      "Published DuckTap on PyPI — CLI factory for AI agents",
      "Developed Anomalithic — open-core model-agnostic agent runtime",
      "Deployed and operated 5 agent runtimes for client work",
    ],
  },
  {
    company: "E-Study Card",
    role: "Project Manager & Developer",
    period: "2023 — 2025",
    description: "Led the development of a government-backed education technology platform from concept to $47,862 in revenue. Built a comprehensive digital learning ecosystem for students across Pakistan.",
    highlights: [
      "Generated $47,862 in revenue from a government-backed platform",
      "Built AI assistant, quiz system, and video lecture platform",
      "Implemented SLO (Student Learning Outcomes) level mapping",
      "Created comprehensive past papers and mock test system",
    ],
  },
  {
    company: "Contra (Freelance)",
    role: "Web Developer & AI Automation Specialist",
    period: "2025 — Present",
    description: "Freelance work as 'Jolly Roger' on Contra, delivering end-to-end web development, AI agent automation, and creative AI video projects.",
    highlights: [
      "Built AI chatbots and automation workflows",
      "Delivered full-stack web platforms with AI integration",
      "Created AI video content for commercial clients",
      "Available for websites, AI agents, custom software, and AI video",
    ],
  },
  {
    company: "The Boring Studio",
    role: "Creator",
    period: "2025 — Present",
    description: "Exploring generative AI filmmaking through a YouTube channel dedicated to experimental short films and video content created with AI tools.",
    highlights: [
      "Creating experimental AI-generated short films",
      "Exploring generative AI video tools and techniques",
      "Building a creative community around AI filmmaking",
    ],
  },
];

export function ExperienceView() {
  return (
    <>
      <VideoHero videoSrc="/assets/hero/sea-storm.mp4" posterSrc="/assets/hero/sea-storm.jpg">
          <Inview from={{ opacity: 0, y: 30 }} to={{ opacity: 1, y: 0 }} mode="once" config={{ tension: 120, friction: 20 }}>
            <p className="mb-4 text-sm font-medium text-foreground-muted" style={{ letterSpacing: "-0.01em" }}>
              Experience
            </p>
            <h1 className="text-4xl font-medium leading-display tracking-display md:text-5xl lg:text-6xl" style={{ fontFeatureSettings: "'liga' 1" }}>
              From idea to{" "}
              <span className="gradient-text">production</span>.
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-foreground-muted">
              A track record of shipping products, leading teams, and building
              at the intersection of AI and software engineering.
            </p>
          </Inview>
      </VideoHero>

      <section className="mx-auto max-w-content px-6 pb-20 md:px-10 md:pb-28">
        <div className="relative">
          <div className="absolute left-0 top-0 h-full w-px bg-border md:left-8" />
          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <Inview key={exp.company} from={{ opacity: 0, x: -20 }} to={{ opacity: 1, x: 0 }} mode="once" delayIn={i * 100} config={{ tension: 100, friction: 20 }}>
                <div className="relative pl-6 md:pl-20">
                  <div className="absolute left-[-4.5px] top-6 h-2.5 w-2.5 rounded-full border-2 border-brand bg-background md:left-[26.5px]" />
                  <div className="card p-6">
                    <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                      <div>
                        <span className="text-xs font-medium uppercase tracking-widest text-brand">{exp.role}</span>
                        <h2 className="mt-1 text-xl font-medium tracking-tight" style={{ fontFeatureSettings: "'liga' 1" }}>{exp.company}</h2>
                      </div>
                      <span className="text-sm text-foreground-muted">{exp.period}</span>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-foreground-muted">{exp.description}</p>
                    <ul className="mt-4 space-y-2">
                      {exp.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-3 text-sm text-foreground-muted">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Inview>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}