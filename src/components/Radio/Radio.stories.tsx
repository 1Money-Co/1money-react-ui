import React, { useState } from 'react';
import { fn } from '@storybook/test';
import { Radio } from './index';
import './style';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  argTypes: {
    prefixCls: { control: 'text' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    label: { control: 'text' },
  },
  args: {
    prefixCls: 'radio',
    onChange: fn(),
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  render: () => {
    const [selected, setSelected] = useState('option1');

    return (
      <div className="tw-flex tw-flex-col tw-gap-2">
        <Radio name="default" label="default" value="option1" checked={selected === 'option1'} onChange={() => {
          setSelected('option1');
        }} />
        <Radio name="default" label="checked" value="option2" checked={selected === 'option2'} onChange={() => {
          setSelected('option2');
        }} />
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <div className="tw-flex tw-flex-col tw-gap-2">
        <Radio disabled label="disabled" />
        <Radio disabled checked label="disabled checked" />
      </div>
    );
  },
};

export const Invalid: Story = {
  render: () => {
    return (
      <div className="tw-flex tw-flex-col tw-gap-2">
        <Radio invalid label="invalid" />
        <Radio invalid checked label="invalid checked" />
      </div>
    );
  },
};

export const Size: Story = {
  render: () => {
    return (
      <div className="tw-flex tw-flex-col tw-gap-2">
        <Radio size="sm" label="small" />
        <Radio size="md" label="medium" />
        <Radio size="lg" label="large" />
      </div>
    );
  },
};

export const RadioGroup: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState<string>('option1');

    return (
      <div className="tw-flex tw-flex-col tw-gap-2">
        <Radio
          id="option1"
          value="option1"
          checked={selectedValue === 'option1'}
          onChange={(e) => setSelectedValue(e.value as string)}
          label="option1"
        />
        <Radio
          id="option2"
          value="option2"
          checked={selectedValue === 'option2'}
          onChange={(e) => setSelectedValue(e.value as string)}
          label="option2"
        />
        <Radio
          id="option3"
          value="option3"
          checked={selectedValue === 'option3'}
          onChange={(e) => setSelectedValue(e.value as string)}
          label="option3"
        />
        <div className="tw-mt-4">
          selelcted: {selectedValue}
        </div>
      </div>
    );
  },
};
