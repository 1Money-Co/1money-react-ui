import { fn } from '@storybook/test';
import { Menu } from './index';
import './style';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Menu> = {
  title: 'Components/Menu',
  component: Menu,
  // https://storybook.js.org/docs/api/arg-types#controltype
  argTypes: {
    className: { control: 'text' },
    prefixCls: { control: 'text' },
    type: { control: 'radio', options: ['menu', 'selector'] },
  },
  args: {
    prefixCls: 'menu',
    className: 'tw-w-[150px]',
    model: [
      {
        items: [
          {
            label: 'About Us',
          },
          {
            label: 'FAQs',
          },
          {
            label: 'Contact Us',
          },
        ]
      }
    ]
  },
  tags: ['autodocs'],
};
 
export default meta;

type Story = StoryObj<typeof Menu>;
 
export const Primary: Story = {
  args: {
    prefixCls: 'menu',
    type: 'menu'
  },
};
