import React from 'react';
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

export const GroupVariantCard: Story = {
  args: {
    label: 'Radio Group',
    variant: 'card',
    items: [
      { name: 'USDC', key: 'USDC', children: (selected: boolean) => <div className='tw-flex tw-flex-col'>
        {selected
        ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect y="-7.62939e-06" width="32" height="32" rx="16" fill="#073387"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.339 12.2667L14.7457 21.1419L9.69922 16.1984L10.6323 15.2459L14.6598 19.1913L21.3258 11.3999L22.339 12.2667Z" fill="#FEFEFE"/>
          </svg>
        )
        : (<svg xmlns="http://www.w3.org/2000/svg" data-name="86977684-12db-4850-8f30-233a7c267d11" viewBox="0 0 2000 2000" width="32" height="32">
            <path d="M1000 2000c554.17 0 1000-445.83 1000-1000S1554.17 0 1000 0 0 445.83 0 1000s445.83 1000 1000 1000z" fill="#2775ca"/>
            <path d="M1275 1158.33c0-145.83-87.5-195.83-262.5-216.66-125-16.67-150-50-150-108.34s41.67-95.83 125-95.83c75 0 116.67 25 137.5 87.5 4.17 12.5 16.67 20.83 29.17 20.83h66.66c16.67 0 29.17-12.5 29.17-29.16v-4.17c-16.67-91.67-91.67-162.5-187.5-170.83v-100c0-16.67-12.5-29.17-33.33-33.34h-62.5c-16.67 0-29.17 12.5-33.34 33.34v95.83c-125 16.67-204.16 100-204.16 204.17 0 137.5 83.33 191.66 258.33 212.5 116.67 20.83 154.17 45.83 154.17 112.5s-58.34 112.5-137.5 112.5c-108.34 0-145.84-45.84-158.34-108.34-4.16-16.66-16.66-25-29.16-25h-70.84c-16.66 0-29.16 12.5-29.16 29.17v4.17c16.66 104.16 83.33 179.16 220.83 200v100c0 16.66 12.5 29.16 33.33 33.33h62.5c16.67 0 29.17-12.5 33.34-33.33v-100c125-20.84 208.33-108.34 208.33-220.84z" fill="#fff"/>
            <path d="M787.5 1595.83c-325-116.66-491.67-479.16-370.83-800 62.5-175 200-308.33 370.83-370.83 16.67-8.33 25-20.83 25-41.67V325c0-16.67-8.33-29.17-25-33.33-4.17 0-12.5 0-16.67 4.16-395.83 125-612.5 545.84-487.5 941.67 75 233.33 254.17 412.5 487.5 487.5 16.67 8.33 33.34 0 37.5-16.67 4.17-4.16 4.17-8.33 4.17-16.66v-58.34c0-12.5-12.5-29.16-25-37.5zM1229.17 295.83c-16.67-8.33-33.34 0-37.5 16.67-4.17 4.17-4.17 8.33-4.17 16.67v58.33c0 16.67 12.5 33.33 25 41.67 325 116.66 491.67 479.16 370.83 800-62.5 175-200 308.33-370.83 370.83-16.67 8.33-25 20.83-25 41.67V1700c0 16.67 8.33 29.17 25 33.33 4.17 0 12.5 0 16.67-4.16 395.83-125 612.5-545.84 487.5-941.67-75-237.5-258.34-416.67-487.5-491.67z" fill="#fff"/>
          </svg>)}
        <span>USDC</span>
      </div> },
      { name: 'USDT', key: 'USDT', autoFocus: true, children: (selected: boolean) => <div className='tw-flex tw-flex-col'>
        {selected
        ?(
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect y="-7.62939e-06" width="32" height="32" rx="16" fill="#073387"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.339 12.2667L14.7457 21.1419L9.69922 16.1984L10.6323 15.2459L14.6598 19.1913L21.3258 11.3999L22.339 12.2667Z" fill="#FEFEFE"/>
          </svg>
        )
        :(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000" width="32" height="32">
            <path d="M1000 0c552.26 0 1000 447.74 1000 1000s-447.74 1000-1000 1000S0 1552.26 0 1000 447.74 0 1000 0" fill="#53ae94"/>
            <path d="M1123.42 866.76V718h340.18V551.89H537.42V718H877.6v148.8c-320 13.12-561.13 55.08-561.13 105.52 0 50.44 241.13 92.4 561.13 105.52v525.18h245.82v-525.22c319.28-13.12 560.94-55.08 560.94-105.48 0-50.44-241.13-92.4-560.94-105.45M1123.42 1071.76v.04c-9.95.38-202.34 7.56-318.92-17.34-68.22-14.6-100.5-35.82-100.5-53.96 0-36.9 133.76-75.1 419.42-75.1v146.36m0-146.36c285.66 0 418.94 38.2 418.94 75.1 0 36.9-133.28 75.1-418.94 75.1V925.4" fill="#fff"/>
          </svg>)
        }
        <span>USDT</span>
      </div>},
      { name: 'PYUSD', key: 'PYUSD', children: (selected: boolean) => <div className='tw-flex tw-flex-col'>
        {selected
        ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect y="-7.62939e-06" width="32" height="32" rx="16" fill="#073387"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.339 12.2667L14.7457 21.1419L9.69922 16.1984L10.6323 15.2459L14.6598 19.1913L21.3258 11.3999L22.339 12.2667Z" fill="#FEFEFE"/>
          </svg>
        )
        :(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000" width="32" height="32">
            <circle cx="1000" cy="1000" r="1000" fill="#0477F4"/>
            <path d="M1408.3 745.5H591.7c-28.5 0-51.7 23.2-51.7 51.7v405.6c0 28.5 23.2 51.7 51.7 51.7h816.7c28.5 0 51.7-23.2 51.7-51.7V797.2c-.1-28.5-23.3-51.7-51.8-51.7z" fill="#fff"/>
            <path d="M1000 1254.5c-140.8 0-254.5-113.7-254.5-254.5S859.2 745.5 1000 745.5s254.5 113.7 254.5 254.5-113.7 254.5-254.5 254.5z" fill="#0477F4"/>
            <path d="M1000 1000m-150 0a150 150 0 1 0 300 0 150 150 0 1 0-300 0" fill="#fff"/>
            <path d="M950 950h100v100H950z" fill="#0477F4"/>
          </svg>)
        }
        <span>PYUSD</span>
      </div> },
      { name: 'USDG', key: 'USDG', children: (selected: boolean) => <div className='tw-flex tw-flex-col'>
        {selected
        ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect y="-7.62939e-06" width="32" height="32" rx="16" fill="#073387"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.339 12.2667L14.7457 21.1419L9.69922 16.1984L10.6323 15.2459L14.6598 19.1913L21.3258 11.3999L22.339 12.2667Z" fill="#FEFEFE"/>
          </svg>
        )
        : (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000" width="32" height="32">
            <circle cx="1000" cy="1000" r="1000" fill="#6CDE07"/>
            <path d="M1250 800H750c-27.6 0-50 22.4-50 50v300c0 27.6 22.4 50 50 50h500c27.6 0 50-22.4 50-50V850c0-27.6-22.4-50-50-50z" fill="#fff"/>
            <path d="M850 950h300v100H850z" fill="#6CDE07"/>
            <path d="M1000 800v400" stroke="#6CDE07" stroke-width="50"/>
          </svg>)
        }
        <span>USDG</span>
      </div> },
    ],
    prefixCls: 'radiogroup',
  },
};


export const PaymentMethod: Story = {
  args: {
    label: 'Payment Method',
    variant: 'card',
    items: [
      { name: 'Wire', key: 'Wire', children: (selected: boolean) => <div className='tw-flex tw-flex-col'>
          {selected
        ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect y="-7.62939e-06" width="32" height="32" rx="16" fill="#073387"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.339 12.2667L14.7457 21.1419L9.69922 16.1984L10.6323 15.2459L14.6598 19.1913L21.3258 11.3999L22.339 12.2667Z" fill="#FEFEFE"/>
          </svg>
        )
        : (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000" width="32" height="32">
            <circle cx="1000" cy="1000" r="1000" fill="#6CDE07"/>
            <path d="M1250 800H750c-27.6 0-50 22.4-50 50v300c0 27.6 22.4 50 50 50h500c27.6 0 50-22.4 50-50V850c0-27.6-22.4-50-50-50z" fill="#fff"/>
            <path d="M850 950h300v100H850z" fill="#6CDE07"/>
            <path d="M1000 800v400" stroke="#6CDE07" stroke-width="50"/>
          </svg>)
        }
        <div className='tw-flex tw-flex-col'>
            <div>Wire transfer - Instant</div>
            <div>Daily limit: $TBD</div>
          </div>
      </div>
      },
      { name: 'SWIFT', key: 'SWIFT', children: (selected: boolean) => <div className='tw-flex tw-flex-col'>
        {selected
        ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect y="-7.62939e-06" width="32" height="32" rx="16" fill="#073387"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.339 12.2667L14.7457 21.1419L9.69922 16.1984L10.6323 15.2459L14.6598 19.1913L21.3258 11.3999L22.339 12.2667Z" fill="#FEFEFE"/>
          </svg>
        )
        :(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000" width="32" height="32">
            <circle cx="1000" cy="1000" r="1000" fill="#0477F4"/>
            <path d="M1408.3 745.5H591.7c-28.5 0-51.7 23.2-51.7 51.7v405.6c0 28.5 23.2 51.7 51.7 51.7h816.7c28.5 0 51.7-23.2 51.7-51.7V797.2c-.1-28.5-23.3-51.7-51.8-51.7z" fill="#fff"/>
            <path d="M1000 1254.5c-140.8 0-254.5-113.7-254.5-254.5S859.2 745.5 1000 745.5s254.5 113.7 254.5 254.5-113.7 254.5-254.5 254.5z" fill="#0477F4"/>
            <path d="M1000 1000m-150 0a150 150 0 1 0 300 0 150 150 0 1 0-300 0" fill="#fff"/>
            <path d="M950 950h100v100H950z" fill="#0477F4"/>
          </svg>)
        }
        <div className='tw-flex tw-flex-col'>
          <div>SWIFT - Up to 3 biz days</div>
          <div>Daily limit: $TBD</div>
        </div>
      </div>
      }
    ]

  },
};
