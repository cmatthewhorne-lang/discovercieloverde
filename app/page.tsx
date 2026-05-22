import Link from "next/link";
import Image from "next/image";
import EmailCapture from "@/components/EmailCapture";
import FadeIn from "@/components/FadeIn";

export default function HomePage() {
  return (
    <main>
      {/* Hero — forest tunnel, Oct 2024, walking with Macho */}
      <section className="relative bg-stone-900 text-white min-h-[85vh] flex items-end">
        <div className="absolute inset-0 bg-linear-to-t from-stone-900/95 via-stone-900/30 to-stone-900/10 z-10" />
        <Image
          src="/trail-tunnel.jpg"
          alt="Walking into the cloud forest at Cielo Verde"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-20">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-emerald-400 mb-4">
              Costa Rica · Phase 0
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight max-w-3xl">
              We won&apos;t transform you.<br />The forest might.
            </h1>
            <p className="mt-5 text-lg text-stone-300 max-w-xl leading-relaxed">
              Primary cloud forest. Never cleared. A family kept it alive for over 25 years. No signal on the property.
            </p>
            <div className="mt-8 flex gap-4 flex-wrap">
              <Link
                href="/support"
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded font-medium transition-colors"
              >
                Support the Project
              </Link>
              <Link
                href="/get-involved"
                className="border border-white/40 hover:border-white text-white px-6 py-3 rounded font-medium transition-colors"
              >
                Get Involved
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-20">

        {/* The land + who's building this — combined, early */}
        <section className="max-w-2xl space-y-6">
          <p className="text-xl md:text-2xl text-stone-700 leading-relaxed">
            I was born in Orlando. My dad is from West Virginia, my mom from Guadalajara. My dad bought land in Costa Rica. He gave it to me.
          </p>
          <p className="text-stone-600 leading-relaxed">
            I spent a decade on tour — merch for Michael Ray, Billy Currington, Kane Brown, Luke Combs. Then bars in Nashville. I quit to help my dad when his health got bad. That chapter is still open.
          </p>
          <p className="text-stone-600 leading-relaxed">
            A family has been keeping that land alive for 25 years while I wasn&apos;t there. The forest is intact. I have no money, just the land and some people who believe in it. I want to make something bigger than the sum of its parts.
          </p>
          <p className="text-stone-600 leading-relaxed">
            I don&apos;t know exactly what that is yet. I&apos;m going to go find out.
          </p>
        </section>

        {/* Potrero photo */}
        <section className="relative w-full h-72 md:h-96 rounded overflow-hidden">
          <Image
            src="/potrero-horse.jpg"
            alt="The potrero at Cielo Verde — hilly clearing with cloud rolling in"
            fill
            className="object-cover object-center"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-stone-900/80 to-transparent p-6">
            <p className="text-white text-sm">The potrero — where the clearing meets the cloud line. October 2024.</p>
          </div>
        </section>

        {/* Caretaker story */}
        <section className="border-l-4 border-emerald-600 pl-8 max-w-2xl">
          <h2 className="text-sm font-medium text-stone-500 mb-5">The Caretakers</h2>
          <p className="text-stone-700 leading-relaxed mb-4">
            Macho lived in this area for over 50 years, and on this land for over 25 — not as an employee, but as a steward. He knew every trail, every spring, every tree. He built paths through forest that had no paths. He protected it when it would have been easier not to.
          </p>
          <p className="text-stone-700 leading-relaxed mb-4">
            Age eventually forced him off the land he loved. His son drives out on his days off from his regular job to keep the work going. Out of love for his father&apos;s life work. Because he wants to build something real.
          </p>
          <p className="text-stone-700 leading-relaxed mb-6">
            This project exists to make that possible. To turn what he does on borrowed time into his actual livelihood — and to build something he has a real stake in, not just a job inside of. His family kept this land alive. Any version of this that doesn&apos;t reflect that isn&apos;t worth building.
          </p>
          <div className="relative w-full h-64 rounded overflow-hidden">
            <Image
              src="/gabriel-working.jpg"
              alt="Gabriel, a local friend, working on the land at Cielo Verde"
              fill
              className="object-cover object-center"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-stone-900/80 to-transparent p-4">
              <p className="text-white text-xs">Gabriel, a local friend who wants to help however he can. May 2026.</p>
            </div>
          </div>
        </section>

        {/* The work right now */}
        <section className="max-w-2xl space-y-4">
          <h2 className="text-xs uppercase tracking-widest text-stone-400">The Work Right Now</h2>
          <p className="text-stone-600 leading-relaxed">
            Daniel is on the land on his days off, clearing trail with a machete and sending photos. The land is overgrown — he's working the highest-impact areas first. In a few months, we're going back with a small crew and a camera to work on the old caretaker's shack, camp, and mark trails.
          </p>
          <p className="text-stone-600 leading-relaxed">
            $50 covers one day of work. Every dollar is tracked in the public ledger.
          </p>
          <div className="flex gap-4 flex-wrap pt-2">
            <Link
              href="/support"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded font-medium transition-colors"
            >
              Fund the Work
            </Link>
            <Link
              href="/get-involved"
              className="border border-stone-300 hover:border-stone-500 text-stone-700 px-6 py-3 rounded font-medium transition-colors"
            >
              Get Involved
            </Link>
          </div>
        </section>

      </div>

      <EmailCapture />
    </main>
  );
}
