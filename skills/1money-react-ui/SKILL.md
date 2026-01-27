---
name: 1money-react-ui
description: 代码助手生成/修改 React UI 的规则集：优先且尽量只用 @1money/react-ui；禁止 primereact 直引；按 references 文档与 Foundation 规范产出。
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
    allow: ["@1money/react-ui", "@1money/react-ui/*"]
    deny: ["primereact/*"]
  styling:
    - prefer_component_props_over_custom_css
    - no_hardcoded_colors
    - custom_spacing_typography_must_follow_foundation
    - colors_spacing_typography_use_foundation_tokens
required_output:
  - components_list
  - states_list
  - tsx_code_if_requested
---

# 1money-react-ui

## Trigger
启用本 Skill 当且仅当：需要生成/修改 React UI；或明确要求用 1Money 组件库/禁用 primereact；或查询组件用法；或做 UI 收敛；或扩展组件库。

## Workflow
1) 查索引：`references/README.md`
2) 查组件：`references/<Category>/<Component>.md`（以 API + 示例为准）
3) 需要规范时查：Foundation（tokens/spacing/typography）

## Output Notes
- 仅在明确要求代码或需要展示实现时输出 TSX；纯用法/选型说明可不输出代码。
