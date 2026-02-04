# Space Component Implementation Plan

**Goal:** Add a Space layout component modeled after Ant Design Space, including size, direction, align, wrap, and split support with docs, stories, tests, and exports.

**Architecture:** Build a lightweight wrapper that normalizes size tokens into numeric gaps, applies CSS variables for horizontal/vertical spacing, and wraps each child in an item container (so split elements can be inserted between items). SCSS defines the flex layout, align classes, and wrap behavior while following the 4px spacing grid.

**Tech Stack:** React, TypeScript, SCSS, Storybook, Jest + Testing Library

**Non-goals:** Space.Compact is out of scope for this plan; add it later if needed.

---

### Task 1: Add Space tests (failing first)

**Files:**
- Create: `src/components/Space/__test__/index.test.tsx`

**Step 1: Write the failing test**

```tsx
import 'jsdom-global/register';
import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Space } from '../index';
import { SPACE_ALIGN, SPACE_DIRECTION, SPACE_SIZE } from '../constants';

const originalConsoleError = console.error;
console.error = (message, ...optionalParams) => {
  if (
    message.includes('Could not parse CSS stylesheet') ||
    message.includes('findDOMNode is deprecated and will be removed')
  ) {
    return;
  }
  originalConsoleError(message, ...optionalParams);
};

describe('Space', () => {
  it('renders horizontal spacing with split', () => {
    const { container } = render(
      <Space
        size={SPACE_SIZE.middle}
        align={SPACE_ALIGN.center}
        direction={SPACE_DIRECTION.horizontal}
        wrap
        split={<span>|</span>}
      >
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
      </Space>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders vertical spacing with numeric sizes', () => {
    const { container } = render(
      <Space direction={SPACE_DIRECTION.vertical} size={[8, 16]}>
        <div>Top</div>
        <div>Bottom</div>
      </Space>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
```

**Step 2: Run test to verify it fails**

Run: `pnpm test -- src/components/Space/__test__/index.test.tsx`

Expected: FAIL with "Cannot find module '../index'" or similar until Space files exist.

---

### Task 2: Add Space types and constants

**Files:**
- Create: `src/components/Space/interface.ts`
- Create: `src/components/Space/constants.ts`

**Step 1: Add Space interfaces**

```ts
import type { HTMLAttributes, ReactNode } from 'react';

export type SpaceAlign = 'start' | 'end' | 'center' | 'baseline';
export type SpaceDirection = 'horizontal' | 'vertical';
export type SpaceSize = 'small' | 'middle' | 'large' | number;

export interface SpaceProps extends HTMLAttributes<HTMLDivElement> {
  align?: SpaceAlign;
  direction?: SpaceDirection;
  size?: SpaceSize | [SpaceSize, SpaceSize];
  split?: ReactNode;
  wrap?: boolean;
  prefixCls?: string;
}
```

**Step 2: Add Space constants**

```ts
import type { SpaceSize } from './interface';

export const SPACE_ALIGN = {
  start: 'start',
  end: 'end',
  center: 'center',
  baseline: 'baseline'
} as const;

export const SPACE_DIRECTION = {
  horizontal: 'horizontal',
  vertical: 'vertical'
} as const;

export const SPACE_SIZE = {
  small: 'small',
  middle: 'middle',
  large: 'large'
} as const;

export const SPACE_PREFIX = 'space';

export const SPACE_SIZE_SMALL = 8;
export const SPACE_SIZE_MIDDLE = 16;
export const SPACE_SIZE_LARGE = 24;
export const SPACE_SIZE_DEFAULT = SPACE_SIZE_SMALL;

export const SPACE_CSS_VARS = {
  gapX: '--om-space-gap-x',
  gapY: '--om-space-gap-y'
} as const;

export const SPACE_CLASS = {
  vertical: 'vertical',
  align: 'align',
  wrap: 'wrap',
  item: 'item',
  split: 'split'
} as const;

export const SPACE_SIZE_MAP: Record<Exclude<SpaceSize, number>, number> = {
  small: SPACE_SIZE_SMALL,
  middle: SPACE_SIZE_MIDDLE,
  large: SPACE_SIZE_LARGE
};
```

---

### Task 3: Implement Space component

**Files:**
- Create: `src/components/Space/Space.tsx`
- Create: `src/components/Space/index.ts`

**Step 1: Implement Space**

```tsx
import { memo, Fragment, Children } from 'react';
import classnames, { joinCls } from '@/utils/classnames';
import {
  SPACE_CLASS,
  SPACE_CSS_VARS,
  SPACE_DIRECTION,
  SPACE_PREFIX,
  SPACE_SIZE_DEFAULT,
  SPACE_SIZE_MAP
} from './constants';
import type { FC, PropsWithChildren, CSSProperties } from 'react';
import type { SpaceProps, SpaceSize } from './interface';

const resolveSize = (value?: SpaceSize) => {
  if (value === undefined || value === null) return SPACE_SIZE_DEFAULT;
  if (typeof value === 'number') return value;
  return SPACE_SIZE_MAP[value] ?? SPACE_SIZE_DEFAULT;
};

const normalizeSize = (size?: SpaceSize | [SpaceSize, SpaceSize]): [number, number] => {
  if (Array.isArray(size)) {
    return [resolveSize(size[0]), resolveSize(size[1])];
  }
  const resolved = resolveSize(size);
  return [resolved, resolved];
};

export const Space: FC<PropsWithChildren<SpaceProps>> = props => {
  const {
    children,
    align,
    direction = SPACE_DIRECTION.horizontal,
    size,
    split,
    wrap = false,
    className,
    style,
    prefixCls = SPACE_PREFIX,
    ...rest
  } = props;

  const classes = classnames(prefixCls);
  const isVertical = direction === SPACE_DIRECTION.vertical;
  const [gapX, gapY] = normalizeSize(size);
  const shouldWrap = wrap && !isVertical;

  const mergedStyle = {
    ...style,
    [SPACE_CSS_VARS.gapX]: `${gapX}px`,
    [SPACE_CSS_VARS.gapY]: `${gapY}px`
  } as CSSProperties;

  const childrenArray = Children.toArray(children)
    .filter(child => child !== null && child !== undefined);

  const content = childrenArray.map((child, index) => {
    const isLast = index === childrenArray.length - 1;

    return (
      <Fragment key={`space-item-${index}`}>
        <div className={classes(SPACE_CLASS.item)}>{child}</div>
        {!isLast && split ? (
          <span className={classes(SPACE_CLASS.split)}>{split}</span>
        ) : null}
      </Fragment>
    );
  });

  return (
    <div
      {...rest}
      style={mergedStyle}
      className={classes(void 0, joinCls(
        isVertical && classes(SPACE_CLASS.vertical),
        align && classes(`${SPACE_CLASS.align}-${align}`),
        shouldWrap && classes(SPACE_CLASS.wrap),
        className
      ))}
    >
      {content}
    </div>
  );
};

export default memo(Space);
```

**Step 2: Export Space**

```ts
import Space from './Space';

export { Space } from './Space';
export default Space;
export * from './interface';
export { SPACE_ALIGN, SPACE_DIRECTION, SPACE_SIZE } from './constants';
```

---

### Task 4: Add Space styles

**Files:**
- Create: `src/components/Space/style/Space.scss`
- Create: `src/components/Space/style/index.ts`

**Step 1: Add SCSS**

```scss
@use '../../../variable.scss' as *;

$component: 'space';
$space-gap-x: '--om-space-gap-x';
$space-gap-y: '--om-space-gap-y';
$space-gap-fallback: 8px;

.#{$prefix}-#{$component} {
  display: inline-flex;
  column-gap: var(#{$space-gap-x}, #{$space-gap-fallback});
  row-gap: var(#{$space-gap-y}, #{$space-gap-fallback});

  &-vertical {
    flex-direction: column;
  }

  &-wrap {
    flex-wrap: wrap;
  }

  &-align-start {
    align-items: flex-start;
  }

  &-align-end {
    align-items: flex-end;
  }

  &-align-center {
    align-items: center;
  }

  &-align-baseline {
    align-items: baseline;
  }

  &-item,
  &-split {
    display: inline-flex;
  }
}
```

**Step 2: Add style barrel**

```ts
import './Space.scss';
```

---

### Task 5: Add Storybook stories

**Files:**
- Create: `src/components/Space/Space.stories.tsx`

**Step 1: Add stories**

```tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Space } from './index';
import { SPACE_ALIGN, SPACE_DIRECTION, SPACE_SIZE } from './constants';
import './style';

const SPACE_ALIGN_OPTIONS = Object.values(SPACE_ALIGN);
const SPACE_DIRECTION_OPTIONS = Object.values(SPACE_DIRECTION);
const SPACE_SIZE_OPTIONS = Object.values(SPACE_SIZE);

const DEMO_PADDING = 8;
const DEMO_BORDER = '1px dashed currentColor';
const DEMO_BOX_STYLE = { padding: DEMO_PADDING, border: DEMO_BORDER };
const DEMO_SECTION_GAP = 16;
const DEMO_SECTION_STYLE = { display: 'grid', gap: DEMO_SECTION_GAP };

const meta: Meta<typeof Space> = {
  title: 'Components/Space',
  component: Space,
  argTypes: {
    size: { control: 'select', options: SPACE_SIZE_OPTIONS },
    align: { control: 'select', options: SPACE_ALIGN_OPTIONS },
    direction: { control: 'select', options: SPACE_DIRECTION_OPTIONS },
    wrap: { control: 'boolean' },
    split: { control: false },
    prefixCls: { control: 'text' }
  },
  args: {
    size: SPACE_SIZE.small,
    align: SPACE_ALIGN.center,
    direction: SPACE_DIRECTION.horizontal,
    wrap: false
  },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Space>;

export const Primary: Story = {
  render: (args) => (
    <Space {...args}>
      <div style={DEMO_BOX_STYLE}>One</div>
      <div style={DEMO_BOX_STYLE}>Two</div>
      <div style={DEMO_BOX_STYLE}>Three</div>
    </Space>
  )
};

export const Vertical: Story = {
  render: () => (
    <Space direction={SPACE_DIRECTION.vertical} size={SPACE_SIZE.middle}>
      <div style={DEMO_BOX_STYLE}>Top</div>
      <div style={DEMO_BOX_STYLE}>Bottom</div>
    </Space>
  )
};

export const CustomSizeAndWrap: Story = {
  render: () => (
    <Space size={[8, 16]} wrap style={{ maxWidth: 240 }}>
      {Array.from({ length: 10 }).map((_, index) => (
        <div style={DEMO_BOX_STYLE} key={index}>
          Item {index + 1}
        </div>
      ))}
    </Space>
  )
};

export const Split: Story = {
  render: () => (
    <Space split={<span>|</span>} size={SPACE_SIZE.large}>
      <span>Alpha</span>
      <span>Beta</span>
      <span>Gamma</span>
    </Space>
  )
};

export const ApiExamples: Story = {
  render: () => (
    <div style={DEMO_SECTION_STYLE}>
      <Space size={SPACE_SIZE.middle} align={SPACE_ALIGN.center}>
        <div style={DEMO_BOX_STYLE}>Align</div>
        <div style={DEMO_BOX_STYLE}>Center</div>
      </Space>
      <Space direction={SPACE_DIRECTION.vertical} size={SPACE_SIZE.large}>
        <div style={DEMO_BOX_STYLE}>Vertical</div>
        <div style={DEMO_BOX_STYLE}>Large</div>
      </Space>
    </div>
  )
};
```

---

### Task 6: Add README

**Files:**
- Create: `src/components/Space/README.md`

**Step 1: Write docs**

```md
# Space

A layout helper component modeled after Ant Design's Space. It wraps each child and applies consistent spacing, optional alignment, wrapping, and split separators.

## Features

- Horizontal or vertical spacing
- Preset or custom gap sizes (4px grid)
- Align control for items
- Optional wrap for horizontal layouts
- Optional split between items

## Basic Usage

```tsx
import { Space } from '@1money/react-ui';
import { SPACE_ALIGN, SPACE_DIRECTION, SPACE_SIZE } from '@1money/react-ui/Space';

<Space size={SPACE_SIZE.middle} align={SPACE_ALIGN.center}>
  <span>Left</span>
  <span>Right</span>
</Space>
```

## Component Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| align | Align items | 'start' \| 'end' \| 'center' \| 'baseline' | - |
| direction | Spacing direction | 'horizontal' \| 'vertical' | 'horizontal' |
| size | Gap size | 'small' \| 'middle' \| 'large' \| number \| [SpaceSize, SpaceSize] | 'small' |
| split | Insert split element between items | ReactNode | - |
| wrap | Auto wrap when horizontal | boolean | false |
| prefixCls | Classname prefix | string | 'space' |

## Vertical Layout

```tsx
<Space direction={SPACE_DIRECTION.vertical} size={SPACE_SIZE.large}>
  <div>Top</div>
  <div>Bottom</div>
</Space>
```

## Split Example

```tsx
<Space split={<span>|</span>} size={SPACE_SIZE.small}>
  <span>Alpha</span>
  <span>Beta</span>
  <span>Gamma</span>
</Space>
```
```

---

### Task 7: Wire exports

**Files:**
- Modify: `src/index.ts`
- Modify: `package.json`

**Step 1: Export in src/index.ts**

```ts
// add near other imports
import { Space } from './components/Space';
```

```ts
// add near other exports
export { Space } from './components/Space';
```

```ts
// add inside the default export object
Space,
```

**Step 2: Add package subpath export**

```json
"./Space": {
  "types": "./es/components/Space/index.d.ts",
  "import": "./es/components/Space/index.js",
  "require": "./lib/components/Space/index.js"
}
```

---

### Task 8: Update snapshots + quick lint (optional but recommended)

**Files:**
- None

**Step 1: Run Space tests**

Run: `pnpm test -- src/components/Space/__test__/index.test.tsx`

Expected: PASS (or snapshot failure on first run).

**Step 2: Update snapshots (if needed)**

Run: `pnpm test:snapshot -- src/components/Space/__test__/index.test.tsx`

Expected: PASS

**Step 3: Run targeted lint**

Run: `pnpm lint:es -- src/components/Space`

Expected: PASS
