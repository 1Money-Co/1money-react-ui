---
name: Progress
category: General
description: A flexible progress component that supports both ring (circular) and bar (linear) progress indicators. Built with customizable styling and theming options for displaying task completion, loading states, and progress tracking.
---

# Progress

## 组件概述

A flexible progress component that supports both ring (circular) and bar (linear) progress indicators. Built with customizable styling and theming options for displaying task completion, loading states, and progress tracking.

### Features

- Two types: Ring (circular) and Bar (linear) progress indicators
- Customizable colors for trail and fill
- Support for custom content/children within progress indicators
- Flexible sizing for ring progress
- Configurable stroke width for ring progress
- CSS custom properties for easy theming
- Built-in accessibility features
- Full PrimeReact ProgressBar compatibility for bar type

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
| children | Content to display within the progress indicator | ReactNode | - |
| className | Additional CSS class for styling | string | - |
| prefixCls | The classname prefix for component styling | string | 'progress' |
| wrapperCls | Additional CSS class for wrapper element | string | - |
| trailColor | Color of the progress track/background | string | '#E0E2EE' |
| fillColor | Color of the progress fill/indicator | string | '#3D73F2' |
| id | HTML id attribute | string | - |

### Ring Progress Props (type="ring")
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| type | Progress indicator type | 'ring' | 'ring' |
| value | Progress value (0-100) | number \| `${number}` | 0 |
| size | Diameter of the ring in pixels | number \| `${number}` | 106 |
| stroke | Width of the ring stroke in pixels | number \| `${number}` | 6 |
| bgColor | Background color of the ring container | string | '#FAFAFC' |

### Bar Progress Props (type="bar")
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| type | Progress indicator type | 'bar' | - |
| labelColor | Color of the progress label text | string | '#FFFFFF' |

## 示例

```tsx
import { Progress } from '@1money/react-ui';

// Ring progress (default)
<Progress value={65} />

// Bar progress
<Progress type="bar" value={45} />

// Ring with custom size and content
<Progress
  type="ring"
  value={80}
  size={120}
  stroke={8}
>
  <div style={{ textAlign: 'center' }}>
    <strong>80%</strong>
    <br />
    Complete
  </div>
</Progress>

// Bar with label
<Progress
  type="bar"
  value={60}
  showValue
  displayValueTemplate={(value) => `${value}% Complete`}
/>

// Custom colors
<Progress
  type="ring"
  value={75}
  fillColor="#4CAF50"
  trailColor="#E0E0E0"
  bgColor="#F5F5F5"
/>
```

```tsx
const GoalProgress = ({ current, target, goalName }) => {
  const percentage = Math.round((current / target) * 100);

  return (
    <div className="goal-tracker">
      <h3>{goalName}</h3>
      <Progress
        type="ring"
        value={percentage}
        size={140}
        stroke={10}
        fillColor="#4CAF50"
        trailColor="#E8F5E8"
      >
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
            ${current.toLocaleString()}
          </div>
          <div style={{ fontSize: '14px', color: '#666' }}>
            of ${target.toLocaleString()}
          </div>
          <div style={{ fontSize: '18px', marginTop: '4px' }}>
            {percentage}%
          </div>
        </div>
      </Progress>
    </div>
  );
};
```

```tsx
const TaskDashboard = ({ tasks }) => {
  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const completionRate = Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className="task-dashboard">
      <Progress
        type="ring"
        value={completionRate}
        size={100}
        fillColor="#2196F3"
      >
        <div style={{ textAlign: 'center' }}>
          <strong>{completedTasks}</strong>
          <br />
          <span style={{ fontSize: '12px' }}>
            of {totalTasks}
          </span>
        </div>
      </Progress>

      <div className="task-details">
        <h4>Task Progress</h4>
        <p>{completedTasks} completed out of {totalTasks} tasks</p>
      </div>
    </div>
  );
};
```

## 最佳实践与注意事项

✅ Do
- 始终从 `@1money/react-ui` 进行命名导入：`import { Progress } from '@1money/react-ui'`
- 先用组件 props 表达状态（disabled/loading/severity/size 等），不要在业务层重复造样式。
- 需要新增能力时，优先扩展组件库而不是在业务侧写一次性 hack。

❌ Don't
- 不要直接从 `primereact/*` 引入同名组件绕过二次封装。
- 不要在业务代码里硬编码颜色值；优先使用组件库既有的 props / tokens。
