"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { animated, useSpring } from "@react-spring/web";

interface NavChild {
  href: string;
  label: string;
  hint: string;
}

interface NavItem {
  label: string;
  href?: string;
  children?: readonly NavChild[];
}

/**
 * Four groups instead of nine flat links. Every original route stays reachable —
 * only the header collapses.
 */
const NAV_ITEMS: readonly NavItem[] = [
  {
    label: "Work",
    children: [
      { href: "/projects", label: "Projects", hint: "Agent tooling, infra, apps" },
      { href: "/opensource", label: "Open Source", hint: "Contributions and authored repos" },
      { href: "/films", label: "Films", hint: "Generative filmmaking" },
    ],
  },
  {
    label: "About",
    children: [
      { href: "/about", label: "About", hint: "Background and focus" },
      { href: "/experience", label: "Experience", hint: "Roles and engagements" },
      { href: "/certifications", label: "Certifications", hint: "Credentials and courses" },
    ],
  },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

const GROUP_ROUTES: Record<string, readonly string[]> = {
  Work: ["/projects", "/opensource", "/films"],
  About: ["/about", "/experience", "/certifications"],
};

function isGroupActive(label: string, pathname: string): boolean {
  return GROUP_ROUTES[label]?.includes(pathname) ?? false;
}

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close everything when the route changes.
  useEffect(() => {
    setOpenGroup(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpenGroup(null);
      setMobileOpen(false);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current) return;
      if (headerRef.current.contains(event.target as Node)) return;
      setOpenGroup(null);
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  // Solid paper on scroll — no backdrop blur; glassmorphism is out of register.
  const barSpring = useSpring({
    backgroundColor: scrolled
      ? "oklch(11% 0.010 265 / 0.94)"
      : "oklch(11% 0.010 265 / 0)",
    boxShadow: scrolled
      ? "0 1px 0 0 oklch(96% 0.004 265 / 0.11)"
      : "0 1px 0 0 oklch(96% 0.004 265 / 0)",
    config: { tension: 280, friction: 32 },
  });

  const mobileSpring = useSpring({
    opacity: mobileOpen ? 1 : 0,
    config: { tension: 300, friction: 30 },
  });

  const toggleGroup = useCallback((label: string) => {
    setOpenGroup((current) => (current === label ? null : label));
  }, []);

  return (
    <animated.header
      ref={headerRef}
      style={barSpring}
      className="fixed inset-x-0 top-0 z-50"
    >
      {/* N9 · edge-aligned — wordmark hard left, links hard right, no container */}
      <nav
        aria-label="Primary"
        className="flex h-16 items-center justify-between px-[var(--page-gutter)]"
      >
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-foreground transition-colors duration-[var(--duration-fast)] ease-entrance hover:text-brand"
        >
          asad<span className="text-brand">.</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => {
            if (!item.children) {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href ?? "/"}
                  aria-current={active ? "page" : undefined}
                  className={`whitespace-nowrap rounded-[var(--radius-button)] px-3 py-2 text-sm transition-colors duration-[var(--duration-fast)] ease-entrance ${
                    active
                      ? "text-foreground"
                      : "text-foreground-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            }

            const open = openGroup === item.label;
            const active = isGroupActive(item.label, pathname);
            const panelId = `nav-panel-${item.label.toLowerCase()}`;

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenGroup(item.label)}
                onMouseLeave={() => setOpenGroup(null)}
              >
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => toggleGroup(item.label)}
                  className={`whitespace-nowrap rounded-[var(--radius-button)] px-3 py-2 text-sm transition-colors duration-[var(--duration-fast)] ease-entrance ${
                    active || open
                      ? "text-foreground"
                      : "text-foreground-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                </button>

                {open && (
                  <div
                    id={panelId}
                    className="absolute right-0 top-full w-72 pt-2"
                  >
                    <div className="overflow-hidden rounded-[var(--radius-card)] bg-background-elevated shadow-elevated">
                      {item.children.map((child) => {
                        const childActive = pathname === child.href;
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            aria-current={childActive ? "page" : undefined}
                            className={`block border-b border-border-subtle px-4 py-3 last:border-b-0 transition-colors duration-[var(--duration-fast)] ease-entrance hover:bg-background-hover ${
                              childActive ? "bg-background-hover" : ""
                            }`}
                          >
                            <span className="block text-sm text-foreground">
                              {child.label}
                            </span>
                            <span className="mt-0.5 block text-xs text-foreground-subtle">
                              {child.hint}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          <Link href="/contact" className="btn-primary ml-3">
            Get in touch
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-controls="nav-mobile"
          aria-label="Toggle navigation"
          className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-button)] shadow-border md:hidden"
        >
          <span className="flex flex-col items-center gap-[4px]">
            <span
              className={`block h-px w-4 bg-foreground transition-transform duration-200 ease-out ${
                mobileOpen ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-4 bg-foreground transition-opacity duration-200 ease-out ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-4 bg-foreground transition-transform duration-200 ease-out ${
                mobileOpen ? "-translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <animated.div
        id="nav-mobile"
        style={mobileSpring}
        hidden={!mobileOpen}
        className="border-t border-border bg-background px-[var(--page-gutter)] pb-8 pt-6 md:hidden"
      >
        {NAV_ITEMS.map((item) => (
          <div key={item.label} className="mb-6 last:mb-0">
            {item.children ? (
              <>
                <p className="eyebrow mb-3">{item.label}</p>
                <div className="flex flex-col">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      aria-current={pathname === child.href ? "page" : undefined}
                      className={`border-b border-border-subtle py-3 text-sm last:border-b-0 ${
                        pathname === child.href
                          ? "text-foreground"
                          : "text-foreground-muted"
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <Link
                href={item.href ?? "/"}
                aria-current={pathname === item.href ? "page" : undefined}
                className={`block py-1 text-sm ${
                  pathname === item.href
                    ? "text-foreground"
                    : "text-foreground-muted"
                }`}
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}

        <Link href="/contact" className="btn-primary mt-2 flex w-full">
          Get in touch
        </Link>
      </animated.div>
    </animated.header>
  );
}
