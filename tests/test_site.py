from pathlib import Path
import re

root=Path(__file__).parents[1]
html=(root/"index.html").read_text()
css=(root/"styles.css").read_text()
js=(root/"app.js").read_text()

assert "<!doctype html>" in html.lower()
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
assert "publish-work" in app
assert "creator_gallery_items" in app
assert "portfolio_items" in app
assert "passport_items" in app
assert "2.57.4" in app
assert "project_output" in app
assert "needs_human_review" in app
assert "position:sticky" in css
for required in ["academy.html","gallery.html","journey.html","app.html","404.html","robots.txt","sitemap.xml",".well-known/security.txt"]:
    assert (root/required).exists(), f"missing required asset: {required}"
print("SANGGAR static quality checks: PASS")
