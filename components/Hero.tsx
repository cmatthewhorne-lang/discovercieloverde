export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 px-6 mx-auto max-w-4xl text-center">
      {/* Soft glow behind the hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-32 -z-10 h-72 bg-linear-to-b from-emerald-300/25 via-transparent to-transparent blur-3xl"
      />

      <p className="text-[0.65rem] tracking-[0.4em] text-emerald-200/70 uppercase mb-6">
        Discover Cielo Verde
      </p>

      <h1 className="text-4xl md:text-6xl font-light leading-tight mb-6">
        <span className="text-white/90">Heal the line</span>
        <br />
        <span className="text-emerald-300/80">between lives.</span>
      </h1>

      <p className="text-base md:text-lg text-zinc-300/90 max-w-2xl mx-auto mb-10">
        A slow, cinematic journey through ancestry, grief, and quiet miracles.
        Begin with two last names and a willingness to listen.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="/journey"
          className="px-6 py-3 rounded-full bg-emerald-400/15 text-emerald-200 border border-emerald-300/40 hover:bg-emerald-400/25 hover:-translate-y-px transition-all text-xs md:text-sm tracking-[0.2em] uppercase"
        >
          Begin My Journey
        </a>
        <a
          href="/lineage"
          className="px-6 py-3 rounded-full border border-white/15 text-white/80 hover:bg-white/5 hover:-translate-y-px transition-all text-xs md:text-sm tracking-[0.2em] uppercase"
        >
          Walk Mateo&apos;s Path
        </a>
      </div>
    </section>
  );
}
