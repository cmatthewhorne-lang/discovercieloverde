"use client";

import { useState } from "react";

const skillCategories = [
  {
    heading: "On the ground",
    options: [
      "Trail work / general labor",
      "Farming / permaculture / food growing",
      "Animal husbandry (chickens, cattle)",
      "Construction / carpentry",
      "Botany / ecology / wildlife monitoring",
    ],
  },
  {
    heading: "Remote",
    options: [
      "Video editing",
      "Photography / photo editing",
      "Social media / content creation",
      "Translation (Spanish ↔ English)",
      "Web development",
      "Legal (Costa Rica business law)",
      "Fundraising / grant writing",
      "Graphic design",
      "Apparel / merch design",
      "Illustration / printmaking",
    ],
  },
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
      skills: selected.join(", "),
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
      window.location.href = `mailto:info@discovercieloverde.com?subject=${encodeURIComponent("Cielo Verde — Skills Offer")}&body=${encodeURIComponent(bodyText)}`;
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-16 space-y-16">

      <div>
        <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">Get Involved</p>
        <h1 className="text-4xl font-bold leading-tight">You don&apos;t have to be there to help.</h1>
        <p className="mt-4 text-lg text-stone-600 leading-relaxed">
          The expedition needs boots on the ground. The project needs everything else — people who can edit video, translate, build websites, grow food, understand Costa Rica law, and tell this story to the right people.
        </p>
        <p className="mt-3 text-lg text-stone-600 leading-relaxed">
          If you have a skill and want to put it toward something real, tell us what you can do.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">What we need</h2>
        <div className="space-y-6">
          {skillCategories.map((cat) => (
            <div key={cat.heading}>
              <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">{cat.heading}</p>
              <ul className="text-stone-600 text-sm space-y-2 leading-relaxed">
                {cat.options.map((opt) => (
                  <li key={opt} className="flex gap-2">
                    <span className="text-stone-300">—</span>
                    {opt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-sm text-stone-500 pt-2">
          Don&apos;t see your skill? Tell us anyway. We are building this as we go.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-6">Offer your skills</h2>

        {submitted ? (
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 text-emerald-800">
            <p className="font-medium">Got it — thank you.</p>
            <p className="text-sm mt-1">We will be in touch when there is work that fits what you can do.</p>
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
              <label className="block text-sm font-medium text-stone-700 mb-1">City / Country</label>
              <input
                name="location"
                placeholder="e.g. Nashville, USA"
                className="w-full border border-stone-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-3">What can you offer? (select all that apply)</label>
              <div className="space-y-5">
                {skillCategories.map((cat) => (
                  <div key={cat.heading}>
                    <p className="text-xs uppercase tracking-widest text-stone-400 mb-2">{cat.heading}</p>
                    <div className="flex flex-wrap gap-2">
                      {cat.options.map((opt) => (
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
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Tell us more about what you can do</label>
              <textarea
                name="message"
                rows={4}
                placeholder="Your background, what you've worked on, how much time you can offer, anything relevant."
                className="w-full border border-stone-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading || selected.length === 0}
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded font-medium text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send it"}
            </button>
            {selected.length === 0 && (
              <p className="text-xs text-stone-400">Select at least one skill above to submit.</p>
            )}
          </form>
        )}
      </section>

    </main>
  );
}
