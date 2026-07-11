-- m_scoreboard: advisor flagged SECURITY DEFINER default. Make it invoker-rights
-- (queriers hit m_ tables' RLS: no policies -> zero rows) and revoke API roles.
alter view m_scoreboard set (security_invoker = true);
revoke all on m_scoreboard from anon, authenticated;
