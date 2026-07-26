import type { CastMember, ScriptBeat } from "@/data/shipped";

interface WorkScriptProps {
  cast: CastMember[];
  script: ScriptBeat[];
}

export function WorkScript({ cast, script }: WorkScriptProps) {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-3">
        {cast.map((member) => (
          <article key={member.name} className="card p-5">
            <h3
              className="text-sm font-medium tracking-tight"
              style={{ fontFeatureSettings: "'liga' 1" }}
            >
              {member.name}
            </h3>
            <p className="mt-1 text-xs text-brand">{member.silhouette}</p>
            <p className="mt-3 text-xs text-foreground-subtle">{member.scale}</p>
            <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
              {member.character}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-10 overflow-x-auto">
        <table className="w-full min-w-3xl border-collapse text-left text-sm">
          <caption className="sr-only">
            Shot-by-shot script with timings and dialogue
          </caption>
          <thead>
            <tr className="border-b border-border">
              <th scope="col" className="py-3 pr-4 font-medium">
                #
              </th>
              <th scope="col" className="py-3 pr-4 font-medium">
                Time
              </th>
              <th scope="col" className="py-3 pr-4 font-medium">
                Beat
              </th>
              <th scope="col" className="py-3 font-medium">
                Dialogue
              </th>
            </tr>
          </thead>
          <tbody>
            {script.map((beat) => (
              <tr key={beat.n} className="border-b border-border-subtle">
                <td className="py-3 pr-4 align-top text-foreground-subtle">
                  {beat.n}
                </td>
                <td className="py-3 pr-4 align-top whitespace-nowrap text-foreground-subtle">
                  {beat.time}
                </td>
                <td className="py-3 pr-4 align-top">{beat.beat}</td>
                <td className="py-3 align-top text-foreground-muted">
                  {beat.dialogue}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
