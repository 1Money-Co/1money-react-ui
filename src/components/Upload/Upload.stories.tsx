import * as React from 'react'
import { Upload, UploadFileBar } from './index';
import './style';
import '../Icons/style';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Upload> = {
  title: 'Components/Upload',
  component: Upload,
  // https://storybook.js.org/docs/api/arg-types#controltype
  argTypes: {
    className: { control: 'text' },
    prefixCls: { control: 'text' },
    disabled: { control: 'boolean' },
    btnSize: { control: 'radio', options: ['small', 'medium', 'large'] },
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
      label: 'Upload',
      icon: () => <></>
    }
  },
};

export const FileBar: Story = {
  render: () => <div style={{ width: '300px' }}>
    <UploadFileBar fileName='test.png' />
    <br />
    <br />
    <UploadFileBar fileName='test.png' status={1} message='system error' />
  </div>
}