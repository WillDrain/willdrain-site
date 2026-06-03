import { Share_Tech_Mono } from "next/font/google";

const ledFont = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
  fallback: ["ui-monospace", "monospace"],
});

// One full right-to-left pass. Tune here (also exposed as the --qt-duration CSS var).
const TICKER_DURATION = "30s";

type QuoteTickerProps = {
  text: string;
  author: string;
};

export default function QuoteTicker({ text, author }: QuoteTickerProps) {
  const message = `${text} — ${author}`;
  const itemClass = `qt-item ${ledFont.className} px-8 text-base uppercase tracking-[0.2em] sm:text-lg`;

  return (
    <div className="my-14">
      <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-secondary">
        Quote of the Day
      </p>
      <section
        aria-label="Quote of the day"
        className="qt-band relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-border bg-black py-2.5"
        style={{ "--qt-duration": TICKER_DURATION } as React.CSSProperties}
      >
        <div className="qt-track flex w-max">
          <span className={itemClass}>{message}</span>
          <span className={itemClass} aria-hidden="true">
            {message}
          </span>
        </div>

        <style>{`
        .qt-item {
          color: #ff1a1a;
          white-space: nowrap;
          text-shadow: 0 0 4px rgba(255, 26, 26, 0.7), 0 0 12px rgba(255, 26, 26, 0.5);
        }
        .qt-track {
          animation: qt-scroll var(--qt-duration, 30s) linear infinite;
          will-change: transform;
        }
        .qt-band:hover .qt-track {
          animation-play-state: paused;
        }
        @keyframes qt-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .qt-track {
            animation: none;
            transform: none;
          }
        }
      `}</style>
      </section>
    </div>
  );
}
