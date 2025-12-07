// app/lineage/page.tsx

export default function LineagePage() {
  return (
    <main className="pt-32 pb-24 px-6 max-w-3xl mx-auto space-y-12">
      {/* Breadcrumb / label */}
      <section className="space-y-3">
        <p className="text-xs tracking-[0.35em] text-emerald-200/60 uppercase">
          Mateo&apos;s Path · Lineage
        </p>

        <h1 className="text-3xl md:text-4xl font-light text-white">
          Before this became a project,
          <br />
          it was a wound that wouldn&apos;t close.
        </h1>

        <p className="text-sm md:text-base text-zinc-300/90 leading-relaxed">
          Walking Mateo&apos;s path means seeing how this began: grief, unanswered
          questions, and a feeling that the story behind the last names was
          heavier than anyone wanted to admit. This isn&apos;t a hero&apos;s journey—it&apos;s
          a slow, imperfect attempt to{" "}
          <span className="text-emerald-200/80">
            listen to the line instead of outrunning it.
          </span>
        </p>
      </section>

      {/* Section: Generational context */}
      <section className="space-y-4">
        <h2 className="text-xs tracking-[0.3em] text-emerald-200/70 uppercase">
          Chapter I · The fracture
        </h2>

        <div className="rounded-2xl border border-emerald-500/15 bg-zinc-900/70 p-6 md:p-7 space-y-3 leading-relaxed text-sm md:text-base text-zinc-200">
          <p>
            There is a moment—often small and unremarkable—where a family stops
            saying the quiet parts out loud. Arguments become silences. Grief
            becomes busyness. Children learn which questions are safe, and
            which ones rearrange the air in the room.
          </p>
          <p>
            Mateo&apos;s story starts there: in the gap between what was lived and
            what was allowed to be spoken. The ache that followed wasn&apos;t just
            personal. It belonged to a line.
          </p>
        </div>
      </section>

      {/* Section: Turning toward the line */}
      <section className="space-y-4">
        <h2 className="text-xs tracking-[0.3em] text-emerald-200/70 uppercase">
          Chapter II · Turning back
        </h2>

        <div className="rounded-2xl border border-emerald-500/15 bg-zinc-900/70 p-6 md:p-7 space-y-3 leading-relaxed text-sm md:text-base text-zinc-200">
          <p>
            For years, the only strategy was escape: new cities, new work, new
            identities. But distance didn&apos;t quiet the line—it amplified it.
            Names, places, and half-remembered stories started showing up in
            dreams, songs, and chance conversations.
          </p>
          <p>
            Eventually the only honest move left was to turn around and walk
            back into the fog: ancestry research, hospital hallways, old
            documents, and the uncomfortable task of seeing each generation as{" "}
            <span className="text-emerald-200/80">
              a person carrying more than they could hold.
            </span>
          </p>
        </div>
      </section>

      {/* Section: Why Cielo Verde exists */}
      <section className="space-y-4">
        <h2 className="text-xs tracking-[0.3em] text-emerald-200/70 uppercase">
          Chapter III · A place to lay it down
        </h2>

        <div className="rounded-2xl border border-emerald-500/15 bg-zinc-900/70 p-6 md:p-7 space-y-3 leading-relaxed text-sm md:text-base text-zinc-200">
          <p>
            Cielo Verde grew out of a question: what if there were a place
            designed not for escaping your life, but for{" "}
            <span className="text-emerald-200/80">
              meeting the line that built it
            </span>{" "}
            with honesty and care?
          </p>
          <p>
            A cloud forest sanctuary where rain on bamboo sounds like prayer.
            A pilgrimage engine that uses story, ritual, and technology to help
            you sit with your lineage without trying to fix it in one night.
          </p>
          <p>
            Mateo&apos;s path is not the only way to walk this, but it is one map.
            This page will eventually hold the full sequence—letters, audio,
            fragments, and small rituals—so that others who carry similar weight
            don&apos;t have to walk alone.
          </p>
        </div>
      </section>

      {/* CTA back into the engine */}
      <section className="pt-4 border-t border-emerald-500/10 mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="text-xs text-zinc-400 max-w-md leading-relaxed">
          Ready to stop observing and start participating? The next step is
          gentle: two last names, one intention, and a screen that doesn&apos;t
          pretend to know you better than your own body does.
        </div>

        <a
          href="/journey"
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-semibold tracking-[0.16em] uppercase
                     bg-emerald-500/90 text-black hover:bg-emerald-400 transition shadow-lg shadow-emerald-500/25"
        >
          Begin Your Journey
        </a>
      </section>
    </main>
  );
}
