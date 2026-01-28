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

1.  **Strict Encapsulation**
    - **PROHIBITED**: `import { Button } from 'primereact/button'`
    - **REQUIRED**: `import { Button } from '@1money/react-ui'`
    - Always use the encapsulated library unless explicitly instructed otherwise.

2.  **Interface Contract**
    - Do not guess props. Strictly consult the `references/` documentation.
    - **PROHIBITED**: Using PrimeReact props not explicitly documented or inherited in `interface.ts`.

3.  **Polymorphic Handling**
    - **Input**: Do not hallucinate `<Password>` or `<InputNumber>`. Use `<Input type="password" />` or `<Input type="number" />`.
    - **InputAmount**: Use `<InputAmount />` specifically for currency/monetary fields.
    - **Select**: Distinguish `multiple` prop usage (Dropdown vs MultiSelect).

4.  **Design Compliance**
    - **Layout**: Prioritize `Layout/*` components (Drawer, Collapse) over raw divs.
    - **Styling**: Prioritize component props (`severity`, `size`, `variant`) over `style={{...}}`.
    - **Tokens**: Consult `references/Foundation/DesignTokens.md`. **PROHIBIT** hardcoded Hex values.

## Workflow

1.  **检索 (Audit)**
    - 查阅 `references/README.md` 确定组件归属。
    - 读取对应组件文档 `references/<Category>/<Component>.md`。

2.  **决策 (Decision)**
    - 确定组件变体（Token / Variant）。
    - 检查是否为“多态组件”并选择正确的 Props 组合。

3.  **验证 (Verification)**
    - 对照 `interface.ts` (如果有上下文) 确认属性存在。
    - 检查 Markdown 示例代码。

## Output Notes
- **代码输出**：仅在明确要求或需要展示实现时输出 TSX。
- **纯粹性**：生成的代码应尽量减少非 UI 库的外部依赖，确保可运行。- 确保生成的代码完全符合 references 中的 TypeScript 接口定义。
