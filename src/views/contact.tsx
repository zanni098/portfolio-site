"use client";

import { useState } from "react";
import { Inview } from "@/components/animation/springs/in-view";
import { siteConfig } from "@/lib/site";

const socialLinks = [
  { name: "GitHub", url: siteConfig.social.github, handle: "zanni098" },
  { name: "LinkedIn", url: siteConfig.social.linkedin, handle: "asad-jehan-zeb" },
  { name: "Contra", url: siteConfig.social.contra, handle: "Zucchhini" },
  { name: "Medium", url: siteConfig.social.medium, handle: "zuhaibkhann098" },
  { name: "YouTube", url: siteConfig.social.youtube, handle: "TheBoringStudio" },
  { name: "Twitter / X", url: siteConfig.social.twitter, handle: "User1013106" },
];

export function ContactView() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API endpoint
    setSubmitted(true);
  };

  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <Inview from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0 }} mode="once">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand">
              Contact
            </p>
            <h1 className="mt-4 text-4xl font-medium leading-display tracking-tight md:text-5xl lg:text-6xl">
              Get in{" "}
              <span className="gradient-text">touch</span>.
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-foreground-muted">
              Open to freelance projects, collaborations, and opportunities in
              AI engineering, agent development, and creative technology.
            </p>
          </Inview>
        </div>
      </section>

      <section className="mx-auto max-w-content px-6 pb-20 md:px-10 md:pb-28">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Form */}
          <Inview from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0 }} mode="once">
            {submitted ? (
              <div className="flex h-full items-center justify-center rounded-2xl border border-border bg-surface-card p-8">
                <div className="text-center">
                  <div className="text-4xl">✓</div>
                  <h3 className="mt-4 text-lg font-medium">Message Sent</h3>
                  <p className="mt-2 text-sm text-foreground-muted">
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground-muted"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, name: e.target.value }))
                    }
                    className="mt-2 w-full rounded-xl border border-border bg-surface-card px-4 py-3 text-sm text-foreground placeholder:text-foreground-subtle transition-colors duration-[var(--duration-fast)] ease-entrance focus:border-foreground-muted focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground-muted"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, email: e.target.value }))
                    }
                    className="mt-2 w-full rounded-xl border border-border bg-surface-card px-4 py-3 text-sm text-foreground placeholder:text-foreground-subtle transition-colors duration-[var(--duration-fast)] ease-entrance focus:border-foreground-muted focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground-muted"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, message: e.target.value }))
                    }
                    className="mt-2 w-full resize-none rounded-xl border border-border bg-surface-card px-4 py-3 text-sm text-foreground placeholder:text-foreground-subtle transition-colors duration-[var(--duration-fast)] ease-entrance focus:border-foreground-muted focus:outline-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-full bg-brand px-6 py-3 text-sm font-medium text-foreground-inverse transition-all duration-[var(--duration-fast)] ease-entrance hover:bg-brand-hover"
                >
                  Send Message
                </button>
              </form>
            )}
          </Inview>

          {/* Info */}
          <Inview
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
            mode="once"
            delayIn={150}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-medium uppercase tracking-widest text-foreground-muted">
                  Location
                </h3>
                <p className="mt-2 text-foreground">{siteConfig.location}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium uppercase tracking-widest text-foreground-muted">
                  Availability
                </h3>
                <p className="mt-2 text-foreground">
                  {siteConfig.available
                    ? "Available for freelance and collaboration"
                    : "Currently unavailable"}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium uppercase tracking-widest text-foreground-muted">
                  Connect
                </h3>
                <div className="mt-4 space-y-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-xl border border-border bg-surface-card px-4 py-3 transition-all duration-[var(--duration-fast)] ease-entrance hover:border-foreground-muted"
                    >
                      <span className="text-sm font-medium">{link.name}</span>
                      <span className="text-xs text-foreground-muted transition-colors group-hover:text-foreground">
                        {link.handle} →
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Inview>
        </div>
      </section>
    </>
  );
}