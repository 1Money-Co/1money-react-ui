---
name: component-create
description: Scaffold and implement a new component in src/components.
metadata:
  short-description: Create component
  repo: '@1money/react-ui'
---

# Component Create

## Trigger
Use when the user asks to add a new component to the library.

## Step-by-step workflow
1. Pick a PascalCase component name and confirm intended API/props.
2. Scaffold with `pnpm new ComponentName -f` (or `pnpm new` for interactive).
3. Implement the component in `src/components/ComponentName/ComponentName.tsx`.
4. Define props in `src/components/ComponentName/interface.ts`.
5. Add styles in `src/components/ComponentName/style/ComponentName.scss` and export
   from `src/components/ComponentName/style/index.ts`.
6. Create or update the Storybook file at
   `src/components/ComponentName/ComponentName.stories.tsx` (import `./style`).
7. Update component docs in `src/components/ComponentName/README.md`.
8. Add tests in `src/components/ComponentName/__test__/index.test.tsx` and update
   snapshots as needed.
9. Export the component from `src/components/ComponentName/index.ts` and add the
   public export to `src/index.ts` (keep alphabetized).
10. Add a matching entry under `package.json` `exports` for individual imports,
   and keep export ordering consistent with existing entries.

## Required checks
- Run `pnpm lint`.
- Run `pnpm test`.

## Recommended
- If snapshots change, run `pnpm run test:snapshot` and review diffs.
- Run `pnpm dev` to verify stories interactively.

## Guardrails
- Do not edit `es/` or `lib/` directly; they are build outputs.
- Ensure `src/index.ts` and `package.json` `exports` stay alphabetized.
