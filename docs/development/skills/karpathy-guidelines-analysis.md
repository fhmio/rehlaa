# Analysis note: Andrej Karpathy Skills integration

## Source inventory
The attached archive contains nine text files totaling 1,134 lines: plugin/marketplace manifests, a Cursor rule, CLAUDE.md, CURSOR.md, a reusable SKILL.md, English and Chinese READMEs, and EXAMPLES.md. The examples file is the largest at 522 lines. The source declares MIT in plugin metadata and README but the uploaded archive contains no standalone LICENSE file. It does not include automated tests or an agent-evaluation harness.

## Four principles
1. **Think Before Coding:** reveal material assumptions, identify competing interpretations, and ask when uncertainty changes behavior/scope/security.
2. **Simplicity First:** avoid speculative features, single-use abstractions, and unnecessary configurability.
3. **Surgical Changes:** avoid drive-by refactoring, reformatting, or removing pre-existing code; every changed hunk should trace to the request.
4. **Goal-Driven Execution:** define observable success criteria, split multi-step tasks, and verify each step, using test-first regression checks for bugs.

## Rehla adaptation
The full principles are implemented in .agents/skills/rehla-karpathy-guidelines/SKILL.md, with a Cursor rule for IDE discovery and a short Rehla-specific examples reference. The entry skill and AGENTS.md route relevant tasks to the guidelines. The rule explicitly preserves stronger Rehla requirements: TDD, security/privacy, authorization, integrity, approved scope, and no guessed domain policy.

The source's examples are adapted, not copied wholesale. Its broad "trivial tasks may use judgment" note cannot authorize skipping TDD on behavior-changing work. "No error handling for impossible cases" cannot authorize weakening boundary validation. Model behavior remains untested until the scenario is run in an actual skill-enabled agent runtime; static checks are not evidence of behavioral compliance.
