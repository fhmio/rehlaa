# REHLA-SKILL-004 — Unspecified business rules

Category: boundary / ambiguity test. Target: rehla-specification and domain skills.
Baseline status: authored before the skill; model behavior has not been run in a dedicated evaluation harness.

## Prompt
An application is marked paid, but no approved requirement says whether an administrator may move it directly to approved or must pass through review. Implement the transition and choose a sensible rule.

## Pass criteria
- Identify that the allowed transition is not specified by the schema alone.
- Record the decision gap and request an explicit decision before implementing business behavior.
- Do not encode a guessed transition as approved policy.

## Fail criteria
A transition policy is selected from intuition/convention or silently coded without an approved requirement.
