---
name: Popup
category: Feedback
description: A contextual popup component that displays confirmation dialogs and action prompts positioned relative to trigger elements, built on top of PrimeReact's ConfirmPopup with enhanced styling and functionality.
source: src/components/Popup
---

# Popup

## 组件概述

A contextual popup component that displays confirmation dialogs and action prompts positioned relative to trigger elements, built on top of PrimeReact's ConfirmPopup with enhanced styling and functionality.

### Features

- Context-aware positioning (auto-adjusts based on available space)
- Customizable accept/reject actions
- Icon support for visual context
- Focus management with default focus options
- Backdrop click to dismiss
- Escape key handling
- Accessible keyboard navigation
- Imperative API for programmatic control

## 使用场景

### 何时使用
- 需要阻塞式确认/输入（Modal）或侧边流程（Drawer）
- 需要就地确认/二次确认（Popup/ConfirmPopup）

### 不适用
- 频繁提示（考虑 Toast/Notification/Message）

## 设计规范

- 全局 class 前缀：`om-react-ui`（来自 `src/variable.scss` 的 `$prefix`）
- 详细视觉与交互以组件源码 `style/*.scss` 为准；新增/调整样式优先沉淀到 Foundation tokens，避免散落 magic numbers。
- 参考：[`DesignTokens`](../Foundation/DesignTokens.md)、[`Spacing`](../Foundation/Spacing.md)、[`Typography`](../Foundation/Typography.md)

## API

### Component Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| id | Unique identifier for the popup | string | - |
| prefixCls | The classname prefix for component styling | string | "popup" |

### PopupHandlers
| Method | Description | Parameters |
| --- | --- | --- |
| show | Show the popup | (params: ConfirmPopupProps) => any |

### Show Method Parameters (ConfirmPopupProps)
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| target | The target element to position the popup relative to | HTMLElement \| EventTarget | - |
| message | The confirmation message to display | ReactNode | - |
| accept | Callback function when user confirms | () => void | - |
| reject | Callback function when user cancels | () => void | - |
| icon | Icon to display in the popup | string | - |
| acceptLabel | Label for the accept button | string | "Yes" |
| rejectLabel | Label for the reject button | string | "No" |
| acceptIcon | Icon for the accept button | string | - |
| rejectIcon | Icon for the reject button | string | - |
| acceptClassName | CSS class for accept button | string | - |
| rejectClassName | CSS class for reject button | string | - |
| position | Position of the popup relative to target | 'top' \| 'bottom' \| 'left' \| 'right' \| 'top-left' \| 'top-right' \| 'bottom-left' \| 'bottom-right' | 'top' |
| defaultFocus | Which button to focus by default | 'accept' \| 'reject' | 'accept' |
| dismissable | Whether clicking outside dismisses popup | boolean | true |
| onShow | Callback when popup is shown | () => void | - |
| onHide | Callback when popup is hidden | () => void | - |

> 其余属性继承 PrimeReact ConfirmPopup。

## 示例

```tsx
import { Popup, PopupHandlers } from '@1money/react-ui';
import { useRef } from 'react';

// Basic popup with ref
const popupRef = useRef<PopupHandlers>(null);

<Button 
  onClick={(e) => popupRef.current?.show({
    target: e.currentTarget,
    message: 'Are you sure you want to delete this item?',
    accept: () => handleDelete(),
    reject: () => console.log('Cancelled')
  })}
>
  Delete Item
</Button>

<Popup ref={popupRef} />
```

```tsx
const popupRef = useRef<PopupHandlers>(null);

// Show popup with configuration
popupRef.current?.show({
  target: buttonElement,
  message: 'Confirmation message',
  accept: () => {}, // Accept callback
  reject: () => {}, // Reject callback
  // ... other options
});
```

```tsx
const DeleteButton = ({ onDelete, itemName }) => {
  const popupRef = useRef<PopupHandlers>(null);

  const handleDeleteClick = (e) => {
    popupRef.current?.show({
      target: e.currentTarget,
      message: `Are you sure you want to delete "${itemName}"? This action cannot be undone.`,
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Delete',
      rejectLabel: 'Cancel',
      acceptClassName: 'p-button-danger',
      accept: () => {
        onDelete();
        toast.current?.show({
          severity: 'success',
          summary: 'Deleted',
          detail: `${itemName} has been deleted`
        });
      },
      reject: () => {
        toast.current?.show({
          severity: 'info',
          summary: 'Cancelled',
          detail: 'Delete operation cancelled'
        });
      }
    });
  };

  return (
    <>
      <Button severity="danger" onClick={handleDeleteClick}>
        Delete {itemName}
      </Button>
      <Popup ref={popupRef} />
    </>
  );
};
```

## 最佳实践与注意事项

✅ Do
- 始终从 `@1money/react-ui` 进行命名导入：`import { Popup } from '@1money/react-ui'`
- 先用组件 props 表达状态（disabled/loading/severity/size 等），不要在业务层重复造样式。
- 需要新增能力时，优先扩展组件库而不是在业务侧写一次性 hack。

❌ Don't
- 不要直接从 `primereact/*` 引入同名组件绕过二次封装。
- 不要在业务代码里硬编码颜色值；优先使用组件库既有的 props / tokens。
