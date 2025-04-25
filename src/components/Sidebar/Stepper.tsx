import { memo, useState, useCallback } from 'react';
import classnames from '@/utils/classnames';
import Icons from '../Icons';
/* import types */
import type { FC } from 'react';
import type { StepperProps } from './interface';

export const Stepper: FC<StepperProps> = props => {
  const { id, steps, className, prefixCls = 'stepper', headerCls, bodyCls, footerCls, logoCls, onLogoClick, footer } = props;
  const classes = classnames(prefixCls);

  return (
    <aside
      id={id}
      className={classes(void 0, className)}
    >
      <div className={classes('header', headerCls)}>
        <Icons
          name='logoWithWords'
          logoColor='#073387'
          wordColor='#131313'
          width={131}
          height={24}
          onClick={onLogoClick}
          wrapperCls={classes('header-logo', logoCls)}
        />
      </div>
      <ul className={classes('steps', bodyCls)}>
        {
          steps.map(step => {
            const { key, label, status, disabled, onClick } = step;
            return <li
              key={key}
              className={classes('step', [classes(`step-${status}`), disabled && classes('step-disabled')].join(' '))}
              onClick={() => onClick?.(step)}
            >
              <span className={classes('step-label')}>{label}</span>
              {
                (step.status === 'done' || step.status === 'done-active') && <Icons name='statusSuccess' size={20} color='#1F5800' />
              }
            </li>;
          })
        }
      </ul>
      {
        footer && <div className={classes('footer', footerCls)}>{footer}</div>
      }
    </aside>
  );
};

export default memo(Stepper);
