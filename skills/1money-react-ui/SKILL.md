---
name: 1money-react-ui
description: Expert guide for 1Money React UI component library development. Enforces strict import rules, interface contracts, and design specifications.
triggers:
  - generate_ui
  - modify_ui
  - component_usage_query
  - ui_standardization
  - extend_ui_library
references:
  index: references/README.md
  foundation:
    tokens: references/Foundation/DesignTokens.md
    spacing: references/Foundation/Spacing.md
    typography: references/Foundation/Typography.md
examples:
  - examples/login-form.md
  - examples/table-page.md
  - examples/confirm-modal.md
  - examples/toast-feedback.md
checklist: checklist.md
rules:
  imports:
    allow: ["@1money/react-ui"]
    deny: ["primereact/*"]
  styling:
    - prefer_component_props
    - use_foundation_tokens
  compliance:
    - strict_interface_adherence
    - no_hallucinated_components
required_output:
  - components_list
  - states_list
  - tsx_code_if_requested
---

# 1money-react-ui

## Trigger

Activate this Skill when the user is involved in the following scenarios:
- Generating or modifying React-based UI interfaces
- Explicitly requesting to use the 1Money component library or forbidding PrimeReact native components
- Querying component usage or APIs
- Conducting UI standardization convergence or extending the component library

## Core Principles

1. **Strict Encapsulation**
    - **PROHIBITED**: `import { Button } from 'primereact/button'`
    - **REQUIRED**: `import { Button } from '@1money/react-ui'`
    - Always use the encapsulated library unless explicitly instructed otherwise.

2. **Interface Contract**
    - Do not guess props. Strictly consult the `references/` documentation.
    - **PROHIBITED**: Using PrimeReact props not explicitly documented or inherited in `interface.ts`.

3. **Polymorphic Handling**
    - **Input**: Do not hallucinate `<Password>` or `<InputNumber>`. Use `<Input type="password" />` or `<Input type="number" />`.
    - **InputAmount**: Use `<InputAmount />` specifically for currency/monetary fields.
    - **Select**: Distinguish `multiple` prop usage (Dropdown vs MultiSelect).

4. **Design Compliance**
    - **Layout**: Prioritize `Layout/*` components (Drawer, Collapse) over raw divs.
    - **Styling**: Prioritize component props (`severity`, `size`, `variant`) over `style={{...}}`.
    - **Tokens**: Consult `references/Foundation/DesignTokens.md`. **PROHIBIT** hardcoded Hex values.

## Workflow

1. **Audit**
    - Consult `references/README.md` to determine component classification.
    - Read the corresponding component documentation in `references/<Category>/<Component>.md`.

2. **Decision**
    - Determine component variants (Token / Variant).
    - Check for "polymorphic components" and select the correct combination of Props.

3. **Verification**
    - Verify property existence against `interface.ts` (if context is available).
    - Review Markdown example code.

## Output Notes

- **Code Output**: Output TSX only when explicitly requested or required to demonstrate implementation.
- **Purity**: Generated code should minimize external dependencies outside the UI library to ensure executability.
- **Compliance**: Ensure generated code fully adheres to the TypeScript interface definitions in references.
