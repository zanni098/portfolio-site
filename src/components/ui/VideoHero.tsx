"use client";

interface VideoHeroProps {
  videoSrc: string;
  posterSrc: string;
  children: React.ReactNode;
  brightness?: number;
}

export function VideoHero({ videoSrc, posterSrc, children, brightness = 0.85 }: VideoHeroProps) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Video background — more visible now */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={posterSrc}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ filter: `brightness(${brightness})` }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Light gradient overlay — subtle, keeps video visible */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-content px-6 text-center md:px-10">
        {children}
      </div>
    </section>
  );
}