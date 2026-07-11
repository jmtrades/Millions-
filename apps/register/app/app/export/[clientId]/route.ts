import { NextResponse } from "next/server";
import { guard } from "../../../../lib/supabase/server";

export const dynamic = "force-dynamic";

// CSV export in the canonical 13-column register format
// (products/ai-act-deployer-pack/04-compliance-register.md §3):
// row_id,client,system,role_classification,duty,control_deployed,date_deployed,
// evidence_link,source_cited,reviewer,review_date,status,notes
//
// Normalization: one row per duty; control fields come from the LATEST evidence
// entry (the log itself stays append-only in the app). Systems with zero duties
// emit a dated scope-out row — absence from the register is the first audit finding.

const HEADER = [
  "row_id",
  "client",
  "system",
  "role_classification",
  "duty",
  "control_deployed",
  "date_deployed",
  "evidence_link",
  "source_cited",
  "reviewer",
  "review_date",
  "status",
  "notes",
] as const;

const esc = (v: string) => (/[",\n\r]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v);

const STATUS_MAP: Record<string, string> = {
  open: "pending",
  "in-place": "live",
  "n/a": "n/a-documented",
};

type EvidenceRow = { note: string; evidence_url: string | null; logged_by: string; logged_at: string };
type DutyRow = {
  id: string;
  jurisdiction: string;
  obligation: string;
  module: string | null;
  due_date: string | null;
  status: string;
  source_url: string | null;
  reg_evidence: EvidenceRow[];
};
type SystemRow = {
  id: string;
  name: string;
  vendor_model: string | null;
  role: string;
  classification_basis: string | null;
  status: string;
  created_at: string;
  reg_duties: DutyRow[];
};
type ClientRow = { id: string; name: string; reg_systems: SystemRow[] };

export async function GET(_req: Request, { params }: { params: Promise<{ clientId: string }> }) {
  const g = await guard();
  if (g.state === "no-env") return NextResponse.json({ error: "auth not configured" }, { status: 503 });
  if (g.state === "signed-out") return NextResponse.json({ error: "sign in required" }, { status: 401 });
  const { clientId } = await params;

  const { data } = await g.supabase
    .from("reg_clients")
    .select(
      "id,name,reg_systems(id,name,vendor_model,role,classification_basis,status,created_at," +
        "reg_duties(id,jurisdiction,obligation,module,due_date,status,source_url," +
        "reg_evidence(note,evidence_url,logged_by,logged_at)))"
    )
    .eq("id", clientId)
    .maybeSingle();
  const client = data as unknown as ClientRow | null;
  if (!client) return NextResponse.json({ error: "client not found or not accessible" }, { status: 404 });

  const today = new Date().toISOString().slice(0, 10);
  const reviewer = (uid: string) => (uid === g.user.id ? g.user.email || uid.slice(0, 8) : `member-${uid.slice(0, 8)}`);
  const plus90 = (iso: string) => {
    const d = new Date(`${iso.slice(0, 10)}T00:00:00Z`);
    d.setUTCDate(d.getUTCDate() + 90);
    return d.toISOString().slice(0, 10);
  };

  const lines: string[] = [HEADER.join(",")];
  const systems = [...client.reg_systems].sort((a, b) => a.created_at.localeCompare(b.created_at));

  for (const s of systems) {
    const systemLabel = s.vendor_model ? `${s.name} — ${s.vendor_model}` : s.name;
    const baseNotes = [s.status !== "active" ? `[system ${s.status}]` : null, s.classification_basis]
      .filter(Boolean)
      .join(" ");

    if (!s.reg_duties.length) {
      // Dated scope-out / no-duty row: "absence of a system from the register is
      // the finding auditors write up first" (04 §4).
      lines.push(
        [
          `REG-${s.id.slice(0, 8).toUpperCase()}`,
          client.name,
          systemLabel,
          `client=${s.role}`,
          s.role === "out-of-scope" ? "scope-out" : "none-seeded",
          "",
          s.created_at.slice(0, 10),
          "",
          "https://artificialintelligenceact.eu/article/2/",
          "",
          "",
          "n/a-documented",
          baseNotes || "Classified; no duties seeded.",
        ]
          .map(esc)
          .join(",")
      );
      continue;
    }

    const duties = [...s.reg_duties].sort((a, b) =>
      (a.due_date ?? "9999-12-31").localeCompare(b.due_date ?? "9999-12-31")
    );
    for (const d of duties) {
      const evidence = [...d.reg_evidence].sort((a, b) => b.logged_at.localeCompare(a.logged_at));
      const latest = evidence[0];
      const reviewDate =
        d.due_date && d.due_date >= today ? d.due_date : latest ? plus90(latest.logged_at) : "";
      const notes = [
        baseNotes,
        evidence.length > 1 ? `${evidence.length} evidence entries (latest shown; log is append-only)` : null,
      ]
        .filter(Boolean)
        .join(" · ");
      lines.push(
        [
          `REG-${d.id.slice(0, 8).toUpperCase()}`,
          client.name,
          systemLabel,
          `client=${s.role}`,
          `${d.jurisdiction} · ${d.obligation}${d.module ? ` [${d.module}]` : ""}`,
          latest?.note ?? "",
          latest ? latest.logged_at.slice(0, 10) : "",
          latest?.evidence_url ?? "",
          d.source_url ?? "",
          latest ? reviewer(latest.logged_by) : "",
          reviewDate,
          STATUS_MAP[d.status] ?? d.status,
          notes,
        ]
          .map(esc)
          .join(",")
      );
    }
  }

  const slug = client.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "client";
  return new NextResponse(lines.join("\r\n") + "\r\n", {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="register-${slug}-${today}.csv"`,
      "Cache-Control": "no-store",
    },
  });
}
