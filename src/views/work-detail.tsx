import { Inview } from "@/components/animation/springs/in-view";
import { PromptLibrary } from "@/components/work/PromptLibrary";
import { WorkFacts } from "@/components/work/WorkFacts";
import { WorkLinks } from "@/components/work/WorkLinks";
import { WorkScript } from "@/components/work/WorkScript";
import type { ShippedWork } from "@/data/shipped";
import { loadProductionDoc } from "@/data/shipped/production-doc";

interface WorkDetailViewProps {
  work: ShippedWork;
}

const REVEAL = {
  from: { opacity: 0, y: 30 },
  to: { opacity: 1, y: 0 },
  config: { tension: 100, friction: 20 },
} as const;

export async function WorkDetailView({ work }: WorkDetailViewProps) {
  const { elements, shots } = await loadProductionDoc(work.productionDoc);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: work.title,
    description: work.logline,
    uploadDate: work.publishedAt,
    thumbnailUrl: `https://i.ytimg.com/vi/${work.videoId}/maxresdefault.jpg`,
    embedUrl: `https://www.youtube.com/embed/${work.videoId}`,
  };

  return (
    <article className="mx-auto max-w-content px-6 pt-28 pb-20 md:px-10 md:pt-36 md:pb-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header>
        <Inview {...REVEAL} mode="once">
          <p className="mb-4 text-sm font-medium text-foreground-muted">
            Short film
          </p>
          <h1
            className="text-4xl font-medium leading-display tracking-display md:text-5xl lg:text-6xl"
            style={{ fontFeatureSettings: "'liga' 1" }}
          >
            {work.title}
          </h1>
          <p className="mt-4 max-w-narrow text-lg text-foreground-muted">
            {work.logline}
          </p>
        </Inview>
      </header>

      <Inview {...REVEAL} mode="once" delayIn={100}>
        <div className="mt-10 overflow-hidden rounded-xl border border-border">
          <iframe
            src={`https://www.youtube.com/embed/${work.videoId}`}
            title={`${work.title} — full film`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="aspect-video w-full"
          />
        </div>
      </Inview>

      <section className="mt-12 border-t border-border-subtle pt-10">
        <h2 className="sr-only">Production facts</h2>
        <WorkFacts facts={work.facts} />
      </section>

      {work.intro.map((block) => (
        <section key={block.heading} className="mt-14">
          <Inview {...REVEAL} mode="once">
            <h2
              className="text-2xl font-medium leading-display tracking-display md:text-3xl"
              style={{ fontFeatureSettings: "'liga' 1" }}
            >
              {block.heading}
            </h2>
            {block.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-4 max-w-narrow leading-relaxed text-foreground-muted"
              >
                {paragraph}
              </p>
            ))}
          </Inview>
        </section>
      ))}

      <section className="mt-16">
        <h2
          className="text-2xl font-medium leading-display tracking-display md:text-3xl"
          style={{ fontFeatureSettings: "'liga' 1" }}
        >
          Cast and script
        </h2>
        <p className="mt-3 max-w-narrow text-foreground-muted">
          Three hard-contrasting silhouettes and sixteen lines. None of them has
          a mouth, so every line is voiceover and nothing can desync.
        </p>
        <div className="mt-6">
          <WorkScript cast={work.cast} script={work.script} />
        </div>
      </section>

      {work.craft.map((block) => (
        <section key={block.heading} className="mt-14">
          <Inview {...REVEAL} mode="once">
            <h2
              className="text-2xl font-medium leading-display tracking-display md:text-3xl"
              style={{ fontFeatureSettings: "'liga' 1" }}
            >
              {block.heading}
            </h2>
            {block.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-4 max-w-narrow leading-relaxed text-foreground-muted"
              >
                {paragraph}
              </p>
            ))}
          </Inview>
        </section>
      ))}

      <section className="mt-16">
        <PromptLibrary
          title="Element prompts"
          description="Every character, environment and prop was built as a named reference asset first. Shot prompts then call them by tag, which is what keeps identity stable across eight separate generations."
          blocks={elements}
        />
      </section>

      <section className="mt-14">
        <PromptLibrary
          title="Shot prompts"
          description="All eight shots, written to 7.5 seconds each against Seedance 2.0's hard eight-second cap. Each states its own duration, physics, lighting and colour grade explicitly."
          blocks={shots}
        />
      </section>

      <section className="mt-16 border-t border-border-subtle pt-10">
        <h2
          className="text-2xl font-medium leading-display tracking-display md:text-3xl"
          style={{ fontFeatureSettings: "'liga' 1" }}
        >
          Where else this lives
        </h2>
        <div className="mt-6">
          <WorkLinks links={work.links} />
        </div>
      </section>
    </article>
  );
}
