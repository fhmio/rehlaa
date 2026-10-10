---
name: rehla-release
description: Use when an explicitly authorized Rehla product version or release artifact must be prepared or published.
---

# Rehla release workflow
## Preconditions
Confirm authorization/scope, branch/tag state, clean tree, versioning config, CI results, and release-note policy.
## Workflow
1. Inspect manifests and release config. Do not assume Changesets is configured; it was not found in the inspected tree.
2. Identify packages and user-visible changes in the release range.
3. Verify required checks and supported version/changelog mechanism.
4. Derive notes from committed changes; do not invent shipped behavior.
5. Check version/tag consistency and release artifacts.
6. Publishing/tagging/deployment requires explicit authorization. Otherwise prepare notes/checklist and stop.
7. Record release identifier, commit, packages, checks, notes, and whether publishing occurred.
## Verification
Do not say released when work was only prepared. Release is separate from branch finishing.