# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # local dev server (Next.js)
npm run build    # production build
npm run lint     # ESLint
```

No test suite is configured.

## Stack

- **Next.js 16 / React 19** with the App Router
- **Tailwind CSS v4** — utility-first, no config file; uses `@tailwindcss/postcss`
- **shadcn/ui** components in `components/ui/` (Badge, Button, Card, Progress, Table)
- **Framer Motion** for animations (`components/FadeIn.tsx`)
- **Resend** for transactional email via API routes (`RESEND_API_KEY` env var required)
- Deployed on **Vercel** (`.vercel/project.json` present)

## Architecture

All pages are Server Components by default unless they need client interactivity (hooks, event handlers → `"use client"`). The layout wraps every page with a fixed `<Nav>` and `<Footer>`.

### Routes

| Path | File | Notes |
|---|---|---|
| `/` | `app/page.tsx` | Hero / homepage |
| `/land` | `app/land/page.tsx` | About the property |
| `/phases` | `app/phases/page.tsx` | Three-phase roadmap (data inline) |
| `/support` | `app/support/page.tsx` | Fundraising tiers + public ledger |
| `/volunteer` | `app/volunteer/page.tsx` | Expedition sign-up |
| `/get-involved` | `app/get-involved/page.tsx` | General contact form |

### API Routes

All routes POST to Resend and forward form submissions to `info@discovercieloverde.com`:

- `app/api/subscribe/route.ts` — email list sign-up
- `app/api/volunteer/route.ts` — expedition volunteer form
- `app/api/get-involved/route.ts` — general interest form

### Public Ledger (`data/ledger.json`)

This is the canonical source of truth for Phase 0 budget. The `/support` page reads it at build time. Schema:

```ts
{
  date: string,         // "TBD" or ISO date
  category: string,     // groups rows in the table
  item: string,
  note: string,
  amount: number,       // USD
  status: "Needed" | "Pending" | "Funded",
  estimate: boolean,    // true → amount shown with ~ prefix
  evidence: string | null
}
```

Progress bar on `/support` counts only `status === "Funded"` entries against `GOAL = 6000`.

### Fonts & Design Tokens

- Body: `DM Sans` (variable `--font-sans`)
- Headings: `Lora` (variable `--font-lora`)
- Brand color: `emerald-600` for CTAs; `stone-*` scale for all neutral text/borders
- Max content width: `max-w-3xl` on inner pages, `max-w-5xl` on the nav

### Contribution Flow

No payment processor is integrated. "Give" buttons on `/support` open a `mailto:` link pre-filled with tier details. Payment is handled manually via Venmo/PayPal/Zelle.
