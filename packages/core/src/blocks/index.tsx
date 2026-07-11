import type { VentureConfig } from "../config";
import { mdBlocks } from "../seo";

// Dense, dependency-free landing blocks. Styling via inline CSS vars + the reset in template globals.
// Every block is pain-first, citation-honest, and renders entirely from config.

const S = {
  wrap: { maxWidth: 880, margin: "0 auto", padding: "0 20px" } as const,
  section: { padding: "56px 0" } as const,
  h2: { fontSize: 28, lineHeight: 1.2, margin: "0 0 24px", fontWeight: 700 } as const,
  muted: { color: "var(--muted)" } as const,
  card: {
    border: "1px solid var(--border)",
    borderRadius: 12,
    padding: 20,
    background: "var(--card)",
  } as const,
};

export function Hero({ cfg }: { cfg: VentureConfig }) {
  return (
    <header style={{ ...S.section, paddingTop: 72 }}>
      <div style={S.wrap}>
        {cfg.hero.badge && (
          <span
            style={{
              display: "inline-block",
              fontSize: 13,
              padding: "4px 12px",
              borderRadius: 999,
              border: "1px solid var(--accent)",
              color: "var(--accent)",
              marginBottom: 20,
            }}
          >
            {cfg.hero.badge}
          </span>
        )}
        <h1 style={{ fontSize: 44, lineHeight: 1.1, margin: "0 0 16px", fontWeight: 800, letterSpacing: -1 }}>
          {cfg.hero.headline}
        </h1>
        <p style={{ fontSize: 19, ...S.muted, margin: "0 0 28px", maxWidth: 640 }}>{cfg.hero.sub}</p>
        <Cta cfg={cfg} id="hero" />
        {cfg.deadline && <Countdown iso={cfg.deadline.iso} label={cfg.deadline.label} />}
      </div>
    </header>
  );
}

export function Countdown({ iso, label }: { iso: string; label: string }) {
  const days = Math.max(0, Math.ceil((new Date(iso).getTime() - Date.now()) / 86400000));
  return (
    <p style={{ marginTop: 16, fontSize: 14, fontWeight: 600, color: "var(--accent)" }}>
      ⏳ {label}: {days} day{days === 1 ? "" : "s"}
    </p>
  );
}

export function Cta({ cfg, id }: { cfg: VentureConfig; id: string }) {
  const label =
    cfg.mode === "waitlist" ? "Join the waitlist" : cfg.mode === "paid-waitlist" ? cfg.hero.cta : cfg.hero.cta;
  return (
    <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
      <a
        href={cfg.mode === "waitlist" ? "#waitlist" : "/api/checkout"}
        data-track={`cta_${id}`}
        style={{
          background: "var(--accent)",
          color: "#fff",
          padding: "14px 28px",
          borderRadius: 10,
          fontWeight: 700,
          fontSize: 16,
          textDecoration: "none",
        }}
      >
        {label}
      </a>
      <span style={{ fontSize: 15, fontWeight: 600 }}>{cfg.priceLabel}</span>
      {cfg.guarantee && <span style={{ fontSize: 13, ...S.muted }}>{cfg.guarantee}</span>}
    </div>
  );
}

export function Pains({ cfg }: { cfg: VentureConfig }) {
  return (
    <section style={S.section}>
      <div style={S.wrap}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16 }}>
          {cfg.pains.map((p) => (
            <div key={p.title} style={S.card}>
              <h3 style={{ margin: "0 0 8px", fontSize: 17 }}>{p.title}</h3>
              <p style={{ margin: 0, fontSize: 15, ...S.muted }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Offer({ cfg }: { cfg: VentureConfig }) {
  return (
    <section style={{ ...S.section, background: "var(--card)" }}>
      <div style={S.wrap}>
        <h2 style={S.h2}>{cfg.offer.title}</h2>
        <ul style={{ margin: "0 0 20px", padding: 0, listStyle: "none", display: "grid", gap: 10 }}>
          {cfg.offer.bullets.map((b) => (
            <li key={b} style={{ fontSize: 16, paddingLeft: 28, position: "relative" }}>
              <span style={{ position: "absolute", left: 0, color: "var(--accent)", fontWeight: 700 }}>✓</span>
              {b}
            </li>
          ))}
        </ul>
        <p style={{ fontWeight: 700 }}>{cfg.offer.turnaround}</p>
        <Cta cfg={cfg} id="offer" />
      </div>
    </section>
  );
}

export function Proof({ cfg }: { cfg: VentureConfig }) {
  if (!cfg.proof.length) return null;
  return (
    <section style={S.section}>
      <div style={S.wrap}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16 }}>
          {cfg.proof.map((p) => (
            <div key={p.stat} style={S.card}>
              <p style={{ margin: "0 0 8px", fontSize: 16, fontWeight: 700 }}>{p.stat}</p>
              <a href={p.url} rel="nofollow noopener" style={{ fontSize: 13, color: "var(--accent)" }}>
                {p.source}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Steps({ cfg }: { cfg: VentureConfig }) {
  return (
    <section style={S.section}>
      <div style={S.wrap}>
        <h2 style={S.h2}>How it works</h2>
        <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: 14 }}>
          {cfg.steps.map((s, i) => (
            <li key={s.title} style={{ display: "flex", gap: 16 }}>
              <span
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 999,
                  background: "var(--accent)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  flexShrink: 0,
                }}
              >
                {i + 1}
              </span>
              <div>
                <h3 style={{ margin: "4px 0 4px", fontSize: 17 }}>{s.title}</h3>
                <p style={{ margin: 0, fontSize: 15, ...S.muted }}>{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Faq({ cfg }: { cfg: VentureConfig }) {
  return (
    <section style={S.section}>
      <div style={S.wrap}>
        <h2 style={S.h2}>Questions</h2>
        <div style={{ display: "grid", gap: 8 }}>
          {cfg.faq.map((f) => (
            <details key={f.q} style={{ ...S.card, padding: "14px 20px" }}>
              <summary style={{ fontWeight: 600, cursor: "pointer", fontSize: 15 }}>{f.q}</summary>
              <p style={{ margin: "10px 0 0", fontSize: 15, ...S.muted }}>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WaitlistForm({ cfg }: { cfg: VentureConfig }) {
  return (
    <section id="waitlist" style={{ ...S.section, background: "var(--card)" }}>
      <div style={{ ...S.wrap, maxWidth: 560 }}>
        <h2 style={S.h2}>{cfg.mode === "checkout" ? "Prefer to talk first?" : "Get in before the window closes"}</h2>
        <form method="POST" action="/api/lead" style={{ display: "flex", gap: 10 }}>
          <input
            type="email"
            name="email"
            required
            placeholder="you@company.com"
            style={{
              flex: 1,
              padding: "13px 16px",
              borderRadius: 10,
              border: "1px solid var(--border)",
              fontSize: 15,
              background: "var(--bg)",
              color: "inherit",
            }}
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
            {cfg.mode === "checkout" ? "Ask a question" : "Join"}
          </button>
        </form>
        <p style={{ fontSize: 12, marginTop: 10, ...S.muted }}>
          Used only to contact you about {cfg.name}. No list-sharing, unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}

export function Footer({ cfg }: { cfg: VentureConfig }) {
  return (
    <footer style={{ padding: "40px 0 60px", borderTop: "1px solid var(--border)" }}>
      <div style={S.wrap}>
        {cfg.compliance && <p style={{ fontSize: 12, ...S.muted, maxWidth: 640 }}>{cfg.compliance}</p>}
        <p style={{ fontSize: 12, ...S.muted }}>
          © {new Date().getFullYear()} {cfg.name}
        </p>
      </div>
    </footer>
  );
}

export function SeoBody({ body }: { body: string }) {
  const blocks = mdBlocks(body);
  return (
    <article style={{ ...S.wrap, maxWidth: 720, padding: "48px 20px" }}>
      {blocks.map((b, i) =>
        b.t === "h2" ? (
          <h2 key={i} style={{ ...S.h2, marginTop: 32 }}>{b.text}</h2>
        ) : b.t === "li" ? (
          <li key={i} style={{ fontSize: 16, margin: "6px 0 6px 20px" }}>{b.text}</li>
        ) : (
          <p key={i} style={{ fontSize: 16, lineHeight: 1.7, margin: "14px 0" }}>{b.text}</p>
        )
      )}
    </article>
  );
}

export function LandingPage({ cfg }: { cfg: VentureConfig }) {
  return (
    <main>
      <Hero cfg={cfg} />
      <Pains cfg={cfg} />
      <Offer cfg={cfg} />
      <Proof cfg={cfg} />
      <Steps cfg={cfg} />
      <Faq cfg={cfg} />
      <WaitlistForm cfg={cfg} />
      <Footer cfg={cfg} />
    </main>
  );
}
