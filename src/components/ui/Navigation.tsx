"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSpring, animated } from "@react-spring/web";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/opensource", label: "Open Source" },
  { href: "/films", label: "Films" },
  { href: "/experience", label: "Experience" },
  { href: "/certifications", label: "Certifications" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bgSpring = useSpring({
    backgroundColor: scrolled ? "rgba(8, 9, 10, 0.85)" : "transparent",
    backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
    boxShadow: scrolled
      ? "0px 0px 0px 1px rgba(255,255,255,0.08)"
      : "0px 0px 0px 0px transparent",
    config: { tension: 280, friction: 30 },
  });

  const mobileSpring = useSpring({
    opacity: mobileOpen ? 1 : 0,
    transform: mobileOpen ? "translateY(0%)" : "translateY(-5%)",
    pointerEvents: mobileOpen ? "auto" : "none" as any,
    config: { tension: 280, friction: 25 },
  });

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    closeMobile();
  }, [pathname, closeMobile]);

  return (
    <animated.header
      style={bgSpring}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10"
    >
      <nav className="mx-auto flex h-16 max-w-content items-center justify-between">
        <Link
          href="/"
          className="text-sm font-medium tracking-tight text-foreground transition-colors duration-[var(--duration-fast)] ease-entrance hover:text-brand"
          style={{ fontFeatureSettings: "'liga' 1", letterSpacing: "-0.02em" }}
        >
          asad<span className="text-brand">.</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-0.5 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-3 py-2 text-sm font-medium transition-colors duration-[var(--duration-fast)] ease-entrance hover:text-foreground ${
                pathname === link.href
                  ? "text-foreground"
                  : "text-foreground-muted"
              }`}
              style={{ fontFeatureSettings: "'liga' 1", letterSpacing: "-0.01em" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-ghost ml-3 text-sm"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          className="flex h-8 w-8 flex-col items-center justify-center gap-1 md:hidden"
          aria-label="Toggle navigation"
        >
          <span
            className={`block h-px w-5 bg-foreground transition-transform duration-[var(--duration-fast)] ${
              mobileOpen ? "translate-y-1.5 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-foreground transition-opacity duration-[var(--duration-fast)] ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-foreground transition-transform duration-[var(--duration-fast)] ${
              mobileOpen ? "-translate-y-1.5 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <animated.div
        style={mobileSpring}
        className="absolute left-0 right-0 top-16 border-t border-border bg-background-alt md:hidden"
      >
        <div className="flex flex-col gap-1 px-6 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`py-3 text-sm transition-colors ${
                pathname === link.href
                  ? "text-foreground"
                  : "text-foreground-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-primary mt-4 inline-flex w-full justify-center"
          >
            Get in Touch
          </Link>
        </div>
      </animated.div>
    </animated.header>
  );
}