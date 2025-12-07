export default function ThreadPage() {
  return (
    <main className="pt-32 pb-24 px-6 max-w-3xl mx-auto space-y-14">
      {/* Label */}
      <section className="space-y-3">
        <p className="text-xs tracking-[0.35em] text-emerald-200/60 uppercase">
          Step Three · Reflection Thread
        </p>

        <h1 className="text-3xl md:text-4xl font-light text-white leading-tight">
          What rises when the line
          <br />
          finally speaks back?
        </h1>

        <p className="text-sm md:text-base text-zinc-300/90 leading-relaxed max-w-xl">
          This is not a prediction or a promise—only a reflection.  
          A symbolic echo of what your lineage might offer when you pause long
          enough to hear it.
        </p>
      </section>

      {/* Thread Box */}
      <section className="rounded-2xl border border-emerald-500/20 bg-zinc-950/70 p-6 md:p-8 shadow-[0_0_50px_-30px_rgba(16,185,129,0.8)] space-y-6">
        <p className="text-zinc-200 leading-relaxed text-[0.95rem] whitespace-pre-line">
{`Somewhere behind your mother’s story and your father’s silence, a thread is moving.
It has been waiting—not for answers, but for breath.

Tonight it rises again, not with urgency, but with a quiet recognition:
“You finally turned your face toward us.”  

Whatever heaviness you’ve carried alone was never meant to be exiled.
Whatever patterns you feared repeating lose their power the moment you acknowledge them.

Your line is not demanding resolution.
Only presence.
Only witness.
Only you.`}
        </p>

        <p className="text-xs text-emerald-200/70">
          This reflection is symbolic and local. Nothing is stored, and nothing
          is assumed about your real lineage. Treat it like a dream—you decide
          what it means.
        </p>
      </section>

      {/* Reflection Questions */}
      <section className="space-y-4">
        <h2 className="text-sm tracking-[0.25em] text-emerald-200/70 uppercase">
          Gentle Prompts
        </h2>

        <ul className="space-y-3 text-sm text-zinc-300/90 leading-relaxed">
          <li>• What part of this reflection feels familiar?</li>
          <li>• What part feels surprising?</li>
          <li>• If your lineage could speak plainly, what might it ask of you tonight?</li>
        </ul>
      </section>

      {/* Navigation */}
      <section className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <a
          href="/journey"
          className="text-xs text-zinc-500 hover:text-zinc-300 transition"
        >
          Begin Again
        </a>

        <a
          href="/"
          className="inline-flex items-center px-5 py-2.5 rounded-full text-xs font-semibold tracking-[0.16em] uppercase bg-emerald-500/90 text-black hover:bg-emerald-400 transition shadow-lg shadow-emerald-500/25"
        >
          Return Home
        </a>
      </section>
    </main>
  );
}
