"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { supabaseBrowser } from "../../../lib/supabase/client";
import { ui } from "../../../lib/ui";
import {
  DUTY_TEMPLATES,
  FLAG_LABELS,
  matchTemplates,
  type DutyFlags,
  type Role,
} from "../../../lib/duties";

// Inline classification stepper — the deployer-vs-provider question tree from
// products/ai-act-deployer-pack/02-deployer-vs-provider-decision-tree.md, run from the
// CLIENT's perspective (the register records the client's role; agency posture → basis).
// Output: reg_systems row (role + classification_basis) + seeded reg_duties rows.

type Tri = boolean | null;

const EMPTY_FLAGS: DutyFlags = {
  interacts: false,
  synthetic: false,
  emotionBiometric: false,
  publicText: false,
  employment: false,
  companion: false,
};

function YesNo({ value, onPick }: { value: Tri; onPick: (v: boolean) => void }) {
  return (
    <div style={{ display: "flex", gap: 10 }}>
      {[true, false].map((v) => (
        <button
          key={String(v)}
          type="button"
          onClick={() => onPick(v)}
          style={{
            ...ui.buttonGhost,
            ...(value === v ? { background: "var(--accent)", color: "#fff" } : {}),
          }}
        >
          {v ? "Yes" : "No"}
        </button>
      ))}
    </div>
  );
}

export function SystemStepper({ clientId, markets }: { clientId: string; markets: string[] }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [vendor, setVendor] = useState("");
  const [q0Nexus, setQ0] = useState<Tri>(null); // EU nexus (Art. 2(1))
  const [q1Brand, setQ1] = useState<Tri>(null); // client's own name/trademark
  const [q2Mod, setQ2] = useState<Tri>(null); // re-brand / substantial modification / purpose change
  const [q3Use, setQ3] = useState<Tri>(null); // used under client's authority
  const [flags, setFlags] = useState<DutyFlags>(EMPTY_FLAGS);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [basisEdit, setBasisEdit] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const providerish = q1Brand === true || q2Mod === true;
  const deployerish = q3Use === true;
  const role: Role = providerish ? "provider" : deployerish ? "deployer" : "out-of-scope";
  const effectiveRoles = useMemo(() => {
    const r: Array<"provider" | "deployer"> = [];
    if (providerish) r.push("provider");
    if (deployerish) r.push("deployer");
    return r;
  }, [providerish, deployerish]);

  // EU templates only when Q0 says the AI Act reaches this deployment; IL/NY follow client markets.
  const effectiveMarkets = useMemo(() => {
    const m = markets.filter((x) => x !== "EU");
    if (q0Nexus === true) m.push("EU");
    return m;
  }, [markets, q0Nexus]);

  const match = useMemo(
    () => matchTemplates(effectiveMarkets, effectiveRoles, flags),
    [effectiveMarkets, effectiveRoles, flags]
  );

  const autoBasis = useMemo(() => {
    const yn = (v: Tri) => (v === true ? "yes" : v === false ? "no" : "—");
    const flagList = (Object.keys(flags) as Array<keyof DutyFlags>)
      .filter((k) => flags[k])
      .map((k) => FLAG_LABELS[k].split(" (")[0].toLowerCase());
    return [
      `Q0 EU nexus (market / put into service / output used in EU, Art. 2(1)): ${yn(q0Nexus)}${q0Nexus === false ? " — EU duties not seeded; revisit if the client starts selling into the EU" : ""}.`,
      `Q1 under the client's own name/trademark: ${yn(q1Brand)}${q1Brand === true ? " — provider per Art. 3(3) ('has developed' counts)" : ""}.`,
      q1Brand === false
        ? `Q2 re-branded / substantially modified / re-purposed a third-party system: ${yn(q2Mod)}${q2Mod === true ? " — treated as provider (Art. 25 logic; grey zone, confirm with counsel)" : ""}.`
        : null,
      `Q3 used under the client's authority: ${yn(q3Use)}${q3Use === true ? " — deployer per Art. 3(4)" : ""}.`,
      `Characteristics: ${flagList.length ? flagList.join("; ") : "none flagged"}.`,
      `Result: client = ${effectiveRoles.length === 2 ? "provider + deployer (stored as provider; duties seeded from both sets)" : role}.`,
      `Tree run ${new Date().toISOString().slice(0, 10)} per AI Act Deployer Pack file 02.`,
    ]
      .filter(Boolean)
      .join(" ");
  }, [q0Nexus, q1Brand, q2Mod, q3Use, flags, role, effectiveRoles]);

  function reset() {
    setStep(0);
    setName("");
    setVendor("");
    setQ0(null);
    setQ1(null);
    setQ2(null);
    setQ3(null);
    setFlags(EMPTY_FLAGS);
    setSelected(new Set());
    setBasisEdit(null);
    setErr(null);
  }

  function toReview() {
    setSelected(new Set(match.preselected.map((t) => t.id)));
    setBasisEdit(null);
    setStep(6);
  }

  async function save() {
    const sb = supabaseBrowser();
    if (!sb) return;
    setBusy(true);
    setErr(null);
    const { data: sys, error } = await sb
      .from("reg_systems")
      .insert({
        client_id: clientId,
        name: name.trim(),
        vendor_model: vendor.trim() || null,
        role,
        classification_basis: basisEdit ?? autoBasis,
        status: "active",
      })
      .select("id")
      .single();
    if (error || !sys) {
      setBusy(false);
      setErr(error?.message ?? "Could not create the system.");
      return;
    }
    const rows = DUTY_TEMPLATES.filter((t) => selected.has(t.id)).map((t) => ({
      system_id: sys.id as string,
      jurisdiction: t.jurisdiction,
      obligation: t.obligation,
      module: t.module,
      due_date: t.due_date,
      status: "open",
      source_url: t.source_url,
    }));
    if (rows.length) {
      const { error: dutyErr } = await sb.from("reg_duties").insert(rows);
      if (dutyErr) {
        setBusy(false);
        setErr(`System saved, but seeding duties failed: ${dutyErr.message}`);
        router.refresh();
        return;
      }
    }
    setBusy(false);
    reset();
    setOpen(false);
    router.push(`/app/systems/${sys.id}`);
    router.refresh();
  }

  if (!open)
    return (
      <button onClick={() => setOpen(true)} style={ui.buttonGhost}>
        + Classify a system
      </button>
    );

  const q = (title: string, hint: string, value: Tri, set: (v: boolean) => void) => (
    <div style={{ display: "grid", gap: 12 }}>
      <p style={{ fontWeight: 700, fontSize: 15, margin: 0 }}>{title}</p>
      <p style={{ ...ui.muted, fontSize: 13, margin: 0 }}>{hint}</p>
      <YesNo value={value} onPick={set} />
    </div>
  );

  const steps: Array<{ label: string; body: React.ReactNode; canNext: boolean }> = [
    {
      label: "System",
      canNext: name.trim().length > 0,
      body: (
        <div style={{ display: "grid", gap: 12 }}>
          <div>
            <label style={ui.label}>System name</label>
            <input
              autoFocus
              placeholder="e.g. Support chatbot on acme.de"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={ui.input}
            />
          </div>
          <div>
            <label style={ui.label}>Vendor / model / stack (enough that a stranger can find it)</label>
            <input
              placeholder="e.g. GPT-4o via OpenAI API, n8n, client Azure tenant"
              value={vendor}
              onChange={(e) => setVendor(e.target.value)}
              style={ui.input}
            />
          </div>
        </div>
      ),
    },
    {
      label: "Q0 · EU nexus",
      canNext: q0Nexus !== null,
      body: q(
        "Is the system placed on the EU market, put into service in the EU, or is its output used in the EU?",
        "Art. 2(1)(a)–(c). Follow the output, not the server location: a UK/US client whose content reaches EU users is in scope. Answering no skips EU duty templates but still logs the reasoning — scope can change.",
        q0Nexus,
        (v) => {
          setQ0(v);
          setStep(2);
        }
      ),
    },
    {
      label: "Q1 · Brand",
      canNext: q1Brand !== null,
      body: q(
        "Is the system placed on the market or put into service under the CLIENT's own name or trademark?",
        "Art. 3(3): whoever's brand is on it is presumptively the provider — even with zero code written ('has … developed' counts). A bespoke build the client runs as 'Acme Assistant' is YES.",
        q1Brand,
        (v) => {
          setQ1(v);
          setStep(v ? 4 : 3); // brand=yes → provider; skip Q2
        }
      ),
    },
    {
      label: "Q2 · Modification",
      canNext: q2Mod !== null,
      body: q(
        "Did the client (or the agency on their behalf) re-brand, substantially modify, or change the intended purpose of a third-party system before putting it into service?",
        "Art. 25 logic: re-branding or substantial modification shifts provider duties. Grey zone — if yes, treat as provider for planning and flag to counsel.",
        q2Mod,
        (v) => {
          setQ2(v);
          setStep(4);
        }
      ),
    },
    {
      label: "Q3 · Authority",
      canNext: q3Use !== null,
      body: q(
        "Is the system used under the client's authority — their staff operate it, their workflows consume it?",
        "Art. 3(4): using an AI system under your authority in a professional context makes you a deployer. A system can make the client provider AND deployer at once.",
        q3Use,
        (v) => {
          setQ3(v);
          setStep(5);
        }
      ),
    },
    {
      label: "Characteristics",
      canNext: true,
      body: (
        <div style={{ display: "grid", gap: 10 }}>
          <p style={{ fontWeight: 700, fontSize: 15, margin: 0 }}>
            What does this system actually do?
          </p>
          <p style={{ ...ui.muted, fontSize: 13, margin: 0 }}>
            These select which duty templates get pre-seeded (file 02, Q5 duty selector). Tick
            everything that applies.
          </p>
          {(Object.keys(EMPTY_FLAGS) as Array<keyof DutyFlags>).map((k) => (
            <label key={k} style={{ fontSize: 14, display: "flex", gap: 8, alignItems: "flex-start" }}>
              <input
                type="checkbox"
                checked={flags[k]}
                onChange={() => setFlags((f) => ({ ...f, [k]: !f[k] }))}
                style={{ marginTop: 3 }}
              />
              {FLAG_LABELS[k]}
            </label>
          ))}
        </div>
      ),
    },
    {
      label: "Review & seed",
      canNext: false,
      body: (
        <div style={{ display: "grid", gap: 14 }}>
          <p style={{ margin: 0, fontSize: 15 }}>
            Classification:{" "}
            <strong>
              {effectiveRoles.length === 2 ? "provider + deployer" : role}
            </strong>{" "}
            {role !== "out-of-scope" && (
              <span style={{ ...ui.muted, fontSize: 13 }}>
                (stored as <code>{role}</code>)
              </span>
            )}
          </p>
          {role === "out-of-scope" && (
            <p style={{ ...ui.muted, fontSize: 13, margin: 0 }}>
              No role duties today. The system is still recorded with its dated reasoning — the CSV
              export emits a scope-out row, which is exactly what auditors want to see.
            </p>
          )}
          <div>
            <label style={ui.label}>Classification basis (recorded on the system, editable)</label>
            <textarea
              rows={5}
              value={basisEdit ?? autoBasis}
              onChange={(e) => setBasisEdit(e.target.value)}
              style={{ ...ui.input, resize: "vertical", fontSize: 13, lineHeight: 1.5 }}
            />
          </div>
          {role !== "out-of-scope" && (
            <div>
              <label style={ui.label}>Duties to seed (pre-selected from markets + answers)</label>
              <div style={{ display: "grid", gap: 8 }}>
                {[...match.preselected, ...match.rest].map((t) => {
                  const matched = match.preselected.some((p) => p.id === t.id);
                  return (
                    <label
                      key={t.id}
                      style={{
                        fontSize: 13,
                        display: "flex",
                        gap: 8,
                        alignItems: "flex-start",
                        opacity: matched || selected.has(t.id) ? 1 : 0.55,
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={selected.has(t.id)}
                        onChange={() =>
                          setSelected((s) => {
                            const n = new Set(s);
                            if (n.has(t.id)) n.delete(t.id);
                            else n.add(t.id);
                            return n;
                          })
                        }
                        style={{ marginTop: 2 }}
                      />
                      <span>
                        <strong>{t.jurisdiction}</strong> · {t.obligation}{" "}
                        <span style={ui.muted}>
                          — {t.roles.join("/")} duty, {t.due_date}
                          {!matched ? " · not matched by your answers" : ""}
                        </span>
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          )}
          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={save} disabled={busy || !name.trim()} style={{ ...ui.button, opacity: busy ? 0.6 : 1 }}>
              {busy ? "Saving…" : role === "out-of-scope" ? "Save system (no duties)" : `Save system + ${selected.size} dut${selected.size === 1 ? "y" : "ies"}`}
            </button>
          </div>
          {err && <p style={{ color: "#b91c1c", fontSize: 13, margin: 0 }}>{err}</p>}
        </div>
      ),
    },
  ];

  const current = steps[step];

  return (
    <div style={{ ...ui.card, display: "grid", gap: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p style={{ margin: 0, fontWeight: 700, fontSize: 14 }}>
          Classify a system — <span style={{ color: "var(--accent)" }}>{current.label}</span>{" "}
          <span style={{ ...ui.muted, fontWeight: 400 }}>
            (step {step + 1}/{steps.length})
          </span>
        </p>
        <button
          type="button"
          onClick={() => {
            reset();
            setOpen(false);
          }}
          style={{ background: "none", border: 0, color: "var(--muted)", cursor: "pointer", fontSize: 13 }}
        >
          Cancel
        </button>
      </div>
      {current.body}
      <div style={{ display: "flex", gap: 10 }}>
        {step > 0 && (
          <button
            type="button"
            onClick={() => setStep(step === 4 && q1Brand === true ? 2 : step - 1)}
            style={{ ...ui.buttonGhost, borderColor: "var(--border)", color: "var(--muted)" }}
          >
            ← Back
          </button>
        )}
        {step === 0 && current.canNext && (
          <button type="button" onClick={() => setStep(1)} style={ui.buttonGhost}>
            Next →
          </button>
        )}
        {step === 5 && (
          <button type="button" onClick={toReview} style={ui.button}>
            Review classification →
          </button>
        )}
      </div>
    </div>
  );
}
