import { defineVenture } from "@millions/core";

// Two-SKU venture: £499 72h Deliverability Rescue (primary checkout) + £749 DUAA/PECR
// Re-Permission Sprint (SKU 2, sold via /guides page CTA + upsell email until second
// Stripe price is wired). Binding conditions from gates: sprint fulfilment templated <8h;
// lawful-basis register framed as facts-mapped-to-ICO-guidance, NEVER legal advice.
export const cfg = defineVenture({
  slug: "email-desk",
  name: "Inbox Compliance Desk",
  tagline: "72-hour rescue when Microsoft starts rejecting your email — and the lawful way back into a legacy list",
  mode: "checkout",
  currency: "gbp",
  price: 49900,
  priceLabel: "£499 fixed · 72h turnaround",
  guarantee: "If we can't produce a measurable placement improvement, you don't pay the monitoring — and we say so in writing",
  hero: {
    badge: "550 5.7.515 is not a suggestion — it's Microsoft rejecting you outright",
    headline: "Your campaigns aren't landing in spam anymore. They're not landing at all.",
    sub: "Since May 2025, Microsoft rejects bulk mail that fails SPF/DKIM/DMARC — Gmail and Yahoo already did. And since February 2026, UK regulators can fine list abuse up to £17.5M. The Desk fixes both ends: a 72-hour technical rescue, and a compliant re-permission sprint for the list you're scared to mail.",
    cta: "Book the 72h rescue — £499",
  },
  pains: [
    {
      title: "The rejection wave is silent until it isn't",
      body: "550 5.7.515 bounces, campaigns 'sent' with no replies, domains that warmed for months burned in a week. Non-compliant senders don't get junked anymore — they get refused at the door.",
    },
    {
      title: "Your legacy list became a legal liability while you weren't looking",
      body: "The Data (Use and Access) Act raised maximum PECR fines from £500k to £17.5M in February 2026. In January the ICO fined one sender £105,000 for mailing third-party data without consent checks — the exact thing a legacy list does by default.",
    },
    {
      title: "Fixing it yourself costs the two weeks you don't have",
      body: "DMARC alignment, blocklist remediation, warm-up scheduling, consent-basis mapping — every day misconfigured is pipeline you're not building. Agencies bill this at £2k+ retainers. We do it fixed-fee in 72 hours.",
    },
  ],
  offer: {
    title: "What the Desk does",
    bullets: [
      "72h Deliverability Rescue (£499): full DNS auth rebuild to DMARC enforcement — SPF flattening, DKIM rotation, alignment fixes",
      "Blocklist & spam-trap remediation with a sending-pattern reset plan your team can actually follow",
      "Before/after seed-list placement test across Gmail + Outlook — evidence, not vibes",
      "Re-Permission Sprint (£749, 7 days): consent-basis audit per record source, suppression plan, 3-touch re-permission campaign built in YOUR ESP",
      "Lawful-basis register: every record mapped to documented facts against published ICO guidance",
      "Deliverability hardening on the re-permissioned segment so the recovered list actually lands",
      "£199/mo monitoring: placement, auth, blocklist and complaint-rate watch with same-day alerts",
      "Everything delivered async — order, fill the intake form, get the fix",
    ],
    turnaround: "Rescue: 72 hours from intake. Sprint: 7 days.",
  },
  proof: [
    {
      stat: "Microsoft enforces SPF/DKIM/DMARC for high-volume senders — non-compliant mail is rejected, not junked",
      source: "Microsoft Defender for Office 365 blog, 2025",
      url: "https://techcommunity.microsoft.com/blog/microsoftdefenderforoffice365blog/strengthening-email-ecosystem-outlook%E2%80%99s-new-requirements-for-high%E2%80%90volume-senders/4399730",
    },
    {
      stat: "PECR maximum fines rose to £17.5M / 4% of turnover on 5 February 2026",
      source: "ICO statement on DUAA commencement",
      url: "https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2026/02/statement-on-the-commencement-of-the-data-use-and-access-act-duaa/",
    },
    {
      stat: "£225,000 in ICO nuisance-marketing fines in January 2026 alone — including £105k for emailing third-party data without consent due diligence",
      source: "ICO enforcement, Jan 2026",
      url: "https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2026/01/fines-of-225-000-for-nuisance-marketing-messages/",
    },
  ],
  steps: [
    { title: "Buy the rescue", body: "£499 by card. Intake form takes 10 minutes: domains, ESP, DNS access, what broke." },
    { title: "We rebuild", body: "Auth to enforcement, blocklists worked, patterns reset. You get a placement test before and after." },
    { title: "Recover the list — lawfully", body: "If a legacy list is what burned you, the Sprint maps every record's consent basis and wins back the mailable core with a compliant re-permission campaign." },
  ],
  faq: [
    {
      q: "Is the re-permission sprint legal advice?",
      a: "No. We map facts — where each record came from, what evidence exists — against the ICO's published direct-marketing guidance, and build the campaign mechanics. The register is engineering documentation your DPO or counsel can review in one sitting. We don't give legal opinions.",
    },
    {
      q: "How much of a legacy list survives re-permissioning?",
      a: "Industry benchmarks run 10-50% opt-in on the reachable core; the point is that the survivors are gold — provably consented, deliverable, engaged — and the £17.5M-risk records are suppressed with a paper trail. A smaller list that lands beats a big one that bounces or fines you.",
    },
    {
      q: "Can you guarantee inbox placement?",
      a: "Nobody honest can. We guarantee the auth stack passes enforcement checks, documented remediation of every finding, and a before/after seed test so you can see the delta yourself.",
    },
    {
      q: "We're mid-campaign and bleeding — how fast can you start?",
      a: "The 72h clock starts when your intake form lands. Most rescues start same-day.",
    },
    {
      q: "What do you need access to?",
      a: "DNS (or a change window with your provider), your ESP/sequencer, and postmaster tools. Read-only where possible; every change is logged and reversible.",
    },
  ],
  compliance:
    "Inbox Compliance Desk provides technical deliverability engineering and compliance documentation mapped to published ICO guidance. It is not legal advice. Marketing-consent decisions remain yours; we recommend review by your DPO or counsel.",
  seoPages: [
    {
      slug: "microsoft-550-5-7-515-fix",
      title: "Microsoft 550 5.7.515 bounces: what they mean and the 72-hour fix",
      description:
        "Outlook now rejects bulk senders that fail SPF, DKIM or DMARC. What the 550 5.7.515 NDR means, why it started, and the exact remediation order.",
      body: "If your bounce logs are filling with 550 5.7.515, Microsoft is refusing your mail at the door. This is the enforcement phase of Outlook's high-volume sender requirements: since May 2025, senders over ~5,000/day to Microsoft consumer domains must pass SPF, DKIM and DMARC — and failures are rejected outright, not junk-foldered.\n\n## Why this hit you now\nEnforcement tightened progressively through 2025-26. Setups that 'worked for years' — inherited SPF includes, unrotated DKIM keys, DMARC stuck at p=none with broken alignment — fail modern checks silently until volume triggers rejection.\n\n## The remediation order that works\n- Inventory every sending source (ESP, sequencer, CRM, billing, support desk) — shadow senders break alignment\n- Flatten and de-duplicate SPF under the 10-lookup limit\n- Rotate DKIM to 2048-bit keys, one selector per source\n- Move DMARC to enforcement (quarantine, then reject) with alignment verified per source\n- Work blocklistings with evidence, not form-mails\n- Reset sending patterns: volume ramps, engagement segmentation, complaint-rate headroom\n- Prove it: seed-list placement test across Gmail and Outlook, before and after\n\n## What not to do\nDon't spin up fresh domains to outrun it — Microsoft's checks follow the mail, not the domain age, and burner-domain patterns are themselves a flag. Fix the auth stack you own.\n\nThe Inbox Compliance Desk does all of the above, fixed-fee, in 72 hours, with the placement evidence included.",
    },
    {
      slug: "duaa-pecr-fines-email-marketing-2026",
      title: "PECR fines are now £17.5M: what the DUAA changed for email marketing in 2026",
      description:
        "The Data (Use and Access) Act raised UK e-marketing fines 35-fold in February 2026. What changed, who's exposed, and what a compliant legacy-list recovery looks like.",
      body: "Until this year, the maximum PECR fine for unlawful electronic marketing was £500,000. On 5 February 2026, the Data (Use and Access) Act's commencement lifted it to £17.5M or 4% of global turnover — GDPR-scale penalties for sending marketing email without a lawful basis.\n\n## Who is actually exposed\nThe classic exposure isn't the spammer stereotype. It's the legitimate business sitting on a list assembled over years: lead magnets, purchased segments, event scans, 'somebody exported the CRM in 2022'. Under PECR, individual subscribers (including sole traders) need consent or a genuine soft opt-in; corporate-subscriber rules differ but UK GDPR still applies to the personal data. In January 2026 the ICO fined a sender £105,000 for exactly this pattern — third-party data mailed without adequate consent checks.\n\n## The rational move isn't deleting the list\nIt's triage. Some records have documented consent. Some have a defensible soft opt-in. Some have nothing — those get suppressed, with a record of the decision. The mailable core then gets a short re-permission sequence, run carefully, because a re-consent email to a no-basis record is itself marketing.\n\n## What a defensible recovery produces\n- A lawful-basis register: every source, every record class, mapped to documented facts against ICO guidance\n- A suppression file with dated decisions — the paper trail that turns an enforcement letter into a short conversation\n- A re-permissioned segment that both lands (auth fixed, hygiene done) and converts\n\nThat's the Desk's 7-day Re-Permission Sprint (£749). Facts and engineering, not legal opinions — and your counsel can verify the register in one sitting.",
    },
    {
      slug: "cold-email-still-works-2026-compliance",
      title: "Cold email in 2026: what still works — and what gets you fined or blocked",
      description:
        "Between mailbox-provider enforcement and £17.5M PECR fines, 2026 cold email runs on infrastructure discipline and consent hygiene. The operating rules.",
      body: "Cold email didn't die in 2026 — sloppy cold email did. Two forces squeezed it at once: mailbox providers now reject unauthenticated bulk mail (Microsoft joined Gmail and Yahoo with outright rejection from May 2025), and the UK's DUAA multiplied PECR fines 35-fold in February 2026.\n\n## The infrastructure rules\n- Authentication at enforcement: SPF, DKIM, DMARC aligned per sending source — table stakes, checked at the door\n- Volume discipline: warm ramps, per-domain caps, engagement-based throttling; complaint-rate headroom under 0.3%\n- Separate infrastructure for outreach vs transactional — one burned stream must not take the business down\n\n## The compliance rules (UK)\n- B2B outreach to corporate subscribers sits differently under PECR than mail to individuals — but UK GDPR applies to the person's data either way: have a documented legitimate-interest assessment\n- Individual subscribers (incl. sole traders): consent or genuine soft opt-in, or don't send\n- Every send: identifiable sender, working opt-out, suppression honoured same-day\n- Legacy lists: triage before you touch them — a January 2026 ICO fine (£105k) landed on exactly the 'we bought it years ago' pattern\n\n## The uncomfortable truth about response rates\nChannel-wide reply rates have decayed for years as AI-generated volume flooded inboxes. What still performs: tight lists researched per-company, genuinely specific first lines, and infrastructure that lands. Craft plus compliance is the whole game.\n\nWhen the infrastructure side breaks — rejections, blocklists, burned domains — the Desk's 72h rescue exists. When the list side is the problem, the Re-Permission Sprint is the lawful way back in.",
    },
  ],
  theme: { accent: "#0ea5e9", dark: true },
});
