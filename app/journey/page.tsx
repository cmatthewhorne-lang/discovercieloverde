"use client";

import React, { useState, FormEvent } from "react";
import {
  generateTruthLine,
  summarizeIntention,
} from "@/lib/lineageEngine";

type JourneyFormState = {
  motherName: string;
  fatherName: string;
  intention: string;
};

export default function JourneyPage() {
  const [form, setForm] = useState<JourneyFormState>({
    motherName: "",
    fatherName: "",
    intention: "",
  });

  const [hasSubmitted, setHasSubmitted] = useState(false);

  function handleChange(field: keyof JourneyFormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (!hasSubmitted) setHasSubmitted(true);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setHasSubmitted(true);
    // later this is where API / AI call could go
  }

  const { motherName, fatherName, intention } = form;
  const hasNames =
    motherName.trim() !== "" && fatherName.trim() !== "";

  const previewText = hasNames
    ? generateTruthLine(motherName, fatherName, intention)
    : "You carry a line that refuses to disappear. In the quiet between memories and records, something in your ancestry leans forward. Tonight you listen.";

  const intentionSummary = summarizeIntention(intention);

  return (
    <main className="pt-32 pb-24 px-6 max-w-3xl mx-auto space-y-12">
      {/* Title + intro */}
      <section className="space-y-4">
        <p className="text-xs tracking-[0.35em] text-emerald-200/60 uppercase">
          Step One · Begin Your Journey
        </p>

        <h1 className="text-3xl md:text-4xl font-light text-white">
          Start with two last names,
          <br />
          and a willingness to listen.
        </h1>

        <p className="text-sm md:text-base text-zinc-300/90 leading-relaxed">
          This ritual does not ask for dates, documents, or proof. Only the{" "}
          <span className="text-emerald-200/80">
            names that carried you here
          </span>{" "}
          and a quiet intention for what you want to heal or understand.
          Everything happens locally in your browser. Nothing is stored.
        </p>
      </section>

      {/* FORM */}
      <section className="bg-zinc-900/70 border border-emerald-500/15 rounded-2xl p-6 md:p-8 shadow-[0_0_50px_-30px_rgba(16,185,129,0.8)] space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            {/* Mother’s maiden name */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-zinc-300/90 uppercase tracking-[0.2em]">
                Mother&apos;s Maiden Name
              </label>
              <input
                type="text"
                value={motherName}
                onChange={(e) =>
                  handleChange("motherName", e.target.value)
                }
                placeholder="e.g. García, Orozco, Carrillo"
                className="w-full rounded-md bg-black/50 border border-zinc-700/80 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-emerald-400/80 focus:border-emerald-400/80"
              />
            </div>

            {/* Father’s last name */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-zinc-300/90 uppercase tracking-[0.2em]">
                Father&apos;s Last Name
              </label>
              <input
                type="text"
                value={fatherName}
                onChange={(e) =>
                  handleChange("fatherName", e.target.value)
                }
                placeholder="e.g. Horne, Cervantes"
                className="w-full rounded-md bg-black/50 border border-zinc-700/80 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-emerald-400/80 focus:border-emerald-400/80"
              />
            </div>
          </div>

          {/* Intention */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-zinc-300/90 uppercase tracking-[0.2em]">
              Intention for this journey{" "}
              <span className="text-zinc-500 normal-case">
                (optional)
              </span>
            </label>
            <textarea
              rows={3}
              value={intention}
              onChange={(e) =>
                handleChange("intention", e.target.value)
              }
              placeholder="e.g. Understand why the women in my line carry so much grief. Release the fear that is not mine."
              className="w-full rounded-md bg-black/50 border border-zinc-700/80 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-emerald-400/80 focus:border-emerald-400/80 resize-none"
            />
          </div>

          {/* Submit */}
          <div className="flex items-center justify-between gap-4 pt-2">
            <button
              type="submit"
              disabled={!hasNames}
              className="px-6 py-2.5 rounded-full text-sm font-medium tracking-[0.16em] uppercase
                         bg-emerald-500/90 text-black shadow-lg shadow-emerald-500/25
                         hover:bg-emerald-400 active:scale-[0.99]
                         disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Begin the Ritual
            </button>

            <p className="text-[0.7rem] text-zinc-500 text-right max-w-xs">
              Names never leave your device. This is a private conversation
              between you, your line, and the land that is calling.
            </p>
          </div>
        </form>
      </section>

      {/* PREVIEW / GENERATED THREAD */}
      {hasSubmitted && (
        <section className="space-y-3">
          <p className="text-xs tracking-[0.3em] text-emerald-200/70 uppercase">
            Preview · Guide Reflection
          </p>

          <div className="rounded-2xl border border-emerald-500/20 bg-zinc-950/70 p-5 text-sm text-zinc-200 leading-relaxed space-y-4">
            <p className="whitespace-pre-line">{previewText}</p>

            {intentionSummary && (
              <p className="text-xs text-emerald-200/80">
                What this seems to be about:{" "}
                <span className="text-emerald-100/95">
                  {intentionSummary}
                </span>
              </p>
            )}
          </div>
        </section>
      )}
    </main>
  );
}
