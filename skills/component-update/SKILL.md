---
name: component-update
description: Update an existing component, styles, docs, and tests.
metadata:
  short-description: Update component
  repo: '@1money/react-ui'
---

# Component Update

## Trigger
Use when the user asks to modify an existing component or its public API.

## Step-by-step workflow
1. Identify the component folder under `src/components/ComponentName/`.
2. Update component logic in `ComponentName.tsx` and props in `interface.ts`.
3. Adjust styles in `style/ComponentName.scss` and any style exports.
4. Update Storybook stories in `ComponentName.stories.tsx` to reflect new props
   or states.
5. Update docs in `README.md` if the public API changed.
6. Update tests in `__test__/index.test.tsx` and snapshots as needed.
7. Verify exports in `src/index.ts` remain correct and alphabetized.

## Required checks
- Run `pnpm lint`.
- Run `pnpm test`.

## Recommended
- If snapshots change, run `pnpm run test:snapshot` and review diffs.
- Run `pnpm dev` to verify visual changes.

## Guardrails
- Do not edit `es/` or `lib/` directly; they are build outputs.
- Keep any public export changes alphabetized.
