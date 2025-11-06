# Repository Guidelines

## Project Structure & Module Organization
- `src/` contains the TypeScript source; reusable widgets live in `src/components/*`, each with colocated props, styles, and tests.
- Component tests sit in `src/components/*/__test__/index.test.tsx`, with Jest snapshots tracked under `__snapshots__`.
- Storybook examples and playground stories reside in `src/stories/`; shared tokens and themes live in `src/variable.scss`.
- Build artifacts are written to `es/` (ESM) and `lib/` (CJS) by the Omni pipeline—never edit these outputs directly.
- Static assets originate from `public/`, while configuration (babel, tailwind, eslint, stylelint) is at the repo root.

## Build, Test, and Development Commands
- `pnpm install` boots the workspace and applies local `patches/`.
- `pnpm dev` (alias `pnpm start`) runs `omni dev` with hot reloading for component previews.
- `pnpm build` runs `omni build`, compiling TypeScript, styles, and type declarations into `es/` and `lib/`.
- `pnpm run build:demo` produces Storybook docs in `dist-story/` for documentation or visual review handoff.
- `pnpm test` executes the Jest suite with Testing Library; append `:snapshot` to refresh approved snapshots.
- `pnpm lint` chains Prettier, ESLint, and Stylelint checks; use `pnpm run lint:fix` before committing to auto-resolve issues.

## Coding Style & Naming Conventions
- Prettier enforces 2-space indentation, 50-character print width, single quotes, and no trailing commas; run `pnpm lint:prettier_fix` after edits.
- Follow ESLint rules in `eslint.config.js`; components and stories use PascalCase filenames, hooks/utilities use camelCase.
- Style files (`.scss`, `.less`, `.css`) follow kebab-case names and Stylelint ordering; colocate styles with their component folder.
- Export public components through `src/index.ts`, keeping barrel exports alphabetized and tree-shake friendly.

## Testing Guidelines
- Write unit tests with Jest + `@testing-library/react`; prefer user-centric queries (`screen.getByRole`).
- Place new specs within the component’s `__test__` folder; mock browser APIs via `setupTests.js` when needed.
- Maintain existing snapshots; regenerate with `pnpm run test:snapshot` and explain diffs in PRs.
- Cover new states, accessibility flows, and edge cases; async interactions should await `screen.findBy...`.

## Commit & Pull Request Guidelines
- Commit messages must satisfy commitlint, using allowed types like `fix:`, `feat:`, `update:`, or scoped tags (`[OMNI-DOOR]`), plus optional issue refs `(#211)`.
- Keep commits focused and run `pnpm lint` and `pnpm test` locally before pushing to prevent CI regressions.
- Pull requests require a concise summary, linked issues, and screenshots or Storybook URLs for visual changes.
- Request at least one reviewer; mark PRs as draft until checks pass and documentation is updated.
