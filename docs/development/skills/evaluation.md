# Rehla skills evaluation status

## Structural suite
Command: pnpm test:skills (configured as node --test tests/agent-workflows/*.test.mjs).
The structural suite was run locally on the generated artifact tree earlier: 5 tests passed, 0 failed. The actual remote branch could not be cloned into this execution container, so the whole suite has not been run from a checkout of this branch.
Remote inspection previously recorded 52 passing checks across core workflow skill metadata and references, plus 8/8 engineering skill file metadata/name/trigger/body checks. These are static checks only.

## Karpathy integration
- RED baseline: the new Karpathy integration test was run in a minimal fixture before adding its target artifacts. Four tests failed; the primary assertion identified the missing Rehla Karpathy skill. Other failures reflected absent integration files in the fixture. This is test-shape evidence, not a baseline evaluation of an LLM.
- GREEN structural: the same focused test was run in a populated isolated fixture after adding sample integration artifacts: 4 passed, 0 failed. This is a harness/structure check, not execution against the remote repository checkout and not a model behavior test.
- REHLA-KARPATHY-001: scenario defined in tests/agent-workflows/scenarios/karpathy-guidelines.md. Model behavior evaluation remains NOT RUN because no agent evaluation runtime was found/configured here.
- Full remote branch node test, pnpm install, root lint/typecheck/build/test, and CI: NOT RUN from a real checkout.

## Behavior scenarios
| ID | Risk | Status |
|---|---|---|
| REHLA-SKILL-001 | Delegation under pressure | NOT RUN — no agent evaluator |
| REHLA-SKILL-002 | TDD discipline | NOT RUN — no agent evaluator |
| REHLA-SKILL-003 | False completion claims | NOT RUN — no agent evaluator |
| REHLA-SKILL-004 | Invented domain policy | NOT RUN — no agent evaluator |
| REHLA-SKILL-005 | Skill edited before baseline | NOT RUN — no agent evaluator |
| REHLA-KARPATHY-001 | Think before coding, simplicity, surgical changes, goal-driven execution | NOT RUN — no agent evaluator |

Each scenario has prompt and pass/fail criteria. A future run must record runtime/model, exact context, observed output, result, and untested dimensions. Do not report static checks as model-behavior passing.

## Repository checks
Dependency install, root lint/typecheck/build/test, and CI were NOT RUN in this environment. Local clone failed because GitHub DNS/network access was unavailable. Root test script is configured as turbo run test, but workspace task scripts must be validated in a real checkout.
