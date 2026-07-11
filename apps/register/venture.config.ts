import { defineVenture } from "@millions/core";

// ACCURACY CONTRACT (dates verified against strategy/evidence/regulatory-pipeline-2026-2028.md,
// itself verified from primary sources 2026-07-11):
// - EU AI Act Art. 50 transparency duties apply 2 AUGUST 2026 (Council final green light 29 Jun 2026).
// - Art. 50(2) machine-readable marking: outer deadline 2 DECEMBER 2026 (Marking CoP published 10 Jun 2026).
// - Illinois HB 3773 (775 ILCS 5): in force since 1 JANUARY 2026.
// - NY GBL Art. 47 (AI companions): in force since 5 NOVEMBER 2025.
// - Annex III high-risk: 2 Dec 2027 (standalone) / 2 Aug 2028 (embedded) — ROADMAP, never urgency copy.
// v1 SCOPE IS EXACTLY: EU Art. 50 + IL HB 3773 + NY GBL Art. 47 duty templates. Say so everywhere.
export const cfg = defineVenture({
  slug: "register",
  name: "Registry",
  tagline: "The AI deployment register your clients' counsel accepts",
  mode: "waitlist",
  currency: "gbp",
  price: 14900,
  priceLabel: "£149/mo planned at launch · waitlist locks founder pricing",
  deadline: { iso: "2026-08-02", label: "EU Art. 50 transparency duties apply in" },
  hero: {
    badge: "v1 scope, honestly: EU Art. 50 + Illinois HB 3773 + NY GBL Art. 47 duty templates",
    headline: "When your client's counsel asks “are we compliant?”, send the register, not a promise.",
    sub: "Registry is a multi-tenant AI deployment register for agencies: every client, every AI system, its deployer-vs-provider classification, the dated duties that attach, and an append-only evidence log — exported as the 13-column CSV counsel and procurement actually accept.",
    cta: "Join the waitlist",
  },
  pains: [
    {
      title: "Your client book runs on spreadsheets that don't survive scrutiny",
      body: "One tab per client, edited in place, no evidence links. The first thing an auditor or opposing counsel flags is a register that can be silently rewritten. Registry's evidence log is append-only by construction.",
    },
    {
      title: "The duties are per system, per role, per jurisdiction — and dated",
      body: "The same agency is a provider on one deployment and a contractor on the next. EU Art. 50 bites 2 Aug 2026, Art. 50(2) marking 2 Dec 2026, while Illinois HB 3773 and NY GBL Art. 47 are already in force. Nobody holds that matrix in their head across 20 clients.",
    },
    {
      title: "“Prove you complied, by Friday” is a real email",
      body: "Enterprise procurement, insurers' questionnaires, and clients' counsel all ask the same thing: who classified this system, when, on what basis, and where's the evidence. The answer has to be a ten-minute export, not a crisis.",
    },
  ],
  offer: {
    title: "What v1 ships (and nothing it doesn't)",
    bullets: [
      "One org → many client workspaces → many AI systems, with real per-org row-level security",
      "Deployer-vs-provider classification stepper per system — the question tree from the AI Act Deployer Pack, inline, answers recorded as the classification basis",
      "Duty templates seeded with real dates and primary-source citations: EU Art. 50(1)/(3)/(4) from 2 Aug 2026, Art. 50(2) marking by 2 Dec 2026, Illinois HB 3773 (live), NY GBL Art. 47 (live)",
      "Append-only evidence log per duty — corrections supersede, never overwrite",
      "One-click CSV export in the 13-column register format counsel accepts",
      "Roadmap = the dated regulatory pipeline below, in build order — not a coverage promise",
    ],
    turnaround: "Waitlist now — founding agencies onboard first, at founder pricing",
  },
  proof: [
    {
      stat: "EU Art. 50 transparency applies from 2 Aug 2026; only Art. 50(2) marking moved to 2 Dec 2026",
      source: "Council of the EU, final green light, 29 Jun 2026",
      url: "https://www.consilium.europa.eu/en/press/press-releases/2026/06/29/artificial-intelligence-council-gives-final-green-light-to-simplify-and-streamline-rules/",
    },
    {
      stat: "Illinois HB 3773: notice to employees/applicants of AI use in employment decisions — in force 1 Jan 2026",
      source: "Illinois General Assembly, Public Act 103-0804",
      url: "https://www.ilga.gov/legislation/publicacts/103/PDF/103-0804.pdf",
    },
    {
      stat: "New York GBL Art. 47: AI-companion disclosures + safeguard protocols — in force 5 Nov 2025",
      source: "NY General Business Law, Article 47",
      url: "https://www.nysenate.gov/legislation/laws/GBS/A47",
    },
  ],
  steps: [
    {
      title: "Add a client, classify each system",
      body: "Run the inline deployer-vs-provider stepper per deployment. The answers become the recorded classification basis — dated, attributable, auditable.",
    },
    {
      title: "Work the seeded duties",
      body: "Each system gets its duty rows with jurisdiction, dated deadline, and primary-source citation. Log evidence as you deploy controls — the log only ever appends.",
    },
    {
      title: "Export the register",
      body: "One click per client: the 13-column CSV — row id, system, role, duty, control, evidence link, source cited, status — ready for counsel, procurement, or an insurer.",
    },
  ],
  faq: [
    {
      q: "What exactly does v1 cover?",
      a: "Duty templates for EU AI Act Art. 50 (transparency, from 2 Aug 2026, plus the Art. 50(2) machine-readable-marking deadline of 2 Dec 2026), Illinois HB 3773 (AI in employment decisions, live since 1 Jan 2026), and NY GBL Art. 47 (AI companions, live since 5 Nov 2025). That's it. Everything else on the roadmap is dated below — Colorado, California ADMT, EU Annex III — and ships as modules when the dates justify them.",
    },
    {
      q: "Is this legal advice?",
      a: "No. Registry is record-keeping software: it stores your classifications, dated duties with citations to primary sources, and your evidence. Review the outputs with qualified counsel; the register is designed to make that review fast, not to replace it.",
    },
    {
      q: "Why is the evidence log append-only?",
      a: "Because that's what makes a register credible as evidence. Corrections get a new entry that supersedes the old one — the same operating rule as the AI Act Deployer Pack's manual register. There is deliberately no edit or delete on evidence, enforced at the database layer.",
    },
    {
      q: "We already bought the AI Act Deployer Pack — how does this relate?",
      a: "Registry is the same 13-column register, normalized and multi-tenant: the pack's decision tree becomes the classification stepper, the CSV template becomes the export format. The pack stays the deep-dive documentation; Registry is the system of record across your whole client book.",
    },
    {
      q: "What about high-risk (Annex III) systems?",
      a: "Out of scope in v1, honestly flagged as such. Annex III duties land 2 Dec 2027 (standalone) and 2 Aug 2028 (embedded) after the Digital Omnibus. Registry's roadmap targets a high-risk module ahead of those dates — you can log such systems today and classify them, but there are no Annex III duty templates yet.",
    },
    {
      q: "When does billing start?",
      a: "Not yet — v1 is waitlist-only while founding agencies onboard. Waitlist members get founder pricing before any public launch price.",
    },
  ],
  compliance:
    "Registry is record-keeping software with citations to primary legal sources. It is not legal advice and does not create a lawyer-client relationship. Classifications and register exports should be reviewed by qualified counsel before being relied on.",
  seoPages: [
    {
      slug: "ai-deployment-register-what-counsel-actually-accepts",
      title: "The AI deployment register: what your clients' counsel actually accepts",
      description:
        "Art. 50 doesn't prescribe a register — contracts and questionnaires do. What a credible AI deployment register contains, column by column.",
      body: "Nothing in Article 50 of the EU AI Act says “keep a register.” The pressure comes from the humans who check: your client's counsel, their enterprise customer's procurement team, their insurer's questionnaire, and — worst case — a market-surveillance authority. What satisfies them is one well-kept artifact: one row per control, per system, per client.\n\n## The 13 columns\nRow id (immutable), client, system, role classification, duty, control deployed, date deployed, evidence link, source cited, reviewer, review date, status, notes. Two rules do most of the work: every row carries its own citation to a primary source, and no evidence link means not done.\n\n## Append-only or it doesn't count\nA register that can be silently edited reads as decoration. Corrections should supersede, never overwrite — a new row pointing at the old one. That operating rule is why an append-only evidence log beats a shared spreadsheet: it is structurally incapable of the thing auditors distrust most.\n\n## Dates that matter in it right now\n- EU Art. 50 transparency duties: 2 August 2026\n- EU Art. 50(2) machine-readable marking (providers): outer deadline 2 December 2026\n- Illinois HB 3773 (AI in employment decisions): in force since 1 January 2026\n- NY GBL Art. 47 (AI companions): in force since 5 November 2025\n\nRegistry normalizes exactly this artifact — classification stepper, dated duty templates with citations, append-only evidence, 13-column CSV export.",
    },
    {
      slug: "deployer-vs-provider-per-system-classification",
      title: "Deployer vs provider: why classification is per system, not per agency",
      description:
        "“We're just an agency” is not a classification. The AI Act assigns duties per system and per role — here's the question tree that decides it.",
      body: "The EU AI Act does not regulate “agencies.” It assigns duties per system, per role: the provider develops a system (or has it developed) and places it on the market under its own name; the deployer uses a system under its authority. The same agency is routinely a provider on one deployment and a development contractor on the next.\n\n## The questions that decide it\nBrand does most of the work: whoever's name or trademark the system is placed on the market under is presumptively the provider — even with zero code written. Then authority: whoever operates the system in their business is the deployer. Re-branding or substantially modifying a third-party system pushes you back toward provider. And EU nexus follows the output, not the server location: a UK or US agency whose deployments reach EU users is in scope.\n\n## Why it must be recorded, not just decided\nWhen the classification is challenged — by counsel, procurement, or an authority — the question is never only “what role?” but “who decided, when, on what basis?” A defensible register stores the answers to the tree alongside the result, dated.\n\n## What each answer costs\nProviders of interactive systems carry the Art. 50(1) design duty from 2 August 2026 and the Art. 50(2) machine-readable marking duty by 2 December 2026. Deployers carry Art. 50(3) notices for emotion recognition and Art. 50(4) disclosure for deepfake-class content and public-interest text. Out-of-scope systems still earn a row — a dated scope-out entry is the cheapest audit finding you'll ever prevent.\n\nRegistry ships this tree as an inline stepper: answers in, role + basis + seeded duty rows out.",
    },
    {
      slug: "illinois-hb-3773-ny-gbl-47-already-in-force",
      title: "Two US AI laws your register must already cover: IL HB 3773 and NY GBL Art. 47",
      description:
        "While everyone watches the EU's 2 August 2026 date, Illinois and New York duties are already live. What they require and who they bind.",
      body: "EU dates dominate the AI-compliance conversation, but two US obligations are already in force — and both belong in any register that claims to be current.\n\n## Illinois HB 3773 — in force 1 January 2026\nAn amendment to the Illinois Human Rights Act (775 ILCS 5): employers may not use AI that has a discriminatory effect in employment decisions, and must notify employees and applicants when AI is used in those decisions. It binds employers — which includes your clients using AI screening, ranking, or evaluation anywhere in the hiring-to-promotion pipeline. Remedies run through the IDHR/Human Rights Commission.\n\n## New York GBL Article 47 — in force 5 November 2025\nAI-companion operators must disclose that users are interacting with an AI and maintain suicide/self-harm safeguard protocols, enforced by the Attorney General. If any client deployment functions as a companion — sustained, human-like conversational relationships — this is live law, not a roadmap item.\n\n## Why they matter for EU-focused agencies\nBoth laws are duty templates in Registry's v1 alongside EU Art. 50 — because a register that only knows one jurisdiction quietly lies to its readers. A US client with an Illinois workforce or a New York consumer product has dated duties today, with citations a lawyer can click: the Illinois Public Act text and the codified GBL article.\n\nRegistry seeds these duties automatically when a client's market includes Illinois or New York and the system's classification triggers them.",
    },
  ],
  theme: { accent: "#0f766e", dark: false },
});
