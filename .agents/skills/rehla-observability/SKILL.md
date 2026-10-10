---
name: rehla-observability
description: Use when changing logs, metrics, traces, error reporting, diagnostics, or alerts.
---

# Rehla observability
Read .cursor/rules/14-observability-logging.mdc and inspect current implementation before choosing APIs.
- Emit useful structured diagnostic context and correlation identifiers where supported.
- Never log passwords, tokens, bank receipts, personal documents, or sensitive payloads.
- Preserve error contracts and distinguish expected validation failures from unexpected failures.
- Test log/error shape where supported; avoid unstable timestamp assertions.
- Do not claim monitoring exists because a rule mentions it; cite verified configuration.
