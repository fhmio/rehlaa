---
name: rehla-security-and-privacy
description: Use when a change touches secrets, personal data, uploads, authorization, external input, logging, or security-sensitive behavior.
---

# Rehla security and privacy
1. Read security/secrets and upload/storage rules plus affected code.
2. Identify trust boundaries, sensitive data, callers, permissions, and error paths.
3. Validate at boundaries; authorize privileged operations; avoid leaking secrets/internals in errors.
4. Keep secrets and sensitive payloads out of tests/logs/evaluation output.
5. Derive file size/type/access/retention from approved requirements.
6. Add focused invalid-input/unauthorized tests and run available checks.
7. State uncovered areas; do not claim a full security audit from a scoped review.
