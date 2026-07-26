import type { ShippedLink } from "@/data/shipped";

interface WorkLinksProps {
  links: ShippedLink[];
}

const KIND_LABEL: Record<ShippedLink["kind"], string> = {
  video: "Video",
  short: "Short",
  post: "Write-up",
  profile: "Profile",
  social: "Social",
  repo: "Code",
  site: "Site",
};

/**
 * Every other surface this work lives on. Populated after the fan-out, so a
 * surface that failed to publish is simply absent rather than broken.
 */
export function WorkLinks({ links }: WorkLinksProps) {
  if (links.length === 0) {
    return null;
  }

  return (
    <ul className="grid gap-3 md:grid-cols-2">
      {links.map((link) => (
        <li key={link.url}>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card group flex items-baseline justify-between gap-4 p-4"
          >
            <span className="text-sm">{link.label}</span>
            <span className="shrink-0 text-xs text-brand transition-colors group-hover:text-brand-hover">
              {KIND_LABEL[link.kind]} →
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
