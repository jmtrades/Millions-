# Inbox Compliance Desk — outreach sequence (compliant)

Rules: B2B corporate subscribers only; fresh lists built from public pain signals (senders with visibly broken auth — checkable via public DNS; agencies posting about deliverability problems); per-company personalization = their actual public DNS findings; opt-out every send; ≤2 follow-ups. NOTE: outreach FROM this venture must itself be flawless — the sender IS the demo.

## Email 1 (day 0 — the free finding)
Subject: {{Domain}}'s DMARC is at p=none (2-min read)
Body:
{{FirstName}} — ran {{Domain}} through our auth checker before writing this (public DNS records only, nothing invasive):

• SPF: {{finding, e.g. "11 lookups — over the 10 limit, intermittent failures"}}
• DKIM: {{finding}}
• DMARC: {{finding, e.g. "p=none, no enforcement — exactly what Microsoft now rejects at volume"}}

Since May 2025 Microsoft *rejects* (550 5.7.515) rather than junks non-compliant bulk mail. If reply rates dropped and bounces mention 5.7.515, this is why.

Fixed-fee rescue: full auth rebuild to enforcement + blocklist remediation + before/after placement test, 72 hours, £499. {{link}}

Reply "no" and you're removed same day.

## Email 2 (day 3 — the legal side)
Subject: the £17.5M list question
Body:
{{FirstName}} — separate issue from the DNS one: if {{Company}} mails any list assembled before 2024, the risk changed. PECR fines went from £500k max to £17.5M/4% in February. In January the ICO fined one sender £105k for mailing third-party data without consent checks.

We run a 7-day re-permission sprint: consent-basis audit per source, suppression with a paper trail, re-permission campaign built in your ESP. £749 fixed. The register it produces is the document that turns an ICO letter into a short conversation. {{link}}

Reply "no" to opt out — same-day removal.

## Email 3 (day 8 — breakup + checklist)
Subject: keep this checklist (last email)
Body:
{{FirstName}} — closing the loop. The 6-point self-check we use, free:

1. SPF ≤10 lookups, single record  2. DKIM 2048-bit, rotated  3. DMARC at quarantine+ with alignment  4. Complaint rate <0.3%  5. Every legacy record has a named lawful basis  6. Suppression honoured same-day

Full guide: {{guide link}}. If any of the six is red and you want it green by Friday: {{link}}

Reply "no" either way — removed same day.
