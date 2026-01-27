---
name: Loading
category: General
description: An animated loading component powered by Lottie animations. Provides smooth, professional loading indicators with two distinct animation styles.
---

# Loading

## 组件概述

An animated loading component powered by Lottie animations. Provides smooth, professional loading indicators with two distinct animation styles.

### Features

- Lottie-based animations for smooth performance
- Two animation types: pure and pattern
- Automatic animation lifecycle management
- Lightweight with dynamic Lottie import
- Customizable styling and sizing
- Memory-safe cleanup on unmount
- SVG rendering for crisp visuals

## 使用场景

### 何时使用
- 展示加载/执行进度（Progress）或加载占位（Loading/Spinner）
- 网络请求、异步任务等待时提供反馈

### 不适用
- 长时间任务需要更完整的任务状态/历史（考虑专用页面/日志）

## 设计规范

- 全局 class 前缀：`om-react-ui`（来自 `src/variable.scss` 的 `$prefix`）
- 详细视觉与交互以组件源码 `style/*.scss` 为准；新增/调整样式优先沉淀到 Foundation tokens，避免散落 magic numbers。
- 参考：[`DesignTokens`](../Foundation/DesignTokens.md)、[`Spacing`](../Foundation/Spacing.md)、[`Typography`](../Foundation/Typography.md)

## API

### Component Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| id | Unique identifier for the loading element | string | - |
| className | Additional CSS classes for styling | string | - |
| prefixCls | The classname prefix for component styling | string | "loading" |
| type | Animation type to display | 'pure' \| 'pattern' | 'pure' |

## 示例

```tsx
import { Loading } from '@1money/react-ui';

// Basic loading with pure animation
<Loading />

// Loading with pattern animation
<Loading type="pattern" />

// Loading with custom styling
<Loading className="my-loading" />

// Loading with custom ID
<Loading id="page-loader" />
```

```tsx
const [loading, setLoading] = useState(true);

return (
  <div className="page-container">
    {loading ? (
      <div className="loading-overlay">
        <Loading type="pure" />
      </div>
    ) : (
      <PageContent />
    )}
  </div>
);
```

```tsx
<div className="content-section">
  <h2>Loading Data...</h2>
  <Loading type="pattern" className="inline-loading" />
</div>
```

## 最佳实践与注意事项

✅ Do
- 始终从 `@1money/react-ui` 进行命名导入：`import { Loading } from '@1money/react-ui'`
- 先用组件 props 表达状态（disabled/loading/severity/size 等），不要在业务层重复造样式。
- 需要新增能力时，优先扩展组件库而不是在业务侧写一次性 hack。

❌ Don't
- 不要直接从 `primereact/*` 引入同名组件绕过二次封装。
- 不要在业务代码里硬编码颜色值；优先使用组件库既有的 props / tokens。
