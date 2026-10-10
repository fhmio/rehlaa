---
name: rehla-planning
description: Use when an approved Rehla specification requires multiple implementation steps, files, packages, or dependencies.
---

# Rehla Planning — Executable Implementation Plans

Announce: “I’m using rehla-planning to create the implementation plan.” Plan only from an approved, sufficiently clear spec, before code changes. If approval, scope, or a business rule is unresolved, return to rehla-specification; record a blocker instead of guessing.

Save by default to `docs/superpowers/plans/YYYY-MM-DD-<feature-name>.md`, unless user preferences or an approved project convention specify another location.

## Scope and file map

Before defining tasks, map files to create/modify/test, responsibilities, public interfaces, and verified dependencies. Follow established patterns in the existing codebase; design small units with clear boundaries and avoid unrelated refactoring. If the spec spans multiple independent subsystems, request decomposition into separate plans; each plan must produce independently working, testable software.

## Right-size tasks

A task is the smallest unit with its own test cycle and reviewable deliverable. Each step is one action (2–5 minutes); fold setup/configuration/docs into the task that needs them. Order by verified dependencies. Keep tasks independently testable, never vague batches.

## Required plan header

Every plan starts with:

```markdown
# [Feature Name] Implementation Plan
> Execute task-by-task using Rehla's inline, sequential workflow. Steps use `- [ ]` checkboxes.
**Goal:** [one sentence]
**Architecture:** [2–3 sentences]
**Tech Stack:** [verified technologies]
**Spec:** [approved spec path]
## Global Constraints
[exact constraints copied verbatim from the approved spec]
---
```

## Required task contract

Every task includes exact `Files` paths (Create / Modify / Test) and `Interfaces` (Consumes / Produces with exact names, signatures, parameter/return types). For behavior changes, include:
1. Write the specific failing test, with actual test code.
2. Run: exact repository-backed command. Expected: FAIL and why.
3. Minimal implementation at exact paths, with complete code or a precise edit.
4. Run: focused test and relevant regression suite. Expected: PASS.
5. Commit step with exact files/message when authorized.

Use verified scripts and commands; verify command outputs before claiming completion. For non-code tasks, specify an equivalent observable check. Keep type/function/property names consistent across tasks. Never invent paths, interfaces, policies, commands, or test results; make unknowns explicit discovery tasks/blockers.

## No placeholders

A plan is incomplete if it contains `TBD`, `TODO`, “implement later,” “add appropriate error handling/validation,” “write tests for the above,” “similar to Task N,” undefined types/functions, or a step saying what to do without explaining how. Code blocks are required for code steps and must include complete runnable/adaptable code; tests name the behavior, assertion, command, and expected result.

## Self-review and handoff

Before delivery, map every spec requirement to a task or explicit blocker; scan placeholders; verify paths/commands against repository evidence; check dependency order, interface/type consistency, global constraints, test coverage, and scope. Fix gaps inline. Do not implement while planning. Report the saved plan path and unresolved items; execution stays inline and sequential—never offer subagent or parallel execution. Report **Passed**, **Failed**, **Blocked**, or **Not run** from observed evidence; never claim an unrun check passed.
