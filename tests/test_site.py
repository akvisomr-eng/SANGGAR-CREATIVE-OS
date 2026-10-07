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
assert '<script src="/app.js" defer></script>' in html
for asset in re.findall(r'(?:href|src)="(/[^"]+)', html):
    if asset.startswith("//"): continue
    assert (root/asset.lstrip("/")).exists(), f"missing asset: {asset}"
assert "javascript:" not in html.lower()
assert "innerHTML" not in js
assert "position:sticky" in css
print("SANGGAR static quality checks: PASS")
