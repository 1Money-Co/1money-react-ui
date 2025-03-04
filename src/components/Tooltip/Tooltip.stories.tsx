import React from 'react';
import { Tooltip } from './index';
import './style';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  // https://storybook.js.org/docs/api/arg-types#controltype
  argTypes: {
    className: { control: 'text' },
    prefixCls: { control: 'text' },
    trigger: { control: 'check', options: ['click', 'hover', 'focus'] },
  },
  args: {
    prefixCls: 'tooltip',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

const Overlay = (props: { position: string }) => {
  const { position } = props;
  return (
    <div style={{ width: '80px', textAlign: 'center' }}>
      <span>Overlay Data</span>
      <br />
      <span>Tooltip {position}</span>
    </div>
  );
};
export const Primary: Story = {
  args: {
    prefixCls: 'tooltip',
    trigger: ['hover'],
  },
  render: args => <div style={{
    display: 'grid',
    gap: '128px',
    textAlign: 'center',
    gridTemplateColumns: 'repeat(4, 1fr)',
    width: '100%',
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '20px 60px'
  }}>
    <Tooltip
      {...args}
      placement="left"
      overlay={<Overlay position="left" />}
    >
      <span style={{ border: '1px solid green', borderRadius: '8px', cursor: 'pointer' }}>Left</span>
    </Tooltip>
    <Tooltip
      {...args}
      placement="top"
      overlay={<Overlay position="top" />}
    >
      <span style={{ border: '1px solid green', borderRadius: '8px', cursor: 'pointer' }}>Top</span>
    </Tooltip>
    <Tooltip
      {...args}
      placement="bottom"
      overlay={<Overlay position="bottom" />}>
      <span style={{ border: '1px solid green', borderRadius: '8px', cursor: 'pointer' }}>Bottom</span>
    </Tooltip>
    <Tooltip
      {...args}
      placement="right"
      overlay={<Overlay position="right" />}
    >
      <span style={{ border: '1px solid green', borderRadius: '8px', cursor: 'pointer' }}>Right</span>
    </Tooltip>
    <Tooltip
      {...args}
      placement="leftTop"
      overlay={<Overlay position="leftTop" />}
    >
      <span style={{ border: '1px solid green', borderRadius: '8px', cursor: 'pointer' }}>Left Top</span>
    </Tooltip>
    <Tooltip
      {...args}
      placement="leftBottom"
      overlay={<Overlay position="leftBottom" />}
    >
      <span style={{ border: '1px solid green', borderRadius: '8px', cursor: 'pointer' }}>Left Bottom</span>
    </Tooltip>
    <Tooltip
      {...args}
      placement="rightTop"
      overlay={<Overlay position="rightTop" />}
    >
      <span style={{ border: '1px solid green', borderRadius: '8px', cursor: 'pointer' }}>Right Top</span>
    </Tooltip>
    <Tooltip
      {...args}
      placement="rightBottom"
      overlay={<Overlay position="rightBottom" />}
    >
      <span style={{ border: '1px solid green', borderRadius: '8px', cursor: 'pointer' }}>Right Bottom</span>
    </Tooltip>
    <Tooltip
      {...args}
      placement="topLeft"
      overlay={<Overlay position="topLeft" />}
    >
      <span style={{ border: '1px solid green', borderRadius: '8px', cursor: 'pointer' }}>Top Left</span>
    </Tooltip>
    <Tooltip
      {...args}
      placement="topRight"
      overlay={<Overlay position="topRight" />}
    >
      <span style={{ border: '1px solid green', borderRadius: '8px', cursor: 'pointer' }}>Top Right</span>
    </Tooltip>
    <Tooltip
      {...args}
      placement="bottomLeft"
      overlay={<Overlay position="bottomLeft" />}
    >
      <span style={{ border: '1px solid green', borderRadius: '8px', cursor: 'pointer' }}>Bottom Left</span>
    </Tooltip>
    <Tooltip
      {...args}
      placement="bottomRight"
      overlay={<Overlay position="bottomRight" />} 
    >
      <span style={{ border: '1px solid green', borderRadius: '8px', cursor: 'pointer' }}>Bottom Right</span>
    </Tooltip>
  </div>
};
