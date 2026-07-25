import Link from "next/link";
import { siteConfig } from "@/lib/site";

const socialLinks = [
  { href: siteConfig.social.github, label: "GitHub", handle: "zanni098" },
  { href: siteConfig.social.linkedin, label: "LinkedIn", handle: "asad-jehan-zeb" },
  { href: siteConfig.social.contra, label: "Contra", handle: "Zucchhini" },
  { href: siteConfig.social.medium, label: "Medium", handle: "zuhaibkhann098" },
  { href: siteConfig.social.youtube, label: "YouTube", handle: "TheBoringStudio" },
] as const;

/**
 * Ft5 · Statement — closes the page with a sentence.
 *
 * Replaces the outgoing three-column link index + centred copyright, which is
 * the most recognisable AI-footer fingerprint. Route discovery now lives in the
 * grouped header nav, so repeating it here earned nothing.
 */
export function Footer() {
  return (
    <footer className="blueprint border-t border-border">
      <div className="mx-auto max-w-content px-[var(--page-gutter)] py-24 md:py-32">
        <p className="eyebrow mb-6">
          <span className="eyebrow-ord">05</span> · Colophon
        </p>

        <p className="display max-w-[18ch] text-[length:var(--text-display-s)]">
          Agent tooling, <span className="verb">built</span> in the open.
        </p>

        <p className="mt-8 max-w-md text-base leading-relaxed text-foreground-muted">
          Founder of Symbiothus. Writing agent runtimes and developer tooling
          from {siteConfig.location}, and publishing most of it.
        </p>

        {siteConfig.available && (
          <p className="mt-8 flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-brand"
            />
            <span className="eyebrow">Available for work</span>
          </p>
        )}

        <div className="mt-10">
          <Link href="/contact" className="btn-primary">
            Start a conversation
          </Link>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-border-subtle pt-8 md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="eyebrow whitespace-nowrap transition-colors duration-[var(--duration-fast)] ease-entrance hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <p className="eyebrow whitespace-nowrap">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
