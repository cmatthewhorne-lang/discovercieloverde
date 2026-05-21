# Discover Cielo Verde — Site Specification
*Updated May 2026. Reference this before any development session.*

---

## What This Site Is

A conservation project support site for Cielo Verde — primary cloud forest on the southern border of Braulio Carrillo National Park, Costa Rica.

The site has three jobs:
1. Tell the real story of the land and the people on it
2. Solicit financial support for on-ground conservation work
3. Recruit volunteers for expeditions (starting July 2026)

This is NOT a mystical brand site. It is NOT primarily an apparel store. It is a transparent, story-driven conservation project with crowdfunding and volunteer components.

**The center of the story is a partnership** — not a foreign landowner and his caretakers, but two families committed to the same piece of land, building something together. That framing must be present in every section of the site.

---

## The Story

**The land:** Primary cloud forest, never cleared, on the border of Braulio Carrillo National Park. Year-round river on the western boundary. Northwest corner at 1,612m directly against the park. Property ranges from 1,518m to 1,612m. Tapir confirmed on property. Resplendent Quetzal habitat at elevation. Glass frogs on the river. Big cat corridor from the park.

**The road:** Camino Carrillo, built 1882, borders the eastern boundary of the property. Bishop Bernardo Augusto Thiel was exiled along this road in 1884 and documented the forest. 143 years of travelers. We are the latest chapter.

**First peoples:** Huetar territory. Acknowledged, not romanticized.

**The caretaker family — this is the heart of the project:**
The father lived in the area for over 50 years, and on this land for over 25. Not as an employee — as a steward. He knew every trail, every spring, every tree. His health eventually forced him off the land he loved. He had to leave. That matters. His son — 23 years old, newly married, a toddler at home — now drives out on his days off from his regular job to keep the work alive. He is doing this out of love for his father's life's work and because he wants to build a better future for his young family. This project exists to make that possible — to turn what he does on his days off into his actual livelihood. (Names withheld until permission granted from the family.)

**How it came to us:** The land came as a gift. We intend to honor it.

**The partnership:** This is not a project where an outside owner hired local help. The caretaker family's knowledge, presence, and labor is what makes this land what it is. The goal is a formal operating partnership — a Costa Rica operating company, co-led with the caretaker family, that leases and operates the land. The son's path is toward a formal role and equity stake in that company, not indefinite employment. That structure is being built now.

**What we're building:** A conservation sanctuary and small-scale ecotourism destination. Trails, platforms for overnight stays in the national park buffer zone, a birding program, income that makes conservation self-funding — and that gives the caretaker family a real livelihood from the land they've kept alive.

**Where we are now:** Phase 0. The son is clearing trails on his days off. July 2026 expedition planned with wildlife photographer (Andrew Tremblay, Florida) and volunteer crew. Nothing is open yet. Everything funded now goes directly to on-ground work and to supporting the caretaker family.

---

## Legal / Financial

- **Entity receiving payments:** Nova Vista Holdings LLC (Wyoming)
- **Land holding entity:** Costa Rica S.A. (not disclosed publicly)
- **Planned operating entity:** New Costa Rica SRL or S.A., to be formed, co-led with caretaker family — this is where the partnership is formalized and where the son holds a formal role and path to equity
- **Payment processor:** Stripe (to be integrated)
- **Disclosure required on all payment pages:** "Contributions to Cielo Verde are not tax-deductible. Nova Vista Holdings LLC is a for-profit entity."
- **DO NOT** mention La Chilindrina S.A. or specific Costa Rica land-holding structure publicly
- **DO NOT** publish exact acreage or precise location details (security risk for vacant land)
- **DO NOT** frame the caretaker family as employees or hired help — they are partners in formation

---

## Anti-Colonist Framing — Non-Negotiable

This section exists because the risk is real. The pattern of foreign landowner + local caretaker reads as colonial even with good intentions. Every page must actively counter this.

**What makes this different — and must come through:**
- The father was in this area for over 50 years, on this land for over 25 — before we were involved. His presence and knowledge created what exists.
- The son is not working for us. He is continuing his father's work. We are trying to fund *his* future.
- Knowledge flows one direction: they know this land, we do not.
- The operating structure is being built to give him equity, not just wages.
- We do not make land decisions without him.

**What to avoid in copy:**
- "Our caretakers" — say "the caretaker family" or, once named, use his name
- "We hired / we employ" — say "we work alongside" or "in partnership with"
- Describing him as loyal, hardworking, grateful — let facts speak, not adjectives
- Photos of the landowner on the land with the caretaker in the background
- Framing the project as the owner's vision that locals are helping execute

**When he is named and willing to speak:** A single quoted sentence from him in his own words (translated honestly) does more than any copy we can write. He becomes the author of his own story, not a subject in ours.

---

## Site Architecture — 4 Pages

### 1. Home (/)
**Job:** Hook the visitor, establish credibility, drive to Support or Volunteer

**Sections:**
- Hero — full bleed photo (Andrew's July photos), short headline, one CTA button
- The land in 3 sentences
- The three pillars: Primary Forest / Wildlife Corridor / 1882 Road
- The caretaker story — given real weight, not a sidebar. 50 years in the area, 25+ on the land. His having to leave. The son showing up on his days off. His young family. What we're trying to make possible for them.
- Phase 0 progress — what's been funded, what's next, donor count alongside dollar amount
- Urgency framing — the July expedition is the hook, be specific about the timeline
- Two CTAs: Support the Project / Join as Volunteer

**Tone:** Grounded, specific, honest. No mystical language. The caretaker family is central, not supporting cast.

### 2. The Land (/land)
**Job:** Deep dive for people who want to know more before supporting

**Sections:**
- The forest (primary, never cleared, elevation, microclimate)
- First peoples — Huetar territory
- The 1882 road — Camino de Carrillo, Bishop Thiel
- The caretaker family — 50 years in the area, 25+ on the land, father to son, the full story with weight
- Wildlife — tapir (confirmed), quetzal habitat, glass frogs, big cat corridor
- The northwest triangle — the destination, 1,612m, park border
- The July expedition — what we're going to document

### 3. Support (/support)
**Job:** Convert visitors into financial supporters

**Sections:**
- Funding goal: $6,000 for Phase 0 (specific, honest) — with a plain explanation of what that covers
- Progress bar with donor count ("$X raised from Y supporters")
- Contribution tiers (one-time and recurring via Stripe):
  - $10 — Trail marker
  - $25/mo — Monthly stewardship (Seed Bearer)
  - $50 — A fence post (materials)
  - $100 — One month of caretaker supply reimbursements
  - $250 — A section of fencing
  - $500 — Guardian tier
  - $1,200 — A heifer (cattle loan, recoverable)
- **Interim payment path:** Until Stripe is live, a clear "to contribute now, email..." with no disabled buttons — motivated donors must have a working path
- Public ledger — every funded item listed with date, amount, status, photo when available
- Legal disclosure
- One-time vs recurring toggle (default: recurring)

**Stripe integration:** Checkout for one-time, Subscriptions for recurring

### 4. Volunteer (/volunteer)
**Job:** Capture people who want to come and help

**Sections:**
- What volunteering looks like (4-5 hours work/day, food and basic shelter provided, Costa Rica)
- July 2026 expedition details (dates TBD) — frame around working alongside the caretaker family, not just doing trail work
- Passport urgency — generic, not Nashville-specific: "If you don't have a valid passport, apply now. Processing takes 6–8 weeks minimum and the July window is tight."
- Future expeditions
- Signup form:
  - Name
  - Email
  - Location (city/country)
  - Skills (free text)
  - Passport status (yes/no/in progress)
  - Which expedition interested in
  - Anything else
- Form submits to email or Airtable

### 5. The Plan (/phases)
**Job:** Show donors exactly where their money fits in the full arc — not just Phase 0 but where this is going. Builds confidence that this is a real project with a real trajectory.

**Sections:**
- Brief framing: this is a multi-year build, not a one-time campaign
- Phase 0 — The Outpost (current, with progress)
- Phase 1 — Opening the Land
- Phase 2 — Overnight
- The numbers that matter
- CTA: Support Phase 0

### 6. Updates (/updates) — Phase 2, post-July
**Job:** Show supporters what their money did. Builds trust, drives retention.

- Photo/video posts from the land
- Before/after documentation
- Andrew's photography
- Funded item confirmations
- This becomes the content hub that feeds social media

---

## Goals and Timeline

### Phase 0 — The Outpost (May–July 2026)
**Goal: $6,000–9,000**
**Status: In progress**

The foundation. Before anything can open or be documented, the land needs to be workable and Daniel needs a base.

**Trail work:**
- Priority clearing — machete, 2–3m walking width, 225m corridor toward the bosque
- Motoguadaña purchase (Stihl FS) — company asset, stays on the land

**The outpost (Edwin's shack):**
- The shack is standing: posts, corrugated metal cladding, spring water pipe, some power
- Everyone wants to tear it down. We are not tearing it down.
- Rehabilitation plan: bahareque walls (mud and cane, traditional Central American construction), new metal roof, clean the interior, respect the footprint
- This is Edwin's house. It becomes Daniel's base. Eventually a small outpost for volunteers and guests.
- Spring water line assessed and repaired
- Power audit — solar supplement where needed

**The farm:**
- 2 meat heifers for Daniel's family — income from cattle sales is his, not the project's
- 2 guard dogs — coyote protection for cattle
- Chickens added in Phase 1

**Property:**
- Gate replacement at road entrance
- Fence assessment and priority repairs
- Property cleanup — trash removal
- Garmin inReach satellite communicator (safety for remote work)

**July 2026 expedition:**
- First full walk to the northwest corner at 1,612m — the Sánchez family leads, we follow
- Andrew Tremblay (wildlife photographer, Florida) documents the property for the first time — photography, video, drone (DGAC permit required)
- All springs and water sources GPS mapped
- Platform site candidates identified
- Before/after documentation of all Phase 0 work

**Who can come in July:** Friends and volunteers. No permits required for non-paying guests. Basic camping — outpost shack and tents in the cleared potrero. Food provided.

---

### Phase 1 — Opening the Land (Late 2026)
**Goal: $15,000–35,000**
**Trigger:** July expedition complete, documentation in hand, Phase 1 fundraising open

**Trail system:**
- Full trail from outpost to northwest corner at 1,612m
- 1,500m as the crow flies = 3–4km of actual trail accounting for terrain
- Blazed, marked, cleared to walking width
- Trail signage — distance markers, species callouts, no plastic

**The farm (not commercial — feeds people, teaches self-sufficiency):**
- Dairy cow(s) — milk and eggs for the people working and staying on the land
- Chickens — eggs, pest control
- The farm is not a revenue stream. It feeds people who come and shows them where food comes from.

**Outpost expanded:**
- Solar panels installed
- Composting toilet
- Basic bunk sleeping for 4–6 volunteers
- Running water from confirmed spring (gravity-fed)

**Programs launched:**
- Guided day walks open — no ICT registration required for this model (structure with attorney)
- Birdwatching program — survey weekend with professional guide, full species list, eBird submission. This document justifies the program.
- PSA application through FONAFIFO — passive forest income ~$2,800/year for primary forest preservation

**Legal and structure:**
- Costa Rica SRL formed — operating company, co-led with Daniel's family
- Daniel has formal officer role and documented path to equity stake
- Consult Costa Rica attorney before money moves at scale

**Merch:**
- Limited run, designed around Andrew's photography — glass frog, tapir, 1882 road
- Not dropship. One product done right.
- Designer recruited via /get-involved after visual identity established post-July

---

### Phase 2 — Overnight (2027)
**Goal: $40,000–90,000**
**Trigger:** Phase 1 complete, ICT ecotourism registration obtained

**Platforms:**
- First overnight platform — northwest corner at 1,612m, against the park boundary. Canvas tent, real bed, wood stove.
- 2 additional platforms at different elevations and habitat zones
- ICT ecotourism registration — required before paying overnight guests
- Helicopter LZ registered with Cruz Roja — safety requirement for remote overnight

**The outpost as hub:**
- Central kitchen and common area — extension of Edwin's shack, same materials, same scale
- Composting toilets and solar showers
- This is not a lodge. It is an outpost that grew.

**Revenue programs:**
- Paying overnight guests — $150–250/night
- Small writers retreats — 3–4 people, 4–5 days, Daniel as guide, total quiet. The forest is the program.
- Yoga retreats — partner with an existing instructor. They bring their people, we provide the land and food. Do not build this in-house.
- Sponsor a tree — a name in the public ledger next to a real tree. No certificate gimmick.
- Carbon credits — voluntary market verification for primary cloud forest in park buffer zone. Long-term. PSA/FONAFIFO is the near-term version.
- Small shop — numbered prints of Andrew's photography, field journal/zine from the July expedition. One product done right.
- Sponsorships — approach Garmin, Sawyer, Darn Tough, Oboz after July expedition. Andrew's documentation package is the pitch deck. Target September 2026.

---

### The Numbers That Matter
| Metric | Target |
|--------|--------|
| Phase 0 funding goal | $6,000–9,000 |
| Monthly supporters to fund Daniel full time | 40 people at $25/month |
| PSA passive income once approved | ~$2,800/year |
| Break-even on overnight platforms (Phase 2) | ~120 occupied nights/year |
| Full operating revenue potential (Phase 3) | ~$160,000–198,000/year |

---

## Public Ledger Feature

A transparent record of every dollar received and spent.

**Format:**
| Date | Amount | Item | Status | Evidence |
|------|--------|------|--------|----------|
| May 2026 | $1,200 | Cattle loan — 2 heifers | Funded ✓ | — |
| May 2026 | $650 | Gate materials + installation | Funded ✓ | — |
| June 2026 | $400 | Motoguadaña (Stihl FS) | Funded ✓ | — |
| July 2026 | $500 | July expedition costs | Pending | — |

After July: photos added to Evidence column.

**Implementation:** Start as a hardcoded JSON file. Upgrade to a database later if needed.

---

## Supporter Wall

Public list of supporters (first name + last initial, or anonymous).
- Opt-in at checkout
- Simple, no gamification
- Sorted by date joined, not amount

---

## Volunteer Signup

Simple form. Submissions go to:
- Email notification to site owner
- Airtable base (or Google Sheet) for tracking

Track: passport status is the key field — people without passports need to apply immediately or can't come.

---

## Tech Stack

- **Framework:** Next.js (already started at /Users/mateo/Dev/discovercieloverde)
- **Styling:** Tailwind CSS (already configured)
- **Language:** TypeScript
- **Payments:** Stripe (one-time + subscriptions)
- **Hosting:** Vercel (free tier)
- **Domain:** discovercieloverde.com (currently pointing to Shopify — redirect once live)
- **Forms:** Resend or Formspree for volunteer signups
- **Analytics:** Plausible or Vercel Analytics (privacy-respecting)

---

## Content Dependencies (Blockers)

The site cannot launch properly without:
1. **Andrew's photography** — July 2026 expedition. Hero image, land photos, wildlife.
2. **Drone footage** — Andrew + drone. Andrew must get DGAC permit before trip.
3. **Caretaker permission** — to use the son's name publicly, and ideally a quote from him in his own words.
4. **Stripe account** — under Nova Vista Holdings LLC.
5. **Vercel deployment** — domain redirected from Shopify.

**Target launch: August 2026**, after July expedition content is processed.

---

## What To Do In The Meantime

- Keep the Shopify site live but cleaned up (in progress)
- Cancel Shopify once Next.js site launches
- Get Nova Vista Holdings LLC bank account connected to Stripe
- Andrew confirms DGAC drone permit for Costa Rica
- Nashville friends (2 people) apply for passports immediately
- Finalize July dates
- **Talk to the son about his formal role** — officer title and path to equity in the Costa Rica operating company. Do this before the site launches so the partnership framing is real, not aspirational.
- **Consult a Costa Rica attorney** to form the operating SRL/S.A. and document the partnership structure. Do this before money starts moving at scale.
- **Ask the son:** what does he want for his kid? What would it take for this to be his full-time job? Put a number on it — that becomes a recurring donation goal.

---

## Tone and Voice

- Specific over vague — real numbers, real animals, real people
- Honest about stage — "we are in Phase 0, nothing is open yet"
- The caretaker family is central, not supporting cast — their story is the reason to give
- Humble about knowledge — "they know this land, we are learning from them"
- No mystical language, no invented mythology
- Let the place and the people speak for themselves — both are compelling enough
- Never describe the caretaker family in terms of loyalty, gratitude, or service — describe them in terms of knowledge, commitment, and what they're building

---

## What This Site Is NOT

- Not a mystical brand experience
- Not an apparel store (Shopify era is over)
- Not a nonprofit (be clear about this)
- Not overpromising timelines or outcomes
- Not revealing exact location, acreage, or land-holding legal entity details beyond Nova Vista Holdings LLC
- Not a project where an outside owner hired local help — this is a partnership, and the structure must make that real
