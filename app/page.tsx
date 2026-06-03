import QuoteTicker from "@/components/QuoteTicker";
import quotes from "@/data/quotes.json";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/WillDrain",
    icon: (
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.36 9.36 0 0 1 2.5-.34c.85 0 1.71.12 2.5.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/william-drain",
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
  {
    label: "X",
    href: "https://x.com/WillDoesTechno",
    icon: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z" />
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/Will_Drain",
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1.2" />
      </>
    ),
  },
  {
    label: "Email",
    href: "mailto:drain.william@gmail.com",
    icon: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </>
    ),
  },
];

const offerings = [
  {
    title: "Modern websites",
    body: "Fast, responsive sites built with Next.js, TypeScript, and Tailwind — designed to look great and load quickly.",
  },
  {
    title: "AI integrations",
    body: "Practical AI tools and automations tailored to how small and local businesses actually work.",
  },
  {
    title: "Ongoing tech help",
    body: "Maintenance, automation, and friendly technical support that keeps everything running smoothly.",
  },
];

export default function Home() {
  // Single quote for now. To rotate by date later, e.g.:
  // const quote = quotes[dayOfYear % quotes.length];
  const quote = quotes[0];

  return (
    <main className="mx-auto flex w-full max-w-2xl flex-col items-center px-6 py-20 sm:py-28">
      {/* WORDMARK HEADER */}
      <h1 className="text-center text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl">
        Will Drain
      </h1>

      {/* TAGLINE */}
      <p className="mt-3 text-center text-base text-muted sm:text-lg">
        Web &amp; AI for small businesses.
      </p>

      {/* SOCIAL LINKS */}
      <div className="mt-6 flex items-center justify-center gap-5">
        {socials.map((social) => {
          const external = social.href.startsWith("http");
          return (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              title={social.label}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="text-primary transition-colors hover:text-accent"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {social.icon}
              </svg>
            </a>
          );
        })}
      </div>

      {/* QUOTE OF THE DAY — LED ticker */}
      <QuoteTicker text={quote.text} author={quote.author} />

      {/* WHAT I DO */}
      <section className="mt-16 w-full">
        <p className="text-center text-base leading-relaxed text-muted">
          Hi, I&apos;m Will. I help small and local businesses get online and
          stay there — building modern websites, adding AI where it actually
          helps, and sticking around for the day-to-day tech stuff.
        </p>

        <ul className="mt-8 flex flex-col gap-4">
          {offerings.map((offering) => (
            <li
              key={offering.title}
              className="rounded-xl border border-border bg-surface p-5 transition-colors hover:border-secondary sm:p-6"
            >
              <h2 className="text-lg font-semibold text-foreground">
                {offering.title}
              </h2>
              <p className="mt-1.5 text-sm leading-6 text-muted sm:text-base">
                {offering.body}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
