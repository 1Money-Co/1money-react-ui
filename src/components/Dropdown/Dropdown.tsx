import { memo } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import classnames from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { DropdownProps } from './interface';

export const Dropdown: FC<PropsWithChildren<DropdownProps>> = props => {
  const { children, className, prefixCls = 'dropdown', ...rest } = props;
  const classes = classnames(prefixCls);

  return (
    <>
      <OverlayPanel
        {...rest}
        className={classes(void 0, className)}
      >
        { children }
      </OverlayPanel>
      <div className={classes('mask')} />
    </>
  );
};

export default memo(Dropdown);
