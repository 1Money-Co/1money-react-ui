import { memo } from 'react';
import { default as classnames, joinCls } from '@/utils/classnames';
import Icons from '../Icons';
import SidebarLogo from './SidebarLogo';
import { STATUS_SUCCESS_COLOR } from './constants';
/* import types */
import type { FC } from 'react';
import type { StepperProps } from './interface';

const DONE_STATUSES = ['done', 'done-active'] as const;
const LOGO_BUTTON_ARIA_LABEL = 'Sidebar logo';

export const Stepper: FC<StepperProps> = props => {
  const { id, steps, className, prefixCls = 'stepper', headerCls, bodyCls, footerCls, logoCls, betaLogo, onLogoClick, footer } = props;
  const classes = classnames(prefixCls);

  return (
    <aside
      id={id}
      className={classes(void 0, className)}
    >
      <div className={classes('header', headerCls)}>
        <button
          type='button'
          className={classes('header-logo', logoCls)}
          onClick={onLogoClick}
          aria-label={LOGO_BUTTON_ARIA_LABEL}
        >
          <SidebarLogo betaLogo={betaLogo} />
        </button>
      </div>
      <ul className={classes('steps', bodyCls)}>
        {
          steps.map(step => {
            const { key, label, status, disabled, onClick } = step;
            return <li
              key={key}
              className={classes('step', joinCls(classes(`step-${status}`), disabled && classes('step-disabled')))}
              onClick={() => onClick?.(step)}
            >
              <span className={classes('step-label')}>{label}</span>
              {
                DONE_STATUSES.includes(status as typeof DONE_STATUSES[number]) && <Icons name='statusSuccess' size={20} color={STATUS_SUCCESS_COLOR} />
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
