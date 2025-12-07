import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Discover Cielo Verde",
  description: "A pilgrimage into a hidden world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black text-white">
      <body className={inter.className + " bg-black text-white"}>
        <div className="min-h-screen relative overflow-hidden">
          {/* Global background gradient */}
          <div
            aria-hidden
            className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(74,222,128,0.14),transparent_60%),radial-gradient(circle_at_bottom,rgba(15,23,42,0.9),black_80%)]"
          />
          {children}
        </div>
      </body>
    </html>
  );
}
