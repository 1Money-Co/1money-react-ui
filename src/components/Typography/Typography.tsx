import { memo } from 'react';
import propTypes from 'prop-types';
import classnames from '@/utils/classnames';
/* import types */
import type { FC, MouseEventHandler, PropsWithChildren } from 'react';
import type { DisplayProps, HeadlineProps, TitleProps, BodyProps, LinkProps, LabelProps } from './interface';

export interface TypographyProps {
  Display: typeof Display;
  Headline: typeof Headline;
  Title: typeof Title;
  Body: typeof Body;
  Link: typeof Link;
  Label: typeof Label;
}

const Display: FC<PropsWithChildren<DisplayProps>> = memo(props => {
  const { children, className, prefixCls = 'typography-display', size, ...rest } = props;
  const classes = classnames(prefixCls);

  return <h1
    {...rest}
    className={classes(void 0, [classes(size), className].join(' '))}
  >
    { children }
  </h1>;
});

const Headline: FC<PropsWithChildren<HeadlineProps>> = memo(props => {
  const { children, className, prefixCls = 'typography-headline', size, ...rest } = props;
  const classes = classnames(prefixCls);

  return <h2
    {...rest}
    className={classes(void 0, [classes(size), className].join(' '))}
  >
    { children }
  </h2>;
});

const Title: FC<PropsWithChildren<TitleProps>> = memo(props => {
  const { children, className, prefixCls = 'typography-title', bold, size, ...rest } = props;
  const classes = classnames(prefixCls);

  return <h3
    {...rest}
    className={classes(void 0, [
      classes(size),
      bold ? classes('bold') : '',
      className
    ].join(' '))}
  >
    { children }
  </h3>;
});

const Body: FC<PropsWithChildren<BodyProps>> = memo(props => {
  const { children, className, prefixCls = 'typography-body', bold, size, ...rest } = props;
  const classes = classnames(prefixCls);

  return <p
    {...rest}
    className={classes(void 0, [
      classes(size),
      bold ? classes('bold') : '',
      className
    ].join(' '))}
  >
    { children }
  </p>;
});

const Link: FC<PropsWithChildren<LinkProps>> = memo(props => {
  const { children, className, prefixCls = 'typography-link', size, ...rest } = props;
  const classes = classnames(prefixCls);

  return <a
    {...rest}
    className={classes(void 0, [classes(size), className].join(' '))}
  >
    { children }
  </a>;
});

const Label: FC<PropsWithChildren<LabelProps>> = memo(props => {
  const { children, className, prefixCls = 'typography-label', bold, size, ...rest } = props;
  const classes = classnames(prefixCls);

  return <span
    {...rest}
    className={classes(void 0, [
      classes(size),
      bold ? classes('bold') : '',
      className
    ].join(' '))}
  >
    { children }
  </span>;
});




export const Typography = () => {
  return null;
};

Typography.Display = Display;
Typography.Headline = Headline;
Typography.Title = Title;
Typography.Body = Body;
Typography.Link = Link;
Typography.Label = Label;

export default Typography;
