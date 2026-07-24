"use client";

interface VideoHeroProps {
  videoSrc: string;
  posterSrc: string;
  children: React.ReactNode;
  brightness?: number;
}

export function VideoHero({ videoSrc, posterSrc, children, brightness = 0.9 }: VideoHeroProps) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Video background — visible and vibrant */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={posterSrc}
        className="absolute inset-0 h-full w-full object-cover scale-105"
        style={{ filter: `brightness(${brightness}) saturate(1.1)` }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Subtle vignette overlay — just enough for text readability */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.4) 60%, rgba(255,255,255,0.9) 100%)
        `
      }} />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-content px-6 text-center md:px-10">
        {children}
      </div>
    </section>
  );
}