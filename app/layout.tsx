import "./globals.css";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Lora, DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });

export const metadata: Metadata = {
  title: "Cielo Verde — Costa Rica Cloud Forest",
  description:
    "Primary cloud forest on the border of Braulio Carrillo National Park. Support conservation, join an expedition.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("font-sans", dmSans.variable, lora.variable)}>
      <body className="min-h-screen bg-white text-stone-900 antialiased">
        <Nav />
        <div className="pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
