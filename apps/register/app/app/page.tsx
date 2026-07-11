import { guard } from "../../lib/supabase/server";
import { SignInCard } from "./_components/auth";
import { CreateOrgForm, AddClientForm } from "./_components/forms";
import { ui, Pill, EmptyState } from "../../lib/ui";
import { MARKETS } from "../../lib/duties";

export const dynamic = "force-dynamic";

type OrgRow = { id: string; name: string; created_at: string };
type ClientRow = {
  id: string;
  name: string;
  market: string[];
  created_at: string;
  reg_systems: Array<{
    id: string;
    role: string;
    reg_duties: Array<{ status: string; due_date: string | null }>;
  }>;
};

const marketLabel = (code: string) => MARKETS.find((m) => m.code === code)?.label.split(" (")[0] ?? code;

export default async function Dashboard({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const g = await guard();
  if (g.state !== "ready") return <SignInCard configured={g.state !== "no-env"} />;
  const { supabase, user } = g;

  const { data: orgData } = await supabase
    .from("reg_orgs")
    .select("id,name,created_at")
    .order("created_at");
  const orgs = (orgData ?? []) as OrgRow[];
  if (!orgs.length) return <CreateOrgForm />;

  const sp = await searchParams;
  const requested = typeof sp.org === "string" ? sp.org : undefined;
  const org = orgs.find((o) => o.id === requested) ?? orgs[0];

  const { data: clientData } = await supabase
    .from("reg_clients")
    .select("id,name,market,created_at,reg_systems(id,role,reg_duties(status,due_date))")
    .eq("org_id", org.id)
    .order("created_at");
  const clients = (clientData ?? []) as ClientRow[];

  // Org-wide duty rollup + next dated deadline among open duties.
  const today = new Date().toISOString().slice(0, 10);
  let open = 0,
    inPlace = 0,
    na = 0,
    systems = 0;
  let nextDue: string | null = null;
  for (const c of clients)
    for (const s of c.reg_systems) {
      systems++;
      for (const d of s.reg_duties) {
        if (d.status === "open") {
          open++;
          if (d.due_date && d.due_date >= today && (!nextDue || d.due_date < nextDue)) nextDue = d.due_date;
        } else if (d.status === "in-place") inPlace++;
        else na++;
      }
    }

  return (
    <main>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 12 }}>
        <div>
          <h1 style={ui.h1}>{org.name}</h1>
          <p style={{ ...ui.muted, fontSize: 13, margin: 0 }}>
            Signed in as {user.email || "member"}
            {orgs.length > 1 && (
              <>
                {" · orgs: "}
                {orgs.map((o, i) => (
                  <span key={o.id}>
                    {i > 0 && ", "}
                    {o.id === org.id ? (
                      <strong>{o.name}</strong>
                    ) : (
                      <a href={`/app?org=${o.id}`} style={{ color: "var(--accent)" }}>
                        {o.name}
                      </a>
                    )}
                  </span>
                ))}
              </>
            )}
          </p>
        </div>
        <AddClientForm orgId={org.id} />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
          gap: 12,
          margin: "24px 0 32px",
        }}
      >
        {[
          { n: clients.length, label: "clients" },
          { n: systems, label: "systems classified" },
          { n: open, label: "duties open" },
          { n: inPlace, label: "controls in place" },
          { n: na, label: "n/a documented" },
        ].map((t) => (
          <div key={t.label} style={{ ...ui.card, padding: 16 }}>
            <p style={{ fontSize: 26, fontWeight: 800, margin: 0, fontVariantNumeric: "tabular-nums" }}>{t.n}</p>
            <p style={{ ...ui.muted, fontSize: 12, margin: 0 }}>{t.label}</p>
          </div>
        ))}
        <div style={{ ...ui.card, padding: 16 }}>
          <p style={{ fontSize: 26, fontWeight: 800, margin: 0, fontVariantNumeric: "tabular-nums" }}>
            {nextDue ?? "—"}
          </p>
          <p style={{ ...ui.muted, fontSize: 12, margin: 0 }}>next open deadline</p>
        </div>
      </div>

      <h2 style={ui.h2}>Clients</h2>
      {!clients.length ? (
        <EmptyState
          title="No clients yet"
          body="Add your first client workspace, then classify each of their AI systems with the stepper — duties seed themselves from the dated templates."
        />
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 14 }}>
          {clients.map((c) => {
            const duties = c.reg_systems.flatMap((s) => s.reg_duties);
            const cOpen = duties.filter((d) => d.status === "open").length;
            const cDone = duties.filter((d) => d.status === "in-place").length;
            return (
              <div key={c.id} style={{ ...ui.card, display: "grid", gap: 10 }}>
                <div>
                  <a href={`/app/clients/${c.id}`} style={{ fontWeight: 700, fontSize: 16, textDecoration: "none" }}>
                    {c.name}
                  </a>
                  <p style={{ ...ui.muted, fontSize: 12, margin: "4px 0 0" }}>
                    {c.market.length ? c.market.map(marketLabel).join(" · ") : "no markets recorded"}
                  </p>
                </div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <Pill tone="accent">{c.reg_systems.length} system{c.reg_systems.length === 1 ? "" : "s"}</Pill>
                  <Pill tone={cOpen ? "warn" : "muted"}>{cOpen} open</Pill>
                  <Pill tone={cDone ? "ok" : "muted"}>{cDone} in place</Pill>
                </div>
                <div style={{ display: "flex", gap: 12 }}>
                  <a href={`/app/clients/${c.id}`} style={{ fontSize: 13, fontWeight: 600, color: "var(--accent)" }}>
                    Open →
                  </a>
                  <a href={`/app/export/${c.id}`} style={{ fontSize: 13, fontWeight: 600, color: "var(--accent)" }}>
                    Export CSV ↓
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}
