// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discover Cielo Verde",
  description:
    "A quiet, cinematic engine for healing generational lines through story, ritual, and reflection.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-zinc-100 antialiased">
        {/* Outer frame */}
        <div className="relative min-h-screen overflow-hidden">
          {/* Soft vignette */}
          <div className="pointer-events-none fixed inset-0 z-[-1] bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.16),transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.9),black_70%)]" />

          {/* Very subtle top “halo” */}
          <div className="pointer-events-none fixed inset-x-0 top-0 h-40 z-[-1] bg-gradient-to-b from-emerald-300/10 via-transparent to-transparent blur-3xl" />

          {/* Site chrome */}
          <header className="fixed top-0 left-0 right-0 z-20 border-b border-emerald-500/10 bg-black/40 backdrop-blur-md">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
              <div className="flex flex-col">
                <span className="text-[0.68rem] tracking-[0.3em] uppercase text-emerald-200/70">
                  Discover Cielo Verde
                </span>
                <span className="mt-1 text-xs text-zinc-400">
                  A slow engine for ancestry, grief, and quiet miracles.
                </span>
              </div>

              <nav className="flex items-center gap-5 text-[0.7rem] uppercase tracking-[0.16em] text-zinc-400">
                <a
                  href="/"
                  className="hover:text-emerald-200 transition-colors"
                >
                  Home
                </a>
                <a
                  href="/journey"
                  className="hover:text-emerald-200 transition-colors"
                >
                  Journey
                </a>
                <a
                  href="/lineage"
                  className="hover:text-emerald-200 transition-colors"
                >
                  Mateo&apos;s Path
                </a>
              </nav>
            </div>
          </header>

          {/* Page content */}
          <div className="pt-20">
            {children}
          </div>

          {/* Footer */}
          <footer className="border-t border-emerald-500/10 bg-black/70 mt-10">
            <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-6 text-[0.7rem] text-zinc-500 md:flex-row md:items-center md:justify-between">
              <p>
                Built as a living ritual. Nothing stored, nothing sold behind
                your back.
              </p>
              <p className="text-right">
                Powered by Nova Forge · Cielo Verde Cloud Forest
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
