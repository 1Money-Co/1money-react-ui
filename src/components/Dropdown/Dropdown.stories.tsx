import * as React from 'react';
import { Dropdown } from './index';
import { Button } from '../Button';
import { IconWrapper } from '../Icons';
import './style';
import '../Icons/style';
import '../Button/style';
import type { Meta, StoryObj } from '@storybook/react';
import type { DropdownHandler } from './interface';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  // https://storybook.js.org/docs/api/arg-types#controltype
  argTypes: {
    className: { control: 'text' },
    prefixCls: { control: 'text' },
  },
  args: {
    prefixCls: 'dropdown',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

const dropdownItems = [
  {
    key: '1',
    children: <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 12px 8px 8px',
        borderRadius: '8px',
        cursor: 'pointer',
      }}
    >
      <IconWrapper>
        <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#E3E4E4" />
        <path fillRule="evenodd" clipRule="evenodd" d="M9.975 7.9501C8.60809 7.9501 7.5 9.0582 7.5 10.4251C7.5 11.792 8.60809 12.9001 9.975 12.9001L11.1 12.9001L11.1 14.2501L7.95 14.2501L7.95 16.0501L11.1 16.0501L11.1 17.8501L12.9 17.8501L12.9 16.0501L14.025 16.0501C15.3919 16.0501 16.5 14.942 16.5 13.5751C16.5 12.2082 15.3919 11.1001 14.025 11.1001L12.9 11.1001L12.9 9.7501L16.05 9.7501L16.05 7.9501L12.9 7.9501L12.9 6.1501L11.1 6.1501L11.1 7.9501L9.975 7.9501ZM11.1 9.7501L9.975 9.7501C9.60221 9.7501 9.3 10.0523 9.3 10.4251C9.3 10.7979 9.60221 11.1001 9.975 11.1001L11.1 11.1001L11.1 9.7501ZM12.9 12.9001L12.9 14.2501L14.025 14.2501C14.3978 14.2501 14.7 13.9479 14.7 13.5751C14.7 13.2023 14.3978 12.9001 14.025 12.9001L12.9 12.9001Z" fill="#131313" />
      </IconWrapper>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2px',
      }}>
        <strong>
          USD
        </strong>
        <span>
          US Dollar
        </span>
      </div>
    </div>
  },
  {
    key: '2',
    children: <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 12px 8px 8px',
        borderRadius: '8px',
        cursor: 'pointer',
      }}
    >
      <IconWrapper>
        <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#E3E4E4" />
        <path fillRule="evenodd" clipRule="evenodd" d="M14.8458 9.50512C13.4679 8.12727 11.234 8.12727 9.85614 9.50512C9.68997 9.67129 9.54384 9.84992 9.41775 10.038H13.2502V11.7043H8.83508C8.80809 12.0272 8.82541 12.3531 8.88702 12.6722H13.2502V14.3385H9.70893C9.75612 14.3917 9.80519 14.4438 9.85614 14.4948C11.234 15.8726 13.4679 15.8726 14.8458 14.4948L16.024 15.673C13.9955 17.7016 10.7065 17.7016 8.67788 15.673C8.27597 15.2711 7.95369 14.8197 7.71103 14.3385H6.47656V12.6722H7.19986C7.15821 12.3512 7.14652 12.0271 7.16481 11.7043H6.47656V10.038H7.53975C7.79331 9.4154 8.17269 8.83205 8.67788 8.32686C10.7065 6.29827 13.9955 6.29827 16.024 8.32686L14.8458 9.50512Z" fill="#131313" />
      </IconWrapper>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2px',
      }}>
        <strong>
          EUR
        </strong>
        <span>
          Euro
        </span>
      </div>
    </div>
  },
  {
    key: '3',
    children: <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 12px 8px 8px',
        borderRadius: '8px',
        cursor: 'pointer',
      }}
    >
      <IconWrapper>
        <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#E3E4E4" />
        <path d="M15.9877 15.7783V17.0377H8.64116V15.7783H8.85106C9.18508 15.7783 9.50542 15.6456 9.7416 15.4094C9.97779 15.1732 10.1105 14.8529 10.1105 14.5189V12.8397H8.01141L8.01137 11.5803H10.1105V9.90105C10.1104 9.34376 10.2688 8.79794 10.5672 8.32726C10.8656 7.85658 11.2917 7.48046 11.7957 7.24276C12.2998 7.00506 12.861 6.9156 13.414 6.98479C13.967 7.05399 14.4889 7.279 14.9188 7.63358C14.8125 7.76238 14.117 8.6049 14.117 8.6049C13.817 8.35586 13.439 8.22026 13.0491 8.22183C12.6037 8.22183 12.1766 8.39875 11.8617 8.71366C11.5468 9.02857 11.3699 9.45569 11.3699 9.90105L11.5395 11.4107L13.414 11.5803V12.8397L11.5395 13.0092L11.3699 14.5189C11.3704 14.9612 11.2538 15.3957 11.0319 15.7783H15.9877Z" fill="#131313" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3929 7.15305C12.8719 7.08784 12.343 7.17215 11.868 7.39613C11.3931 7.62011 10.9916 7.97454 10.7104 8.41805C10.4292 8.86157 10.28 9.37589 10.28 9.90102V11.7498H8.18095L8.18098 12.6701H10.28V14.5189C10.28 14.8979 10.1295 15.2613 9.86151 15.5293C9.59352 15.7973 9.23005 15.9479 8.85106 15.9479H8.81073V16.8681H15.8182V15.9479H10.7376L10.8853 15.6932C11.0921 15.3365 11.2008 14.9314 11.2003 14.5191V12.6701H13.2444V11.7498H11.2003V9.90105C11.2003 9.41072 11.3951 8.94047 11.7418 8.59376C12.0884 8.24712 12.5586 8.05235 13.0488 8.05226C13.4213 8.05083 13.7841 8.16307 14.0894 8.37192L14.6767 7.66047C14.2992 7.38621 13.8577 7.21121 13.3929 7.15305ZM11.5395 13.0092L11.0777 7.6107L14.2478 8.71284L15.1576 7.6107L15.0267 7.50276C14.5719 7.12772 14.0199 6.88973 13.435 6.81654C12.8502 6.74335 12.2565 6.83798 11.7234 7.08939C11.1902 7.3408 10.7396 7.73863 10.424 8.23647C10.1084 8.7343 9.94084 9.31161 9.94091 9.90105V11.4107H7.8418L7.84185 13.0092H9.94091V14.5189C9.94091 14.8079 9.82608 15.0851 9.6217 15.2895C9.41731 15.4939 9.14011 15.6087 8.85106 15.6087H8.47159V17.2073H16.1573V15.6087H11.3086C11.4608 15.2666 11.5399 14.8953 11.5395 14.5187M11.5395 13.0092H13.5836V11.4107H11.5395V9.90105C11.5395 9.50066 11.6985 9.11668 11.9816 8.83356C12.2647 8.55045 12.6487 8.3914 13.0491 8.3914C13.3992 8.38999 13.7393 8.51175 14.0087 8.73537L14.1395 8.84398L14.2478 8.71284L11.0777 7.6107L11.5395 13.0092Z" fill="black" />
      </IconWrapper>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2px',
      }}>
        <strong>
          GBP
        </strong>
        <span>
          British Pound
        </span>
      </div>
    </div>
  },
  {
    key: '4',
    children: <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 12px 8px 8px',
        borderRadius: '8px',
        cursor: 'pointer',
      }}
    >
      <IconWrapper>
        <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#E3E4E4" />
        <path fillRule="evenodd" clipRule="evenodd" d="M16.8524 7.5154L15.6667 6.54535L15.5354 6.43799L12.0004 10.7589L8.46551 6.4381L7.14648 7.51529L10.2054 11.2515H8.42563V12.9527H11.1498V13.9472H8.42563V15.6484H11.1498L11.1498 17.4929H12.8509L12.8509 15.6484H15.5751V13.9472H12.8509V12.9527H15.5751V11.2515H13.7936L16.8524 7.5154Z" fill="black" />
      </IconWrapper>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2px',
      }}>
        <strong>
          JPY
        </strong>
        <span>
          Japanese Yen
        </span>
      </div>
    </div>
  },
  {
    key: '5',
    children: <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 12px 8px 8px',
        borderRadius: '8px',
        cursor: 'pointer',
      }}
    >
      <IconWrapper>
        <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#E3E4E4" />
        <path fillRule="evenodd" clipRule="evenodd" d="M16.8524 7.5154L15.6667 6.54535L15.5354 6.43799L12.0004 10.7589L8.46551 6.4381L7.14648 7.51529L10.2054 11.2515H8.42563V12.9527H11.1498V13.9472H8.42563V15.6484H11.1498L11.1498 17.4929H12.8509L12.8509 15.6484H15.5751V13.9472H12.8509V12.9527H15.5751V11.2515H13.7936L16.8524 7.5154Z" fill="black" />
      </IconWrapper>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2px',
      }}>
        <strong>
          CNY
        </strong>
        <span>
          Chinese Yuan
        </span>
      </div>
    </div>
  }
];

export const Primary: Story = {
  args: {
    prefixCls: 'dropdown',
    width: '180px',
    height: '240px',
  },
  render: (props) => {
    const dp = React.useRef<DropdownHandler>(null);

    return (
      <>
        <Button onClick={(e) => dp.current?.toggle(e)}>Dropdown</Button>
        <Dropdown {...props} items={dropdownItems} ref={dp} />
      </>
    )
  }
};
