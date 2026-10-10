# Rehla Skills System — Implementation Specification

**Status:** Implementation draft; model behavior evaluations pending runtime support.
**Repository:** fhmio/rehlaa

## Verified repository facts
Inspected main tree contains apps/web and packages/{api,config,icons,theme,ui-web,utils}. README/Cursor rules also mention apps/admin, apps/admin-mobile, packages/ui-native, but these paths were absent from the inspected tree. Root uses pnpm@9.0.0 and Turborepo. packages/api contains shared Zod schemas and SDK. No agent behavior evaluation harness was found in the inspected tree.

## Constraints
- Inline execution only.
- TDD for behavior and skill changes.
- Never invent domain rules, API paths, roles, database policy, or commands.
- Static skill tests prove artifact consistency only, not model behavior.
- Do not add/remove product apps or resolve README/tree mismatch as part of this task.
- Branch finishing and release remain separate.

## Deliverables
Root AGENTS.md; entry skill and verified references; workflow and engineering skills; Node structural tests; behavior scenario definitions; catalog/workflow/evaluation documentation.

## Validation
Run pnpm test:skills / node --test tests/agent-workflows/skill-system.test.mjs. Run project lint/typecheck/build/test only with supported commands and inspected output. Agent pressure scenarios remain NOT RUN unless run against a suitable runtime.

## Limitations
No AI behavior evaluation harness was found in the inspected repository. Container networking could not clone the repository, so full install/build/CI cannot be claimed here. Detailed domain skills are deferred until approved business requirements exist.
