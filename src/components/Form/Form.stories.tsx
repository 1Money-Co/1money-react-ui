import React from 'react';
import { Form, FormItem } from './index';
import { Input } from '../Input';
import { Button } from '../Button';
import { Typography } from '../Typography';
import { Select } from '../Select';
import { Radio } from '../Radio';
import { Checkbox } from '../Checkbox';
import './style';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Form> = {
  title: 'Components/Form',
  component: Form,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Form>;

const cityOptions = [
  { label: 'New York', value: 'NY' },
  { label: 'Rome', value: 'RM' },
  { label: 'London', value: 'LDN' },
  { label: 'Istanbul', value: 'IST' },
  { label: 'Paris', value: 'PRS' },
];

export const Basic: Story = {
  render: () => (
    <Form
      layout='vertical'
      defaultValues={{ email: '', password: '' }}
      onFinish={(values) => console.info('submit', values)}
    >
      <FormItem name='email' label='Email' rules={{ required: 'Email is required' }}>
        {({ field }) => <Input type='text' {...field} placeholder='you@company.com' />}
      </FormItem>
      <FormItem name='password' label='Password' rules={{ required: 'Password is required' }}>
        {({ field }) => <Input {...field} type='password' />}
      </FormItem>
      <FormItem>
        <Button type='submit'>Submit</Button>
      </FormItem>
    </Form>
  )
};

export const Horizontal: Story = {
  render: () => (
    <Form layout='horizontal' labelCol={3} wrapperCol={9}>
      <FormItem label='Company'>
        <Input type='text' placeholder='1Money' />
      </FormItem>
      <FormItem label='Website'>
        <Input type='text' placeholder='https://1money.com' />
      </FormItem>
    </Form>
  )
};

export const AdvancedBehaviors: Story = {
  render: () => (
    <Form layout='vertical' defaultValues={{ email: '', confirmEmail: '', first: '', last: '' }}>
      <FormItem name='email' label='Email' rules={{ required: 'Email is required' }}>
        {({ field }) => <Input type='text' {...field} placeholder='you@company.com' />}
      </FormItem>
      <FormItem
        name='confirmEmail'
        label='Confirm Email'
        dependencies={['email']}
        rules={{
          validate: {
            match: (value, values) => value === values.email || 'Emails do not match',
            notEmpty: (value) => !!value || 'Confirm Email is required'
          }
        }}
        validateFirst='parallel'
        validateDebounce={300}
        validateTrigger='onBlur'
      >
        {({ field }) => <Input type='text' {...field} placeholder='retype email' />}
      </FormItem>
      <FormItem shouldUpdate>
        {({ values }) => (
          <Typography.Body size='m'>Preview: {values.first} {values.last}</Typography.Body>
        )}
      </FormItem>
      <FormItem name='first' label='First Name'>
        {({ field }) => <Input type='text' {...field} />}
      </FormItem>
      <FormItem name='last' label='Last Name'>
        {({ field }) => <Input type='text' {...field} />}
      </FormItem>
    </Form>
  )
};

export const Example: Story = {
  render: () => (
    <Form
      layout='vertical'
      defaultValues={{ email: '', confirmEmail: '', first: '', last: '' }}
      scrollToFirstError
      onFinish={(values) => console.info('submit', values)}
    >
      <FormItem name='email' label='Email' rules={{ required: 'Email is required' }}>
        {({ field }) => <Input type='text' {...field} placeholder='you@company.com' />}
      </FormItem>
      <FormItem
        name='confirmEmail'
        label='Confirm Email'
        dependencies={['email']}
        rules={{
          validate: {
            match: (value, values) => value === values.email || 'Emails do not match',
            notEmpty: (value) => !!value || 'Confirm Email is required'
          }
        }}
        validateFirst
        validateTrigger='onBlur'
      >
        {({ field }) => <Input type='text' {...field} placeholder='retype email' />}
      </FormItem>
      <FormItem shouldUpdate>
        {({ values }) => (
          <Typography.Body size='m'>Preview: {values.first} {values.last}</Typography.Body>
        )}
      </FormItem>
      <FormItem name='first' label='First Name'>
        {({ field }) => <Input type='text' {...field} />}
      </FormItem>
      <FormItem name='last' label='Last Name'>
        {({ field }) => <Input type='text' {...field} />}
      </FormItem>
      <FormItem>
        <Button type='submit'>Submit</Button>
      </FormItem>
    </Form>
  )
};

export const SelectAndRadio: Story = {
  render: () => (
    <Form
      layout='vertical'
      defaultValues={{ city: 'NY', plan: 'basic' }}
      onFinish={(values) => console.info('submit', values)}
    >
      <FormItem name='city' label='City' rules={{ required: 'City is required' }}>
        {({ field }) => (
          <Select
            options={cityOptions}
            placeholder='Select City'
            value={field?.value}
            onChange={(e) => field?.onChange(e.value)}
          />
        )}
      </FormItem>
      <FormItem name='plan' label='Plan' rules={{ required: 'Plan is required' }}>
        {({ field }) => (
          <div style={{ display: 'flex', gap: 12 }}>
            <Radio
              name='plan'
              value='basic'
              label='Basic'
              checked={field?.value === 'basic'}
              onChange={() => field?.onChange('basic')}
            />
            <Radio
              name='plan'
              value='pro'
              label='Pro'
              checked={field?.value === 'pro'}
              onChange={() => field?.onChange('pro')}
            />
          </div>
        )}
      </FormItem>
      <FormItem>
        <Button type='submit'>Submit</Button>
      </FormItem>
    </Form>
  )
};

export const Complex: Story = {
  render: () => (
    <Form
      layout='horizontal'
      labelAlign='left'
      labelCol={3}
      wrapperCol={9}
      scrollToFirstError={{ block: 'start', offset: 72 }}
      defaultValues={{
        email: '',
        confirmEmail: '',
        city: 'NY',
        plan: 'basic',
        newsletter: false,
        first: '',
        last: '',
      }}
      onFinish={(values) => console.info('submit', values)}
    >
      <FormItem name='email' label='Email' rules={{ required: 'Email is required' }}>
        {({ field }) => <Input type='text' {...field} placeholder='you@company.com' />}
      </FormItem>
      <FormItem
        name='confirmEmail'
        label='Confirm Email'
        dependencies={['email']}
        validateTrigger='onBlur'
        validateDebounce={300}
        validateFirst='parallel'
        rules={{
          validate: {
            required: (value) => !!value || 'Confirm email is required',
            match: (value, values) => value === values.email || 'Emails do not match',
          }
        }}
      >
        {({ field }) => <Input type='text' {...field} placeholder='retype email' />}
      </FormItem>
      <FormItem name='city' label='City' rules={{ required: 'City is required' }}>
        {({ field }) => (
          <Select
            options={cityOptions}
            placeholder='Select City'
            value={field?.value}
            onChange={(e) => field?.onChange(e.value)}
          />
        )}
      </FormItem>
      <FormItem name='plan' label='Plan' rules={{ required: 'Plan is required' }}>
        {({ field }) => (
          <div style={{ display: 'flex', gap: 12 }}>
            <Radio
              name='plan'
              value='basic'
              label='Basic'
              checked={field?.value === 'basic'}
              onChange={() => field?.onChange('basic')}
            />
            <Radio
              name='plan'
              value='pro'
              label='Pro'
              checked={field?.value === 'pro'}
              onChange={() => field?.onChange('pro')}
            />
          </div>
        )}
      </FormItem>
      <FormItem shouldUpdate>
        {({ values }) => (
          <Typography.Body size='m'>Summary: {values.first} {values.last} ({values.plan})</Typography.Body>
        )}
      </FormItem>
      <FormItem name='first' label='First Name'>
        {({ field }) => <Input type='text' {...field} />}
      </FormItem>
      <FormItem name='last' label='Last Name'>
        {({ field }) => <Input type='text' {...field} />}
      </FormItem>
      <FormItem>
        <Button type='submit'>Submit</Button>
      </FormItem>
    </Form>
  )
};

export const InlineLayout: Story = {
  render: () => (
    <Form layout='inline'>
      <FormItem label='First'>
        <Input type='text' placeholder='Ada' />
      </FormItem>
      <FormItem label='Last'>
        <Input type='text' placeholder='Lovelace' />
      </FormItem>
    </Form>
  )
};

export const HelpExtraStatus: Story = {
  render: () => (
    <Form>
      <FormItem
        label='Email'
        required
        help='We never share it.'
        extra='Use a work address.'
        validateStatus='warning'
      >
        <Input type='text' placeholder='you@company.com' />
      </FormItem>
    </Form>
  )
};

export const ScrollToFirstError: Story = {
  render: () => (
    <Form scrollToFirstError={{ block: 'start', offset: 72 }} defaultValues={{ email: '' }}>
      <FormItem name='email' label='Email' rules={{ required: 'Email is required' }}>
        {({ field }) => <Input type='text' {...field} />}
      </FormItem>
    </Form>
  )
};

export const Dependencies: Story = {
  render: () => (
    <Form defaultValues={{ email: '', confirmEmail: '' }}>
      <FormItem name='email' label='Email'>
        {({ field }) => <Input type='text' {...field} />}
      </FormItem>
      <FormItem
        name='confirmEmail'
        label='Confirm Email'
        dependencies={['email']}
        rules={{
          validate: (value, values) => value === values.email || 'Emails do not match'
        }}
      >
        {({ field }) => <Input type='text' {...field} />}
      </FormItem>
    </Form>
  )
};

export const ShouldUpdate: Story = {
  render: () => (
    <Form defaultValues={{ first: '', last: '' }}>
      <FormItem name='first' label='First'>
        {({ field }) => <Input type='text' {...field} />}
      </FormItem>
      <FormItem name='last' label='Last'>
        {({ field }) => <Input type='text' {...field} />}
      </FormItem>
      <FormItem shouldUpdate>
        {({ values }) => (
          <Typography.Body size='m'>Preview: {values.first} {values.last}</Typography.Body>
        )}
      </FormItem>
    </Form>
  )
};

export const ValidateTriggerDebounce: Story = {
  render: () => (
    <Form defaultValues={{ email: '' }}>
      <FormItem
        name='email'
        label='Email'
        validateTrigger='onChange'
        validateDebounce={300}
        rules={{ validate: (value) => (value?.length ?? 0) >= 3 || 'Too short' }}
      >
        {({ field }) => <Input type='text' {...field} />}
      </FormItem>
    </Form>
  )
};

export const ValidateFirst: Story = {
  render: () => (
    <Form defaultValues={{ email: '' }}>
      <FormItem
        name='email'
        label='Email'
        validateFirst='parallel'
        rules={{
          validate: {
            notEmpty: (value) => !!value || 'Required',
            match: (value) => value.includes('@') || 'Must include @',
          }
        }}
      >
        {({ field }) => <Input type='text' {...field} />}
      </FormItem>
    </Form>
  )
};

export const NoStyleValueProp: Story = {
  render: () => (
    <Form defaultValues={{ newsletter: false }}>
      <FormItem name='newsletter' noStyle valuePropName='checked'>
        <Checkbox label='Subscribe to newsletter' />
      </FormItem>
    </Form>
  )
};

export const LabelWrapperOverride: Story = {
  render: () => (
    <Form layout='horizontal' labelCol={3} wrapperCol={9}>
      <FormItem label='Full Width' labelCol={0} wrapperCol={12}>
        <Input type='text' placeholder='Stretch' />
      </FormItem>
    </Form>
  )
};

export const DisabledColonRequiredMark: Story = {
  render: () => (
    <Form disabled colon={false} requiredMark={false}>
      <FormItem label='Read Only'>
        <Input type='text' value='Locked' readOnly />
      </FormItem>
    </Form>
  )
};
