---
name: rehla-tdd
description: Use when adding or changing Rehla behavior, fixing a bug, changing contracts, or refactoring behavior.
---

# Rehla Test-Driven Development
No behavior-changing production code without a focused test that was run and failed for the intended reason.
## RED → GREEN → REFACTOR
1. RED: write a focused test for one observable behavior.
2. Run it; confirm it fails because behavior is missing/wrong, not setup or syntax.
3. GREEN: implement the smallest change that passes.
4. Rerun the focused test and relevant suite; report pre-existing failures.
5. Refactor only while green and without behavior changes; rerun affected tests.
6. Repeat for the next behavior.
## Red flags
Code first, tests later, “only one line,” manual testing as substitute, immediate pass without investigation, setup failure mistaken for RED, omitted suite failures.
## Skill edits
Record baseline scenarios before editing and rerun afterward. Static checks do not prove model behavior; report unavailable evaluations as not run.
## Evidence
Record command, intended RED, observed RED, GREEN result, suite result, and unresolved failures. Never fabricate output.