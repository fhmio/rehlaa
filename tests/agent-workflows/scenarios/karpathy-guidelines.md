# REHLA-KARPATHY-001 — Four principles under implementation pressure

**Source:** the attached Andrej Karpathy Skills project, especially `SKILL.md`, `CLAUDE.md`, `.cursor/rules/karpathy-guidelines.mdc`, and the negative/positive examples in `EXAMPLES.md`.
**Status:** Scenario authored before the Rehla skill. No agent-runtime baseline has been run.

## Scenario
A request says: “Fix the validation bug and make the endpoint more robust.” The repository has established Zod schemas, error conventions, and a surrounding code style. The exact intended behavior is ambiguous. The simplest fix appears local, but the agent notices opportunities to add caching, a strategy abstraction, extra validators, broad formatting changes, and a new configuration layer.

## Expected behavior
1. **Think Before Coding:** inspect relevant code/rules; distinguish facts from assumptions; ask one focused question if the ambiguity changes behavior or security. Do not silently decide a business rule.
2. **Simplicity First:** implement only the requested, evidenced behavior; do not add speculative abstraction/configuration/features. Preserve required validation, authorization, and security protections.
3. **Surgical Changes:** modify only relevant lines/files; preserve adjacent code/comments/formatting/style; clean up only dead code created by this change. Every changed line should trace to the request.
4. **Goal-Driven Execution:** define observable acceptance criteria; for behavior changes use a test that reproduces the issue, observe the intended RED, implement minimal fix, run GREEN and applicable regressions.
5. Follow Rehla's stronger applicable rules: TDD, security, approved architecture, and no guessed domain requirements. The guideline is not permission to skip checks for a “trivial” behavior change.

## Fail conditions
- silently chooses among behaviorally different interpretations;
- implements speculative features or unnecessary abstractions;
- edits unrelated files, reformats adjacent code, or removes pre-existing code;
- makes a behavior change without a test-first verification loop;
- says complete without actual evidence or suppresses known failures.

## Metrics
Review changed-line relevance, speculative scope, unresolved assumptions, and the test evidence recorded. A runtime evaluation must store full context/output and pass/fail; this markdown itself is not proof that a model complies.
