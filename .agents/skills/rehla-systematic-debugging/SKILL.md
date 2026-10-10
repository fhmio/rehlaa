---
name: rehla-systematic-debugging
description: Use when a Rehla test fails, a bug occurs, behavior is inconsistent, or output differs from expectation.
---

# Rehla systematic debugging
1. Reproduce the failure with the smallest deterministic test/command.
2. Preserve exact output and locate divergence between expected and observed behavior.
3. Gather evidence from call paths, state, configuration, logs, and recent changes.
4. Form a specific hypothesis and test it; change one causal variable at a time.
5. Identify root cause rather than a downstream symptom.
6. Add/refine a regression test that fails before the fix.
7. Apply the smallest root-cause fix; observe RED → GREEN and run related suites.
8. Report evidence, cause, change, tests, and uncertainty.
## Guardrails
Do not guess from error text alone, broadly rewrite code to hide symptoms, add arbitrary sleeps, or suppress failures. Use condition-based waits only where supported.
## Stop
If reproduction/evidence is unavailable, state the blocker rather than claiming a fix.