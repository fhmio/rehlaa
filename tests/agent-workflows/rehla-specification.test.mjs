import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const skillPath = ".agents/skills/rehla-specification/SKILL.md";
const skill = fs.readFileSync(path.join(root, skillPath), "utf8");
const scenarioPath = "tests/agent-workflows/scenarios/rehla-specification-design-gates.md";

test("specification classifies the request and announces its path", () => {
  for (const pathName of ["Spike", "Bounded", "Architectural"]) {
    assert.ok(skill.includes(pathName), `missing path: ${pathName}`);
  }
  assert.match(skill, /announce[^\n]*(?:classification|path)|say[^\n]*classification/i);
});

test("Spike means a bounded feasibility probe whose output is an answer", () => {
  assert.match(skill, /Spike[\s\S]*?(?:feasibility|probe)[\s\S]*?(?:answer|recommendation)/i);
  assert.match(skill, /throwaway|disposable/i);
  assert.match(skill, /approval|approve/i);
});

test("Bounded work must change an existing repo flow and use an in-chat approval gate", () => {
  assert.match(skill, /Bounded[\s\S]*?existing[^\n]*(?:flow|code|repo)/i);
  assert.match(skill, /design in chat|in-chat design/i);
  assert.match(skill, /explicit yes|explicit approval|wait[^\n]*approval/i);
  assert.match(skill, /no (?:specification|spec) file[^\n]*(?:plan|implementation plan)|no spec file[^\n]*plan/i);
});

test("Architectural work covers new projects, subsystems, or cross-component interfaces", () => {
  assert.match(skill, /Architectural[\s\S]*?(?:new project|new subsystem|interfaces?)/i);
  assert.match(skill, /2.?3 approaches|two or three approaches/i);
  assert.match(skill, /trade.?offs/i);
  assert.match(skill, /recommendation/i);
});

test("all paths block implementation until user approval", () => {
  assert.match(skill, /(?:hard|mandatory|non-negotiable)[^\n]*approval|approval gate/i);
  assert.match(skill, /before[^\n]*(?:implementation|code|scaffold)/i);
  assert.match(skill, /STOP[^\n]*approval|wait[^\n]*explicit yes/i);
});

test("classification only escalates when complexity grows and does not downgrade", () => {
  assert.match(skill, /heavier path|more rigorous path/i);
  assert.match(skill, /hidden complexity[^\n]*(?:upgrade|escalat)/i);
  assert.match(skill, /never downgrade|cannot downgrade|no downgrade/i);
});

test("context is inspected before questions and questions are asked one at a time", () => {
  assert.match(skill, /(?:inspect|explore|read)[^\n]*(?:project context|source|docs|recent commits)/i);
  assert.match(skill, /one question per message|one at a time/i);
  assert.match(skill, /purpose[^\n]*constraints[^\n]*success criteria|purpose, constraints, and success criteria/i);
});

test("architectural scope is decomposed when multiple independent subsystems are requested", () => {
  assert.match(skill, /multiple independent subsystems|independent pieces/i);
  assert.match(skill, /decompos/i);
  assert.match(skill, /separate[^\n]*(?:spec|cycle)|each sub-project[^\n]*spec/i);
});

test("design is presented in reviewable sections with observable approval gates", () => {
  assert.match(skill, /design[^\n]*(?:sections|sectioned)/i);
  assert.match(skill, /approve[^\n]*each section|approval[^\n]*each section|after each section/i);
  assert.match(skill, /architecture[^\n]*components[^\n]*data flow/i);
  assert.match(skill, /error handling/i);
  assert.match(skill, /testing/i);
});

test("architectural spec has a project-relevant destination and a user review gate", () => {
  assert.match(skill, /docs\/superpowers\/specs\/YYYY-MM-DD-/);
  assert.match(skill, /self.?review/i);
  assert.match(skill, /placeholder/i);
  assert.match(skill, /contradiction/i);
  assert.match(skill, /user review|user reviews the written spec/i);
  assert.match(skill, /before[^\n]*(?:planning|implementation plan)/i);
});

test("bounded work does not create a spec file or plan document", () => {
  assert.match(skill, /Bounded[\s\S]*?no (?:spec|design) file/i);
  assert.match(skill, /no plan document/i);
});

test("spec content includes sourced and testable requirements instead of invented rules", () => {
  for (const term of ["goal", "scope", "acceptance criteria", "inputs", "outputs", "failure", "unresolved decisions", "verification plan"]) {
    assert.ok(skill.toLowerCase().includes(term.toLowerCase()), `missing spec contract element: ${term}`);
  }
  assert.match(skill, /source[^\n]*(?:requirement|decision)|requirements?[^\n]*source/i);
  assert.match(skill, /observable|testable/i);
  assert.match(skill, /do not (?:invent|guess)|never (?:invent|guess)/i);
});

test("specification protects existing architecture and applies YAGNI", () => {
  assert.match(skill, /existing (?:functionality|patterns|structure)|existing codebase/i);
  assert.match(skill, /YAGNI|smallest scope|unnecessary features/i);
  assert.match(skill, /unrelated refactor/i);
});

test("approved policy gaps block only the dependent behavior", () => {
  assert.match(skill, /missing[^\n]*(?:rule|requirement|policy)/i);
  assert.match(skill, /record[^\n]*(?:gap|decision)/i);
  assert.match(skill, /stop[^\n]*(?:affected|dependent) behavior/i);
});

test("specification preserves Rehla inline-only execution constraints", () => {
  assert.match(skill, /inline[^\n]*(?:sequential|only)/i);
  assert.match(skill, /never offer[^\n]*(?:subagent|parallel)|do not offer[^\n]*(?:subagent|parallel)/i);
});

test("design-gate scenario defines pressure cases and evaluation limits", () => {
  assert.ok(fs.existsSync(path.join(root, scenarioPath)), "missing design-gates scenario");
  const scenario = fs.readFileSync(path.join(root, scenarioPath), "utf8");
  assert.match(scenario, /Baseline status:[^\n]*NOT RUN/i);
  assert.match(scenario, /## Pass criteria/);
  assert.match(scenario, /## Fail criteria/);
  assert.match(scenario, /approval|approve/i);
  assert.match(scenario, /architectural|cross.?component|subsystem/i);
});


test("specification workflow remains concise enough for reliable discovery", () => {
  const wordCount = skill.trim().split(/\\s+/).length;
  assert.ok(wordCount < 500, `specification skill has ${wordCount} whitespace-delimited words; expected fewer than 500`);
});
