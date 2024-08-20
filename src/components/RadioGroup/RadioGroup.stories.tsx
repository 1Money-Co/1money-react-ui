import { fn } from '@storybook/test';
import { RadioGroup } from './index';
import './style';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  // https://storybook.js.org/docs/api/arg-types#controltype
  argTypes: {
    wrapperCls: { control: 'text' },
    innerCls: { control: 'text' },
    radioCls: { control: 'text' },
    prefixCls: { control: 'text' },
  },
  args: {
    prefixCls: 'radiogroup',
  },
  tags: ['autodocs'],
};
 
export default meta;

type Story = StoryObj<typeof RadioGroup>;
 
export const Primary: Story = {
  args: {
    items: [
      { name: 'US', key: 'USA', label: 'USA' },
      { name: 'CA', key: 'Canada', label: 'Canada', autoFocus: true },
      { name: 'MX', key: 'Mexico', label: 'Mexico' },
      { name: 'BR', key: 'Brazil', label: 'Brazil' },
    ],
    prefixCls: 'radiogroup',
  },
};
