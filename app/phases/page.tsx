import Link from "next/link";

export default function PhasesPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 space-y-6">

      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">The Plan</p>
        <h1 className="text-4xl font-semibold leading-tight">One thing at a time.</h1>
        <p className="mt-4 text-lg text-stone-600 leading-relaxed">
          Phase 0 is happening now. Everything after it depends on what gets built, documented, and funded before then.
        </p>
      </div>

      <div className="space-y-16 pt-6">

        {/* Phase 0 */}
        <section className="border-l-4 border-emerald-600 pl-8">
          <div className="flex items-center gap-3 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
            <span className="text-xs font-medium text-stone-500 uppercase tracking-widest">Phase 0 — In Progress</span>
          </div>
          <h2 className="text-2xl font-semibold text-stone-900 mb-1">The Outpost</h2>
          <p className="text-sm text-stone-500 mb-6">May–Late 2026</p>

          <div className="space-y-6">
            <div>
              <p className="text-sm font-medium text-stone-700 mb-2">Trail Work</p>
              <ul className="space-y-1.5">
                {[
                  "Daniel clearing the highest-impact areas first — machete, walking-width corridor into the bosque",
                  "Before and after photos sent as work progresses",
                  "Motoguadaña (Stihl FS) — when funded, stays on the land permanently",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-stone-600 leading-relaxed">
                    <span className="text-stone-300 shrink-0 mt-0.5">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-medium text-stone-700 mb-1">Macho's Shack</p>
              <p className="text-sm text-stone-500 italic mb-2">Everyone wants to tear it down. We are not tearing it down.</p>
              <ul className="space-y-1.5">
                {[
                  "Bahareque walls — mud and cane, traditional Central American construction",
                  "New metal roof",
                  "Spring water line repaired",
                  "This is Macho's house. It becomes Daniel's base. Eventually a simple outpost for volunteers.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-stone-600 leading-relaxed">
                    <span className="text-stone-300 shrink-0 mt-0.5">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-medium text-stone-700 mb-2">Property</p>
              <ul className="space-y-1.5">
                {[
                  "Gate replacement at road entrance",
                  "Fence assessment and priority repairs",
                  "Two heifers for Daniel's family — income from cattle sales is his, not the project's",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-stone-600 leading-relaxed">
                    <span className="text-stone-300 shrink-0 mt-0.5">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-stone-100">
            <p className="text-xs text-stone-400 uppercase tracking-widest mb-1">What this unlocks</p>
            <p className="text-sm text-stone-600">Daniel has a base. The land is documented. Phase 1 can begin.</p>
          </div>
        </section>

        {/* Phase 1 */}
        <section className="border-l-4 border-amber-400 pl-8">
          <div className="flex items-center gap-3 mb-1">
            <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
            <span className="text-xs font-medium text-stone-500 uppercase tracking-widest">Phase 1 — Up Next</span>
          </div>
          <h2 className="text-2xl font-semibold text-stone-900 mb-1">Opening the Land</h2>
          <p className="text-sm text-stone-500 mb-4">Late 2026</p>
          <p className="text-stone-600 leading-relaxed text-sm max-w-xl">
            The trail system opens from the outpost to the highest point of the property. The farm expands — a dairy cow, chickens, real food for people working here. Solar power and a composting toilet go into the outpost. A formal operating structure gets built with Daniel's family — not an employment relationship, a partnership with a real stake in what this becomes.
          </p>
        </section>

        {/* Phase 2 */}
        <section className="border-l-4 border-stone-200 pl-8">
          <div className="flex items-center gap-3 mb-1">
            <span className="w-2 h-2 rounded-full bg-stone-300 shrink-0" />
            <span className="text-xs font-medium text-stone-500 uppercase tracking-widest">Phase 2 — Planned</span>
          </div>
          <h2 className="text-2xl font-semibold text-stone-900 mb-1">Overnight</h2>
          <p className="text-sm text-stone-500 mb-4">2027</p>
          <p className="text-stone-600 leading-relaxed text-sm max-w-xl">
            The first overnight platform goes in at the northwest corner. Small groups can stay. Daniel works here full time. The land starts funding itself.
          </p>
        </section>

      </div>

      <section className="pt-6 border-t border-stone-200 space-y-3">
        <p className="text-stone-600 text-sm leading-relaxed">
          Phase 0 is funded by people who believe the work is worth doing before there's anything to show. The ledger is public. Every dollar is tracked.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Link
            href="/support"
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded font-medium text-sm transition-colors"
          >
            Fund Phase 0
          </Link>
          <Link
            href="/get-involved"
            className="border border-stone-300 hover:border-stone-500 text-stone-700 px-6 py-3 rounded font-medium text-sm transition-colors"
          >
            Get Involved
          </Link>
        </div>
      </section>

    </main>
  );
}
