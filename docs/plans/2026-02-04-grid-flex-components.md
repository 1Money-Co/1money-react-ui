# Grid and Flex Components Implementation Plan

**Goal:** Add Grid (Row/Col) and Flex layout components , including docs, stories, tests, and exports for `@1money/react-ui`.

**Architecture:** Implement a 12-column, flex-based grid where `Row` provides gutter context and alignment classes while `Col` converts span/offset/order/breakpoint props into BEM class names and CSS variables. SCSS generates base and breakpoint-specific grid classes; `Flex` is a lightweight wrapper that maps props to classes and CSS variables for direction, wrap, alignment, and gap. Both components follow existing `classnames`/`prefixCls` patterns and the 4px spacing guidance.

**Tech Stack:** React, TypeScript, SCSS, Storybook, Jest + Testing Library

---

### Task 1: Add Grid tests (failing first)

**Files:**
- Create: `src/components/Grid/__test__/index.test.tsx`

**Step 1: Write the failing test**

```tsx
import 'jsdom-global/register';
import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Grid, Row, Col } from '../index';
import { GRID_ALIGN, GRID_JUSTIFY } from '../interface';
import { GRID_CSS_VARS, GRID_ROW_PREFIX } from '../constants';

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

describe('Grid', () => {
  it('renders row/col with gutter + alignment', () => {
    const OM_PREFIX = 'om-react-ui';
    const ROW_CLASS = `${OM_PREFIX}-${GRID_ROW_PREFIX}`;
    const GUTTER_X = 16;
    const GUTTER_Y = 8;

    const SPAN_HALF = 6;

    const { container } = render(
      <Grid gutter={[GUTTER_X, GUTTER_Y]} justify={GRID_JUSTIFY.spaceBetween} align={GRID_ALIGN.middle}>
        <Grid.Col span={SPAN_HALF}>Left</Grid.Col>
        <Grid.Col span={SPAN_HALF}>Right</Grid.Col>
      </Grid>
    );

    const row = container.querySelector(`.${ROW_CLASS}`);
    expect(row).toHaveStyle(`${GRID_CSS_VARS.gutterX}: ${GUTTER_X}px`);
    expect(row).toHaveStyle(`${GRID_CSS_VARS.gutterY}: ${GUTTER_Y}px`);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders responsive classes', () => {
    const SPAN_BASE = 12;
    const SPAN_SM = 6;
    const SPAN_MD = 4;
    const OFFSET_MD = 2;
    const SPAN_LARGE = 3;
    const ORDER_LARGE = 1;

    const GUTTER = 8;

    const { container } = render(
      <Row gutter={GUTTER}>
        <Col
          span={SPAN_BASE}
          sm={SPAN_SM}
          md={{ span: SPAN_MD, offset: OFFSET_MD }}
          large={{ span: SPAN_LARGE, order: ORDER_LARGE }}
        />
      </Row>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
```

**Step 2: Run test to verify it fails**

Run: `pnpm test -- src/components/Grid/__test__/index.test.tsx`

Expected: FAIL with "Cannot find module '../index'" or similar until Grid files exist.

---

### Task 2: Add Grid types, constants, and helpers

**Files:**
- Create: `src/components/Grid/interface.ts`
- Create: `src/components/Grid/constants.ts`
- Create: `src/components/Grid/context.ts`
- Create: `src/components/Grid/helper.ts`

**Step 1: Add Grid interfaces**

```ts
import type { HTMLAttributes } from 'react';

export const GRID_ALIGN = {
  top: 'top',
  middle: 'middle',
  bottom: 'bottom',
  stretch: 'stretch'
} as const;

export const GRID_JUSTIFY = {
  start: 'start',
  end: 'end',
  center: 'center',
  spaceAround: 'space-around',
  spaceBetween: 'space-between',
  spaceEvenly: 'space-evenly'
} as const;

export type GridAlign = typeof GRID_ALIGN[keyof typeof GRID_ALIGN];
export type GridJustify = typeof GRID_JUSTIFY[keyof typeof GRID_JUSTIFY];
export type GridBreakpoint = 'sm' | 'md' | 'large';

export type GridGutter = number | [number, number];

export type GridColSize = number | {
  span?: number;
  offset?: number;
  order?: number;
  flex?: number | string;
};

export interface GridRowProps extends HTMLAttributes<HTMLDivElement> {
  gutter?: GridGutter;
  align?: GridAlign;
  justify?: GridJustify;
  wrap?: boolean;
  prefixCls?: string;
}

export interface GridColProps extends HTMLAttributes<HTMLDivElement> {
  span?: number;
  offset?: number;
  order?: number;
  flex?: number | string;
  sm?: GridColSize;
  md?: GridColSize;
  large?: GridColSize;
  prefixCls?: string;
}
```

**Step 2: Add Grid context**

```ts
import { createContext } from 'react';

export interface GridContextValue {
  gutter: [number, number];
}

export const GridContext = createContext<GridContextValue>({
  gutter: [0, 0]
});
```

**Step 3: Add Grid constants**

```ts
import type { GridBreakpoint } from './interface';

export const GRID_COLUMNS = 12;
export const GRID_ROW_PREFIX = 'grid-row';
export const GRID_COL_PREFIX = 'grid-col';
export const GRID_DEFAULT_WRAP = true;
export const GRID_GUTTER_FALLBACK = 0;
export const GRID_DEFAULT_GUTTER: [number, number] = [0, 0];
export const GRID_CSS_VARS = {
  gutterX: '--om-grid-gutter-x',
  gutterY: '--om-grid-gutter-y',
  colFlex: '--om-grid-col-flex',
  colFlexPrefix: '--om-grid-col-flex-'
} as const;
export const GRID_CLASS = {
  noWrap: 'no-wrap',
  align: 'align',
  justify: 'justify',
  offset: 'offset',
  order: 'order'
} as const;
export const GRID_FLEX_AUTO = 'auto';

export const GRID_BREAKPOINTS: GridBreakpoint[] = ['sm', 'md', 'large'];
export const GRID_BREAKPOINT_MIN_WIDTH: Record<GridBreakpoint, number> = {
  sm: 768,
  md: 1024,
  large: 1025
};
```

**Step 4: Add helper utilities**

```ts
import type { GridColSize, GridGutter } from './interface';
import { GRID_DEFAULT_GUTTER, GRID_FLEX_AUTO, GRID_GUTTER_FALLBACK } from './constants';

export const normalizeGutter = (gutter?: GridGutter): [number, number] => {
  if (Array.isArray(gutter)) return [gutter[0] ?? GRID_GUTTER_FALLBACK, gutter[1] ?? GRID_GUTTER_FALLBACK];
  if (typeof gutter === 'number') return [gutter, GRID_GUTTER_FALLBACK];
  return GRID_DEFAULT_GUTTER;
};

export const normalizeColSize = (size?: GridColSize) => {
  if (size === undefined || size === null) return {} as Required<Exclude<GridColSize, number>>;
  if (typeof size === 'number') return { span: size };
  return size;
};

export const normalizeFlex = (flex?: number | string): string | undefined => {
  if (flex === undefined || flex === null) return undefined;
  if (typeof flex === 'number') return `${flex} ${flex} ${GRID_FLEX_AUTO}`;
  return flex;
};
```

---

### Task 3: Implement Grid components

**Files:**
- Create: `src/components/Grid/Row.tsx`
- Create: `src/components/Grid/Col.tsx`
- Create: `src/components/Grid/Grid.tsx`
- Create: `src/components/Grid/index.ts`

**Step 1: Implement Row**

```tsx
import { memo } from 'react';
import classnames, { joinCls } from '@/utils/classnames';
import { GridContext } from './context';
import { GRID_CLASS, GRID_CSS_VARS, GRID_DEFAULT_WRAP, GRID_ROW_PREFIX } from './constants';
import { normalizeGutter } from './helper';
import type { FC, PropsWithChildren, CSSProperties } from 'react';
import type { GridRowProps } from './interface';

export const Row: FC<PropsWithChildren<GridRowProps>> = props => {
  const {
    children,
    gutter,
    align,
    justify,
    wrap = GRID_DEFAULT_WRAP,
    className,
    style,
    prefixCls = GRID_ROW_PREFIX,
    ...rest
  } = props;

  const classes = classnames(prefixCls);
  const [gutterX, gutterY] = normalizeGutter(gutter);

  const mergedStyle = {
    ...style,
    [GRID_CSS_VARS.gutterX]: `${gutterX}px`,
    [GRID_CSS_VARS.gutterY]: `${gutterY}px`
  } as CSSProperties;

  return (
    <GridContext.Provider value={{ gutter: [gutterX, gutterY] }}>
      <div
        {...rest}
        style={mergedStyle}
        className={classes(void 0, joinCls(
          align && classes(`${GRID_CLASS.align}-${align}`),
          justify && classes(`${GRID_CLASS.justify}-${justify}`),
          wrap === false && classes(GRID_CLASS.noWrap),
          className
        ))}
      >
        {children}
      </div>
    </GridContext.Provider>
  );
};

export default memo(Row);
```

**Step 2: Implement Col**

```tsx
import { memo, useContext, useMemo } from 'react';
import classnames, { joinCls } from '@/utils/classnames';
import { GridContext } from './context';
import { GRID_BREAKPOINTS, GRID_CLASS, GRID_COL_PREFIX, GRID_CSS_VARS, GRID_GUTTER_FALLBACK } from './constants';
import { normalizeColSize, normalizeFlex } from './helper';
import type { FC, PropsWithChildren, CSSProperties } from 'react';
import type { GridBreakpoint, GridColProps, GridColSize } from './interface';

export const Col: FC<PropsWithChildren<GridColProps>> = props => {
  const {
    children,
    span,
    offset,
    order,
    flex,
    sm,
    md,
    large,
    className,
    style,
    prefixCls = GRID_COL_PREFIX,
    ...rest
  } = props;

  const classes = classnames(prefixCls);
  const { gutter } = useContext(GridContext);
  const [gutterX] = gutter;

  const responsive = { sm, md, large } as Record<GridBreakpoint, GridColSize | undefined>;

  const { responsiveClasses, responsiveFlexVars } = useMemo(() => {
    const classList: string[] = [];
    const flexVars: Record<string, string> = {};

    GRID_BREAKPOINTS.forEach((breakpoint) => {
      const size = responsive[breakpoint];
      if (!size) return;

      const normalized = normalizeColSize(size);
      const hasFlex = normalized.flex !== undefined;

      if (normalized.span !== undefined && !hasFlex) {
        classList.push(classes(`${breakpoint}-${normalized.span}`));
      }
      if (normalized.offset !== undefined) {
        classList.push(classes(`${breakpoint}-offset-${normalized.offset}`));
      }
      if (normalized.order !== undefined) {
        classList.push(classes(`${breakpoint}-order-${normalized.order}`));
      }
      if (normalized.flex !== undefined) {
        const flexValue = normalizeFlex(normalized.flex);
        if (flexValue) {
          flexVars[`${GRID_CSS_VARS.colFlexPrefix}${breakpoint}`] = flexValue;
        }
      }
    });

    return { responsiveClasses: classList, responsiveFlexVars: flexVars };
  }, [responsive, classes]);

  const flexValue = normalizeFlex(flex);

  const mergedStyle = {
    ...style,
    ...(flexValue ? { [GRID_CSS_VARS.colFlex]: flexValue } : {}),
    ...responsiveFlexVars,
    [GRID_CSS_VARS.gutterX]: `${gutterX ?? GRID_GUTTER_FALLBACK}px`
  } as CSSProperties;

  return (
    <div
      {...rest}
      style={mergedStyle}
      className={classes(void 0, joinCls(
        span !== undefined && !flexValue && classes(`${span}`),
        offset !== undefined && classes(`${GRID_CLASS.offset}-${offset}`),
        order !== undefined && classes(`${GRID_CLASS.order}-${order}`),
        ...responsiveClasses,
        className
      ))}
    >
      {children}
    </div>
  );
};

export default memo(Col);
```

**Step 3: Implement Grid (alias Row) and exports**

```tsx
import { memo } from 'react';
import type { FC, PropsWithChildren } from 'react';
import type { GridRowProps } from './interface';
import { Row } from './Row';
import { Col } from './Col';

export interface GridProps extends GridRowProps {}

export const Grid: FC<PropsWithChildren<GridProps>> & {
  Row: typeof Row;
  Col: typeof Col;
} = memo((props) => {
  return <Row {...props} />;
}) as typeof Grid;

Grid.Row = Row;
Grid.Col = Col;

export default Grid;
```

```ts
import Grid from './Grid';
import Row from './Row';
import Col from './Col';

export { Grid, Row, Col };
export default Grid;
export * from './interface';
```

---

### Task 4: Add Grid styles

**Files:**
- Create: `src/components/Grid/style/Grid.scss`
- Create: `src/components/Grid/style/index.ts`

**Step 1: Add SCSS for grid layout and breakpoints**

```scss
@use '../../../variable.scss' as *;

$component-row: 'grid-row';
$component-col: 'grid-col';
$grid-columns: 12;
$grid-breakpoint-sm: 768px;
$grid-breakpoint-md: 1024px;
$grid-breakpoint-large: 1025px;
$grid-col-min-height: 1px;
$grid-gutter-divisor: 2;
$grid-gutter-fallback: 0px;
$grid-col-flex-fallback: 0 0 auto;

.#{$prefix}-#{$component-row} {
  display: flex;
  flex-wrap: wrap;
  margin-left: calc(var(--om-grid-gutter-x, #{$grid-gutter-fallback}) / -#{$grid-gutter-divisor});
  margin-right: calc(var(--om-grid-gutter-x, #{$grid-gutter-fallback}) / -#{$grid-gutter-divisor});
  row-gap: var(--om-grid-gutter-y, #{$grid-gutter-fallback});

  &-no-wrap {
    flex-wrap: nowrap;
  }

  &-align-top {
    align-items: flex-start;
  }

  &-align-middle {
    align-items: center;
  }

  &-align-bottom {
    align-items: flex-end;
  }

  &-align-stretch {
    align-items: stretch;
  }

  &-justify-start {
    justify-content: flex-start;
  }

  &-justify-end {
    justify-content: flex-end;
  }

  &-justify-center {
    justify-content: center;
  }

  &-justify-space-between {
    justify-content: space-between;
  }

  &-justify-space-around {
    justify-content: space-around;
  }

  &-justify-space-evenly {
    justify-content: space-evenly;
  }
}

.#{$prefix}-#{$component-col} {
  position: relative;
  min-height: $grid-col-min-height;
  padding-left: calc(var(--om-grid-gutter-x, #{$grid-gutter-fallback}) / #{$grid-gutter-divisor});
  padding-right: calc(var(--om-grid-gutter-x, #{$grid-gutter-fallback}) / #{$grid-gutter-divisor});
  flex: var(--om-grid-col-flex, #{$grid-col-flex-fallback});
  max-width: 100%;
}

@mixin make-col-classes($infix: '') {
  @for $i from 1 through $grid-columns {
    .#{$prefix}-#{$component-col}#{$infix}-#{$i} {
      flex: 0 0 percentage($i / $grid-columns);
      max-width: percentage($i / $grid-columns);
    }

    .#{$prefix}-#{$component-col}#{$infix}-offset-#{$i} {
      margin-left: percentage($i / $grid-columns);
    }

    .#{$prefix}-#{$component-col}#{$infix}-order-#{$i} {
      order: $i;
    }
  }
}

@include make-col-classes('');

@media (min-width: $grid-breakpoint-sm) {
  .#{$prefix}-#{$component-col} {
    flex: var(--om-grid-col-flex-sm, var(--om-grid-col-flex, #{$grid-col-flex-fallback}));
  }

  @include make-col-classes('-sm');
}

@media (min-width: $grid-breakpoint-md) {
  .#{$prefix}-#{$component-col} {
    flex: var(--om-grid-col-flex-md, var(--om-grid-col-flex, #{$grid-col-flex-fallback}));
  }

  @include make-col-classes('-md');
}

@media (min-width: $grid-breakpoint-large) {
  .#{$prefix}-#{$component-col} {
    flex: var(--om-grid-col-flex-large, var(--om-grid-col-flex, #{$grid-col-flex-fallback}));
  }

  @include make-col-classes('-large');
}
```

**Step 2: Add style index**

```ts
import './Grid.scss';
```

---

### Task 5: Add Grid docs and Storybook story

**Files:**
- Create: `src/components/Grid/README.md`
- Create: `src/components/Grid/Grid.stories.tsx`

**Step 1: Write README contract**

```md
# Grid

A responsive 12-column layout system modeled  Row/Col, built with flexbox and consistent gutters.

## Features

- 12-column grid with spans and offsets
- Responsive breakpoints (sm/md/large)
- Horizontal and vertical gutters
- Row alignment and justification helpers
- Optional flex-based columns

## Breakpoints

- `sm`: min-width 768px
- `md`: min-width 1024px
- `large`: min-width 1025px (\"large\" > 1024)

## Basic Usage

```tsx
import { Grid } from '@1money/react-ui';
import { GRID_ALIGN, GRID_JUSTIFY } from '@1money/react-ui/Grid';

const GRID_GUTTER: [number, number] = [16, 8];
const SPAN_HALF = 6;

<Grid gutter={GRID_GUTTER} justify={GRID_JUSTIFY.spaceBetween} align={GRID_ALIGN.middle}>
  <Grid.Col span={SPAN_HALF}>Left</Grid.Col>
  <Grid.Col span={SPAN_HALF}>Right</Grid.Col>
</Grid>
```

## Component Props

### Grid / Row

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| gutter | Horizontal/vertical gutter (px) | number \| [number, number] | 0 |
| align | Vertical alignment | 'top' \| 'middle' \| 'bottom' \| 'stretch' | - |
| justify | Horizontal alignment | 'start' \| 'end' \| 'center' \| 'space-around' \| 'space-between' \| 'space-evenly' | - |
| wrap | Toggle flex wrapping | boolean | true |
| prefixCls | Classname prefix | string | 'grid-row' |

### Col

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| span | Column span (1-12) | number | - |
| offset | Column offset (1-12) | number | - |
| order | Flex order | number | - |
| flex | Flex value (e.g. 1, 'auto', '100px') | number \| string | - |
| sm/md/large | Responsive size config | number \| { span?; offset?; order?; flex? } | - |
| prefixCls | Classname prefix | string | 'grid-col' |

## Responsive Usage

```tsx
const GRID_GUTTER = 16;
const SPAN_BASE = 12;
const SPAN_SM = 6;
const SPAN_MD = 4;
const OFFSET_MD = 2;
const SPAN_LARGE = 3;

<Grid gutter={GRID_GUTTER}>
  <Grid.Col span={SPAN_BASE} sm={SPAN_SM} md={{ span: SPAN_MD, offset: OFFSET_MD }} large={SPAN_LARGE} />
</Grid>
```

## Styling

Styles are SCSS-based and follow the 4px spacing grid. Gutters are implemented via CSS variables and inherited by child columns.
```

**Step 2: Add Storybook story**

```tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Grid, Row, Col } from './index';
import { GRID_ALIGN, GRID_JUSTIFY } from './interface';
import './style';

const GRID_ALIGN_OPTIONS = Object.values(GRID_ALIGN);
const GRID_JUSTIFY_OPTIONS = Object.values(GRID_JUSTIFY);
const GRID_GUTTER: [number, number] = [16, 16];
const DEMO_PADDING = 16;
const DEMO_BORDER = '1px dashed currentColor';
const DEMO_BOX_STYLE = { padding: DEMO_PADDING, border: DEMO_BORDER };
const SPAN_THIRD = 4;
const SPAN_BASE = 12;
const SPAN_SM = 6;
const SPAN_MD = 4;
const SPAN_LARGE = 3;

const meta: Meta<typeof Grid> = {
  title: 'Components/Grid',
  component: Grid,
  argTypes: {
    gutter: { control: 'object' },
    align: { control: 'select', options: GRID_ALIGN_OPTIONS },
    justify: { control: 'select', options: GRID_JUSTIFY_OPTIONS },
    wrap: { control: 'boolean' },
    prefixCls: { control: 'text' }
  },
  args: {
    gutter: GRID_GUTTER,
    align: GRID_ALIGN.top,
    justify: GRID_JUSTIFY.start,
    wrap: true
  },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Grid>;

export const Primary: Story = {
  render: (args) => (
    <Grid {...args}>
      <Grid.Col span={SPAN_THIRD}><div style={DEMO_BOX_STYLE}>4</div></Grid.Col>
      <Grid.Col span={SPAN_THIRD}><div style={DEMO_BOX_STYLE}>4</div></Grid.Col>
      <Grid.Col span={SPAN_THIRD}><div style={DEMO_BOX_STYLE}>4</div></Grid.Col>
    </Grid>
  )
};

export const Responsive: Story = {
  render: () => (
    <Row gutter={GRID_GUTTER}>
      <Col span={SPAN_BASE} sm={SPAN_SM} md={SPAN_MD} large={SPAN_LARGE}><div style={DEMO_BOX_STYLE}>A</div></Col>
      <Col span={SPAN_BASE} sm={SPAN_SM} md={SPAN_MD} large={SPAN_LARGE}><div style={DEMO_BOX_STYLE}>B</div></Col>
      <Col span={SPAN_BASE} sm={SPAN_SM} md={SPAN_MD} large={SPAN_LARGE}><div style={DEMO_BOX_STYLE}>C</div></Col>
    </Row>
  )
};
```

---

### Task 6: Update Grid snapshots

**Files:**
- Modify: `src/components/Grid/__test__/__snapshots__/index.test.tsx.snap`

**Step 1: Update snapshots**

Run: `pnpm test:snapshot -- src/components/Grid/__test__/index.test.tsx`

Expected: Snapshot file created/updated for Grid tests.

**Step 2: Re-run tests**

Run: `pnpm test -- src/components/Grid/__test__/index.test.tsx`

Expected: PASS

---

### Task 7: Add Flex tests (failing first)

**Files:**
- Create: `src/components/Flex/__test__/index.test.tsx`

**Step 1: Write the failing test**

```tsx
import 'jsdom-global/register';
import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Flex } from '../index';
import { FLEX_ALIGN, FLEX_GAP, FLEX_JUSTIFY, FLEX_WRAP } from '../interface';

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

describe('Flex', () => {
  it('renders with gap and alignment', () => {
    const { container } = render(
      <Flex
        gap={FLEX_GAP.middle}
        align={FLEX_ALIGN.center}
        justify={FLEX_JUSTIFY.spaceBetween}
        wrap={FLEX_WRAP.wrap}
      >
        <div>One</div>
        <div>Two</div>
      </Flex>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders vertical layout', () => {
    const GAP = 8;

    const { container } = render(
      <Flex vertical gap={GAP}>
        <div>Top</div>
        <div>Bottom</div>
      </Flex>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
```

**Step 2: Run test to verify it fails**

Run: `pnpm test -- src/components/Flex/__test__/index.test.tsx`

Expected: FAIL with "Cannot find module '../index'" or similar until Flex files exist.

---

### Task 8: Implement Flex constants, component, and types

**Files:**
- Create: `src/components/Flex/interface.ts`
- Create: `src/components/Flex/constants.ts`
- Create: `src/components/Flex/Flex.tsx`
- Create: `src/components/Flex/index.ts`

**Step 1: Add Flex interface**

```ts
import type { HTMLAttributes } from 'react';

export const FLEX_ALIGN = {
  start: 'start',
  end: 'end',
  center: 'center',
  baseline: 'baseline',
  stretch: 'stretch'
} as const;

export const FLEX_JUSTIFY = {
  start: 'start',
  end: 'end',
  center: 'center',
  spaceAround: 'space-around',
  spaceBetween: 'space-between',
  spaceEvenly: 'space-evenly'
} as const;

export const FLEX_WRAP = {
  nowrap: 'nowrap',
  wrap: 'wrap',
  wrapReverse: 'wrap-reverse'
} as const;

export const FLEX_GAP = {
  small: 'small',
  middle: 'middle',
  large: 'large'
} as const;

export type FlexAlign = typeof FLEX_ALIGN[keyof typeof FLEX_ALIGN];
export type FlexJustify = typeof FLEX_JUSTIFY[keyof typeof FLEX_JUSTIFY];
export type FlexWrap = typeof FLEX_WRAP[keyof typeof FLEX_WRAP];
export type FlexGap = typeof FLEX_GAP[keyof typeof FLEX_GAP] | number;

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  vertical?: boolean;
  wrap?: boolean | FlexWrap;
  align?: FlexAlign;
  justify?: FlexJustify;
  gap?: FlexGap;
  prefixCls?: string;
}
```

**Step 2: Add Flex constants**

```ts
import type { FlexGap } from './interface';

export const FLEX_PREFIX = 'flex';
export const FLEX_GAP_DEFAULT = 0;
export const FLEX_CSS_VARS = {
  gap: '--om-flex-gap'
} as const;
export const FLEX_CLASS = {
  vertical: 'vertical',
  wrap: 'wrap',
  align: 'align',
  justify: 'justify'
} as const;

export const FLEX_GAP_MAP: Record<Exclude<FlexGap, number>, number> = {
  small: 8,
  middle: 16,
  large: 24
};
```

**Step 3: Implement Flex**

```tsx
import { memo } from 'react';
import classnames, { joinCls } from '@/utils/classnames';
import type { FC, PropsWithChildren, CSSProperties } from 'react';
import { FLEX_WRAP } from './interface';
import type { FlexProps, FlexGap, FlexWrap } from './interface';
import { FLEX_CLASS, FLEX_CSS_VARS, FLEX_GAP_DEFAULT, FLEX_GAP_MAP, FLEX_PREFIX } from './constants';

const normalizeGap = (gap?: FlexGap) => {
  if (gap === undefined || gap === null) return FLEX_GAP_DEFAULT;
  if (typeof gap === 'number') return gap;
  return FLEX_GAP_MAP[gap] ?? FLEX_GAP_DEFAULT;
};

const normalizeWrap = (wrap?: boolean | FlexWrap) => {
  if (wrap === true) return FLEX_WRAP.wrap;
  if (wrap === false) return FLEX_WRAP.nowrap;
  return wrap;
};

export const Flex: FC<PropsWithChildren<FlexProps>> = props => {
  const {
    children,
    vertical,
    wrap,
    align,
    justify,
    gap,
    className,
    style,
    prefixCls = FLEX_PREFIX,
    ...rest
  } = props;

  const classes = classnames(prefixCls);
  const gapValue = normalizeGap(gap);
  const wrapValue = normalizeWrap(wrap);

  const mergedStyle = {
    ...style,
    [FLEX_CSS_VARS.gap]: `${gapValue}px`
  } as CSSProperties;

  return (
    <div
      {...rest}
      style={mergedStyle}
      className={classes(void 0, joinCls(
        vertical && classes(FLEX_CLASS.vertical),
        wrapValue && classes(`${FLEX_CLASS.wrap}-${wrapValue}`),
        align && classes(`${FLEX_CLASS.align}-${align}`),
        justify && classes(`${FLEX_CLASS.justify}-${justify}`),
        className
      ))}
    >
      {children}
    </div>
  );
};

export default memo(Flex);
```

**Step 3: Add Flex exports**

```ts
import Flex from './Flex';

export { Flex } from './Flex';
export default Flex;
export * from './interface';
```

---

### Task 9: Add Flex styles

**Files:**
- Create: `src/components/Flex/style/Flex.scss`
- Create: `src/components/Flex/style/index.ts`

**Step 1: Add Flex SCSS**

```scss
@use '../../../variable.scss' as *;

$component: 'flex';
$flex-gap-fallback: 0px;

.#{$prefix}-#{$component} {
  display: flex;
  gap: var(--om-flex-gap, #{$flex-gap-fallback});

  &-vertical {
    flex-direction: column;
  }

  &-wrap-wrap {
    flex-wrap: wrap;
  }

  &-wrap-nowrap {
    flex-wrap: nowrap;
  }

  &-wrap-wrap-reverse {
    flex-wrap: wrap-reverse;
  }

  &-justify-start {
    justify-content: flex-start;
  }

  &-justify-end {
    justify-content: flex-end;
  }

  &-justify-center {
    justify-content: center;
  }

  &-justify-space-between {
    justify-content: space-between;
  }

  &-justify-space-around {
    justify-content: space-around;
  }

  &-justify-space-evenly {
    justify-content: space-evenly;
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

  &-align-stretch {
    align-items: stretch;
  }
}
```

**Step 2: Add style index**

```ts
import './Flex.scss';
```

---

### Task 10: Add Flex docs and Storybook story

**Files:**
- Create: `src/components/Flex/README.md`
- Create: `src/components/Flex/Flex.stories.tsx`

**Step 1: Write README contract**

```md
# Flex

A layout helper component modeled after Ant Design's Flex. Provides a consistent API for flex direction, alignment, wrapping, and gap spacing.

## Features

- Horizontal or vertical flex layouts
- Justify and align helpers
- Wrap control
- Gap spacing using the 4px grid

## Basic Usage

```tsx
import { Flex } from '@1money/react-ui';
import { FLEX_ALIGN, FLEX_GAP, FLEX_JUSTIFY } from '@1money/react-ui/Flex';

<Flex gap={FLEX_GAP.middle} align={FLEX_ALIGN.center} justify={FLEX_JUSTIFY.spaceBetween}>
  <div>Left</div>
  <div>Right</div>
</Flex>
```

## Component Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| vertical | Stack items vertically | boolean | false |
| wrap | Flex wrapping | boolean \| 'nowrap' \| 'wrap' \| 'wrap-reverse' | 'nowrap' |
| align | Align items | 'start' \| 'end' \| 'center' \| 'baseline' \| 'stretch' | - |
| justify | Justify content | 'start' \| 'end' \| 'center' \| 'space-around' \| 'space-between' \| 'space-evenly' | - |
| gap | Gap between items | 'small' \| 'middle' \| 'large' \| number | 0 |
| prefixCls | Classname prefix | string | 'flex' |

## Vertical Layout

```tsx
const VERTICAL_GAP = 16;

<Flex vertical gap={VERTICAL_GAP}>
  <div>Top</div>
  <div>Bottom</div>
</Flex>
```
```

**Step 2: Add Storybook story**

```tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './index';
import { FLEX_ALIGN, FLEX_GAP, FLEX_JUSTIFY, FLEX_WRAP } from './interface';
import './style';

const FLEX_ALIGN_OPTIONS = Object.values(FLEX_ALIGN);
const FLEX_JUSTIFY_OPTIONS = Object.values(FLEX_JUSTIFY);
const FLEX_WRAP_OPTIONS = Object.values(FLEX_WRAP);
const FLEX_GAP_OPTIONS = Object.values(FLEX_GAP);
const DEMO_PADDING = 16;
const DEMO_BORDER = '1px dashed currentColor';
const DEMO_BOX_STYLE = { padding: DEMO_PADDING, border: DEMO_BORDER };

const meta: Meta<typeof Flex> = {
  title: 'Components/Flex',
  component: Flex,
  argTypes: {
    gap: { control: 'select', options: FLEX_GAP_OPTIONS },
    align: { control: 'select', options: FLEX_ALIGN_OPTIONS },
    justify: { control: 'select', options: FLEX_JUSTIFY_OPTIONS },
    vertical: { control: 'boolean' },
    wrap: { control: 'select', options: FLEX_WRAP_OPTIONS },
    prefixCls: { control: 'text' }
  },
  args: {
    gap: FLEX_GAP.middle,
    align: FLEX_ALIGN.center,
    justify: FLEX_JUSTIFY.spaceBetween,
    vertical: false,
    wrap: FLEX_WRAP.nowrap
  },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Flex>;

export const Primary: Story = {
  render: (args) => (
    <Flex {...args}>
      <div style={DEMO_BOX_STYLE}>One</div>
      <div style={DEMO_BOX_STYLE}>Two</div>
      <div style={DEMO_BOX_STYLE}>Three</div>
    </Flex>
  )
};

export const Vertical: Story = {
  render: () => (
    <Flex vertical gap={FLEX_GAP.small}>
      <div style={DEMO_BOX_STYLE}>Top</div>
      <div style={DEMO_BOX_STYLE}>Bottom</div>
    </Flex>
  )
};
```

---

### Task 11: Update Flex snapshots

**Files:**
- Modify: `src/components/Flex/__test__/__snapshots__/index.test.tsx.snap`

**Step 1: Update snapshots**

Run: `pnpm test:snapshot -- src/components/Flex/__test__/index.test.tsx`

Expected: Snapshot file created/updated for Flex tests.

**Step 2: Re-run tests**

Run: `pnpm test -- src/components/Flex/__test__/index.test.tsx`

Expected: PASS

---

### Task 12: Wire exports for Grid and Flex

**Files:**
- Modify: `src/index.ts:1-111`
- Modify: `package.json:7-181`

**Step 1: Update root exports**

```ts
import { Grid, Row, Col } from './components/Grid';
import { Flex } from './components/Flex';

export { Grid, Row, Col } from './components/Grid';
export { Flex } from './components/Flex';

export default {
  // ...existing
  Grid,
  Row,
  Col,
  Flex
};
```

**Step 2: Add package subpath exports**

```json
"./Grid": {
  "types": "./es/components/Grid/index.d.ts",
  "import": "./es/components/Grid/index.js",
  "require": "./lib/components/Grid/index.js"
},
"./Flex": {
  "types": "./es/components/Flex/index.d.ts",
  "import": "./es/components/Flex/index.js",
  "require": "./lib/components/Flex/index.js"
}
```

---

### Task 13: Quick lint/style check (optional but recommended)

**Files:**
- None

**Step 1: Run targeted linting**

Run: `pnpm lint:es -- src/components/Grid src/components/Flex`

Expected: PASS

**Step 2: Run stylelint on new SCSS**

Run: `pnpm lint:style -- src/components/Grid/style/Grid.scss src/components/Flex/style/Flex.scss`

Expected: PASS
