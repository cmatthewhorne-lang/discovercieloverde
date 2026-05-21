import Link from "next/link";

const phases = [
  {
    id: 0,
    label: "Phase 0",
    title: "The Outpost",
    period: "May–July 2026",
    goal: "$6,000–9,000",
    status: "active" as const,
    summary: "Before anything can open or be shown to the world, the land needs to be workable and Daniel needs a base. This is the foundation everything else is built on.",
    sections: [
      {
        heading: "Trail Work",
        items: [
          "Priority clearing — machete, 2–3m walking width, 225m corridor toward the bosque",
          "Motoguadaña (Stihl FS) purchased — stays on the land",
        ],
      },
      {
        heading: "The Outpost — Edwin's Shack",
        note: "Everyone wants to tear it down. We are not tearing it down.",
        items: [
          "Bahareque walls — mud and cane, traditional Central American construction. Same technique used in this region for centuries.",
          "New metal roof",
          "Spring water line repaired",
          "Power audit — solar supplement where needed",
          "This is Edwin's house. It becomes Daniel's base. Eventually a small outpost for volunteers.",
        ],
      },
      {
        heading: "The Farm",
        items: [
          "2 meat heifers for Daniel's family — income from cattle sales is his, not the project's",
          "2 guard dogs — coyote protection for the cattle",
        ],
      },
      {
        heading: "Property",
        items: [
          "Gate replacement at road entrance",
          "Fence assessment and priority repairs",
          "Property cleanup",
          "Garmin inReach satellite communicator — safety for remote work",
        ],
      },
      {
        heading: "July 2026 Expedition",
        items: [
          "First full walk to the highest point of the property — the family leads, we follow",
          "Wildlife photographer documents the property for the first time — photography, video, drone",
          "All springs and water sources mapped",
          "Platform site candidates identified",
          "Before/after documentation of all Phase 0 work",
        ],
      },
    ],
    unlocks: "Daniel has a base. The land is documented. Phase 1 fundraising opens.",
  },
  {
    id: 1,
    label: "Phase 1",
    title: "Opening the Land",
    period: "Late 2026",
    goal: "$15,000–35,000",
    status: "upcoming" as const,
    summary: "The trail system opens. The farm expands. Day visitors can come. The legal structure that makes this a real partnership gets built.",
    sections: [
      {
        heading: "The Trail System",
        items: [
          "Full trail from the outpost to the highest point of the property",
          "1,500m as the crow flies — 3–4km of actual trail accounting for terrain",
          "Blazed, marked, cleared to walking width",
          "Trail signage — distance markers, species callouts",
        ],
      },
      {
        heading: "The Farm",
        items: [
          "Dairy cow(s) — milk, eggs, real food for the people working and staying here",
          "Chickens — eggs, pest control",
          "The farm is not commercial. It feeds the people who come, and it teaches them where food actually comes from.",
        ],
      },
      {
        heading: "The Outpost Expanded",
        items: [
          "Solar panels installed",
          "Composting toilet",
          "Bunk sleeping for 4–6 volunteers",
          "Running water from confirmed spring, gravity-fed",
        ],
      },
      {
        heading: "Programs Launched",
        items: [
          "Guided day walks — no ICT registration required for this model",
          "Birdwatching program — professional survey, full species list, eBird submission",
          "PSA/FONAFIFO application — ~$2,800/year passive income for primary forest preservation",
        ],
      },
      {
        heading: "Legal Structure",
        items: [
          "Costa Rica SRL formed — operating company, co-led with Daniel's family",
          "Daniel has formal officer role and documented path to equity stake",
          "Costa Rica attorney consulted before money moves at scale",
        ],
      },
    ],
    unlocks: "The land is walkable and open. Daniel has formal equity in the company. Day visitors can come. ICT registration process begins.",
  },
  {
    id: 2,
    label: "Phase 2",
    title: "Overnight",
    period: "2027",
    goal: "$40,000–90,000",
    status: "future" as const,
    summary: "The first overnight platform goes in at the northwest corner. Paying guests can stay. Small retreats begin. The land starts funding itself.",
    sections: [
      {
        heading: "Platforms",
        items: [
          "First overnight platform — highest point of the property, against the park boundary. Canvas tent, real bed, wood stove.",
          "2 additional platforms at different elevations and habitat zones",
          "ICT ecotourism registration — required before paying overnight guests",
          "Helicopter LZ registered with Cruz Roja — safety for remote overnight",
        ],
      },
      {
        heading: "The Outpost as Hub",
        items: [
          "Central kitchen and common area — extension of Edwin's shack, same materials, same scale",
          "Composting toilets and solar showers",
          "This is not a lodge. It is an outpost that grew.",
        ],
      },
      {
        heading: "Revenue",
        items: [
          "Paying overnight guests — $150–250/night",
          "Small writers retreats — 3–4 people, 4–5 days, total quiet. The forest is the program.",
          "Yoga retreats — partnered with an existing instructor. They bring people, we provide the land and food.",
          "Sponsor a tree — a name in the public ledger next to a real tree",
          "Carbon credits — voluntary market verification for primary cloud forest",
          "Limited print shop — numbered prints from the July expedition, field journal from the land",
        ],
      },
    ],
    unlocks: "The land funds itself. Daniel works here full time. The partnership is real and documented.",
  },
];

const statusStyles = {
  active: { dot: "bg-emerald-500", label: "In Progress", bar: "bg-emerald-600" },
  upcoming: { dot: "bg-amber-400", label: "Up Next", bar: "bg-amber-400" },
  future: { dot: "bg-stone-300", label: "Planned", bar: "bg-stone-300" },
};

export default function PhasesPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 space-y-6">

      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">The Plan</p>
        <h1 className="text-4xl font-semibold leading-tight">Three phases. One direction.</h1>
        <p className="mt-4 text-lg text-stone-600 leading-relaxed">
          This is a multi-year build, not a one-time campaign. Phase 0 is happening now. Everything after it depends on what we document in July and what we raise before then.
        </p>
        <p className="mt-3 text-lg text-stone-600 leading-relaxed">
          Every phase is a prerequisite for the next. Nothing gets skipped.
        </p>
      </div>

      {/* Phase cards */}
      <div className="space-y-12 pt-6">
        {phases.map((phase) => {
          const style = statusStyles[phase.status];
          return (
            <section key={phase.id} className={`border-l-4 pl-8 ${phase.status === "active" ? "border-emerald-600" : phase.status === "upcoming" ? "border-amber-400" : "border-stone-200"}`}>

              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className={`w-2 h-2 rounded-full shrink-0 ${style.dot}`} />
                    <span className="text-xs font-medium text-stone-500 uppercase tracking-widest">{phase.label} — {style.label}</span>
                  </div>
                  <h2 className="text-2xl font-semibold text-stone-900">{phase.title}</h2>
                  <p className="text-sm text-stone-500 mt-0.5">{phase.period} · Goal: {phase.goal}</p>
                </div>
              </div>

              {/* Summary */}
              <p className="text-stone-600 leading-relaxed mb-6 max-w-xl">{phase.summary}</p>

              {/* Sections */}
              <div className="space-y-5">
                {phase.sections.map((section) => (
                  <div key={section.heading}>
                    <p className="text-sm font-medium text-stone-700 mb-2">{section.heading}</p>
                    {"note" in section && section.note && (
                      <p className="text-sm text-stone-500 italic mb-2">{section.note}</p>
                    )}
                    <ul className="space-y-1.5">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex gap-3 text-sm text-stone-600 leading-relaxed">
                          <span className="text-stone-300 shrink-0 mt-0.5">—</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Unlocks */}
              <div className="mt-6 pt-5 border-t border-stone-100">
                <p className="text-xs text-stone-400 uppercase tracking-widest mb-1">What this unlocks</p>
                <p className="text-sm text-stone-600">{phase.unlocks}</p>
              </div>

            </section>
          );
        })}
      </div>

      {/* Numbers */}
      <section className="pt-6 border-t border-stone-200">
        <p className="text-sm font-medium text-stone-500 mb-4">The Numbers</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { label: "Phase 0 goal", value: "$6,000–9,000" },
            { label: "Seed Bearers to fund Daniel full time", value: "40 people at $25/mo" },
            { label: "PSA passive income (once approved)", value: "~$2,800/year" },
            { label: "Break-even on overnight platforms", value: "~120 nights/year" },
          ].map(({ label, value }) => (
            <div key={label} className="border border-stone-200 rounded p-4">
              <p className="text-xs text-stone-400 mb-1">{label}</p>
              <p className="font-semibold text-stone-800">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pt-4 space-y-3">
        <p className="text-stone-600 text-sm leading-relaxed">
          Phase 0 is happening now. The July window is tight. If you want to fund the work that makes everything else possible, this is the moment.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Link
            href="/support"
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded font-medium text-sm transition-colors"
          >
            Fund Phase 0
          </Link>
          <Link
            href="/volunteer"
            className="border border-stone-300 hover:border-stone-500 text-stone-700 px-6 py-3 rounded font-medium text-sm transition-colors"
          >
            Join the July Expedition
          </Link>
        </div>
      </section>

    </main>
  );
}
