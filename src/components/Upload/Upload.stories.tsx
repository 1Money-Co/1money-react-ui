import * as React from 'react'
import { Upload } from './index';
import './style';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Upload> = {
  title: 'Components/Upload',
  component: Upload,
  // https://storybook.js.org/docs/api/arg-types#controltype
  argTypes: {
    className: { control: 'text' },
    prefixCls: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  args: {
    prefixCls: 'upload',
  },
  tags: ['autodocs'],
};
 
export default meta;

type Story = StoryObj<typeof Upload>;
 
export const Primary: Story = {
  args: {
    prefixCls: 'upload'
  },
};

export const Basic: Story = {
  args: {
    prefixCls: 'upload',
    mode: 'basic',
    chooseOptions: {
      label: 'Basic Upload',
      icon: () => <></>
    }
  },
};