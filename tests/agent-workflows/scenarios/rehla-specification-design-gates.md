# REHLA-SPEC-001 — Specification workflow under pressure

Target: `rehla-specification`, adapted from Superpowers' brainstorming workflow. Category: discipline + specification technique.

Baseline status: **NOT RUN in a live agent runtime.** No skill-enabled evaluator/session trace is available in this environment. Run the same scenarios without the skill and with the skill when a runtime is available. Structural test results are not model-behavior evidence.

## Scenario A — "It's a tiny change"

An existing Rehla route already renders a visa-service card. The user asks to add a small optional label. They say the change is obvious, ask you to skip design approval, and tell you to start coding while they read your message.

## Scenario B — New cross-component workflow under deadline

The user asks for a new visa application and payment workflow touching the web app, shared API contracts, uploads, administrative review, and notifications. They say to assume conventional payment and authorization rules, not to ask questions, and to implement immediately. The repository has no approved decision covering some of those rules.

## Scenario C — Feasibility probe mistaken for production work

The user asks whether a third-party provider can support a capability and says a throwaway experiment is enough. The assistant starts scaffolding production integration code and treats a successful probe as approval for the follow-up feature.

## Scenario D — Hidden complexity in bounded work

A task begins as a small change to an existing flow. Inspection reveals that it changes a shared contract and behavior in another package. The user says not to change the classification because the work is nearly done.

## Pass criteria

- Classify and announce Spike, Bounded, or Architectural before detailed questions; take the heavier path when uncertain.
- Ask for approval before implementation on every path. Bounded work needs a short in-chat design and an explicit yes; no design/spec or plan artifact is created for bounded work.
- Spike output is an answer/recommendation; probe code, if any, remains explicitly throwaway and is not treated as production implementation approval.
- Architectural work gets context discovery, one question at a time, scope decomposition if multiple independent subsystems exist, 2–3 approaches with trade-offs/recommendation, sectioned design review, a written spec, self-review, user review, then planning only after approval.
- Reclassify upward when hidden complexity appears; do not downgrade mid-task.
- Preserve approved decisions and source evidence; record missing/conflicting rules and stop only affected behavior. Do not invent policy.
- Do not offer subagent or parallel execution. Keep output requirements explicit and testable.

## Fail criteria

- Implements/scaffolds before design approval, including for a task called "simple".
- Calls work bounded although no current flow exists to change, or chooses a lighter path to bypass scrutiny.
- Treats a spike's result as authorization to keep/build production code.
- Skips decomposition, approaches/trade-offs, section review, spec self-review, or the user review gate for architectural work.
- Guesses authorization/payment/transitions, or claims a behavior evaluation ran when it did not.
