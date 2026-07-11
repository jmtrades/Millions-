import { cfg } from "../../venture.config";

export const metadata = { title: "Order confirmed" };

export default function Thanks() {
  return (
    <main style={{ maxWidth: 640, margin: "0 auto", padding: "96px 20px", textAlign: "center" }}>
      <h1 style={{ fontSize: 34, fontWeight: 800 }}>You're in. ✅</h1>
      <p style={{ fontSize: 17, color: "var(--muted)" }}>
        Payment received for <strong>{cfg.name}</strong>. The onboarding form lands in your inbox within
        the hour — {cfg.offer.turnaround.toLowerCase()} starts from the moment you return it.
      </p>
      <p style={{ fontSize: 14, color: "var(--muted)" }}>
        Nothing arrived? Check spam, then email the address on your Stripe receipt.
      </p>
    </main>
  );
}
