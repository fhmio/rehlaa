---
name: rehla-admin-dashboard
description: Use when changing administrator-facing screens, data grids, workflows, or role-gated controls.
---

# Rehla admin dashboard
README/Cursor rules describe an admin app, but apps/admin was absent from the inspected tree. Recheck current branch and approved scope before making changes; do not create an app as a side effect of unrelated work.
- Use existing design system and admin rules when the app/components are present.
- Specify role, allowed actions, loading/empty/error states, validation, accessibility, RTL/i18n, and responsive behavior as relevant.
- UI gating is not server authorization.
- Test with the actual installed framework.
- If admin is only planned, create a spec/plan dependency rather than referencing fictional paths.
