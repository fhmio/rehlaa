---
name: rehla-verification
description: Use when preparing to state that a Rehla task, fix, plan, build, review, or release is complete.
---

# Rehla evidence-based verification
Evidence before assertions. Expected output, memory of a run, or a focused test does not prove the full suite/build passed.
1. Map acceptance criteria to checks.
2. Inspect manifests/CI to determine real commands.
3. Run required checks and inspect output/exit status.
4. Distinguish product, environment/tooling, and unrelated pre-existing failures.
5. Rerun relevant checks after final edits.
6. Report Passed, Failed, Blocked, Not run with commands and evidence.
7. Never infer tests passed when scripts are missing. Static skill tests do not establish model behavior.
## Final statement
Name verified and unverified checks. If unavailable, state blocker; do not claim full verification.