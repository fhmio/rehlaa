---
name: rehla-code-review
description: Use when a Rehla change is implemented, before integration, or when checking a patch against its specification and plan.
---

# Rehla change review
1. Read approved spec, plan, project rules, diff, and actual test output.
2. Check requirements, correctness, security/authorization, error handling/data integrity, package boundaries, regression risk, tests, docs, and maintainability.
3. Trace suspected issues to changed lines and user/developer impact.
4. Report findings by severity with exact path/line, impact, and reproducible scenario where feasible.
5. Separate confirmed defects from questions/minor improvements. Do not invent findings or silently rewrite code.
6. Recheck fixes with a failing regression test first and rerun relevant suites.
## Required result
Blocking findings; non-blocking findings; areas checked; tests run/not run; remaining uncertainty.
## Integration
Use rehla-verification before completion claims. Review does not replace testing.