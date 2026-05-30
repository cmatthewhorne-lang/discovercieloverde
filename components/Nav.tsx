"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/land", label: "The Land" },
  { href: "/phases", label: "The Plan" },
  { href: "/get-involved", label: "Get Involved" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-20 bg-white border-b border-stone-200">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-sm font-semibold text-stone-900 tracking-wide"
          onClick={() => setOpen(false)}
        >
          Cielo Verde
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`transition-colors ${
                pathname === href
                  ? "text-stone-900 font-medium"
                  : "text-stone-500 hover:text-stone-900"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/support"
            className={`px-4 py-2 rounded font-medium transition-colors text-sm ${
              pathname === "/support"
                ? "bg-emerald-700 text-white"
                : "bg-emerald-600 hover:bg-emerald-500 text-white"
            }`}
          >
            Support the Project
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`block w-6 h-0.5 bg-stone-900 transition-transform duration-200 ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block w-6 h-0.5 bg-stone-900 transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-stone-900 transition-transform duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-stone-100 bg-white px-6 py-4 space-y-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`block py-3 text-sm border-b border-stone-100 transition-colors ${
                pathname === href
                  ? "text-stone-900 font-medium"
                  : "text-stone-500"
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="pt-3">
            <Link
              href="/support"
              onClick={() => setOpen(false)}
              className="block text-center bg-emerald-600 hover:bg-emerald-500 text-white text-sm px-4 py-3 rounded font-medium transition-colors"
            >
              Support the Project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
