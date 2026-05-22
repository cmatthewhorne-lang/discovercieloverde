import ledger from "@/data/ledger.json";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const GOAL = 6000;
const funded = ledger
  .filter((e) => e.status === "Funded")
  .reduce((sum, e) => sum + e.amount, 0);
const pct = Math.min(Math.round((funded / GOAL) * 100), 100);

export default function SupportPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 space-y-16">

      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">Where the money goes</p>
        <h1 className="text-4xl font-semibold leading-tight">This is happening either way.</h1>
        <p className="mt-4 text-lg text-stone-600 leading-relaxed">
          Daniel is on the land on his days off, clearing trail with a machete. I'm figuring out the rest. This is my dream and I'm going to make it happen one way or the other — it would just be better with some friends.
        </p>
        <p className="mt-3 text-stone-600 leading-relaxed">
          If you want to put something toward it, here's exactly where it goes. Every dollar is tracked below.
        </p>
      </div>

      <section>
        <div className="flex justify-between items-baseline mb-3">
          <span className="text-2xl font-bold text-stone-900">${funded.toLocaleString()} <span className="text-sm font-normal text-stone-500">raised</span></span>
          <span className="text-sm text-stone-500">Goal: ${GOAL.toLocaleString()}</span>
        </div>
        <Progress value={pct} className="h-3 bg-stone-200 [&>div]:bg-emerald-600" />
        <p className="text-xs text-stone-400 mt-2">{pct}% of Phase 0 funded</p>
      </section>

      <section className="bg-stone-50 rounded-md p-6 space-y-3">
        <p className="font-semibold text-stone-800">How to contribute</p>
        <p className="text-stone-600 text-sm leading-relaxed">
          Send what you can to <strong>@cieloverde</strong> on Venmo. No minimum. In the note, write what it's for — a day of trail work, the gate, whatever feels right. Or leave it blank.
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

      <section>
        <h2 className="text-sm font-medium text-stone-500 mb-1">The Ledger</h2>
        <p className="text-sm text-stone-600 mb-1">
          Every item Phase 0 requires, with what it costs and why. Amounts marked with ~ are estimates, updated to actual when purchased.
        </p>
        <p className="text-xs text-stone-400 mb-6">Last updated: May 2026 · Updated manually by Christopher</p>

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
                          {row.source ?? (row.evidence ?? "—")}
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

    </main>
  );
}
