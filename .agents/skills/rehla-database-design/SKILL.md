---
name: rehla-database-design
description: Use when changing persistent data models, migrations, indexes, relations, constraints, or transaction behavior.
---

# Rehla database design
Inspect approved data specs, actual ORM dependencies, schema files, migrations, and tests. Cursor rules mention Prisma, but no schema/migration path was present in the inspected tree; verify before assuming it is active.
- Derive ownership, relations, nullability, constraints, indexes, retention, and deletion from approved requirements.
- Document migration order and compatibility.
- Use transactions where supported and required for atomic multi-step writes.
- Test constraints and migrations where infrastructure exists.
- Destructive migrations require explicit approval and recovery plan.
- Never infer state transitions/payment rules from a TypeScript enum.
