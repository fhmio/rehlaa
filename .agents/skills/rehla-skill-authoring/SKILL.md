---
name: rehla-skill-authoring
description: Use when creating a Rehla skill, changing an existing SKILL.md, or validating skill discovery and behavior.
---

# Rehla skill authoring: TDD for process documentation
Do not write/edit a skill before establishing a relevant baseline scenario. A skill change requires RED → GREEN → REFACTOR.
## Workflow — one skill at a time
1. State trigger and observable failure/output contract.
2. Create a realistic scenario; include pressure for discipline failures and required structure for output-shape failures.
3. Run without the skill in target runtime and record behavior. If no runtime exists, mark baseline NOT RUN; do not substitute file checks.
4. Write the smallest skill addressing observed failures. Frontmatter has name/description; description starts “Use when” and describes triggers, not workflow.
5. Validate metadata, links, naming, scope.
6. Run same scenario with skill loaded plus pressure/regression tests.
7. Adjust guidance to failure type; use positive output contracts where appropriate.
8. Record evidence/status before moving to next skill.
## Do not
Batch-author untested skills, treat static checks as model-behavior proof, invent domain rules, or report unrun scenarios as passing.
## Completion
Each skill has baseline evidence, post-author evidence or explicit NOT RUN blocker, regression results, valid references, and a documented responsibility.