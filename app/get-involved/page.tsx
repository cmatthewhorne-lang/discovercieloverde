"use client";

import { useState } from "react";

const skillOptions = [
  "Trail work / come in person",
  "Video editing",
  "Photography / photo editing",
  "CAD / architectural drawing",
  "Social media / content",
  "Translation (Spanish ↔ English)",
  "Web development",
  "Construction / carpentry",
  "Botany / ecology",
  "Legal (Costa Rica)",
  "Fundraising / grant writing",
  "Graphic design",
  "Other",
];

export default function GetInvolvedPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  function toggle(skill: string) {
    setSelected((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      location: data.get("location"),
      skills: selected.length > 0 ? selected.join(", ") : "Not specified",
      message: data.get("message"),
    };

    try {
      const res = await fetch("/api/get-involved", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      const bodyText = Object.entries(payload).map(([k, v]) => `${k}: ${v}`).join("\n");
      window.location.href = `mailto:info@discovercieloverde.com?subject=${encodeURIComponent("Cielo Verde — Get Involved")}&body=${encodeURIComponent(bodyText)}`;
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-16 space-y-16">

      <div>
        <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">Get Involved</p>
        <h1 className="text-4xl font-semibold leading-tight">We&apos;re building the team first.</h1>
        <p className="mt-4 text-lg text-stone-600 leading-relaxed">
          Before investors, before workshops, before anything opens — we need a small group of people who want to help build this from the ground up. Not because it&apos;s finished. Because they want to be part of making it.
        </p>
      </div>

      <section className="space-y-6">
        <div className="border border-stone-200 rounded-md p-6 space-y-4">
          <p className="font-semibold text-stone-800">What we need right now</p>
          <div className="space-y-3">
            {[
              {
                role: "Video editor",
                detail: "Raw documentary footage from a cloud forest — trail work, wildlife, a caretaker family, a land being figured out in real time. The rough edges are the point. Not a paid gig yet, but the right person will have something real to show for it."
              },
              {
                role: "Natural builder",
                detail: "Bamboo, cob, timber — someone with hands-on experience who wants to help design and eventually lead the first structure on the land."
              },
              {
                role: "Ecologist or conservation biologist",
                detail: "Someone who understands biological corridors, cloud forest species, or rewilding in Central America. Scientific or practical background, either works."
              },
              {
                role: "Spanish speaker",
                detail: "Comfortable navigating rural Costa Rica. Help with translation, local coordination, and community communication."
              },
              {
                role: "Content and social media",
                detail: "Not managing posts — building the story. Someone who understands how conservation projects find their audience and wants to help shape that from the beginning."
              },
            ].map(({ role, detail }) => (
              <div key={role} className="border-l-2 border-emerald-200 pl-4">
                <p className="text-sm font-medium text-stone-800">{role}</p>
                <p className="text-sm text-stone-500 mt-0.5 leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-stone-200 rounded-md p-6 space-y-3">
          <p className="font-semibold text-stone-800">Come in person</p>
          <p className="text-stone-600 text-sm leading-relaxed">
            The land is in the mountains of Costa Rica. Primary cloud forest at around 1,600m. Cold, wet, no signal, real work with your hands alongside Daniel and his family.
          </p>
          <p className="text-stone-600 text-sm leading-relaxed">
            We&apos;re heading back in a few months with a small crew and a photographer to document the land, clear trails, remove invasive plants from the river corridor, and start filming. If that sounds like something you want to be part of, get in touch.
          </p>
          <p className="text-stone-500 text-xs leading-relaxed pt-1">
            Further down the line: a natural building workshop where a small group of paying participants builds the first permanent structure on the land together. We&apos;ll announce that when it&apos;s ready.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-6">Get in touch</h2>

        {submitted ? (
          <div className="bg-emerald-50 border border-emerald-200 rounded-md p-6 text-emerald-800">
            <p className="font-medium">Got it — thank you.</p>
            <p className="text-sm mt-1">We will be in touch.</p>
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
              <label className="block text-sm font-medium text-stone-700 mb-1">Where are you based?</label>
              <input
                name="location"
                placeholder="e.g. Berlin, Germany"
                className="w-full border border-stone-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-3">What can you offer?</label>
              <div className="flex flex-wrap gap-2">
                {skillOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => toggle(opt)}
                    className={`text-sm px-3 py-1.5 rounded border transition-colors ${
                      selected.includes(opt)
                        ? "bg-emerald-600 border-emerald-600 text-white"
                        : "border-stone-300 text-stone-600 hover:border-stone-500"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Tell us more</label>
              <textarea
                name="message"
                rows={4}
                placeholder="What you've done, what you can offer, how much time you have."
                className="w-full border border-stone-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded font-medium text-sm transition-colors disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send it"}
            </button>
          </form>
        )}
      </section>

    </main>
  );
}
