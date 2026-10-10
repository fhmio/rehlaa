---
name: rehla-backend-architecture
description: Use when changing where server-side logic, API handlers, or shared package responsibilities belong in Rehla.
---

# Rehla backend and package boundaries
- Inspect the actual tree before naming a service/package. The inspected tree had apps/web and packages/api; packages/api contains shared schemas/SDK and does not prove a deployed API service exists.
- Preserve workspace/import boundaries; avoid new packages without approved ownership and consumers.
- Keep route-specific behavior in its actual owning runtime; shared contracts in the established shared package where appropriate.
- Document affected consumers and test boundaries before structural changes.
- Do not introduce microservices/apps by implication. Verify real build/typecheck/test scripts.
