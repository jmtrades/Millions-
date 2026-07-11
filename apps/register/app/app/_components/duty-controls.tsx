"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabaseBrowser } from "../../../lib/supabase/client";
import { ui } from "../../../lib/ui";
import { DUTY_TEMPLATES } from "../../../lib/duties";

const DUTY_STATUSES = ["open", "in-place", "n/a"] as const;

export function DutyStatusSelect({ dutyId, status }: { dutyId: string; status: string }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  async function change(next: string) {
    const sb = supabaseBrowser();
    if (!sb) return;
    setBusy(true);
    await sb.from("reg_duties").update({ status: next }).eq("id", dutyId);
    setBusy(false);
    router.refresh();
  }

  return (
    <select
      defaultValue={status}
      disabled={busy}
      onChange={(e) => change(e.target.value)}
      style={{
        padding: "6px 8px",
        borderRadius: 8,
        border: "1px solid var(--border)",
        background: "var(--bg)",
        fontSize: 13,
        fontWeight: 600,
      }}
    >
      {DUTY_STATUSES.map((s) => (
        <option key={s} value={s}>
          {s}
        </option>
      ))}
    </select>
  );
}

// Append-only by design: insert only; RLS has no update/delete path on reg_evidence.
export function EvidenceForm({ dutyId }: { dutyId: string }) {
  const router = useRouter();
  const [note, setNote] = useState("");
  const [url, setUrl] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function add(e: React.FormEvent) {
    e.preventDefault();
    const sb = supabaseBrowser();
    if (!sb) return;
    setBusy(true);
    setErr(null);
    // logged_by defaults to auth.uid() in the DB; RLS insists they match.
    const { error } = await sb.from("reg_evidence").insert({
      duty_id: dutyId,
      note: note.trim(),
      evidence_url: url.trim() || null,
    });
    setBusy(false);
    if (error) setErr(error.message);
    else {
      setNote("");
      setUrl("");
      router.refresh();
    }
  }

  return (
    <form onSubmit={add} style={{ display: "grid", gap: 8, marginTop: 10 }}>
      <input
        required
        placeholder="What was deployed/verified — imperative past, name the asset + version"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        style={{ ...ui.input, fontSize: 13 }}
      />
      <div style={{ display: "flex", gap: 8 }}>
        <input
          type="url"
          placeholder="Evidence URL (screenshot, config export, log…) — optional"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          style={{ ...ui.input, fontSize: 13 }}
        />
        <button type="submit" disabled={busy} style={{ ...ui.button, whiteSpace: "nowrap", opacity: busy ? 0.6 : 1 }}>
          {busy ? "Logging…" : "Log evidence"}
        </button>
      </div>
      {err && <p style={{ color: "#b91c1c", fontSize: 12, margin: 0 }}>{err}</p>}
    </form>
  );
}

export function AddDutyForm({ systemId }: { systemId: string }) {
  const router = useRouter();
  const [templateId, setTemplateId] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function add(e: React.FormEvent) {
    e.preventDefault();
    const t = DUTY_TEMPLATES.find((x) => x.id === templateId);
    const sb = supabaseBrowser();
    if (!t || !sb) return;
    setBusy(true);
    setErr(null);
    const { error } = await sb.from("reg_duties").insert({
      system_id: systemId,
      jurisdiction: t.jurisdiction,
      obligation: t.obligation,
      module: t.module,
      due_date: t.due_date,
      status: "open",
      source_url: t.source_url,
    });
    setBusy(false);
    if (error) setErr(error.message);
    else {
      setTemplateId("");
      router.refresh();
    }
  }

  return (
    <form onSubmit={add} style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
      <select
        required
        value={templateId}
        onChange={(e) => setTemplateId(e.target.value)}
        style={{
          padding: "9px 10px",
          borderRadius: 8,
          border: "1px solid var(--border)",
          background: "var(--bg)",
          fontSize: 13,
          maxWidth: 520,
        }}
      >
        <option value="">Add a duty from template…</option>
        {DUTY_TEMPLATES.map((t) => (
          <option key={t.id} value={t.id}>
            {t.jurisdiction} · {t.obligation.slice(0, 90)}
          </option>
        ))}
      </select>
      <button type="submit" disabled={busy || !templateId} style={{ ...ui.buttonGhost, opacity: busy || !templateId ? 0.5 : 1 }}>
        Add duty
      </button>
      {err && <p style={{ color: "#b91c1c", fontSize: 12, margin: 0 }}>{err}</p>}
    </form>
  );
}
