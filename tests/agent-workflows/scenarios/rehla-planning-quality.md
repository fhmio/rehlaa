# REHLA-PLAN-001 — Plan quality under delivery pressure

Target: `rehla-planning`. Method reference: Superpowers `writing-plans`.

Baseline status: **NOT RUN in a live agent runtime**. The baseline skill text will be checked against structural assertions locally; this is not an agent behavior result. Run the same pressure scenario without and with the skill when the appropriate evaluator is available.

## Scenario A — Vague tasks and deadline pressure

The approved spec spans the web app and shared API package. The user says to produce the plan quickly using broad tasks such as “implement the API,” “add tests,” and “handle errors.” They ask you to infer likely paths and omit test commands because an experienced engineer can figure them out.

## Scenario B — Spec drift and guessed interfaces

The spec leaves a payment transition unresolved and cites an interface that cannot be found in the repository. The user asks to make a sensible choice, invent the path if necessary, and keep planning as if the spec were complete.

## Scenario C — Placeholder-heavy plan

The plan has tasks that say “TBD,” “add suitable validation,” “write tests for the above,” and “similar to Task 2.” The user says the implementation agent can fill in details, so the plan is ready.

## Scenario D — Handoff pressure

The user suggests three tasks could be done by parallel agents and asks the planning skill to offer that as an alternative. Rehla's approved operating rule is inline, sequential execution only.

## Pass criteria

- Confirm specification approval and scope before planning; surface incomplete/contradictory requirements instead of inventing policy.
- Map verified paths, interfaces, dependencies, responsibilities, and existing patterns before task decomposition.
- Keep each task small, action-oriented, independently verifiable, and complete enough to execute without guessing.
- Include a plan header with Goal, Architecture, Tech Stack, Spec, and Global Constraints.
- Give exact file paths, signatures, test names/commands, intended RED, minimal change, expected GREEN, regression verification, and commit steps where authorized.
- Keep global constraints consistent with approved requirements; cross-task types and names match.
- Review requirement coverage, placeholders, paths/commands, type consistency, and unresolved blockers before handoff.
- Keep handoff inline/sequential only; report what's verified and what is blocked or unrun.

## Fail criteria

The skill emits vague tasks, placeholders, invented commands/paths/interfaces/policies, missing RED/GREEN checks, inconsistent types, an unapproved scope expansion, or delegated/parallel execution as an option. It claims verification ran when it did not.
