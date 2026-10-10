---
name: rehla-integration-testing
description: Use when a change spans packages or crosses API/data/UI boundaries.
---

# Rehla integration testing
- Inspect actual test dependencies and scripts first. Cursor rules mention Vitest/RTL, Playwright, and Detox; verify each exists before using.
- Test observable integration boundaries: schema through consumers, route/SDK behavior, auth, persistence where implemented, and UI/API flows where present.
- Use deterministic fixtures and cleanup; avoid live services/sensitive data unless test infrastructure is configured.
- Separate unit, integration, E2E, and agent-behavior claims.
- Record exact command, result, and blockers.
