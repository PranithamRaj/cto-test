import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Inter, Sora } from "next/font/google";
import { cn } from "@/lib/utils";
import { Container } from "@/components/Container";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const sora = Sora({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: new URL("https://artisanlab.example"),
  title: {
    default: "Artisan Lab Coaching",
    template: "%s | Artisan Lab"
  },
  description:
    "Artisan Lab offers premium 1-on-1 and group coaching tailored to help creative entrepreneurs master their craft and build sustainable businesses.",
  keywords: [
    "artisan lab",
    "coaching",
    "creative entrepreneurs",
    "design coaching",
    "product coaching"
  ],
  openGraph: {
    title: "Artisan Lab Coaching",
    description:
      "Join the Artisan Lab coaching collective to master your craft, grow your creative business, and connect with a community of builders.",
    url: "https://artisanlab.example",
    siteName: "Artisan Lab",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Artisan Lab Coaching",
    description:
      "1-on-1 and group coaching experiences for creatives building enduring businesses.",
    creator: "@artisanlab"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const year = new Date().getFullYear();

  return (
    <html lang="en" className={cn(inter.variable, sora.variable)}>
      <body className="bg-forest-50 text-ink-700 antialiased">
        <div className="flex min-h-screen flex-col">
          <main className="flex-1">{children}</main>
          <footer className="border-t border-forest-100 bg-white/80 py-12 backdrop-blur">
            <Container className="flex flex-col gap-6 text-sm text-ink-500 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <p className="font-display text-base font-semibold text-forest-700">Artisan Lab</p>
                <p className="max-w-prose text-ink-500">
                  Coaching, curriculum, and community for creatives dedicated to artisanal excellence.
                </p>
                <p className="text-xs text-ink-400">&copy; {year} Artisan Lab Collective. All rights reserved.</p>
              </div>
              <nav aria-label="Footer" className="flex flex-wrap items-center gap-4 font-medium text-ink-500">
                <Link href="#program" className="transition hover:text-forest-600">
                  Program
                </Link>
                <Link href="#coaches" className="transition hover:text-forest-600">
                  Coaches
                </Link>
                <Link href="#faq" className="transition hover:text-forest-600">
                  FAQ
                </Link>
                <Link href="#contact" className="transition hover:text-forest-600">
                  Contact
                </Link>
              </nav>
            </Container>
          </footer>
        </div>
      </body>
    </html>
  );
}
