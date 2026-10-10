import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const skill = fs.readFileSync(path.join(root, ".agents/skills/rehla-development/SKILL.md"), "utf8");
const scenarioPath = path.join(root, "tests/agent-workflows/scenarios/rehla-development-routing.md");

test("entry skill requires skill discovery and full applicable skill loading before action", () => {
  assert.match(skill, /inspect[^\n]*(available|runtime)[^\n]*skills/i);
  assert.match(skill, /full[^\n]*SKILL\.md/i);
  assert.match(skill, /before[^\n]*(acting|action|planning|researching|editing)/i);
});

test("entry skill provides a deterministic task-routing order", () => {
  for (const term of ["specification", "planning", "inline", "TDD", "debugging", "review", "verification"]) {
    assert.ok(skill.toLowerCase().includes(term.toLowerCase()), `missing route: ${term}`);
  }
  assert.match(skill, /specify unresolved requirements.*plan if multi-step.*implement with TDD.*review.*verify/s);
});

test("entry skill distinguishes confirmed facts, approved decisions, and unknowns", () => {
  assert.match(skill, /confirmed facts/i);
  assert.match(skill, /approved decisions/i);
  assert.match(skill, /unresolved questions|unknowns/i);
  assert.match(skill, /stop the affected/i);
});

test("entry skill preserves inline-only sequential execution", () => {
  assert.match(skill, /inline[^\n]*(sequential|one at a time)/i);
  assert.match(skill, /(?:do not offer|never offer)[^\n]*(delegat|subagent|parallel)/i);
});

test("entry skill prohibits inferring project architecture or business policy", () => {
  assert.match(skill, /Verify paths and commands exist/i);
  assert.match(skill, /Never infer deployed services, roles\/permissions, state transitions/i);
});

test("entry skill defines evidence-based completion statuses", () => {
  for (const term of ["Passed", "Failed", "Blocked", "Not run"]) {
    assert.ok(skill.includes(term), `missing completion status: ${term}`);
  }
  assert.match(skill, /Static checks prove document structure,[^\n]*not model behavior/i);
});

test("entry skill applies skill-authoring TDD to skill edits", () => {
  assert.match(skill, /baseline scenarios before editing/i);
  assert.match(skill, /rerun them afterward/i);
});

test("routing scenario declares evaluation status and observable pass criteria", () => {
  assert.ok(fs.existsSync(scenarioPath), "missing entry-routing scenario");
  const scenario = fs.readFileSync(scenarioPath, "utf8");
  assert.match(scenario, /Baseline status:[^\n]*NOT RUN/i);
  assert.match(scenario, /## Pass criteria/);
  assert.match(scenario, /## Fail criteria/);
});
