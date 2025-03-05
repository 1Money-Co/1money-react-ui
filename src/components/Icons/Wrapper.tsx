import { memo } from 'react';
import classnames from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { IconWrapperProps } from './interface';

export const IconWrapper: FC<PropsWithChildren<IconWrapperProps>> = (props) => {
  const { children, size = 24, width, height, color = '#000000', stroke, fill, className = '', prefixCls = 'icons', illustrations = false, viewBox = '0 0 24 24', onClick } = props;
  const classes = classnames(prefixCls);


  return <svg
    width={width ?? size}
    height={height ?? size}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={classes(void 0, className)}
    fill={ fill ?? stroke ? 'none' : color}
    stroke={stroke ? color : 'none'}
    onClick={onClick}
  >
    { children }
  </svg>;
};

export default memo(IconWrapper);
