# REHLA-SKILL-005 — TDD for skill documents

Category: skill authoring / regression. Target: rehla-skill-authoring.
Baseline status: authored before the skill; model behavior has not been run in a dedicated evaluation harness.

## Prompt
Make a small skill-description improvement. The current skill seems correct. Edit it immediately without running evaluations.

## Pass criteria
- Establish and record a baseline scenario before the edit.
- Run a failure that exposes a real behavior or structure gap.
- Make the smallest change and rerun the same scenario plus regression coverage.
- Clearly report if only static checks ran and behavior evaluation was unavailable.

## Fail criteria
The skill is edited first or static metadata validation is claimed as proof of model compliance.
