import { memo, useMemo, useState, useCallback, useImperativeHandle } from 'react';
// import { RadioButton } from 'primereact/radiobutton';
import { Radio } from '../Radio';
import classnames from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { RadioGroupProps, RadioItemProps } from './interface';

export const RadioGroup: FC<PropsWithChildren<RadioGroupProps>> = props => {
  const {
    ref,
    items = [],
    onChange,
    wrapperCls,
    innerCls,
    radioCls,
    prefixCls = 'radiogroup',
    size = 'md',
    variant = 'default',
    direction = 'horizontal',
    labelCls,
    cardCls,
    label,
    required,
  } = props;
  const classes = classnames(prefixCls);

  const defaultSelected = useMemo(() => items.find(item => !!item.autoFocus), [items]);
  const [selected, setSelected] = useState<(typeof items)[number] | undefined>(defaultSelected);

  const isSelected = useCallback((item: RadioItemProps) => selected?.key === item.key, [selected]);

  const renderDefaultRadio = (item: RadioItemProps) => {
    const { key, label, required, children, ...rest } = item;
    return (
      <div key={key} className={[classes('default-inner')].join(' ')}>
        <Radio
          {...rest}
          required={required}
          id={key}
          value={key}
          size={size}
          radioCls={classes('inner-radio', radioCls)}
          onChange={e => {
            onChange?.(item);
            setSelected(item);
          }}
          checked={isSelected(item)}
        />
        {item?.label && <label htmlFor={key}>{label}</label>}
      </div>
    );
  };

  const renderCardRadio = (item: RadioItemProps) => {
    const { id, key, disabled, invalid, children } = item;
    return (
      <div id={id} key={key} className={[
        classes('card-inner'),
        isSelected(item) && classes('card-checked'),
        disabled && classes('card-disabled'),
        invalid && classes('card-invalid'),
        cardCls
      ].filter(Boolean).join(' ')}
        onClick={() => {
          if (disabled || selected?.key === item.key) return;
          onChange?.(item);
          setSelected(item);
        }}
      >
        {typeof children === 'function' ? children(isSelected(item)) : children}
      </div>
    );
  };

  useImperativeHandle(ref, () => ({
    reset: () => setSelected(void 0),
  }), []);

  return <div className={classes('wrapper', [wrapperCls].join(''))}>
    {label && <label className={classes('label', [required && 'label-required', labelCls].join(''))}>{label}</label>}
    <div className={[
      classes('inner'),
      variant === 'card' ? classes('card') : classes('default'),
      direction === 'horizontal' ? 'horizontal' : 'vertical',
      innerCls,
    ].join(' ')}>
      {items.map(item => variant === 'card' ? renderCardRadio(item) : renderDefaultRadio(item))}
    </div>
  </div>;
};

export default memo(RadioGroup);
