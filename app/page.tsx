"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Code2,
  X,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4";

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
    tagline: "Full-stack restaurant reservation platform",
    body: "A full-stack reservation platform for a boardwalk restaurant concept, built with a relational database schema, Zod-validated bookings that enforce real business rules, and an authentication-protected admin dashboard. It also includes an AI concierge for questions about the menu, hours, and restaurant policies.",
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
    tagline: "Live site for a real local business",
    body: "A production marketing site built for a South Jersey pressure-washing business. The mobile-first experience includes a before-and-after gallery, customer reviews, click-to-call functionality, and LocalBusiness structured data for local search. The site is live and actively supporting the company's customer acquisition.",
    tech: ["Next.js", "TypeScript", "Tailwind", "SEO / JSON-LD"],
    live: "https://jonespressurewashnj.com",
    images: [
      { src: "/projects/jones-hero.png", alt: "Jones Pressure Washing homepage" },
    ],
  },
  {
    index: "03",
    title: "ReViewline",
    tagline: "Retrieval-augmented Q&A engine with automated evals",
    body: "A RAG pipeline that grounds LLM answers in source reviews using Voyage embeddings and pgvector retrieval. Claude generates answers with citations, while a deterministic evaluation suite catches unsupported and hallucinated citations before they ship.",
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

const toolkit = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL"] },
  { group: "Frontend", items: ["Next.js", "React", "Tailwind CSS"] },
  {
    group: "Backend & Data",
    items: ["Node.js", "Prisma", "Zod", "PostgreSQL", "pgvector", "Neon"],
  },
  {
    group: "AI",
    items: ["RAG", "Vector Search", "Anthropic API", "LLM Evaluation"],
  },
  { group: "Deployment", items: ["Vercel", "Cloudflare", "Git"] },
];

const socials = [
  { label: "GitHub", href: "https://github.com/WillDrain", Icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/william-drain",
    Icon: Linkedin,
  },
  { label: "Email", href: "mailto:drain.william@gmail.com", Icon: Mail },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-black text-white">
      {/* ============ HERO ============ */}
      <section className="relative flex h-screen w-full flex-col overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 z-0 h-full w-full object-cover"
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
        {/* Darkening overlays for legibility */}
        <div className="absolute inset-0 z-10 bg-black/50" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/20 to-black/40" />

        {/* Navbar */}
        <nav className="relative z-30 flex items-center justify-between px-6 py-5 sm:px-10 lg:px-16 lg:py-7">
          <a
            href="#"
            className="font-podium text-2xl font-bold uppercase tracking-wider text-white sm:text-3xl"
          >
            Will Drain
          </a>

          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-inter text-sm uppercase tracking-widest text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden items-center gap-2 border border-white/30 px-6 py-3 text-xs uppercase tracking-widest text-white transition-colors hover:border-white/60 hover:bg-white/10 md:inline-flex"
          >
            Get in touch
            <ArrowUpRight className="h-4 w-4" />
          </a>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="flex flex-col space-y-1.5 md:hidden"
          >
            <span className="h-0.5 w-6 bg-white" />
            <span className="h-0.5 w-6 bg-white" />
            <span className="h-0.5 w-4 bg-white" />
          </button>
        </nav>

        {/* Hero content */}
        <div className="relative z-20 flex flex-1 items-center px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            <div className="animate-fade-up mb-6 flex items-center gap-2 text-white/70 lg:mb-8">
              <Code2 className="h-4 w-4" />
              <span className="font-inter text-xs uppercase tracking-[0.3em] sm:text-sm">
                Full-Stack Developer
              </span>
            </div>

            <h1 className="animate-fade-up-delay-1 font-podium uppercase leading-[0.92] tracking-tight text-white">
              <span className="block text-[clamp(2.8rem,8vw,7rem)]">Learn.</span>
              <span className="block text-[clamp(2.8rem,8vw,7rem)]">Solve.</span>
              <span className="block text-[clamp(2.8rem,8vw,7rem)]">Build.</span>
            </h1>

            <p className="animate-fade-up-delay-2 mt-6 max-w-md font-inter text-sm leading-relaxed text-white/70 sm:text-base lg:mt-8">
              I build and ship full-stack web applications, combining thoughtful
              engineering with practical AI that{" "}
              <span className="font-semibold text-white">
                solves real problems.
              </span>
            </p>

            <div className="animate-fade-up-delay-3 mt-8 flex flex-wrap items-center gap-4 sm:gap-6 lg:mt-10">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 bg-black px-5 py-3 text-[11px] font-semibold uppercase tracking-widest text-white transition-colors hover:bg-neutral-900 sm:px-7 sm:py-4 sm:text-xs"
              >
                See my work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <div className="hidden items-center gap-3 text-white/60 sm:flex">
                <Code2 className="h-8 w-8 text-white/40" />
                <div className="text-xs uppercase tracking-wider">
                  Next.js · TypeScript · Practical AI
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MOBILE MENU ============ */}
      <div
        className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-sm transition-all duration-500 md:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5">
          <span className="font-podium text-2xl font-bold uppercase tracking-wider text-white">
            Will Drain
          </span>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-7 w-7 text-white" />
          </button>
        </div>

        <div className="flex h-[calc(100%-5rem)] flex-col items-start justify-center gap-6 px-6">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                transitionDelay: `${i * 80 + 100}ms`,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              }}
              className="font-podium text-4xl uppercase text-white transition-all duration-500 sm:text-5xl"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              transitionDelay: `${navLinks.length * 80 + 100}ms`,
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(20px)",
            }}
            className="mt-4 inline-flex items-center gap-2 border border-white/30 px-6 py-3 text-xs uppercase tracking-widest text-white transition-all duration-500"
          >
            Get in touch
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* ============ WORK ============ */}
      <section id="work" className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 font-inter text-xs uppercase tracking-[0.3em] text-white/40">
            Selected Work
          </p>
          <h2 className="mb-12 font-podium text-[clamp(2rem,5vw,3.5rem)] uppercase tracking-tight text-white lg:mb-16">
            Things I&apos;ve Built
          </h2>

          <div className="flex flex-col">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group border-t border-white/10 py-10"
              >
                <div className="grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-start md:gap-10">
                <span className="font-podium text-2xl text-white/25">
                  {project.index}
                </span>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-podium text-2xl uppercase text-white sm:text-3xl">
                      {project.title}
                    </h3>
                    {project.status && (
                      <span className="rounded-full border border-white/25 px-2.5 py-0.5 text-[10px] uppercase tracking-widest text-white/60">
                        {project.status}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm uppercase tracking-wider text-white/40">
                    {project.tagline}
                  </p>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
                    {project.body}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <li
                        key={t}
                        className="border border-white/15 px-2.5 py-1 text-xs text-white/60"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-5 md:flex-col md:items-end md:gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:text-white/60"
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
                      className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:text-white/60"
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
                      className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:text-white/60"
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
                        className="aspect-[2/1] overflow-hidden rounded-lg border border-white/10 bg-black/30 transition-colors group-hover:border-white/20"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={img.src}
                          alt={img.alt}
                          loading="lazy"
                          className="h-full w-full object-contain"
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
        className="border-t border-white/10 px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
      >
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <p className="mb-4 font-inter text-xs uppercase tracking-[0.3em] text-white/40">
              About
            </p>
            <h2 className="font-podium text-[clamp(2rem,5vw,3.5rem)] uppercase leading-none tracking-tight text-white">
              Who I Am
            </h2>
          </div>

          <div className="space-y-6 text-sm leading-relaxed text-white/70 sm:text-base">
            <p>
              I&apos;m Will Drain, a software developer with a{" "}
              <span className="text-white">
                B.S. in Computer Science from Rowan University
              </span>
              . I build and ship full-stack web applications with practical AI,
              designing systems from the database layer through production
              deployment.
            </p>
            <p>
              I got into software because I enjoy understanding how things work
              and using that knowledge to solve real problems. I&apos;m
              especially interested in practical AI, including RAG, embeddings,
              vector search, and LLM evaluation. The projects I enjoy most are
              the ones that force me to learn something new.
            </p>
            <p>
              I put myself through my degree working a{" "}
              <span className="text-white">range of hands-on jobs</span>{" "}
              including restaurants, bars, golf courses, and blue-collar work.
              Years of showing up and getting the job done under pressure taught
              me ownership, communication, and composure—the same qualities I now
              bring to engineering.
            </p>

            <div className="pt-2">
              <p className="mb-4 text-xs uppercase tracking-widest text-white/40">
                Toolkit
              </p>
              <div className="space-y-4">
                {toolkit.map((cat) => (
                  <div
                    key={cat.group}
                    className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4"
                  >
                    <span className="shrink-0 text-xs uppercase tracking-widest text-white/40 sm:w-32">
                      {cat.group}
                    </span>
                    <ul className="flex flex-wrap gap-2">
                      {cat.items.map((item) => (
                        <li
                          key={item}
                          className="border border-white/15 px-3 py-1 text-xs text-white/70"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section
        id="contact"
        className="border-t border-white/10 px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 font-inter text-xs uppercase tracking-[0.3em] text-white/40">
            Get in touch
          </p>
          <h2 className="font-podium text-[clamp(2.2rem,6vw,4.5rem)] uppercase tracking-tight text-white">
            Let&apos;s connect
          </h2>

          <a
            href="mailto:drain.william@gmail.com"
            className="mt-8 inline-flex items-center gap-2 border border-white/30 px-8 py-4 text-sm uppercase tracking-widest text-white transition-colors hover:border-white/60 hover:bg-white/10"
          >
            drain.william@gmail.com
            <ArrowUpRight className="h-4 w-4" />
          </a>

          <div className="mt-12 flex items-center justify-center gap-6">
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
                  className="text-white/60 transition-colors hover:text-white"
                >
                  <Icon className="h-6 w-6" />
                </a>
              );
            })}
          </div>
        </div>

        <footer className="mt-20 text-center text-xs text-white/30">
          © 2026 Will Drain
        </footer>
      </section>
    </main>
  );
}
