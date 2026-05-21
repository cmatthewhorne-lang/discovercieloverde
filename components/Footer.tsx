import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50 mt-20">
      <div className="mx-auto max-w-5xl px-6 py-12 space-y-8">

        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between gap-8">

          {/* Left — identity */}
          <div className="space-y-2 max-w-xs">
            <p className="font-semibold text-stone-800">Cielo Verde</p>
            <p className="text-sm text-stone-500 leading-relaxed">
              Primary cloud forest on the southern boundary of Braulio Carrillo National Park. Costa Rica.
            </p>
            <p className="text-sm text-stone-500 italic">
              We won&apos;t transform you. The forest might.
            </p>
          </div>

          {/* Middle — nav */}
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">Explore</p>
            <nav className="flex flex-col gap-2 text-sm text-stone-600">
              <Link href="/land" className="hover:text-stone-900 transition-colors">The Land</Link>
              <Link href="/support" className="hover:text-stone-900 transition-colors">Support the Project</Link>
              <Link href="/volunteer" className="hover:text-stone-900 transition-colors">Join the Expedition</Link>
              <Link href="/get-involved" className="hover:text-stone-900 transition-colors">Offer Your Skills</Link>
            </nav>
          </div>

          {/* Right — social + contact */}
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">Follow</p>
            <div className="flex flex-col gap-2 text-sm text-stone-600">
              <a
                href="https://instagram.com/discovercieloverde"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-stone-900 transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com/discovercieloverde"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-stone-900 transition-colors"
              >
                Facebook
              </a>
              <a
                href="mailto:info@discovercieloverde.com"
                className="hover:text-stone-900 transition-colors"
              >
                Email us
              </a>
            </div>
          </div>

        </div>

        {/* Bottom — legal */}
        <div className="border-t border-stone-200 pt-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} Nova Vista Holdings LLC. All rights reserved.</p>
          <p>Contributions are not tax-deductible. Nova Vista Holdings LLC is a for-profit entity registered in Wyoming.</p>
        </div>

      </div>
    </footer>
  );
}
