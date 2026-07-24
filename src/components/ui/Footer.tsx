import Link from "next/link";
import { siteConfig } from "@/lib/site";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/opensource", label: "Open Source" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: siteConfig.social.github, label: "GitHub", handle: "zanni098" },
  { href: siteConfig.social.linkedin, label: "LinkedIn", handle: "asad-jehan-zeb" },
  { href: siteConfig.social.contra, label: "Contra", handle: "Zucchhini" },
  { href: siteConfig.social.medium, label: "Medium", handle: "zuhaibkhann098" },
  { href: siteConfig.social.youtube, label: "YouTube", handle: "TheBoringStudio" },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-content px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-lg font-medium tracking-tight text-foreground"
              style={{ fontFeatureSettings: "'liga' 1", letterSpacing: "-0.03em" }}
            >
              asad<span className="text-brand">.</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-foreground-muted">
              Full-stack AI engineer building agentic tooling, contributing to
              open source, and exploring generative AI filmmaking. Founder of
              Symbiothus.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-widest text-foreground-muted">
              Navigation
            </h3>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-foreground-muted transition-colors duration-[var(--duration-fast)] ease-entrance hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-widest text-foreground-muted">
              Connect
            </h3>
            <div className="flex flex-col gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-sm text-foreground-muted transition-colors duration-[var(--duration-fast)] ease-entrance hover:text-foreground"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-foreground-subtle transition-colors group-hover:text-foreground-muted">
                    /{link.handle}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-foreground-muted md:flex-row">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Built with Next.js, TypeScript, and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}