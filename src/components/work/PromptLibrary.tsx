import type { PromptBlock } from "@/data/shipped";

interface PromptLibraryProps {
  title: string;
  description: string;
  blocks: PromptBlock[];
}

/**
 * Renders the production prompts as native disclosure elements. Prompts run to
 * several hundred words each, so they stay collapsed until asked for.
 */
export function PromptLibrary({
  title,
  description,
  blocks,
}: PromptLibraryProps) {
  return (
    <div>
      <h2
        className="text-2xl font-medium leading-display tracking-display md:text-3xl"
        style={{ fontFeatureSettings: "'liga' 1" }}
      >
        {title}
      </h2>
      <p className="mt-3 max-w-narrow text-foreground-muted">{description}</p>

      <div className="mt-6 flex flex-col gap-2">
        {blocks.map((block) => (
          <details key={block.name} className="card group p-0">
            <summary className="cursor-pointer list-none px-5 py-4 text-sm font-medium">
              <span className="text-brand transition-colors group-hover:text-brand-hover">
                {block.name}
              </span>
            </summary>
            <pre className="overflow-x-auto border-t border-border-subtle px-5 py-4 text-xs leading-relaxed whitespace-pre-wrap text-foreground-muted">
              {block.body}
            </pre>
          </details>
        ))}
      </div>
    </div>
  );
}
