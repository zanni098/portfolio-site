"use client";

import { Inview } from "@/components/animation/springs/in-view";
import { VideoHero } from "@/components/ui/VideoHero";

const certifications = [
  { issuer: "Anthropic", title: "AI Fluency: Framework & Foundations", description: "Certification in AI fluency covering frameworks, foundational concepts, and practical applications of AI systems." },
  { issuer: "Anthropic", title: "AI Capabilities & Limitations", description: "Deep understanding of what AI systems can and cannot do, including model capabilities, constraints, and reliability considerations." },
  { issuer: "Anthropic", title: "Claude 101", description: "Comprehensive training on Claude AI — prompt engineering, use cases, API integration, and best practices." },
  { issuer: "Google", title: "Intro to Large Language Models", description: "Foundational knowledge of large language models, their architecture, training, and deployment considerations." },
  { issuer: "Google · Coursera", title: "AI Fundamentals", description: "Core AI and machine learning concepts including supervised and unsupervised learning, neural networks, and ethical AI." },
  { issuer: "Domestika", title: "Intro to Python Programming", description: "Foundational Python programming skills covering syntax, data structures, functions, and object-oriented programming." },
];

export function CertificationsView() {
  return (
    <>
      <VideoHero videoSrc="/assets/hero/hills.mp4" posterSrc="/assets/hero/hills.jpg">
        <Inview from={{ opacity: 0, y: 30 }} to={{ opacity: 1, y: 0 }} mode="once" config={{ tension: 120, friction: 20 }}>
          <p className="mb-4 text-sm font-medium text-foreground-muted" style={{ letterSpacing: "-0.01em" }}>
            Certifications
          </p>
          <h1 className="text-4xl font-medium leading-display tracking-display md:text-5xl lg:text-6xl" style={{ fontFeatureSettings: "'liga' 1" }}>
            Continuous{" "}
            <span className="gradient-text">learning</span>.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-foreground-muted">
            Certifications from leading AI companies and educational platforms.
          </p>
        </Inview>
      </VideoHero>

      <section className="mx-auto max-w-content px-6 pb-20 md:px-10 md:pb-28">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <Inview key={cert.title} from={{ opacity: 0, y: 30 }} to={{ opacity: 1, y: 0 }} mode="once" delayIn={i * 60} config={{ tension: 100, friction: 20 }}>
              <div className="card p-6">
                <span className="text-xs font-medium uppercase tracking-widest text-brand">{cert.issuer}</span>
                <h3 className="mt-2 text-base font-medium tracking-tight" style={{ fontFeatureSettings: "'liga' 1" }}>{cert.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{cert.description}</p>
              </div>
            </Inview>
          ))}
        </div>
      </section>
    </>
  );
}