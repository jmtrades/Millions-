"use client";

import { useState } from "react";
import { supabaseBrowser } from "../../../lib/supabase/client";
import { ui } from "../../../lib/ui";

// Sign-in state rendered by the auth guard on every /app data page.
// configured=false → honest "auth not configured" operator state (app still builds/runs).
export function SignInCard({ configured }: { configured: boolean }) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  if (!configured) {
    return (
      <div style={{ maxWidth: 520, margin: "60px auto" }}>
        <div style={ui.card}>
          <h1 style={{ ...ui.h1, fontSize: 22 }}>Auth isn&apos;t configured yet</h1>
          <p style={{ ...ui.muted, fontSize: 14 }}>
            Registry needs a Supabase project to sign agencies in. Set{" "}
            <code>NEXT_PUBLIC_SUPABASE_URL</code> and <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code>{" "}
            (see <code>apps/register/.env.example</code>), apply{" "}
            <code>supabase/migrations/0002_register.sql</code>, and redeploy. The marketing site
            and waitlist work without them.
          </p>
          <a href="/" style={{ fontSize: 14, fontWeight: 600, color: "var(--accent)" }}>
            ← Back to the site
          </a>
        </div>
      </div>
    );
  }

  async function send(e: React.FormEvent) {
    e.preventDefault();
    const sb = supabaseBrowser();
    if (!sb) {
      setErr("Auth is not configured.");
      return;
    }
    setBusy(true);
    setErr(null);
    const { error } = await sb.auth.signInWithOtp({
      email: email.trim().toLowerCase(),
      options: { emailRedirectTo: `${location.origin}/auth/callback` },
    });
    setBusy(false);
    if (error) setErr(error.message);
    else setSent(true);
  }

  return (
    <div style={{ maxWidth: 440, margin: "60px auto" }}>
      <div style={ui.card}>
        <h1 style={{ ...ui.h1, fontSize: 22 }}>Sign in to Registry</h1>
        <p style={{ ...ui.muted, fontSize: 14, marginTop: 0 }}>
          Magic link by email — no password. New agencies create their org after first sign-in.
        </p>
        {sent ? (
          <p style={{ fontSize: 15, fontWeight: 600 }}>
            Check your inbox — the sign-in link for <strong>{email}</strong> is on its way.
          </p>
        ) : (
          <form onSubmit={send} style={{ display: "grid", gap: 10 }}>
            <input
              type="email"
              required
              placeholder="you@agency.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={ui.input}
            />
            <button type="submit" disabled={busy} style={{ ...ui.button, opacity: busy ? 0.6 : 1 }}>
              {busy ? "Sending…" : "Email me a sign-in link"}
            </button>
          </form>
        )}
        {err && <p style={{ color: "#b91c1c", fontSize: 13, marginBottom: 0 }}>{err}</p>}
      </div>
    </div>
  );
}

export function SignOutButton() {
  const [busy, setBusy] = useState(false);
  async function out() {
    const sb = supabaseBrowser();
    setBusy(true);
    if (sb) await sb.auth.signOut();
    location.href = "/app";
  }
  return (
    <button
      onClick={out}
      disabled={busy}
      style={{
        background: "transparent",
        border: "1px solid var(--border)",
        borderRadius: 8,
        padding: "6px 14px",
        fontSize: 13,
        fontWeight: 600,
        cursor: "pointer",
        color: "var(--muted)",
      }}
    >
      Sign out
    </button>
  );
}
