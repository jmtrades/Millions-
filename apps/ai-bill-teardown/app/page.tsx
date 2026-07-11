import { cfg } from "../venture.config";
import { Hero, Pains, Offer, Proof, Steps, Faq, Footer } from "@millions/core/blocks";

// BINDING FLOW CONDITION: exports are screened BEFORE payment. This section replaces the
// stock WaitlistForm so step 1 of the flow — the FREE pre-check — is what the form sells:
// buyer submits an export summary, we confirm the ≥30% guarantee fits their bill shape,
// THEN they pay. Keeps id="waitlist" so the checkout no-Stripe fallback anchor and the
// /api/lead redirect anchor still land here. Hero CTA remains a direct /api/checkout link
// for buyers who want to skip the pre-check.
const field = {
  padding: "13px 16px",
  borderRadius: 10,
  border: "1px solid var(--border)",
  fontSize: 15,
  background: "var(--bg)",
  color: "inherit",
  fontFamily: "inherit",
  width: "100%",
} as const;

function PreCheckForm() {
  return (
    <section id="waitlist" style={{ padding: "56px 0", background: "var(--card)" }}>
      <div style={{ maxWidth: 560, margin: "0 auto", padding: "0 20px" }}>
        <h2 style={{ fontSize: 28, lineHeight: 1.2, margin: "0 0 10px", fontWeight: 700 }}>
          Start with the free pre-check
        </h2>
        <p style={{ fontSize: 15, color: "var(--muted)", margin: "0 0 20px" }}>
          One paragraph on last month&apos;s usage — providers, rough monthly spend, what your main
          workflows do. Within one working day we confirm whether the ≥30% savings guarantee applies
          to your bill shape. No exports uploaded, no access granted, nothing to pay until we say
          &ldquo;yes, we can beat this.&rdquo;
        </p>
        <form method="POST" action="/api/lead" style={{ display: "grid", gap: 10 }}>
          <input type="email" name="email" required placeholder="you@company.com" style={field} />
          <textarea
            name="summary"
            required
            rows={4}
            placeholder="e.g. OpenAI + Anthropic via LiteLLM, ~£6k/month. Support agent, doc-extraction pipeline, nightly enrichment jobs. Bill doubled since the March launch."
            style={{ ...field, resize: "vertical" }}
          />
          <button
            type="submit"
            data-track="lead_submit"
            style={{
              background: "var(--accent)",
              color: "#fff",
              border: 0,
              padding: "13px 22px",
              borderRadius: 10,
              fontWeight: 700,
              fontSize: 15,
              cursor: "pointer",
            }}
          >
            Run my free pre-check
          </button>
        </form>
        <p style={{ fontSize: 12, marginTop: 10, color: "var(--muted)" }}>
          Used only to reply about {cfg.name}. No list-sharing, unsubscribe anytime. Already sure?{" "}
          <a href="/api/checkout" data-track="cta_precheck_skip" style={{ color: "var(--accent)" }}>
            Skip straight to checkout
          </a>
          .
        </p>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main>
      <Hero cfg={cfg} />
      <Pains cfg={cfg} />
      <Offer cfg={cfg} />
      <Proof cfg={cfg} />
      <Steps cfg={cfg} />
      <Faq cfg={cfg} />
      <PreCheckForm />
      <Footer cfg={cfg} />
    </main>
  );
}
