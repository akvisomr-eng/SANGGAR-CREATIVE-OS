from pathlib import Path
import re

root=Path(__file__).parents[1]
html=(root/"index.html").read_text()
css=(root/"styles.css").read_text()
js=(root/"app.js").read_text()

assert "<!doctype html>" in html.lower()
assert 'data-sanggar-companion="public"' in html
assert "companion.js?v=4" in html
assert (root/"companion.js").exists()
assert 'lang="id"' in html
assert '<meta name="viewport"' in html
assert '<meta name="description"' in html
assert '<meta name="robots" content="index,follow">' in html
assert '<link rel="canonical"' in html
assert '<script src="app.js" defer></script>' in html
for asset in re.findall(r'(?:href|src)="([^"#][^"]*)', html):
    if asset.startswith(("http://","https://","mailto:","tel:")):
        continue
    path=asset.split("?",1)[0].split("#",1)[0]
    assert (root/path).exists(), f"missing asset: {asset}"
assert "javascript:" not in html.lower()
assert "innerHTML" not in js
assert "Identity → Data → Workflow → Intelligence → Economy" in html
assert "Learn → Create → Prove → Work → Grow → Evolve" not in html
assert "Belajar. Berkarya." not in html
assert "assets/hero-visual.svg" in html
assert (root/"assets/hero-visual.svg").exists()

app=(root/"app.html").read_text()
assert "createClient" in app
assert "SUPABASE_KEY" in app
assert "creator_submission_packages" in app
assert "creative_passports" in app
assert "learning_enrollments" in app
assert "portfolios" in app
assert "evidence_records" in app
assert "creative_asset_assessments" in app
assert "new-portfolio" in app
assert "new-passport" in app
assert "new-evidence" in app
assert "run-assessment" in app
assert "creative-marketplace-evaluator" in app
assert "export-package" in app
assert "publish-work" not in app
assert "creator_gallery_items" in app
assert 'id="works"' in app
assert "source_kind:"creator_asset"" in app
assert "asset_id:asset.id" in app
assert "preview_url:pub.publicUrl" in app
assert "prompt(\"Preview URL" not in app
assert "portfolio_items" in app
assert "passport_items" in app
assert "2.57.4" in app
assert "emailRedirectTo:PRODUCTION_APP_URL" in app
assert "PRODUCTION_APP_URL=\"https://akvisomr-eng.github.io/SANGGAR-CREATIVE-OS/app.html\"" in app
assert "history.replaceState" in app
assert 'data-sanggar-companion="workspace"' in app
assert "companion.js?v=4" in app
assert "project_output" in app
assert "needs_human_review" in app
assert "position:sticky" in css
for required in ["academy.html","gallery.html","journey.html","app.html","404.html","robots.txt","sitemap.xml",".well-known/security.txt"]:
    assert (root/required).exists(), f"missing required asset: {required}"
print("SANGGAR static quality checks: PASS")


def test_gallery_categories_are_actionable():
    html=(root/"gallery.html").read_text(encoding="utf-8")
    for category in ["3d","photo","design","motion","audio"]:
        assert f"gallery.html?category={category}" in html
    assert "data-category=\"3d\"" in html
    assert "new URLSearchParams(location.search)" in html


def test_gallery_demo_integrity():
    gallery=(root/"gallery.html").read_text(encoding="utf-8")
    assert "25 contoh karya" in gallery
    assert "All · 25" not in gallery
    assert "3D · 5" not in gallery
    assert "Photo · 5" not in gallery
    assert "Design · 5" not in gallery
    assert "Motion · 5" not in gallery
    assert "Audio · 5" not in gallery
    assert "loremflickr.com" not in gallery
    assert "images.unsplash.com" in gallery
    work=(root/"work.html").read_text(encoding="utf-8")
    assert "Creator Work Control Center" in work
    assert "creative_asset_assessments" in work
    assert "creator_submission_packages" in work
    assert "passport_items" in work
    assert "portfolio_id" in work
    assert "companion.js?v=4" in work
    assert "source_reference_id" in work
    for category in ["3d","photo","design","motion","audio"]:
        assert len(re.findall(rf'{category}:\[', gallery)) == 1
    assert gallery.count("images.unsplash.com") >= 26
