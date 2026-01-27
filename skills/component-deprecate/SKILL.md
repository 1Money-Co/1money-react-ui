---
name: component-deprecate
description: Deprecate or remove a component safely.
metadata:
  short-description: Deprecate component
  repo: '@1money/react-ui'
---

# Component Deprecate

## Trigger
Use when the user asks to deprecate or remove a component from the library.

## Step-by-step workflow
1. Identify the component under `src/components/ComponentName/`.
2. Decide on deprecate vs remove:
   - Deprecate: keep component but mark it as deprecated in docs and types.
   - Remove: delete component and public exports.
3. If replacing, record the successor component in docs and stories.
3. If deprecating:
   - Add a deprecation note to `src/components/ComponentName/README.md`.
   - Add a JSDoc `@deprecated` tag to the exported component and relevant props.
   - Update stories to highlight the replacement if any.
4. If removing:
   - Remove the component folder under `src/components/ComponentName/`.
   - Remove exports from `src/components/ComponentName/index.ts` (if present)
     and `src/index.ts` (keep alphabetized).
   - Remove the `package.json` `exports` entry for that component.
5. Search for internal usage in `src/` and update as needed.
6. Update tests and snapshots; delete tests for removed components.
7. Update Storybook stories and docs references.

## Required checks
- Run `pnpm lint`.
- Run `pnpm test`.

## Recommended
- If snapshots change, run `pnpm run test:snapshot` and review diffs.
- Run `pnpm dev` to validate Storybook updates.

## Guardrails
- Do not edit `es/` or `lib/` directly; they are build outputs.
- Keep public exports alphabetized.

## Replacement mapping
If the component has a successor, document it in `README.md` using this format:

```\n+Deprecated in favor of: <ReplacementComponent> (<brief reason>)\n+```

Also update stories to demonstrate the replacement if practical.
