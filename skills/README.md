# Repo-local skills

These skills are tailored to @1money/react-ui. They are step-by-step workflows
and enforce lint/test runs before completion. Use these as the default playbooks
for repo tasks.

## Skills
- dev-preview: start and verify Storybook dev server
- component-create: scaffold and ship a new component
- component-update: change an existing component, including tests and snapshots
- component-deprecate: remove or deprecate a component safely
- storybook: add/update component stories
- storybook-docs: build Storybook docs for review or handoff
- lint-test: quality gate for linting and tests
- build: build the library (ESM + CJS)
- release: release a new version via omni

## Required checks
All skills that modify code must end with:
- `pnpm lint`
- `pnpm test`

If checks fail, fix issues (recommended: `pnpm run lint:fix`, update snapshots if
needed) and rerun the required checks.

## Trigger index
Use these quick mappings to pick the right skill:
- “Create a new component” → component-create
- “Change a component API or behavior” → component-update
- “Add or update Storybook stories” → storybook
- “Build Storybook docs for sharing” → storybook-docs
- “Run lint/tests for validation” → lint-test
- “Remove or deprecate a component” → component-deprecate
- “Build outputs” → build
- “Release a new version” → release
- “Preview in Storybook” → dev-preview

## Examples
- Add a new InputCurrency component with stories and tests → component-create
- Update Button props and snapshots → component-update
- Add a new Storybook variant → storybook
- Build Storybook docs for a handoff → storybook-docs
- Verify everything before PR → lint-test

## Conventions
- Component names are PascalCase and live in `src/components/ComponentName/`.
- Tests are in `src/components/ComponentName/__test__/index.test.tsx` with snapshots.
- Stories are in `src/components/ComponentName/ComponentName.stories.tsx` and must import `./style`.
- Styles are colocated under `src/components/ComponentName/style/` with kebab-case filenames.
- Public exports live in `src/index.ts` and must remain alphabetized.
