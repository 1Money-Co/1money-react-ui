# Notification Banner Implementation Plan

**Goal:** Update the `Notification` component to match the Figma Notification Banner layout (icon + title/body/link + optional action button + optional close).

**Architecture:** Keep `Notification` as a presentational component that composes existing design-system primitives (`Icons`, `Typography`) and uses SCSS for styling. Add optional props for link/action/close while preserving the existing `children` API for backwards compatibility.

**Tech Stack:** React, TypeScript, SCSS, Storybook, Jest + Testing Library

---

### Task 1: Record design tokens and variant rules from Figma

**Files:**
- Reference: `src/variable.scss`

**Step 1: Verify Figma tokens against SCSS variables**
- Confirm these mappings (from Figma nodes `32341:22822` and `32343:23438`):
  - Backgrounds: warning `$color-warning-background`, error `$color-negative-background`, success `$color-success-background`, info `$color-grey-light`
  - Icon colors: warning `$color-warning-dark`, error `$color-negative`, success `$color-success`, info `$color-primary`
  - Text: title/body `$color-grey-night`, link `$color-primary`, action label `$color-primary-black`
  - Spacing: container `padding: 12px`, radius `12px`, content gap `12px`, text gap `4px`, icon size `32px`, button height `32px`, button radius `8px`
  - Success-closable variant (node `32343:24684`): background `$color-primary-white`, icon pill `$color-grey`, border `$color-grey`, close icon `$color-grey-midnight`
  - Info-closable variant (node `32343:25985`): background `$color-primary-white`, icon pill `$color-grey`, border `$color-grey`, close icon `$color-grey-midnight`

**Step 2: Decide default icon sizes**
- Use `Icons` size `18` for banner icon and `16` for action/close to mirror Figma’s ~17.8px icon size.

**Step 3: Decide action slot behavior**
- Action should be a **slot** (`ReactNode`) so callers can pass any element (Button, Link, custom component).
- Notification should not enforce Button colors; styling is controlled by the passed element.

---

### Task 2: Extend Notification props for banner features

**Files:**
- Modify: `src/components/Notification/interface.ts`

**Step 1: Add link/action/close props and types**

```ts
import type { ReactNode, MouseEventHandler } from 'react';
import type { IconName } from '../Icons';

export interface NotificationLink {
  label: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export interface NotificationProps {
  id?: string;
  className?: string;
  prefixCls?: string;
  severity?: 'info' | 'success' | 'warn' | 'error';
  title?: ReactNode;
  description?: ReactNode;
  link?: NotificationLink;
  action?: ReactNode;
  closable?: boolean;
  onClose?: MouseEventHandler<HTMLButtonElement>;
  showIcon?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
}
```

**Step 2: Keep backwards compatibility**
- Leave `children` as-is in the component signature (do not remove from the component type usage). No interface changes required for `children`.

---

### Task 3: Update Notification markup to match banner layout

**Files:**
- Modify: `src/components/Notification/Notification.tsx`

**Step 1: Update severity map with icon colors**

```ts
const SeverityIconMap = {
  success: { name: 'check' as const, color: '#1F5800' },
  info: { name: 'info' as const, color: '#073387' },
  warn: { name: 'exclamation' as const, color: '#DB8600' },
  error: { name: 'cross' as const, color: '#AE0000' },
};
```

**Step 2: Rebuild the render layout (action slot)**

```tsx
export const Notification: FC<PropsWithChildren<NotificationProps>> = props => {
  const {
    children,
    className,
    severity = 'info',
    prefixCls = 'notification',
    title,
    description,
    link,
    action,
    closable = false,
    onClose,
    showIcon = true,
    ...rest
  } = props;
  const classes = classnames(prefixCls);
  const iconData = useMemo(() => SeverityIconMap[severity], [severity]);
  const bodyContent = description ?? children;

  return (
    <div
      {...rest}
    className={classes(void 0, joinCls(classes(severity), className))}
    onClick={onClick}
  >
      <div className={classes('left')}>
        {showIcon && (
          <span className={classes('icon')} aria-hidden>
            <Icons name={iconData.name} color={iconData.color} size={18} />
          </span>
        )}
        <div className={classes('content')}>
          {title && (
            <Typography.Title bold size="s" className={classes('title')}>
              {title}
            </Typography.Title>
          )}
          {bodyContent && (
            <Typography.Body size="m" className={classes('body')}>
              {bodyContent}
            </Typography.Body>
          )}
          {link?.label && (
            <Typography.Link
              size="m"
              className={classes('link')}
              href={link.href}
              target={link.target}
              rel={link.rel}
              onClick={link.onClick}
              role={link.href ? undefined : 'button'}
            >
              {link.label}
            </Typography.Link>
          )}
        </div>
      </div>
      {(action || closable) && (
        <div className={classes('right')}>
          {action && (
            <div className={classes('action')}>
              {action}
            </div>
          )}
          {closable && (
            <button
              type="button"
              className={classes('close')}
              aria-label="Close notification"
              onClick={onClose}
            >
              <Icons name="close" size={16} color="#646465" />
            </button>
          )}
        </div>
      )}
    </div>
  );
};
```

---

### Task 4: Update Notification SCSS to match the banner styling

**Files:**
- Modify: `src/components/Notification/style/Notification.scss`

**Step 1: Replace layout styles and add new element classes**

```scss
.#{$cls} {
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  color: $color-grey-night;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  border-radius: 12px;
  background-color: $color-grey-light;

  &-left {
    display: flex;
    flex: 1 1 auto;
    gap: 12px;
    align-items: center;
    min-width: 0;
  }

  &-content {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    gap: 4px;
    min-width: 0;
  }

  &-title,
  &-body {
    color: $color-grey-night;
  }

  &-link {
    color: $color-primary;
  }

  &-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: $color-info-light;
    flex-shrink: 0;
  }

  &-right {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
  }

  &-action {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  &-close {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 8px;
    background: transparent;
    cursor: pointer;
  }

  &-success {
    background-color: $color-primary-white;
    border: 1px solid $color-grey;

    .#{$cls}-icon {
      background-color: $color-grey;
    }

    .#{$cls}-action {
      color: $color-primary-white;
    }
  }

  &-info {
    background-color: $color-primary-white;
    border: 1px solid $color-grey;

    .#{$cls}-icon {
      background-color: $color-grey;
    }

    .#{$cls}-action {
      color: $color-primary;
    }
  }

  &-warn {
    background-color: $color-warning-background;

    .#{$cls}-icon {
      background-color: $color-info-light;
    }

    .#{$cls}-action {
      color: $color-warning;
    }
  }

  &-error {
    background-color: $color-negative-background;

    .#{$cls}-icon {
      background-color: $color-negative-background;
    }

    .#{$cls}-action {
      color: $color-negative;
    }
  }
}
```

**Step 2: Keep existing severity classnames**
- Do not rename `&-success`, `&-info`, `&-warn`, `&-error` to avoid breaking external overrides.

---

### Task 5: Update Storybook stories to cover new props

**Files:**
- Modify: `src/components/Notification/Notification.stories.tsx`

**Step 1: Update Primary args to include title/body/link/action**

```ts
export const Primary: Story = {
  args: {
    prefixCls: 'notification',
    severity: 'warn',
    title: 'Title',
    description: 'Body text',
    link: { label: 'Link' },
    action: (
      <Button severity="warning" size="small">
        <Icons name="arrowLeft" size={16} color="#131313" />
        <Typography.Label size="s">Label</Typography.Label>
      </Button>
    ),
  },
};
```

**Step 2: Update Success story to match Figma (no action, closable)**

```ts
export const Success: Story = {
  args: {
    prefixCls: 'notification',
    severity: 'success',
    title: 'Title',
    description: 'Body text',
    link: { label: 'Link' },
    closable: true,
  },
};
```

**Step 3: Update Info story to match Figma (no action, closable)**

```ts
export const Info: Story = {
  args: {
    prefixCls: 'notification',
    severity: 'info',
    title: 'Title',
    description: 'Body text',
    link: { label: 'Link' },
    closable: true,
  },
};
```

**Step 4: Add a Closeable story**

```ts
export const Closable: Story = {
  args: {
    prefixCls: 'notification',
    severity: 'error',
    title: 'Title',
    description: 'Body text',
    link: { label: 'Link' },
    action: (
      <Button severity="danger" size="small">
        <Icons name="arrowLeft" size={16} color="#131313" />
        <Typography.Label size="s">Label</Typography.Label>
      </Button>
    ),
    closable: true,
  },
};
```

---

### Task 6: Update Notification tests and snapshots

**Files:**
- Modify: `src/components/Notification/__test__/index.test.tsx`
- Modify: `src/components/Notification/__test__/__snapshots__/index.test.tsx.snap`

**Step 1: Extend tests for link/action/close clicks**

```tsx
it('renders banner content and handles action/close/root click', async () => {
  const onAction = jest.fn();
  const onClose = jest.fn();
  const onLink = jest.fn();
  const onRoot = jest.fn();
  render(
    <Notification
      title="Title"
      description="Body text"
      link={{ label: 'Link', onClick: onLink }}
      action={<button type="button" onClick={onAction}>Label</button>}
      closable
      onClose={onClose}
      onClick={onRoot}
    />
  );

  const user = userEvent.setup();
  await user.click(screen.getByText('Label'));
  await user.click(screen.getByText('Link'));
  await user.click(screen.getByText('Body text'));
  await user.click(screen.getByLabelText('Close notification'));

  expect(onAction).toHaveBeenCalled();
  expect(onLink).toHaveBeenCalled();
  expect(onClose).toHaveBeenCalled();
  expect(onRoot).toHaveBeenCalled();
});
```

**Step 2: Update snapshot**
- Run snapshot update after markup changes.

Run: `pnpm test:snapshot -- Notification`
Expected: `PASS` with updated snapshot for `Notification`.

---

### Task 7: Update Notification README

**Files:**
- Modify: `src/components/Notification/README.md`

**Step 1: Add examples for title/body/link/action/close**

```tsx
<Notification
  severity="warn"
  title="Title"
  description="Body text"
  link={{ label: 'Link', href: '/learn-more' }}
  action={{ label: 'Get Started' }}
/>

<Notification
  severity="error"
  title="Title"
  description="Body text"
  link={{ label: 'Link', onClick: onLink }}
  action={{ label: 'Label', onClick: onAction }}
  closable
  onClose={() => setVisible(false)}
/>
```

**Step 2: Update props table**
- Add rows for `link`, `action`, `closable`, `onClose`, `showIcon`.

---

### Task 8: Run tests and sanity check

**Step 1: Run Notification tests**
Run: `pnpm test -- Notification`
Expected: `PASS` for `Notification` test suite.

**Step 2: (Optional) Run lint if touching styles**
Run: `pnpm lint:style -- src/components/Notification/style/Notification.scss`
Expected: `PASS` with no stylelint errors.
