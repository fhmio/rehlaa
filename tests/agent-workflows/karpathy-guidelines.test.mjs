import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
const root=process.cwd();
const exists=(p)=>fs.existsSync(path.join(root,p));
const read=(p)=>fs.readFileSync(path.join(root,p),'utf8');
test('Rehla Karpathy skill covers all four source principles',()=>{
  const file='.agents/skills/rehla-karpathy-guidelines/SKILL.md';
  assert.ok(exists(file),`missing ${file}`);
  const body=read(file);
  for(const principle of ['Think Before Coding','Simplicity First','Surgical Changes','Goal-Driven Execution']) assert.ok(body.includes(principle),`missing principle: ${principle}`);
});
test('Rehla instructions and entry skill route coding tasks to Karpathy guidelines',()=>{
  assert.match(read('AGENTS.md'),/rehla-karpathy-guidelines/);
  assert.match(read('.agents/skills/rehla-development/SKILL.md'),/rehla-karpathy-guidelines/);
});
test('Cursor project rules expose all four guidelines and preserve repository priority',()=>{
  const file='.cursor/rules/karpathy-guidelines.mdc';
  assert.ok(exists(file),`missing ${file}`);
  const body=read(file);
  assert.match(body,/alwaysApply:\s*true/);
  for(const term of ['assumptions','Simplicity','Surgical','verifiable']) assert.ok(body.toLowerCase().includes(term.toLowerCase()),`missing ${term}`);
  assert.match(body,/AGENTS\.md|project rules|security|TDD/i);
});
test('Karpathy scenario documents pressure, scope boundaries, and observable checks',()=>{
  const body=read('tests/agent-workflows/scenarios/karpathy-guidelines.md');
  for(const term of ['ambiguous','minimal','unrelated','acceptance criteria','tests']) assert.ok(body.toLowerCase().includes(term.toLowerCase()),`missing scenario term ${term}`);
});
