import { memo, useState, useCallback } from 'react';
import classnames from '@/utils/classnames';
import Icons from '../Icons';
/* import types */
import type { FC } from 'react';
import type { StepperProps } from './interface';

export const Stepper: FC<StepperProps> = props => {
  const { steps, className, prefixCls = 'stepper', onLogoClick, footer } = props;
  const classes = classnames(prefixCls);

  return (
    <aside
      className={classes(void 0, className)}
    >
      <div className={classes('header')}>
        <Icons
          name='logoWithWords'
          logoColor='#073387'
          wordColor='#131313'
          width={131}
          height={24}
          onClick={onLogoClick}
        />
      </div>
      <ul className={classes('steps')}>
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
        footer && <div className={classes('footer')}>{footer}</div>
      }
    </aside>
  );
};

export default memo(Stepper);
