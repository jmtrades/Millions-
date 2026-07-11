import { defineVenture } from "@millions/core";

// Third run of the capacity-install playbook (accountancy practices, 7 Aug quarterly fuse).
// Positioning: automation INSTALL into the practice's existing stack — zero migration,
// not another software subscription. Gate evidence: vertical n8n productization unserved
// (sat 4); BrightManager-class PM software exists but requires migration the 28-day
// window doesn't allow.
export const cfg = defineVenture({
  slug: "mtd-capacity-install",
  name: "MTD Capacity Install",
  tagline: "Your practice's MTD quarterly machine — installed into the stack you already run, in 7 days",
  mode: "checkout",
  currency: "gbp",
  price: 150000,
  priceLabel: "£1,500 fixed install · 7 days",
  guarantee: "If the install isn't live in your practice within 7 working days of intake, £250/day off until it is",
  deadline: { iso: "2026-08-07", label: "First-ever MTD quarterly deadline in" },
  hero: {
    badge: "No new software. No migration. Wired into the email + spreadsheets you already use",
    headline: "On 7 August, every mandated client's quarterly update lands at once. Your inbox is the bottleneck.",
    sub: "Making Tax Digital turned each sole-trader and landlord client into five filing events a year. The Capacity Install wires automated client-chasing, record collection and deadline tracking into your existing practice stack — before the first quarterly wave hits.",
    cta: "Book your install — £1,500",
  },
  pains: [
    {
      title: "150 clients just became ~750 filing events",
      body: "MTD for Income Tax went live on 6 April 2026 for >£50k sole traders and landlords. The first quarterly update is due 7 August — and the >£30k wave lands April 2027, which means re-triaging the whole book again in nine months.",
    },
    {
      title: "The work isn't the filing — it's the chasing",
      body: "Records arrive late, in shoeboxes, or not at all. Every un-chased client in July is a fire drill in the first week of August. Multiply by four quarters.",
    },
    {
      title: "Practice software wants you to migrate. In July. Seriously?",
      body: "Full practice-management suites do exist — and switching mid-deadline-wave is how filings get missed. The install rides on your current email, spreadsheets and filing software instead. Nothing moves.",
    },
  ],
  offer: {
    title: "What gets installed (n8n/Make, on your accounts, yours to keep)",
    bullets: [
      "Client triage engine: your client list in, every client mapped to 2026/2027/2028/exempt cohorts with thresholds current",
      "Automated chase sequences: records requests, reminders and escalations from YOUR practice address, tuned per client cohort",
      "Quarterly deadline engine: 7 Aug / 7 Nov / 7 Feb / 7 May tracked per client, with owner alerts before anything slips",
      "Onboarding flows for newly mandated clients: engagement comms, software-authorisation chase, records checklist",
      "Partner dashboard: readiness % per deadline, who's chased, who's ghosting, who's filed",
      "Built on your existing stack — email, sheets, your filing software's exports. Zero migration, zero new client logins",
      "Documented and handed over: runbook + Loom walkthrough; your team owns it, no lock-in",
      "30 days of fix support after go-live",
    ],
    turnaround: "Installed and live within 7 working days of your intake form",
  },
  proof: [
    {
      stat: "MTD for Income Tax is mandatory from 6 April 2026 for qualifying income over £50,000 — quarterly updates required",
      source: "HMRC / gov.uk",
      url: "https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax",
    },
    {
      stat: "First quarterly update deadline: 7 August 2026 — for every mandated client simultaneously",
      source: "gov.uk — one year until MTD launch (deadline schedule)",
      url: "https://www.gov.uk/government/news/one-year-until-making-tax-digital-for-income-tax-launches",
    },
    {
      stat: "The threshold drops to £30,000 in April 2027 — the book re-triages again in nine months",
      source: "gov.uk policy paper",
      url: "https://www.gov.uk/government/publications/making-tax-digital-for-income-tax-self-assessment-reducing-the-mandation-threshold-from-30000-to-20000-from-april-2028/reduction-of-the-mandation-threshold-from-30000-to-20000-from-april-2028",
    },
  ],
  steps: [
    { title: "Buy + intake", body: "£1,500 by card. The intake form maps your stack, client-list export and chase tone — 30 minutes, async." },
    { title: "We install", body: "Triage, sequences, deadline engine and dashboard wired into your accounts across ~5 working days, tested on a pilot cohort first." },
    { title: "Go live + handover", body: "Full-book activation before the quarterly wave, runbook + walkthrough delivered, 30 days of fixes included." },
  ],
  faq: [
    {
      q: "Is this another practice-management subscription?",
      a: "No. It's a one-off engineering install of automations that run on your existing email, spreadsheets and filing software, under your accounts. There's no monthly fee to us and nothing to migrate. You own everything installed.",
    },
    {
      q: "We're not technical — who maintains it?",
      a: "It's built to be boring: documented flows, a runbook, and a recorded walkthrough. 30 days of fix support are included; most practices never need more. If you want ongoing cover later, that's optional, not required.",
    },
    {
      q: "Client data security?",
      a: "Everything runs inside your own accounts — your email, your sheets, your n8n/Make workspace. We work under a signed confidentiality agreement + DPA, with access removed at handover. No client data is stored on our side.",
    },
    {
      q: "Can you really install before 7 August?",
      a: "The install takes 7 working days from intake. Order this week and the chase sequences are working the deadline wave before it peaks. Bookings are capacity-capped honestly — if a slot isn't available pre-deadline, the checkout says so and the next cohort targets 7 November.",
    },
    {
      q: "We only have ~60 mandated clients — worth it?",
      a: "60 clients is ~300 filing events a year. If the install saves 10 minutes of chasing per event, that's 50 hours annually — before counting the April 2027 wave that roughly doubles most books.",
    },
  ],
  compliance:
    "MTD Capacity Install is practice-operations engineering. It does not provide tax advice, does not file on behalf of clients, and does not replace your professional judgement. Filing responsibilities remain with the practice.",
  seoPages: [
    {
      slug: "mtd-quarterly-deadline-7-august-practice-checklist",
      title: "7 August MTD quarterly deadline: the practice capacity checklist",
      description:
        "The first MTD ITSA quarterly update is due 7 August 2026 for every mandated client at once. A working checklist for practices that don't want a fire drill.",
      body: "The first Making Tax Digital quarterly update deadline — 7 August 2026 — is unlike anything in the Self Assessment calendar: it hits every mandated client simultaneously, four times a year.\n\n## The maths practices keep underestimating\nA 150-client book with 100 mandated clients is ~500 filing events a year once quarterly updates and year-end land. Each event needs records in, categorised, reviewed and submitted. The filing is minutes; the chasing is hours.\n\n## The capacity checklist\n- Triage the book: who's mandated now (>£50k qualifying income), who joins in April 2027 (>£30k), who's exempt — with evidence per decision\n- Set chase cadences per cohort: digital-capable clients get light-touch nudges; shoebox clients get earlier, harder escalation\n- Automate the first 80%: records requests, reminders, deadline alerts should not be manual emails from a fee-earner\n- Instrument readiness: a partner should see 'X% of Q1 records in' at a glance in July, not discover the gap in August\n- Protect the penalty position: the 2026/27 points waiver for late quarterly updates softens year one — the client-relationship damage of a chaotic quarter doesn't\n\n## Migration is the wrong July project\nFull practice-suite migrations are quarter-long projects. The pragmatic move before this deadline: wire automation into the stack you already run, and revisit platform choices in the quiet season — if the automations haven't already removed the reason.\n\nThat's what the MTD Capacity Install does: triage, chasing, deadline tracking and a readiness dashboard, installed into your existing tools in 7 working days, £1,500 fixed.",
    },
    {
      slug: "mtd-client-chasing-automation-accountants",
      title: "Automating MTD client chasing: what actually works in a small practice",
      description:
        "Records-chasing is the real MTD workload. How small practices automate requests, reminders and escalations without migrating software.",
      body: "Ask any practice what MTD actually costs and the answer isn't software licences — it's chasing. Records that arrive late, incomplete, or in a carrier bag in week four.\n\n## Why generic reminders fail\nOne-size-fits-all reminder emails train clients to ignore them. What works is cohort logic:\n- Digital-native clients: light nudges, app-link deep-links, short deadlines\n- Paper-first clients: earlier start, phone-call escalation flags, physical checklists\n- Serial late-runners: front-loaded schedules and partner-visible flags by week two\n\n## The escalation ladder that gets records in\nA sequence that escalates — friendly nudge → specific list of what's missing → consequence framing (deadline, penalty points, fee implications) → partner flag — outperforms any single email. The trick is that nobody in the practice should be sending these by hand across four quarterly cycles.\n\n## Keep it in your own stack\nEvery automation here runs on tools practices already have: the practice mailbox, a spreadsheet or two, and export files from your filing software. n8n or Make provide the glue. No client-data migration, no new logins for clients, no per-seat fees — and if you change filing software next year, the chasing engine doesn't care.\n\n## Build vs buy vs install\nBuilding in-house needs someone who enjoys webhook debugging at 11pm. Buying a practice suite means migrating mid-mandate. The third option — a fixed-fee install of the automation layer onto your current stack, documented and handed over — is what MTD Capacity Install ships in 7 working days.",
    },
    {
      slug: "mtd-30k-threshold-april-2027-practice-prep",
      title: "The £30k MTD wave lands April 2027: why practices should re-triage now",
      description:
        "MTD ITSA extends to >£30,000 qualifying income from April 2027, roughly doubling many practices' mandated books. The preparation window is this year.",
      body: "The April 2026 launch was wave one. From 6 April 2027, Making Tax Digital for Income Tax extends to sole traders and landlords with qualifying income over £30,000 — with £20,000 already legislated for April 2028.\n\n## What the 2027 wave does to a typical book\nThe £50k threshold caught the larger sole traders and portfolio landlords. The £30k band is where volume lives: single-property landlords, part-time contractors, side-business owners — clients who generate modest fees and above-average chasing effort. Many practices' mandated headcount roughly doubles.\n\n## Why 2026 is the preparation year\n- Onboarding is the crunch: each newly mandated client needs software authorisation, digital-records setup and habit change — that's a per-client project, and hundreds of them land at once if left to March 2027\n- Fee models need resetting: quarterly service is not the annual-return fee; practices that reprice early avoid the awkward mid-mandate conversation\n- The chase infrastructure compounds: automation installed for the 2026 cohort absorbs the 2027 wave by changing a threshold value, not by hiring\n\n## The quiet-season move\nPractices that wire triage, chasing and deadline tracking into their stack this year walk into April 2027 with a machine that scales by config. Those that don't repeat 2026's fire drill at twice the size.\n\nThe MTD Capacity Install does the wiring in 7 working days, on your existing tools, £1,500 fixed — built so the 2027 re-triage is a settings change, not a second project.",
    },
  ],
  theme: { accent: "#059669", dark: false },
});
