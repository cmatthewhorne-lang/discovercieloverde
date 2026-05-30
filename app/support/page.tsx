export default function SupportPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 space-y-16">

      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">Support</p>
        <h1 className="text-4xl font-semibold leading-tight">The land has a heartbeat because of one family.</h1>
        <p className="mt-4 text-lg text-stone-600 leading-relaxed">
          Macho spent over 50 years in these mountains. His son Daniel has been on this land for 25 of them — clearing, watching, keeping it from being swallowed back. Not as employees. As the people who made sure it was still here when it mattered.
        </p>
        <p className="mt-3 text-stone-600 leading-relaxed">
          Any version of this project that doesn&apos;t start with that isn&apos;t worth building.
        </p>
      </div>

      <section className="max-w-2xl space-y-4">
        <p className="text-xs uppercase tracking-widest text-stone-400">What supporting this means right now</p>
        <p className="text-stone-600 leading-relaxed">
          We&apos;re not a nonprofit. Contributions aren&apos;t tax-deductible. This is a real project in an early phase, and we&apos;re being honest about that.
        </p>
        <p className="text-stone-600 leading-relaxed">
          What your support actually does: it keeps Daniel working the land while we&apos;re not there. Trail maintenance, invasive plant monitoring, watching the river corridor, being present. That continuity is the foundation everything else gets built on.
        </p>
        <p className="text-stone-600 leading-relaxed">
          If that&apos;s worth something to you, we&apos;ll use it carefully and tell you what happened.
        </p>
      </section>

      <section className="bg-stone-50 rounded-md p-6 space-y-3">
        <p className="font-semibold text-stone-800">How to contribute</p>
        <p className="text-stone-600 text-sm leading-relaxed">
          Send what feels right to <strong>@cieloverde</strong> on Venmo. No minimum. Leave a note if you want — or don&apos;t.
        </p>
        <a
          href="https://venmo.com/cieloverde"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded font-medium text-sm transition-colors"
        >
          Send via Venmo @cieloverde
        </a>
        <p className="text-xs text-stone-400 pt-1">
          Contributions are not tax-deductible. This is a personal project, not a nonprofit.
        </p>
      </section>

      <section className="max-w-2xl space-y-4">
        <p className="text-xs uppercase tracking-widest text-stone-400">Stay close</p>
        <p className="text-stone-600 leading-relaxed">
          The best way to follow what&apos;s happening — what Daniel&apos;s finding on the land, what the camera traps are catching, what&apos;s being built — is the newsletter. One email when there&apos;s something worth saying.
        </p>
      </section>

      <section className="max-w-2xl space-y-4 border-t border-stone-200 pt-10">
        <p className="text-stone-500 text-sm leading-relaxed">
          Money isn&apos;t the only thing that moves a project like this. If you have a skill — editing, building, ecology, law, Spanish — there&apos;s real work to do.
        </p>
        <a
          href="/get-involved"
          className="inline-block border border-stone-300 hover:border-stone-500 text-stone-700 px-6 py-3 rounded font-medium text-sm transition-colors"
        >
          Get Involved →
        </a>
      </section>

    </main>
  );
}
