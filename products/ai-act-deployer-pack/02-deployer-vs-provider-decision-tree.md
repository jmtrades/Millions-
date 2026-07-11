# 02 — Deployer vs Provider: Per-Deployment Classification

> **AI Act Deployer Pack v1.0 — facts verified 11 July 2026.** Engineering documentation, not legal advice (`00-START-HERE.md` §Disclaimer). Role classification drives everything else in this pack; where a deployment lands in a grey zone below, that is a counsel question — flag it, don't guess.

Run **every live deployment** through this file separately. "We're just an agency" is not a classification; the AI Act assigns duties per **system**, per **role**, and the same agency is routinely a provider on one deployment and a mere development contractor on the next.

---

## 1. The two definitions that decide everything

- **Provider** — Art. 3(3): a person/entity "that develops an AI system or a general-purpose AI model **or that has an AI system or a general-purpose AI model developed** and places it on the market **or puts the AI system into service under its own name or trademark**, whether for payment or free of charge" ([Art. 3 consolidated](https://artificialintelligenceact.eu/article/3/)).
- **Deployer** — Art. 3(4): a person/entity "using an AI system **under its authority**", except purely personal non-professional use (same source).

Three consequences practitioners miss:

1. **The trademark test does most of the work.** Whoever's name/brand the system is placed on the market or put into service under is presumptively the provider — even if they wrote zero code ("has … developed").
2. **You can be both** provider and deployer of the same system (build it under your brand, also use it yourself).
3. **Role shifting is codified for high-risk** (Art. 25(1): re-branding, substantial modification, or purpose-change of a high-risk system makes you the provider — [Art. 25 consolidated](https://artificialintelligenceact.eu/article/25/)). Art. 25 formally targets high-risk systems, but it tells you exactly how regulators think about re-branding and modification generally; for Art. 50-tier systems the Art. 3(3) own-name test reaches the same result for white-labels.

**Which Art. 50 duty attaches to which role** ([Art. 50 consolidated](https://artificialintelligenceact.eu/article/50/)):

| Duty | Role | Content |
|---|---|---|
| Art. 50(1) | **Provider** | Design/develop interactive systems so natural persons are informed they're interacting with AI (unless obvious to a reasonably well-informed, observant, circumspect person in context; narrow law-enforcement carve-out) |
| Art. 50(2) | **Provider** | Machine-readable marking of synthetic audio/image/video/text output; effective, interoperable, robust, reliable so far as technically feasible. Timing: 2 Aug 2026 for systems placed on the market from that date; 2 Dec 2026 outer deadline for systems already on the market before it ([Council, 29 Jun 2026](https://www.consilium.europa.eu/en/press/press-releases/2026/06/29/artificial-intelligence-council-gives-final-green-light-to-simplify-and-streamline-rules/)) |
| Art. 50(3) | **Deployer** | Inform natural persons exposed to emotion-recognition or biometric-categorisation systems (plus GDPR duties) |
| Art. 50(4) | **Deployer** | Disclose deepfakes (visible disclosure that content is artificially generated/manipulated); disclose AI-generated/manipulated text published to inform the public on matters of public interest (exemption where human editorial review + a person holds editorial responsibility) |
| Art. 50(5) | Both | Deliver the above clearly and distinguishably, at the latest at first interaction/exposure; meet accessibility requirements |

"Deepfake" — Art. 3(60): "AI-generated or manipulated image, audio or video content that resembles existing persons, objects, places, entities or events and would falsely appear to a person to be authentic or truthful" ([Art. 3](https://artificialintelligenceact.eu/article/3/)). Photorealistic synthetic media of real-seeming people/places/events is in; obviously stylised illustration generally is not — borderline cases go to counsel.

---

## 2. The question tree

Work top to bottom per deployment. Record answers in the worksheet (§6) and transfer the resulting duty set to the register (`04`).

```
Q0. EU NEXUS — Is the system placed on the EU market, put into service in
    the EU, used by a deployer located in the EU, OR is its OUTPUT used in
    the EU? (Art. 2(1)(a)–(c))
      NO  → Outside AI Act scope for this deployment. Log the reasoning +
            date in the register anyway (scope can change when the client
            starts selling into the EU). STOP.
      YES → Q1.

Q1. BRAND — Is the system placed on the market / put into service under
    YOUR name or trademark (your product page, your logo in the UI, your
    MSA sells "our receptionist")?
      YES → You are a PROVIDER of this system (Art. 3(3)).
            Duties: 50(1) design duty if it interacts with people;
            50(2) marking if it generates synthetic content. → Q4 too
            (you may ALSO be a deployer).
      NO  → Q2.

Q2. BUILD-FOR-CLIENT — Did you develop (or substantially configure) the
    system, which the CLIENT puts into service under the CLIENT's name?
      YES → CLIENT is presumptively the provider ("has … developed", Art.
            3(3)) AND usually also the deployer. YOU are a development
            contractor: no direct Art. 50 role duties on you for this
            system, but (a) your contract almost certainly makes 50(1)
            disclosure design YOUR deliverable, and (b) the client will
            look to you when their counsel asks for evidence. Install the
            controls, hand over the register. → Q4 for the client's row.
      NO  → Q3.

Q3. MODIFICATION — Did you take an existing third-party system and
    (a) re-brand it, (b) substantially modify it, or (c) change its
    intended purpose, and then market/put it into service?
      (a) re-brand under your name → back to Q1: PROVIDER.
      (b)/(c) → treat as PROVIDER for planning purposes (Art. 25 logic;
            for fine-tunes of GPAI models see the counsel flag in §4,
            Example 3). Grey zone — counsel confirms final position.
      NONE → you neither branded nor modified: you (or your client) are
            using someone else's system as-is → Q4.

Q4. USE — Is the system USED under your authority in your business (you
    operate it, your staff drive it, your workflows consume it) — or under
    the client's authority?
      YOUR authority   → YOU are a DEPLOYER (Art. 3(4)).
      CLIENT authority → CLIENT is the DEPLOYER; you install their
                         controls as contractor.
      → Q5 for which deployer duties.

Q5. DEPLOYER DUTY SELECTOR — for whoever is the deployer:
      a) Does it interact with natural persons (chat, voice, avatar)?
         → ensure the 50(1) disclosure the provider designed is actually
           ON and visible in this deployment (and that you haven't
           suppressed it in custom UI). Placement: Art. 50(5), file 03 §C.
      b) Does it run emotion recognition or biometric categorisation
         (sentiment scoring of callers, face-based profiling)?
         → Art. 50(3) notice to exposed persons + GDPR review. Counsel
           flag: several of these uses skirt Art. 5 prohibitions.
      c) Does it generate/manipulate image, audio or video resembling
         real persons/objects/places/events (Art. 3(60) deepfake)?
         → Art. 50(4) visible disclosure. Copy blocks: file 03 §B.
      d) Does it generate/manipulate TEXT published to inform the public
         on matters of public interest (news-adjacent client blogs,
         civic info)?
         → Art. 50(4) text disclosure — unless human editorial review AND
           a person/entity holds editorial responsibility (then exempt;
           document WHO holds it, in the register).
      e) None of the above → no Art. 50 deployer duty today; log the
         classification + revisit date (quarterly) in the register.

Q6. HIGH-RISK RADAR (not this pack's core scope) — Does the deployment
    touch Annex III areas (hiring/HR screening, credit, education,
    essential services, law enforcement…)?
      YES → duties arrive 2 Dec 2027 (standalone) / 2 Aug 2028 (embedded)
            per the Omnibus (01 §1). Put it on the register with a
            "high-risk prep" flag and a 2027 review date. Do NOT sell
            this as urgent-for-August; DO sell it as a 2027 roadmap item.
```

---

## 3. The extraterritorial note (why "we're UK/US" doesn't exit you)

Art. 2(1) applies the Act to: (a) providers placing systems on the EU market or into service in the EU **irrespective of where the provider is established**; (b) deployers established or located in the EU; and (c) **providers and deployers established or located in a third country "where the output produced by the AI system is used in the Union"** ([Art. 2 consolidated](https://artificialintelligenceact.eu/article/2/)).

Practical readings for an agency:

- A **UK agency** running a chatbot for a German client's German-language site: in scope (client is an EU deployer; output used in the EU).
- A **US SaaS** the agency resells to EU customers under the agency's brand: agency is a provider placing on the EU market — in scope.
- A UK agency generating ad creative in London that a client publishes to EU audiences: output used in the Union — in scope under Art. 2(1)(c).
- Third-country providers may also need an **authorised representative** in the EU in some configurations (Art. 22 — high-risk-focused; counsel question if you're a provider at scale).

Rule of thumb to give clients: **follow the output, not the server location.**

---

## 4. Worked examples (the five deployments every agency actually has)

### Example 1 — Support chatbot on the OpenAI API, deployed in the client's tenant, client's brand

**Facts:** You built a GPT-4o-based support bot orchestrated in n8n, running in the client's cloud, styled as "Acme Assistant" on acme.de.
**Classification:** Client = **provider** (had it developed; puts it into service under its own name — Art. 3(3)) and **deployer** (uses it under its authority). OpenAI = provider of the underlying GPAI model (its own duty set, not yours). You = development contractor.
**Art. 50 duty set (client's, delivered by you):** 50(1) disclosure designed into the UI (banner + first message, file 03 §A); 50(5) placement at first interaction; if the bot's answers are published as public-interest info, 50(4) text analysis. No 50(2) for the client in practice where outputs aren't published synthetic media.
**Your moves:** install copy blocks; screenshot; register rows under the client's name; make your SOW say "Art. 50(1) disclosure UI implemented per client instruction" — you want contractor posture on paper.

### Example 2 — White-labelled AI receptionist sold as YOUR product

**Facts:** You resell a third-party voice-agent platform as "YourAgency Receptionist" at £299/mo; clients' callers speak to it.
**Classification:** You = **provider** (placed on the market under your own trademark — Art. 3(3); Art. 25 logic corroborates). Each client = **deployer**.
**Art. 50 duty set:** *Yours as provider:* 50(1) — the spoken "I'm an AI assistant" line must be designed in and non-removable by config; 50(2) — the receptionist **generates synthetic audio**, so machine-readable marking of that audio is your problem (timing per `01`; if your product was on the market before 2 Aug 2026, outer deadline 2 Dec 2026 — work `05` now; if you launch it on/after 2 Aug 2026, the duty applies from day one). *Client's as deployer:* keep the disclosure on; 50(3) if you enable caller-sentiment scoring (many voice platforms ship it — check the toggle); 50(4) if the voice mimics a real person (voice-clone of the client's owner = deepfake territory: visible/audible disclosure + consent paperwork).
**Your moves:** upstream vendor due diligence (are *they* CoP signatories? file 05 tracker); contract flow-down; spoken-line block from 03 §A hard-coded.

### Example 3 — Fine-tuned model resold as your SaaS

**Facts:** You fine-tuned an open-weights model on industry FAQs and sell "LettingsBrain" subscriptions under your brand.
**Classification:** You = **provider** of the AI system (developed + placed on market under your name). **Counsel flag:** a sufficiently significant modification of a general-purpose model can also make you a **GPAI model provider** with Art. 53+ duties (Commission guidance direction-of-travel; the threshold analysis is genuinely legal work — budget a counsel hour before your next enterprise deal).
**Art. 50 duty set:** 50(1) design duty for the chat surface; 50(2) marking for any synthetic output your system emits (text marking is the hard one — see `05` §5 and the CoP); plus ordinary provider hygiene (instructions for use that tell YOUR customers, the deployers, what disclosure they must keep on).
**Your moves:** ship a "deployer obligations" page in your product docs — it is both compliance flow-down and a sales asset.

### Example 4 — Internal-only tool in a client org (no public exposure)

**Facts:** HR-adjacent internal assistant answering policy questions for a client's employees on the client's intranet.
**Classification:** Client = provider-and-deployer (put into service under its own name for own use) or pure deployer of a vendor tool; you = contractor.
**Art. 50 duty set:** Employees are natural persons — **50(1) disclosure still applies** to interactive use; do not rely on "everyone knows it's a bot" (that's the narrow obviousness exemption, `01` §4 claim 5). If it only ever drafts internal documents no one publishes, 50(4) is dormant; the moment outputs are published externally, re-run the tree.
**High-risk radar:** anything that scores, ranks, or filters **employees or candidates** is Annex III territory — duties land 2 Dec 2027 (`01` §1). Register it with a 2027 flag now; that's your future engagement.
**Your moves:** first-message notice (03 §A internal variant); register row noting the intranet-only scope assumption and its revisit date.

### Example 5 — AI content pipeline producing client marketing assets

**Facts:** You generate ad images (GPT-image, Firefly), avatar videos, and blog drafts for an EU-market client; the client publishes them.
**Classification:** You = **deployer of the generation tools** (you use them under your authority, in the course of business — Art. 3(4)); client = deployer/publisher of the content; OpenAI/Adobe = providers (their 50(2) marking — verify it survives your pipeline, file `05`).
**Art. 50 duty set:** 50(4) **visible disclosure for deepfake-class assets** — photorealistic humans, real-looking places/events (Art. 3(60)); labels from 03 §B travel WITH the asset into the client's CMS/socials. Stylised illustration: generally out; log the judgment. Blog text: 50(4) public-interest test — ordinary product marketing usually isn't "informing the public on matters of public interest," and human editorial review + named editorial responsibility exempts most client blogs anyway; **document the editorial-responsibility holder per client** in the register. 50(2) is the upstream providers' duty — but *your* evidence that their marks survived (or that you re-stamped) is what protects the client — `05` strip tests.
**Your moves:** per-asset labelling SOP; C2PA verify step in the delivery workflow; contract clause allocating who applies/keeps labels after handover.

---

## 5. Contractor posture (the clause-level takeaway)

Nothing in Art. 50 names "agencies." You acquire duties by *brand* (provider) or *authority over use* (deployer). So:

- **Sell under the client's brand, run under the client's authority** → duties sit with the client; you deliver controls + evidence. Paper it: "Client is provider/deployer of record; Agency implements disclosure controls per this SOW."
- **Sell under your brand or operate it yourself** → duties are yours; price them in.
- Either way, the party your client's lawyer emails first is you. The register (`04`) is how that email becomes a 10-minute reply instead of a crisis.

## 6. Per-deployment worksheet (copy per system)

| Field | Entry |
|---|---|
| Client / system | |
| EU nexus (Q0 answer + basis: market / deployer located / output used) | |
| Brand on the system (Q1) | |
| Built-for-client? (Q2) | |
| Modified/re-branded upstream system? (Q3) | |
| Used under whose authority? (Q4) | |
| Role result: provider / deployer / both / contractor | |
| Duties triggered: 50(1) / 50(2) / 50(3) / 50(4) (+ which limb) | |
| High-risk radar flag (Q6) + 2027 review date | |
| Grey zones sent to counsel (date sent) | |
| Register rows created (IDs) | |

---

*Next file:* `03-disclosure-copy-blocks.md` — the actual words to install, in four languages.
