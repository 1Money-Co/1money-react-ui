import React, { useRef } from 'react';
import { fn } from '@storybook/test';
import { Modal, ModalHandlers } from './index';
import { Toast, ToastClass } from '../Toast';
import { Button } from '../Button';
import './style';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  // https://storybook.js.org/docs/api/arg-types#controltype
  argTypes: {
    className: { control: 'text' },
    prefixCls: { control: 'text' },
  },
  args: {
    prefixCls: 'modal',
    onClick: fn(),
  },
  tags: ['autodocs'],
};
 
export default meta;

type Story = StoryObj<typeof Modal>;
 
export const Normal: Story = {
  args: {
    prefixCls: 'modal'
  },
  tags: ['!autodocs'],
  render: function Render(args) {
    const modal = useRef<ModalHandlers>(null);

    return <>
      <Button
        onClick={(e) => modal.current?.show()}
      >
        Show Normal Modal
      </Button>
      <Modal {...args as any} header='Show Message Title' ref={modal}>
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Modal>
    </>;
  },
};

export const Confirm: Story = {
  args: {
    prefixCls: 'modal',
    type: 'confirm',
  },
  render: function Render(args) {
    const modal = useRef<ModalHandlers>(null);
    const toast = useRef<ToastClass>(null);
    const accept = () => {
      toast.current?.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    };

    const reject = () => {
      toast.current?.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    };

    return <>
      <Button
        security='help'
        rounded
        onClick={(e) => modal.current?.show({
          message: 'Are you sure you want to proceed?',
          header: 'Confirmation',
          icon: 'pi pi-exclamation-triangle',
          defaultFocus: 'accept',
          accept,
          reject
        })}
      >
        Show Confirm Modal
      </Button>
      <Toast ref={toast} />
      <Modal {...args as any} header='Show Message Title' ref={modal} />
    </>;
  },
};
