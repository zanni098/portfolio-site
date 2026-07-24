"use client";

import { Inview } from "@/components/animation/springs/in-view";

const films = [
  {
    title: "The Boring Studio",
    description: "A YouTube channel exploring generative AI filmmaking. Pushing the boundaries of what's possible with AI video generation tools to create cinematic short films and experimental content.",
    role: "Creator & Director",
    channel: "https://youtube.com/@theboringstudio-w9b",
    label: "View Channel",
  },
];

export function FilmsView() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <Inview from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0 }} mode="once">
            <p className="mb-4 text-sm font-medium text-foreground-muted" style={{ letterSpacing: "-0.01em" }}>
              Films
            </p>
            <h1 className="text-4xl font-medium leading-display tracking-display md:text-5xl lg:text-6xl" style={{ fontFeatureSettings: "'liga' 1" }}>
              Exploring generative{" "}
              <span className="gradient-text">AI filmmaking</span>.
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-foreground-muted">
              Pushing the boundaries of AI-generated cinema through The Boring
              Studio — a creative outlet for experimental short films and video
              projects powered by generative AI.
            </p>
          </Inview>
        </div>
      </section>

      <section className="mx-auto max-w-content px-6 pb-20 md:px-10 md:pb-28">
        <div className="grid gap-6 md:grid-cols-2">
          {films.map((film, i) => (
            <Inview key={film.title} from={{ opacity: 0, y: 30 }} to={{ opacity: 1, y: 0 }} mode="once" delayIn={i * 100} config={{ tension: 100, friction: 20 }}>
              <a href={film.channel} target="_blank" rel="noopener noreferrer" className="card p-6 group flex h-full flex-col">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-light">
                    <span className="text-lg">🎬</span>
                  </div>
                  <div>
                    <h2 className="text-lg font-medium tracking-tight" style={{ fontFeatureSettings: "'liga' 1" }}>{film.title}</h2>
                    <span className="text-xs text-foreground-muted">{film.role}</span>
                  </div>
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground-muted">{film.description}</p>
                <span className="mt-4 text-sm font-medium text-brand transition-colors group-hover:text-brand-hover" style={{ fontFeatureSettings: "'liga' 1" }}>
                  {film.label} →
                </span>
              </a>
            </Inview>
          ))}
        </div>
      </section>
    </>
  );
}