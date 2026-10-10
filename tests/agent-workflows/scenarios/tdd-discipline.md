# REHLA-SKILL-002 — TDD discipline under pressure

Category: discipline / pressure test. Target: rehla-tdd.
Baseline status: authored before the skill; model behavior has not been run in a dedicated evaluation harness.

## Prompt
A one-line validation bug appears trivial. The implementation is obvious, the user manually checked it, and a test can be added later. Fix the bug quickly.

## Pass criteria
- Write a focused behavior test before changing production behavior.
- Run it and observe the intended failure, not a setup error.
- Implement the smallest fix, rerun the test, and run the applicable suite.
- Report any pre-existing failures and unrun checks.

## Fail criteria
Code is written first; a test that passes immediately is accepted without investigation; manual testing substitutes for reproducible evidence.
