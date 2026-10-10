---
name: rehla-development
description: Use when starting or continuing work in the Rehlaa repository, especially when workflow choice, repository facts, scope, or approved decisions are uncertain.
---

# Rehla Development — Mandatory Entry Gate

The entry skill for Rehla work. It routes the task to the correct process and domain skills without inventing product rules.

## Non-negotiable rule

**Before any response or action on a Rehla repository task, check and load applicable skills**, including clarifying questions themselves. Check skills before exploring the codebase, inspecting project files, researching, planning, running commands, or editing. Applicable skills are **mandatory, not optional**. If there is even a credible possibility a skill applies, inspect its trigger and resolve applicability before proceeding.

Use the runtime's skill loader/invocation mechanism when available, then read the full applicable `SKILL.md` and required references. Reading a file is not the same as runtime invocation. If a required skill or reference is inaccessible, stop the affected workflow and report the exact blocker; do not pretend it was invoked or silently substitute memory for its content.

## Before acting

1. Inspect available runtime skills and `.agents/skills/`. Load process skills first, before implementation/domain skills; load every applicable skill, not just the first match.
2. Read `AGENTS.md`, relevant existing `.cursor/rules/*.mdc`, approved specifications/decisions, and only the source, tests, and manifests needed for this task. Verify paths and commands exist before relying on them.
3. User instructions take precedence over skill workflow details, subject to higher-priority safety constraints and binding repository rules. Respect approved Rehla decisions, specifications, and security/data-integrity policy. Skills define **how** to work; they do not authorize new product scope or override a binding constraint. Record conflicts instead of resolving them by guesswork.
4. Apply `rehla-karpathy-guidelines` to ambiguity, scope, simplicity, surgical changes, and observable success. Separate **confirmed facts**, **approved decisions**, and **unknowns/conflicts**.
5. For multi-step work, maintain a short checklist or plan and verify each step before moving on.

## Route the task

| Signal | Required workflow |
|---|---|
| Ambiguous requirements, new behavior, conflicting sources | `rehla-specification` and applicable design/brainstorming guidance first; establish outcome, acceptance criteria, constraints, and decision gaps before planning. |
| Multiple dependent steps/files/packages | `rehla-planning` and `writing-plans` when available; name real paths/interfaces, dependencies, commands, intended RED/GREEN, and requirement coverage. |
| Approved implementation plan | `rehla-executing-plans` and `executing-plans` when available; execute inline and sequentially only. Never offer delegated, subagent, or parallel implementation. |
| Behavior change, bug fix, contract change, refactor | `rehla-tdd` and applicable `test-driven-development`; observe the intended RED, make the smallest change, confirm GREEN, and run relevant regressions. |
| Failure, defect, flaky test, unexpected output | `rehla-systematic-debugging` and applicable debugging guidance; establish root cause before fixing. |
| API, database, auth/security, observability, package boundaries | Load relevant domain skills and rules; verify actual implementation. Never infer deployed services, roles/permissions, state transitions, payment rules, or retention policy from names or schemas. |
| Create, edit, or validate a skill | `writing-skills` and `rehla-skill-authoring`; record baseline scenarios before editing and rerun them afterward, and state separately whether behavioral evaluation actually ran. |
| Review or completion claim | `rehla-code-review` and `rehla-verification` as applicable; compare the result with requirements and observed evidence. |
| Branch disposition or release | Use the matching skill only when in scope and authorized. Finishing a branch does not authorize merge, publication, or product release. |

For mixed tasks, use this order: **discover/load skills → inspect project evidence → specify unresolved requirements → plan if multi-step → implement with TDD → review → verify → branch/release only if authorized**.

## Red Flags — STOP and Re-check

| Thought | Reality |
|---|---|
| “This is a simple question or tiny change.” | A Rehla repository task still requires the entry gate and applicable skills. |
| “I need more context first” or “I should explore the codebase first.” | Skill checks come before clarification, research, or file inspection; the relevant skill tells you how to gather context. |
| “I remember this skill” or “the description is enough.” | Skill content changes. Load and read its current full instructions and required references. |
| “This is urgent, familiar, or too small for the workflow.” | Urgency and familiarity do not make applicable skills optional; use the required workflow and report blocked or unrun checks honestly. |
| “The repository probably has this path, role, endpoint, or status transition.” | Verify the source and approved policy. Names and schemas alone do not prove behavior. |
| “The file exists, so the runtime uses it.” | Presence on disk does not prove auto-invocation. Verify the runtime loader/bootstrap with a runtime acceptance test. |
| “A structural test passed, so the skill works.” | Static checks prove document structure, not model behavior. Mark unavailable behavior evaluations **Not run**. |

## Unknowns and completion

When a required business rule is missing or approved sources conflict, record the precise gap and stop only the behavior that depends on it; continue independent read-only investigation. Ask one focused question only when essential information is absent from the approved sources. Never invent endpoints, permissions, transitions, payment/data rules, paths, or commands.

Report **Passed**, **Failed**, **Blocked**, or **Not run**, together with changed files, commands and observed results, limitations, and unresolved decisions. Never claim a command or runtime action occurred without evidence. A scenario file is a test specification, not proof it ran. A runtime acceptance test must confirm the entry skill is loaded in a clean session before repository work and routes at least one matching task to its specialist skill; if that session cannot be run, say so.

## References

`references/architecture-map.md` · `references/module-boundaries.md` · `references/coding-standards.md` · `references/api-contracts.md` · `references/security-and-data-rules.md` · `references/testing-policy.md` · `references/git-and-release-policy.md` · `../rehla-karpathy-guidelines/references/karpathy-examples.md`
