# Rehla skills evaluation status

## Static suite
Command: pnpm test:skills (equivalent: node --test tests/agent-workflows/skill-system.test.mjs).
The suite was run locally on the generated artifact tree: 5 tests passed, 0 failed. The actual remote branch could not be cloned into this execution container, so the same suite has not been run from a checkout of the remote branch.
Checks root invariants, workflow skill file/frontmatter, inline execution wording, reference presence, and scenario presence.

## Remote artifact inspection
- 52 checks passed across root invariants, 11 core skill metadata/structure checks, inline-execution wording, and reference presence.
- 8/8 engineering skill files passed metadata/name/trigger/body inspection through GitHub file reads.
These are static checks only, not model-behavior evaluation.

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
Dependency install, root lint/typecheck/build/test, and CI were NOT RUN in this environment. Local clone failed because GitHub DNS/network access was unavailable. Root test script is configured as turbo run test, but workspace task scripts must be validated in a real checkout.
