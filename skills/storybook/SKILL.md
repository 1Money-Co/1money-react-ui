---
name: storybook
description: Add or update Storybook stories for components.
metadata:
  short-description: Storybook stories
  repo: '@1money/react-ui'
---

# Storybook

## Trigger
Use when the user asks to add or change Storybook stories.

## Step-by-step workflow
1. Open or create `src/components/ComponentName/ComponentName.stories.tsx`.
2. Ensure the story imports the component and `./style`.
3. Update `meta` title, `argTypes`, and default `args` to match the API.
4. Add stories for key variants and states.
5. Verify stories in the dev server (`pnpm dev`) or build docs with
   `pnpm run build:demo` if needed.

## Required checks
- Run `pnpm lint`.
- Run `pnpm test`.

## Recommended
- Run `pnpm dev` after story changes for quick visual validation.
