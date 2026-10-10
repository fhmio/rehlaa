---
name: rehla-karpathy-guidelines
description: Use when clarifying ambiguous coding tasks, deciding implementation scope, reviewing changes, or guarding against overengineering and unrelated edits.
---

# Rehla Karpathy Guidelines

A Rehla-adapted form of the four principles in the attached Andrej Karpathy Skills project. Use these guidelines to shape judgment and change scope; use Rehla's specialized workflow skills to carry out the work.

## Priority

These guidelines supplement AGENTS.md, approved specifications, security/privacy rules, authorization requirements, and TDD. They never relax a stronger project rule. In particular, "keep it simple" is not permission to remove validation, security controls, or regression tests.

## 1. Think Before Coding

- Read repository instructions, relevant code, contracts, and decisions before making claims.
- Separate confirmed facts, assumptions, and unresolved questions.
- If multiple interpretations would change behavior, security, data, or scope, stop and ask one focused question; do not silently choose.
- Explain tradeoffs only when there is a real decision. Do not ask questions already answered by project sources.
- If a business rule is unspecified, record the decision gap rather than inventing it.

## 2. Simplicity First

- Implement the smallest change that satisfies the approved requirement and acceptance criteria.
- Do not add speculative features, single-use abstractions, configuration, caching, extension points, or infrastructure without evidence of need.
- Follow the established architecture and patterns instead of redesigning adjacent systems.
- Retain validation, authorization, privacy, integrity, and error handling required by public boundaries or project rules.
- Defer future complexity until a real requirement justifies it.

## 3. Surgical Changes

- Touch only files and lines required by the task and its tests/contracts.
- Preserve surrounding naming, formatting, comments, signatures, and established style unless the task requires changing them.
- Do not perform drive-by refactoring or remove pre-existing code merely because it looks unused.
- Remove only dead imports/variables/functions made obsolete by your own change.
- Review the diff: every changed hunk must trace to a requirement, acceptance criterion, or necessary test.

## 4. Goal-Driven Execution

- Express success as observable acceptance criteria before implementation.
- Break multi-step work into small steps, each with a specific verification result.
- For behavior changes, use rehla-tdd: observe the intended RED, implement minimally, confirm GREEN, then run relevant regressions.
- Use rehla-systematic-debugging for failures and rehla-verification before completion claims.
- Continue until criteria are met or report an evidence-backed blocker; never substitute intention for verification.

## Apply proportionally

Do not create ceremony for an obvious non-behavioral edit. However, behavior-changing code must still follow TDD, and security/authorization/data-integrity checks remain mandatory whenever relevant.

## Quick self-review

Before finalizing, ask:
1. What facts support this interpretation, and what remains unknown?
2. Can any added abstraction, option, or changed behavior be removed while still meeting the requirement?
3. Does each diff hunk directly support the request?
4. What observed output proves the acceptance criteria are met?

## Reference

See references/karpathy-examples.md for Rehla-specific good/bad patterns. Source: attached andrej-karpathy-skills-main.zip; adapted rather than copied wholesale. The source project identifies its plugin as MIT-licensed and links the original observations; preserve attribution if redistributing the adaptation.
