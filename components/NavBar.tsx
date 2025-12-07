"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/lineage", label: "Mateo's Lineage" },
  { href: "/journey", label: "Begin My Journey" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-lg">
      <nav className="mx-auto max-w-6xl px-6 py-4 flex justify-between items-center">
        <span className="tracking-[0.35em] uppercase text-[10px] text-emerald-300/80">
          Cielo Verde
        </span>

        <ul className="flex gap-8">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-sm transition ${
                    active
                      ? "text-emerald-300"
                      : "text-zinc-400 hover:text-emerald-200"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
