import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './index';
import { FLEX_ALIGN, FLEX_GAP, FLEX_JUSTIFY, FLEX_WRAP } from './constants';
import { FLEX_PREFIX } from './constants';
import './style';

const FLEX_ALIGN_OPTIONS = Object.values(FLEX_ALIGN);
const FLEX_JUSTIFY_OPTIONS = Object.values(FLEX_JUSTIFY);
const FLEX_WRAP_OPTIONS = Object.values(FLEX_WRAP);
const FLEX_GAP_OPTIONS = Object.values(FLEX_GAP);
const DEMO_PADDING = 16;
const DEMO_BORDER = '1px dashed currentColor';
const DEMO_BOX_STYLE = { padding: DEMO_PADDING, border: DEMO_BORDER };
const DEMO_SECTION_GAP = 16;
const DEMO_SECTION_STYLE = { display: 'grid', gap: DEMO_SECTION_GAP };
const WRAP_ENABLED = FLEX_WRAP.wrap;
const WRAP_DISABLED = FLEX_WRAP.nowrap;
const GAP_SMALL = FLEX_GAP.small;
const GAP_MIDDLE = FLEX_GAP.middle;
const GAP_LARGE = FLEX_GAP.large;

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
    <Flex vertical gap={GAP_SMALL}>
      <div style={DEMO_BOX_STYLE}>Top</div>
      <div style={DEMO_BOX_STYLE}>Bottom</div>
    </Flex>
  )
};

export const ApiExamples: Story = {
  render: () => (
    <div style={DEMO_SECTION_STYLE}>
      <Flex
        gap={GAP_MIDDLE}
        align={FLEX_ALIGN.center}
        justify={FLEX_JUSTIFY.spaceBetween}
        wrap={WRAP_DISABLED}
        prefixCls={FLEX_PREFIX}
      >
        <div style={DEMO_BOX_STYLE}>Align</div>
        <div style={DEMO_BOX_STYLE}>Justify</div>
      </Flex>

      <Flex vertical gap={GAP_LARGE} wrap={WRAP_ENABLED} prefixCls={FLEX_PREFIX}>
        <div style={DEMO_BOX_STYLE}>Vertical</div>
        <div style={DEMO_BOX_STYLE}>Wrap</div>
      </Flex>
    </div>
  )
};
