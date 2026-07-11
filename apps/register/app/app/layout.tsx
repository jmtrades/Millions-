import { SignOutButton } from "./_components/auth";

// Chrome only — the auth guard lives in each data page (guard() in lib/supabase/server),
// so navigation can never render stale auth state.
export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ maxWidth: 1020, margin: "0 auto", padding: "0 20px 80px" }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 0",
          borderBottom: "1px solid var(--border)",
          marginBottom: 28,
        }}
      >
        <a href="/app" style={{ fontWeight: 800, fontSize: 17, textDecoration: "none" }}>
          Registry
        </a>
        <nav style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <a href="/" style={{ fontSize: 13, color: "var(--muted)", textDecoration: "none" }}>
            Site
          </a>
          <SignOutButton />
        </nav>
      </header>
      {children}
      <footer style={{ marginTop: 48, paddingTop: 16, borderTop: "1px solid var(--border)" }}>
        <p style={{ fontSize: 12, color: "var(--muted)", maxWidth: 720 }}>
          Registry is record-keeping software with citations to primary legal sources — not legal
          advice. Classifications and exports should be reviewed by qualified counsel. The evidence
          log is append-only: corrections supersede, never overwrite.
        </p>
      </footer>
    </div>
  );
}
