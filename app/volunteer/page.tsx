"use client";

import { useState } from "react";
import Image from "next/image";

const CONTACT_EMAIL = "info@discovercieloverde.com";

export default function VolunteerPage() {

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Cielo Verde — Volunteer Signup")}&body=${encodeURIComponent(Object.entries(data).map(([k, v]) => `${k}: ${v}`).join("\n"))}`;
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-16 space-y-16">

      <div>
        <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">Volunteer</p>
        <h1 className="text-4xl font-semibold leading-tight">This is not a tour.</h1>
        <p className="mt-4 text-lg text-stone-600 leading-relaxed">
          Most people come to Costa Rica for the sweets — zip lines, resort pools, curated wildlife encounters from a van window. This is the meats. Primary cloud forest at 1,500m, real work with your hands, no signal, no itinerary, and a family that has kept this land alive for over 25 years who will show you things you cannot find on any map.
        </p>
        <p className="mt-3 text-lg text-stone-600 leading-relaxed">
          There is something specific that happens when you do physical work in a place this old and this intact. Your body has a job. The forest doesn&apos;t care what you left behind. If you need that right now, this might be for you.
        </p>
      </div>

      <div className="relative w-full h-64 md:h-80 rounded overflow-hidden">
        <Image
          src="/potrero-wide.jpg"
          alt="The scale of Cielo Verde — two people small against the potrero and cloud"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-stone-900/80 to-transparent p-5">
          <p className="text-white text-sm">The property. October 2024. Those two figures in the distance give you the scale.</p>
        </div>
      </div>

      <section className="bg-stone-50 rounded-md p-6 space-y-2">
        <p className="font-semibold text-stone-800">Before you go further — read this.</p>
        <p className="text-stone-600 text-sm leading-relaxed">
          There are no structures. No bathrooms. No hot water. You are camping in cold, wet cloud forest at 1,500m+ elevation. It rains. It is muddy. It is not a walk in the park. It is also extraordinary — but only if you know what you are signing up for.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">What you are signing up for</h2>
        <ul className="text-stone-600 space-y-3 text-sm leading-relaxed">
          <li className="flex gap-3"><span className="text-stone-400 shrink-0">—</span>4–5 hours of physical work per day. Trail clearing, fencing, building. Real work.</li>
          <li className="flex gap-3"><span className="text-stone-400 shrink-0">—</span>Camping. Tents, cold, wet, no bathroom. Cloud forest around 1,600m. If that sounds miserable to you, this is not your trip.</li>
          <li className="flex gap-3"><span className="text-stone-400 shrink-0">—</span>Food provided on the land. Simple, real food.</li>
          <li className="flex gap-3"><span className="text-stone-400 shrink-0">—</span>Working alongside the caretaker family. They know every trail, spring, and tree. You will learn more from a day with them than from a week anywhere else in the country.</li>
          <li className="flex gap-3"><span className="text-stone-400 shrink-0">—</span>Remote. No zip lines nearby. No smoothie bar. No curated experience. The real Costa Rica.</li>
          <li className="flex gap-3"><span className="text-stone-400 shrink-0">—</span>Valid passport and reasonable fitness required. No construction experience needed.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">July 2026 — First Expedition</h2>
        <div className="border border-stone-200 rounded-md p-6 space-y-4">
          <p className="font-medium">Dates TBD · July 2026 · Costa Rica</p>
          <p className="text-stone-600 text-sm leading-relaxed">
            This is the first time a crew has ever documented this property. A wildlife photographer will lead the documentation — photography, video, drone footage. We will make the first full walk to the highest point of the property, map all springs and water sources, and produce the first real visual record of what this place is.
          </p>
          <p className="text-stone-600 text-sm leading-relaxed">
            The caretaker family will lead us. We will follow.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded p-4 text-sm text-amber-800">
            <strong>Passport required.</strong> If you do not have one, apply now — processing takes 6–8 weeks minimum and the July window is tight.
          </div>
        </div>
      </section>

      <section className="bg-stone-50 rounded-md p-6">
        <p className="font-semibold text-stone-800 mb-2">Can&apos;t make the expedition but want to help?</p>
        <p className="text-stone-600 text-sm leading-relaxed mb-4">
          We need video editors, translators, social media help, and more — none of which requires a passport or sleeping in the rain.
        </p>
        <a href="/get-involved" className="text-sm text-emerald-700 underline underline-offset-2 hover:text-emerald-600">
          Offer your skills →
        </a>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Future Expeditions</h2>
        <p className="text-stone-600 text-sm leading-relaxed">
          After July 2026, expeditions will run regularly as the trail system develops. The work changes as the project grows — trail building, platform construction, birding surveys, wildlife monitoring. Sign up and we will reach out when dates are confirmed.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-6">Sign up</h2>

        {submitted ? (
          <div className="bg-emerald-50 border border-emerald-200 rounded-md p-6 text-emerald-800">
            <p className="font-medium">Got it — thank you.</p>
            <p className="text-sm mt-1">We will be in touch when expedition dates are confirmed.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Name *</label>
                <input
                  name="name"
                  required
                  className="w-full border border-stone-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Email *</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full border border-stone-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">City / Country *</label>
              <input
                name="location"
                required
                placeholder="e.g. Nashville, USA"
                className="w-full border border-stone-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Skills or background</label>
              <input
                name="skills"
                placeholder="e.g. carpentry, photography, botany, general labor"
                className="w-full border border-stone-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Passport status *</label>
              <div className="flex gap-4 text-sm flex-wrap">
                {["Valid passport", "In progress", "No passport yet"].map((opt) => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="passport" value={opt} required className="accent-emerald-600" />
                    {opt}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Which expedition?</label>
              <select
                name="expedition"
                className="w-full border border-stone-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="july-2026">July 2026 — first expedition</option>
                <option value="future">Future expedition — keep me posted</option>
                <option value="both">Either — I&apos;m flexible</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Anything else?</label>
              <textarea
                name="message"
                rows={3}
                className="w-full border border-stone-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded font-medium text-sm transition-colors disabled:opacity-50"
            >
              {loading ? "Sending..." : "I'm in"}
            </button>
          </form>
        )}
      </section>

    </main>
  );
}
