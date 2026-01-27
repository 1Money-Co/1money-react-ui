---
name: lint-test
description: Run linting and tests as a quality gate before finishing work.
metadata:
  short-description: Lint and test gate
  repo: '@1money/react-ui'
---

# Lint and Test Gate

## Trigger
Use at the end of any code change or when the user requests validation.

## Step-by-step workflow
1. Run `pnpm lint` to check ESLint, Prettier, and Stylelint.
2. If lint fails, run `pnpm run lint:fix`, resolve remaining issues, and rerun
   `pnpm lint`.
3. Run `pnpm test`.
4. If snapshots changed intentionally, run `pnpm run test:snapshot` and review
   the diffs, then rerun `pnpm test`.

## Required checks
- `pnpm lint` must pass clean.
- `pnpm test` must pass clean.
