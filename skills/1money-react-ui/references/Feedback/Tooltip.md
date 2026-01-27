---
name: Tooltip
category: Feedback
description: A contextual help component that displays informative content when users hover over or interact with trigger elements, built on top of react-tooltip with enhanced styling and accessibility features.
source: src/components/Tooltip
---

# Tooltip

## 组件概述

A contextual help component that displays informative content when users hover over or interact with trigger elements, built on top of react-tooltip with enhanced styling and accessibility features.

### Features

- Smart positioning with collision detection
- Multiple trigger events (hover, click, focus)
- Rich content support (text, HTML, React components)
- Configurable delays and animations
- Interactive tooltips with clickable content
- Arrow indicators with custom styling
- Multiple placement options
- Accessibility compliance (ARIA attributes)
- Mobile-friendly touch support

## 使用场景

### 何时使用
- 给用户反馈（成功/失败/告警/信息），不打断主流程（Toast/Notification）
- 表单或区域内的状态提示（Message）
- 对图标/按钮提供补充说明（Tooltip）

### 不适用
- 必须用户确认才能继续（考虑 Modal/ConfirmPopup）

## 设计规范

- 全局 class 前缀：`om-react-ui`（来自 `src/variable.scss` 的 `$prefix`）
- 该组件在源码样式中使用到的颜色 tokens：`$color-primary-black`, `$color-primary-white`
- 圆角（px，源码样式提取）：4
- 字号（px，源码样式提取）：12
- 高度/最大高度（px，源码样式提取）：9
- padding 数值（px，源码样式提取）：10
- 详细视觉与交互以组件源码 `style/*.scss` 为准；新增/调整样式优先沉淀到 Foundation tokens，避免散落 magic numbers。
- 参考：[`DesignTokens`](../Foundation/DesignTokens.md)、[`Spacing`](../Foundation/Spacing.md)、[`Typography`](../Foundation/Typography.md)

## API

### Component Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| prefixCls | The classname prefix for component styling | string | "tooltip" |
| arrowCls | Additional CSS classes for the tooltip arrow | string | - |
| children | Content to display inside the tooltip | ReactNode | - |

> 注意：`classNameArrow` 与 `role` 会被组件内部覆盖；请使用 `arrowCls` 自定义箭头样式。

### Core Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| content | Text content to display in tooltip | string | - |
| anchorSelect | CSS selector for target elements | string | - |
| place | Position of tooltip relative to anchor | 'top' \| 'bottom' \| 'left' \| 'right' \| 'top-start' \| 'top-end' \| 'bottom-start' \| 'bottom-end' \| 'left-start' \| 'left-end' \| 'right-start' \| 'right-end' | 'top' |
| offset | Distance between tooltip and anchor element | number | 10 |
| variant | Visual style preset | 'dark' \| 'light' \| 'warning' \| 'error' \| 'success' \| 'info' | 'dark' |

### Interaction Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| openOnClick | Whether tooltip opens on click instead of hover | boolean | false |
| clickable | Whether tooltip content can be interacted with | boolean | false |
| delayShow | Delay before showing tooltip (ms) | number | 0 |
| delayHide | Delay before hiding tooltip (ms) | number | 0 |
| float | Whether tooltip follows mouse within anchor | boolean | false |
| hidden | Whether to prevent tooltip from showing | boolean | false |

### Control Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| isOpen | Controlled open state | boolean | - |
| setIsOpen | Function to control open state | (isOpen: boolean) => void | - |
| defaultIsOpen | Default open state (uncontrolled) | boolean | false |

### Event Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| openEvents | Events that trigger tooltip open | object | {mouseover: true, focus: true} |
| closeEvents | Events that trigger tooltip close | object | {mouseleave: true, blur: true} |
| globalCloseEvents | Global events that close tooltip | object | {escape: true, scroll: true, resize: true} |

### Styling Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| className | CSS classes for tooltip element | string | - |
| style | Inline styles for tooltip | CSSProperties | - |
| border | Tooltip border configuration | string \| object | - |
| opacity | Tooltip opacity | number | 1 |
| arrowColor | Color of tooltip arrow | string | - |

### Callback Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| afterShow | Callback after tooltip is shown | () => void | - |
| afterHide | Callback after tooltip is hidden | () => void | - |

### Accessibility Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| role | ARIA role for tooltip（内部固定为 'tooltip'） | 'tooltip' \| 'dialog' | 'tooltip' |
| disableTooltip | Function to conditionally disable tooltip | (anchorElement: Element) => boolean | - |

## 示例

```tsx
import { Tooltip } from '@1money/react-ui';

// Basic tooltip with hover trigger
<>
  <button data-tooltip-id="basic-tooltip">
    Hover for help
  </button>
  <Tooltip anchorSelect="[data-tooltip-id='basic-tooltip']" content="This is helpful information" />
</>

// Tooltip with custom positioning
<>
  <span data-tooltip-id="info-tooltip">
    More info
  </span>
  <Tooltip 
    anchorSelect="[data-tooltip-id='info-tooltip']"
    place="right"
    content="Additional details about this feature"
  />
</>

// Click-triggered tooltip
<>
  <button data-tooltip-id="click-tooltip">
    Click for details
  </button>
  <Tooltip
    anchorSelect="[data-tooltip-id='click-tooltip']"
    openOnClick
    clickable
    content="You can interact with this content"
  />
</>
```

```tsx
// Rich content tooltip
<>
  <div data-tooltip-id="rich-tooltip">
    Complex info
  </div>
  <Tooltip anchorSelect="[data-tooltip-id='rich-tooltip']" place="bottom">
    <div className="p-3">
      <h4>Feature Details</h4>
      <ul>
        <li>Benefit 1</li>
        <li>Benefit 2</li>
        <li>Benefit 3</li>
      </ul>
      <button onClick={() => console.log('Learn more')}>
        Learn More
      </button>
    </div>
  </Tooltip>
</>

// Controlled tooltip
const [isOpen, setIsOpen] = useState(false);

<>
  <button onClick={() => setIsOpen(!isOpen)}>
    Toggle tooltip
  </button>
  <Tooltip
    anchorSelect="button"
    isOpen={isOpen}
    setIsOpen={setIsOpen}
    content="This tooltip is controlled"
  />
</>
```

```tsx
const HelpIcon = ({ helpText }) => (
  <>
    <i 
      className="pi pi-question-circle cursor-pointer"
      data-tooltip-id="help-icon"
      style={{ color: '#6B7280' }}
    />
    <Tooltip
      anchorSelect="[data-tooltip-id='help-icon']"
      content={helpText}
      place="top"
      variant="dark"
    />
  </>
);

<HelpIcon helpText="This field is required for account verification" />
```

## 最佳实践与注意事项

✅ Do
- 始终从 `@1money/react-ui` 进行命名导入：`import { Tooltip } from '@1money/react-ui'`
- 先用组件 props 表达状态（disabled/loading/severity/size 等），不要在业务层重复造样式。
- 需要新增能力时，优先扩展组件库而不是在业务侧写一次性 hack。

❌ Don't
- 不要直接从 `primereact/*` 引入同名组件绕过二次封装。
- 不要在业务代码里硬编码颜色值；优先使用组件库既有的 props / tokens。
