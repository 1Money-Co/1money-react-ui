import { Notification } from './index';
import { Button } from '../Button';
import { Icons } from '../Icons';
import { Typography } from '../Typography';
import './style';
import '../Button/style';
import '../Icons/style';
import '../Typography/style';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Notification> = {
  title: 'Components/Notification',
  component: Notification,
  // https://storybook.js.org/docs/api/arg-types#controltype
  argTypes: {
    className: { control: 'text' },
    prefixCls: { control: 'text' },
    severity: { control: 'radio', options: ['success', 'info', 'warn', 'error'] },
  },
  args: {
    prefixCls: 'notification',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Notification>;

export const Primary: Story = {
  args: {
    prefixCls: 'notification',
    severity: 'warn',
    title: 'Title',
    description: 'Body text',
    link: { label: 'Link' },
    action: (
      <Button severity='warning' size='small'>
        <Icons name='arrowLeft' size={16} color='#131313' />
        <Typography.Label size='s'>Label</Typography.Label>
      </Button>
    ),
  },
};

export const Success: Story = {
  args: {
    prefixCls: 'notification',
    severity: 'success',
    title: 'Title',
    description: 'Body text',
    link: { label: 'Link' },
    closable: true,
  },
};

export const Info: Story = {
  args: {
    prefixCls: 'notification',
    severity: 'info',
    title: 'Title',
    description: 'Body text',
    link: { label: 'Link' },
    closable: true,
  },
};

export const Warn: Story = {
  args: {
    prefixCls: 'notification',
    severity: 'warn',
    title: 'Title',
    description: 'Body text',
    link: { label: 'Link' },
    action: (
      <Button severity='warning' size='small'>
        <Icons name='arrowLeft' size={16} />
        <Typography.Label size='s'>Label</Typography.Label>
      </Button>
    ),
  },
};

export const Error: Story = {
  args: {
    prefixCls: 'notification',
    severity: 'error',
    title: 'Title',
    description: 'Body text',
    link: { label: 'Link' },
    action: (
      <Button severity='danger-light' size='small'>
        <Icons name='arrowLeft' size={16} />
        <Typography.Label size='s'>Label</Typography.Label>
      </Button>
    ),
  },
};

export const Closable: Story = {
  args: {
    prefixCls: 'notification',
    severity: 'error',
    title: 'Title',
    description: 'Body text ',
    link: { label: 'Link' },
    action: (
      <Button severity='danger-light' size='small'>
        <Icons name='arrowLeft' size={16} />
        <Typography.Label size='s'>Label</Typography.Label>
      </Button>
    ),
    closable: true,
  },
};
