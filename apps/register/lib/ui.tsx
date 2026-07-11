import type { CSSProperties, ReactNode } from "react";
import { daysUntil } from "./duties";

// Dense inline-style idiom, same as @millions/core/blocks. No UI deps.
export const ui = {
  h1: { fontSize: 30, fontWeight: 800, lineHeight: 1.15, margin: "0 0 6px", letterSpacing: -0.5 } as CSSProperties,
  h2: { fontSize: 20, fontWeight: 700, margin: "0 0 14px" } as CSSProperties,
  muted: { color: "var(--muted)" } as CSSProperties,
  card: {
    border: "1px solid var(--border)",
    borderRadius: 12,
    padding: 20,
    background: "var(--card)",
  } as CSSProperties,
  input: {
    padding: "10px 14px",
    borderRadius: 10,
    border: "1px solid var(--border)",
    fontSize: 15,
    background: "var(--bg)",
    color: "inherit",
    width: "100%",
  } as CSSProperties,
  button: {
    background: "var(--accent)",
    color: "#fff",
    border: 0,
    padding: "10px 20px",
    borderRadius: 10,
    fontWeight: 700,
    fontSize: 14,
    cursor: "pointer",
  } as CSSProperties,
  buttonGhost: {
    background: "transparent",
    color: "var(--accent)",
    border: "1px solid var(--accent)",
    padding: "9px 18px",
    borderRadius: 10,
    fontWeight: 700,
    fontSize: 14,
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-block",
  } as CSSProperties,
  th: {
    textAlign: "left",
    padding: "8px 12px",
    borderBottom: "2px solid var(--border)",
    fontSize: 13,
    whiteSpace: "nowrap",
  } as CSSProperties,
  td: {
    padding: "10px 12px",
    borderBottom: "1px solid var(--border)",
    fontSize: 14,
    verticalAlign: "top",
  } as CSSProperties,
  label: { fontSize: 13, fontWeight: 600, display: "block", marginBottom: 6 } as CSSProperties,
};

export function Pill({
  children,
  tone = "muted",
}: {
  children: ReactNode;
  tone?: "accent" | "muted" | "warn" | "ok";
}) {
  const colors: Record<string, string> = {
    accent: "var(--accent)",
    muted: "var(--muted)",
    warn: "#b45309",
    ok: "#15803d",
  };
  return (
    <span
      style={{
        fontSize: 12,
        fontWeight: 700,
        padding: "2px 10px",
        borderRadius: 999,
        border: `1px solid ${colors[tone]}`,
        color: colors[tone],
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  );
}

export function StatusPill({ status }: { status: string }) {
  const tone = status === "in-place" ? "ok" : status === "open" ? "warn" : "muted";
  return <Pill tone={tone}>{status}</Pill>;
}

export function RolePill({ role }: { role: string }) {
  return <Pill tone={role === "out-of-scope" ? "muted" : "accent"}>{role}</Pill>;
}

// Server-rendered due-date label (dynamic pages — computed per request).
export function DueLabel({ iso }: { iso: string | null }) {
  if (!iso) return <span style={ui.muted}>no date</span>;
  const d = daysUntil(iso);
  if (d <= 0)
    return (
      <span>
        <strong>{iso}</strong> <span style={ui.muted}>· in force</span>
      </span>
    );
  return (
    <span>
      <strong>{iso}</strong>{" "}
      <span style={{ color: d <= 60 ? "#b45309" : "var(--muted)" }}>
        · in {d} day{d === 1 ? "" : "s"}
      </span>
    </span>
  );
}

export function EmptyState({ title, body }: { title: string; body: string }) {
  return (
    <div style={{ ...ui.card, textAlign: "center", padding: 36 }}>
      <p style={{ fontWeight: 700, margin: "0 0 6px" }}>{title}</p>
      <p style={{ ...ui.muted, fontSize: 14, margin: 0 }}>{body}</p>
    </div>
  );
}
