"use client";

import { useState } from "react";

export default function EmailCapture() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, name }),
    });

    if (res.ok) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  }

  return (
    <section className="bg-emerald-950 text-white py-16 px-6">
      <div className="max-w-xl mx-auto text-center space-y-4">
        <p className="text-xs uppercase tracking-widest text-emerald-400">Come with us</p>
        <h2 className="text-2xl font-bold leading-snug">
          This is a small thing being built honestly in a loud world.
        </h2>
        <p className="text-stone-300 text-sm leading-relaxed">
          No newsletter. No content calendar. When something real happens on the land — a trail opened, a trail camera catches something, the July crew comes back with photos — we send one email. That&apos;s it. If that sounds like your kind of thing, come with us.
        </p>

        {status === "success" ? (
          <div className="bg-emerald-900/50 border border-emerald-700 rounded-md p-5 mt-4">
            <p className="font-medium text-emerald-300">You&apos;re on the list.</p>
            <p className="text-sm text-stone-400 mt-1">We&apos;ll reach out when the expedition wraps in July.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mt-6">
            <input
              type="text"
              placeholder="First name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="flex-1 bg-white/10 border border-white/20 rounded px-4 py-2 text-sm text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white/10 border border-white/20 rounded px-4 py-2 text-sm text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2 rounded text-sm font-medium transition-colors disabled:opacity-50 shrink-0"
            >
              {status === "loading" ? "Subscribing…" : "Follow"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="text-red-400 text-xs mt-2">Something went wrong. Email us directly at info@discovercieloverde.com</p>
        )}

        <p className="text-xs text-stone-500 mt-2">One email. No spam. Unsubscribe any time.</p>
      </div>
    </section>
  );
}
