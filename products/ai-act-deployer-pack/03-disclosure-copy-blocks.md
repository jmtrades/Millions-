# 03 — Disclosure Copy Blocks (EN · DE · FR · ES)

> **AI Act Deployer Pack v1.0 — facts verified 11 July 2026.** Engineering documentation, not legal advice (`00-START-HERE.md` §Disclaimer). These are professionally written **UI strings, not legal texts**: they are built to satisfy the operational requirements of Art. 50 ([consolidated text](https://artificialintelligenceact.eu/article/50/)) in plain language. Final wording sign-off for each market is the client's counsel's job — that review takes minutes when you hand them this file with citations attached.

**How to use:** pick the block, replace `[Business]`/`[Name]` placeholders, install per the placement rules in §C, screenshot, log it in the register (`04`). Language notes: "AI" localises as **KI** (German), **IA** (French, Spanish). DE/FR/ES strings use the formal register (Sie/vous/usted) — correct default for business UI; switch to informal (du/tu/tú) only if the client's brand voice already does.

---

## A. "You are interacting with AI" — chatbots, assistants, voice agents

**Legal basis:** Art. 50(1) (provider design duty: natural persons must be informed they are interacting with an AI system, unless obvious in context) + Art. 50(5) (clear, distinguishable, at the latest at first interaction). Deployers must keep these notices on; see `02` Q5(a).

### A1. Short UI string (chat widget header/badge + first bot message)

Use BOTH the persistent badge and the first-message line; the pair comfortably clears "clear and distinguishable … at first interaction."

```text
EN badge:  AI assistant
EN first:  You're chatting with an AI assistant. A human can take over at any time — just ask.

DE badge:  KI-Assistent
DE first:  Sie chatten mit einem KI-Assistenten. Auf Wunsch übernimmt jederzeit ein Mensch – fragen Sie einfach danach.

FR badge:  Assistant IA
FR first:  Vous discutez avec un assistant IA. Un conseiller humain peut prendre le relais à tout moment — il suffit de le demander.

ES badge:  Asistente de IA
ES first:  Está chateando con un asistente de IA. Una persona puede atenderle en cualquier momento; solo tiene que pedirlo.
```

*No-handoff variant (drop the second sentence if there is genuinely no human channel — do not promise one that doesn't exist):*

```text
EN: You're chatting with an AI assistant.
DE: Sie chatten mit einem KI-Assistenten.
FR: Vous discutez avec un assistant IA.
ES: Está chateando con un asistente de IA.
```

### A2. Expanded modal / info-page text (linked from the badge: "What does this mean?")

```text
EN: This chat is powered by artificial intelligence — you are not talking to a human.
    The assistant can make mistakes, so please verify important information before
    acting on it. Your messages are processed to provide this service; see our
    privacy notice for details. To speak to a person, type "human" or use the
    contact options below.

DE: Dieser Chat wird durch künstliche Intelligenz betrieben – Sie sprechen nicht
    mit einem Menschen. Der Assistent kann Fehler machen; bitte prüfen Sie wichtige
    Informationen, bevor Sie danach handeln. Ihre Nachrichten werden zur
    Bereitstellung dieses Dienstes verarbeitet; Einzelheiten finden Sie in unserer
    Datenschutzerklärung. Um mit einer Person zu sprechen, geben Sie „Mitarbeiter"
    ein oder nutzen Sie die Kontaktmöglichkeiten unten.

FR: Cette conversation est assurée par une intelligence artificielle — vous ne
    parlez pas à un être humain. L'assistant peut se tromper : vérifiez toute
    information importante avant d'agir. Vos messages sont traités pour fournir ce
    service ; consultez notre politique de confidentialité pour en savoir plus.
    Pour parler à une personne, écrivez « conseiller » ou utilisez les options de
    contact ci-dessous.

ES: Esta conversación está gestionada por inteligencia artificial: no está hablando
    con una persona. El asistente puede cometer errores; verifique la información
    importante antes de actuar. Sus mensajes se procesan para prestar este
    servicio; consulte nuestra política de privacidad para más detalles. Para
    hablar con una persona, escriba «agente» o utilice las opciones de contacto.
```

### A3. Voice agent — spoken opening line (inbound calls / outbound calls)

Disclose **in the greeting, before any substantive exchange** (Art. 50(5): at the latest at first interaction — for voice, that means the first utterance).

```text
EN in:  Hi, you've reached [Business]. I'm the practice's AI assistant — an
        automated system, not a person. How can I help you today?
EN out: Hello, this is the AI assistant calling on behalf of [Business] — I'm an
        automated system, not a person. Is now a good time?

DE in:  Guten Tag, hier ist [Business]. Ich bin der KI-Assistent des Unternehmens –
        ein automatisches System, kein Mensch. Wie kann ich Ihnen helfen?
DE out: Guten Tag, hier spricht der KI-Assistent von [Business] – ein automatisches
        System, kein Mensch. Passt es Ihnen gerade?

FR in:  Bonjour, vous êtes bien chez [Business]. Je suis l'assistant IA de
        l'entreprise — un système automatisé, pas une personne. Comment puis-je
        vous aider ?
FR out: Bonjour, je suis l'assistant IA qui vous appelle de la part de [Business] —
        un système automatisé, pas une personne. Avez-vous un instant ?

ES in:  Hola, ha llamado a [Business]. Soy el asistente de IA de la empresa, un
        sistema automatizado, no una persona. ¿En qué puedo ayudarle?
ES out: Hola, le llama el asistente de IA de [Business], un sistema automatizado,
        no una persona. ¿Le viene bien hablar ahora?
```

*Handoff hygiene:* when the bot hands to a human, no disclosure needed; when a human hands **back** to the bot, re-disclose ("I'm transferring you back to our AI assistant…"). If the platform scores caller sentiment/emotion, that is an **Art. 50(3)** event — add: EN "This call may be analysed automatically to improve service." (DE: „Dieses Gespräch kann zur Serviceverbesserung automatisch ausgewertet werden."; FR: « Cet appel peut faire l'objet d'une analyse automatisée afin d'améliorer notre service. »; ES: «Esta llamada puede analizarse automáticamente para mejorar el servicio.») — and send the configuration to counsel (borderline Art. 5/GDPR terrain; `02` Q5(b)).

---

## B. Synthetic-media visible labels (deployer duty)

**Legal basis:** Art. 50(4) — deployers of systems generating/manipulating **deepfake** image/audio/video (Art. 3(60) definition — [Art. 3](https://artificialintelligenceact.eu/article/3/)) must disclose that the content is artificially generated or manipulated; plus the public-interest text limb. Visible labels here; the *machine-readable* layer is the provider's Art. 50(2) duty (`05`).

### B1. Image — caption / adjacent text

```text
EN: AI-generated image          | manipulated: Image edited with AI
DE: KI-generiertes Bild         | manipulated: Mit KI bearbeitetes Bild
FR: Image générée par IA        | manipulated: Image retouchée par IA
ES: Imagen generada por IA      | manipulated: Imagen editada con IA
```

Full-sentence variant (long captions, alt-adjacent credit lines):

```text
EN: This image was created with artificial intelligence.
DE: Dieses Bild wurde mit künstlicher Intelligenz erstellt.
FR: Cette image a été créée avec une intelligence artificielle.
ES: Esta imagen se ha creado con inteligencia artificial.
```

### B2. Video — on-screen line + description text

On-screen (persistent corner badge or opening card ≥3 seconds; badge preferred for deepfake-class content):

```text
EN: AI-generated content
DE: KI-generierte Inhalte
FR: Contenu généré par IA
ES: Contenido generado por IA
```

Opening card / description:

```text
EN: This video contains AI-generated content.
DE: Dieses Video enthält KI-generierte Inhalte.
FR: Cette vidéo contient du contenu généré par IA.
ES: Este vídeo contiene contenido generado por IA.
```

Authorised-likeness (avatar/voice-clone of a real person — always pair with written consent):

```text
EN: This video features an AI-generated likeness of [Name], created with their consent.
DE: Dieses Video zeigt ein KI-generiertes Abbild von [Name], erstellt mit deren Einwilligung.
FR: Cette vidéo présente une image de [Name] générée par IA, créée avec son consentement.
ES: Este vídeo muestra una imagen de [Name] generada por IA, creada con su consentimiento.
```

### B3. Audio — spoken and/or shown disclosure

Spoken at the start (podcasts, IVR messages, ads) and repeated in show notes/description:

```text
EN: This recording was generated by artificial intelligence.
DE: Diese Aufnahme wurde durch künstliche Intelligenz erzeugt.
FR: Cet enregistrement a été généré par une intelligence artificielle.
ES: Esta grabación ha sido generada por inteligencia artificial.
```

### B4. Public-interest text (Art. 50(4), second limb)

Only triggered when AI text is **published to inform the public on matters of public interest**; exempt where a human editorial process reviews it and a person/entity holds editorial responsibility (document who, in the register — `02` Example 5).

```text
EN disclosed:  This article was produced using artificial intelligence.
EN exempt-style credit (optional good practice when exemption applies):
               Produced with AI assistance; reviewed by our editorial team, which
               takes responsibility for its content.

DE: Dieser Artikel wurde mithilfe künstlicher Intelligenz erstellt.
FR: Cet article a été produit à l'aide d'une intelligence artificielle.
ES: Este artículo se ha elaborado con ayuda de inteligencia artificial.
```

---

## C. Placement rules (what "compliant installation" means)

All from **Art. 50(5)** ([consolidated](https://artificialintelligenceact.eu/article/50/)): information must be provided **in a clear and distinguishable manner, at the latest at the time of first interaction or exposure**, and conform with applicable accessibility requirements.

1. **First interaction, not first scroll.** Chat: badge visible before the user types + notice in the first bot message. Voice: in the greeting. Video: at playback start (card) or persistently (badge) — not only in a description below the fold. Images: caption/credit adjacent to the asset wherever it is displayed, not solely on a media-library page nobody visits.
2. **Clear and distinguishable ≠ terms-and-conditions.** A line buried in a privacy policy or ToS does not meet "clear and distinguishable at first interaction." Keep the notice in the interface itself.
3. **Accessibility.** Don't rely on colour or icon alone: text label + `aria-label` on badges (e.g. `aria-label="AI assistant — automated system"`); spoken disclosure for audio-only channels; contrast-compliant overlay text on video. This is written into Art. 50(5)'s accessibility hook — and it's also just good engineering.
4. **Language of the audience.** Serve the disclosure in the language(s) of the interface/market. The four languages here cover most EU-facing agency work; for other locales, translate from the EN master and route through the client's counsel/reviewer like any other string.
5. **Survives the pipeline.** For synthetic media, the label must travel with the asset into the CMS, the social crop, the email template. Make the label part of the deliverable file/render, not a note in the handover email. (Machine-readable survivability is `05`'s job.)
6. **Evidence or it didn't happen.** Screenshot/screen-record each installed notice, note locale + version (e.g. `v1.0-DE-modal`), log to the register (`04`). The logging blueprint (`06`) automates the ongoing proof.

---

## D. Edge cases (know the shape, then call counsel)

- **"It's obviously AI" (Art. 50(1) exemption).** Exists, but is judged from a "reasonably well-informed, observant and circumspect" person **in context**. A voice agent that books appointments flawlessly is not obviously AI to a stressed caller. The notice costs one line; the argument costs a regulator meeting. Default: disclose.
- **Art / satire / parody / fiction (Art. 50(4), third subparagraph).** For evidently artistic, creative, satirical, fictional or analogous works, the deepfake disclosure duty is **not waived — it is softened**: disclose "in an appropriate manner that does not hamper the display or enjoyment of the work" (e.g. end credits, bio line, pinned note rather than a watermark across the art). What counts as "evidently" artistic for a brand's comedic deepfake ad is a genuine judgment call → **counsel flag before publication**, and log the decision + rationale in the register.
- **Law-enforcement carve-outs** (Art. 50(1)/(2)/(4)) exist for legally authorised crime detection/prevention. If a client claims one, that conversation is entirely counsel's.
- **Emotion recognition / biometric categorisation (Art. 50(3)).** Disclosure is the floor, not the ceiling: workplace/education emotion recognition runs into the Art. 5 prohibitions, and biometric data triggers GDPR Art. 9. Any client feature in this zone → counsel before launch, not after.
- **Mixed content.** Human-shot video with AI-inserted elements = "manipulated" — label it (B1/B2 "edited with AI" variants). Minor AI cleanup (denoise, colour) vs content manipulation is a spectrum; set a house rule (we label anything that changes what appears to have happened), write it down, apply it consistently.
- **Someone else's platform label (TikTok/Meta/YouTube auto-labels).** Platform auto-labelling is helpful but it is the platform's feature, not your compliance: it can be wrong, absent on the embed, or silently changed. Keep your own label on the asset and your own register row.

---

*Next file:* `04-compliance-register.md` — where every notice you just installed becomes auditable evidence.
