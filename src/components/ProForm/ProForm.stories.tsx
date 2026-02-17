import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '../Button';
import {
  ProForm,
  ProFormList,
  ProFormPassword,
  ProFormSelect,
  ProFormText,
} from './index';
import {
  ModalForm,
} from './layouts';
import './style';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProForm> = {
  title: 'Components/ProForm',
  component: ProForm,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProForm>;

const roleOptions = [
  { label: 'User', value: 'user' },
  { label: 'Admin', value: 'admin' },
  { label: 'Reviewer', value: 'reviewer' },
];

export const Basic: Story = {
  render: () => (
    <ProForm
      defaultValues={{ email: '', password: '', role: 'user' }}
      onFinish={action('onFinish')}
    >
      <ProFormText name='email' label='Email' placeholder='you@company.com' rules={{ required: 'Email is required' }} />
      <ProFormPassword name='password' label='Password' rules={{ required: 'Password is required' }} />
      <ProFormSelect
        name='role'
        label='Role'
        fieldProps={{ options: roleOptions, placeholder: 'Select a role' }}
      />
    </ProForm>
  ),
};

export const WithRequest: Story = {
  render: () => (
    <ProForm
      params={{ userId: 'u_1' }}
      request={async () => ({
        email: 'ada@1money.com',
        password: 'secret',
        role: 'admin',
      })}
      onFinish={action('onFinish')}
    >
      <ProFormText name='email' label='Email' />
      <ProFormPassword name='password' label='Password' />
      <ProFormSelect name='role' label='Role' fieldProps={{ options: roleOptions }} />
    </ProForm>
  ),
};

export const InModal: Story = {
  render: () => (
    <ModalForm
      title='Create User'
      trigger={<Button type='button'>Open</Button>}
      onFinish={async (values) => {
        action('onFinish')(values);
        return true;
      }}
    >
      <ProFormText name='email' label='Email' />
      <ProFormPassword name='password' label='Password' />
    </ModalForm>
  ),
};

export const DynamicList: Story = {
  render: () => (
    <ProForm defaultValues={{ members: [{ name: 'Ada' }] }} onFinish={action('onFinish')}>
      <ProFormList name='members' sortable>
        {(fields) => fields.map((field, index) => (
          <ProFormText key={field.key} name={`members.${index}.name`} label={`Member ${index + 1}`} />
        ))}
      </ProFormList>
    </ProForm>
  ),
};
