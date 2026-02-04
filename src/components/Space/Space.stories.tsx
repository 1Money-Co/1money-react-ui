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
