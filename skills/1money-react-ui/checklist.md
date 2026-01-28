# Checklist (for Code Assistant)

## Imports
- [ ] Import UI components only from `@1money/react-ui`
- [ ] No direct imports from `primereact/*` appear

## Doc / Props
- [ ] Component selection based on `references/<Category>/<Component>.md`
- [ ] Props prioritize consistency with documentation API/examples
- [ ] Confirm Variants (e.g., Input type='password') instead of looking for independent components
- [ ] If using PrimeReact compatible props (e.g., `invalid` / `paginator`), confirm they are included in the references documentation

## Foundation
- [ ] Foundation recommendations from `references/Foundation/*` are referenced when visual specifications are needed
- [ ] Avoid hard-coded color values; custom spacing/typography follows Foundation conventions

## States
- [ ] Coverage by scenario: loading / empty / error / disabled / validation (list as needed)
- [ ] Clear state presentation (button loading, field invalid+message, list empty, etc.)

## Output
- [ ] Output includes: Components / States / Code
- [ ] TSX is ready to paste and run (clear naming, minimal dependencies)
