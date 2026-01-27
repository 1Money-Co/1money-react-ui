---
name: Spinner
category: General
description: A loading spinner component built on top of PrimeReact's ProgressSpinner with enhanced styling. Spinners are used to indicate loading states, background processes, or waiting periods to provide visual feedback to users.
---

# Spinner

## 组件概述

A loading spinner component built on top of PrimeReact's ProgressSpinner with enhanced styling. Spinners are used to indicate loading states, background processes, or waiting periods to provide visual feedback to users.

### Features

- Customizable size and stroke width
- Configurable animation duration and colors
- Client-side rendering support with 'use client' directive
- Built-in accessibility features
- Responsive design compatibility
- Full PrimeReact ProgressSpinner compatibility
- Lightweight and performant

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
| prefixCls | The classname prefix for component styling | string | 'spinner' |

> 其余属性继承 PrimeReact ProgressSpinner（如 `style`、`strokeWidth`、`animationDuration` 等）。

### Common Styling Props
| Property | Description | Example |
| --- | --- | --- |
| width/height | Spinner size | `{ width: '30px', height: '30px' }` |
| stroke | Spinner color | `"#3D73F2"` |
| fill | Background color | `"transparent"` |
| strokeWidth | Line thickness | `"2"` |
| animationDuration | Spin speed | `"2s"` |

## 示例

```tsx
import { Spinner } from '@1money/react-ui';

// Basic spinner
<Spinner />

// Small spinner
<Spinner style={{ width: '20px', height: '20px' }} />

// Large spinner with custom color
<Spinner
  style={{
    width: '60px',
    height: '60px'
  }}
  stroke="#4CAF50"
  fill="#E8F5E8"
/>

// Custom animation duration
<Spinner animationDuration="1s" />

// Spinner with custom stroke width
<Spinner strokeWidth="3" />
```

```tsx
const LoadingButton = ({ loading, onClick, children }) => {
  return (
    <button onClick={onClick} disabled={loading}>
      {loading ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Spinner style={{ width: '16px', height: '16px' }} />
          <span>Loading...</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
};
```

```tsx
const PageLoader = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="page-loader-overlay">
      <div className="loader-content">
        <Spinner
          style={{
            width: '50px',
            height: '50px'
          }}
          stroke="#3D73F2"
          strokeWidth="3"
        />
        <p>Loading your data...</p>
      </div>
    </div>
  );
};

// CSS
.page-loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.loader-content {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
```

## 最佳实践与注意事项

✅ Do
- 始终从 `@1money/react-ui` 进行命名导入：`import { Spinner } from '@1money/react-ui'`
- 先用组件 props 表达状态（disabled/loading/severity/size 等），不要在业务层重复造样式。
- 需要新增能力时，优先扩展组件库而不是在业务侧写一次性 hack。

❌ Don't
- 不要直接从 `primereact/*` 引入同名组件绕过二次封装。
- 不要在业务代码里硬编码颜色值；优先使用组件库既有的 props / tokens。
