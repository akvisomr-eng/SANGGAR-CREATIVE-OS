# SANGGAR Creative Asset Intelligence

SANGGAR adopts the useful architecture behind neutraltone/awesome-stock-resources as a Creative Asset Discovery & Rights Intelligence layer. The upstream repository is a curated directory of photography, illustration, vector graphics, video, patterns, textures, fonts, icons, colors, templates, sound/music and paid resources. SANGGAR uses these categories as a structured discovery model, not as a source for copying or redistributing third-party assets.

## Core pipeline

CREATIVE INTENT
→ SEARCH / DISCOVER
→ ASSET CANDIDATES
→ LICENSE / RIGHTS CHECK
→ STYLE / QUALITY ANALYSIS
→ SAVE REFERENCE
→ USE IN PROJECT
→ PROVENANCE / ATTRIBUTION
→ EVIDENCE / PORTFOLIO

## Asset taxonomy

SANGGAR normalizes external creative resources into:
- Photography
- Illustration
- Vector
- Video
- Pattern
- Texture
- Font
- Icon
- Color / Palette
- HTML / UI Template
- Sound / Music
- 3D / Material (future)
- AI-generated asset (future)

Every external asset reference should support:
asset_id, source_url, provider, asset_type, title, creator, license_type, license_url, attribution_required, commercial_use, modification_allowed, redistribution_allowed, retrieved_at, provenance, project_usage.

## Rights Intelligence — P1

A resource being listed in a stock directory does not mean every individual asset is safe for every use. SANGGAR should therefore never label an asset simply as "free".

Use states:
- verified_open
- attribution_required
- commercial_restriction
- custom_license
- unknown
- review_required

For marketplace, client work, paid courses and commercial creator projects, unknown and review_required should trigger human review.

## Creative Asset Search — P1

The existing Semantic Data Search evolves into:

CREATOR INTENT
→ ASSET TYPE
→ STYLE
→ COLOR
→ SUBJECT
→ LICENSE REQUIREMENT
→ COMMERCIAL USE
→ LANGUAGE / REGION
→ QUALITY
→ RESULTS

Example intent: "background video futuristik untuk landing page kursus, boleh komersial" becomes filters for video, futuristic, web/hero background, commercial use, verified license and quality threshold.

## SANGGAR Creative Library — P1

Add a personal/project asset library that stores references and user-owned uploads, not unauthorized copies.

Collections:
- My Assets
- Saved References
- Project Assets
- Brand Assets
- Academy Assets
- Marketplace Assets
- Audio
- Video
- Illustration
- Templates
- Fonts
- Icons

## Provenance

Every asset used in a creator project should be traceable:

ASSET
→ SOURCE
→ LICENSE
→ CREATOR
→ PROJECT
→ OUTPUT

This matters when an asset becomes part of a portfolio, client deliverable, course or marketplace submission.

## AI Creative Copilot integration

BRIEF
→ UNDERSTAND STYLE
→ GENERATE ASSET REQUIREMENTS
→ SEARCH
→ FILTER RIGHTS
→ RANK
→ CREATOR SELECTS
→ ATTACH TO PROJECT

AI must not claim a license unless license metadata has actually been checked.

## Creator Economy integration

Free:
- basic asset discovery
- saved references
- limited collections

Creator:
- advanced search
- project asset management
- license/provenance records
- AI asset recommendations

Pro / Studio:
- brand asset libraries
- team collections
- rights workflow
- client/project asset packs
- commercial-use governance
- automated provenance

## Creative Passport integration

PROJECT
→ ASSETS USED
→ TECHNIQUES
→ CREATOR CONTRIBUTION
→ EVIDENCE
→ PORTFOLIO
→ CREATIVE PASSPORT

The creator's own contribution must remain distinguishable from third-party assets.

## Integration with existing SANGGAR layers

AWESOME STOCK RESOURCES
→ ASSET TAXONOMY
→ CREATIVE ASSET INTELLIGENCE
→ SEARCH + RIGHTS + PROVENANCE
→ CREATIVE COPILOT
→ PROJECT / PORTFOLIO
→ EVIDENCE
→ CREATIVE PASSPORT

## Governance rule

SANGGAR should link/discover first, download only when the provider's terms permit it, and preserve license/provenance metadata. The upstream catalog is CC0, but the assets it links to have different licenses, including CC0, public domain, attribution, custom and unspecified terms.

This prevents the Creative OS from turning asset discovery into a copyright-risk engine.
