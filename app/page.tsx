const cards = [
  {
    title: "Modern websites",
    body: "Fast, responsive sites built with Next.js, TypeScript, and Tailwind.",
  },
  {
    title: "AI integrations",
    body: "Practical AI tools and automations tailored for small & local businesses.",
  },
  {
    title: "Ongoing tech help",
    body: "Maintenance, automation, and the technical support that keeps things running.",
  },
];

const links = [
  {
    label: "GitHub",
    href: "https://github.com/WillDrain",
    primary: true,
  },
  {
    // TODO: replace {{YOUR_EMAIL}} with your real email address
    label: "Email",
    href: "mailto:{{YOUR_EMAIL}}",
    primary: false,
  },
  {
    // TODO: replace {{YOUR_IG_URL}} with your real Instagram URL
    label: "Instagram",
    href: "{{YOUR_IG_URL}}",
    primary: false,
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-col px-6 py-20 sm:px-8 sm:py-28">
      {/* HERO */}
      <section className="flex flex-col gap-4">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
          Will Drain
        </h1>
        <p className="text-lg font-medium text-indigo-600 sm:text-xl dark:text-indigo-400">
          I build fast, modern websites and AI tools for small businesses.
        </p>
        <p className="max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
          From first launch to ongoing improvements, I help local teams ship
          clean, reliable software that actually moves their business forward.
        </p>
      </section>

      {/* WHAT I DO */}
      <section className="mt-16 flex flex-col gap-4">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-500">
          What I do
        </h2>
        <ul className="flex flex-col gap-4">
          {cards.map((card) => (
            <li
              key={card.title}
              className="rounded-2xl border border-zinc-200 bg-white p-5 transition-colors hover:border-indigo-300 sm:p-6 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-indigo-700"
            >
              <h3 className="text-base font-semibold text-zinc-900 sm:text-lg dark:text-zinc-100">
                {card.title}
              </h3>
              <p className="mt-1.5 text-sm leading-6 text-zinc-600 sm:text-base dark:text-zinc-400">
                {card.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* LINKS */}
      <section className="mt-16 flex flex-col gap-4">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-500">
          Get in touch
        </h2>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={
                link.primary
                  ? "flex h-12 items-center justify-center rounded-full bg-indigo-600 px-6 text-sm font-medium text-white transition-colors hover:bg-indigo-500 sm:w-auto"
                  : "flex h-12 items-center justify-center rounded-full border border-zinc-300 px-6 text-sm font-medium text-zinc-800 transition-colors hover:border-indigo-400 hover:text-indigo-600 sm:w-auto dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
              }
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-xs text-zinc-400 dark:text-zinc-600">
          TODO: replace {"{{YOUR_EMAIL}}"} and {"{{YOUR_IG_URL}}"} above with your
          real details.
        </p>
      </section>
    </main>
  );
}
