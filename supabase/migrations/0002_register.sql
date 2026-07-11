-- 0002_register.sql — Registry (apps/register): multi-tenant AI deployment register.
-- Shape: one agency org → many client workspaces → many AI systems → duties → evidence.
-- Normalizes the 13-column register in products/ai-act-deployer-pack/04-compliance-register.md.
--
-- Security model (real per-org RLS, zero service-role dependence on user paths):
--   * Every policy chains to org membership anchored on auth.uid().
--   * reg_members SELECT is deliberately just `uid = auth.uid()` — terminal, so the
--     membership subqueries used by every other table cannot recurse (they only ever
--     need the caller's own membership rows, which that policy exposes).
--   * reg_evidence is APPEND-ONLY: SELECT + INSERT policies only. UPDATE/DELETE policies
--     are intentionally absent AND the privileges are revoked from `authenticated`.
--   * No user-facing DELETE anywhere below (corrections supersede, never overwrite —
--     the append-only operating rule is what makes the register credible as evidence).
--   * anon: nothing. All policies are `to authenticated`; anon privileges revoked.

-- ---------------------------------------------------------------------------
-- Tables
-- ---------------------------------------------------------------------------

create table if not exists reg_orgs (
  id         uuid primary key default gen_random_uuid(),
  name       text not null check (char_length(name) between 1 and 200),
  owner_uid  uuid not null default auth.uid(),
  created_at timestamptz not null default now()
);

create table if not exists reg_members (
  org_id     uuid not null references reg_orgs (id) on delete cascade,
  uid        uuid not null,
  role       text not null default 'member' check (role in ('owner', 'member')),
  created_at timestamptz not null default now(),
  primary key (org_id, uid)
);
create index if not exists reg_members_uid_idx on reg_members (uid);

create table if not exists reg_clients (
  id         uuid primary key default gen_random_uuid(),
  org_id     uuid not null references reg_orgs (id) on delete cascade,
  name       text not null check (char_length(name) between 1 and 200),
  market     text[] not null default '{}',
  created_at timestamptz not null default now()
);
create index if not exists reg_clients_org_idx on reg_clients (org_id);

create table if not exists reg_systems (
  id                   uuid primary key default gen_random_uuid(),
  client_id            uuid not null references reg_clients (id) on delete cascade,
  name                 text not null check (char_length(name) between 1 and 300),
  vendor_model         text,
  role                 text not null check (role in ('deployer', 'provider', 'out-of-scope')),
  classification_basis text,
  status               text not null default 'active',
  created_at           timestamptz not null default now()
);
create index if not exists reg_systems_client_idx on reg_systems (client_id);

create table if not exists reg_duties (
  id          uuid primary key default gen_random_uuid(),
  system_id   uuid not null references reg_systems (id) on delete cascade,
  jurisdiction text not null,
  obligation  text not null,
  module      text,
  due_date    date,
  status      text not null default 'open' check (status in ('open', 'in-place', 'n/a')),
  source_url  text,
  created_at  timestamptz not null default now()
);
create index if not exists reg_duties_system_idx on reg_duties (system_id);

create table if not exists reg_evidence (
  id           uuid primary key default gen_random_uuid(),
  duty_id      uuid not null references reg_duties (id) on delete cascade,
  note         text not null check (char_length(note) between 1 and 4000),
  evidence_url text,
  logged_by    uuid not null default auth.uid(),
  logged_at    timestamptz not null default now()
);
create index if not exists reg_evidence_duty_idx on reg_evidence (duty_id);

-- ---------------------------------------------------------------------------
-- Owner membership bootstrap: creating an org seeds its owner membership row
-- atomically, so the membership chain exists before any follow-up query.
-- SECURITY DEFINER (owner: migration role) with a pinned search_path; executes
-- only as a trigger — direct execution is revoked below.
-- ---------------------------------------------------------------------------

create or replace function reg_seed_owner_membership()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into reg_members (org_id, uid, role)
  values (new.id, new.owner_uid, 'owner')
  on conflict (org_id, uid) do nothing;
  return new;
end;
$$;

revoke execute on function reg_seed_owner_membership() from public, anon, authenticated;

drop trigger if exists reg_orgs_seed_owner on reg_orgs;
create trigger reg_orgs_seed_owner
  after insert on reg_orgs
  for each row execute function reg_seed_owner_membership();

-- ---------------------------------------------------------------------------
-- Row Level Security
-- ---------------------------------------------------------------------------

alter table reg_orgs     enable row level security;
alter table reg_members  enable row level security;
alter table reg_clients  enable row level security;
alter table reg_systems  enable row level security;
alter table reg_duties   enable row level security;
alter table reg_evidence enable row level security;

-- reg_orgs ------------------------------------------------------------------
create policy reg_orgs_select on reg_orgs
  for select to authenticated
  using (
    owner_uid = auth.uid()
    or exists (
      select 1 from reg_members m
      where m.org_id = reg_orgs.id and m.uid = auth.uid()
    )
  );

create policy reg_orgs_insert on reg_orgs
  for insert to authenticated
  with check (owner_uid = auth.uid());

create policy reg_orgs_update on reg_orgs
  for update to authenticated
  using (owner_uid = auth.uid())
  with check (owner_uid = auth.uid());
-- no delete policy: orgs are not user-deletable in v1.

-- reg_members ---------------------------------------------------------------
-- SELECT is self-only and TERMINAL (no table references) — this is what keeps
-- every other table's `exists (select 1 from reg_members ...)` chain from
-- recursing, while still resolving correctly (those chains only ever test the
-- caller's own membership).
create policy reg_members_select_self on reg_members
  for select to authenticated
  using (uid = auth.uid());

-- Org owners add members (the seed trigger covers the owner's own row).
create policy reg_members_insert_by_owner on reg_members
  for insert to authenticated
  with check (
    exists (
      select 1 from reg_orgs o
      where o.id = reg_members.org_id and o.owner_uid = auth.uid()
    )
  );

-- Leave an org yourself, or the org owner removes a member.
create policy reg_members_delete on reg_members
  for delete to authenticated
  using (
    uid = auth.uid()
    or exists (
      select 1 from reg_orgs o
      where o.id = reg_members.org_id and o.owner_uid = auth.uid()
    )
  );
-- no update policy: role changes beyond owner/member are out of scope for v1.

-- reg_clients ---------------------------------------------------------------
create policy reg_clients_select on reg_clients
  for select to authenticated
  using (
    exists (
      select 1 from reg_members m
      where m.org_id = reg_clients.org_id and m.uid = auth.uid()
    )
  );

create policy reg_clients_insert on reg_clients
  for insert to authenticated
  with check (
    exists (
      select 1 from reg_members m
      where m.org_id = reg_clients.org_id and m.uid = auth.uid()
    )
  );

create policy reg_clients_update on reg_clients
  for update to authenticated
  using (
    exists (
      select 1 from reg_members m
      where m.org_id = reg_clients.org_id and m.uid = auth.uid()
    )
  )
  with check (
    exists (
      select 1 from reg_members m
      where m.org_id = reg_clients.org_id and m.uid = auth.uid()
    )
  );
-- no delete policy.

-- reg_systems ---------------------------------------------------------------
create policy reg_systems_select on reg_systems
  for select to authenticated
  using (
    exists (
      select 1
      from reg_clients c
      join reg_members m on m.org_id = c.org_id
      where c.id = reg_systems.client_id and m.uid = auth.uid()
    )
  );

create policy reg_systems_insert on reg_systems
  for insert to authenticated
  with check (
    exists (
      select 1
      from reg_clients c
      join reg_members m on m.org_id = c.org_id
      where c.id = reg_systems.client_id and m.uid = auth.uid()
    )
  );

create policy reg_systems_update on reg_systems
  for update to authenticated
  using (
    exists (
      select 1
      from reg_clients c
      join reg_members m on m.org_id = c.org_id
      where c.id = reg_systems.client_id and m.uid = auth.uid()
    )
  )
  with check (
    exists (
      select 1
      from reg_clients c
      join reg_members m on m.org_id = c.org_id
      where c.id = reg_systems.client_id and m.uid = auth.uid()
    )
  );
-- no delete policy.

-- reg_duties ----------------------------------------------------------------
create policy reg_duties_select on reg_duties
  for select to authenticated
  using (
    exists (
      select 1
      from reg_systems s
      join reg_clients c on c.id = s.client_id
      join reg_members m on m.org_id = c.org_id
      where s.id = reg_duties.system_id and m.uid = auth.uid()
    )
  );

create policy reg_duties_insert on reg_duties
  for insert to authenticated
  with check (
    exists (
      select 1
      from reg_systems s
      join reg_clients c on c.id = s.client_id
      join reg_members m on m.org_id = c.org_id
      where s.id = reg_duties.system_id and m.uid = auth.uid()
    )
  );

create policy reg_duties_update on reg_duties
  for update to authenticated
  using (
    exists (
      select 1
      from reg_systems s
      join reg_clients c on c.id = s.client_id
      join reg_members m on m.org_id = c.org_id
      where s.id = reg_duties.system_id and m.uid = auth.uid()
    )
  )
  with check (
    exists (
      select 1
      from reg_systems s
      join reg_clients c on c.id = s.client_id
      join reg_members m on m.org_id = c.org_id
      where s.id = reg_duties.system_id and m.uid = auth.uid()
    )
  );
-- no delete policy.

-- reg_evidence — APPEND-ONLY ------------------------------------------------
create policy reg_evidence_select on reg_evidence
  for select to authenticated
  using (
    exists (
      select 1
      from reg_duties d
      join reg_systems s on s.id = d.system_id
      join reg_clients c on c.id = s.client_id
      join reg_members m on m.org_id = c.org_id
      where d.id = reg_evidence.duty_id and m.uid = auth.uid()
    )
  );

create policy reg_evidence_insert on reg_evidence
  for insert to authenticated
  with check (
    logged_by = auth.uid()
    and exists (
      select 1
      from reg_duties d
      join reg_systems s on s.id = d.system_id
      join reg_clients c on c.id = s.client_id
      join reg_members m on m.org_id = c.org_id
      where d.id = reg_evidence.duty_id and m.uid = auth.uid()
    )
  );
-- NO update policy. NO delete policy. Append-only by construction.

-- ---------------------------------------------------------------------------
-- Privilege hardening (belt-and-braces on top of RLS)
-- ---------------------------------------------------------------------------

-- anon gets nothing, ever — even if a permissive policy is added later.
revoke all on reg_orgs, reg_members, reg_clients, reg_systems, reg_duties, reg_evidence from anon;

-- Append-only / no-delete enforced at the privilege layer too: a future sloppy
-- policy cannot re-open these paths for authenticated users.
revoke update, delete on reg_evidence from authenticated;
revoke delete on reg_orgs, reg_clients, reg_systems, reg_duties from authenticated;
revoke update on reg_members from authenticated;
