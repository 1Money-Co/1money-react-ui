import { memo, useState, useMemo, useCallback } from 'react';
import { Checkbox as PrimeCheckbox, type CheckboxChangeEvent } from 'primereact/checkbox';
import propTypes from 'prop-types';
import classnames from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { CheckboxProps } from './interface';

export const Checkbox: FC<PropsWithChildren<CheckboxProps>> = props => {
  const { items = [], onChange, wrapperCls, innerCls, checkboxCls, prefixCls = 'checkbox' } = props;
  const classes = classnames(prefixCls);
  const defaultChecked = useMemo(() => items.filter(item => !!item.autoFocus).map(v => v.key), [items]);

  const [checkedItems, setCheckedItems] = useState<string[]>(defaultChecked);
  const handleOnChange = useCallback((e: CheckboxChangeEvent) => {
    const _checkedItems = [...checkedItems];

    if (e.checked) _checkedItems.push(e.value);
    else _checkedItems.splice(_checkedItems.indexOf(e.value), 1);

    setCheckedItems(_checkedItems);
    onChange?.(_checkedItems);
  }, [checkedItems]);

  return <div className={classes('wrapper', wrapperCls)}>
    {items.map(item => {
      const { key, label, onChange, ...rest } = item;
      return <div className={classes('inner', innerCls)}>
        <PrimeCheckbox
          {...rest}
          inputId={key}
          value={key}
          checked={checkedItems.includes(key)}
          className={classes('inner-checkbox', checkboxCls)}
          onChange={e => {
            onChange?.(!!e.checked);
            handleOnChange(e);
          }}
        />
        {item?.label && <label htmlFor={key}>{label}</label>} 
      </div>;
    })}
  </div>;
};

/**
 * prop-types can make sure the type-check whatever the environment whether or not use typescript
 */
Checkbox.propTypes = {
  items: propTypes.array.isRequired,
  wrapperCls: propTypes.string,
  innerCls: propTypes.string,
  checkboxCls: propTypes.string,
  prefixCls: propTypes.string
};

export default memo(Checkbox);
