---
name: rehla-auth-and-authorization
description: Use when changing identity, sessions, RBAC, ownership checks, or privileged operations.
---

# Rehla authentication and authorization
Read .cursor/rules/02-security-and-secrets.mdc and actual auth/route implementation.
- Project rules state strict RBAC; derive roles, permissions, identity provider, and session model only from approved specs and code.
- Enforce access server-side; UI visibility is not authorization.
- Test unauthenticated, unauthorized, cross-user access where relevant, and allowed access.
- Keep tokens/secrets out of logs and source.
- If roles or transition permissions are unspecified, record the decision gap.
