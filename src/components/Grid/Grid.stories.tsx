import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Grid, Row, Col } from './index';
import { GRID_COL_PREFIX, GRID_JUSTIFY_BREAKPOINT, GRID_ROW_PREFIX, GRID_ALIGN, GRID_JUSTIFY } from './constants';
import './style';

const GRID_ALIGN_OPTIONS = Object.values(GRID_ALIGN);
const GRID_JUSTIFY_OPTIONS = Object.values(GRID_JUSTIFY);
const GRID_GUTTER_HORIZONTAL = 16;
const GRID_GUTTER_VERTICAL = 16;
const GRID_GUTTER: [number, number] = [16, 16];
const GRID_GUTTER_COMPACT = 8;
const GRID_GUTTER_SPACED: [number, number] = [GRID_GUTTER_HORIZONTAL, GRID_GUTTER_VERTICAL];
const GRID_GUTTER_SM = 8;
const GRID_GUTTER_MD = 16;
const GRID_GUTTER_LARGE = 24;
const GRID_GUTTER_RESPONSIVE = { sm: GRID_GUTTER_SM, md: GRID_GUTTER_MD, lg: GRID_GUTTER_LARGE };
const GRID_GUTTER_REM = '1rem';
const DEMO_PADDING = 16;
const DEMO_BORDER = '1px dashed currentColor';
const DEMO_BOX_STYLE = { padding: DEMO_PADDING, border: DEMO_BORDER };
const DEMO_SECTION_GAP = 16;
const DEMO_SECTION_STYLE = { display: 'grid', gap: DEMO_SECTION_GAP };
const SPAN_THIRD = 4;
const SPAN_BASE = 12;
const SPAN_SM = 6;
const SPAN_MD = 4;
const SPAN_LARGE = 3;
const SPAN_HALF = 6;
const SPAN_QUARTER = 3;
const OFFSET_SMALL = 1;
const PUSH_SMALL = 1;
const PULL_SMALL = 1;
const ORDER_FIRST = 1;
const ORDER_LAST = 2;
const FLEX_ONE = 1;
const FLEX_TWO = 2;
const WRAP_ENABLED = true;
const WRAP_DISABLED = false;
const JUSTIFY_RESPONSIVE = {
  [GRID_JUSTIFY_BREAKPOINT.sm]: GRID_JUSTIFY.start,
  [GRID_JUSTIFY_BREAKPOINT.md]: GRID_JUSTIFY.spaceBetween,
  [GRID_JUSTIFY_BREAKPOINT.lg]: GRID_JUSTIFY.end
};

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
      <Col span={SPAN_BASE} sm={SPAN_SM} md={SPAN_MD} lg={SPAN_LARGE}><div style={DEMO_BOX_STYLE}>A</div></Col>
      <Col span={SPAN_BASE} sm={SPAN_SM} md={SPAN_MD} lg={SPAN_LARGE}><div style={DEMO_BOX_STYLE}>B</div></Col>
      <Col span={SPAN_BASE} sm={SPAN_SM} md={SPAN_MD} lg={SPAN_LARGE}><div style={DEMO_BOX_STYLE}>C</div></Col>
    </Row>
  )
};

export const ApiExamples: Story = {
  render: () => (
    <div style={DEMO_SECTION_STYLE}>
      <Row
        gutter={GRID_GUTTER_SPACED}
        align={GRID_ALIGN.middle}
        justify={GRID_JUSTIFY.spaceBetween}
        wrap={WRAP_DISABLED}
        prefixCls={GRID_ROW_PREFIX}
      >
        <Col span={SPAN_HALF} prefixCls={GRID_COL_PREFIX}><div style={DEMO_BOX_STYLE}>Span</div></Col>
        <Col span={SPAN_HALF} prefixCls={GRID_COL_PREFIX}><div style={DEMO_BOX_STYLE}>Span</div></Col>
      </Row>

      <Row gutter={GRID_GUTTER_COMPACT} prefixCls={GRID_ROW_PREFIX}>
        <Col span={SPAN_QUARTER} offset={OFFSET_SMALL} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Offset</div>
        </Col>
        <Col span={SPAN_QUARTER} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Offset</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_COMPACT} prefixCls={GRID_ROW_PREFIX}>
        <Col span={SPAN_QUARTER} push={PUSH_SMALL} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Push</div>
        </Col>
        <Col span={SPAN_QUARTER} pull={PULL_SMALL} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Pull</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_RESPONSIVE} prefixCls={GRID_ROW_PREFIX}>
        <Col span={SPAN_HALF} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Responsive Gutter</div>
        </Col>
        <Col span={SPAN_HALF} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Responsive Gutter</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_REM} prefixCls={GRID_ROW_PREFIX}>
        <Col span={SPAN_HALF} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>String Gutter</div>
        </Col>
        <Col span={SPAN_HALF} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>String Gutter</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_COMPACT} prefixCls={GRID_ROW_PREFIX}>
        <Col span={SPAN_QUARTER} order={ORDER_LAST} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Order</div>
        </Col>
        <Col span={SPAN_QUARTER} order={ORDER_FIRST} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Order</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_COMPACT} prefixCls={GRID_ROW_PREFIX}>
        <Col flex={FLEX_ONE} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Flex 1</div>
        </Col>
        <Col flex={FLEX_TWO} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Flex 2</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_SPACED} wrap={WRAP_ENABLED} prefixCls={GRID_ROW_PREFIX}>
        <Col span={SPAN_BASE} sm={SPAN_SM} md={{ span: SPAN_MD, offset: OFFSET_SMALL }} lg={SPAN_LARGE} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Responsive</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_SPACED} justify={JUSTIFY_RESPONSIVE} prefixCls={GRID_ROW_PREFIX}>
        <Col span={SPAN_HALF} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Justify Responsive</div>
        </Col>
        <Col span={SPAN_HALF} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Justify Responsive</div>
        </Col>
      </Row>

    </div>
  )
};
