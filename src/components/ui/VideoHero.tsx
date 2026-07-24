"use client";

interface VideoHeroProps {
  videoSrc: string;
  posterSrc: string;
  children: React.ReactNode;
  gradient?: string;
}

export function VideoHero({ videoSrc, posterSrc, children, gradient = "from-[#08090a]/90 via-[#08090a]/60 to-[#08090a]/90" }: VideoHeroProps) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={posterSrc}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ filter: "brightness(0.6)" }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Gradient overlays */}
      <div className={`absolute inset-0 bg-gradient-to-b ${gradient}`} />
      <div className="absolute inset-0" style={{
        background: "linear-gradient(180deg, transparent 0%, rgba(8,9,10,0.4) 50%, rgba(8,9,10,0.95) 100%)"
      }} />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-content px-6 text-center md:px-10">
        {children}
      </div>
    </section>
  );
}