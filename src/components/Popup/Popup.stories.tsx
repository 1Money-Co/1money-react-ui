import React, { useRef } from 'react';
import { Popup, PopupHandlers } from './index';
import { Toast, ToastClass } from '../Toast';
import { Button } from '../Button';
import './style';
import '../Toast/style';
import '../Button/style';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Popup> = {
  title: 'Components/Popup',
  component: Popup,
  // https://storybook.js.org/docs/api/arg-types#controltype
  argTypes: {
    className: { control: 'text' },
    prefixCls: { control: 'text' },
  },
  args: {
    prefixCls: 'popup',
  },
  tags: ['autodocs'],
};
 
export default meta;

type Story = StoryObj<typeof Popup>;
 
export const Primary: Story = {
  args: {
    prefixCls: 'popup',
    children: 'Hello Popup'
  },
  render: function Render(args) {
    const popup = useRef<PopupHandlers>(null);
    const toast = useRef<ToastClass>(null);
    const accept = () => {
      toast.current?.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    };

    const reject = () => {
      toast.current?.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    };

    return <>
      <Button
        onClick={(e) => popup.current?.show({
          target: e.currentTarget,
          message: 'Are you sure you want to proceed?',
          icon: 'pi pi-exclamation-triangle',
          defaultFocus: 'accept',
          accept,
          reject
        })}
      >
        Show Popup
      </Button>
      <Toast ref={toast} />
      <Popup {...args as any} ref={popup} />
    </>;
  },
};
