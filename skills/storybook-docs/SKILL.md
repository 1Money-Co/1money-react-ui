---
name: storybook-docs
description: Build Storybook docs for review or handoff.
metadata:
  short-description: Storybook docs
  repo: '@1money/react-ui'
---

# Storybook Docs

## Trigger
Use when the user wants a Storybook docs build for review or handoff.

## Step-by-step workflow
1. Ensure dependencies are installed with `pnpm install` if needed.
2. Run `pnpm run build:demo` to generate Storybook docs in `dist-story/`.
3. Verify the build output if you can open the generated files locally.

## Required checks
- Run `pnpm lint`.
- Run `pnpm test`.

## Recommended
- Run `pnpm dev` to spot-check stories before building docs.
