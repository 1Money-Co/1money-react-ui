---
name: Copy
category: General
description: `Copy` renders a clipboard icon that copies a provided string to the user’s clipboard and gives instant visual feedback. Once copied, the icon flashes to a checkmark for 1.5 seconds.
---

# Copy

## 组件概述

`Copy` renders a clipboard icon that copies a provided string to the user’s clipboard and gives instant visual feedback. Once copied, the icon flashes to a checkmark for 1.5 seconds.

## 使用场景

### 何时使用
- 展示一段可复制内容（地址、交易哈希、邀请码等）并提供一键复制
- 需要复制成功/失败回调处理

### 不适用
- 需要复杂格式复制或富文本（需要定制实现）

## 设计规范

- 全局 class 前缀：`om-react-ui`（来自 `src/variable.scss` 的 `$prefix`）
- 该组件在源码样式中使用到的颜色 tokens：`$color-grey`, `$color-grey-deep`, `$color-success-background`
- 圆角（px，源码样式提取）：12
- padding 数值（px，源码样式提取）：8
- 详细视觉与交互以组件源码 `style/*.scss` 为准；新增/调整样式优先沉淀到 Foundation tokens，避免散落 magic numbers。
- 参考：[`DesignTokens`](../Foundation/DesignTokens.md)、[`Spacing`](../Foundation/Spacing.md)、[`Typography`](../Foundation/Typography.md)

## API

### Component Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| value | Text that will be written to the clipboard. Component is inert if empty. | string | - |
| iconSize | Icon pixel size passed to the shared `Icons` component. | number | 32 |
| color | Icon color (CSS color value). | string | - |
| className | Additional wrapper class names. | string | - |
| prefixCls | BEM-style class prefix to theme the component. | string | 'copy' |
| onSuccess | Callback invoked when copy succeeds; receives the copied value. | (val: string) => void | - |
| onError | Callback invoked when the clipboard write fails. | (val: string) => void | - |

## 示例

```tsx
import { Copy } from '@1money/react-ui';

export const CopyAccountId = () => {
  const accountId = 'ACCT-4721-8891';

  return (
    <Copy
      value={accountId}
      iconSize={24}
      onSuccess={() => toast.success('Account ID copied')}
      onError={() => toast.error('Copy failed, try again')}
    />
  );
};
```

## 最佳实践与注意事项

✅ Do
- 始终从 `@1money/react-ui` 进行命名导入：`import { Copy } from '@1money/react-ui'`
- 先用组件 props 表达状态（disabled/loading/severity/size 等），不要在业务层重复造样式。
- 需要新增能力时，优先扩展组件库而不是在业务侧写一次性 hack。

❌ Don't
- 不要直接从 `primereact/*` 引入同名组件绕过二次封装。
- 不要在业务代码里硬编码颜色值；优先使用组件库既有的 props / tokens。
