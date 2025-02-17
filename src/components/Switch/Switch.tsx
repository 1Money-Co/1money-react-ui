import { memo, useMemo, useState, useCallback } from 'react';
import propTypes from 'prop-types';
import { InputSwitch } from 'primereact/inputswitch';
import { ToggleButton } from 'primereact/togglebutton';
import classnames from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { SwitchProps } from './interface';

export const Switch: FC<PropsWithChildren<SwitchProps>> = props => {
  const { type, defaultChecked, className, onChange, prefixCls = 'switch', ...rest } = props;
  const classes = classnames(prefixCls);
  const [ checked, setChecked ] = useState<boolean>(defaultChecked || false);

  const SwitchComponent = useMemo(() => {
    switch (type) {
      case 'normal':
        return InputSwitch as new () => InputSwitch;
      case 'button':
        return ToggleButton as new () => ToggleButton;
      default:
        return InputSwitch as new () => InputSwitch;
    }
  }, [type]);
  return (
    <SwitchComponent
      {...rest as any}
      className={classes(void 0, className)}
      checked={checked}
      onChange={e => {
        setChecked(e.value);
        onChange?.(e as any);
      }}
    />
  );
};

export default memo(Switch);
