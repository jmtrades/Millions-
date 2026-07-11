import { defineVenture } from "@millions/core";

// ACCURACY CONTRACT (evidence: /evidence/a1-pay-per-meeting-outbound.md, verified 2026-07-10):
// - Outsourced SDR programs run $3,000–$14,000/mo in 2026 (Leadium, Whistle, RevNew, ORRJO);
//   setup fees $3k–$5k common; hybrids add $100–$300 per appointment ON TOP of retainers.
// - SaaStr survey (1,200+ respondents): 7% say outsourced SDRs 'really worked', 67% failed.
// - Cheapest credible per-meeting benchmark: Belkins PPA $300–$800/meeting with $10k+ minimums.
// - Cold email average reply rate 3.43% (Instantly 2026), down from ~5% (2025) / 8.5% (2019);
//   top quartile 5.5%, elite >10%, tight personalized systems 10–18% (Martal).
// BINDING GATE CONDITIONS (must stay explicit in offer + FAQ, never soften):
// (a) 'Qualified meeting' is CONTRACTUALLY defined before launch — buyer approves the criteria
//     (ICP filters + explicit interest + booked AND attended) in writing, in the intake form,
//     before the first send. Nothing bills against a pack unless it meets the approved definition.
// (b) Prepaid packs only. No retainer, ever. No minimums that smuggle the retainer back in.
// (c) Capacity is capped — checkout closes when delivery slots are full; ICPs we can't
//     deliver at 2026 reply rates are refused and refunded at intake.
export const cfg = defineVenture({
  slug: "pay-per-meeting",
  name: "MeetingPacks",
  tagline: "Prepaid packs of 5 qualified met meetings for B2B agencies — £119/meeting, no retainer, no-shows never count",
  mode: "checkout",
  currency: "gbp",
  price: 59500,
  priceLabel: "£595 per pack of 5 qualified met meetings — £119/meeting, no retainer",
  guarantee: "No-shows never count against your pack. Unused meetings roll or refund at 90 days.",
  hero: {
    badge: "Capacity-capped — checkout closes when delivery slots are full",
    headline: "Stop paying retainers for meetings that never happen. Pay for meetings that happened.",
    sub: "SDR agencies charge $3,000–$14,000 a month, and in SaaStr's survey of 1,200+ companies only 7% said it really worked. MeetingPacks inverts it: a prepaid pack of 5 qualified meetings that actually showed on your calendar — £119 each. We build the list, deep-research every prospect with AI, send from managed inboxes, and handle every reply. You approve what 'qualified' means in writing before we send a word — and no-shows never count.",
    cta: "Buy a pack — £595",
  },
  pains: [
    {
      title: "You paid the retainer. The meetings didn't happen.",
      body: "Outsourced SDR programs run $3,000–$14,000 a month plus $3k–$5k setup — billed whether anything books or not. In SaaStr's survey of 1,200+ companies, only 7% said outsourced SDRs 'really worked'; 67% said they didn't. The retainer model exists to socialize the agency's misses onto you.",
    },
    {
      title: "'Qualified' meant whatever the invoice needed it to mean",
      body: "The most documented dispute in pay-per-appointment is a misaligned definition of 'qualified' — you get billed for wrong-fit prospects, curiosity calls, and the 10–30% of bookings that no-show. When nobody wrote the definition down before launch, every billing cycle becomes an argument you lose.",
    },
    {
      title: "DIY outbound is a second job you don't have",
      body: "List building, domain warmup, deliverability, per-prospect research, reply handling — a real outbound system is a part-time role. At 1–15 staff, every hour you spend on it comes out of billable client delivery, and a half-run system burns your domain reputation along with your pipeline.",
    },
  ],
  offer: {
    title: "What £595 buys",
    bullets: [
      "5 qualified meetings that showed — booked AND attended by a prospect matching your approved criteria. No-shows never count against your pack",
      "Your qualification definition, agreed in writing before the first send: ICP filters + explicit interest + booked and attended. You approve it in the intake form — nothing bills against your pack unless it meets every element",
      "Prepaid packs only. No retainer, no setup fee, no minimum term — ever. When the pack is done, you decide if there's a next one",
      "ICP list built from scratch for your campaign — never purchased, never recycled — with every prospect deep-researched by AI before a word is written",
      "Sent from managed inboxes on domains we own and warm. Your primary domain is never used and never exposed",
      "Replies handled end-to-end: we qualify interest, chase the booking, confirm attendance, and land the meeting on your calendar with context notes",
      "Capacity-capped by design: we only sell packs we can deliver — checkout closes when delivery slots are full, and ICPs we can't serve are refused and refunded at intake",
    ],
    turnaround: "First meetings typically land 2–4 weeks after intake (list build + inbox warmup); packs complete within 90 days or the balance rolls/refunds",
  },
  proof: [
    {
      stat: "Outsourced SDR programs cost $3,000–$14,000/mo in 2026 — billed whether meetings happen or not",
      source: "Leadium, outsourced SDR cost guide (2026)",
      url: "https://www.leadium.com/blog/outsourced-sdr-cost",
    },
    {
      stat: "Only 7% of 1,200+ companies say outsourced SDRs 'really worked' — 67% say they didn't work",
      source: "SaaStr community survey",
      url: "https://www.saastr.com/only-7-of-you-have-really-gotten-outsourced-sdrs-to-work/",
    },
    {
      stat: "Cheapest agency pay-per-appointment benchmark: $300–$800 per meeting, with $10k+ minimum project sizes",
      source: "Belkins, appointment setting costs & pricing models",
      url: "https://belkins.io/blog/appointment-setting-costs-pricing-models",
    },
  ],
  steps: [
    {
      title: "Buy a pack",
      body: "£595 by card for 5 qualified met meetings. No discovery call, no proposal, no retainer, no minimum term.",
    },
    {
      title: "Approve your qualification definition",
      body: "A 10-minute async intake: your ICP filters, what counts as explicit interest, your calendar link. You sign off the definition in writing — nothing sends until you approve it, and nothing ever bills against a different standard. If we can't deliver your ICP, we say so here and refund.",
    },
    {
      title: "Meetings land on your calendar",
      body: "We build the list, research every prospect, send from our managed inboxes, handle replies, and book. You just take the meetings. No-shows never count; anything undelivered at 90 days rolls or refunds.",
    },
  ],
  faq: [
    {
      q: "What exactly counts as a 'qualified meeting'?",
      a: "Whatever you approved in writing before we sent anything — that's the entire point. The most documented source of disputes in pay-per-appointment is a misaligned definition of 'qualified', so we don't launch without one. Your definition has three parts: ICP match (industry, company size, geography, role — your filters, listed explicitly), explicit interest (the prospect agreed in writing to a meeting about the problem you solve), and booked AND attended (the meeting happened — verifiable from the calendar). You approve those criteria in the intake form before the first send. A meeting bills against your pack only if it meets every element, and no-shows never count.",
    },
    {
      q: "How is £119/meeting possible when agencies charge $300–$800?",
      a: "Two structural reasons. First, the cost of research-grade personalization collapsed: batch APIs run 50% off and prompt caching up to 90% off cached input, stacking to roughly a quarter of standard cost (CloudZero's 2026 pricing comparison) — deep per-prospect research now costs pennies, not an SDR's salary, which is what agency pricing is really paying for. Second, no retainer padding: $3,000–$14,000/mo retainers exist to bill you through the agency's misses. Prepaid packs mean you only ever pay for delivered, attended meetings — you're not funding anyone's idle months.",
    },
    {
      q: "What if my niche doesn't respond to cold email?",
      a: "Then we won't take your money. Intake includes capacity and fit screening: if your ACV, ICP, or offer makes qualified meetings unlikely at average 2026 reply rates (3.43% average per Instantly's benchmark — the honest number), we refuse the pack and refund in full. That's also why checkout closes when delivery slots are full: pay-per-outcome only works when the operator refuses campaigns that can't win, and we do.",
    },
    {
      q: "Whose inboxes and domain do you send from?",
      a: "Ours, always. Sending runs from managed inboxes on domains we own, warm, and rotate — built for outbound and monitored for deliverability. Your primary domain is never used, your email reputation is never exposed, and nothing we send can affect whether your client emails land.",
    },
    {
      q: "Is this compliant?",
      a: "Outreach is B2B only, to corporate subscribers, from lists we research ourselves per campaign — no purchased lists, ever. Every send carries a clear opt-out, honoured same day, and suppressions persist permanently across all campaigns. UK PECR treats corporate subscribers differently from individuals, and we operate on the corporate side of that line with the lawful basis documented before the first send.",
    },
    {
      q: "Can I just pay you a monthly retainer for ongoing volume?",
      a: "No — and that's a feature, not a limitation. Retainers are the incumbent failure mode this product exists to replace: 67% of companies say retainer SDR programs didn't work, and the retainer is why they kept paying anyway. If you want more meetings, buy another pack when your current one completes. If slots are full, you join the queue instead of paying for idle months — capacity capping is what keeps delivery honest.",
    },
  ],
  compliance:
    "Results vary by ICP, offer, and market; no outcome beyond the stated pack terms is guaranteed. MeetingPacks is a capacity-capped service — checkout closes when delivery slots are full, and packs we cannot deliver are refused and refunded at intake. All outreach is B2B, to corporate subscribers, from researched lists; opt-outs are honoured same day and suppression lists are maintained permanently.",
  seoPages: [
    {
      slug: "outsourced-sdr-cost-2026",
      title: "Outsourced SDR cost in 2026: the $3k–$14k retainer math vs pay-per-outcome",
      description:
        "What outsourced SDRs actually cost in 2026 — retainers, setup fees, per-appointment hybrids — and why the retainer math fails 67% of buyers. With sources.",
      body: "Every credible 2026 pricing guide lands in the same band: outsourced SDR programs cost $3,000–$14,000 per month — Leadium, Whistle, RevNew and ORRJO all publish overlapping ranges. Setup fees of $3,000–$5,000 are common, and hybrid models charge a $3,000–$8,000 retainer PLUS $100–$300 per qualified appointment on top.\n\n## The retainer math nobody does out loud\nTake the mid-band: a $6,000/mo retainer with a $4,000 setup fee. Year one costs $76,000 before a single meeting is guaranteed — because with a retainer, none are. If the program books eight qualified meetings a month (a good month at 2026 reply rates), you paid roughly $790 per meeting. If it books three, you paid over $2,000 each. The retainer doesn't price meetings; it prices the agency's payroll, and it bills whether meetings happen or not.\n\n## The satisfaction data is worse than the price\nSaaStr surveyed 1,200+ companies: only 7% said outsourced SDRs 'really worked.' Another 26% said 'sort of.' That leaves 67% who paid retainer prices for a program that didn't work. This is not a fringe complaint — it is the majority outcome, documented by the industry's own community.\n\n## 'Pay-per-appointment' exists — read the fine print\nBelkins, one of the category's biggest names, publishes pay-per-appointment pricing at $300–$800 per meeting — with $10,000+ minimum project sizes. SalesHive maintains a pay-per-meeting glossary page while selling $4,000–$12,000/mo retainers. The per-outcome model exists in name, but minimums and hybrid retainers quietly reintroduce exactly the risk the label claims to remove.\n\n## Why the incumbent price floor is structural\nA human SDR costs $60,000+ loaded, before tools and management. An agency spreading that payroll across clients cannot profitably sell a $150 meeting — the cost base forbids it. What changed in 2026 is that AI research cost collapsed: batch APIs run 50% off and prompt caching cuts up to 90% off cached input, stacking to roughly a quarter of standard cost (CloudZero's LLM pricing comparison). Research-grade personalization at 1,000-prospect scale now costs pounds, not payroll — so a per-meeting price the incumbents structurally cannot match becomes deliverable.\n\n## What pay-per-outcome should actually look like\n- A price per delivered, attended meeting — not per month of effort\n- 'Qualified' defined in writing before launch: ICP filters, explicit interest, booked and attended\n- No-shows excluded by contract, not by goodwill\n- No minimums that smuggle the retainer back in\n\nThat is the model MeetingPacks runs: £595 prepaid for a pack of 5 qualified met meetings (£119 each), qualification criteria approved by you in writing before the first send, no retainer ever, and capacity capped so packs are only sold when they can be delivered.\n\nSources: leadium.com/blog/outsourced-sdr-cost · saastr.com/only-7-of-you-have-really-gotten-outsourced-sdrs-to-work · belkins.io/blog/appointment-setting-costs-pricing-models · cloudzero.com/blog/llm-api-pricing-comparison",
    },
    {
      slug: "what-is-a-qualified-meeting-definition",
      title: "What is a 'qualified meeting'? The definition that prevents pay-per-appointment disputes",
      description:
        "The #1 documented conflict in pay-per-appointment is a misaligned definition of 'qualified.' Here's the four-element contractual definition that fixes it.",
      body: "Pay-per-appointment sounds dispute-proof: you only pay for results. In practice the model has a documented failure mode that has nothing to do with effort and everything to do with language. As Prospeo's guide to pay-per-appointment lead generation puts it, the most common source of disputes is a misaligned definition of what constitutes a qualified appointment.\n\n## How the dispute actually happens\nThe vendor books a meeting. The prospect is a real person at a real company — but they're an intern 'exploring options,' or a consultant fishing for ideas, or a company three sizes too small to buy. The vendor bills it; the buyer refuses to pay; both sides feel cheated, because both are using the word 'qualified' to mean different things and neither wrote their meaning down.\n\nThree structural forces make it worse:\n\n- Volume incentives degrade quality. As Tomba's analysis of pay-for-performance lead generation notes, vendors who deliver junk are responding rationally to a contract that rewards volume. If a warm body counts, warm bodies are what you will get.\n- No-shows leak value. Industry analyses put no-show rates at 10–30% of booked appointments (SuperhumanProspecting). If the contract bills on 'booked,' you are paying for up to a third of meetings that never happened.\n- Burned buyers dispute more. The people buying pay-per-appointment are usually refugees from failed SDR retainers — primed to fight every invoice. Without a written standard, every billing cycle is a negotiation.\n\n## The fix: a contractual definition, agreed before launch\nA qualified-meeting definition worth signing has four elements:\n\n- ICP match: industry, company size, geography, and role/seniority filters — listed explicitly, not implied\n- Explicit interest: the prospect agreed in writing to a meeting about the specific problem you solve — not a favor, not a mix-up, not 'happy to connect'\n- Booked AND attended: the meeting happened. Attendance is binary and verifiable from the calendar, which is what makes it enforceable\n- Written approval before the first send: the buyer signs the definition before any outreach begins, so no meeting is ever judged against a standard invented after the fact\n\nEvery element is checkable. That is what turns 'qualified' from a feeling into a contract term.\n\n## What this looks like in practice\nAt MeetingPacks the definition is the intake form. Before the first email sends, you approve your ICP filters, your explicit-interest standard, and the booked-and-attended requirement — in writing. A meeting bills against your prepaid pack only if it meets every element you approved. No-shows never count, by contract, and anything undelivered at 90 days rolls or refunds. The dispute never starts because the ambiguity never exists.\n\nSources: prospeo.io/s/pay-per-appointment-lead-generation · leadshook.com/blog/pay-per-appointment · superhumanprospecting.com/drawbacks-pay-per-appointment-lead-generation-services · tomba.io/blog/b2b-lead-generation-pay-for-performance",
    },
    {
      slug: "cold-email-reply-rates-2026-what-works",
      title: "Cold email reply rates in 2026: the honest numbers, and what still works",
      description:
        "Average cold email reply rates fell to 3.43% in 2026, from 8.5% in 2019. The real benchmark data, the funnel math, and what elite systems still achieve.",
      body: "Anyone selling you cold email in 2026 owes you the real numbers first. Instantly's 2026 benchmark report puts the average reply rate at 3.43% — down from roughly 5% in 2025 and 8.5% in 2019. The channel has lost more than half its response in six years. Top-quartile senders manage 5.5%, elite campaigns still clear 10%, and Martal's compilation of B2B cold email statistics reports 10–18% for tightly personalized systems. Both facts are true at once: the average collapsed, and the ceiling barely moved.\n\n## Why the decline is real\n- Inbox saturation: AI made sending cheap before it made relevance cheap, and buyers drowned in the difference\n- Bulk-sender enforcement: Google, Yahoo and Microsoft tightened sender requirements through 2024–25; sloppy infrastructure now dies in the spam folder before a human ever sees it\n- The AI-slop trust deficit: recipients have learned exactly what a template with a first-name token smells like, and 'personalization theater' pays the price\n\n## The funnel math, at average vs elite\nRun 1,000 emails at the 2026 average: ~34 replies → 20–30% positive → 7–10 interested → about half book → 4–5 booked → minus the 10–30% who no-show → 3–4 shows → apply a real qualification filter → roughly 2.5–4 qualified met meetings per 1,000 emails. At top-quartile craft, five qualified meetings take 700–1,000 emails. At bottom-quartile, the same five take 3,000+ and the economics stop working entirely.\n\nThat spread is the whole story of the channel in 2026: cold email didn't die — average cold email died.\n\n## What elite systems still do differently\n- Researched lists built fresh per campaign — never purchased, never recycled\n- Genuine per-prospect research at depth. This is the 2026 unlock: batch APIs (50% off) stacked with prompt caching (up to 90% off cached input) cut research-grade personalization to pennies per prospect (CloudZero's pricing comparison) — depth that used to cost an SDR's afternoon per name\n- Managed sending infrastructure: dedicated domains, warmed inboxes, volumes held far below enforcement thresholds\n- Fast, human-quality reply handling — interest decays in hours, not days\n- Niche selection: refusing ICPs where the funnel math above cannot close\n\n## What this means if you're buying meetings\nAsk any vendor two questions: what reply rate does your model assume, and what happens if my niche underperforms it? A retainer agency gets paid either way — that is what the retainer is for. A pay-per-outcome vendor eats the miss, which is why MeetingPacks screens every ICP at intake and refuses packs it can't deliver, sells prepaid packs of 5 qualified met meetings (£119 each, no retainer), and caps capacity rather than promising infinite volume in a channel that punishes it.\n\nSources: instantly.ai/cold-email-benchmark-report-2026 · reachoutly.com/cold-email/response-rate · martal.ca/b2b-cold-email-statistics-lb · cloudzero.com/blog/llm-api-pricing-comparison",
    },
  ],
  theme: { accent: "#ea580c", dark: false },
});
