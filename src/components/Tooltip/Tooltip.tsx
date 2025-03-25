import { memo } from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';

import classnames from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { TooltipProps } from './interface';

export const Tooltip: FC<PropsWithChildren<TooltipProps>> = props => {
  const { children, prefixCls = 'tooltip', className, arrowCls, place, ...rest } = props;
  const classes = classnames(prefixCls);

  return <ReactTooltip
    {...rest}
    place={place}
    role='tooltip'
    className={classes(void 0, className)}
    classNameArrow={classes('arrow', [classes(`arrow-${place}`), arrowCls].join(' '))}
  >
    { children }
  </ReactTooltip>;
};

export default memo(Tooltip);
