import React from 'react';
import { Tooltip } from './index';
import { Typography } from '../Typography';
import './style';
import '../Icons/style';
import '../Typography/style';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  // https://storybook.js.org/docs/api/arg-types#controltype
  argTypes: {
    className: { control: 'text' },
    prefixCls: { control: 'text' },
    openEvents: { control: 'object' },
    closeEvents: { control: 'object' },
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
    <>
      <Typography.Body size='s' style={{ color: '#FEFEFE' }}>
        Please provide your US EIN/TIN, Foreign Tax ID, or SSN (for sole proprietorships if based in the U.S.).
      </Typography.Body>
      <ul className='!tw-list-disc tw-pl-4'>
        <li>
          <Typography.Body size='s' style={{ color: '#FEFEFE' }}>
            If you are a U.S.-based business, this will be a nine-digit number (e.g., 9XX-XX-XXXX).
          </Typography.Body>
        </li>
        <li>
          <Typography.Body size='s' style={{ color: '#FEFEFE' }}>
            If you are a non-U.S. business, this will be a mix of characters and numbers specific to your jurisdiction.
          </Typography.Body>
        </li>
        <li>
          <Typography.Body size='s' style={{ color: '#FEFEFE' }}>
            If you do not have a Tax ID, please indicate "NA."
          </Typography.Body>
        </li>
      </ul>
    </>
  );
};
export const Primary: Story = {
  args: {
    prefixCls: 'tooltip',
    openEvents: {
      mouseover: false,
      click: true,
      focus: false,
      mouseenter: false,
    },
    closeEvents: {
      mouseleave: false,
      blur: false,
      mouseout: false,
      click: true,
    },
  },
  render: args => <div style={{
    display: 'grid',
    gap: '128px',
    textAlign: 'center',
    gridTemplateColumns: 'repeat(4, 1fr)',
    width: '100%',
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '120px'
  }}>

    <button id='tooltip-right'>
      Right
    </button>
    <button id='tooltip-bottom-start'>
      Bottom Start
    </button>
    <button id='tooltip-bottom-end'>
      Bottom End
    </button>
    <button id='tooltip-left'>
      Left
    </button>
    <button id='tooltip-right-start'>
      Right Start
    </button>
    <button id='tooltip-top'>
      Top
    </button>
    <button id='tooltip-bottom'>
      Bottom
    </button>
    <button id='tooltip-left-start'>
      Left Start
    </button>
    <button id='tooltip-right-end'>
      Right End
    </button>
    <button id='tooltip-top-start'>
      Top Start
    </button>
    <button id='tooltip-top-end'>
      Top End
    </button>
    <button id='tooltip-left-end'>
      Left End
    </button>
    <Tooltip
      {...args}
      anchorSelect="#tooltip-left"
      place="left"
    >
      <Overlay position="left" />
    </Tooltip>
    <Tooltip
      {...args}
      anchorSelect="#tooltip-top"
      place="top"
    >
      <Overlay position="top" />
    </Tooltip>
    <Tooltip
      {...args}
      anchorSelect="#tooltip-bottom"
      place="bottom"
    >
      <Overlay position="bottom" />
    </Tooltip>
    <Tooltip
      {...args}
      anchorSelect="#tooltip-right"
      place="right"
    >
      <Overlay position="right" />
    </Tooltip>
    <Tooltip
      {...args}
      anchorSelect="#tooltip-left-start"
      place="left-start"
    >
      <Overlay position="left-start" />
    </Tooltip>
    <Tooltip
      {...args}
      anchorSelect="#tooltip-left-end"
      place="left-end"
    >
      <Overlay position="left-end" />
    </Tooltip>
    <Tooltip
      {...args}
      anchorSelect="#tooltip-right-start"
      place="right-start"
    >
      <Overlay position="right-start" />
    </Tooltip>
    <Tooltip
      {...args}
      anchorSelect="#tooltip-right-end"
      place="right-end"
    >
      <Overlay position="right-end" />
    </Tooltip>
    <Tooltip
      {...args}
      anchorSelect="#tooltip-top-start"
      place="top-start"
    >
      <Overlay position="top-start" />
    </Tooltip>
    <Tooltip
      {...args}
      anchorSelect="#tooltip-top-end"
      place="top-end"
    >
      <Overlay position="top-end" />
    </Tooltip>
    <Tooltip
      {...args}
      anchorSelect="#tooltip-bottom-start"
      place="bottom-start"
    >
      <Overlay position="bottom-start" />
    </Tooltip>
    <Tooltip
      {...args}
      anchorSelect="#tooltip-bottom-end"
      place="bottom-end"
    >
      <Overlay position="bottom-end" />
    </Tooltip>
  </div>
};
