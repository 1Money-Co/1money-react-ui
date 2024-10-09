import { memo } from 'react';
import propTypes from 'prop-types';
import classnames from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { IconWrapperProps } from './interface';

export const IconWrapper: FC<PropsWithChildren<IconWrapperProps>> = (props) => {
  const { children, size = 24, width, height, color = '#000000', className = '', prefixCls = 'icons', viewBox = '0 0 24 24', onClick } = props;
  const classes = classnames(prefixCls);

  return <svg 
    width={width ?? size}
    height={height ?? size}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={classes(void 0, className)}
    fill={color}
    onClick={onClick}
  >
    { children }
  </svg>;
};

/**
 * prop-types can make sure the type-check whatever the environment whether or not use typescript
 */
IconWrapper.propTypes = {
  className: propTypes.string,
  prefixCls: propTypes.string,
  size: propTypes.number,
  width: propTypes.number,
  height: propTypes.number,
  color: propTypes.string,
  viewBox: propTypes.string,
};

export default memo(IconWrapper);
