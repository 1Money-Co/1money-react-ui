import { memo } from 'react';
import { InputSwitch } from 'primereact/inputswitch';
import { ToggleButton } from 'primereact/togglebutton';
import { default as classnames, joinCls } from '@/utils/classnames';
import useControlledState from '../useControlledState';
import useEventCallback from '../useEventCallback';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { SwitchChangeEvent, SwitchProps } from './interface';

export const Switch: FC<PropsWithChildren<SwitchProps>> = props => {
  const { type, checked: checkedProp, defaultChecked = false, className, onChange, prefixCls = 'switch', ...rest } = props;
  const classes = classnames(prefixCls);
  const [checked, setChecked] = useControlledState(defaultChecked, checkedProp);

  const handleChange = useEventCallback((e: SwitchChangeEvent) => {
    setChecked(e.value);
    onChange?.(e);
  });

  const cls = classes(undefined, joinCls(classes(type), className));

  if (type === 'button') {
    return <ToggleButton {...rest} className={cls} checked={checked} onChange={handleChange} />;
  }

  return <InputSwitch {...rest} className={cls} checked={checked} onChange={handleChange} />;
};

export default memo(Switch);
