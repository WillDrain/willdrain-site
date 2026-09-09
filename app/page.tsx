"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, X, Github, Linkedin, Mail } from "lucide-react";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4";

const HERO_POSTER = "/hero-psychedelic-dawn.png";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

type Project = {
  index: string;
  title: string;
  tagline: string;
  body: string;
  tech: string[];
  live?: string;
  code?: string;
  writeup?: string;
  status?: string;
  images?: { src: string; alt: string }[];
};

const projects: Project[] = [
  {
    index: "01",
    title: "Tide & Table",
    tagline: "Boardwalk reservation system",
    body: "Real rules, admin dashboard, AI concierge that stays on the menu.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Zod"],
    live: "https://restaurant-concept-demo.vercel.app/",
    code: "https://github.com/WillDrain/restaurant-concept-demo",
    images: [
      { src: "/projects/tide-home.png", alt: "Tide & Table homepage" },
      {
        src: "/projects/tide-booking.png",
        alt: "Tide & Table reservation booking form",
      },
      {
        src: "/projects/tide-admin.png",
        alt: "Tide & Table admin reservations dashboard",
      },
    ],
  },
  {
    index: "02",
    title: "Jones Pressure Washing",
    tagline: "South Jersey, live",
    body: "Live site for a South Jersey business. Gallery, reviews, click-to-call, local SEO. Still bringing in work.",
    tech: ["Next.js", "TypeScript", "Tailwind", "SEO / JSON-LD"],
    live: "https://jonespressurewashnj.com",
    images: [
      { src: "/projects/jones-hero.png", alt: "Jones Pressure Washing homepage" },
    ],
  },
  {
    index: "03",
    title: "ReViewline",
    tagline: "RAG over real reviews",
    body: "RAG over real reviews with evals that catch hallucinated citations before they ship.",
    tech: ["RAG", "pgvector", "Embeddings", "Anthropic API", "Evals"],
    writeup: "https://lnkd.in/p/eugrXHCX",
    status: "In progress",
    images: [
      {
        src: "/projects/reviewline-grounded.png",
        alt: "ReViewline grounded answer citing real customer reviews",
      },
      {
        src: "/projects/reviewline-refusal.png",
        alt: "ReViewline refusing to answer when the reviews lack evidence",
      },
    ],
  },
];

function XLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.725-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socials = [
  { label: "Email", href: "mailto:drain.william@gmail.com", Icon: Mail },
  { label: "GitHub", href: "https://github.com/WillDrain", Icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/william-drain",
    Icon: Linkedin,
  },
  { label: "X", href: "https://x.com/WillDoesTechno", Icon: XLogo },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <main className="bg-night text-foreground">
      {/* ============ HERO ============ */}
      <section className="hero-stage relative flex h-screen w-full flex-col overflow-hidden">
        <Image
          src={HERO_POSTER}
          alt=""
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 z-0 object-cover object-[78%_center]"
        />

        {!videoFailed && (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={HERO_POSTER}
            aria-hidden="true"
            className="hero-video absolute inset-0 z-[1] h-full w-full object-cover object-[78%_center]"
            onError={() => setVideoFailed(true)}
          >
            <source src={VIDEO_URL} type="video/mp4" />
          </video>
        )}

        <div className="hero-multiply pointer-events-none absolute inset-0 z-10" />
        <div className="hero-dawn pointer-events-none absolute inset-0 z-10" />
        <div className="hero-fringe pointer-events-none absolute inset-0 z-10" />
        <div className="hero-scrim pointer-events-none absolute inset-0 z-10" />

        {/* Navbar */}
        <nav className="relative z-30 flex items-center justify-between px-6 py-5 sm:px-10 lg:px-16 lg:py-7">
          <a
            href="#"
            className="font-podium text-xl tracking-tight text-foreground sm:text-2xl"
          >
            Will Drain
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-inter text-sm text-foreground/70 transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden items-center gap-2 border border-foreground/20 px-4 py-2 text-sm text-foreground/85 transition-colors hover:border-dawn/50 hover:text-foreground md:inline-flex"
          >
            Get in touch
            <ArrowUpRight className="h-4 w-4" />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="flex flex-col space-y-1.5 md:hidden"
          >
            <span className="h-0.5 w-6 bg-foreground" />
            <span className="h-0.5 w-6 bg-foreground" />
            <span className="h-0.5 w-4 bg-foreground" />
          </button>
        </nav>

        {/* Hero content */}
        <div className="relative z-20 flex flex-1 items-center px-6 sm:px-10 lg:px-16">
          <div className="animate-fade-in max-w-3xl">
            <h1 className="font-podium leading-[1.08] tracking-tight text-foreground">
              <span className="block text-[clamp(1.85rem,5.4vw,4.4rem)]">
                Notes on books.
              </span>
              <span className="block text-[clamp(1.85rem,5.4vw,4.4rem)]">
                Takes on ideas.
              </span>
              <span className="block text-[clamp(1.85rem,5.4vw,4.4rem)] text-foreground/80">
                The occasional build.
              </span>
            </h1>

            <p className="mt-6 max-w-md text-pretty font-inter text-sm leading-relaxed text-muted sm:text-base lg:mt-8">
              Full-stack when it ships. Practical AI when it earns its keep. The
              rest is reading.
            </p>

            <a
              href="#work"
              className="group mt-8 inline-flex items-center gap-2 border border-foreground/20 px-5 py-2.5 text-sm text-foreground/90 transition-colors hover:border-dawn/50 hover:text-foreground lg:mt-10"
            >
              See the work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ============ MOBILE MENU ============ */}
      <div
        className={`fixed inset-0 z-50 bg-night/95 backdrop-blur-sm transition-all duration-500 md:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5">
          <span className="font-podium text-xl tracking-tight text-foreground">
            Will Drain
          </span>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-7 w-7 text-foreground" />
          </button>
        </div>

        <div className="flex h-[calc(100%-5rem)] flex-col items-start justify-center gap-6 px-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-podium text-4xl text-foreground sm:text-5xl"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-flex items-center gap-2 border border-foreground/25 px-5 py-2.5 text-sm text-foreground"
          >
            Get in touch
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* ============ WORK ============ */}
      <section id="work" className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 font-podium text-[clamp(2rem,4.5vw,3.25rem)] tracking-tight text-foreground lg:mb-16">
            Work
          </h2>

          <div className="flex flex-col">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group border-t border-foreground/10 py-10"
              >
                <div className="grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-start md:gap-10">
                  <span className="font-podium text-xl text-dawn/40">
                    {project.index}
                  </span>

                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-podium text-2xl text-foreground sm:text-3xl">
                        {project.title}
                      </h3>
                      {project.status && (
                        <span className="border border-foreground/20 px-2 py-0.5 text-[11px] text-muted">
                          {project.status}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-muted">{project.tagline}</p>
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground/75 sm:text-base">
                      {project.body}
                    </p>
                    <p className="mt-4 text-xs text-muted/80">
                      {project.tech.join(" · ")}
                    </p>
                  </div>

                  <div className="flex gap-5 md:flex-col md:items-end md:gap-3">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-foreground/85 transition-colors hover:text-dawn"
                      >
                        Visit
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                    {project.code && (
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-foreground/85 transition-colors hover:text-dawn"
                      >
                        Code
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                    {project.writeup && (
                      <a
                        href={project.writeup}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-foreground/85 transition-colors hover:text-dawn"
                      >
                        Writeup
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                {project.images && (
                  <div
                    className={`mt-8 grid gap-4 ${
                      project.images.length === 1
                        ? "grid-cols-1"
                        : project.images.length === 2
                          ? "grid-cols-1 sm:grid-cols-2"
                          : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                    }`}
                  >
                    {project.images.map((img) => (
                      <div
                        key={img.src}
                        className="relative aspect-[2/1] overflow-hidden border border-foreground/10 bg-night/40 transition-colors group-hover:border-dawn/25"
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section
        id="about"
        className="border-t border-foreground/10 px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
      >
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <h2 className="font-podium text-[clamp(2rem,4.5vw,3.25rem)] leading-none tracking-tight text-foreground">
              About
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-relaxed text-foreground/75 sm:text-base">
            <p>
              Will Drain. Rowan CS. Years in kitchens, bars, and blue-collar
              jobs before the degree — composure under pressure, then code.
            </p>
            <p>
              Interested in practical AI: RAG, embeddings, evals. Reader-writer
              with a technical mind. Books and ideas first; builds as proof.
            </p>
            <p className="text-muted">
              The notebook fills first. The repo follows.
            </p>
            <p className="pt-4 text-xs tracking-wide text-muted">
              Next.js · TypeScript · Postgres · practical AI
            </p>
          </div>
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section
        id="contact"
        className="border-t border-foreground/10 px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="font-podium text-[clamp(2rem,4.5vw,3.25rem)] tracking-tight text-foreground">
            Contact
          </h2>

          <a
            href="mailto:drain.william@gmail.com"
            className="mt-8 inline-flex items-center gap-2 text-base text-foreground/90 transition-colors hover:text-dawn sm:text-lg"
          >
            drain.william@gmail.com
            <ArrowUpRight className="h-4 w-4" />
          </a>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            {socials.map(({ label, href, Icon }) => {
              const external = href.startsWith("http");
              return (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  title={label}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </a>
              );
            })}
          </div>
        </div>

        <footer className="mx-auto mt-20 max-w-6xl text-xs text-muted/60">
          © 2026 Will Drain
        </footer>
      </section>
    </main>
  );
}
