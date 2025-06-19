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
    <Typography.Display {...props} style={{ overflow: 'hidden' }} size='xl'>{`${props.children} - extra large- gjpqy`}</Typography.Display>
    <br />
    <Typography.Display {...props} style={{ overflow: 'hidden' }} size='l'>{`${props.children} - large- gjpqy`}</Typography.Display>
    <br />
    <Typography.Display {...props} style={{ overflow: 'hidden' }} size='m'>{`${props.children} - medium- gjpqy`}</Typography.Display>
    <br />
    <Typography.Display {...props} style={{ overflow: 'hidden' }} size='s'>{`${props.children} - small- gjpqy`}</Typography.Display>
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
    <Typography.Headline {...props} style={{ overflow: 'hidden' }} size='l'>{`${props.children} - large- gjpqy`}</Typography.Headline>
    <br />
    <Typography.Headline {...props} style={{ overflow: 'hidden' }} size='m'>{`${props.children} - medium- gjpqy`}</Typography.Headline>
    <br />
    <Typography.Headline {...props} style={{ overflow: 'hidden' }} size='s'>{`${props.children} - small- gjpqy`}</Typography.Headline>
    <br />
    <Typography.Headline {...props} style={{ overflow: 'hidden' }} size='xs'>{`${props.children} - extra small- gjpqy`}</Typography.Headline>
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
    <Typography.Title {...props} style={{ overflow: 'hidden' }} bold size='l'>{`${props.children} - large bold- gjpqy`}</Typography.Title>
    <br />
    <Typography.Title {...props} style={{ overflow: 'hidden' }} size='l'>{`${props.children} - large - gjpqy`}</Typography.Title>
    <br />
    <Typography.Title {...props} style={{ overflow: 'hidden' }} size='m'>{`${props.children} - medium - gjpqy`}</Typography.Title>
    <br />
    <Typography.Title {...props} style={{ overflow: 'hidden' }} size='s'>{`${props.children} - small - gjpqy`}</Typography.Title>
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
    <Typography.Body {...props} style={{ overflow: 'hidden' }} size='l'>{`${props.children} - large - gjpqy`}</Typography.Body>
    <br />
    <Typography.Body {...props} style={{ overflow: 'hidden' }} size='m'>{`${props.children} - medium - gjpqy`}</Typography.Body>
    <br />
    <Typography.Body {...props} style={{ overflow: 'hidden' }} size='s'>{`${props.children} - small - gjpqy`}</Typography.Body>
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
    <Typography.Link {...props} style={{ overflow: 'hidden' }} size='m'>{`${props.children} - medium - gjpqy`}</Typography.Link>
    <br />
    <Typography.Link {...props} style={{ overflow: 'hidden' }} size='s'>{`${props.children} - small - gjpqy`}</Typography.Link>
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
    <Typography.Label {...props} style={{ overflow: 'hidden' }} size='xl'>{`${props.children} - extra large - gjpqy`}</Typography.Label>
    <br />
    <Typography.Label {...props} style={{ overflow: 'hidden' }} size='l'>{`${props.children} - large - gjpqy`}</Typography.Label>
    <br />
    <Typography.Label {...props} style={{ overflow: 'hidden' }} size='m'>{`${props.children} - medium - gjpqy`}</Typography.Label>
    <br />
    <Typography.Label {...props} style={{ overflow: 'hidden' }} size='s'>{`${props.children} - small - gjpqy`}</Typography.Label>
    <br />
    <Typography.Label {...props} style={{ overflow: 'hidden' }} size='xs'>{`${props.children} - extra small - gjpqy`}</Typography.Label>
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


