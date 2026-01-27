---
name: Clipboard
category: General
description: A copy-to-clipboard component that displays content with a convenient copy button. Features automatic clipboard copying with success/error callback handling.
---

# Clipboard

## 组件概述

A copy-to-clipboard component that displays content with a convenient copy button. Features automatic clipboard copying with success/error callback handling.

### Features

- One-click copy to clipboard functionality
- Visual feedback with copy icon
- Customizable labels and styling
- Success and error callback support
- Built-in Typography integration for consistent text styling
- Responsive design with proper text wrapping

## 使用场景

### 何时使用
- 展示一段可复制内容（地址、交易哈希、邀请码等）并提供一键复制
- 需要复制成功/失败回调处理

### 不适用
- 需要复杂格式复制或富文本（需要定制实现）

## 设计规范

- 全局 class 前缀：`om-react-ui`（来自 `src/variable.scss` 的 `$prefix`）
- 该组件在源码样式中使用到的颜色 tokens：`$color-grey-deep`, `$color-grey-light`, `$color-grey-midnight`
- 圆角（px，源码样式提取）：12
- padding 数值（px，源码样式提取）：8, 16
- 详细视觉与交互以组件源码 `style/*.scss` 为准；新增/调整样式优先沉淀到 Foundation tokens，避免散落 magic numbers。
- 参考：[`DesignTokens`](../Foundation/DesignTokens.md)、[`Spacing`](../Foundation/Spacing.md)、[`Typography`](../Foundation/Typography.md)

## API

### Component Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| content | The text content to be copied to clipboard | string | - |
| id | Optional ID attribute for the component | string | - |
| className | Additional CSS class name for the component | string | - |
| prefixCls | The classname prefix for component styling | string | "clipboard" |
| label | Optional label text displayed above the content | string | - |
| labelCls | Additional CSS class name for the label | string | - |
| onSuccess | Callback function called when copy operation succeeds | (content: string) => any | - |
| onError | Callback function called when copy operation fails | (error: any) => any | - |

## 示例

```tsx
import { Clipboard } from '@1money/react-ui';

// Basic clipboard with content
<Clipboard content="Hello World" />

// With label
<Clipboard
  label="API Key"
  content="sk-1234567890abcdef"
/>

// With callbacks
<Clipboard
  label="Setup Key"
  content="GWKLDLVE25dfLIJOHUD578JPIHD24JLJGHGOUH27HLIHOUGOLIKHJ547HOU"
  onSuccess={(content) => console.log('Copied:', content)}
  onError={(error) => console.error('Copy failed:', error)}
/>
```

```tsx
const apiKey = "sk-1234567890abcdefghijklmnopqrstuvwxyz";

<Clipboard
  label="API Key"
  content={apiKey}
  onSuccess={() => {
    // Show toast notification
    toast.success('API key copied to clipboard!');
  }}
  onError={() => {
    toast.error('Failed to copy API key');
  }}
/>
```

```tsx
const configData = JSON.stringify({
  endpoint: "https://api.1money.co",
  version: "v1",
  timeout: 30000
}, null, 2);

<Clipboard
  label="Configuration"
  content={configData}
  className="tw-w-full tw-max-w-md"
  onSuccess={(content) => {
    analytics.track('config_copied', {
      contentLength: content.length
    });
  }}
/>
```

## 最佳实践与注意事项

✅ Do
- 始终从 `@1money/react-ui` 进行命名导入：`import { Clipboard } from '@1money/react-ui'`
- 先用组件 props 表达状态（disabled/loading/severity/size 等），不要在业务层重复造样式。
- 需要新增能力时，优先扩展组件库而不是在业务侧写一次性 hack。

❌ Don't
- 不要直接从 `primereact/*` 引入同名组件绕过二次封装。
- 不要在业务代码里硬编码颜色值；优先使用组件库既有的 props / tokens。
