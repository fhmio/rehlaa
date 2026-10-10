# Rehla skills evaluation status

## Structural suite
Command: pnpm test:skills (configured as node --test tests/agent-workflows/*.test.mjs).
The existing structural suite was previously run on the generated artifact tree: 5 tests passed, 0 failed. The actual remote branch could not be cloned into this execution container, so the complete suite has not been run from a checkout of this branch.
Earlier remote static inspection recorded 52 passing checks across core workflow skill metadata/references and 8/8 engineering skill metadata/name/trigger/body checks. These are static checks only.

## Mandatory skill gate in AGENTS.md
- RED: the new mandatory-gate assertion was run against the prior AGENTS.md and failed because the dedicated gate section did not exist.
- GREEN: the gate assertions were run with Node's built-in test runner against a fixture containing the new mandatory-gate text: 1 passed, 0 failed.
- The branch now contains the assertions in tests/agent-workflows/karpathy-guidelines.test.mjs. The complete remote-branch test suite was not run in a real checkout; only focused fixture and remote static inspections were available here.

## Karpathy integration
- RED baseline: the new integration test was run in a minimal fixture before its target artifacts existed. Four tests failed; the primary assertion identified the missing Rehla Karpathy skill. The additional integration failures reflected missing files in that fixture. This is structural RED evidence, not baseline evaluation of an LLM.
- GREEN structural fixture: the focused integration test ran in a populated isolated fixture: 4 passed, 0 failed. This does not mean the same test ran in a checkout of the remote repository and does not prove model behavior.
- Remote source/static inspection after integration: 19/19 checks passed for skill presence/frontmatter, four principles, TDD/security/domain-gap guards, AGENTS/entry routing, Cursor activation, examples/scenario/docs presence, and test script configuration. A missing “verifiable” term in the Cursor rule was found by the first check and corrected before the 19/19 run.
- REHLA-KARPATHY-001: scenario exists at tests/agent-workflows/scenarios/karpathy-guidelines.md. Model behavior evaluation remains NOT RUN because no agent evaluation runtime was found/configured here.
- Full remote branch node test, pnpm install, root lint/typecheck/build/test, and CI: NOT RUN from a real checkout.

## Entry skill: rehla-development
- **RED structural baseline:** node --test tests/rehla-development.test.mjs was run in an isolated local fixture against the previously fetched rehla-development/SKILL.md. Result: 8 tests, 3 passed, 5 failed. Failures identified gaps in the skill-loading gate, deterministic task-routing contract, repository/policy verification, evidence-based completion statuses, and skill-edit baseline/post-test requirements.
- **GREEN structural result:** the same eight assertions were run against the revised skill with the routing scenario present: 8 passed, 0 failed. The skill is approximately 500 words and links to its existing references.
- **REHLA-DEV-001:** tests/agent-workflows/scenarios/rehla-development-routing.md defines three pressure cases and observable pass/fail criteria. This scenario has **NOT RUN** in a skill-enabled model runtime; no such evaluator was available.
- These results are local fixture checks, not a full run of pnpm test:skills from a checkout of the remote branch and not evidence of model behavior.

## Behavior scenarios
| ID | Risk | Status |
|---|---|---|
| REHLA-SKILL-001 | Delegation under pressure | NOT RUN — no agent evaluator |
| REHLA-SKILL-002 | TDD discipline | NOT RUN — no agent evaluator |
| REHLA-SKILL-003 | False completion claims | NOT RUN — no agent evaluator |
| REHLA-SKILL-004 | Invented domain policy | NOT RUN — no agent evaluator |
| REHLA-SKILL-005 | Skill edited before baseline | NOT RUN — no agent evaluator |
| REHLA-KARPATHY-001 | Think before coding, simplicity, surgical changes, goal-driven execution | NOT RUN — no agent evaluator |
| REHLA-DEV-001 | Entry routing under pressure | NOT RUN — no agent evaluator |

Each scenario has prompt and pass/fail criteria. A future run must record runtime/model, exact context, observed output, result, and untested dimensions. Static checks must not be reported as model-behavior passing.

## Repository checks
Dependency install, root lint/typecheck/build/test, and CI were NOT RUN in this environment. Local clone failed because GitHub DNS/network access was unavailable. Root test script is configured as turbo run test, but workspace task scripts must be validated in a real checkout.


## Superpowers-style review and entry-skill revision — 2026-10-10

### Source review
The uploaded Superpowers snapshot was parsed as a flattened export containing 186 file sections and 39,268 lines, including 14 primary `skills/*/SKILL.md` files, supporting skill references, multi-harness bootstrap/plugin code, and harness/plugin tests. The most relevant source files for this change were `skills/using-superpowers/SKILL.md`, `skills/writing-skills/SKILL.md`, and `skills/writing-skills/testing-skills-with-subagents.md`.

The entry skill now adopts the applicable source conventions: a mandatory pre-action gate; forceful instruction ordering; a concrete routing table; red-flag rationalization counters; fail-closed handling when a required skill/reference is inaccessible; a distinction between skill-file presence and runtime activation; and explicit evidence statuses. Rehla's higher-priority project constraints remain in force, especially inline sequential execution only.

### Structural RED/GREEN evidence
- **RED before skill edit:** `node --test tests/rehla-development.test.mjs` ran in an isolated local fixture containing the fetched prior skill and routing scenario. **14 tests: 8 passed, 6 failed.** The six new assertions found missing mandatory-bootstrap phrasing, the red-flags table, explicit rationalization counters, fail-closed unavailable-skill behavior, process-first/priority wording, and the runtime activation caveat.
- **GREEN after skill edit:** the same 14 assertions ran against the revised `rehla-development/SKILL.md` and scenario in that isolated fixture. **14 passed, 0 failed.**
- This result is a local structural contract check. It is not a baseline or post-edit model-behavior evaluation, and it does not prove auto-invocation in Cursor or another Rehla runtime.

### Behavioral and repository verification
- `REHLA-DEV-001` now includes four pressure/acceptance cases, including a clean-session runtime bootstrap check. **Model behavior: NOT RUN** — no skill-enabled agent evaluator or session trace was available.
- Full `pnpm test:skills`, install, lint/typecheck/build, and repository CI were **NOT RUN from a checkout of the remote branch**. Remote file contents and commit existence were verified through the repository connector; that is not a full test run.
- The complete Superpowers method is therefore **not fully reproduced end-to-end**: its documented approach requires before/after live agent pressure evaluations, while only structural RED/GREEN could be executed here. This limitation must remain visible until runtime evidence exists.
