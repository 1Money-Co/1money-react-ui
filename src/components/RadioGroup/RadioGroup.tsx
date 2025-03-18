import { memo, useMemo, useState } from 'react';
import { RadioButton } from 'primereact/radiobutton';
import classnames from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { RadioGroupProps } from './interface';

export const RadioGroup: FC<PropsWithChildren<RadioGroupProps>> = props => {
  const { items = [], onChange, wrapperCls, innerCls, radioCls, prefixCls = 'radiogroup',size = 'md' } = props;
  const classes = classnames(prefixCls);
  const sizeClass = `rd-${size}`;

  const defaultSelected = useMemo(() => items.find(item => !!item.autoFocus), [items]);
  const [selected, setSelected] = useState<(typeof items)[number] | undefined>(defaultSelected);

  return <div className={classes('wrapper', [wrapperCls, 'tw-flex'].join(''))}>
    {items.map(item => {
      const { key, label, required, ...rest } = item;
      return (
        <div key={key} className={[classes('inner', innerCls), sizeClass].join(' ')}>
          <RadioButton
            {...rest}
            required={required}
            inputId={key}
            value={item}
            className={classes('inner-radio', radioCls)}
            onChange={e => {
              onChange?.(e.value);
              setSelected(e.value);
            }}
            checked={selected?.key === key}
          />
          {item?.label && <label htmlFor={key}>{label}</label>}
        </div>
      );
    })}
  </div>;
};

export default memo(RadioGroup);
