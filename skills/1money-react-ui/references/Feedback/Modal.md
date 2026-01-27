---
name: Modal
category: Feedback
description: A flexible modal dialog component built on top of PrimeReact's Dialog with enhanced styling and functionality.
source: src/components/Modal
---

# Modal

## 组件概述

A flexible modal dialog component built on top of PrimeReact's Dialog with enhanced styling and functionality.

### Features

- Customizable header and footer
- Backdrop click to close
- Escape key to close
- Responsive design
- Animation support
- Accessibility features
- Position control (center, top, left, right, etc.)
- Resizable and draggable options

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
| prefixCls | The classname prefix for component styling | string | "modal" |
| type | Modal type | 'normal' \| 'confirm' | 'normal' |
| onHide | Callback when modal is hidden | () => void | - |

> Modal 内部管理 `visible`，外部通过 ref 调用 `show()` / `hide()`。

### ModalHandlers
| Method | Description | Parameters |
| --- | --- | --- |
| show | Show the modal | (params?: ConfirmDialogProps) => any |
| hide | Hide the modal | () => any |

## 示例

```tsx
import { Modal } from '@1money/react-ui';

// Basic modal (imperative)
const modalRef = useRef<ModalHandlers>(null);

<>
  <Button onClick={() => modalRef.current?.show()}>Open</Button>
  <Modal ref={modalRef} header="Modal Title">
    <p>Modal content goes here.</p>
  </Modal>
</>

// With custom footer
<Modal
  ref={modalRef}
  header="Confirm Action"
  footer={
    <div>
      <Button severity="secondary" onClick={() => modalRef.current?.hide()}>
        Cancel
      </Button>
      <Button severity="primary" onClick={handleConfirm}>
        Confirm
      </Button>
    </div>
  }
>
  <p>Are you sure you want to perform this action?</p>
</Modal>

// Full screen modal
<Modal
  ref={modalRef}
  maximizable
  maximized
  header="Full Screen Modal"
>
  <p>This modal takes up the full screen.</p>
</Modal>
```

```tsx
const ConfirmDialog = ({ onConfirm, message }) => {
  const modalRef = useRef<ModalHandlers>(null);
  return (
    <>
      <Button severity="danger" onClick={() => modalRef.current?.show()}>
        Delete
      </Button>
      <Modal
        ref={modalRef}
        header="Confirm"
        footer={
          <div className="flex justify-end gap-2">
            <Button severity="secondary" onClick={() => modalRef.current?.hide()}>
              Cancel
            </Button>
            <Button severity="danger" onClick={onConfirm}>
              Delete
            </Button>
          </div>
        }
        style={{ width: '450px' }}
      >
        <div className="flex align-items-center">
          <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
          <span>{message}</span>
        </div>
      </Modal>
    </>
  );
};
```

## 最佳实践与注意事项

✅ Do
- 始终从 `@1money/react-ui` 进行命名导入：`import { Modal } from '@1money/react-ui'`
- 先用组件 props 表达状态（disabled/loading/severity/size 等），不要在业务层重复造样式。
- 需要新增能力时，优先扩展组件库而不是在业务侧写一次性 hack。

❌ Don't
- 不要直接从 `primereact/*` 引入同名组件绕过二次封装。
- 不要在业务代码里硬编码颜色值；优先使用组件库既有的 props / tokens。
