---
name: rehla-api-design
description: Use when adding or changing Rehla API routes, request/response schemas, error behavior, or shared SDK contracts.
---

# Rehla API design
Read .cursor/rules/08-api-rest-prisma.mdc and inspect existing handlers and packages/api/src/schemas.ts.
- Validate untrusted input at boundaries with established Zod conventions.
- Keep request/response contracts typed; do not return raw database objects.
- Follow documented normalized errors { code, message, details? } and status mapping where applicable; verify actual consumers.
- Test valid, invalid, unauthorized, not-found, conflict, and failure cases as relevant.
- Update affected consumers when shared contracts change.
- Do not invent route paths or error semantics; unresolved requirements block the affected contract change.
