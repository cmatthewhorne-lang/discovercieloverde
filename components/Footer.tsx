import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50 mt-20">
      <div className="mx-auto max-w-5xl px-6 py-12 space-y-8">

        <div className="flex flex-col md:flex-row justify-between gap-8">

          <div className="space-y-2 max-w-xs">
            <p className="font-semibold text-stone-800">Cielo Verde</p>
            <p className="text-sm text-stone-500 leading-relaxed">
              Primary cloud forest. Costa Rica.
            </p>
            <p className="text-sm text-stone-500 italic">
              We won&apos;t transform you. The forest might.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">Explore</p>
            <nav className="flex flex-col gap-2 text-sm text-stone-600">
              <Link href="/land" className="hover:text-stone-900 transition-colors">The Land</Link>
              <Link href="/phases" className="hover:text-stone-900 transition-colors">The Plan</Link>
              <Link href="/get-involved" className="hover:text-stone-900 transition-colors">Get Involved</Link>
              <Link href="/support" className="hover:text-stone-900 transition-colors">Support the Project</Link>
            </nav>
          </div>

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
                Email
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-stone-200 pt-6 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} Cielo Verde. Contributions are not tax-deductible.</p>
        </div>

      </div>
    </footer>
  );
}
