import { guard } from "../../../../lib/supabase/server";
import { SignInCard } from "../../_components/auth";
import { DutyStatusSelect, EvidenceForm, AddDutyForm } from "../../_components/duty-controls";
import { ui, Pill, RolePill, DueLabel, EmptyState } from "../../../../lib/ui";

export const dynamic = "force-dynamic";

type EvidenceRow = {
  id: string;
  note: string;
  evidence_url: string | null;
  logged_by: string;
  logged_at: string;
};
type DutyRow = {
  id: string;
  jurisdiction: string;
  obligation: string;
  module: string | null;
  due_date: string | null;
  status: string;
  source_url: string | null;
  created_at: string;
  reg_evidence: EvidenceRow[];
};
type SystemDetail = {
  id: string;
  name: string;
  vendor_model: string | null;
  role: string;
  classification_basis: string | null;
  status: string;
  created_at: string;
  reg_clients: { id: string; name: string } | null;
  reg_duties: DutyRow[];
};

export default async function SystemPage({ params }: { params: Promise<{ id: string }> }) {
  const g = await guard();
  if (g.state !== "ready") return <SignInCard configured={g.state !== "no-env"} />;
  const { id } = await params;

  const { data } = await g.supabase
    .from("reg_systems")
    .select(
      "id,name,vendor_model,role,classification_basis,status,created_at," +
        "reg_clients(id,name)," +
        "reg_duties(id,jurisdiction,obligation,module,due_date,status,source_url,created_at," +
        "reg_evidence(id,note,evidence_url,logged_by,logged_at))"
    )
    .eq("id", id)
    .maybeSingle();
  const system = data as unknown as SystemDetail | null;

  if (!system)
    return (
      <EmptyState
        title="System not found"
        body="Either this system doesn't exist or your org doesn't have access to it (row-level security)."
      />
    );

  const duties = [...system.reg_duties].sort((a, b) => {
    const ad = a.due_date ?? "9999-12-31";
    const bd = b.due_date ?? "9999-12-31";
    return ad === bd ? a.created_at.localeCompare(b.created_at) : ad.localeCompare(bd);
  });

  return (
    <main>
      <p style={{ margin: "0 0 8px" }}>
        {system.reg_clients ? (
          <a
            href={`/app/clients/${system.reg_clients.id}`}
            style={{ fontSize: 13, color: "var(--muted)", textDecoration: "none" }}
          >
            ← {system.reg_clients.name}
          </a>
        ) : (
          <a href="/app" style={{ fontSize: 13, color: "var(--muted)", textDecoration: "none" }}>
            ← Dashboard
          </a>
        )}
      </p>
      <div style={{ marginBottom: 20 }}>
        <h1 style={ui.h1}>{system.name}</h1>
        <p style={{ ...ui.muted, fontSize: 13, margin: "0 0 10px" }}>
          {system.vendor_model ?? "stack not recorded"}
        </p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <RolePill role={system.role} />
          <Pill>{system.status}</Pill>
        </div>
      </div>

      {system.classification_basis && (
        <div style={{ ...ui.card, marginBottom: 28, padding: 16 }}>
          <p style={{ fontSize: 12, fontWeight: 700, margin: "0 0 6px", color: "var(--accent)" }}>
            CLASSIFICATION BASIS (recorded {system.created_at.slice(0, 10)})
          </p>
          <p style={{ fontSize: 13, lineHeight: 1.6, margin: 0, color: "var(--muted)" }}>
            {system.classification_basis}
          </p>
        </div>
      )}

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap", marginBottom: 12 }}>
        <h2 style={{ ...ui.h2, margin: 0 }}>Duties</h2>
        <AddDutyForm systemId={system.id} />
      </div>

      {!duties.length ? (
        <EmptyState
          title={system.role === "out-of-scope" ? "Out of scope — no duties" : "No duties yet"}
          body={
            system.role === "out-of-scope"
              ? "The classification basis above documents why. The CSV export emits a dated scope-out row for this system."
              : "Seed duties from a template above — each carries its jurisdiction, dated deadline, and primary-source citation."
          }
        />
      ) : (
        <div style={{ display: "grid", gap: 12 }}>
          {duties.map((d) => {
            const evidence = [...d.reg_evidence].sort((a, b) => b.logged_at.localeCompare(a.logged_at));
            return (
              <div key={d.id} style={{ ...ui.card, padding: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                  <div style={{ minWidth: 260, flex: 1 }}>
                    <p style={{ fontWeight: 600, fontSize: 14, margin: "0 0 6px", lineHeight: 1.5 }}>
                      {d.obligation}
                    </p>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                      <Pill tone="accent">{d.jurisdiction}</Pill>
                      {d.module && <Pill>{d.module}</Pill>}
                      <span style={{ fontSize: 13 }}>
                        <DueLabel iso={d.due_date} />
                      </span>
                      {d.source_url && (
                        <a
                          href={d.source_url}
                          rel="noopener nofollow"
                          target="_blank"
                          style={{ fontSize: 12, color: "var(--accent)" }}
                        >
                          source ↗
                        </a>
                      )}
                    </div>
                  </div>
                  <DutyStatusSelect dutyId={d.id} status={d.status} />
                </div>

                <details style={{ marginTop: 12 }}>
                  <summary style={{ fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
                    Evidence log ({evidence.length}) — append-only
                  </summary>
                  {evidence.length > 0 && (
                    <ul style={{ listStyle: "none", margin: "10px 0 0", padding: 0, display: "grid", gap: 8 }}>
                      {evidence.map((ev) => (
                        <li key={ev.id} style={{ fontSize: 13, borderLeft: "2px solid var(--border)", paddingLeft: 10 }}>
                          <span style={{ ...ui.muted, fontVariantNumeric: "tabular-nums" }}>
                            {ev.logged_at.slice(0, 16).replace("T", " ")}
                          </span>{" "}
                          — {ev.note}
                          {ev.evidence_url && (
                            <>
                              {" "}
                              <a href={ev.evidence_url} rel="noopener nofollow" target="_blank" style={{ color: "var(--accent)" }}>
                                evidence ↗
                              </a>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                  <EvidenceForm dutyId={d.id} />
                </details>
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}
