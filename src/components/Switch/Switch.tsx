import { memo, useMemo, useState } from 'react';
import { InputSwitch } from 'primereact/inputswitch';
import { ToggleButton } from 'primereact/togglebutton';
import { default as classnames, joinCls } from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { SwitchProps } from './interface';

const getCheckedFromEvent = (event: unknown): boolean => {
  if (typeof event === 'boolean') return event;

  if (event && typeof event === 'object') {
    const record = event as {
      checked?: unknown;
      value?: unknown;
      target?: {
        checked?: unknown;
        value?: unknown;
      };
    };

    if (typeof record.checked === 'boolean') return record.checked;
    if (typeof record.value === 'boolean') return record.value;
    if (record.target && typeof record.target.checked === 'boolean') return record.target.checked;
    if (record.target && typeof record.target.value === 'boolean') return record.target.value;
  }

  return false;
};

export const Switch: FC<PropsWithChildren<SwitchProps>> = props => {
  const { type, checked: checkedProp, defaultChecked = false, className, onChange, prefixCls = 'switch', ...rest } = props;
  const classes = classnames(prefixCls);
  const isControlled = checkedProp !== undefined;
  const [uncontrolledChecked, setUncontrolledChecked] = useState<boolean>(defaultChecked);
  const checked = isControlled ? checkedProp : uncontrolledChecked;

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
      className={classes(void 0, joinCls(classes(type), className))}
      checked={checked}
      onChange={e => {
        if (!isControlled) {
          setUncontrolledChecked(getCheckedFromEvent(e));
        }
        onChange?.(e as any);
      }}
    />
  );
};

export default memo(Switch);
