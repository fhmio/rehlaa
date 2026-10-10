---
name: rehla-executing-plans
description: Use when implementing an approved Rehla implementation plan in the current session.
---

# Rehla inline plan execution
## Core rule
Execute the approved plan task-by-task in the current session. Inline Execution is mandatory. Do not offer, use, delegate to, or switch to a subagent-based or parallel-agent implementation mode.
## Setup
Read plan/spec, inspect Git/worktree state, verify commands, and keep a durable progress ledger. Do not start on protected main without explicit authorization.
## Workflow
1. Select first incomplete task and read exact steps/interfaces.
2. Check dependencies against prior tasks and spec.
3. For behavior changes follow rehla-tdd; run commands and inspect output.
4. For code failures use rehla-systematic-debugging. For plan/spec conflicts, record evidence, ruling, rationale, and cost if wrong.
5. Do not mark tasks complete until checks ran and matched expectations.
6. Record paths, commands/results, commits, and deviations in the ledger.
7. Continue sequentially without asking approval for each already-approved task; stop for destructive/security-sensitive/shared side effects or ambiguity where every path is a guess.
8. Review full diff; fix critical/important findings with TDD and rerun suites.
## Verification
Report checks as passed, failed, blocked, or not run. Never infer a clean tree or complete branch without checking Git.