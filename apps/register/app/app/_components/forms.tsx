"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabaseBrowser } from "../../../lib/supabase/client";
import { ui } from "../../../lib/ui";
import { MARKETS } from "../../../lib/duties";

export function CreateOrgForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function create(e: React.FormEvent) {
    e.preventDefault();
    const sb = supabaseBrowser();
    if (!sb) return;
    setBusy(true);
    setErr(null);
    // owner_uid defaults to auth.uid(); the DB trigger seeds the owner membership row.
    const { error } = await sb.from("reg_orgs").insert({ name: name.trim() });
    setBusy(false);
    if (error) setErr(error.message);
    else router.refresh();
  }

  return (
    <div style={{ maxWidth: 520, margin: "40px auto" }}>
      <div style={ui.card}>
        <h1 style={{ ...ui.h1, fontSize: 22 }}>Name your agency org</h1>
        <p style={{ ...ui.muted, fontSize: 14 }}>
          One org per agency. Client workspaces, systems, duties and evidence all live inside it —
          isolated from every other org by row-level security.
        </p>
        <form onSubmit={create} style={{ display: "flex", gap: 10 }}>
          <input
            required
            placeholder="e.g. Northlight Digital Ltd"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={ui.input}
          />
          <button type="submit" disabled={busy} style={{ ...ui.button, opacity: busy ? 0.6 : 1 }}>
            {busy ? "Creating…" : "Create org"}
          </button>
        </form>
        {err && <p style={{ color: "#b91c1c", fontSize: 13, marginBottom: 0 }}>{err}</p>}
      </div>
    </div>
  );
}

export function AddClientForm({ orgId }: { orgId: string }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [markets, setMarkets] = useState<string[]>(["EU"]);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  function toggle(code: string) {
    setMarkets((m) => (m.includes(code) ? m.filter((x) => x !== code) : [...m, code]));
  }

  async function create(e: React.FormEvent) {
    e.preventDefault();
    const sb = supabaseBrowser();
    if (!sb) return;
    setBusy(true);
    setErr(null);
    const { error } = await sb
      .from("reg_clients")
      .insert({ org_id: orgId, name: name.trim(), market: markets });
    setBusy(false);
    if (error) setErr(error.message);
    else {
      setName("");
      setOpen(false);
      router.refresh();
    }
  }

  if (!open)
    return (
      <button onClick={() => setOpen(true)} style={ui.buttonGhost}>
        + Add client
      </button>
    );

  return (
    <form onSubmit={create} style={{ ...ui.card, display: "grid", gap: 14, maxWidth: 560 }}>
      <div>
        <label style={ui.label}>Client (legal entity name)</label>
        <input
          required
          autoFocus
          placeholder="e.g. Acme GmbH"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={ui.input}
        />
      </div>
      <div>
        <label style={ui.label}>Markets where their AI deployments (or outputs) land</label>
        <div style={{ display: "grid", gap: 6 }}>
          {MARKETS.map((m) => (
            <label key={m.code} style={{ fontSize: 14, display: "flex", gap: 8, alignItems: "center" }}>
              <input type="checkbox" checked={markets.includes(m.code)} onChange={() => toggle(m.code)} />
              {m.label}
            </label>
          ))}
        </div>
        <p style={{ ...ui.muted, fontSize: 12, margin: "8px 0 0" }}>
          Drives which duty templates can be seeded. v1 templates cover EU, Illinois and New York;
          other markets are recorded for scope documentation.
        </p>
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        <button type="submit" disabled={busy} style={{ ...ui.button, opacity: busy ? 0.6 : 1 }}>
          {busy ? "Adding…" : "Add client"}
        </button>
        <button
          type="button"
          onClick={() => setOpen(false)}
          style={{ ...ui.buttonGhost, borderColor: "var(--border)", color: "var(--muted)" }}
        >
          Cancel
        </button>
      </div>
      {err && <p style={{ color: "#b91c1c", fontSize: 13, margin: 0 }}>{err}</p>}
    </form>
  );
}
