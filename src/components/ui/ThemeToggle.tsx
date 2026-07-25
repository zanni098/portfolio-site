"use client";

import { useCallback, useEffect, useState } from "react";

export type Theme = "dark" | "light";

const STORAGE_KEY = "theme";

function readTheme(): Theme {
  const attr = document.documentElement.dataset.theme;
  return attr === "light" ? "light" : "dark";
}

function applyTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

/**
 * Dark / light switch.
 *
 * The initial value is stamped onto <html> by the inline script in layout.tsx
 * before first paint, so this component only mirrors and mutates it — it never
 * decides the theme on mount, which is what would cause a flash.
 */
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme(readTheme());
    setMounted(true);
  }, []);

  // Follow the OS while the visitor has not made an explicit choice.
  useEffect(() => {
    const query = window.matchMedia("(prefers-color-scheme: light)");
    const onChange = (event: MediaQueryListEvent) => {
      if (localStorage.getItem(STORAGE_KEY)) return;
      const next: Theme = event.matches ? "light" : "dark";
      applyTheme(next);
      setTheme(next);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const toggle = useCallback(() => {
    setTheme((current) => {
      const next: Theme = current === "dark" ? "light" : "dark";
      applyTheme(next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // Storage unavailable (private mode, blocked cookies) — the toggle
        // still works for this page view, it just will not persist.
      }
      return next;
    });
  }, []);

  const nextLabel = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${nextLabel} theme`}
      title={`Switch to ${nextLabel} theme`}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--radius-button)] text-foreground-secondary shadow-border transition-colors duration-[var(--duration-fast)] ease-entrance hover:bg-background-hover hover:text-foreground"
    >
      {/* Rendered only after mount so SSR markup cannot disagree with the
          theme the inline script already applied. */}
      {mounted && (
        <svg
          width="17"
          height="17"
          viewBox="0 0 15 15"
          fill="none"
          aria-hidden="true"
        >
          {theme === "dark" ? (
            <path
              d="M13 8.9A5.6 5.6 0 1 1 6.1 2a4.9 4.9 0 0 0 6.9 6.9Z"
              stroke="currentColor"
              strokeWidth="1.45"
              strokeLinejoin="round"
            />
          ) : (
            <g stroke="currentColor" strokeWidth="1.45" strokeLinecap="round">
              <circle cx="7.5" cy="7.5" r="3" />
              <path d="M7.5 1v1.4M7.5 12.6V14M14 7.5h-1.4M2.4 7.5H1M12.1 2.9l-1 1M3.9 11.1l-1 1M12.1 12.1l-1-1M3.9 3.9l-1-1" />
            </g>
          )}
        </svg>
      )}
    </button>
  );
}
