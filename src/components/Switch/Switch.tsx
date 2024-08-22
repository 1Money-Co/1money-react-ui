import { memo } from 'react';
import propTypes from 'prop-types';
import { InputSwitch } from 'primereact/inputswitch';
import { SelectButton } from 'primereact/selectbutton';
import { ToggleButton } from 'primereact/togglebutton';
import classnames from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { SwitchProps } from './interface';

export const Switch: FC<PropsWithChildren<SwitchProps>> = props => {
  const { children, className, onClick, prefixCls = 'switch' } = props;
  const classes = classnames(prefixCls);

  return (
    <div
      className={classes(void 0, className)}
      onClick={onClick}
    >
      { children }
    </div>
  );
};

/**
 * prop-types can make sure the type-check whatever the environment whether or not use typescript
 */
Switch.propTypes = {
  className: propTypes.string,
  prefixCls: propTypes.string
};

export default memo(Switch);
