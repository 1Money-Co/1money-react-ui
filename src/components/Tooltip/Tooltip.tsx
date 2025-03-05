import { memo } from 'react';
import RCTooltip from 'rc-tooltip';
import { IconWrapper } from '../Icons';
import classnames from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { TooltipProps } from './interface';

export const Tooltip: FC<PropsWithChildren<TooltipProps>> = props => {
  const { children, prefixCls = 'tooltip', overlay, ...rest } = props;
  const classes = classnames(prefixCls);

  return (
    <RCTooltip
      {...rest}
      prefixCls={`om-react-ui-${prefixCls}`}
      showArrow={false}
      overlay={
        <div className={classes('content')}>
          {typeof overlay === 'function' ? overlay() : overlay}
          <i className={classes('arrow')}>
            <IconWrapper className={classes('arrow-inner')} color='#131313' viewBox='0 0 36 9' width={36} height={9} >
              <path d="M16.5858 6.58679L10.8787 0.879687C10.3161 0.317078 9.55301 0.00100708 8.75736 0.00100708H27.2426C26.447 0.00100708 25.6839 0.317077 25.1213 0.879686L19.4142 6.58679C18.6332 7.36784 17.3668 7.36784 16.5858 6.58679Z" />
              <path d="M8 0.501007H8.34315C9.40401 0.501007 10.4214 0.922434 11.1716 1.67258L15.8787 6.37969C17.0503 7.55126 18.9497 7.55126 20.1213 6.37969L24.8284 1.67258C25.5786 0.922433 26.596 0.501007 27.6569 0.501007H28"  strokeLinecap="round"/>
            </IconWrapper>
          </i>
        </div>
      }
    >
      { children }
    </RCTooltip>
  );
};

export default memo(Tooltip);
