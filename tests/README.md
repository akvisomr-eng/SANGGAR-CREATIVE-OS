# Release verification

Run locally with Python:

python tests/test_site.py

Release gate:
1. Static integrity checks pass.
2. No secret material is committed.
3. GitHub CI passes.
4. Render deploy reaches live.
5. Production smoke check returns HTTP 200.
6. Error logs are empty for the initial observation window.
7. Security headers and HTTPS are verified.
8. Rollback path is known before production changes.
