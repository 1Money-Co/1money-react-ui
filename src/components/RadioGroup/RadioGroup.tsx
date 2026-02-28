import { memo, useState, useCallback, useImperativeHandle } from 'react';
// import { RadioButton } from 'primereact/radiobutton';
import { default as classnames, joinCls } from '@/utils/classnames';
import { Radio } from '../Radio';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { RadioGroupProps, RadioItemProps } from './interface';

export const RadioGroup: FC<PropsWithChildren<RadioGroupProps>> = props => {
  const {
    ref,
    items = [],
    value,
    defaultValue,
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
    cardCheckedCls,
    cardDisabledCls,
    cardInvalidCls,
    label,
    required,
  } = props;
  const classes = classnames(prefixCls);
  const isControlled = value !== undefined;

  const getItemValue = useCallback((item: RadioItemProps) => item.value ?? item.key, []);
  const [uncontrolledValue, setUncontrolledValue] = useState<RadioItemProps['value'] | undefined>(() => {
    if (defaultValue !== undefined) return defaultValue;
    const autoFocusedItem = items.find(item => !!item.autoFocus);
    return autoFocusedItem ? getItemValue(autoFocusedItem) : undefined;
  });
  const selectedValue = isControlled ? value : uncontrolledValue;

  const isSelected = useCallback((item: RadioItemProps) => selectedValue === getItemValue(item), [getItemValue, selectedValue]);

  const handleSelect = useCallback((item: RadioItemProps) => {
    const selectedItemValue = getItemValue(item);
    const payload = item.value === selectedItemValue ? item : { ...item, value: selectedItemValue };

    if (!isControlled) {
      setUncontrolledValue(selectedItemValue);
    }

    onChange?.(payload);
  }, [getItemValue, isControlled, onChange]);

  const renderDefaultRadio = (item: RadioItemProps) => {
    const { key, label, required, children, disabled, ...rest } = item;
    const itemValue = getItemValue(item);
    return (
      <div key={key} className={classes('default-inner')}>
        <Radio
          {...rest}
          required={required}
          id={key}
          value={itemValue}
          disabled={disabled}
          size={size}
          radioCls={classes('inner-radio', radioCls)}
          onChange={() => {
            if (disabled) return;
            handleSelect(item);
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
      <div id={id} key={key} className={joinCls(
        classes('card-inner'),
        isSelected(item) && classes('card-checked', cardCheckedCls),
        disabled && classes('card-disabled', cardDisabledCls),
        invalid && classes('card-invalid', cardInvalidCls),
        cardCls
      )}
        onClick={() => {
          if (disabled || isSelected(item)) return;
          handleSelect(item);
        }}
      >
        {typeof children === 'function' ? children(isSelected(item)) : children}
      </div>
    );
  };

  useImperativeHandle(ref, () => ({
    reset: () => {
      if (!isControlled) {
        setUncontrolledValue(void 0);
      }
    },
  }), [isControlled]);

  return <div className={classes('wrapper', wrapperCls)}>
    {label && <label className={classes('label', joinCls(required && 'label-required', labelCls))}>{label}</label>}
    <div className={joinCls(
      classes('inner'),
      variant === 'card' ? classes('card') : classes('default'),
      direction === 'horizontal' ? 'horizontal' : 'vertical',
      innerCls,
    )}>
      {items.map(item => variant === 'card' ? renderCardRadio(item) : renderDefaultRadio(item))}
    </div>
  </div>;
};

export default memo(RadioGroup);
