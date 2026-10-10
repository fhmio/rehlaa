# Rehla Karpathy Guidelines — focused examples

These examples adapt the four principles from the attached project to Rehla's verified repository context.

## 1. Think Before Coding: state enum is not workflow policy

**Request:** Allow an application to move from paid to approved.

**Incorrect:** infer the whole transition policy and implement it because ApplicationSchema includes both statuses.

**Correct:** inspect approved specifications and current workflow code. The enum proves that both values exist; it does not prove allowed transitions or who may perform them. Record the missing decision and ask for an approved rule before changing behavior.

## 2. Simplicity First: avoid speculative architecture

**Request:** Add a filter to the existing visa-service listing.

**Incorrect:** introduce a generic search strategy hierarchy, plugin system, caching layer, and configuration schema before requirements or measurements justify them.

**Correct:** identify the actual listing path and contract, implement the requested filter in the existing pattern, and test accepted filter inputs. Extend the design only when an approved requirement demands it.

## 3. Surgical Changes: fix one schema defect

**Request:** Correct one validation rule in packages/api/src/schemas.ts.

**Incorrect:** reformat adjacent schemas, rename unrelated fields, alter every error message, and clean up old code in the same patch.

**Correct:** add the regression test, adjust the relevant schema and affected consumer only, preserve neighboring style, and inspect the diff for unrelated hunks.

## 4. Goal-Driven Execution: make success observable

**Request:** Fix a bug where an invalid input is accepted.

**Incorrect:** say "validation improved" after editing the schema.

**Correct:** define the accepted/rejected input and expected error contract; run a test that fails because the input was accepted; implement the minimal fix; rerun the test and applicable suite; report actual results and any checks not run.

## Non-negotiable boundary

Simplicity does not permit removing required Zod validation, authorization, security checks, privacy protection, or test-first verification. If a rule is not specified, surface the gap rather than inventing it.
