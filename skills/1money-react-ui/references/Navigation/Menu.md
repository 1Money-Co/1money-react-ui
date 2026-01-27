---
name: Menu
category: Navigation
description: A versatile menu component built on top of PrimeReact's Menu with enhanced styling and support for different menu types including standard menus and selectors for dropdown navigation, context menus, and item selection.
---

# Menu

## 组件概述

A versatile menu component built on top of PrimeReact's Menu with enhanced styling and support for different menu types including standard menus and selectors for dropdown navigation, context menus, and item selection.

### Features

- Multiple menu types: standard menu and selector
- Hierarchical menu structure with submenus
- Icon support for menu items
- Keyboard navigation and accessibility
- Context menu and popup positioning
- Command callbacks for menu actions
- URL navigation support
- Disabled and separator items
- Custom styling and templates
- Ref-based imperative API for programmatic control

## 使用场景

### 何时使用
- 页面/模块导航与信息架构展示（Menu/Sidebar/Tab）
- 可点击的列表项/菜单项/设置项展示（Cell）

### 不适用
- 需要承载复杂表单录入（考虑单独页面或 Drawer/Modal）

## 设计规范

- 全局 class 前缀：`om-react-ui`（来自 `src/variable.scss` 的 `$prefix`）
- 该组件在源码样式中使用到的颜色 tokens：`$color-grey`, `$color-grey-light`, `$color-primary-black`, `$color-primary-white`
- 圆角（px，源码样式提取）：12, 16
- 字号（px，源码样式提取）：16
- padding 数值（px，源码样式提取）：8, 12, 16
- 详细视觉与交互以组件源码 `style/*.scss` 为准；新增/调整样式优先沉淀到 Foundation tokens，避免散落 magic numbers。
- 参考：[`DesignTokens`](../Foundation/DesignTokens.md)、[`Spacing`](../Foundation/Spacing.md)、[`Typography`](../Foundation/Typography.md)

## API

### Component Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| className | Additional CSS class for the menu | string | - |
| prefixCls | The classname prefix for component styling | string | "menu" |
| type | Menu style variant | 'menu' \| 'selector' | 'menu' |

> 其余属性继承 PrimeReact Menu（如 `model`、`popup` 等）。

### MenuItem Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| label | Display text for the menu item | string | - |
| icon | Icon CSS class or ReactNode | string \| ReactNode | - |
| command | Callback when item is clicked | (event: MenuItemCommandEvent) => void | - |
| url | URL for navigation | string | - |
| items | Submenu items | MenuItem[] | - |
| disabled | Whether the item is disabled | boolean | false |
| visible | Whether the item is visible | boolean | true |
| target | Link target attribute | string | - |
| separator | Whether item is a separator | boolean | false |
| style | Inline styles for the item | CSSProperties | - |
| className | CSS class for the item | string | - |
| template | Custom template function | Function | - |

### Ref API
| Method | Description | Parameters |
| --- | --- | --- |
| show | Show the popup menu | event: Event |
| hide | Hide the popup menu | - |
| toggle | Toggle popup menu visibility | event: Event |

## 示例

```tsx
import { Menu } from '@1money/react-ui';

// Basic menu
const menuItems = [
  {
    label: 'File',
    icon: 'pi pi-file',
    items: [
      { label: 'New', icon: 'pi pi-plus', command: () => createNew() },
      { label: 'Open', icon: 'pi pi-folder-open', command: () => openFile() },
      { separator: true },
      { label: 'Quit', icon: 'pi pi-times', command: () => quit() }
    ]
  },
  {
    label: 'Edit',
    icon: 'pi pi-pencil',
    items: [
      { label: 'Copy', icon: 'pi pi-copy', command: () => copy() },
      { label: 'Paste', icon: 'pi pi-clone', command: () => paste() }
    ]
  }
];

<Menu model={menuItems} />

// Selector type menu
<Menu
  model={menuItems}
  type="selector"
  popup
  ref={menuRef}
/>

// Context menu
<Menu
  model={contextMenuItems}
  popup
  ref={contextMenuRef}
/>
```

```tsx
const appMenuItems = [
  {
    label: 'File',
    icon: 'pi pi-file',
    items: [
      {
        label: 'New Project',
        icon: 'pi pi-plus',
        command: () => createNewProject()
      },
      {
        label: 'Open Project',
        icon: 'pi pi-folder-open',
        command: () => openProject()
      },
      { separator: true },
      {
        label: 'Recent Projects',
        icon: 'pi pi-history',
        items: recentProjects.map(project => ({
          label: project.name,
          command: () => openProject(project.id)
        }))
      },
      { separator: true },
      {
        label: 'Exit',
        icon: 'pi pi-times',
        command: () => confirmExit()
      }
    ]
  },
  {
    label: 'Edit',
    icon: 'pi pi-pencil',
    items: [
      {
        label: 'Undo',
        icon: 'pi pi-undo',
        command: () => undo(),
        disabled: !canUndo
      },
      {
        label: 'Redo',
        icon: 'pi pi-refresh',
        command: () => redo(),
        disabled: !canRedo
      },
      { separator: true },
      {
        label: 'Cut',
        icon: 'pi pi-scissors',
        command: () => cut()
      },
      {
        label: 'Copy',
        icon: 'pi pi-copy',
        command: () => copy()
      },
      {
        label: 'Paste',
        icon: 'pi pi-clone',
        command: () => paste(),
        disabled: !canPaste
      }
    ]
  },
  {
    label: 'View',
    icon: 'pi pi-eye',
    items: [
      {
        label: 'Zoom In',
        icon: 'pi pi-search-plus',
        command: () => zoomIn()
      },
      {
        label: 'Zoom Out',
        icon: 'pi pi-search-minus',
        command: () => zoomOut()
      },
      {
        label: 'Reset Zoom',
        icon: 'pi pi-refresh',
        command: () => resetZoom()
      },
      { separator: true },
      {
        label: 'Toggle Sidebar',
        icon: 'pi pi-bars',
        command: () => toggleSidebar()
      }
    ]
  }
];

<Menu model={appMenuItems} />
```

```tsx
const contextMenuRef = useRef<Menu>(null);
const [selectedItem, setSelectedItem] = useState(null);

const contextMenuItems = [
  {
    label: 'View Details',
    icon: 'pi pi-info-circle',
    command: () => viewDetails(selectedItem)
  },
  {
    label: 'Edit',
    icon: 'pi pi-pencil',
    command: () => editItem(selectedItem)
  },
  {
    label: 'Duplicate',
    icon: 'pi pi-copy',
    command: () => duplicateItem(selectedItem)
  },
  { separator: true },
  {
    label: 'Archive',
    icon: 'pi pi-archive',
    command: () => archiveItem(selectedItem)
  },
  {
    label: 'Delete',
    icon: 'pi pi-trash',
    command: () => deleteItem(selectedItem),
    className: 'danger-item'
  }
];

const handleRightClick = (event, item) => {
  setSelectedItem(item);
  contextMenuRef.current?.show(event);
};

<div>
  <div
    className="item-list"
    onContextMenu={(e) => handleRightClick(e, item)}
  >
    {/* Your content */}
  </div>

  <Menu
    model={contextMenuItems}
    popup
    ref={contextMenuRef}
    id="context-menu"
  />
</div>
```

## 最佳实践与注意事项

✅ Do
- 始终从 `@1money/react-ui` 进行命名导入：`import { Menu } from '@1money/react-ui'`
- 先用组件 props 表达状态（disabled/loading/severity/size 等），不要在业务层重复造样式。
- 需要新增能力时，优先扩展组件库而不是在业务侧写一次性 hack。

❌ Don't
- 不要直接从 `primereact/*` 引入同名组件绕过二次封装。
- 不要在业务代码里硬编码颜色值；优先使用组件库既有的 props / tokens。
