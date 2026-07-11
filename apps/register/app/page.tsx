import { cfg } from "../venture.config";
import { Hero, Pains, Offer, Proof, Steps, Faq, WaitlistForm, Footer } from "@millions/core/blocks";
import { ROADMAP } from "../lib/duties";

// Honest module roadmap: the dated regulatory pipeline, split into "in v1" vs build order.
function Roadmap() {
  return (
    <section style={{ padding: "56px 0" }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px" }}>
        <h2 style={{ fontSize: 28, lineHeight: 1.2, margin: "0 0 8px", fontWeight: 700 }}>
          The roadmap is the regulatory calendar
        </h2>
        <p style={{ color: "var(--muted)", margin: "0 0 24px", maxWidth: 640, fontSize: 15 }}>
          v1 ships the first four rows as duty templates. The rest is the dated build order from our
          regulatory pipeline — not a promise of legal coverage today.
        </p>
        <div style={{ overflowX: "auto" }}>
          <table style={{ borderCollapse: "collapse", width: "100%", fontSize: 14 }}>
            <thead>
              <tr>
                {["Date", "Jurisdiction", "What lands", "Status"].map((h) => (
                  <th
                    key={h}
                    style={{
                      textAlign: "left",
                      padding: "8px 12px",
                      borderBottom: "2px solid var(--border)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROADMAP.map((r) => (
                <tr key={`${r.date}-${r.what}`}>
                  <td style={{ padding: "8px 12px", borderBottom: "1px solid var(--border)", whiteSpace: "nowrap", fontVariantNumeric: "tabular-nums" }}>
                    {r.date}
                  </td>
                  <td style={{ padding: "8px 12px", borderBottom: "1px solid var(--border)", whiteSpace: "nowrap" }}>
                    {r.jurisdiction}
                  </td>
                  <td style={{ padding: "8px 12px", borderBottom: "1px solid var(--border)" }}>{r.what}</td>
                  <td style={{ padding: "8px 12px", borderBottom: "1px solid var(--border)", whiteSpace: "nowrap" }}>
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        padding: "2px 10px",
                        borderRadius: 999,
                        border: `1px solid ${r.shipped ? "var(--accent)" : "var(--border)"}`,
                        color: r.shipped ? "var(--accent)" : "var(--muted)",
                      }}
                    >
                      {r.shipped ? "in v1" : "roadmap"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main>
      <nav
        style={{
          maxWidth: 880,
          margin: "0 auto",
          padding: "18px 20px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontWeight: 800, fontSize: 17 }}>{cfg.name}</span>
        <a href="/app" style={{ fontSize: 14, fontWeight: 600, color: "var(--accent)", textDecoration: "none" }}>
          Sign in →
        </a>
      </nav>
      <Hero cfg={cfg} />
      <Pains cfg={cfg} />
      <Offer cfg={cfg} />
      <Roadmap />
      <Proof cfg={cfg} />
      <Steps cfg={cfg} />
      <Faq cfg={cfg} />
      <WaitlistForm cfg={cfg} />
      <Footer cfg={cfg} />
    </main>
  );
}
