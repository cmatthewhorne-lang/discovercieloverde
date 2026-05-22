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
              Primary cloud forest on the southern boundary of Braulio Carrillo National Park. Never cleared. A family kept it alive for over 25 years. No signal on the property.
            </p>
            <div className="mt-8 flex gap-4 flex-wrap">
              <Link
                href="/support"
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded font-medium transition-colors"
              >
                Support the Project
              </Link>
              <Link
                href="/volunteer"
                className="border border-white/40 hover:border-white text-white px-6 py-3 rounded font-medium transition-colors"
              >
                Join the Expedition
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-20">

        {/* The land + who's building this — combined, early */}
        <section className="max-w-2xl space-y-6">
          <p className="text-xl md:text-2xl text-stone-700 leading-relaxed">
            Cloud forest around 1,600m on the edge of one of the most biodiverse national parks in the Western Hemisphere. Two zones — bosque and potrero. A year-round river. The Camino Carrillo — the cobblestone road Bishop Bernardo Augusto Thiel walked into exile in 1884 — runs nearby. The cobblestones are still there.
          </p>
          <p className="text-stone-600 leading-relaxed">
            I quit my job and needed to go somewhere that wasn&apos;t where I was. My father had given me this land in Costa Rica, and I went. I spent years managing merch on tour with country acts, then running bars in Nashville — loud work, but work that runs on performance. I needed something that didn&apos;t.
          </p>
          <p className="text-stone-600 leading-relaxed">
            If you&apos;re carrying something, the forest doesn&apos;t ask about it. It&apos;s just there — old, intact, indifferent in the best possible way. We&apos;re building this together with the family that kept it alive. Not a resort. Not a program. A place that does what primary forest does.
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

        {/* Three pillars */}
        <section>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div>
              <h3 className="font-semibold text-lg mb-2">Primary Forest</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Never logged, never cleared. Intact canopy, undisturbed soil, unbroken habitat. Tapir confirmed. Resplendent Quetzal habitat. Glass frogs on the river. Jaguar corridor from the park. This is not forest coming back — it never left.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">The Gate That Sends People Here</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                The road dead-ends at the park boundary. Most people who make the drive are turned away at the gate. They drove an hour up cobblestone in a 4x4 to get there. Cielo Verde is what they find instead — primary forest, a family that knows it, and no tour group in sight.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">The Lost Shrine</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Somewhere inside Braulio Carrillo, now inaccessible, a shrine marks where Bishop Thiel passed on July 18, 1884 — exiled from Costa Rica, walking this road. His account is one of the earliest written records of what this land looked like. We walk the same road.
              </p>
            </div>
          </div>
        </section>

        {/* River photo */}
        <section className="relative w-full h-64 md:h-80 rounded overflow-hidden">
          <Image
            src="/river.jpg"
            alt="The year-round river on the western boundary of Cielo Verde"
            fill
            className="object-cover object-bottom"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-stone-900/80 to-transparent p-6">
            <p className="text-white text-sm">The river on the western boundary. Cold, clear, year-round. Glass frogs live here.</p>
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

        {/* Phase 0 */}
        <section>
          <h2 className="text-xs uppercase tracking-widest text-stone-400 mb-6">The Work Right Now</h2>
          <div className="border border-stone-200 rounded-md p-6">
            <div className="flex items-start justify-between mb-5">
              <div>
                <p className="font-semibold text-lg">Phase 0 — Trail clearing. Right now.</p>
                <p className="text-stone-500 text-sm mt-1">Daniel is working on his days off. $50 covers one day.</p>
              </div>
              <span className="text-xs bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-medium shrink-0">In Progress</span>
            </div>
            <div className="space-y-2 text-sm text-stone-500 mb-5">
              <p>○ Trail clearing — $50/day per person on the land</p>
              <p>○ Gate and entrance — $650</p>
              <p>○ Trail clearing equipment (Stihl FS) — $400</p>
              <p>○ Two heifers for Daniel's family — $1,200 (income from calves is his, not the project's)</p>
              <p>○ July expedition — flights, food, crew — $500</p>
            </div>
            <p className="text-sm text-stone-400 border-t border-stone-100 pt-4">
              Nothing has been funded yet. Everything raised goes directly to this list. Every dollar tracked publicly.
            </p>
          </div>
        </section>

        {/* Urgency */}
        <section className="text-center py-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 leading-snug">
            In July we walk to the northwest corner for the first time. We need to be ready.
          </h2>
          <p className="text-stone-600 mb-3 leading-relaxed">
            A wildlife photographer and a small crew will make the first documented walk to the park boundary at 1,600m. The family will lead. We will follow. What comes back — photos, video, wildlife documentation — is what this project shows the world in August.
          </p>
          <p className="text-stone-600 mb-8 leading-relaxed">
            The trail work starts now. It needs funding now.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/support"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded font-medium transition-colors"
            >
              Fund the Work
            </Link>
            <Link
              href="/volunteer"
              className="border border-stone-300 hover:border-stone-500 text-stone-700 px-8 py-3 rounded font-medium transition-colors"
            >
              Join the Expedition
            </Link>
          </div>
        </section>

      </div>

      <EmailCapture />
    </main>
  );
}
