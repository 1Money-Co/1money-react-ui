import React from 'react';
import styled from 'styled-components';
import {
  IconWrapper,
  Icons,
 } from './index';
import './style';
import type { Meta, StoryObj } from '@storybook/react';
import clipboard from '../../utils/clipboard';


const meta: Meta<typeof Icons> = {
  title: 'Components/Icons',
  component: Icons,
  // https://storybook.js.org/docs/api/arg-types#controltype
  argTypes: {
    className: { control: 'text' },
    prefixCls: { control: 'text' },
    size: { control: 'number' },
    color: { control: 'color' },
  },
  args: {
    prefixCls: 'icons',
  },
  tags: ['autodocs'],
};

export default meta;

const CopyIconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  &:hover{
    cursor: pointer;
    background-color: #029cfd;
    border-radius: 8px;
    svg{
      fill: #fff;
    }
    span{
      color: #fff;
    }
  }
`;
const copy = (name: string) => {
  clipboard(name, (succeeded: boolean) => {
    if (succeeded) {
      console.log('copied');
    } else {
      console.log('failed');
    }
  });
};


type Story = StoryObj<typeof Icons>;

export const Primary: Story = {
  args: {
    prefixCls: 'icons',
    color: '#142D66',
    size: 24
  },
  render: function Render(args) {
    return <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 24 }}>
        <Icons {...args} name='logo'  />
        <Icons {...args} name='logoWord' width={150} height={30}/>
        <Icons {...args} name='logoNetwork' width={150} height={30} color='#073387'/>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 24 }}>
        <Icons {...args} name='logoWithWords' width={180} height={36} logoColor='#073387' wordColor='#000000' />
        <Icons {...args} name='logoWithWords' width={320} height={36} logoColor='#073387' wordColor='#000000' networkLogo networkColor='#131313' />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 24 }}>
        <Icons {...args} name='minus'  />
        <Icons {...args} name='add' />
        <Icons {...args} name='burger' />
        <Icons {...args} name='return' />
        <Icons {...args} name='close' />
        <Icons {...args} name='dropDown' />
        <Icons {...args} name='arrow' />
        <Icons {...args} name='eyeClose' />
        <Icons {...args} name='eyeOn' />
        <Icons {...args} name='circle' />
        <Icons {...args} name='doubleCheck' />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 24 }}>
        <Icons {...args} name='check' />
        <Icons {...args} name='times' />
        <Icons {...args} name='checkCircle' />
        <Icons {...args} name='timesCircle' />
        <Icons {...args} name='content' />
        <Icons {...args} name='locked' />
        <Icons {...args} name='exclamation' />
        <Icons {...args} name='arrowUp' />
        <Icons {...args} name='arrowLink' />
        <Icons {...args} name='union' />
      </div>
    </div>;
  },
};



export const Logo: Story = {
  args: {
    prefixCls: 'icons',
    color: '#142D66',
    size: 32
  },
  parameters: {
    docs: {
      description: {
        story: 'The logo icon is used to represent the 1Money logo.',
      },
    },
  },
  render: function Render(args) {
    return <div style={{ display: 'grid', flexDirection: 'row', gap: 24, flexWrap: 'wrap',     gridTemplateColumns: 'repeat(auto-fill, minmax(222px, 1fr))'
    }}>
      <CopyIconBox onClick={() => copy('logo')}>
        <Icons {...args} name='logo'  />
        <span>logo</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => copy('logo')}>
        <Icons {...args} name='logo'  />
        <span>logo</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => copy('logoWord')}>
        <Icons {...args} name='logoWord' width={150} height={30}/>
        <span>logoWord</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => copy('logoNetwork')}>
        <Icons {...args} name='logoNetwork' width={150} height={30} color='#073387'/>
        <span>logoNetwork</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => copy('logoWithWords')}>
        <Icons {...args} name='logoWithWords' width={180} height={36} logoColor='#073387' wordColor='#000000' />
        <span>logoWithWords</span>
      </CopyIconBox>
      <CopyIconBox onClick={() => copy('logoWithWords')}>
        <Icons {...args} name='logoWithWords' width={320} height={36} logoColor='#073387' wordColor='#000000' networkLogo networkColor='#131313' />
        <span>logoWithWords</span>
      </CopyIconBox>
    </div>;
  },
};

export const PrimaryIcons: Story = {
  args: {
    prefixCls: 'icons',
    color: '#142D66',
    size: 24
  },
  parameters: {
    docs: {
      description: {
        story: 'The primary icons are used to represent the 1Money icons.',
      },
    },
  },
  render: function Render(args) {
    return <div style={{ display: 'grid',  gap: 24 , gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))'}}>

    </div>;
  },
};
