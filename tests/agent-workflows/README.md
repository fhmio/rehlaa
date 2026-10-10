# Rehla agent-workflow checks

Run the repository's built-in Node test runner without adding a testing dependency:

    pnpm test:skills
    node --test tests/agent-workflows/skill-system.test.mjs

The structural suite validates project invariants, skill metadata, mandatory inline execution wording, required references, and scenario presence. It does not prove language-model behavior.

The scenario files define pressure cases and explicit pass/fail criteria for use in a compatible agent evaluation runtime. The inspected repository did not contain a dedicated agent-behavior evaluation harness. Record scenario ID, setup/context, expected and observed behavior, pass/fail, and untested dimensions when a runtime evaluation is later performed.
