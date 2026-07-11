import { cfg } from "../../venture.config";

export const metadata = { title: "Order confirmed" };

export default function Thanks() {
  return (
    <main style={{ maxWidth: 640, margin: "0 auto", padding: "96px 20px", textAlign: "center" }}>
      <h1 style={{ fontSize: 34, fontWeight: 800 }}>You&apos;re in. ✅</h1>
      <p style={{ fontSize: 17, color: "var(--muted)" }}>
        Payment received for <strong>{cfg.name}</strong>. The exports intake form lands in your inbox
        within the hour — 30 days of provider usage exports (CSV) plus short workflow descriptions,
        read-only, no code access. The 5-working-day clock starts the moment your exports land.
      </p>
      <p style={{ fontSize: 15, color: "var(--muted)" }}>
        The guarantee stands as advertised: if identified savings come in under 30% of your monthly
        bill, you get a full refund.
      </p>
      <p style={{ fontSize: 14, color: "var(--muted)" }}>
        Nothing arrived? Check spam, then email the address on your Stripe receipt.
      </p>
    </main>
  );
}
