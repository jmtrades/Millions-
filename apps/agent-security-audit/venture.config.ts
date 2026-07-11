import { defineVenture } from "@millions/core";

// GATE CONTRACT (binding conditions from phase-0 gates — evidence/r5b-agent-security-audit.md,
// verified 2026-07-10; R4 red team incorporated):
// - This product is a FINDINGS + REMEDIATION report. It is never sold, described or rendered
//   as a certification, a PASS stamp, or a guarantee/warranty of security. (R4: an
//   unaccredited PASS-stamp is a liability magnet; findings framing is the mitigation and
//   the honest differentiator — no cert body covers agentic stacks yet.)
// - Engagement scope is CAPPED AND DEFINED AT INTAKE: one production stack, point-in-time,
//   read-only exports by default. Stated in copy, FAQ and the compliance footer.
// - Citation set (no on-page claim beyond these): OWASP Top 10 for Agentic Applications 2026
//   (OWASP GenAI Security Project, Dec 2025; peer reviewers incl. NIST / Microsoft AI Red
//   Team / AWS contributors); prompt injection +340% YoY driving most production agentic
//   failures (Help Net Security, 11 Jun 2026); 80%+ of n8n workflows involve AI agents
//   (Sacra). Supporting: 88% org incident rate (Tech Times, 14 Jun 2026), OWASP GenAI
//   Exploit Round-up Q1 2026 — used on guide pages only.
export const cfg = defineVenture({
  slug: "agent-security-audit",
  name: "AgentAudit",
  tagline:
    "25-point security review of one production automation stack, mapped to the OWASP Agentic Top 10 — delivered white-label, so your agency sells it as its own",
  mode: "checkout",
  currency: "gbp",
  price: 49900,
  priceLabel: "£499 per stack · 5-day turnaround",
  guarantee: "If the report doesn't surface at least 5 actionable findings, it's free",
  hero: {
    badge: "Findings + remediation, mapped to the OWASP Agentic Top 10 (2026) — not a certification, by design",
    headline: "Your client just asked if their AI agent is secure. Here's the answer you can invoice.",
    sub: "You ship n8n, Make and agent builds. Your clients read the breach headlines. AgentAudit is a fixed-scope, 25-point security review of ONE production stack — prompt-injection exposure, credential sprawl, tool least-privilege, data-egress paths, cost-guard gaps — mapped to the OWASP Top 10 for Agentic Applications 2026 and delivered in 5 working days as a white-label findings + remediation report your agency resells under its own brand.",
    cta: "Book the audit — £499",
  },
  pains: [
    {
      title: "'Is this secure?' is now a deal-blocking question",
      body: "Enterprise procurement already runs AI-specific security questionnaires as standard, and the habit is cascading down to the SMB clients agencies serve. When it reaches you, 'we follow best practice' is not an answer anyone can forward to their boss. The question is really a request for a document — and you don't have one.",
    },
    {
      title: "The attack wave is aimed at exactly what you ship",
      body: "OWASP's 2026 data shows prompt injection driving most production agentic failures, up 340% year on year. Agency builds wire LLM nodes to inboxes, CRMs and payment tools and feed them untrusted input all day. That is the attack surface the OWASP Agentic Top 10 was written about — and 80%+ of n8n workflows now involve AI agents.",
    },
    {
      title: "Free scanners can't answer the client's question",
      body: "n8n's built-in audit and the community scanners are useful config lint: instance settings, stale credentials. None of them read your bespoke workflow graph in business context, none map findings to the OWASP agentic list, and none produce a client-facing report with your brand on it. The artifact is the product — and no scanner makes one.",
    },
  ],
  offer: {
    title: "The 25-point audit — one production stack, findings you can invoice",
    bullets: [
      "25-point review mapped point-by-point to the OWASP Top 10 for Agentic Applications 2026 (ASI codes) — so your client's IT or counsel can verify the framing independently",
      "Prompt-injection exposure map: every LLM node that reads untrusted input, what it can reach, and every path data can take out of the stack",
      "Credential & secret sprawl scan: where keys live, which workflows share them, and what one leaked credential actually unlocks",
      "Tool least-privilege matrix: what each agent can do vs what it needs to do, with the scoped-down permission set per node",
      "Cost-guard + runaway-loop check: unbounded loops, retry storms and missing spend caps — the failure mode that arrives as an API bill",
      "White-label PDF report under YOUR agency's brand, written for your end client to read: findings, evidence, severity — no jargon walls",
      "Remediation checklist ranked by severity: fix-this-week, fix-this-month, document-and-accept",
      "Fix-implementation upsell path: every finding scoped so you can quote the remediation work to your client — priced separately, and that margin is yours",
    ],
    turnaround: "Delivered in 5 working days from completed intake. One stack per engagement — scope capped and agreed in writing at intake.",
  },
  proof: [
    {
      stat: "OWASP Top 10 for Agentic Applications 2026: released Dec 2025, peer-reviewed by contributors from NIST, Microsoft's AI Red Team and AWS",
      source: "OWASP GenAI Security Project",
      url: "https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/",
    },
    {
      stat: "Prompt injection now drives most production agentic failures — up 340% year on year",
      source: "Help Net Security / OWASP State of Agentic AI Security, 11 Jun 2026",
      url: "https://www.helpnetsecurity.com/2026/06/11/owasp-prompt-injection-ai-security-failures/",
    },
    {
      stat: "80%+ of n8n workflows now involve AI agents",
      source: "Sacra research on n8n",
      url: "https://sacra.com/c/n8n/",
    },
  ],
  steps: [
    {
      title: "Buy",
      body: "£499 by card. Fixed price, fixed scope, no discovery call, no quote dance.",
    },
    {
      title: "Send the stack",
      body: "Async intake: workflow JSONs (n8n/Make exports), agent configs and prompts, tool + credential lists. Read-only exports by default — live access only if you choose to grant it. Scope is capped and confirmed in writing before work starts.",
    },
    {
      title: "Get the report, invoice your client",
      body: "Within 5 working days: the white-label findings + remediation report under your brand, a severity-ranked fix list, and per-finding scoping you can quote the remediation work from.",
    },
  ],
  faq: [
    {
      q: "Is this a certification?",
      a: "No — and be suspicious of anyone who says otherwise. No accreditation body covers agentic-AI stacks; the OWASP framework is months old. 'Certified secure' is a stamp nobody can honestly issue in 2026, so we don't issue one. AgentAudit is a findings and remediation report: what we found, the evidence, what to fix first, each item mapped to the OWASP Agentic Top 10. That is the honest artifact — and it's exactly why your client's counsel or IT will take it seriously.",
    },
    {
      q: "Do you need access to production?",
      a: "No. The audit runs on read-only material: workflow JSONs (n8n/Make exports), agent configs and prompts, tool and credential lists, plus a structured intake form. Live read-only access is optional if you want runtime checks — your choice, never a requirement. Either way, scope is fixed at intake and never expands mid-engagement.",
    },
    {
      q: "Can we resell the report?",
      a: "Yes — white-label is the point. The report ships as a PDF under your agency's brand, written for your end client to read. Agencies typically package it as their own security review at £1,500–£3,000, then quote the remediation work on top. Your client never sees us.",
    },
    {
      q: "Why not just run a scanner?",
      a: "Run them — n8n's free instance audit is genuinely useful hygiene. But scanners lint instances and settings. They can't see that a specific LLM node ingests customer email while holding a CRM write credential and an open outbound webhook, because that requires reading your bespoke workflow graph in business context. No scanner does OWASP-ASI mapping of bespoke agent logic, and none of them produce a client-facing white-label report. That's the gap this audit fills.",
    },
    {
      q: "What stacks do you cover?",
      a: "n8n and Make first — that's most of what agencies ship — plus LangChain and custom agent code, and MCP servers/tool integrations. One production stack per engagement, defined and capped at intake. If what you're running doesn't fit, ask through the form below before buying and we'll tell you straight.",
    },
  ],
  compliance:
    "AgentAudit is a findings-based security review: a point-in-time findings and remediation report on a defined scope, capped and agreed at intake. It is not a certification, not an assurance engagement, not a penetration test, and it provides no guarantee or warranty of security — no honest review of an agentic system can. It identifies issues and prioritises fixes; it does not certify their absence.",
  seoPages: [
    {
      slug: "owasp-agentic-top-10-2026-explained",
      title: "The OWASP Agentic Top 10 (2026), explained for automation agency owners",
      description:
        "OWASP's Top 10 for Agentic Applications is the list your clients' security questions will converge on. A plain-English walkthrough for agencies shipping n8n, Make and agent builds.",
      body: "In December 2025, the OWASP GenAI Security Project published the Top 10 for Agentic Applications 2026 — the first broadly peer-reviewed attempt to name what actually goes wrong when AI agents run in production. Reviewers included contributors from NIST, Microsoft's AI Red Team and AWS. It is free to read — and it is the list your clients' security questions are going to converge on.\n\n## Why this list, and why now\nThe Top 10 isn't a law and carries no fines. It matters for a simpler reason: it names risks in the exact systems agencies ship every week — LLM nodes wired into inboxes, CRMs, calendars and payment tools, reading input nobody controls. When a client's IT contact or insurer asks 'is this secure?', an answer structured around a public, peer-reviewed framework sounds like engineering. 'We're careful' does not.\n\n## The three entries that bite automation stacks first\n- ASI01 — Goal Hijack: an attacker steers the agent's objective, usually via prompt injection — instructions hidden in an email, a form fill, a scraped page. OWASP's own 2026 data has prompt injection driving most production agentic failures, up 340% year on year.\n- ASI02 — Tool Misuse: the agent's legitimate tools — send email, update record, call webhook — get used to do the attacker's work. The agent had the permission; the attacker only had the prompt.\n- ASI03 — Identity & Privilege Abuse: over-permissioned credentials. The admin API key shared across twelve workflows; the service account that can delete what it only needs to read.\n\nThe rest of the list covers themes like memory and context poisoning, supply-chain risk in agent components, unsafe code execution and cascading failures across multi-agent set-ups. But in a typical n8n or Make build, the first three account for most of the findings.\n\n## What 'mapped to OWASP' should actually mean\nA real review reads your specific workflow graph in business context: which nodes ingest untrusted input, which credentials each one holds, where data can leave the stack, what happens when a loop doesn't terminate — every finding tied to an ASI code so your client's IT or counsel can check the framing themselves. What it should NOT mean is a certificate. No accreditation body covers agentic stacks — the framework is months old — so anyone selling 'certified secure' is selling something that doesn't exist yet. A findings-and-remediation report is the honest artifact.\n\n## Where to start\nRead the list at genai.owasp.org, then OWASP's AI Agent Security Cheat Sheet for the control side. If you'd rather hand it off: AgentAudit runs the 25-point OWASP-mapped review of one production stack and delivers a white-label findings report your agency resells under its own brand — £499, five working days, at least five actionable findings or it's free.\n\n- OWASP Top 10 for Agentic Applications 2026 — genai.owasp.org (Dec 2025)\n- OWASP AI Agent Security Cheat Sheet — cheatsheetseries.owasp.org\n- Prompt-injection data: Help Net Security, 11 June 2026",
    },
    {
      slug: "prompt-injection-production-automations",
      title: "Prompt injection is up 340% — and production automations are where it lands",
      description:
        "OWASP's 2026 data shows prompt injection driving most production agentic failures, up 340% year on year. What that looks like inside n8n and Make builds — and what to check first.",
      body: "In June 2026, OWASP put a number on what security teams had been reporting all year: prompt injection is now the leading driver of production agentic failures, up 340% year on year (OWASP State of Agentic AI Security, reported by Help Net Security, 11 June 2026). Separate reporting puts confirmed or suspected AI-agent security incidents at 88% of organisations in the past year. This stopped being a lab curiosity; it's a production problem, and production automations are where it lands.\n\n## Your attack surface is every LLM node that reads text you don't control\nEmail bodies. Contact-form fills. Support tickets. Scraped pages. Calendar invites. CRM notes written by someone else. In an n8n or Make build, any of these can carry instructions to the model that processes them — because the model cannot reliably tell data from instructions. That is the whole exploit, and researchers increasingly describe it as a structural property of LLMs rather than a patchable bug.\n\n## The failure modes that actually happen\n- Data egress: an agent with inbox or CRM read access plus any outbound path — an email node, an HTTP request, a webhook — can be steered into sending data out. 'Summarise this email' becomes 'forward the last 20 invoices'.\n- Tool misuse: refunds issued, records changed, meetings booked. The agent had the permission; the attacker only needed the prompt.\n- Runaway cost: adversarial or malformed input that triggers retry storms and unbounded loops. With no spend cap, the API bill is how you find out.\n- Supply chain: OWASP's Q1 2026 GenAI Exploit Round-up catalogued real incidents, including a backdoored LiteLLM package downloaded roughly 47,000 times in three hours.\n\n## Why 'we sanitise inputs' isn't an answer\nFilters catch yesterday's phrasing. Injection payloads are adversarial: re-worded, encoded, split across messages, hidden in text humans never render. The posture that works is blast-radius reduction — assume the node can be injected, then make the answer to 'so what can it reach?' as boring as possible: least-privilege tools, scoped credentials per workflow, egress allow-lists, human approval on irreversible actions, hard spend caps.\n\n## The check worth running this month\nTake one production stack and map it: every LLM node that touches untrusted input; every tool and credential that node holds; every path data can take out; every loop without a guard. That map is most of a security review. Do it internally — or have it done. AgentAudit runs a 25-point review mapped to the OWASP Agentic Top 10 and delivers a white-label findings + remediation report your agency puts its own brand on: £499 per stack, five working days, at least five actionable findings or it's free.\n\n- Help Net Security, 11 Jun 2026 — OWASP prompt-injection findings\n- OWASP GenAI Exploit Round-up Q1 2026 — genai.owasp.org\n- Tech Times, 14 Jun 2026 — 88% org incident rate",
    },
    {
      slug: "selling-security-reviews-automation-agency",
      title: "How automation agencies sell security reviews (without becoming security firms)",
      description:
        "Clients are asking agencies 'is this secure?'. How agencies turn that question into a £1,500–£3,000 white-label engagement — honestly, without pretending to certify anything.",
      body: "Sooner or later the email arrives. Your client's new IT manager, their cyber insurer, or a procurement questionnaire from THEIR biggest customer wants to know: is the AI automation you built for us secure? Most agencies answer with reassurance — 'we follow best practice'. Reassurance is not a deliverable. It doesn't survive being forwarded, doesn't close the questionnaire, and doesn't renew the retainer.\n\n## The answer is an artifact, not a sentence\nWhat the people behind that question need is a document: what was reviewed, what was found, how severe, what's being fixed and in what order. A findings-and-remediation report mapped to a public framework — the OWASP Top 10 for Agentic Applications 2026 — gives their counsel or IT team something they can verify the framing of independently. Enterprise buyers already run AI-specific security questionnaires as standard, and analysts note most AI agent deals now fail on procurement, not features. That behaviour cascades down to the SMB clients agencies serve.\n\n## The white-label maths\n- The agency buys the audit: £499 per production stack, fixed scope, five working days.\n- The report arrives as a white-label PDF under the agency's brand, written for the end client to read.\n- Agencies typically package it as their own security review at £1,500–£3,000 — margin earned in audit week, before any fix work.\n- Every finding arrives scoped, so remediation is quotable line by line — and the fix work usually out-bills the review.\nOne resale pays for the audit roughly three times over, and the client-trust unlock — being the agency that brought the security review rather than the one that got asked for it — compounds across the whole book.\n\n## Sell it honestly or don't sell it\nNever call it a certification. No accreditation body covers agentic stacks — the OWASP framework is barely months old — so 'certified secure' is a claim nobody can honestly issue, and making it moves liability onto you. Sell a point-in-time, capped-scope findings review and say exactly that in the engagement letter. This isn't a weakness: buyers trust vendors who state their limits precisely, and it's the vendors selling guarantees who read as amateurs.\n\n## When to run it\n- At handover of every new agent build, priced into the project\n- Quarterly on retainer accounts, as the recurring security line item\n- The day a client forwards any security questionnaire\n- After a near-miss, while attention is high\n\n## What's inside\n25 checks across prompt-injection exposure, credential sprawl, tool least-privilege, data-egress paths and cost guards — each mapped to an OWASP ASI code and ranked by severity. If the report doesn't surface at least five actionable findings, it's free.\n\n- OWASP Top 10 for Agentic Applications 2026 — genai.owasp.org\n- Docket, 2026 AI procurement checklist — 'most AI agent deals fail on procurement, not features'\n- Help Net Security, 11 Jun 2026 — prompt injection +340% YoY",
    },
  ],
  theme: { accent: "#dc2626", dark: true },
});
