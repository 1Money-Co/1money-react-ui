---
name: Progress
category: General
description: A flexible progress component that supports both ring (circular) and bar (linear) progress indicators. Built with customizable styling and theming options for displaying task completion, loading states, and progress tracking.
---

# Progress

## Component Overview

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

## Usage Scenarios

### When to use
- Display loading/execution progress (Progress) or loading placeholder (Loading/Spinner)
- Provide feedback during network requests or asynchronous task waiting

### When not to use
- Long-running tasks that require more complete task status/history (consider dedicated page/logs)

## Design Specifications

- Global class prefix: `om-react-ui` (from `$prefix` in `src/variable.scss`)
- Detailed visual and interaction based on component source `style/*.scss`; prioritize consolidating new/adjusted styles into Foundation tokens to avoid scattered magic numbers.
- References: [`DesignTokens`](../Foundation/DesignTokens.md), [`Spacing`](../Foundation/Spacing.md), [`Typography`](../Foundation/Typography.md)

## API

Inherits from: Custom SVG (Ring) or [PrimeReact ProgressBar](https://primereact.org/progressbar/) (Bar).

### Component Props

**Common Props:**

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| prefixCls | Component class prefix | `string` | `"progress"` |
| id | HTML id | `string` | - |
| className | Container class | `string` | - |
| wrapperCls | Wrapper class | `string` | - |
| trailColor | Track color | `string` | `'#E0E2EE'` |
| fillColor | Indicator color | `string` | `'#3D73F2'` |

### Ring Progress (Default)
`type="ring"`

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| value | Progress value (0-100) | `number \| string` | `0` |
| size | Diameter in pixels | `number \| string` | `106` |
| stroke | Stroke width in pixels | `number \| string` | `6` |
| bgColor | Inner background color | `string` | `'#FAFAFC'` |

### Bar Progress
`type="bar"`. Inherits from **ProgressBar**.

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| labelColor | Label text color | `string` | `'#FFFFFF'` |

> Inherits `unit`, `displayValueTemplate`, `mode` from PrimeReact.

## Examples

```tsx
import { Progress } from '@1money/react-ui';

// 1. Ring Progress (Default)
<Progress value={65} />

// 2. Ring with customized size and centered content
<Progress type="ring" value={75} size={120} stroke={8}>
  <div className="text-center">
    <strong>75%</strong>
    <div>Loading</div>
  </div>
</Progress>

// 3. Bar Progress (Linear)
<Progress type="bar" value={45} />

// 4. Bar with Label
<Progress type="bar" value={60} showValue unit="%" />

// 5. Custom colors
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

## Core Principles

- **Usage Priority**: Use `Progress` for quantified tasks (0-100%). For indeterminate waiting, use `Spinner` or `Loading`.
- **Variant Consistency**: Stick to `type="ring"` for dashboard widgets and `type="bar"` for file uploads or linear steps.
- **Customization**: Use `stroke` and colors via props, **PROHIBIT** overriding internal SVG paths via CSS.

