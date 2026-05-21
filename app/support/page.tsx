import ledger from "@/data/ledger.json";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const GOAL = 6000;
const funded = ledger
  .filter((e) => e.status === "Funded")
  .reduce((sum, e) => sum + e.amount, 0);
const pct = Math.min(Math.round((funded / GOAL) * 100), 100);

const CONTACT_EMAIL = "info@discovercieloverde.com";

const tiers = [
  {
    amount: 25,
    label: "Seed Bearer",
    desc: "Monthly. The most important thing you can do. 40 people at $25/month is what it takes for Daniel to stop working two jobs and work this land full time.",
    recurring: true,
  },
  {
    amount: 50,
    label: "One Day on the Land",
    desc: "$50 is one day of work — roughly 25–30 meters of trail cleared with a machete. Daniel tracks every session. You'll see it in the ledger.",
    recurring: false,
  },
  {
    amount: 100,
    label: "Two Days",
    desc: "50–60 meters. Enough to open a full section and see where the next one starts.",
    recurring: false,
  },
  {
    amount: 250,
    label: "Five Days",
    desc: "125–150 meters — a meaningful push toward the northwest corner. A full work week on borrowed time made real.",
    recurring: false,
  },
  {
    amount: 500,
    label: "Ten Days",
    desc: "250–300 meters. This is what moves a trail from idea to walkable. Half a month of work.",
    recurring: false,
  },
  {
    amount: 1200,
    label: "Two Heifers for Daniel",
    desc: "Daniel's family gets two cows. When the calves are born and sold, that money is his — not the project's. It's income that doesn't depend on donations.",
    recurring: false,
  },
];

function mailtoLink(tier: typeof tiers[0]) {
  const subject = encodeURIComponent(
    `Cielo Verde — ${tier.recurring ? `$${tier.amount}/month` : `$${tier.amount}`} — ${tier.label}`
  );
  const body = encodeURIComponent(
    `Hi,\n\nI'd like to contribute to Cielo Verde.\n\nTier: ${tier.label}\nAmount: $${tier.amount}${tier.recurring ? "/month" : " one-time"}\n\nPlease send me instructions on how to send payment.\n\nThank you.`
  );
  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

export default function SupportPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 space-y-16">

      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">Support the Project</p>
        <h1 className="text-4xl font-semibold leading-tight">Pay for the work. Not the dream.</h1>
        <p className="mt-4 text-lg text-stone-600 leading-relaxed">
          There is no resort being built here. No zip lines, no infinity pool, no pitch deck. There is primary cloud forest that has never been cleared, a family that has kept it alive for 25 years, and trail work that needs to happen before July.
        </p>
        <p className="mt-3 text-lg text-stone-600 leading-relaxed">
          Every dollar below goes to one of two things: days of work on the land, or building a stable income for Daniel and his family so he can stop splitting his time.
        </p>
      </div>

      {/* The real goal */}
      <section className="border-l-4 border-emerald-600 pl-6 max-w-2xl">
        <p className="font-semibold text-stone-800 mb-2">What this actually is</p>
        <p className="text-stone-600 text-sm leading-relaxed mb-3">
          Daniel drives out on his days off from his regular job — 23 years old, newly married, a toddler at home — and clears trail with a machete. He does it because his father spent 25 years on this land and had to leave when his health gave out. Daniel is carrying that forward.
        </p>
        <p className="text-stone-600 text-sm leading-relaxed">
          $50 is one day of work. $1,000 a month — 40 people at $25 — is what it takes for this to be his actual job instead of something he fits in around another job. Two cows, and his family has income from selling calves that doesn't depend on donations at all. That is what we are building toward.
        </p>
      </section>

      {/* Progress */}
      <section>
        <div className="flex justify-between items-baseline mb-3">
          <span className="text-2xl font-bold text-stone-900">${funded.toLocaleString()} <span className="text-sm font-normal text-stone-500">raised</span></span>
          <span className="text-sm text-stone-500">Goal: ${GOAL.toLocaleString()}</span>
        </div>
        <Progress value={pct} className="h-3 bg-stone-200 [&>div]:bg-emerald-600" />
        <p className="text-xs text-stone-400 mt-2">
          {pct}% of Phase 0 funded — be the first to contribute
        </p>
      </section>

      {/* How to contribute */}
      <section className="bg-stone-50 rounded-md p-6">
        <p className="font-semibold text-stone-800 mb-2">How to contribute right now</p>
        <p className="text-stone-600 text-sm leading-relaxed mb-3">
          Stripe payments are coming. Until then, click any tier below — it will open an email to us with your selection filled in. We will send you payment instructions directly. Every contribution is recorded in the public ledger below.
        </p>
        <p className="text-xs text-stone-400">
          Contributions are not tax-deductible. Nova Vista Holdings LLC is a for-profit entity.
        </p>
      </section>

      {/* Contribution tiers */}
      <section>
        <h2 className="text-xs uppercase tracking-widest text-stone-400 mb-6">Where the Money Goes</h2>

        {/* Seed Bearer — elevated */}
        {tiers.filter(t => t.recurring).map((tier) => (
          <a key={tier.amount} href={mailtoLink(tier)} className="block mb-4 group">
            <Card className="border-emerald-500 bg-emerald-50/40 hover:bg-emerald-50/70 transition-colors">
              <CardContent className="flex items-start justify-between gap-4 p-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl font-bold text-emerald-700">${tier.amount}</span>
                    <Badge className="bg-emerald-600 text-white hover:bg-emerald-600">Monthly</Badge>
                    <span className="font-semibold text-stone-800">— {tier.label}</span>
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed">{tier.desc}</p>
                </div>
                <span className="shrink-0 bg-emerald-600 group-hover:bg-emerald-500 text-white text-sm px-4 py-2 rounded transition-colors">
                  Give
                </span>
              </CardContent>
            </Card>
          </a>
        ))}

        {/* One-time tiers */}
        <div className="space-y-3">
          {tiers.filter(t => !t.recurring).map((tier) => (
            <a key={tier.amount} href={mailtoLink(tier)} className="block group">
              <Card className="border-stone-200 hover:border-emerald-400 hover:bg-stone-50/60 transition-colors">
                <CardContent className="flex items-start justify-between gap-4 p-5">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg font-bold text-stone-800">${tier.amount}</span>
                      <span className="text-stone-600">— {tier.label}</span>
                    </div>
                    <p className="text-sm text-stone-500 leading-relaxed">{tier.desc}</p>
                  </div>
                  <span className="shrink-0 bg-emerald-600 group-hover:bg-emerald-500 text-white text-sm px-4 py-2 rounded transition-colors">
                    Give
                  </span>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        <p className="text-xs text-stone-400 mt-4">
          Clicking Give opens an email. We will reply with payment instructions within 24 hours.
        </p>
      </section>

      {/* Public ledger */}
      <section>
        <h2 className="text-sm font-medium text-stone-500 mb-1">The Ledger</h2>
        <p className="text-sm text-stone-600 mb-1">
          Every item Phase 0 requires, with what it costs and why. Amounts marked with ~ are estimates — updated to actual when purchased. Before and after photos added as work happens.
        </p>
        <p className="text-xs text-stone-400 mb-6">Last updated: May 2026 · Updated manually by Mateo</p>

        {/* Group by category */}
        {Array.from(new Set(ledger.map((r) => r.category))).map((category) => {
          const rows = ledger.filter((r) => r.category === category);
          const categoryTotal = rows.reduce((sum, r) => sum + r.amount, 0);
          return (
            <div key={category} className="mb-8">
              <div className="flex items-baseline justify-between mb-2">
                <p className="text-xs uppercase tracking-widest text-stone-400">{category}</p>
                <p className="text-xs text-stone-400">${categoryTotal.toLocaleString()}</p>
              </div>
              <div className="rounded border border-stone-200 overflow-hidden">
                <Table>
                  <TableBody>
                    {rows.map((row, i) => (
                      <TableRow key={i} className={row.status === "Funded" ? "bg-emerald-50/40" : ""}>
                        <TableCell className="font-medium text-stone-800 w-24">
                          {row.estimate ? "~" : ""}${row.amount.toLocaleString()}
                        </TableCell>
                        <TableCell>
                          <p className="text-sm text-stone-700">{row.item}</p>
                          <p className="text-xs text-stone-400 mt-0.5 leading-relaxed">{row.note}</p>
                        </TableCell>
                        <TableCell className="w-28">
                          <Badge variant="outline" className={
                            row.status === "Funded"
                              ? "border-emerald-300 bg-emerald-50 text-emerald-700"
                              : row.status === "Pending"
                              ? "border-amber-300 bg-amber-50 text-amber-700"
                              : "border-stone-200 bg-stone-50 text-stone-500"
                          }>
                            {row.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-stone-400 text-xs w-28">
                          {row.evidence ?? "—"}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          );
        })}

        <div className="flex justify-between items-baseline pt-2 border-t border-stone-200">
          <p className="text-xs text-stone-400">~ = estimate, updated to actual when purchased</p>
          <p className="text-sm font-semibold text-stone-800">
            Total: ${ledger.reduce((s, r) => s + r.amount, 0).toLocaleString()}
          </p>
        </div>
      </section>

      {/* Legal */}
      <section className="bg-stone-50 rounded-md p-5 text-sm text-stone-500">
        <p>
          <strong className="text-stone-700">Important:</strong> Contributions to Cielo Verde are not tax-deductible. Nova Vista Holdings LLC is a for-profit entity registered in Wyoming. This is not a nonprofit organization.
        </p>
      </section>

    </main>
  );
}
