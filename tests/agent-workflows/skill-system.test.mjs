import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const read = (relative) => fs.readFileSync(path.join(root, relative), "utf8");
const exists = (relative) => fs.existsSync(path.join(root, relative));
const coreSkills = [
  "rehla-development", "rehla-specification", "rehla-planning",
  "rehla-executing-plans", "rehla-tdd", "rehla-systematic-debugging",
  "rehla-code-review", "rehla-verification", "rehla-branch-finish",
  "rehla-release", "rehla-skill-authoring"
];
const skillPath = (name) => ".agents/skills/" + name + "/SKILL.md";

test("project instructions establish verified Rehla constraints", () => {
  const instructions = read("AGENTS.md");
  for (const term of ["pnpm", "Turborepo", "Inline Execution", "RED", "GREEN", "never invent"]) {
    assert.ok(instructions.toLowerCase().includes(term.toLowerCase()), "AGENTS.md must contain " + term);
  }
});

test("all workflow skills exist and have valid discoverable frontmatter", () => {
  for (const name of coreSkills) {
    const file = skillPath(name);
    assert.ok(exists(file), "missing " + file);
    const body = read(file);
    const fm = body.match(/^---\s*\n([\s\S]*?)\n---/);
    assert.ok(fm, file + ": missing YAML frontmatter");
    assert.match(fm[1], new RegExp("^name:\\s*" + name + "\\s*$", "m"), file + ": name mismatch");
    const description = fm[1].match(/^description:\s*(.+)$/m)?.[1] ?? "";
    assert.match(description, /^Use when\b/i, file + ": description must specify trigger conditions");
    assert.ok(body.includes("## "), file + ": expected structured skill sections");
  }
});

test("inline execution skill does not expose delegated execution as an option", () => {
  const body = read(skillPath("rehla-executing-plans")).toLowerCase();
  assert.match(body, /inline execution/);
  assert.match(body, /do not (?:offer|use|delegate|switch).*subagent|subagent.*(?:not an option|prohibited|forbidden)/s);
});

test("entry skill references point to existing files", () => {
  const refs = [
    ".agents/skills/rehla-development/references/architecture-map.md",
    ".agents/skills/rehla-development/references/module-boundaries.md",
    ".agents/skills/rehla-development/references/coding-standards.md",
    ".agents/skills/rehla-development/references/api-contracts.md",
    ".agents/skills/rehla-development/references/security-and-data-rules.md",
    ".agents/skills/rehla-development/references/testing-policy.md",
    ".agents/skills/rehla-development/references/git-and-release-policy.md"
  ];
  for (const file of refs) assert.ok(exists(file), "missing reference " + file);
});

test("evaluation scenarios cover the required behavioral risks", () => {
  const files = [
    "tests/agent-workflows/scenarios/inline-execution.md",
    "tests/agent-workflows/scenarios/tdd-discipline.md",
    "tests/agent-workflows/scenarios/verification-honesty.md",
    "tests/agent-workflows/scenarios/domain-unknowns.md",
    "tests/agent-workflows/scenarios/skill-authoring-tdd.md"
  ];
  for (const file of files) assert.ok(exists(file), "missing scenario " + file);
});
