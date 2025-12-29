import { Clipboard } from './index';
import './style';
import '../Icons/style';
import '../Copy/style';
import '../Typography/style';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Clipboard> = {
  title: 'Components/Clipboard',
  component: Clipboard,
  // https://storybook.js.org/docs/api/arg-types#controltype
  argTypes: {
    className: { control: 'text' },
    prefixCls: { control: 'text' },
  },
  args: {
    prefixCls: 'clipboard',
  },
  tags: ['autodocs'],
};
 
export default meta;

type Story = StoryObj<typeof Clipboard>;
 
export const Primary: Story = {
  args: {
    label: 'Setup Key',
    prefixCls: 'clipboard',
    content: 'GWKLDLVE25dfLIJOHUD578JPIHD24JLJGHGOUH27HLIHOUGOLIKHJ547HOU',
    className: 'tw-w-[400px]'
  },
};
