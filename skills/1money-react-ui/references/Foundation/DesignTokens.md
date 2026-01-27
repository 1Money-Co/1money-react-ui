---
name: DesignTokens
category: Foundation
description: 组件库的全局设计令牌（从 src/variable.scss 自动提取）
---

# Design Tokens

## 概述

本文件从组件库源码 `src/variable.scss` 自动提取，用于代码助手在生成/修改 UI 时遵循一致的颜色与命名前缀。

> 备注：当前仓库主要沉淀了颜色相关 tokens；如需间距/字号等体系化 tokens，建议在后续迭代补齐（见 `Spacing` / `Typography`）。

## Prefix

| Token | Value | Notes |
| --- | --- | --- |
| `$prefix` | `'om-react-ui'` | CSS class 命名前缀（生成的 class 通常形如 `.om-react-ui-<component>`） |

## Color

| Token | Value | Notes |
| --- | --- | --- |
| `$color-primary` | `#073387` | 基础色 |
| `$color-primary-active` | `#03163A` | active/pressed 状态 |
| `$color-primary-hover` | `#052561` | hover 状态 |
| `$color-primary-black` | `#131313` | 基础色 |
| `$color-primary-white` | `#FEFEFE` | 基础色 |
| `$color-secondary` | `#DDE6F4` | 基础色 |
| `$color-secondary-active` | `#A4BBE1` | active/pressed 状态 |
| `$color-secondary-hover` | `#C1D0EB` | hover 状态 |
| `$color-grey-light` | `#F8F8F8` | 基础色 |
| `$color-grey` | `#F0F0F0` | 基础色 |
| `$color-grey-deep` | `#E3E4E4` | 基础色 |
| `$color-grey-bold` | `#D1D2D2` | 基础色 |
| `$color-grey-dark` | `#9FA3A3` | 基础色 |
| `$color-grey-midnight` | `#646465` | 基础色 |
| `$color-grey-night` | `#404042` | 基础色 |
| `$color-black` | `#000` | 基础色 |
| `$color-white` | `#FFF` | 基础色 |
| `$color-info` | `#3D7CF5` | 基础色 |
| `$color-info-light` | `#EDF2F9` | 基础色 |
| `$color-success` | `#1F5800` | 基础色 |
| `$color-success-background` | `#1F580033` | 背景色/弱化背景 |
| `$color-warning` | `#F4C600` | 基础色 |
| `$color-warning-hover` | `#FFB300` | hover 状态 |
| `$color-warning-active` | `#FFA000` | active/pressed 状态 |
| `$color-warning-dark` | `#DB8600` | 基础色 |
| `$color-warning-background` | `#F4C60033` | 背景色/弱化背景 |
| `$color-negative` | `#AE0000` | 基础色 |
| `$color-negative-hover` | `#920000` | hover 状态 |
| `$color-negative-active` | `#780000` | active/pressed 状态 |
| `$color-negative-background` | `#AE00001A` | 背景色/弱化背景 |
| `$color-dimmer-dark` | `#1F2531` | 基础色 |
