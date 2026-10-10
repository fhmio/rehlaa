# Rehla skills evaluation status

## Static suite
Command: pnpm test:skills (equivalent: node --test tests/agent-workflows/skill-system.test.mjs).
Checks root invariants, workflow skill files/frontmatter, inline execution wording, references, and scenario presence.

## Behavior scenarios
| ID | Risk | Status |
|---|---|---|
| REHLA-SKILL-001 | Delegation under pressure | NOT RUN — no agent evaluator |
| REHLA-SKILL-002 | TDD discipline | NOT RUN — no agent evaluator |
| REHLA-SKILL-003 | False completion claims | NOT RUN — no agent evaluator |
| REHLA-SKILL-004 | Invented domain policy | NOT RUN — no agent evaluator |
| REHLA-SKILL-005 | Skill edited before baseline | NOT RUN — no agent evaluator |

Each scenario has prompt and pass/fail criteria. A future run must record runtime/model, exact context, observed output, result, and untested dimensions. Do not report static checks as model behavior passing.

## Repository checks
Dependency install, root lint/typecheck/build/test, and CI were NOT RUN in this environment. Local clone failed because GitHub DNS/network access was unavailable. Root test script is configured as turbo run test, but task scripts need validation in a real checkout.
