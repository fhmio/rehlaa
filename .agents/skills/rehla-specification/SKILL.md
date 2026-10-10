---
name: rehla-specification
description: Use when a Rehla request changes behavior, contracts, architecture, acceptance criteria, or depends on unresolved business rules.
---

# Rehla Specification — Design Before Implementation

## Mandatory approval gate

Before detailed questions, classify and announce **Spike, Bounded, or Architectural**; the user may correct the path. No implementation, code, scaffolding, or implementation-skill invocation before explicit approval. Task size changes the artifact, never this gate.

## Choose the path

- **Spike:** Feasibility question; output is an answer, not retained code. State the question and a 2–3 sentence probe plan, get approval, then investigate cheaply without sacrificing correctness. Label probe code throwaway; success authorizes no production follow-up.
- **Bounded:** Change a flow verified in current source; familiarity or README mention is not proof. Inspect source/docs/recent commits; ask material questions one at a time. Present an in-chat design (approach/files/tests), then STOP for explicit yes. No spec file; no plan document. After approval, use the normal TDD workflow.
- **Architectural:** New project/subsystem, major restructuring, or shared-interface change. Decompose multiple independent subsystems into separate spec → plan → implementation cycles. Ask one question at a time about purpose, constraints, and success criteria. Present 2–3 approaches with trade-offs and a recommendation; apply YAGNI. Show design in sections (architecture, components, data flow, error handling, tests); get approval after each section and revise as requested. Then write docs/superpowers/specs/YYYY-MM-DD-<topic>-design.md unless an approved project convention overrides it. Self-review placeholders, TODO/TBD, contradictions, ambiguity, and scope. **User review gate:** ask the user to review the written spec and wait for explicit approval before planning. Only then use rehla-planning (and writing-plans if installed); do not implement during spec review.

When uncertain, choose the heavier path. Hidden complexity upgrades the path: stop, explain, and re-approve the revised design. Never downgrade mid-task.

## Required specification contract

Include context/goal; source-backed requirements and approved decisions; scope/exclusions; behavior/failure cases; inputs/outputs/validation; approved authorization/transitions or explicit gaps; observable acceptance criteria; impacted paths/contracts; unresolved decisions; verification plan. Every requirement cites a source or explicit user decision; criteria are testable.

Keep facts, approved decisions, and unknowns separate. Follow existing codebase patterns; avoid unrelated refactors. Missing business rules: record decision gaps, stop affected behavior, never invent or guess, and continue independent read-only investigation. Implementation stays inline and sequential; never offer subagent or parallel execution.

## Red flags — stop and re-check

| Thought | Reality |
|---|---|
| “Too simple to need approval.” | Shorten the design, not the gate; wait for yes. |
| “Call it bounded and skip the spec.” | Bounded requires a verified existing flow; doubt means choose the heavier path. |
| “They are reading the design, so I can start.” | Presentation is not approval. Stop. |
| “The spike worked, so keep its code.” | Probe success is not production approval. |
| “Complexity appeared, but I am nearly done.” | Stop, upgrade the path, and re-approve. |
| “The schema implies the business rule.” | Schemas and convention are not approved policy. |
