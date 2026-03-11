import React from 'react';
import { fn } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/react';
import { ButtonBeta } from './index';

import './style';

const COLORS = ['primary', 'secondary', 'grey', 'black', 'white', 'danger', 'warning'] as const;
const SIZES = ['large', 'medium', 'small'] as const;

const meta: Meta<typeof ButtonBeta> = {
  title: 'Components/ButtonBeta',
  component: ButtonBeta,
  argTypes: {
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    rounded: { control: 'boolean' },
    size: { control: 'radio', options: [...SIZES] },
    color: { control: 'radio', options: [...COLORS] },
  },
  args: {
    disabled: false,
    loading: false,
    rounded: false,
    size: 'medium',
    color: 'primary',
    onClick: fn(),
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ButtonBeta>;

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.33 8h9.34M8.67 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 3.33v9.34M3.33 8h9.34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {SIZES.map(size => (
        <div key={size}>
          <h3 style={{ marginBottom: 12 }}>{size}</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
            {COLORS.map(color => (
              <ButtonBeta {...args} key={`${size}-${color}`} size={size} color={color}>
                {color}
              </ButtonBeta>
            ))}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', marginTop: 8 }}>
            {COLORS.map(color => (
              <ButtonBeta {...args} key={`${size}-${color}-disabled`} size={size} color={color} disabled>
                {color}
              </ButtonBeta>
            ))}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', marginTop: 8 }}>
            {COLORS.map(color => (
              <ButtonBeta {...args} key={`${size}-${color}-loading`} size={size} color={color} loading>
                {color}
              </ButtonBeta>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
  args: {
    children: undefined,
  },
  tags: ['!autodocs', 'dev'],
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      {SIZES.map(size => (
        <ButtonBeta {...args} key={size} size={size}>
          {size}
        </ButtonBeta>
      ))}
    </div>
  ),
};

export const WithIcons: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <ButtonBeta {...args} iconStart={<PlusIcon />}>
          Icon Start
        </ButtonBeta>
        <ButtonBeta {...args} iconEnd={<ArrowIcon />}>
          Icon End
        </ButtonBeta>
        <ButtonBeta {...args} iconStart={<PlusIcon />} iconEnd={<ArrowIcon />}>
          Both Icons
        </ButtonBeta>
      </div>
    </div>
  ),
};
