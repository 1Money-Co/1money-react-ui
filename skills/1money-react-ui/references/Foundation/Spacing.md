---
name: Spacing
category: Foundation
description: 间距与尺寸规范（针对组件库与业务侧生成代码的约束）
---

# Spacing

## 目标

- 让代码助手在生成页面/组件时保持一致的留白与对齐。
- 避免业务侧散落 magic numbers；需要新间距时优先沉淀到 tokens。

## 当前现状（从源码观察）

- 组件样式中存在直接使用 `px` 的 padding/margin/height（详见各组件 `style/*.scss`）。
- `src/variable.scss` 当前未定义 spacing tokens。

## 代码助手生成规则（建议）

1. **优先使用组件库 props**（如 `size`、`variant` 等）来获得一致的尺寸。
2. 需要布局间距时：优先通过 **容器布局**（flex/grid）与 **现有组件的 spacing 能力** 实现。
3. 如果必须新增统一间距：在 `src/variable.scss` 新增 spacing tokens，并在组件 `style/*.scss` 中复用；不要在业务代码里硬编码颜色/间距。

## 建议的 token 形态（可作为后续迭代目标）

> 以下为建议形态，不代表当前仓库已存在。落地前请与 Design/FE 对齐。

- `$space-1: 4px;`
- `$space-2: 8px;`
- `$space-3: 12px;`
- `$space-4: 16px;`
- `$space-5: 24px;`
- `$space-6: 32px;`

## 校验清单

- [ ] PR 中业务侧没有新增随机的 margin/padding magic numbers（除非有明确设计依据）
- [ ] 新间距需求已通过 tokens 或组件库能力沉淀，而不是一次性 hack
