---
name: build
description: Build the library outputs with omni.
metadata:
  short-description: Build library
  repo: '@1money/react-ui'
---

# Build

## Trigger
Use when the user asks to build the library or verify production outputs.

## Step-by-step workflow
1. Ensure dependencies are installed with `pnpm install` if needed.
2. Run `pnpm build` to generate `es/` and `lib/` outputs.
3. If a faster build without pre-checks is explicitly requested, use
   `pnpm build -n`.

## Required checks
- Run `pnpm lint`.
- Run `pnpm test`.

## Recommended
- Run `pnpm run build:demo` if Storybook docs are needed.

## Notes
- Never edit `es/` or `lib/` directly; they are build outputs.
