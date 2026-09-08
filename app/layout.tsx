import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Will Drain",
  description:
    "Notes on books. Takes on ideas. The occasional build. Full-stack when it ships. Practical AI when it earns its keep.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        {/* PODIUM display font for the brand + headings */}
        <link
          rel="stylesheet"
          href="https://db.onlinewebfonts.com/c/8b75d9dcff6a48c35a46656192adf019?family=FSP+DEMO+-+PODIUM+Sharp+4.11"
        />
      </head>
      <body className="min-h-full bg-night">{children}</body>
    </html>
  );
}
