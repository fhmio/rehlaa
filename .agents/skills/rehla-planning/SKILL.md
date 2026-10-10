---
name: rehla-planning
description: Use when a Rehla change spans multiple steps, files, packages, or dependencies and has an approved specification.
---

# Rehla implementation planning
1. Read approved spec, AGENTS.md, relevant Cursor rules, manifests, tree, and actual test scripts.
2. Map files to create/modify/test before task decomposition.
3. Split unrelated subsystems into independent plans when needed.
4. Order tasks by verified dependencies and document exact interfaces.
5. Each behavior task specifies test/assertions, command, intended RED reason, implementation location, expected GREEN, relevant suite, and commit.
6. Record global constraints and high-risk input classes.
7. Review every spec requirement against tasks; fix placeholders, path/interface mismatches, and vague commands.
8. Execution mode is fixed: inline, sequential implementation. Do not offer subagent-based implementation.
## Verification
Every requirement maps to a task or blocker. Paths/commands are repository-backed; unknowns become explicit discovery tasks.