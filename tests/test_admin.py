from pathlib import Path

root = Path(__file__).parents[1]
admin = (root / "admin.html").read_text(encoding="utf-8")

assert '<meta name="robots" content="noindex,nofollow">' in admin
assert "createClient" in admin
assert "signInWithPassword" in admin
assert "organization_members" in admin
assert "member_roles" in admin
assert "org_admin" in admin
assert "platform_owner" in admin
assert "ai_approvals" in admin
assert "operating_insights" in admin
assert "evolution_releases" in admin
assert "billing_invoices" in admin
assert "usage_events" in admin
assert "creator_gallery_items" in admin
assert "@supabase/supabase-js@2.57.4" in admin
assert "service_role" not in admin.lower()
print("SANGGAR admin dashboard checks: PASS")
