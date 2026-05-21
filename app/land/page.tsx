import Image from "next/image";

export default function LandPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 space-y-16">

      <div>
        <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">The Land</p>
        <h1 className="text-4xl font-semibold leading-tight">Primary cloud forest. Never cleared. No signal.</h1>
        <p className="mt-4 text-lg text-stone-600 leading-relaxed">
          Southern boundary of Braulio Carrillo National Park. A year-round river to the west. The historic Camino Carrillo nearby. Cloud forest terrain around 1,600m — similar to Monteverde but without the tourists.
        </p>
      </div>

      {/* Hero land photo — trail into the bosque */}
      <div className="relative w-full h-80 md:h-[480px] rounded overflow-hidden">
        <Image
          src="/trail-mist.jpg"
          alt="Trail disappearing into the cloud forest at Cielo Verde"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-stone-900/80 to-transparent p-6">
          <p className="text-white text-sm">The bosque trail. October 2024.</p>
        </div>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">The Two Zones</h2>
        <p className="text-stone-600 leading-relaxed">
          The property has two distinct zones. The <strong>bosque</strong> — primary cloud forest, intact canopy, undisturbed soil, unbroken habitat. Never logged, never cleared. The <strong>potrero</strong> — a hilly clearing where wild blackberries are already growing, confirming the microclimate. Domestic animals stay in the potrero. The bosque stays wild.
        </p>
        <p className="text-stone-600 leading-relaxed">
          A year-round river runs the western boundary. Glass frogs live on the river — translucent, visible organs, a clean-water indicator that does not survive in degraded habitat. The water is cold and clear. There is no signal on the property.
        </p>
      </section>

      {/* Two zones photo pair */}
      <section className="grid grid-cols-2 gap-3">
        <div className="relative aspect-video rounded overflow-hidden col-span-2">
          <Image
            src="/potrero-wide.jpg"
            alt="The potrero at Cielo Verde — wide clearing with cloud pressing down"
            fill
            className="object-cover object-center"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-stone-900/70 to-transparent p-4">
            <p className="text-white text-xs">The potrero — hilly clearing at the entrance. The bosque begins at the tree line.</p>
          </div>
        </div>
        <div className="relative aspect-square rounded overflow-hidden">
          <Image
            src="/river.jpg"
            alt="The year-round river at Cielo Verde"
            fill
            className="object-cover object-bottom"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-stone-900/70 to-transparent p-3">
            <p className="text-white text-xs">The river. Glass frogs live here.</p>
          </div>
        </div>
        <div className="relative aspect-square rounded overflow-hidden">
          <Image
            src="/bosque-trees.jpg"
            alt="Ancient moss-covered trees in the cloud forest"
            fill
            className="object-cover object-center"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-stone-900/70 to-transparent p-3">
            <p className="text-white text-xs">Inside the bosque. May 2026.</p>
          </div>
        </div>
        <p className="col-span-2 text-xs text-stone-400 text-center">Photos taken on the land — October 2024 and May 2026</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">First Peoples</h2>
        <p className="text-stone-600 leading-relaxed">
          This is Huetar territory — specifically adjacent to the Toyopán chieftaincy. The Huetar people have lived in this region for thousands of years. We acknowledge that plainly and without romanticizing it. The land carries that history. We hold it with respect.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">The 1882 Road</h2>
        <p className="text-stone-600 leading-relaxed">
          The Camino Carrillo — cobblestone, built 1882, historically the only route between the Central Valley and the Caribbean coast — runs near the property. Four-wheel drive only. The cobblestones are still there.
        </p>
        <p className="text-stone-600 leading-relaxed">
          On July 18, 1884, Bishop Bernardo Augusto Thiel was exiled from Costa Rica and walked this road. He documented the forest as he passed through. His account is one of the earliest written records of what this land looked like. A shrine to his passage exists somewhere inside Braulio Carrillo, now inaccessible. We walk the same road he walked to reach this place.
        </p>
        <p className="text-stone-600 leading-relaxed">
          The road dead-ends at the park boundary. Most people who make the drive are turned away at the gate. They drove an hour up cobblestone in a 4x4 to get there. Cielo Verde is what they find instead — primary forest, a family that knows it, and no tour group in sight.
        </p>
      </section>

      <section className="border-l-4 border-emerald-600 pl-8 space-y-4">
        <h2 className="text-xl font-semibold">The Caretakers</h2>
        <p className="text-stone-600 leading-relaxed">
          Edwin "Macho" lived in this area for over 50 years — more than 25 of them on this land under a comodato de cuido — a stewardship arrangement, not a labor contract. He knew every trail, every spring, every tree. He built paths through forest that had no paths. He protected the land when it would have been easier and more profitable not to. The forest is intact today because of him.
        </p>

        {/* Walking with Macho — Oct 2024 */}
        <div className="grid grid-cols-2 gap-3 my-4">
          <div className="relative aspect-square rounded overflow-hidden">
            <Image
              src="/walk-overgrown-2.jpg"
              alt="Walking into the overgrown trail at Cielo Verde with Edwin"
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="relative aspect-square rounded overflow-hidden">
            <Image
              src="/walk-into-forest.jpg"
              alt="Walking into the cloud forest at Cielo Verde"
              fill
              className="object-cover object-center"
            />
          </div>
          <p className="col-span-2 text-xs text-stone-400">Walking the land with Edwin. October 2024.</p>
        </div>

        <p className="text-stone-600 leading-relaxed">
          Age eventually forced him off the land he loved. His son — 23, newly married, a toddler at home — now drives out on his days off to keep the work going. He carries his father&apos;s knowledge of this place. He is doing this because he wants to build something real for his young family.
        </p>
        <p className="text-stone-600 leading-relaxed">
          They are the reason the forest is what it is. This project exists to honor that — and to make it possible for Daniel to do this work full time, not just on borrowed hours.
        </p>
        <p className="text-stone-600 leading-relaxed">
          The goal is not to employ him. It is to build something with him — a formal operating structure where his family has a real stake in what this land becomes, not just a wage for keeping it alive. That conversation is happening. The structure is being built. We are not there yet, but that is the direction and we are not moving away from it.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Wildlife</h2>
        <ul className="text-stone-600 space-y-3 leading-relaxed">
          <li className="flex gap-3">
            <span className="font-medium shrink-0 w-40">Tapir</span>
            <span>Confirmed on the property. Baird&apos;s tapir — the largest land mammal in Central America. Their presence means the habitat is intact and undisturbed.</span>
          </li>
          <li className="flex gap-3">
            <span className="font-medium shrink-0 w-40">Resplendent Quetzal</span>
            <span>Habitat confirmed at elevation. One of the most sought birds in the Western Hemisphere. Found where old-growth forest meets the cloud line.</span>
          </li>
          <li className="flex gap-3">
            <span className="font-medium shrink-0 w-40">Glass frogs</span>
            <span>On the river. Translucent abdomens, visible organs. A clean-water indicator — they do not survive in degraded habitat.</span>
          </li>
          <li className="flex gap-3">
            <span className="font-medium shrink-0 w-40">Jaguar corridor</span>
            <span>The forest connects directly to Braulio Carrillo, which supports jaguar and puma. This land is part of that movement corridor. Protecting it keeps it open.</span>
          </li>
          <li className="flex gap-3">
            <span className="font-medium shrink-0 w-40">Fer-de-lance</span>
            <span>Present on the property. The primary snake safety concern. Wide cleared trails, closed footwear, no unguided night walking. The guide walks first.</span>
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">The Northwest Corner</h2>
        <p className="text-stone-600 leading-relaxed">
          The highest point of the property, around 1,600m, sits directly against the boundary of Braulio Carrillo National Park. Dense cloud forest, permanent cloud cover, the park as the northern wall. The most remote and biodiverse section of the property — and it has never been formally documented.
        </p>
        <p className="text-stone-600 leading-relaxed">
          In July 2026, a small crew makes the first walk there. The family leads. We follow.
        </p>
      </section>

      {/* Canopy mist photos — the destination */}
      <section className="grid grid-cols-2 gap-3">
        <div className="relative aspect-square rounded overflow-hidden">
          <Image
            src="/canopy-mist-1.jpg"
            alt="Cloud forest canopy with mist at Cielo Verde"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-square rounded overflow-hidden">
          <Image
            src="/canopy-mist-2.jpg"
            alt="Looking up through the cloud forest canopy"
            fill
            className="object-cover"
          />
        </div>
        <p className="col-span-2 text-xs text-stone-400 text-center">The bosque canopy. May 2026.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">The July 2026 Expedition</h2>
        <p className="text-stone-600 leading-relaxed">
          A wildlife photographer will document the property for the first time — photography, video, drone footage (pending DGAC permit). We will map all springs and water sources, identify platform sites, and produce the first real visual record of what this place is.
        </p>
        <p className="text-stone-600 leading-relaxed">
          Everything that launches publicly in August 2026 comes from this expedition. The trail work happening now is what makes it possible.
        </p>
      </section>

    </main>
  );
}
