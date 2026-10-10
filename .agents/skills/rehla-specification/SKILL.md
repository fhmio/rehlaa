---
name: rehla-specification
description: Use when a feature changes behavior, contracts, architecture, acceptance criteria, or leaves a Rehla business rule unresolved.
---

# Rehla specification workflow
1. Read AGENTS.md, relevant Cursor rules, current source/tests, and approved decisions.
2. Separate confirmed facts, user decisions, repository observations, and unresolved questions.
3. Define goal, scope/exclusions, inputs/outputs, errors, authorization, transitions, and testable acceptance criteria as relevant.
4. Link requirements to sources; never convert assumptions into requirements.
5. State exact conflicts and request a decision. Missing domain rules remain open; do not implement guesses.
6. Check overlap with existing functionality and keep scope minimal.
7. Review for contradictions, placeholders, undefined terms, and untestable criteria.
## Required output
Context/goal; confirmed sources; scope; behavior/failure cases; acceptance criteria; impacted paths/contracts; unresolved decisions; verification plan.
## Verification
Every requirement has a source or explicit decision. Every criterion is observable. Use rehla-planning for multi-step work after spec approval.