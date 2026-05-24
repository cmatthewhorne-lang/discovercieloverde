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
        <h1 className="text-4xl font-semibold leading-tight">There is real work to do.</h1>
        <p className="mt-4 text-lg text-stone-600 leading-relaxed">
          On the ground or from wherever you are. If you want to put your time or skills toward something real, tell us what you can do.
        </p>
      </div>

      <section className="space-y-6">
        <div className="border border-stone-200 rounded-md p-6 space-y-3">
          <p className="font-semibold text-stone-800">Come in person</p>
          <p className="text-stone-600 text-sm leading-relaxed">
            The land is in the mountains of Costa Rica. Primary cloud forest at around 1,600m. Cold, wet, no signal, real work with your hands alongside Daniel and his family.
          </p>
          <p className="text-stone-600 text-sm leading-relaxed">
            We're heading back in a few months with a small crew and a photographer to document the land, clear trails, remove invasive plants from the river corridor, and start filming. If that sounds like something you want to be part of, get in touch.
          </p>
          <p className="text-stone-600 text-sm leading-relaxed">
            Further down the line: a natural building workshop where a small group of paying participants builds the first permanent structure on the land together. We'll announce that when it's ready.
          </p>
        </div>

        <div className="border border-stone-200 rounded-md p-6 space-y-3">
          <p className="font-semibold text-stone-800">Help remotely</p>
          <p className="text-stone-600 text-sm leading-relaxed">
            We're building a documentary series about this project — filmed as it happens, no script. The most immediate need is video editors who can cut raw expedition footage into episodes. If that's you, we want to hear from you.
          </p>
          <p className="text-stone-600 text-sm leading-relaxed">
            We also need people who can do CAD drawings, design, translate Spanish, help with social media, or contribute expertise in ecology, construction, or Costa Rican law. If you have a skill and want to apply it to something real, reach out.
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
