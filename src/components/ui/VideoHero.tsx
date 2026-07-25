"use client";

import { useEffect, useState } from "react";

type HeroAlign = "left" | "center";

interface VideoHeroProps {
  videoSrc: string;
  posterSrc: string;
  children: React.ReactNode;
  /**
   * Where the copy sits. Choose the side the footage leaves empty — the arch in
   * `flower-arc` owns the right third, the shaft in `sea-storm` owns the centre.
   */
  align?: HeroAlign;
  /**
   * `object-position` for the footage. On portrait viewports `object-cover`
   * crops a 16:9 master hard toward its centre, which can push the subject
   * entirely out of frame — point this at the subject instead. Has almost no
   * effect on wide viewports, where the crop is vertical.
   */
  focal?: string;
  /** Accessible description of the footage for the decorative video element. */
  label?: string;
}

const ALIGN_CLASS: Record<HeroAlign, string> = {
  left: "items-start text-left",
  center: "items-center text-center",
};

/**
 * Full-bleed cinematic fold.
 *
 * The footage plays at full saturation with no colour filter. Legibility comes
 * from a bottom-anchored linear scrim plus a directional side scrim, so the
 * upper two-thirds of every frame stays untouched. The previous implementation
 * laid a radial `rgba(255,255,255,0.85→0.9)` wash across the whole frame, which
 * bleached the dark 4K masters to grey.
 */
export function VideoHero({
  videoSrc,
  posterSrc,
  children,
  align = "left",
  focal = "center",
  label,
}: VideoHeroProps) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  return (
    <section
      aria-label={label}
      className="relative flex min-h-[100svh] flex-col justify-end overflow-clip"
    >
      {reducedMotion ? (
        <div
          role="img"
          aria-label={label}
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: `url(${posterSrc})`,
            backgroundPosition: focal,
          }}
        />
      ) : (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={posterSrc}
          aria-hidden="true"
          tabIndex={-1}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: focal }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* Bottom-anchored scrim — carries all the legibility work */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, oklch(11% 0.010 265 / 0.92) 0%, oklch(11% 0.010 265 / 0.72) 22%, oklch(11% 0.010 265 / 0.18) 48%, transparent 72%)",
        }}
      />

      {/* Directional scrim — only on the side the copy occupies */}
      {align === "left" && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, oklch(11% 0.010 265 / 0.62) 0%, oklch(11% 0.010 265 / 0.22) 38%, transparent 62%)",
          }}
        />
      )}

      {/* Hairline that hands the fold over to the page below */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-border-strong"
      />

      <div className="on-film relative z-10 w-full px-[var(--page-gutter)] pb-20 md:pb-28">
        <div
          className={`mx-auto flex w-full max-w-content flex-col ${ALIGN_CLASS[align]}`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
