"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSpring, animated, useSpringValue } from "@react-spring/web";

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
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navSpring = useSpring({
    backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
    backgroundColor: scrolled ? "rgba(255, 255, 255, 0.72)" : "rgba(255, 255, 255, 0)",
    boxShadow: scrolled
      ? "0px 0px 0px 1px rgba(0,0,0,0.06), 0px 4px 20px rgba(0,0,0,0.04)"
      : "0px 0px 0px 0px transparent",
    config: { tension: 280, friction: 30 },
  });

  const mobileSpring = useSpring({
    opacity: mobileOpen ? 1 : 0,
    transform: mobileOpen ? "translateY(0%) scale(1)" : "translateY(-2%) scale(0.98)",
    pointerEvents: mobileOpen ? "auto" : "none" as any,
    config: { tension: 300, friction: 28 },
  });

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    closeMobile();
  }, [pathname, closeMobile]);

  return (
    <animated.header
      ref={navRef}
      style={navSpring}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />

      <nav className="mx-auto flex h-16 max-w-content items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          className="relative text-sm font-semibold tracking-tight text-foreground transition-colors duration-[var(--duration-fast)] ease-entrance hover:text-brand"
          style={{ fontFeatureSettings: "'liga' 1", letterSpacing: "-0.03em" }}
        >
          asad<span className="text-brand">.</span>
        </Link>

        {/* Desktop nav — frosted glass tabs */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-[var(--duration-fast)] ease-entrance ${
                  isActive
                    ? "text-foreground bg-black/5"
                    : "text-foreground-muted hover:text-foreground hover:bg-black/3"
                }`}
                style={{ fontFeatureSettings: "'liga' 1", letterSpacing: "-0.01em" }}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-brand" />
                )}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="btn-primary ml-2 text-sm"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          className="flex h-9 w-9 items-center justify-center md:hidden rounded-lg bg-black/5"
          aria-label="Toggle navigation"
        >
          <div className="flex flex-col items-center gap-[3px]">
            <span className={`block h-[1.5px] w-4 bg-foreground rounded-full transition-transform duration-[var(--duration-fast)] ${mobileOpen ? "translate-y-[4.5px] rotate-45" : ""}`} />
            <span className={`block h-[1.5px] w-4 bg-foreground rounded-full transition-opacity duration-[var(--duration-fast)] ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-[1.5px] w-4 bg-foreground rounded-full transition-transform duration-[var(--duration-fast)] ${mobileOpen ? "-translate-y-[4.5px] -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu — frosted glass */}
      <animated.div
        style={mobileSpring}
        className="absolute left-3 right-3 top-16 rounded-2xl border border-border/60 bg-white/90 backdrop-blur-xl shadow-elevated md:hidden origin-top"
      >
        <div className="flex flex-col gap-0.5 px-4 py-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-3 text-sm rounded-lg transition-colors ${
                  isActive
                    ? "text-foreground bg-black/5 font-medium"
                    : "text-foreground-muted hover:text-foreground hover:bg-black/3"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="btn-primary mt-3 inline-flex w-full justify-center text-sm"
          >
            Get in Touch
          </Link>
        </div>
      </animated.div>
    </animated.header>
  );
}