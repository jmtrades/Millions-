import { guard } from "../../../../lib/supabase/server";
import { SignInCard } from "../../_components/auth";
import { SystemStepper } from "../../_components/stepper";
import { ui, Pill, RolePill, EmptyState } from "../../../../lib/ui";
import { MARKETS } from "../../../../lib/duties";

export const dynamic = "force-dynamic";

type ClientDetail = {
  id: string;
  org_id: string;
  name: string;
  market: string[];
  created_at: string;
  reg_systems: Array<{
    id: string;
    name: string;
    vendor_model: string | null;
    role: string;
    status: string;
    created_at: string;
    reg_duties: Array<{ id: string; status: string; due_date: string | null }>;
  }>;
};

const marketLabel = (code: string) => MARKETS.find((m) => m.code === code)?.label.split(" (")[0] ?? code;

export default async function ClientPage({ params }: { params: Promise<{ id: string }> }) {
  const g = await guard();
  if (g.state !== "ready") return <SignInCard configured={g.state !== "no-env"} />;
  const { id } = await params;

  const { data } = await g.supabase
    .from("reg_clients")
    .select(
      "id,org_id,name,market,created_at,reg_systems(id,name,vendor_model,role,status,created_at,reg_duties(id,status,due_date))"
    )
    .eq("id", id)
    .maybeSingle();
  const client = data as ClientDetail | null;

  if (!client)
    return (
      <EmptyState
        title="Client not found"
        body="Either this client doesn't exist or your org doesn't have access to it (row-level security)."
      />
    );

  const systems = [...client.reg_systems].sort((a, b) => a.created_at.localeCompare(b.created_at));

  return (
    <main>
      <p style={{ margin: "0 0 8px" }}>
        <a href="/app" style={{ fontSize: 13, color: "var(--muted)", textDecoration: "none" }}>
          ← Dashboard
        </a>
      </p>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 12, marginBottom: 24 }}>
        <div>
          <h1 style={ui.h1}>{client.name}</h1>
          <p style={{ ...ui.muted, fontSize: 13, margin: 0 }}>
            Markets: {client.market.length ? client.market.map(marketLabel).join(" · ") : "none recorded"}
          </p>
        </div>
        <a href={`/app/export/${client.id}`} style={ui.buttonGhost}>
          Export register CSV ↓
        </a>
      </div>

      <h2 style={ui.h2}>AI systems</h2>
      {!systems.length ? (
        <EmptyState
          title="No systems classified yet"
          body="Run every live deployment through the stepper — 'we're just an agency' is not a classification. Out-of-scope results are recorded too; that row is the cheapest audit finding you'll ever prevent."
        />
      ) : (
        <div style={{ overflowX: "auto", marginBottom: 20 }}>
          <table style={{ borderCollapse: "collapse", width: "100%" }}>
            <thead>
              <tr>
                <th style={ui.th}>System</th>
                <th style={ui.th}>Client role</th>
                <th style={ui.th}>Duties</th>
                <th style={ui.th}></th>
              </tr>
            </thead>
            <tbody>
              {systems.map((s) => {
                const open = s.reg_duties.filter((d) => d.status === "open").length;
                const done = s.reg_duties.filter((d) => d.status === "in-place").length;
                return (
                  <tr key={s.id}>
                    <td style={ui.td}>
                      <a href={`/app/systems/${s.id}`} style={{ fontWeight: 600, textDecoration: "none" }}>
                        {s.name}
                      </a>
                      {s.vendor_model && (
                        <div style={{ ...ui.muted, fontSize: 12 }}>{s.vendor_model}</div>
                      )}
                    </td>
                    <td style={ui.td}>
                      <RolePill role={s.role} />
                    </td>
                    <td style={ui.td}>
                      <span style={{ display: "inline-flex", gap: 6, flexWrap: "wrap" }}>
                        <Pill tone={open ? "warn" : "muted"}>{open} open</Pill>
                        <Pill tone={done ? "ok" : "muted"}>{done} in place</Pill>
                      </span>
                    </td>
                    <td style={ui.td}>
                      <a href={`/app/systems/${s.id}`} style={{ fontSize: 13, fontWeight: 600, color: "var(--accent)" }}>
                        Open →
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      <SystemStepper clientId={client.id} markets={client.market} />
    </main>
  );
}
