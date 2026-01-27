---
name: release
description: Release a new version using omni.
metadata:
  short-description: Release workflow
  repo: '@1money/react-ui'
---

# Release

## Trigger
Use when the user asks to publish or release a new library version.

## Step-by-step workflow
1. Ensure the working tree is clean and changes are committed.
2. Run `pnpm lint` and `pnpm test` (required gate).
3. Run `pnpm build` to generate `es/` and `lib/` outputs.
4. If docs are needed, run `pnpm run build:demo`.
5. Release with one of:
   - `pnpm release` (standard)
   - `pnpm release -i` (ignore iteration)
   - `pnpm release -m <version>` (manual version)
   - `pnpm release -n` (bypass pre-checks only if explicitly requested)

## Required checks
- `pnpm lint` must pass clean.
- `pnpm test` must pass clean.

## Notes
- Never edit `es/` or `lib/` directly; they are build outputs.
