---
name: rehla-development
description: Use when starting work in Rehlaa, choosing a workflow, or when task scope, repository state, or an approved decision is unclear.
---

# Rehla Development — Entry and Routing

Entry point for routing Rehla tasks to their detailed workflows.

## Before acting

1. Inspect available runtime skill descriptions and `.agents/skills/`; load the full applicable `SKILL.md` and required references before acting. Use the runtime loader if available; reading a file is not runtime invocation.
2. Read `AGENTS.md`, relevant existing `.cursor/rules/*.mdc`, approved specs/decisions, and necessary source/tests/manifests. Verify paths and commands exist.
3. Apply `rehla-karpathy-guidelines` for ambiguity, scope, simplicity, surgical changes, and observable success. Never weaken approved requirements, TDD, security, privacy, authorization, or data integrity.
4. Separate **confirmed facts**, **approved decisions**, and **unknowns/conflicts**. Preserve evidence; don't turn inference into fact or silently reconcile sources.

## Route the task

| Signal | Required workflow |
|---|---|
| Ambiguous requirements, new behavior, conflicting sources | `rehla-specification` and design guidance first; define outcome, criteria, constraints, and decision gaps before planning. |
| Multiple dependent steps/files/packages | `rehla-planning` (plus `writing-plans` if installed); list real paths/interfaces, dependencies, test commands, intended RED/GREEN, and requirement coverage. |
| Approved implementation plan | `rehla-executing-plans` (plus `executing-plans` if installed); execute **inline and sequentially**; never offer delegated, subagent, or parallel implementation. |
| Behavior change, bug fix, contract change, refactor | `rehla-tdd` and applicable `test-driven-development`; confirm intended RED, make the smallest change, verify GREEN, run regressions. |
| Defect, failed or flaky test, unexpected output | `rehla-systematic-debugging` and applicable debugging guidance; establish root cause before fixing. |
| API, database, auth/security, observability, package boundaries | Load relevant domain skills/rules and verify paths. Never infer deployed services, roles/permissions, state transitions, payment rules, or retention policy from names or schemas. |
| Create/edit/validate a skill | `writing-skills` and `rehla-skill-authoring`; record baseline scenarios before editing and rerun them afterward. |
| Review or completion claim | `rehla-code-review` and `rehla-verification` as applicable; check requirements and code quality against evidence. |
| Branch disposition or release | Use the matching skill only when in scope and authorized. Branch completion does not authorize merging, publishing, or releasing. |

For mixed tasks, order the work: **load context/skills → specify unresolved requirements → plan if multi-step → implement with TDD where behavior changes → review → verify → branch/release only if authorized**.

## Unknowns and completion

If a required rule is missing or approved sources conflict, record the gap and stop the affected behavior only; continue independent read-only work. Ask one focused question only if needed and not answered in approved sources. Use real manifests/scripts, map each change to acceptance criteria/tests, and never weaken security or integrity controls.

Report **Passed**, **Failed**, **Blocked**, or **Not run**, with changed files, commands and observed results, limitations, and unresolved decisions. Never claim a command or runtime action occurred without evidence. Static checks prove document structure, **not model behavior**; if no skill-enabled evaluator is available, mark behavioral scenarios **Not run**.

## References

`references/architecture-map.md` · `references/module-boundaries.md` · `references/coding-standards.md` · `references/api-contracts.md` · `references/security-and-data-rules.md` · `references/testing-policy.md` · `references/git-and-release-policy.md` · `../rehla-karpathy-guidelines/references/karpathy-examples.md`
