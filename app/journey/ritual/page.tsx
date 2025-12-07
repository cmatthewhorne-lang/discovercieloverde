// app/journey/ritual/page.tsx

export default function RitualPage() {
  return (
    <main className="pt-32 pb-24 px-6 max-w-3xl mx-auto space-y-12">
      {/* Label / breadcrumb */}
      <section className="space-y-3">
        <p className="text-xs tracking-[0.35em] text-emerald-200/60 uppercase">
          Step Two · Listening Ritual
        </p>

        <h1 className="text-3xl md:text-4xl font-light text-white">
          Tonight, you don&apos;t fix the line.
          <br />
          You listen to it.
        </h1>

        <p className="text-sm md:text-base text-zinc-300/90 leading-relaxed">
          Before anything is generated, we pause. This step is simple on
          purpose. No scrolling, no notifications—just you, your breath, and
          the names you carry.
        </p>
      </section>

      {/* Instructions card */}
      <section className="rounded-2xl border border-emerald-500/15 bg-zinc-900/70 p-6 md:p-8 space-y-5 text-sm md:text-base text-zinc-200 leading-relaxed">
        <ol className="list-decimal list-inside space-y-3">
          <li>
            Find a quiet spot where you can be undisturbed for a few minutes.
            If you like, dim the lights or sit near a window.
          </li>
          <li>
            Write your two last names on a piece of paper. Say them out loud
            once, slowly. Notice what your body does when you hear them.
          </li>
          <li>
            Take ten slow breaths. On every inhale, imagine you are drawing the
            line of your ancestry closer. On every exhale, imagine offering it
            a little more room.
          </li>
          <li>
            If memories, images, or emotions surface, don&apos;t analyze them
            yet. Just notice:{" "}
            <span className="text-emerald-200/80">
              &quot;Something in my line is speaking.&quot;
            </span>
          </li>
        </ol>

        <p className="pt-3 text-xs text-zinc-400">
          There is no right way to do this. If nothing comes up, that&apos;s
          information too. The line is patient.
        </p>
      </section>

      {/* Gentle CTA forward */}
      <section className="pt-4 border-t border-emerald-500/10 mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="text-xs text-zinc-400 max-w-md leading-relaxed">
          When you&apos;re ready to see a reflection of what this moment might
          mean, continue to the next screen. You can always return here first.
        </div>

        <a
          href="/journey/thread"
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-semibold tracking-[0.16em] uppercase
                     bg-emerald-500/90 text-black hover:bg-emerald-400 transition shadow-lg shadow-emerald-500/25"
        >
          Continue the Journey
        </a>
      </section>
    </main>
  );
}
