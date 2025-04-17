import * as React from 'react';
import { confirmPopup, ConfirmPopup } from './index';
import { Button } from '../Button';
import './style';
import '../Button/style';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ConfirmPopup> = {
  title: 'Components/ConfirmPopup',
  component: ConfirmPopup,
  // https://storybook.js.org/docs/api/arg-types#controltype
  argTypes: {
    className: { control: 'text' },
    prefixCls: { control: 'text' },
  },
  args: {
    prefixCls: 'confirmpopup',
  },
  tags: ['autodocs'],
};
 
export default meta;

type Story = StoryObj<typeof ConfirmPopup>;
 
export const Primary: Story = {
  args: {
    prefixCls: 'confirm-popup'
  },
  render: function Render(args) {
    return <>
      <ConfirmPopup {...args} />
      <Button
        severity='danger'
        onClick={(e) => confirmPopup({
          target: e.currentTarget,
          message: 'Are you sure you want to delete this item?'
        })}
      >
        Delete
      </Button>
    </>
  }
};
