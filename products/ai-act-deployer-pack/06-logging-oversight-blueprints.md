# 06 — Logging & Oversight Automation Blueprints (n8n / Make)

> **AI Act Deployer Pack v1.0 — facts verified 11 July 2026.** Engineering documentation, not legal advice (`00-START-HERE.md` §Disclaimer).

A disclosure you can't prove was shown is a disclosure that, in an argument, wasn't shown. These blueprints make the proof a by-product of normal operation: every time a notice fires, an event lands in an evidence store; every month, a digest lands in the client folder and the register. Art. 50 doesn't mandate this logging — your client's MSA warranty, their procurement questionnaire, and your own liability posture do (`04` explains the evidence logic; legal basis for the underlying duties: [Art. 50](https://artificialintelligenceact.eu/article/50/)).

**Privacy rules (non-negotiable, GDPR data-minimisation):** log the *event*, never the conversation. No message content, no caller audio, no names. Hash any session identifier. The evidence question is "was the notice delivered at first interaction?" — metadata answers it.

---

## 1. Event schema (one schema for every channel)

`POST` this JSON to the webhook from the chatbot's first-message hook, the voice platform's call-started webhook, or the content pipeline's label step:

```json
{
  "client_id": "acme-gmbh",
  "system_id": "support-chatbot-prod",
  "event_type": "disclosure_shown",
  "duty": "art50-1",
  "locale": "de-DE",
  "disclosure_version": "v1.0-DE-A1",
  "session_ref": "sha256:9f2c...",
  "occurred_at": "2026-08-02T09:14:11Z"
}
```

- `event_type` ∈ `disclosure_shown` (chat badge+first message rendered) · `disclosure_spoken` (voice greeting completed) · `label_applied` (synthetic-media label attached at render) · `mark_verified` (C2PA/Seal check passed, `05`) · `human_handoff` / `bot_handback` (re-disclosure events, `03` §A3) · `register_append` (new control, Blueprint B).
- `duty` ∈ `art50-1` / `art50-2` / `art50-3` / `art50-4-deepfake` / `art50-4-text` — mirrors the register (`04`) so digests join cleanly.
- `disclosure_version` ties the event to the exact copy block installed (file `03` versioning) — this is what lets you say "between 2 Aug and 14 Sep we showed v1.0-DE-A1 on 100% of sessions."

## 2. Blueprint A — Disclosure-event logger (the always-on one)

**Trigger → normalise → append. Runs per interaction; costs nothing; builds the evidence base.**

n8n steps (importable skeleton in §5):

1. **Webhook** node — `POST /webhook/art50-disclosure-event`, respond immediately (`onReceived`), so logging never adds latency to the client UX. Protect with a header token.
2. **Set** node ("Normalize Event") — stamp `logged_at` (`{{ $now.toISO() }}`), copy the schema fields, drop anything unexpected (allowlist, not blocklist — that's your GDPR minimisation control in code).
3. **Append** node — Google Sheets `Append Row` to sheet `disclosure_events` (or the Supabase insert — §4). One row per event.
4. *(Optional)* **IF** node — `event_type == "mark_verified" && result == "fail"` → Slack/email alert. A failed mark check is the one event you want to hear about the same day (`05` §3 decision rules).

Make.com equivalent: **Custom webhook → JSON (Parse) → Google Sheets: Add a Row** (+ Router branch → Slack for failures). Identical schema; Make's webhook queue gives you retries for free.

**Wiring the senders:** chat widget — call the webhook in the same code path that renders the first bot message (not on page load; you're evidencing *first interaction*, Art. 50(5)); voice platform — post from the call-started/after-greeting hook with `event_type: disclosure_spoken`; content pipeline — final render step posts `label_applied` with the asset path in `session_ref` (hashed if it embeds client data).

## 3. Blueprint B — Register append (controls, not sessions)

Low-volume twin of Blueprint A: a small form (n8n Form node, Typeform, or an Airtable form) posts to `POST /webhook/art50-register-append` whenever anyone deploys/changes a control. Flow: **Webhook → Set (assign `row_id` = next `AA-nnn`, stamp date) → Append to `register` sheet → email confirmation to the reviewer.** Rules enforced in the flow, not by memory: `evidence_link` required (reject the submission without it), `status` defaults to `pending` until the named `reviewer` confirms via the emailed approve-link (a second tiny webhook flips `pending → live`). That two-step is your **human-oversight loop** — a named person verifies each control, which is exactly what the `reviewer` column in `04` promises.

## 4. Blueprint C — Monthly evidence export (the one clients see)

**Cron monthly → aggregate → write digest → file + email + register row.**

1. **Schedule Trigger** — 1st of month, 06:00.
2. **Read** previous month's `disclosure_events` rows (Sheets read with a date filter, or the SQL below).
3. **Code** node — aggregate: per `client_id` × `system_id` × `duty`: event counts, distinct days active, disclosure_versions seen, failures. Emit one summary object per client.
4. **Write digest** — markdown/CSV per client: "Art. 50 disclosure evidence — [Client] — [Month]: system, duty, events, versions, exceptions, sources cited." Store to the client's evidence folder (Drive/S3 node).
5. **Email** the digest to yourself + (optionally) the client contact.
6. **Append a `register_append` row** to the register: `control_deployed: "monthly evidence export [Month]"`, `evidence_link:` the digest — the register now demonstrates *continuous* operation, which is what separates a compliance programme from an installation day (`04` §4).

Supabase variant (swap the Sheets nodes for Postgres/Supabase nodes):

```sql
create table if not exists art50_disclosure_events (
  id bigint generated always as identity primary key,
  logged_at timestamptz not null default now(),
  occurred_at timestamptz not null,
  client_id text not null,
  system_id text not null,
  event_type text not null,
  duty text not null,
  locale text,
  disclosure_version text,
  session_ref text
);
create index on art50_disclosure_events (client_id, occurred_at);

-- Blueprint C digest query
select client_id, system_id, duty,
       count(*)                                   as events,
       count(distinct date_trunc('day', occurred_at)) as active_days,
       array_agg(distinct disclosure_version)     as versions
from art50_disclosure_events
where occurred_at >= date_trunc('month', now() - interval '1 month')
  and occurred_at <  date_trunc('month', now())
group by 1,2,3 order by 1,2,3;
```

## 5. Importable n8n workflow skeleton

Import via **n8n → Workflows → Import from File/Clipboard**, then: replace every `REPLACE_*` placeholder, attach your own credentials (placeholders below are inert), activate. Two branches in one workflow: Blueprint A (webhook → normalise → append) and Blueprint C (monthly digest). Swap the Sheets nodes for Supabase nodes if you run §4's table.

```json
{
  "name": "Art50 Evidence Logger + Monthly Digest (Deployer Pack v1.0)",
  "nodes": [
    {
      "parameters": {
        "httpMethod": "POST",
        "path": "art50-disclosure-event",
        "responseMode": "onReceived",
        "options": {}
      },
      "id": "wh-001",
      "name": "Disclosure Event Webhook",
      "type": "n8n-nodes-base.webhook",
      "typeVersion": 2,
      "position": [240, 260],
      "webhookId": "art50-disclosure-event"
    },
    {
      "parameters": {
        "assignments": {
          "assignments": [
            { "id": "a1", "name": "logged_at", "type": "string", "value": "={{ $now.toISO() }}" },
            { "id": "a2", "name": "occurred_at", "type": "string", "value": "={{ $json.body.occurred_at }}" },
            { "id": "a3", "name": "client_id", "type": "string", "value": "={{ $json.body.client_id }}" },
            { "id": "a4", "name": "system_id", "type": "string", "value": "={{ $json.body.system_id }}" },
            { "id": "a5", "name": "event_type", "type": "string", "value": "={{ $json.body.event_type }}" },
            { "id": "a6", "name": "duty", "type": "string", "value": "={{ $json.body.duty }}" },
            { "id": "a7", "name": "locale", "type": "string", "value": "={{ $json.body.locale }}" },
            { "id": "a8", "name": "disclosure_version", "type": "string", "value": "={{ $json.body.disclosure_version }}" },
            { "id": "a9", "name": "session_ref", "type": "string", "value": "={{ $json.body.session_ref }}" }
          ]
        },
        "options": {}
      },
      "id": "set-001",
      "name": "Normalize Event (allowlist)",
      "type": "n8n-nodes-base.set",
      "typeVersion": 3.4,
      "position": [480, 260]
    },
    {
      "parameters": {
        "operation": "append",
        "documentId": { "__rl": true, "mode": "id", "value": "REPLACE_WITH_SPREADSHEET_ID" },
        "sheetName": { "__rl": true, "mode": "name", "value": "disclosure_events" },
        "columns": { "mappingMode": "autoMapInputData" },
        "options": {}
      },
      "id": "gs-001",
      "name": "Append to Evidence Sheet",
      "type": "n8n-nodes-base.googleSheets",
      "typeVersion": 4.5,
      "position": [720, 260],
      "credentials": {
        "googleSheetsOAuth2Api": { "id": "REPLACE_CREDENTIAL_ID", "name": "Google Sheets (placeholder)" }
      }
    },
    {
      "parameters": {
        "rule": {
          "interval": [
            { "field": "months", "monthsInterval": 1, "triggerAtDayOfMonth": 1, "triggerAtHour": 6 }
          ]
        }
      },
      "id": "cron-001",
      "name": "Monthly Digest Trigger",
      "type": "n8n-nodes-base.scheduleTrigger",
      "typeVersion": 1.2,
      "position": [240, 540]
    },
    {
      "parameters": {
        "documentId": { "__rl": true, "mode": "id", "value": "REPLACE_WITH_SPREADSHEET_ID" },
        "sheetName": { "__rl": true, "mode": "name", "value": "disclosure_events" },
        "options": {}
      },
      "id": "gs-002",
      "name": "Read Events (prev month)",
      "type": "n8n-nodes-base.googleSheets",
      "typeVersion": 4.5,
      "position": [480, 540],
      "credentials": {
        "googleSheetsOAuth2Api": { "id": "REPLACE_CREDENTIAL_ID", "name": "Google Sheets (placeholder)" }
      }
    },
    {
      "parameters": {
        "jsCode": "const start = new Date(); start.setMonth(start.getMonth() - 1); start.setDate(1); start.setHours(0,0,0,0);\nconst end = new Date(); end.setDate(1); end.setHours(0,0,0,0);\nconst agg = {};\nfor (const item of $input.all()) {\n  const r = item.json;\n  const t = new Date(r.occurred_at);\n  if (isNaN(t) || t < start || t >= end) continue;\n  const key = `${r.client_id}|${r.system_id}|${r.duty}`;\n  agg[key] ??= { client_id: r.client_id, system_id: r.system_id, duty: r.duty, events: 0, versions: new Set() };\n  agg[key].events++;\n  if (r.disclosure_version) agg[key].versions.add(r.disclosure_version);\n}\nreturn Object.values(agg).map(a => ({ json: { month: start.toISOString().slice(0,7), ...a, versions: [...a.versions].join('; ') } }));"
      },
      "id": "code-001",
      "name": "Aggregate per client/system/duty",
      "type": "n8n-nodes-base.code",
      "typeVersion": 2,
      "position": [720, 540]
    },
    {
      "parameters": {
        "sendTo": "REPLACE_WITH_YOUR_EMAIL",
        "subject": "=Art. 50 evidence digest — {{ $json.month }}",
        "message": "=Client: {{ $json.client_id }}\nSystem: {{ $json.system_id }}\nDuty: {{ $json.duty }}\nDisclosure events: {{ $json.events }}\nVersions shown: {{ $json.versions }}\n\nFile this digest in the client evidence folder and append a register row (Deployer Pack file 04).",
        "options": {}
      },
      "id": "mail-001",
      "name": "Email Digest",
      "type": "n8n-nodes-base.gmail",
      "typeVersion": 2.1,
      "position": [960, 540],
      "credentials": {
        "gmailOAuth2": { "id": "REPLACE_CREDENTIAL_ID", "name": "Gmail (placeholder)" }
      }
    }
  ],
  "connections": {
    "Disclosure Event Webhook": { "main": [[{ "node": "Normalize Event (allowlist)", "type": "main", "index": 0 }]] },
    "Normalize Event (allowlist)": { "main": [[{ "node": "Append to Evidence Sheet", "type": "main", "index": 0 }]] },
    "Monthly Digest Trigger": { "main": [[{ "node": "Read Events (prev month)", "type": "main", "index": 0 }]] },
    "Read Events (prev month)": { "main": [[{ "node": "Aggregate per client/system/duty", "type": "main", "index": 0 }]] },
    "Aggregate per client/system/duty": { "main": [[{ "node": "Email Digest", "type": "main", "index": 0 }]] }
  },
  "settings": { "executionOrder": "v1" },
  "pinData": {}
}
```

**Hardening before you call it production:** add a header-auth check on the webhook (n8n webhook auth or an IF node comparing `X-Evidence-Token`); turn on n8n's error workflow → Slack; retention: keep raw events ≥24 months (questionnaires ask for "the last 12"), digests indefinitely; and put ONE line in each client SOW: "Agency logs disclosure-delivery events (metadata only) as compliance evidence" — that sentence is your lawful-basis conversation-starter for the client's DPO.

## 6. Test plan (30 minutes, once per deployment)

- [ ] `curl -X POST .../art50-disclosure-event` with the §1 sample → row appears with all fields
- [ ] Malformed payload (extra fields, missing `client_id`) → extra fields dropped / run flagged; nothing sensitive stored
- [ ] Chat widget fires event on first bot message (not page load) — check timestamps against a real session
- [ ] Voice platform fires `disclosure_spoken` after the greeting from `03` §A3
- [ ] Force the cron (n8n "Execute Workflow") → digest email arrives, numbers match a manual count
- [ ] Register row appended for the digest; reviewer initials it (`04` §1 rules)
- [ ] Screenshot the whole green execution → that screenshot is itself a register evidence link (very meta, very persuasive)

*Next file:* `07-client-audit-kit.md` — sell the whole thing as a productised audit.
