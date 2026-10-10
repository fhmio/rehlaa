---
name: rehla-development
description: Use when starting or continuing Rehla work when routing, scope, facts, or decisions are unclear.
---

# Rehla Development — Entry Gate

## Mandatory rule

**Before any response or action on Rehla work—including clarifying questions—load applicable skills** before exploring the codebase or inspecting files. Skills are **mandatory, not optional**; inspect triggers first.

Use the runtime loader; read each full applicable `SKILL.md` and reference. Reading is not invocation. If a required skill/reference is inaccessible, stop the affected work; report the blocker; do not pretend it was invoked.

## Before acting

1. Inspect available runtime/repository skills; load process skills first.
2. Read `AGENTS.md`, applicable `.cursor/rules`, specs/decisions, and needed source/tests/manifests. Verify paths and commands exist.
3. User instructions take precedence unless safety/binding rules conflict; preserve approved decisions and data integrity.
4. Apply `rehla-karpathy-guidelines`; separate confirmed facts, approved decisions, and unknowns.

## Route the task

- **Unclear/conflicting requirements:** `rehla-specification`; define outcome, criteria, gaps first.
- **Multi-step/cross-file:** `rehla-planning`; map paths/interfaces, dependencies, RED/GREEN tests, coverage.
- **Approved plan:** `rehla-executing-plans` (+ `executing-plans`); inline/sequential only—never offer delegated or parallel implementation.
- **Behavior/bug/contract/refactor:** `rehla-tdd` (+ `test-driven-development`); observe RED, change minimally, verify GREEN, run regressions.
- **Failure/flaky output:** `rehla-systematic-debugging`; find root cause first.
- **API/database/auth/security/observability:** load domain skills; verify implementation. **Never infer deployed services, roles/permissions, state transitions, payment rules, or retention policy from names or schemas.**
- **Skill edits:** `writing-skills` + `rehla-skill-authoring`; record baseline scenarios before editing and rerun them afterward; report behavioral-evaluation status.
- **Review/completion:** `rehla-code-review` + `rehla-verification`; check criteria against evidence.
- **Branch/release:** authorized skill only; branch completion does not authorize merge/release.

**Sequence:** load skills → inspect evidence → specify unresolved requirements → plan if multi-step → implement with TDD → review → verify → branch/release if authorized.

## Red Flags — STOP and Re-check

| Thought | Reality |
|---|---|
| “Simple question or tiny task.” | Gate still applies. |
| “Need more context” / “explore the codebase first.” | Load skills before inspection. |
| “I remember this skill” / “the description is enough.” | Read full current skill/references. |
| “Urgent, familiar, or overkill.” | No exception; report unrun checks. |
| “The repo probably has this path, role, endpoint, or transition.” | Verify; names and schemas are not policy. |
| “The file exists, so runtime uses it.” | Presence on disk does not prove auto-invocation; test runtime loader/bootstrap with an acceptance test. |
| “Structural test passed, so the skill works.” | Static checks prove document structure, not model behavior; evaluation **Not run** if unavailable. |

## Unknowns and completion

For missing/conflicting rules, record the gap and **stop the affected behavior**; continue read-only work. Ask only for essential information. Never invent product rules, paths, or commands. Report **Passed**, **Failed**, **Blocked**, or **Not run**, with files, results, and limits. A scenario file does not prove it ran. Test loading/routing in a clean-session runtime acceptance test or mark **Not run**.

## References

`references/architecture-map.md` · `references/module-boundaries.md` · `references/coding-standards.md` · `references/api-contracts.md` · `references/security-and-data-rules.md` · `references/testing-policy.md` · `references/git-and-release-policy.md` · `../rehla-karpathy-guidelines/references/karpathy-examples.md`
