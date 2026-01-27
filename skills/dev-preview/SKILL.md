---
name: dev-preview
description: Start the Storybook dev server and verify component changes.
metadata:
  short-description: Storybook dev server
  repo: '@1money/react-ui'
---

# Dev Preview

## Trigger
Use when the user wants to run or verify the local development preview.

## Step-by-step workflow
1. Ensure dependencies are installed with `pnpm install` if needed.
2. Start the dev server with `pnpm dev` (alias `pnpm start`).
3. Verify the target component in Storybook (default port 6205).
4. If stories or styles look off, adjust the component and re-check.
5. Stop the dev server once verification is complete.

## Required checks
- Run `pnpm lint`.
- Run `pnpm test`.

## Recommended
- If snapshot changes are expected, run `pnpm run test:snapshot` and review diffs.
