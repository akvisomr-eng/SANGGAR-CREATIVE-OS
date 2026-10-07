# Digital Locker & Creative Project OS

## Role

This layer is the shared workspace foundation for SANGGAR CREATIVE OS.

It connects:

**Identity → Locker → Project → Asset → Evidence → Portfolio → Learning → Marketplace → Career**

## Digital Locker

The locker is a governed personal/organizational data container.

It stores metadata and references for:

- documents
- images
- video
- audio
- designs
- code
- certificates
- credentials
- evidence
- contracts
- identity-related artifacts

The database stores ownership, classification, metadata, checksum and storage references. Binary storage policy remains separate so the application can evolve without changing domain ownership.

Classification:

- private
- shared
- public
- restricted

Default is private.

## Creative Project OS

A project is a reusable unit of work that can later become:

- learning activity
- portfolio project
- client project
- evidence source
- marketplace deliverable
- professional case study
- business operation

Project membership is explicit and role-based.

Project roles:

- owner
- manager
- mentor
- contributor
- reviewer
- viewer

## Security

Every exposed table uses RLS.

Access is scoped by authenticated user ownership or active organization/project membership.

No client may use service-role credentials.

## Design principle

Do not duplicate the same file/project for each product module.

A single governed project and asset can be referenced by multiple downstream workflows through relationships and evidence provenance.

## Next

The next layer should introduce:

1. learning objects and learning paths
2. competencies and skill graph
3. evidence records
4. Creative Passport
5. provenance and verification

Only after those primitives are stable should marketplace/career automation depend on them.
