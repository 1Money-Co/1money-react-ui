import * as React from 'react';
import { fn } from '@storybook/test';
import { Typography } from './index';
import './style';
import type { Meta, StoryObj } from '@storybook/react';
import type { DisplayProps, HeadlineProps, TitleProps, BodyProps, LinkProps, LabelProps } from './interface';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  // https://storybook.js.org/docs/api/arg-types#controltype
  // argTypes: {
  //   className: { control: 'text' },
  //   prefixCls: { control: 'text' },
  // },
  // args: {
  //   prefixCls: 'typography-display',
  //   size: 'xl',
  //   onClick: fn(),
  // },
  tags: ['autodocs'],
};
 
export default meta;

type DisplayStory = StoryObj<typeof Typography.Display>;
 
export const Display: DisplayStory = {
  render: (props) => <>
    <Typography.Display {...props} size='xl'>{`${props.children} - extra large`}</Typography.Display>
    <br />
    <Typography.Display {...props} size='l'>{`${props.children} - large`}</Typography.Display>
    <br />
    <Typography.Display {...props} size='m'>{`${props.children} - medium`}</Typography.Display>
    <br />
    <Typography.Display {...props} size='s'>{`${props.children} - small`}</Typography.Display>
  </>,
  argTypes: {
    prefixCls: { control: 'text' },
    children: { control: 'text' },
  },
  args: {
    prefixCls: 'typography-display',
    children: 'Display'
  },
};

type HeadlineStory = StoryObj<typeof Typography.Headline>;
 
export const Headline: HeadlineStory = {
  render: (props) => <>
    <Typography.Headline {...props} size='l'>{`${props.children} - large`}</Typography.Headline>
    <br />
    <Typography.Headline {...props} size='m'>{`${props.children} - medium`}</Typography.Headline>
    <br />
    <Typography.Headline {...props} size='s'>{`${props.children} - small`}</Typography.Headline>
    <br />
    <Typography.Headline {...props} size='xs'>{`${props.children} - extra small`}</Typography.Headline>
  </>,
  argTypes: {
    prefixCls: { control: 'text' },
    children: { control: 'text' },
  },
  args: {
    prefixCls: 'typography-headline',
    children: 'Headline'
  },
};

type TitleStory = StoryObj<typeof Typography.Title>;

export const Title: TitleStory = {
  render: (props) => <>
    <Typography.Title {...props} size='l'>{`${props.children} - large`}</Typography.Title>
    <br />
    <Typography.Title {...props} size='l'>{`${props.children} - large`}</Typography.Title>
    <br />
    <Typography.Title {...props} size='m'>{`${props.children} - medium`}</Typography.Title>
    <br />
    <Typography.Title {...props} size='s'>{`${props.children} - small`}</Typography.Title>
  </>,
  argTypes: {
    bold: { control: 'boolean' },
    prefixCls: { control: 'text' },
    children: { control: 'text' },
  },
  args: {
    bold: false,
    prefixCls: 'typography-title',
    children: 'Title'
  },
};

type BodyStory = StoryObj<typeof Typography.Body>;

export const Body: BodyStory = {
  render: (props) => <>
    <Typography.Body {...props} size='l'>{`${props.children} - large`}</Typography.Body>
    <br />
    <Typography.Body {...props} size='m'>{`${props.children} - medium`}</Typography.Body>
    <br />
    <Typography.Body {...props} size='s'>{`${props.children} - small`}</Typography.Body>
  </>,
  argTypes: {
    bold: { control: 'boolean' },
    prefixCls: { control: 'text' },
    children: { control: 'text' },
  },
  args: {
    bold: false,
    prefixCls: 'typography-body',
    children: 'Body'
  },
};

type LinkStory = StoryObj<typeof Typography.Link>;

export const Link: LinkStory = {
  render: (props) => <>
    <Typography.Link {...props} size='m'>{`${props.children} - medium`}</Typography.Link>
    <br />
    <Typography.Link {...props} size='s'>{`${props.children} - small`}</Typography.Link>
  </>,
  argTypes: {
    prefixCls: { control: 'text' },
    children: { control: 'text' },
  },
  args: {
    prefixCls: 'typography-link',
    children: 'Link'
  },
};

type LabelStory = StoryObj<typeof Typography.Label>;

export const Label: LabelStory = {
  render: (props) => <>
    <Typography.Label {...props} size='xl'>{`${props.children} - extra large`}</Typography.Label>
    <br />
    <Typography.Label {...props} size='l'>{`${props.children} - large`}</Typography.Label>
    <br />
    <Typography.Label {...props} size='m'>{`${props.children} - medium`}</Typography.Label>
    <br />
    <Typography.Label {...props} size='s'>{`${props.children} - small`}</Typography.Label>
    <br />
    <Typography.Label {...props} size='xs'>{`${props.children} - extra small`}</Typography.Label>
  </>,
  argTypes: {
    bold: { control: 'boolean' },
    prefixCls: { control: 'text' },
    children: { control: 'text' },
  },
  args: {
    bold: false,
    prefixCls: 'typography-label',
    children: 'Label'
  },
};


