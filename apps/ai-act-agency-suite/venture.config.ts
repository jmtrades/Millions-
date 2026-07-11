import { defineVenture } from "@millions/core";

// ACCURACY CONTRACT (directive-mandated, verified from primary sources 2026-07-10/11):
// - Art. 50 transparency duties (chatbot disclosure, deployer deepfake/synthetic-content
//   disclosure) apply from 2 AUGUST 2026. [Council final green light 29 Jun 2026]
// - ONLY Art. 50(2) — providers' machine-readable marking/detection of AI-generated
//   content — carries a shortened grace to 2 DECEMBER 2026, with the Commission's
//   Code of Practice on marking published 10 Jun 2026 (signature window 22 Jul 2026).
// - Annex III standalone high-risk obligations were POSTPONED to 2 Dec 2027 (embedded:
//   2 Aug 2028) by the Digital Omnibus. No urgency claims may reference Annex III.
export const cfg = defineVenture({
  slug: "ai-act-agency-suite",
  name: "AI Act Deployer Pack",
  tagline: "Art. 50 compliance for agencies that ship AI — correct dates, citable sources, ready to deploy",
  mode: "checkout",
  currency: "gbp",
  price: 39900,
  priceLabel: "£399 one-off · 12 months of updates included",
  guarantee: "14-day refund if it doesn't survive your counsel's review",
  deadline: { iso: "2026-08-02", label: "Art. 50 transparency duties apply in" },
  hero: {
    badge: "Every date verified against Council & Commission primary sources — citations inside",
    headline: "On 2 August, your clients' chatbots legally have to say they're AI. Whose job is that? Yours.",
    sub: "You deployed the chatbots, the voice agents, the AI content pipelines. Under Article 50 of the EU AI Act, transparency duties bite on 2 August 2026 — and half the advice online still cites dates the Digital Omnibus changed on 29 June. This pack is the corrected, citable, deploy-ready version.",
    cta: "Get the pack — £399",
  },
  pains: [
    {
      title: "The dates moved 12 days ago and the internet hasn't caught up",
      body: "The Digital Omnibus (Council, 29 Jun 2026) postponed Annex III high-risk duties to Dec 2027 — but left core Art. 50 transparency at 2 Aug 2026 and set 2 Dec 2026 only for providers' machine-readable marking. Most guides conflate all three. Professional researchers we tested contradicted each other on exactly this.",
    },
    {
      title: "Your clients are asking 'are we compliant?' and 'probably' doesn't bill",
      body: "Fines for transparency breaches run up to €15M or 3% of worldwide turnover. Your client's counsel will ask what the agency deployed and on what basis. You need an answer in writing.",
    },
    {
      title: "Free guidance exists — assembled for lawyers, not for people who ship",
      body: "The Act, the Omnibus, the Code of Practice: all public, all scattered, none of it turned into disclosure copy, config, and logs you can actually deploy across a client book this month.",
    },
  ],
  offer: {
    title: "What's in the pack",
    bullets: [
      "Deployer-vs-provider decision tree — establish which Art. 50 duties are yours vs your client's, per deployment",
      "Paste-ready disclosure copy blocks: chatbot 'you're talking to AI' notices and deepfake/synthetic-content labels (Art. 50(4)) in EN/DE/FR/ES",
      "Per-client Art. 50 compliance register (Notion + CSV) — the evidence file you hand to their counsel",
      "n8n/Make logging & human-oversight blueprints — importable, production-tested",
      "The corrected timeline, cited line-by-line to Council/Commission primary sources: 2 Aug 2026 vs 2 Dec 2026 (Art. 50(2) marking grace) vs 2 Dec 2027 (Annex III)",
      "Marking readiness checklist for the 2 Dec 2026 provider duty + Code of Practice tracker",
      "Sellable client-audit kit: a £1,500-£3,000 'Art. 50 transparency audit' engagement — scope, report template, pricing",
      "12 months of updates as guidance lands (delivered via private channel)",
    ],
    turnaround: "Instant delivery after checkout",
  },
  proof: [
    {
      stat: "Art. 50 transparency applies from 2 Aug 2026 — unchanged by the Omnibus",
      source: "Council of the EU, final green light, 29 Jun 2026",
      url: "https://www.consilium.europa.eu/en/press/press-releases/2026/06/29/artificial-intelligence-council-gives-final-green-light-to-simplify-and-streamline-rules/",
    },
    {
      stat: "Art. 50(2) machine-readable marking: providers get until 2 Dec 2026",
      source: "EU AI Act, Article 50 (consolidated) — artificialintelligenceact.eu",
      url: "https://artificialintelligenceact.eu/article/50/",
    },
    {
      stat: "Code of Practice on marking AI content published 10 Jun 2026",
      source: "European Commission, digital-strategy.ec.europa.eu",
      url: "https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content",
    },
  ],
  steps: [
    { title: "Buy", body: "£399 by card. Instant access — no call, no scoping dance." },
    { title: "Run the decision tree", body: "30 minutes per client to map which Art. 50 duties sit where. The register fills itself as you go." },
    { title: "Deploy + bill", body: "Ship the disclosure blocks and logging blueprints across your client book — then sell the audit engagement with the kit included." },
  ],
  faq: [
    {
      q: "Didn't the Digital Omnibus delay all of this to 2027?",
      a: "No — that's the confusion this pack exists to kill. The Omnibus (agreed 7 May, Parliament 16 Jun, Council 29 Jun 2026) postponed Annex III HIGH-RISK duties to 2 Dec 2027. Core Article 50 transparency duties still apply from 2 Aug 2026. The only Art. 50 relief is the providers' machine-readable-marking duty in Art. 50(2), which moved to 2 Dec 2026. Every claim is cited to the Council and Commission texts inside the pack.",
    },
    {
      q: "Is this legal advice?",
      a: "No. It's engineering documentation, disclosure copy, and evidence templates built from the primary sources — designed to survive your counsel's review, not replace it. Sources are cited line-by-line so counsel can verify in minutes.",
    },
    {
      q: "We're a UK/US agency — does this even apply to us?",
      a: "If your deployments reach EU users, the Act's extraterritorial scope can reach you. The decision tree covers the third-country cases explicitly.",
    },
    {
      q: "What if guidance changes again?",
      a: "That's the point of the updates channel: 12 months of corrections and additions as enforcement practice and Commission guidance land — including the 2 Dec 2026 marking milestone and the 2027 Annex III wave.",
    },
    {
      q: "Who is this NOT for?",
      a: "Enterprises with in-house counsel running full GRC platforms. This is for the 2-25 person agency/consultancy that deployed AI for clients and needs to be demonstrably right, fast.",
    },
  ],
  compliance:
    "AI Act Deployer Pack provides practical templates and engineering documentation with citations to primary legal sources. It is not legal advice and does not create a lawyer-client relationship. Review outputs with qualified counsel before relying on them.",
  seoPages: [
    {
      slug: "eu-ai-act-2-august-2026-what-actually-applies",
      title: "EU AI Act on 2 August 2026: what actually applies (post-Omnibus)",
      description:
        "The Digital Omnibus changed the AI Act timeline on 29 June 2026. Here is exactly what still applies on 2 August 2026, with primary sources.",
      body: "If you deploy or build AI systems that touch EU users, three dates now matter — and most articles you'll find online mix them up because they were written before the Digital Omnibus was adopted.\n\n## What applies from 2 August 2026\nCore Article 50 transparency duties. If you provide an AI system that interacts directly with people (chatbots, voice agents), it must be designed so people know they're dealing with AI. If you deploy deepfakes or AI-generated/manipulated content, disclosure duties under Art. 50(4) apply. National enforcement powers and penalty regimes for these duties also take effect. Fines for transparency breaches run up to €15M or 3% of worldwide annual turnover.\n\n## What moved to 2 December 2026\nOne thing only in the Art. 50 family: the providers' duty under Art. 50(2) to mark AI-generated content in a machine-readable format (watermarking/provenance). The Omnibus granted a short grace period to 2 Dec 2026, paired with the Commission's Code of Practice on marking published 10 June 2026.\n\n## What moved to 2 December 2027\nStandalone Annex III high-risk obligations (conformity assessments, registration, the heavy governance lift) — postponed by the Omnibus, with embedded high-risk systems following on 2 Aug 2028. If a vendor is selling you urgency on Annex III 'this summer', they are selling you the old calendar.\n\n## Why the confusion is everywhere\nThe Omnibus was agreed politically on 7 May 2026, voted by Parliament on 16 June, and got the Council's final green light on 29 June — days before the original deadline. Content written between August 2025 and May 2026 is structurally out of date, and even professional research teams have published contradictory summaries.\n\n- Council press release, 29 Jun 2026 (final adoption)\n- European Commission, Code of Practice on marking of AI-generated content, 10 Jun 2026\n- Consolidated Article 50 text at artificialintelligenceact.eu\n\nThe AI Act Deployer Pack turns these sources into deploy-ready disclosure copy, a per-client compliance register, and logging blueprints — with every date cited.",
    },
    {
      slug: "art-50-2-machine-readable-marking-2-december-2026",
      title: "Art. 50(2) machine-readable marking: the 2 December 2026 duty explained",
      description:
        "Providers of generative AI systems must mark outputs in machine-readable format by 2 Dec 2026. What counts, who's a provider, and how the Code of Practice fits.",
      body: "Article 50(2) of the EU AI Act requires providers of AI systems that generate synthetic audio, image, video or text to ensure outputs are marked in a machine-readable format and detectable as artificially generated.\n\n## The date\nOriginally 2 August 2026 with the rest of Article 50, this specific duty was given a grace period to 2 December 2026 by the Digital Omnibus (final Council adoption 29 June 2026). Everything else in Art. 50 — chatbot disclosure, deployer deepfake labelling — still bites on 2 August 2026.\n\n## Are you a 'provider' here?\nIf your agency fine-tunes, white-labels, or places AI systems on the EU market under your own name, you can cross from deployer into provider territory — and Art. 50(2) becomes yours. If you deploy a big-lab model via API and the lab's marking (C2PA, SynthID-class) flows through intact, much of the technical burden sits upstream. The catch: pipelines that strip metadata (screenshots, re-encodes, social exports) break upstream marking, and your client's visible-label duties under Art. 50(4) don't disappear.\n\n## The Code of Practice\nThe Commission published a Code of Practice on the marking and labelling of AI-generated content on 10 June 2026. Signing it gave a presumption of conformity (signature window closed 22 July 2026). Non-signatories can still comply — they just carry the evidential burden themselves.\n\n## What to do this quarter\n- Map every generative output path in every client deployment (the Pack's register does this per client)\n- Verify which upstream marks survive your real delivery pipeline\n- Add re-stamping where exports strip provenance\n- Put visible Art. 50(4) labels on synthetic media now — that duty is already live from 2 August\n\nSources: Council 29 Jun 2026 adoption; Commission Code of Practice page; consolidated Art. 50 text.",
    },
    {
      slug: "ai-act-deployer-vs-provider-agency-guide",
      title: "Deployer or provider? The AI Act question every agency gets wrong",
      description:
        "Your Art. 50 duties depend on whether each deployment makes you a deployer or a provider. A working decision guide for agencies and consultancies.",
      body: "The single highest-stakes classification under the EU AI Act for an agency isn't high-risk vs low-risk. It's deployer vs provider — because it decides which Article 50 duties are yours on 2 August 2026.\n\n## The short version\nA provider develops an AI system (or has one developed) and places it on the market under its own name or trademark. A deployer uses an AI system under its own authority in a professional context. An agency that configures a client chatbot on a big-lab API is usually a deployer — until it starts white-labelling, substantially modifying, or marketing the system as its own product.\n\n## Why agencies flip categories without noticing\n- White-labelling a chatbot under your agency's brand: provider indicators\n- Fine-tuning + selling the same 'AI receptionist' to twelve clients as a product: provider indicators\n- Building a bespoke workflow inside one client's tenant on their accounts: deployer territory\nEach client engagement can land differently. That's why a per-deployment decision tree beats a one-time opinion.\n\n## What each classification costs you on 2 Aug 2026\nProviders of interactive systems must design them so users know they're AI. Deployers of deepfake/synthetic content must disclose (Art. 50(4)), with the machine-readable marking duty for providers following on 2 Dec 2026 (Art. 50(2), post-Omnibus). Both need evidence: who classified what, when, on what basis.\n\n## The register is the product\nWhen a client's counsel asks 'are we compliant?', the winning answer is a dated register: system, role, duty, control deployed, source cited. The AI Act Deployer Pack ships that register plus the decision tree, disclosure copy in four languages, and the logging blueprints to back it — £399, citations included.",
    },
  ],
  theme: { accent: "#2563eb", dark: false },
});
