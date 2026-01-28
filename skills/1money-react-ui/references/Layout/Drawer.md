---
name: Drawer
category: Layout
description: A slide-out panel component built on top of PrimeReact's Sidebar with 1Money branding and enhanced styling for displaying overlaying content, navigation menus, or detailed information.
---

# Drawer

## Component Overview

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

## Usage Scenarios

### When to use
- Need blocking confirmation/input (Modal) or side flow (Drawer)
- Need in-place confirmation/double confirmation (Popup/ConfirmPopup)

### When not to use
- Frequent notifications (consider Toast/Notification/Message)

## Design Specifications

- Global class prefix: `om-react-ui` (from `$prefix` in `src/variable.scss`)
- Border radius (px, extracted from source style): 4
- Height/Max-height (px, extracted from source style): 36
- Detailed visual and interaction based on component source `style/*.scss`; prioritize consolidating new/adjusted styles into Foundation tokens to avoid scattered magic numbers.
- References: [`DesignTokens`](../Foundation/DesignTokens.md), [`Spacing`](../Foundation/Spacing.md), [`Typography`](../Foundation/Typography.md)

## API

### Component Props

Inherits from: [PrimeReact Sidebar](https://primereact.org/sidebar/).

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| betaLogo | Show beta branding | `boolean` | `false` |
| prefixCls | Component class prefix | `string` | `"drawer"` |
| className | Additional CSS classes | `string` | - |

> Common inherited props: `visible`, `onHide`, `position` ('left', 'right', 'top', 'bottom'), `fullScreen`, `blockScroll`, `dismissable`, `modal`, `showCloseIcon`, `style`.

## Examples

```tsx
import { Drawer } from '@1money/react-ui';
import { useState } from 'react';

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
  header="Settings"
  onHide={() => setVisible(false)}
>
  <div className="drawer-content">
    <h2>Configuration</h2>
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
  <p>Sidebar content</p>
</Drawer>
```

```tsx
const [drawerVisible, setDrawerVisible] = useState(false);

<Drawer
  visible={drawerVisible}
  position="left"
  onHide={() => setDrawerVisible(false)}
  style={{ width: '280px' }}
>
  <div className="navigation-drawer">
    <nav>
      <ul>...</ul>
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
      </div>
    </div>
  )}
</Drawer>
```

## Core Principles

- **Declarative State**: Unlike `Modal` (which uses `ref`), `Drawer` uses standard declarative `visible` boolean and `onHide` callback.
- **Positioning**: **MUST** specify `position` (`left`, `right`, etc.) unless the default matches your exact need.
- **Branding**: Use the `betaLogo` prop to include standard 1Money branding stamps; do not manually insert logo images for this purpose.
- **Sizing**: Use `style={{ width: '...' }}` for width control on side drawers, rather than trying to force it via children content width.

