import type { Fact } from "@/data/shipped";

interface WorkFactsProps {
  facts: Fact[];
}

export function WorkFacts({ facts }: WorkFactsProps) {
  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-3">
      {facts.map((fact) => (
        <div key={fact.label}>
          <dt className="text-xs uppercase tracking-wide text-foreground-subtle">
            {fact.label}
          </dt>
          <dd className="mt-1 text-sm text-foreground">{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}
