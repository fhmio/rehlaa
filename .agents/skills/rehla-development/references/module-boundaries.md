# Workspace boundaries
- apps/web owns current web routes/UI.
- packages/api owns shared Zod schemas and lightweight SDK.
- packages/config owns shared tool configuration.
- packages/ui-web, theme, icons, and utils own shared web UI, tokens, icons, and utilities according to checked-in paths.
- Do not treat packages/api as a deployed backend without verifying runtime/deployment configuration.
- No dedicated domain/database package was identified in the inspected tree. Derive boundaries from actual source and approved decisions.
- Keep skill documents in .agents/skills; do not create product packages to host them.
