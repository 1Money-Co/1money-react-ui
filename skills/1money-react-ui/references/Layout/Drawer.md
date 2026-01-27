---
name: Drawer
category: Layout
description: A slide-out panel component built on top of PrimeReact's Sidebar with 1Money branding and enhanced styling for displaying overlaying content, navigation menus, or detailed information.
---

# Drawer

## 组件概述

A slide-out panel component built on top of PrimeReact's Sidebar with 1Money branding and enhanced styling for displaying overlaying content, navigation menus, or detailed information.

### Features

- Slide-out panel from any side (left, right, top, bottom)
- Built-in 1Money logo and branding
- Custom close icon with proper styling
- Modal and non-modal modes
- Keyboard navigation and accessibility support
- Smooth animations and transitions
- Responsive design with mobile optimization
- Overlay backdrop with configurable dismissal

## 使用场景

### 何时使用
- 需要阻塞式确认/输入（Modal）或侧边流程（Drawer）
- 需要就地确认/二次确认（Popup/ConfirmPopup）

### 不适用
- 频繁提示（考虑 Toast/Notification/Message）

## 设计规范

- 全局 class 前缀：`om-react-ui`（来自 `src/variable.scss` 的 `$prefix`）
- 圆角（px，源码样式提取）：4
- 高度/最大高度（px，源码样式提取）：36
- 详细视觉与交互以组件源码 `style/*.scss` 为准；新增/调整样式优先沉淀到 Foundation tokens，避免散落 magic numbers。
- 参考：[`DesignTokens`](../Foundation/DesignTokens.md)、[`Spacing`](../Foundation/Spacing.md)、[`Typography`](../Foundation/Typography.md)

## API

### Component Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| className | Additional CSS class for the drawer | string | - |
| prefixCls | The classname prefix for component styling | string | "drawer" |
| betaLogo | Whether to show beta logo variant | boolean | false |

> 其余属性继承 PrimeReact Sidebar（如 `visible`、`position`、`onHide` 等）。

## 示例

```tsx
import { Drawer } from '@1money/react-ui';

// Basic drawer
const [visible, setVisible] = useState(false);

<Drawer
  visible={visible}
  onHide={() => setVisible(false)}
>
  <p>Drawer content goes here</p>
</Drawer>

// Right-side drawer
<Drawer
  visible={visible}
  position="right"
  onHide={() => setVisible(false)}
>
  <div className="drawer-content">
    <h2>Settings</h2>
    <p>Configure your preferences here.</p>
  </div>
</Drawer>

// Full-height drawer with custom width
<Drawer
  visible={visible}
  position="left"
  style={{ width: '400px' }}
  onHide={() => setVisible(false)}
>
  <NavigationMenu />
</Drawer>
```

```tsx
const [drawerVisible, setDrawerVisible] = useState(false);

const navigationItems = [
  { label: 'Dashboard', icon: 'pi pi-home', link: '/dashboard' },
  { label: 'Transactions', icon: 'pi pi-credit-card', link: '/transactions' },
  { label: 'Reports', icon: 'pi pi-chart-bar', link: '/reports' },
  { label: 'Settings', icon: 'pi pi-cog', link: '/settings' }
];

<Drawer
  visible={drawerVisible}
  position="left"
  onHide={() => setDrawerVisible(false)}
  style={{ width: '280px' }}
>
  <div className="navigation-drawer">
    <nav>
      <ul>
        {navigationItems.map(item => (
          <li key={item.label}>
            <a href={item.link}>
              <i className={item.icon}></i>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </div>
</Drawer>
```

```tsx
const [selectedItem, setSelectedItem] = useState(null);
const [detailsVisible, setDetailsVisible] = useState(false);

const showDetails = (item) => {
  setSelectedItem(item);
  setDetailsVisible(true);
};

<Drawer
  visible={detailsVisible}
  position="right"
  onHide={() => setDetailsVisible(false)}
  style={{ width: '500px' }}
>
  {selectedItem && (
    <div className="details-panel">
      <h2>{selectedItem.title}</h2>
      <div className="details-content">
        <p><strong>ID:</strong> {selectedItem.id}</p>
        <p><strong>Status:</strong> {selectedItem.status}</p>
        <p><strong>Created:</strong> {selectedItem.createdDate}</p>
        <div className="description">
          <h3>Description</h3>
          <p>{selectedItem.description}</p>
        </div>
        <div className="actions">
          <Button severity="primary">Edit</Button>
          <Button severity="secondary">Archive</Button>
        </div>
      </div>
    </div>
  )}
</Drawer>
```

## 最佳实践与注意事项

✅ Do
- 始终从 `@1money/react-ui` 进行命名导入：`import { Drawer } from '@1money/react-ui'`
- 先用组件 props 表达状态（disabled/loading/severity/size 等），不要在业务层重复造样式。
- 需要新增能力时，优先扩展组件库而不是在业务侧写一次性 hack。

❌ Don't
- 不要直接从 `primereact/*` 引入同名组件绕过二次封装。
- 不要在业务代码里硬编码颜色值；优先使用组件库既有的 props / tokens。
