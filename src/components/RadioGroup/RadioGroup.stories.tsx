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
    onChange: fn(),
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const GroupSizeSmall: Story = {
  args: {
    size: 'sm',
    items: [
      { name: 'US1', key: 'USA-1', label: 'USA-1' },
      { name: 'US2', key: 'USA-2', label: 'USA-2',autoFocus: true},
      { name: 'CA1', key: 'Canada-1', label: 'Canada (invalid)', invalid: true },
      { name: 'MX', key: 'Mexico', label: 'Mexico (disabled)', disabled: true },
    ],
    prefixCls: 'radiogroup',
  },
};

export const GroupDisabled: Story = {
  args: {
    items: [
      { name: 'Janpan', key: 'Japan', label: 'Japan', disabled: true},
      { name: 'Janpan1', key: 'Janpan-1', label: 'Janpan (checked)', autoFocus: true, disabled: true },
    ],
    prefixCls: 'radiogroup',
  },
};

export const GroupSizeMedium: Story = {
  args: {
    items: [
      { name: 'US1', key: 'USA-1', label: 'USA-1' },
      { name: 'US2', key: 'USA-2', label: 'USA-2',autoFocus: true},
      { name: 'CA1', key: 'Canada-1', label: 'Canada (invalid)', invalid: true },
      { name: 'MX', key: 'Mexico', label: 'Mexico (disabled)', disabled: true },
    ],
    prefixCls: 'radiogroup',
  },
};

export const GroupSizeLarge: Story = {
  args: {
    size: 'lg',
    items: [
      { name: 'US1', key: 'USA-1', label: 'USA-1' },
      { name: 'US2', key: 'USA-2', label: 'USA-2',autoFocus: true},
      { name: 'CA1', key: 'Canada-1', label: 'Canada (invalid)', invalid: true },
      { name: 'MX', key: 'Mexico', label: 'Mexico (disabled)', disabled: true },
    ],
    prefixCls: 'radiogroup',
  },
};
