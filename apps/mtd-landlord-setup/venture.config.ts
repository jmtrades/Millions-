import { defineVenture } from "@millions/core";

// Wave-2 sibling of mtd-capacity-install (same 7 Aug quarterly fuse, landlord side).
// HONESTY CONTRACT (gate evidence, R4): (1) free software genuinely exists — banks
// bundle FreeAgent, free tiers exist, bridging is ~£30/yr; the £299 buys the DONE-FOR-YOU
// setup in 48h, never the software, and the copy says so plainly (FAQ 1 + the free-list
// guide ARE the trust engine). (2) HMRC issues no penalty points for late quarterly
// updates in 2026/27 — urgency is workload pile-up + habit formation, never fine terror.
// Dates match mtd-capacity-install exactly: live 6 Apr 2026 (>£50k), first quarterly
// 7 Aug 2026, cycle 7 Aug / 7 Nov / 7 Feb / 7 May, £30k Apr 2027, £20k legislated Apr 2028.
export const cfg = defineVenture({
  slug: "mtd-landlord-setup",
  name: "MTD Sorted",
  tagline: "HMRC-recognised MTD software chosen, configured and loaded with your spreadsheet history — done for you in 48 hours",
  mode: "checkout",
  currency: "gbp",
  price: 29900,
  priceLabel: "£299 done-for-you setup · 48 hours · optional £49/quarter",
  guarantee: "Set up and ready to file within 48h of your intake form, or £100 back",
  deadline: { iso: "2026-08-07", label: "First quarterly update due in" },
  hero: {
    badge: "Free software exists — our guide names it. The £299 is for having the whole thing done, correctly, in 48 hours",
    headline: "MTD is law. Your first quarterly update is due 7 August. You still run on spreadsheets.",
    sub: "Making Tax Digital for Income Tax went live on 6 April 2026 for landlords with qualifying income over £50,000. MTD Sorted is a 48-hour done-for-you setup: HMRC-recognised software selected for you from the genuinely-free-first shortlist, configured for your properties, your spreadsheet history migrated, bank feed connected, quarterly deadline calendar installed — and your first update prepared with you over an async Loom.",
    cta: "Get set up — £299",
  },
  pains: [
    {
      title: "Since 6 April, the spreadsheet alone stopped being enough",
      body: "MTD for Income Tax went live on 6 April 2026 for landlords and sole traders with qualifying income over £50,000. You're now required to keep digital records and send quarterly updates through HMRC-recognised software — and the first one, covering 6 April to 5 July, is due 7 August.",
    },
    {
      title: "Software choice is where landlords stall",
      body: "Property118 and Reddit threads are full of landlords three weeks into comparing apps: joint ownership handled differently everywhere, banks bundling one product free, per-property pricing, bridging tools that keep the spreadsheet alive. Every week of dithering is another week of unrecorded transactions to migrate later.",
    },
    {
      title: "No accountant to hand it to — and the ones you call are full",
      body: "Accountants are raising fees 5–10% into the MTD wave and turning small landlords away (MoneyWeek). And the honest bit: HMRC is waiving late-quarterly penalty points in 2026/27 — the real risk this year isn't a fine, it's four quarters of backlog landing on you at once because the habit never started.",
    },
  ],
  offer: {
    title: "What gets done for you in 48 hours",
    bullets: [
      "Software selected for YOUR situation — joint ownership, number of properties, your bank — from the genuinely-free-first shortlist (if a free option fits, that's the one we set up)",
      "Everything configured: properties, income and expense categories, and the HMRC sign-up and software authorisation completed with you — your Government Gateway login stays yours",
      "Your spreadsheet history migrated into compliant digital records for 2026/27 — every transaction since 6 April, categorised",
      "Bank feed connected via read-only authorisation that you grant through your own bank and can revoke anytime",
      "Quarterly deadline calendar installed — 7 Aug / 7 Nov / 7 Feb / 7 May, with reminders before each",
      "First quarterly update prepared and walked through with you on an async Loom — you review the figures and press submit",
      "Optional £49/quarter check-in: we review your records and prep each update before every deadline — cancel anytime",
    ],
    turnaround: "Set up and ready to file within 48 hours of your completed intake form",
  },
  proof: [
    {
      stat: "MTD for Income Tax is mandatory from 6 April 2026 for qualifying income over £50,000 — digital records and quarterly updates required",
      source: "HMRC / gov.uk",
      url: "https://www.gov.uk/government/publications/extension-of-making-tax-digital-for-income-tax-self-assessment-to-sole-traders-and-landlords/making-tax-digital-for-income-tax-self-assessment-for-sole-traders-and-landlords",
    },
    {
      stat: "First quarterly update deadline: 7 August 2026 — covering the quarter from 6 April to 5 July",
      source: "Lendlord — MTD for landlords: the first deadline",
      url: "https://lendlord.io/mtd-landlords-uk-2026-first-deadline",
    },
    {
      stat: "Accountants are raising fees 5–10% into the MTD deadline, with 860,000+ taxpayers mandated and firms at capacity",
      source: "MoneyWeek",
      url: "https://moneyweek.com/personal-finance/tax/making-tax-digital-accountant-costs",
    },
  ],
  steps: [
    {
      title: "Buy + intake",
      body: "£299 by card. The intake form takes ~15 minutes: properties, ownership split, your bank, and a spreadsheet upload — any format, we've seen worse. No calls unless you want one.",
    },
    {
      title: "We set it up (48h)",
      body: "Software chosen and configured, spreadsheet history migrated and categorised, bank feed connected, quarterly calendar installed. You authorise HMRC access and the bank feed yourself — we never hold your logins.",
    },
    {
      title: "First update, walked through",
      body: "An async Loom walks you through your prepared first quarterly update — you review the figures and press submit. Optional £49/quarter check-in keeps every future deadline prepped.",
    },
  ],
  faq: [
    {
      q: "Can't I do this free myself?",
      a: "Yes — and here's the honest list. Some banks bundle FreeAgent free with a business account, landlord apps run free tiers, bridging tools (~£30/yr) file straight from your spreadsheet, and gov.uk lists every HMRC-recognised option — our free-software guide names them all. The £299 isn't for software; it's for someone to do the whole setup FOR you in 48 hours: selection, configuration, migration, bank feed, calendar, first update. This is for landlords who want it done, correctly, this week.",
    },
    {
      q: "Is this tax advice?",
      a: "No. MTD Sorted is software setup and systems support. We don't advise on what's deductible, your figures remain your figures, and this isn't a substitute for an accountant — if a genuine tax question comes up during setup, we'll tell you to ask one rather than wing it.",
    },
    {
      q: "We own the property jointly — does this work?",
      a: "Yes — joint ownership is one of the main reasons people buy. Setup covers it explicitly: per-person threshold check, each mandated owner's software configured, the income split applied consistently at migration, and the joint-property easement set up where it helps. Our joint-property guide walks through the quirks.",
    },
    {
      q: "What do you need from me?",
      a: "Three things: the intake form (~15 minutes), your current spreadsheet, and a read-only bank feed authorisation that you grant through your own bank and can revoke at any time. We never ask for your banking login or your Government Gateway password.",
    },
    {
      q: "What happens if I miss 7 August — are the fines huge?",
      a: "Honestly: no. HMRC isn't issuing penalty points for late quarterly updates in 2026/27 while the system beds in. The real cost of skipping is the pile-up — miss Q1 and the 7 November update covers six months of reconstruction instead of three, with the year-end still reconciling all of it. Treat year one as the habit-forming year; we'd rather you started calm than scared.",
    },
    {
      q: "I'm under £50k — should I ignore this?",
      a: "Check the next wave first: the threshold drops to £30,000 in April 2027 (with £20,000 already legislated for April 2028), and qualifying income is your gross rents before expenses, counted per person. If you're near the line, setting up now — while it's calm and the free options still have onboarding capacity — beats doing it in a rush next spring.",
    },
  ],
  compliance:
    "MTD Sorted provides software setup and systems support. It is not tax advice and not accountancy. Filing figures remain your responsibility.",
  seoPages: [
    {
      slug: "mtd-landlords-first-quarterly-7-august",
      title: "MTD for landlords: what's actually due on 7 August 2026",
      description:
        "The first MTD quarterly update is due 7 August 2026. What landlords actually have to send, who's in scope, and the honest position on penalties in 2026/27.",
      body: "Since 6 April 2026, Making Tax Digital for Income Tax has been law for sole traders and landlords with qualifying income over £50,000. The first quarterly update — covering 6 April to 5 July 2026 — is due 7 August 2026. Here's what that actually means, who's in scope, and the honest position on penalties.\n\n## Who's actually in scope\nQualifying income is your gross income from self-employment and property combined — rents before expenses, not profit — assessed per person. Over £50,000 and you're mandated now. The threshold drops to £30,000 in April 2027, with £20,000 already legislated for April 2028. Joint owners count their share: a 50/50 couple grossing £70,000 in rent sits at £35,000 each — outside the 2026 wave, squarely inside the 2027 one. MoneyWeek puts the mandated population at 860,000+.\n\n## What a quarterly update actually is\nIt is not a tax return. It's a summary of income and expense totals for the quarter, sent from digital records through HMRC-recognised software. No tax is due at that point, and the figures are cumulative — a Quarter 1 mistake corrects itself in Quarter 2's submission. Your year-end finalisation and the 31 January tax payment still sit on top, unchanged.\n\nThe phrase 'through HMRC-recognised software' is the real shift. A spreadsheet alone no longer satisfies the rules: you need MTD software, or bridging software digitally linked to that spreadsheet, plus digital records of every transaction from 6 April 2026 onwards.\n\n## The honest penalty position\nHere's what the scary marketing won't tell you: HMRC is not issuing penalty points for late quarterly updates during 2026/27 while the system beds in — the Low Incomes Tax Reform Group covers this plainly. Miss 7 August and no fine lands.\n\nSo why bother? Workload, not fear. Skip Quarter 1 and the 7 November update covers six months of reconstruction instead of three. Skip two and January's year-end reconciliation sits on nine months of un-kept records — the old annual shoebox panic, now with four deadlines a year attached. The waiver is a grace period to build the habit, not a year off.\n\n## What to do before 7 August\n- Pick software — start from the genuinely free options (see our honest free-first list) before paying anyone anything\n- Rebuild digital records from 6 April 2026 — your spreadsheet history has to get in there\n- Connect a bank feed so Quarter 2 records itself\n- Calendar all four deadlines: 7 August, 7 November, 7 February, 7 May\n\nSources: gov.uk — Making Tax Digital for Income Tax for sole traders and landlords; LITRG — When does Making Tax Digital start for me; Lendlord — first-deadline guide; MoneyWeek — MTD accountant costs.\n\nIf you'd rather hand it all to someone: MTD Sorted does the whole setup in 48 hours — software selected, configured, spreadsheet migrated, bank feed live, first update prepared with you. £299, £100 back if we're late.",
    },
    {
      slug: "best-mtd-software-landlords-honest-free-list",
      title: "Best MTD software for landlords: the honest, free-first list",
      description:
        "Which MTD software landlords can genuinely use for free — bank-bundled FreeAgent, free tiers, £30/yr bridging — and how to choose, before paying anyone anything.",
      body: "Search 'best MTD software for landlords' and you'll mostly find affiliate tables ranked by commission. This is the other version, built around a different question: how much of this can you get free? Answer: quite possibly all of it.\n\n## The genuinely free routes\n- Bank-bundled FreeAgent. NatWest, RBS, Ulster Bank and Mettle customers get FreeAgent included with the account. If you already bank there — or will open a free Mettle account — full MTD software can cost £0. Check FreeAgent's current landlord and MTD Income Tax support against your situation before committing.\n- Free tiers from landlord apps. Landlord-specific tools such as Hammock and Landlord Studio offer free tiers or free onboarding because they want the subscription later. Fine — take the free tier if it covers your property count, and upgrade only when it stops being free enough.\n- HMRC's own software list. The gov.uk software chooser filters every HMRC-recognised product, including free-for-basic-use options. It's the only list on the internet with no commercial interest.\n- Bridging software (~£30/year). Tools in the VitalTax class connect a recognised filer to the spreadsheet you already keep. Honest caveat: bridging keeps the spreadsheet alive but not the work away — your sheet still has to hold compliant digital records with digital links, categorised the way HMRC expects, and the quarterly discipline stays manual.\n\n## How to actually choose\nFour questions settle it faster than any comparison table:\n- Joint ownership? Each mandated owner needs their own records and software — and products handle income splits very differently\n- How many properties? Free tiers often cap units, and per-property pricing changes the maths at four or more\n- Which bank? Software with a native feed for your bank beats better software without one\n- Other income? If you also have self-employment income, some landlord-only tools can't carry it — you'd be running two systems\n\n## So what's the £299 for, then?\nNot software — plainly. If a free option fits you, that's the one we set up. MTD Sorted's £299 buys the whole job done for you in 48 hours: software selected against those four questions, configured for your properties, your spreadsheet history since 6 April migrated into compliant digital records, a bank feed connected under read-only access you control, all four quarterly deadlines calendared, and your first update — due 7 August 2026 — prepared and walked through on an async Loom.\n\nIf you have a free weekend and reasonable patience, the DIY route above works, and this page is genuinely everything you need. The service is for landlords who want it done, correctly, this week.\n\nSources: gov.uk — Choose the right software for Making Tax Digital for Income Tax; ANNA Money — MTD software for landlords guide; mtd.digital — MTD bridging software; Lendlord — replacing spreadsheets in five steps.",
    },
    {
      slug: "mtd-joint-property-landlords",
      title: "MTD for jointly owned property: the quirks that trip landlords up",
      description:
        "Joint owners hit MTD's oddest corners — per-person thresholds, separate software for each owner, the joint-property easement. What to get right before 7 August 2026.",
      body: "Jointly owned property is where otherwise-confident landlords get Making Tax Digital wrong. None of the rules below are exotic — it's the combination that trips people.\n\n## Your threshold is personal, not the property's\nQualifying income is assessed per person: your share of gross rents (before expenses), plus any self-employment turnover. For married couples and civil partners, income from jointly held property is normally treated as split 50/50 — whatever the real ownership — unless a valid Form 17 declaration with evidence of actual beneficial interests says otherwise. Unmarried joint owners follow their actual shares.\n\nThe consequence: a jointly owned portfolio grossing £80,000 puts each 50/50 owner at £40,000 — neither is mandated in the £50k wave, both land in April 2027's £30,000 wave. Meanwhile one owner with a side business can cross £50,000 while the other stays out entirely. Run the numbers per person before deciding MTD isn't your problem yet.\n\n## One property, two sets of digital records\nMTD is per taxpayer. There is no joint quarterly update: each mandated owner needs their own HMRC-recognised software, their own digital records of their share, and their own updates by the same four deadlines — 7 August, 7 November, 7 February, 7 May. A shared spreadsheet that mixes both owners' figures has to be split consistently at migration, or the two filings won't reconcile with each other at year-end.\n\n## The joint-property easement\nHMRC recognises the pain and allows an easement for jointly let property: broadly, you can choose to report just your share of income quarterly and pick up expense detail annually, keeping lighter digital records for the joint property in-year. Genuinely useful — but it's an election that has to be reflected in how the software is configured from day one, both owners' setups should tell the same story, and you should check the current gov.uk guidance and your software's support for it rather than assume. Full expense records still have to exist by year-end.\n\n## The practical gotchas\n- One joint bank account, two taxpayers: the feed lands in one owner's software; the other's records need their share by a repeatable method\n- Expenses paid unevenly (one owner covers the roof repair) usually still follow the ownership split — track them as you go\n- Transfers between the two of you look like rental income to naive bank-feed rules — categorise them once, correctly\n- A Form 17 change mid-year changes what each person records from that date forward\n\n## Set up once, correctly\nThis is the exact situation MTD Sorted's 48-hour setup was built for: per-person threshold check, software chosen and configured for each mandated owner, the split applied consistently at migration, the easement set up where it fits. £299, done this week — with the first update due 7 August 2026.\n\nSources: gov.uk — Making Tax Digital for Income Tax for sole traders and landlords; The Independent Landlord — MTD for landlords; gov.uk — declare beneficial interests in joint property (Form 17).",
    },
  ],
  theme: { accent: "#0d9488", dark: false },
});
