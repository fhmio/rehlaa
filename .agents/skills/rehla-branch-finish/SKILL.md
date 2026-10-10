---
name: rehla-branch-finish
description: Use when implementation tasks and applicable checks are complete and a Rehla development branch needs a safe handoff.
---

# Rehla branch finishing
## Preconditions
Run rehla-verification; inspect git status, branch, diff, and commits. Do not finish with unreported failures or uncommitted changes.
## Workflow
1. Confirm task ownership and commit/uncommitted state.
2. Present branch state and authorized disposition options.
3. Ask before destructive cleanup, shared push, merge, or unapproved external side effects.
4. Preserve unrelated changes; never run cleanup that may erase user work.
5. Report branch, commit range, test evidence, tree state, and action taken/awaiting authorization.
## Boundary
Branch finishing is not product release. Use rehla-release only for requested release work.