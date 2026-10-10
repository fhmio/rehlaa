# Rehlaa project instructions
## Verified facts
- Monorepo uses pnpm@9.0.0 and Turborepo. Inspect manifests before assuming commands.
- Inspected main tree contains apps/web and packages/{api,config,icons,theme,ui-web,utils}. README/Cursor rules mention apps/admin, apps/admin-mobile, packages/ui-native, but these paths were absent from the inspected tree; do not assume they exist.
- packages/api contains shared Zod schemas/SDK, not proof of a separately deployed API service.
- Root scripts are dev/build/typecheck/lint/test. Inspected app/package manifests did not provide test scripts consistently.
- Changesets was previously mentioned but no configuration was found in the inspected tree.
- Read relevant .cursor/rules/*.mdc, source, tests, manifests, specs, and decisions before editing.
## Mandatory workflow
1. Inline Execution only; work sequentially. Do not offer subagent-driven or parallel-agent implementation.
2. Behavior changes use RED → GREEN → REFACTOR and must observe the intended failing test first.
3. For skill changes, record baseline scenarios before editing and rerun afterward. Static checks do not prove model behavior.
4. Diagnose failures from evidence and root cause.
5. Never claim a command passed unless run and output inspected. List blocked/unrun checks.
6. Never invent endpoints, roles, transitions, payment/data rules, package paths, or commands. Record gaps.
7. Respect TypeScript, Zod/API, UI, security, RTL/accessibility, and Git rules in .cursor/rules/.
8. Review changes against spec and evidence; do not invent findings.
9. Branch finishing and product release are separate. Shared pushes, merges, publishing, or releases require explicit authorization.
## Scope guard
This skills-system change does not authorize product feature work or creating/removing apps. Check approved scope and actual tree.
## Completion
Run applicable checks and report Passed / Failed / Blocked / Not run. Do not claim full verification from a scoped check.