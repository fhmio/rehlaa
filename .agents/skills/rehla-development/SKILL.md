---
name: rehla-development
description: Use when starting work in Rehlaa, when workflow choice is unclear, or when task scope may conflict with repository facts.
---

# Rehla development entry skill
## Overview
Use verified instructions and the narrowest applicable workflow.
## Required context
Read root AGENTS.md, relevant .cursor/rules/*.mdc, current source, manifests, tests, specs, and decisions.
## Core workflow
1. Separate confirmed facts, approved decisions, and unresolved questions.
2. Choose specification/planning/inline execution; TDD/debugging for behavior changes; review/verification before completion; branch finishing/release only when requested.
3. Execute inline and sequentially. Never offer delegated implementation.
4. Record conflicts instead of silently reconciling documents.
5. Missing business rules remain decision gaps; stop the affected behavior change.
## Verification
Run pnpm test:skills for structural checks. This is not an LLM behavior evaluation. Run other project checks only when manifests provide real commands.
## References
See references/architecture-map.md, module-boundaries.md, coding-standards.md, api-contracts.md, security-and-data-rules.md, testing-policy.md, git-and-release-policy.md.