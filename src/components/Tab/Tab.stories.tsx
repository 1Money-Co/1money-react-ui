import { Tab } from './index';
import './style';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tab> = {
  title: 'Components/Tab',
  component: Tab,
  // https://storybook.js.org/docs/api/arg-types#controltype
  argTypes: {
    type: { control: 'radio', options: ['default', 'segment'] },
    className: { control: 'text' },
    prefixCls: { control: 'text' },
  },
  args: {
    prefixCls: 'tab',
  },
  tags: ['autodocs'],
};
 
export default meta;

type Story = StoryObj<typeof Tab>;
 
export const Primary: Story = {
  args: {
    prefixCls: 'tab',
    type: 'default',
    model: [
      { label: 'Password' },
      { label: '2FA settings', count: 10 },
      { label: 'Limits', disabled: true },
      { label: 'Notifications' },
    ]
  },
};
