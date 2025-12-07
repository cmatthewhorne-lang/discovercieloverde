import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero */}
      <Hero />

      {/* Content sections */}
      <div className="flex-1">
        <div className="max-w-4xl mx-auto px-6 pb-20 space-y-16">

          {/* Generational Alchemy */}
          <section className="space-y-4 border border-white/10 rounded-xl p-6 bg-white/5 bg-opacity-[0.01] backdrop-blur-sm">
            <h2 className="text-xs tracking-[0.35em] text-emerald-200/70 uppercase">
              Generational Alchemy
            </h2>
            <h3 className="text-xl md:text-2xl font-medium text-white">
              Turn the weight of your line into a living ritual.
            </h3>
            <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
              Discover Cielo Verde breaks your story into small, mythic chapters:
              arrivals and departures, vows and betrayals, quiet acts of courage
              that never made it into the family myth. As you move through the
              journey, patterns surface—not to condemn your ancestors, but to
              understand the gravity they carried and what you choose to carry
              forward.
            </p>
          </section>

          {/* Nova-Forged */}
          <section className="space-y-4 border border-white/10 rounded-xl p-6 bg-linear-to-b from-zinc-900/60 to-black/80">
            <h2 className="text-xs tracking-[0.35em] text-emerald-200/70 uppercase">
              Nova-Forged
            </h2>
            <h3 className="text-xl md:text-2xl font-medium text-white">
              Built with reverence, not extraction.
            </h3>
            <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
              The experience is designed under Nova Forge rules: respectful,
              private, and human-centered. There are no leaderboards, streaks,
              or dopamine traps—only slow, contemplative scenes that give you
              room to breathe between generations.
            </p>
            <ul className="text-sm text-zinc-400 space-y-1 pl-5 list-disc">
              <li>No public feeds. Your journey is yours alone.</li>
              <li>Stories are generated on the fly and not stored.</li>
              <li>Every interaction is optional and skippable.</li>
            </ul>
          </section>

          {/* A Real Place */}
          <section className="space-y-4 border border-white/10 rounded-xl p-6 bg-linear-to-b from-emerald-500/5 to-transparent">
            <h2 className="text-xs tracking-[0.35em] text-emerald-200/70 uppercase">
              A Real Place
            </h2>
            <h3 className="text-xl md:text-2xl font-medium text-white">
              The journey points toward a mountain.
            </h3>
            <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
              Beneath the digital ritual is a physical sanctuary in the Costa
              Rican cloud forest—Cielo Verde, a living project on the shoulder
              of Braulio Carrillo. One day, those who feel called will be able
              to complete this work on the land itself: under the rain, among
              bamboo and volcanic stone.
            </p>
            <p className="text-xs text-zinc-500">
              This prototype is the first gate. The mountain is real. The call
              is yours to answer.
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
