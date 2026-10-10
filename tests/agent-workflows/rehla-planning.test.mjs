import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const skillPath = ".agents/skills/rehla-planning/SKILL.md";
const skill = fs.readFileSync(path.join(root, skillPath), "utf8");
const scenarioPath = "tests/agent-workflows/scenarios/rehla-planning-quality.md";

test("planning only begins from an approved, sufficiently clear specification", () => {
  assert.match(skill, /approved specification|approved spec/i);
  assert.match(skill, /before (?:touching|writing|changing) code|before code changes|before implementation/i);
  assert.match(skill, /approval, scope, or a business rule is unresolved|unresolved[^\n]*(?:requirement|decision)/i);
});

test("planning skill announces its use and defines its output", () => {
  assert.match(skill, /announce[^\n]*(?:planning|plan)|using[^\n]*planning skill/i);
  assert.match(skill, /implementation plan/i);
});

test("plans use the documented default path and honor approved project conventions", () => {
  assert.match(skill, /docs\/superpowers\/plans\/YYYY-MM-DD-/);
  assert.match(skill, /user preferences|approved project convention/i);
});

test("scope check decomposes multi-subsystem specifications before planning", () => {
  assert.match(skill, /multiple independent subsystems|independent subsystems/i);
  assert.match(skill, /decompos|separate plans/i);
  assert.match(skill, /each plan[^\n]*(?:working|testable|independent)/i);
});

test("file map precedes tasks and assigns responsibility and interfaces", () => {
  assert.match(skill, /Before defining tasks, map files/i);
  assert.match(skill, /responsibilit/i);
  assert.match(skill, /existing codebase|established patterns/i);
});

test("task boundaries are right-sized and independently testable", () => {
  assert.match(skill, /smallest unit|smallest independently/i);
  assert.match(skill, /independently testable/i);
  assert.match(skill, /2.?5 minutes|2–5 minutes/i);
  assert.match(skill, /one action/i);
});

test("plan header has goal, architecture, stack, spec, and global constraints", () => {
  for (const term of ["Goal", "Architecture", "Tech Stack", "Spec", "Global Constraints"]) {
    assert.ok(skill.includes(term), "missing plan header field: " + term);
  }
});

test("global constraints are copied from approved requirements, not reinvented", () => {
  assert.match(skill, /Global Constraints/);
  assert.match(skill, /copied verbatim from the approved spec|exact constraints from the spec/i);
  assert.match(skill, /approved spec/i);
});

test("each task names exact create/modify/test paths and consumed/produced interfaces", () => {
  for (const term of ["Files", "Create", "Modify", "Test", "Interfaces", "Consumes", "Produces"]) {
    assert.ok(skill.includes(term), "missing task field: " + term);
  }
  assert.match(skill, /exact[\s\S]*?paths/i);
  assert.match(skill, /signatures, parameter\/return types|parameter[^\n]*return types/i);
});

test("behavior tasks specify RED, minimal implementation, GREEN, and regression checks", () => {
  assert.match(skill, /failing test|test first/i);
  assert.match(skill, /Expected: FAIL|intended RED/i);
  assert.match(skill, /Minimal implementation/i);
  assert.match(skill, /Expected: PASS|expected GREEN/i);
  assert.match(skill, /regression/i);
});

test("test and verification instructions contain real commands and expected output", () => {
  assert.match(skill, /Run:/);
  assert.match(skill, /Expected:/);
  assert.match(skill, /verify[^\n]*(?:command|output|result)/i);
  assert.match(skill, /repository-backed command|verified scripts and commands/i);
});

test("implementation steps are actionable rather than placeholders", () => {
  assert.match(skill, /No placeholders/i);
  assert.match(skill, /TBD/);
  assert.match(skill, /TODO/);
  assert.match(skill, /add appropriate error handling\/validation|write tests for the above|similar to Task N/i);
  assert.match(skill, /Code blocks required for code steps|complete runnable\/adaptable code/i);
});

test("plans define exact interfaces across tasks and avoid undefined names/types", () => {
  assert.match(skill, /types|signatures/i);
  assert.match(skill, /type consistency/i);
  assert.match(skill, /undefined types\/functions|undefined[^\n]*(?:function|type|method)/i);
});

test("self-review covers spec coverage, placeholders, type consistency, and path mismatches", () => {
  assert.match(skill, /Self-review/i);
  assert.match(skill, /every spec requirement/i);
  assert.match(skill, /scan placeholders/i);
  assert.match(skill, /type consistency/i);
  assert.match(skill, /verify paths\/commands|path[^\n]*(?:mismatch|verify|existing)/i);
});

test("unknown commands and paths become discovery tasks, not inventions", () => {
  assert.match(skill, /repository evidence|repository-backed/i);
  assert.match(skill, /discovery tasks\/blockers|discovery tasks/i);
  assert.match(skill, /never invent|do not invent|rather than guess/i);
});

test("execution handoff enforces inline sequential work only", () => {
  assert.match(skill, /inline[^\n]*(?:sequential|only)/i);
  assert.match(skill, /never offer subagent or parallel execution|do not offer[^\n]*(?:subagent|parallel)/i);
  assert.doesNotMatch(skill, /(?:option 1|option 2|choose)[^\n]*(?:subagent|parallel)/i);
});

test("planning does not start implementation or claim unrun validation", () => {
  assert.match(skill, /Do not implement while planning|plan[^\n]*(?:not implement|implementation starts after|handoff)/i);
  assert.match(skill, /Passed|Failed|Blocked|Not run|NOT RUN/i);
  assert.match(skill, /never claim an unrun check passed|never claim[^\n]*(?:command|test)/i);
});

test("pressure scenario records baseline status and measurable pass/fail criteria", () => {
  assert.ok(fs.existsSync(path.join(root, scenarioPath)), "missing planning-quality scenario");
  const scenario = fs.readFileSync(path.join(root, scenarioPath), "utf8");
  assert.match(scenario, /Baseline status:[^\n]*NOT RUN/i);
  assert.match(scenario, /## Pass criteria/);
  assert.match(scenario, /## Fail criteria/);
  assert.match(scenario, /placeholder|invent|parallel|RED/i);
});

test("planning skill stays concise enough to load and apply reliably", () => {
  const wordCount = skill.trim().split(/\s+/).length;
  assert.ok(wordCount < 500, "planning skill has " + wordCount + " words; expected fewer than 500");
});
