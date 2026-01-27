---
name: ConfirmPopup
category: Feedback
description: A contextual confirmation dialog component that displays confirmation prompts positioned relative to trigger elements, built on top of PrimeReact's ConfirmPopup with enhanced styling and functionality. This component provides both declarative and imperative APIs for maximum flexibility.
source: src/components/ConfirmPopup
---

# ConfirmPopup

## 组件概述

A contextual confirmation dialog component that displays confirmation prompts positioned relative to trigger elements, built on top of PrimeReact's ConfirmPopup with enhanced styling and functionality. This component provides both declarative and imperative APIs for maximum flexibility.

### Features

- Context-aware positioning (auto-adjusts based on available space)
- Declarative and imperative API support
- Customizable accept/reject actions
- Icon support for visual context
- Focus management with default focus options
- Backdrop click to dismiss
- Escape key handling
- Accessible keyboard navigation
- Built-in confirmation dialogs

## 使用场景

### 何时使用
- 需要阻塞式确认/输入（Modal）或侧边流程（Drawer）
- 需要就地确认/二次确认（Popup/ConfirmPopup）

### 不适用
- 频繁提示（考虑 Toast/Notification/Message）

## 设计规范

- 全局 class 前缀：`om-react-ui`（来自 `src/variable.scss` 的 `$prefix`）
- padding 数值（px，源码样式提取）：6, 12
- 详细视觉与交互以组件源码 `style/*.scss` 为准；新增/调整样式优先沉淀到 Foundation tokens，避免散落 magic numbers。
- 参考：[`DesignTokens`](../Foundation/DesignTokens.md)、[`Spacing`](../Foundation/Spacing.md)、[`Typography`](../Foundation/Typography.md)

## API

### Component Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| id | Unique identifier for the popup | string | - |
| className | Additional CSS classes | string | - |
| prefixCls | The classname prefix for component styling | string | "confirm-popup" |

> 其余属性继承 PrimeReact ConfirmPopup。

### Core Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| target | The target element to position popup relative to | HTMLElement \| EventTarget | - |
| visible | Whether the popup is visible (declarative API) | boolean | false |
| onHide | Callback when popup should be hidden | () => void | - |
| message | The confirmation message to display | ReactNode | - |
| accept | Callback function when user confirms | () => void | - |
| reject | Callback function when user cancels | () => void | - |

### Customization Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| icon | Icon to display in the popup | string | - |
| acceptLabel | Label for the accept button | string | "Yes" |
| rejectLabel | Label for the reject button | string | "No" |
| acceptIcon | Icon for the accept button | string | - |
| rejectIcon | Icon for the reject button | string | - |
| acceptClassName | CSS class for accept button | string | - |
| rejectClassName | CSS class for reject button | string | - |

### Positioning Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| position | Position of popup relative to target | 'top' \| 'bottom' \| 'left' \| 'right' \| 'top-left' \| 'top-right' \| 'bottom-left' \| 'bottom-right' | 'top' |
| defaultFocus | Which button to focus by default | 'accept' \| 'reject' | 'accept' |

### Behavior Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| dismissable | Whether clicking outside dismisses popup | boolean | true |
| closeOnEscape | Whether escape key closes popup | boolean | true |

### Callback Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| onShow | Callback when popup is shown | () => void | - |
| beforeShow | Callback before popup is shown | () => void | - |
| beforeHide | Callback before popup is hidden | () => void | - |

## 示例

```tsx
import { ConfirmPopup, confirmPopup } from '@1money/react-ui';

// Using the imperative API
const handleDelete = (event) => {
  confirmPopup({
    target: event.currentTarget,
    message: 'Are you sure you want to delete this item?',
    accept: () => {
      // Handle deletion
      console.log('Item deleted');
    },
    reject: () => {
      // Handle cancellation
      console.log('Deletion cancelled');
    }
  });
};

// Component setup
<>
  <Button severity="danger" onClick={handleDelete}>
    Delete Item
  </Button>
  <ConfirmPopup />
</>
```

```tsx
import { ConfirmPopup } from '@1money/react-ui';
import { useState } from 'react';

const [visible, setVisible] = useState(false);
const [target, setTarget] = useState(null);

const showConfirm = (event) => {
  setTarget(event.currentTarget);
  setVisible(true);
};

<>
  <Button onClick={showConfirm}>
    Show Confirmation
  </Button>
  <ConfirmPopup
    target={target}
    visible={visible}
    onHide={() => setVisible(false)}
    message="Are you sure you want to proceed?"
    accept={() => {
      console.log('Accepted');
      setVisible(false);
    }}
    reject={() => {
      console.log('Rejected');
      setVisible(false);
    }}
  />
</>
```

```tsx
import { confirmPopup } from '@1money/react-ui';

confirmPopup({
  target: buttonElement,
  message: 'Confirmation message',
  accept: () => {}, // Accept callback
  reject: () => {}, // Reject callback
  // ... other options
});
```

## 最佳实践与注意事项

✅ Do
- 始终从 `@1money/react-ui` 进行命名导入：`import { ConfirmPopup } from '@1money/react-ui'`
- 先用组件 props 表达状态（disabled/loading/severity/size 等），不要在业务层重复造样式。
- 需要新增能力时，优先扩展组件库而不是在业务侧写一次性 hack。

❌ Don't
- 不要直接从 `primereact/*` 引入同名组件绕过二次封装。
- 不要在业务代码里硬编码颜色值；优先使用组件库既有的 props / tokens。
