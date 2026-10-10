# Rehlaa project instructions
## Verified facts
- Monorepo uses pnpm@9.0.0 and Turborepo. Inspect manifests before assuming commands.
- Inspected main tree contains apps/web and packages/{api,config,icons,theme,ui-web,utils}. README/Cursor rules mention apps/admin, apps/admin-mobile, packages/ui-native, but these paths were absent from the inspected tree; do not assume they exist.
- packages/api contains shared Zod schemas/SDK, not proof of a separately deployed API service.
- Root scripts are dev/build/typecheck/lint/test. Inspected app/package manifests did not provide test scripts consistently.
- Changesets was previously mentioned but no configuration was found in the inspected tree.
- Read relevant .cursor/rules/*.mdc, source, tests, manifests, specs, and decisions before editing.
## Mandatory skill gate

**This section is a required execution gate, not optional guidance.**

1. **Before any task or response, inspect available skills.** Before planning, researching, opening project files, editing code, running commands, or answering a task, inspect the available runtime skills and their descriptions, plus the skills under `.agents/skills/` in this repository. When Superpowers is installed, invoke `using-superpowers` first.
2. **Load the relevant skills before acting.** Match the request to each applicable skill's trigger conditions, then read the full applicable `SKILL.md` file(s), including required supporting references. Use the runtime's skill invocation/loading mechanism when it provides one. A name, short description, remembered summary, or this `AGENTS.md` is not a substitute for reading and following the skill.
3. **Applicable skills are mandatory, not optional.** Do not skip a skill because the task seems trivial, urgent, familiar, or already understood. Do not start work and load skills afterward.
4. **Do not proceed until applicable skills have been read.** If a required skill or its reference is inaccessible, stop the affected work and report the exact blocker. Do not pretend the skill was invoked.
5. **Re-check skill applicability at the start of each new task and whenever scope changes.** A long plan does not waive this gate for its individual tasks. Process/design skills are loaded before implementation skills; load all applicable skills, not just one.
6. **Follow the skill's full workflow and verification contract.** Completing a task requires the checks and evidence described by the skill. If instructions conflict, preserve higher-priority user decisions, approved specifications, and security/privacy constraints; record unresolved conflicts instead of silently bypassing the gate.

### Skill routing requirements

| Task signal | Required skill(s) to inspect and follow |
|---|---|
| Any work in this repository | `rehla-development`; inspect all other relevant skill triggers |
| Coding scope, ambiguity, refactoring, or risk of overengineering | `rehla-karpathy-guidelines` |
| New feature, changed behavior, unclear acceptance criteria, or business-rule gap | `brainstorming` / `rehla-specification` as applicable |
| Multi-step implementation plan | `writing-plans` and `rehla-planning` |
| Execute an approved plan | `executing-plans` and `rehla-executing-plans`; inline execution only |
| Any behavior-changing code, bug fix, or refactor | `test-driven-development` and `rehla-tdd` before implementation |
| Test failure, bug, unexpected behavior, or flaky timing | `systematic-debugging` and `rehla-systematic-debugging` |
| Isolated workspace or feature implementation setup | `using-git-worktrees` when applicable and authorized |
| Code/diff review | `requesting-code-review` where available and `rehla-code-review` |
| Completion, test/build claims, or final status | `verification-before-completion` where available and `rehla-verification` |
| Branch disposition after completed work | `finishing-a-development-branch` where available and `rehla-branch-finish` |
| Versioning or release preparation/publication | `rehla-release` and applicable repository release instructions |
| Create, edit, or validate a skill | `writing-skills` and `rehla-skill-authoring` |
| API/schema/contract changes | `rehla-api-design` and relevant backend/TDD/security skills |
| Database/schema/migration changes | `rehla-database-design`, TDD, and security/integrity requirements |
| Authentication, roles, sensitive data, uploads, or permissions | `rehla-auth-and-authorization` and `rehla-security-and-privacy` |
| Logging, metrics, diagnostics, or telemetry | `rehla-observability` |
| Changes spanning package/API/UI boundaries | `rehla-integration-testing` and relevant domain skills |
| Administrator UI work | `rehla-admin-dashboard` only after confirming the app exists and is in scope |

Skill names in this table are routing cues, not a substitute for inspecting the skill files. Repository skills and installed Superpowers skills may both apply. If no domain skill exists, continue to follow `AGENTS.md`, approved specifications, and relevant project rules; never invent missing domain policy.

## Mandatory workflow
1. Inline Execution only; work sequentially. Do not offer subagent-driven or parallel-agent implementation.
2. Behavior changes use RED → GREEN → REFACTOR and must observe the intended failing test first.
3. For skill changes, record baseline scenarios before editing and rerun afterward. Static checks do not prove model behavior.
4. Diagnose failures from evidence and root cause.
5. Never claim a command passed unless run and output inspected. List blocked/unrun checks.
6. Never invent endpoints, roles, transitions, payment/data rules, package paths, or commands. Record gaps.
7. Respect TypeScript, Zod/API, UI, security, RTL/accessibility, and Git rules in .cursor/rules/.
8. Apply rehla-karpathy-guidelines when framing tasks, interpreting ambiguity, choosing scope, coding, reviewing, or refactoring: think before coding, choose the simplest requirement-backed solution, keep the diff surgical, and define verifiable success criteria. These principles never relax TDD/security/approved decisions.
9. Review changes against spec and evidence; do not invent findings.
10. Branch finishing and product release are separate. Shared pushes, merges, publishing, or releases require explicit authorization.
## Scope guard
This skills-system change does not authorize product feature work or creating/removing apps. Check approved scope and actual tree.
## Completion
Run applicable checks and report Passed / Failed / Blocked / Not run. Do not claim full verification from a scoped check.