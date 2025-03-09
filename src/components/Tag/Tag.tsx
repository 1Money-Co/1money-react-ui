import { memo } from 'react';

import { Tag as PrimeTag } from 'primereact/tag';
import classnames from '@/utils/classnames';

import type { TagProps } from './interface';
import type { FC, PropsWithChildren } from 'react';

export const Tag: FC<PropsWithChildren<TagProps>> = props => {
  const {
    children,
    className = '',
    prefixCls = 'tag',
    ...rest
  } = props;
  const classes = classnames(prefixCls);

  return (
    <PrimeTag
      {...rest}
      className={classes(void 0, className)}>
      {children}
    </PrimeTag>
  );
};


export default memo(Tag);









