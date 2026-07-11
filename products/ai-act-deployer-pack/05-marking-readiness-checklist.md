# 05 — Machine-Readable Marking Readiness (Art. 50(2), the 2 Dec 2026 Milestone)

> **AI Act Deployer Pack v1.0 — facts verified 11 July 2026.** Engineering documentation, not legal advice (`00-START-HERE.md` §Disclaimer). Vendor capabilities in §4 change frequently — verify at source before relying on any cell marked *verify*.

## 1. Scope: who owes this, and when

**The duty (Art. 50(2))**: providers of AI systems generating synthetic audio, image, video or text must ensure outputs are **marked in a machine-readable format and detectable as artificially generated or manipulated**, with solutions "effective, interoperable, robust and reliable as far as this is technically feasible" ([Art. 50 consolidated](https://artificialintelligenceact.eu/article/50/)).

**The clock (two tracks, post-Omnibus):**

| Your situation | Deadline |
|---|---|
| Generative system placed on the market **on or after 2 Aug 2026** | Marking duty applies from placing on the market (2 Aug 2026 baseline) |
| Generative system **already on the market before 2 Aug 2026** | Omnibus grace: comply by **2 December 2026** ([Council, 29 Jun 2026](https://www.consilium.europa.eu/en/press/press-releases/2026/06/29/artificial-intelligence-council-gives-final-green-light-to-simplify-and-streamline-rules/); scope detail [Sidley, 22 Jun 2026](https://datamatters.sidley.com/2026/06/22/eu-lawmakers-reach-provisional-agreement-to-delay-key-eu-ai-act-obligations/)) |

**Who in your book of business owes it:**

- **You**, wherever the `02` tree made you a **provider** (white-labelled receptionist, resold fine-tune, your own SaaS). This checklist is then *your* to-do list.
- **Your upstream vendors** (OpenAI, Google, Adobe, ElevenLabs, voice platforms), where you or your clients are deployers. You don't owe 50(2) there — but your client's *visible* labels (Art. 50(4), file `03`) and their evidence posture get dramatically stronger when the machine-readable layer actually survives to the published asset. Hence: verify, don't assume.

**The compliance on-ramp:** the Commission's **Code of Practice on the marking and labelling of AI-generated content** (published **10 June 2026**, drawn up under Art. 50(7)) is the voluntary vehicle: providers signing **by 22 July 2026** get a **presumption of conformity**; non-signatories can still comply with their own documented technical evidence ([Commission CoP page](https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content)). If you are a provider and the window is still open when you read this: signing is the cheapest conformity story you will ever buy. After 22 July: your evidence file (this checklist, executed) *is* the story.

**The tech landscape in one paragraph:** two complementary layers exist. **C2PA Content Credentials** — signed provenance metadata attached to the file ([spec](https://c2pa.org/specifications/specifications/); verify at [contentcredentials.org/verify](https://contentcredentials.org/verify)) — is auditable and standard, but dies when metadata is stripped. **Invisible watermarks** — Google **SynthID** ([DeepMind](https://deepmind.google/technologies/synthid/)), Meta's open-source **Seal family** (§5) — live in the pixels/samples and survive stripping better, but third-party *detection* access is limited. Robust posture = metadata + watermark + your own logs. OpenAI ships **C2PA manifests on generated images, plus SynthID watermarking on API images since May 2026** ([OpenAI help article](https://help.openai.com/en/articles/8912793-c2pa-and-synthid-in-openai-generated-images); [OpenAI provenance post](https://openai.com/index/advancing-content-provenance/)).

---

## 2. Step 1 — Map every generative output path

You cannot mark (or verify marks on) paths you haven't listed. Per client, per system:

| Field | Example |
|---|---|
| Path ID | NW-IMG-01 |
| Client / system | Nordwind SL / ad-creative pipeline |
| Modality | image (also: audio / video / text) |
| Generator + endpoint | OpenAI GPT-image via API |
| Transformations between generation and publication | resize (Sharp), crop (Canva), CDN (Cloudinary), scheduler (Buffer) |
| Publication surfaces | Instagram, client CMS, email (ESP) |
| Provider-of-record for 50(2) on this path | OpenAI (upstream) — agency has no provider role |
| Mark expected at source | C2PA manifest + SynthID (per OpenAI docs above) |
| Survival verified? | pending — battery in §3 |

Do this in an hour with the delivery team; the transformation column is where compliance dies, so be honest about every screenshot-into-Slack step that really happens.

---

## 3. Step 2 — The strip-test battery (does the mark survive YOUR pipeline?)

Provider marks are applied at generation. Real pipelines then rasterise, transcode, and strip. Independent practitioner testing has repeatedly shown C2PA metadata being removed at common distribution steps (screenshots, social re-encodes) — e.g. [C2PA Viewer's verification write-up](https://c2paviewer.com/articles/verify-ai-generated-image-c2pa-synthid). Run this battery **once per output path**, file results in the tracker (§6), re-run when any pipeline tool changes.

**Tooling:** [`c2patool`](https://github.com/contentauth/c2patool) (open-source CLI, Content Authenticity Initiative), `exiftool`, `ffmpeg`, and the web verifier [contentcredentials.org/verify](https://contentcredentials.org/verify).

```bash
# T0 — Baseline: does the mark exist at source?
c2patool asset-original.png                 # expect: manifest report
exiftool -a -G1 asset-original.png | grep -iE "jumbf|c2pa|xmp"

# T1 — Screenshot test (manual): screenshot the asset as displayed,
# then inspect the screenshot file:
c2patool screenshot.png                     # expected result: NO manifest (C2PA lost)
# → pixel-level watermarks (SynthID/Seal) are the only survivors here.

# T2 — Transcode test (video/audio):
ffmpeg -i asset-original.mp4 -c:v libx264 -crf 23 asset-transcoded.mp4
c2patool asset-transcoded.mp4               # typically: manifest gone unless explicitly preserved

# T3 — Resize/optimize test (your actual image step, e.g. Sharp/ImageMagick):
convert asset-original.png -resize 1080x1080 asset-resized.png
c2patool asset-resized.png

# T4 — CDN/social strip test (manual): upload to each real surface
# (Instagram, LinkedIn, X, WhatsApp), redownload the served file, verify:
c2patool served-download.jpg
# Expect metadata stripped on most social surfaces as of mid-2026 — that is
# the finding to document, not a failure of your process.
```

**SynthID caveat:** SynthID is detectable by Google's detection tooling, and general third-party detector access remains gated ([DeepMind SynthID page](https://deepmind.google/technologies/synthid/)). Treat SynthID as *present-but-not-independently-verifiable* at agency level: record "per provider documentation" in the tracker rather than claiming you verified the watermark itself. Your independent, verifiable layers are C2PA (when it survives), your own re-stamp (§5), and your logs (`06`).

**Decision rules after the battery:**

- Mark survives to publication → record evidence, done.
- Mark dies in-pipeline **and you are a deployer**: your Art. 50(4) *visible* label (file `03` §B) is unaffected and remains mandatory where triggered; additionally either (a) adjust the pipeline to preserve metadata (many tools have keep-metadata flags; Cloudinary/Sharp strip by default), or (b) re-stamp at final render (§5) so the machine-readable layer reaches the audience. (b) is belt-and-braces for the client's evidence file, not your legal duty — say so in the register note.
- Mark dies **and you are the provider** (white-label/SaaS): you own 50(2). Fix = re-stamp at your final output stage + document robustness "as far as technically feasible" — that phrase in Art. 50(2) is your engineering standard; your test logs are the proof you met it.

---

## 4. Step 3 — Upstream mark inventory (what your vendors actually emit)

Statuses below are as documented at the linked sources on 11 July 2026; **treat every cell as *verify at source* before citing to a client** — this table moves monthly, and updates ship via the pack's update channel.

| Vendor / tool | Modality | Documented marking | Source | Notes for your tracker |
|---|---|---|---|---|
| OpenAI (GPT-image / DALL·E via API & ChatGPT) | image | C2PA manifest; **SynthID watermark on API images since May 2026** | [OpenAI help](https://help.openai.com/en/articles/8912793-c2pa-and-synthid-in-openai-generated-images); [provenance post](https://openai.com/index/advancing-content-provenance/) | C2PA verifiable with c2patool; SynthID per-docs only |
| Google (Gemini / Imagen / Veo) | image, video, audio | SynthID watermarking across generative outputs | [DeepMind SynthID](https://deepmind.google/technologies/synthid/) | Detection access gated; log "per provider documentation" |
| Adobe Firefly / Photoshop genAI | image | Content Credentials (C2PA) attached to generated/edited outputs | [Adobe Content Credentials](https://helpx.adobe.com/creative-cloud/help/content-credentials.html) | Export settings matter — verify credentials survive your export preset |
| Meta AI outputs | image | invisible watermark + labels (platform-side) | [Meta Seal family repos, §5] | Platform labels ≠ your compliance (03 §D) |
| ElevenLabs / voice platforms | audio | *verify* — per-vendor; ask for their Art. 50(2)/CoP statement | vendor docs | Critical if you white-label voice (you may be provider) |
| Midjourney, open-weights image models (Flux, SD) | image | *verify* — historically inconsistent/no default C2PA | vendor docs | If you productise these, assume YOU must add the mark (§5) |
| LLM text output (all vendors) | text | No robust cross-vendor text watermark deployed at scale | [CoP page](https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content) | Text marking = the CoP's hardest chapter; for providers: metadata/statistical approaches + documentation; for deployers: the 50(4) text limb + editorial-exemption logging (`03` §B4) |

## 5. Step 4 — Re-stamping options (when you must apply the mark yourself)

Apply at the **last render step you control**, then re-run §3 on the stamped file.

1. **C2PA with your own signing cert — [`c2patool`](https://github.com/contentauth/c2patool) / [c2pa-rs libraries](https://github.com/contentauth/c2pa-rs)** (open source, Content Authenticity Initiative):
   ```bash
   # manifest.json: declare the asset AI-generated + your entity as signer
   c2patool asset-final.jpg -m manifest.json -o asset-signed.jpg
   c2patool asset-signed.jpg   # verify before shipping
   ```
   Use a real signing certificate for production (the tool's test certs are for development). Manifest should assert the C2PA "trainedAlgorithmicMedia" digital-source-type so the file is machine-readably *AI-generated*, which is exactly the Art. 50(2) property.
2. **Meta Seal family (open source, invisible watermarks)** — survives metadata stripping; no licence fee:
   - Images: [Watermark Anything](https://github.com/facebookresearch/watermark-anything)
   - Audio: [AudioSeal](https://github.com/facebookresearch/audioseal) — the practical choice for white-label voice-agent recordings
   - Video: [Video Seal](https://github.com/facebookresearch/videoseal)
   Python pipelines; embed+detect locally, so unlike SynthID you can *prove* detection in your own evidence file. Keep model/version pinned and logged — robustness claims need reproducibility.
3. **Commercial provenance suites** (Truepic, Digimarc, and DAM-integrated stamping) — when a client wants SLAs and a vendor to blame. Fine; keep the §3 battery as acceptance testing.
4. **Never do only this:** a visible "AI-generated" caption is Art. 50(4) territory and does **not** satisfy Art. 50(2)'s machine-readable requirement — the two layers are cumulative for providers ([Art. 50](https://artificialintelligenceact.eu/article/50/)).

---

## 6. The tracker (Code of Practice + survival evidence, one table per client)

Maintain next to the register; this is the file counsel actually forwards to the client's enterprise customers.

| Path ID | Upstream provider | CoP signatory? (check [current list](https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content)) | Mark at source | T1 screenshot | T2 transcode | T3 resize | T4 social/CDN | Re-stamp applied? | Evidence link | Last run | Next run |
|---|---|---|---|---|---|---|---|---|---|---|---|
| NW-IMG-01 | OpenAI | *check list* | C2PA ✓ (verified) + SynthID (per docs) | ✗ lost | n/a | ✓ survived with keep-metadata flag | ✗ stripped by IG | c2patool re-stamp at final render | drive://nordwind/evidence/NW-IMG-01.md | 2026-07-25 | 2026-10-25 |
| BL-VOX-01 | VendorX (white-label — **we are provider**) | *ask vendor / we sign own evidence* | none documented | — | ✗ | — | — | AudioSeal embed at export ✓ | drive://brightlettings/evidence/BL-VOX-01.md | 2026-07-24 | 2026-09-01 |

**Why the signatory column matters:** signatories carry a presumption of conformity for the marking duty; if your upstream is a signatory, your due-diligence note is one line + a link. If not, you record what they emit and what you added. Either way the column shows you *checked* — which is the difference between a questionnaire answer and a shrug. ([Commission CoP page](https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content).)

## 7. The 2 Dec 2026 countdown checklist

- [ ] All generative output paths mapped (§2) — including "unofficial" ones (that Canva step)
- [ ] Strip-test battery run and filed per path (§3)
- [ ] Upstream inventory + CoP signatory status logged per vendor (§4, §6)
- [ ] Every path where **you are provider**: marking live (native or re-stamped) + robustness evidence
- [ ] Deployer-side visible labels (file `03`) confirmed independent of the machine-readable layer
- [ ] Register rows (`04`) created for every line above
- [ ] Re-test scheduled after any pipeline/tool change + quarterly
- [ ] **Sell it:** this exact checklist, executed for a client, is the "Marking Readiness" upsell in `07` §7 — the natural second invoice between now and December.

*Next file:* `06-logging-oversight-blueprints.md` — automate the evidence.
