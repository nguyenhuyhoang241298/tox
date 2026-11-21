# CLAUDE.md

- Docs live in `docs/` (spec, architecture, design). Start with `docs/README.md`.
- UI work in `web/` MUST follow `docs/design/DESIGN.md`. Read it before creating or editing any
  component: use only semantic tokens from `web/src/app/styles/index.css`, reuse
  `web/src/shared/ui`, no hardcoded colors (`pnpm check:tokens` enforces it).
