// Duty templates + roadmap, built from strategy/evidence/regulatory-pipeline-2026-2028.md
// (rows 14, 16, 25, 29) and products/ai-act-deployer-pack/02-deployer-vs-provider-decision-tree.md.
// v1 scope is EXACTLY: EU Art. 50 + Illinois HB 3773 + NY GBL Art. 47. Everything else is ROADMAP.

export type Role = "deployer" | "provider" | "out-of-scope";

export const MARKETS = [
  { code: "EU", label: "EU (or output used in the EU)" },
  { code: "US-IL", label: "US — Illinois" },
  { code: "US-NY", label: "US — New York" },
  { code: "UK", label: "UK" },
  { code: "US-OTHER", label: "US — other states" },
] as const;
export type MarketCode = (typeof MARKETS)[number]["code"];

// Answers collected by the classification stepper that gate duty applicability.
export type DutyFlags = {
  interacts: boolean; // interacts with natural persons (chat, voice, avatar)
  synthetic: boolean; // generates/manipulates image, audio or video (deepfake-class incl.)
  emotionBiometric: boolean; // emotion recognition or biometric categorisation
  publicText: boolean; // AI text published to inform the public on matters of public interest
  employment: boolean; // used in employment decisions (recruiting, screening, promotion...)
  companion: boolean; // functions as an AI companion
};

export const FLAG_LABELS: Record<keyof DutyFlags, string> = {
  interacts: "Interacts directly with natural persons (chat, voice, avatar)",
  synthetic: "Generates or manipulates image, audio or video content (incl. deepfake-class)",
  emotionBiometric: "Runs emotion recognition or biometric categorisation",
  publicText: "Generates text published to inform the public on matters of public interest",
  employment: "Used in employment decisions (screening, ranking, promotion, discipline…)",
  companion: "Functions as an AI companion (sustained human-like conversational relationship)",
};

export type DutyTemplate = {
  id: string;
  jurisdiction: MarketCode; // matches reg_clients.market codes
  obligation: string; // becomes reg_duties.obligation
  module: string; // taxonomy from the pipeline catalog: DIS/MRK/BIA/INC/INV/CLS
  due_date: string; // ISO date the duty bites; past date = already in force
  source_url: string; // primary source a lawyer can click
  roles: Exclude<Role, "out-of-scope">[]; // whose duty it is
  flag: keyof DutyFlags | null; // stepper flag that pre-selects it (null = role alone decides)
  note: string;
};

export const DUTY_TEMPLATES: DutyTemplate[] = [
  {
    id: "eu-art50-1",
    jurisdiction: "EU",
    obligation:
      "Art. 50(1) — design interactive system so natural persons are informed they are interacting with AI",
    module: "DIS",
    due_date: "2026-08-02",
    source_url: "https://artificialintelligenceact.eu/article/50/",
    roles: ["provider"],
    flag: "interacts",
    note: "Provider design duty. Narrow exemption where obvious to a reasonably well-informed person; deployers must keep the disclosure switched on (Art. 50(5) placement: at the latest at first interaction).",
  },
  {
    id: "eu-art50-2",
    jurisdiction: "EU",
    obligation:
      "Art. 50(2) — machine-readable marking of synthetic audio/image/video/text output (watermarking/provenance)",
    module: "MRK",
    due_date: "2026-12-02",
    source_url: "https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content",
    roles: ["provider"],
    flag: "synthetic",
    note: "Outer deadline 2 Dec 2026 for systems on the market before 2 Aug 2026; systems placed on the market from 2 Aug 2026 carry it from day one. Marking Code of Practice published 10 Jun 2026.",
  },
  {
    id: "eu-art50-3",
    jurisdiction: "EU",
    obligation:
      "Art. 50(3) — inform natural persons exposed to emotion-recognition or biometric-categorisation systems",
    module: "DIS",
    due_date: "2026-08-02",
    source_url: "https://artificialintelligenceact.eu/article/50/",
    roles: ["deployer"],
    flag: "emotionBiometric",
    note: "Deployer duty; runs alongside GDPR duties. Counsel flag: several of these uses skirt Art. 5 prohibitions (in force since Feb 2025).",
  },
  {
    id: "eu-art50-4-deepfake",
    jurisdiction: "EU",
    obligation:
      "Art. 50(4) — visible disclosure that deepfake image/audio/video content is artificially generated or manipulated",
    module: "DIS",
    due_date: "2026-08-02",
    source_url: "https://artificialintelligenceact.eu/article/50/",
    roles: ["deployer"],
    flag: "synthetic",
    note: "Deepfake per Art. 3(60): content resembling real persons/objects/places/events that would falsely appear authentic. Obviously stylised illustration generally out — log the judgment; borderline cases to counsel.",
  },
  {
    id: "eu-art50-4-text",
    jurisdiction: "EU",
    obligation:
      "Art. 50(4) — disclose AI-generated/manipulated text published to inform the public on matters of public interest",
    module: "DIS",
    due_date: "2026-08-02",
    source_url: "https://artificialintelligenceact.eu/article/50/",
    roles: ["deployer"],
    flag: "publicText",
    note: "Exempt where human editorial review + a person/entity holds editorial responsibility — document WHO holds it in the evidence log.",
  },
  {
    id: "us-il-hb3773",
    jurisdiction: "US-IL",
    obligation:
      "IL HB 3773 (775 ILCS 5) — notify employees/applicants of AI use in employment decisions; no discriminatory AI use",
    module: "BIA/DIS",
    due_date: "2026-01-01",
    source_url: "https://www.ilga.gov/legislation/publicacts/103/PDF/103-0804.pdf",
    roles: ["deployer"],
    flag: "employment",
    note: "In force since 1 Jan 2026. Binds employers using AI in recruitment, hiring, promotion, discipline, discharge…; IHRA remedies via IDHR/Human Rights Commission.",
  },
  {
    id: "us-ny-gbl47",
    jurisdiction: "US-NY",
    obligation:
      "NY GBL Art. 47 — AI-companion disclosure that user is not conversing with a human + suicide/self-harm safeguard protocols",
    module: "DIS/INC",
    due_date: "2025-11-05",
    source_url: "https://www.nysenate.gov/legislation/laws/GBS/A47",
    roles: ["provider", "deployer"],
    flag: "companion",
    note: "In force since 5 Nov 2025. Binds AI-companion operators; AG enforcement. Applies whichever side of the provider/deployer line operates the companion.",
  },
];

// Which templates should be pre-selected for a system, given the client's markets,
// the system's effective roles (a system can be provider AND deployer), and the flags.
export function matchTemplates(
  markets: string[],
  effectiveRoles: Array<"provider" | "deployer">,
  flags: DutyFlags
): { preselected: DutyTemplate[]; rest: DutyTemplate[] } {
  const preselected: DutyTemplate[] = [];
  const rest: DutyTemplate[] = [];
  for (const t of DUTY_TEMPLATES) {
    const marketHit = markets.includes(t.jurisdiction);
    const roleHit = t.roles.some((r) => effectiveRoles.includes(r));
    const flagHit = t.flag === null ? true : flags[t.flag];
    (marketHit && roleHit && flagHit ? preselected : rest).push(t);
  }
  return { preselected, rest };
}

export function daysUntil(iso: string): number {
  return Math.ceil((new Date(`${iso}T00:00:00Z`).getTime() - Date.now()) / 86400000);
}

// Dated pipeline (regulatory-pipeline-2026-2028.md §A2) — the landing-page roadmap.
// shipped: true = a v1 duty template above. Everything else is build order, not coverage.
export const ROADMAP: Array<{
  date: string;
  jurisdiction: string;
  what: string;
  shipped: boolean;
}> = [
  { date: "2025-11-05", jurisdiction: "New York", what: "GBL Art. 47 — AI-companion disclosures + safeguard protocols (in force)", shipped: true },
  { date: "2026-01-01", jurisdiction: "Illinois", what: "HB 3773 — AI-in-employment notice + anti-discrimination (in force)", shipped: true },
  { date: "2026-08-02", jurisdiction: "EU", what: "Art. 50 transparency: chatbot disclosure, deepfake/synthetic labelling, emotion-recognition notice", shipped: true },
  { date: "2026-12-02", jurisdiction: "EU", what: "Art. 50(2) — machine-readable marking of synthetic output (providers)", shipped: true },
  { date: "2026-10-01", jurisdiction: "Connecticut", what: "CART Act phase 1 — AEDT employment duties, frontier-developer reporting", shipped: false },
  { date: "2026-12-02", jurisdiction: "EU", what: "Platform Work Directive transposition — algorithmic-management transparency", shipped: false },
  { date: "2027-01-01", jurisdiction: "Colorado", what: "Colorado AI Act — high-risk duty of care, impact assessments, consumer notices", shipped: false },
  { date: "2027-01-01", jurisdiction: "California", what: "CCPA ADMT regulations — pre-use notices, opt-out/access for significant-decision ADMT", shipped: false },
  { date: "2027-12-02", jurisdiction: "EU", what: "Annex III high-risk obligations — risk management, logging, registration, FRIAs, incident reporting", shipped: false },
  { date: "2028-08-02", jurisdiction: "EU", what: "Embedded high-risk AI (Annex I regulated products)", shipped: false },
];
