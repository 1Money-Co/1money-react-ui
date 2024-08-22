import { memo, useState, useMemo, useCallback } from 'react';
import { Checkbox as PrimeCheckbox, type CheckboxChangeEvent } from 'primereact/checkbox';
import { TriStateCheckbox } from 'primereact/tristatecheckbox';
import propTypes from 'prop-types';
import classnames from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { CheckboxProps } from './interface';

export const Checkbox: FC<PropsWithChildren<CheckboxProps>> = props => {
  const { tristate, items = [], onChange, wrapperCls, innerCls, checkboxCls, prefixCls = 'checkbox' } = props;
  const classes = classnames(prefixCls);

  const CheckBoxComponent = useMemo(() => tristate ? TriStateCheckbox as new() => TriStateCheckbox : PrimeCheckbox as new() => PrimeCheckbox, [tristate]);
  const defaultChecked = useMemo(() => items.filter(item => !!item.autoFocus).map(v => v.key), [items]);

  const [checkedItems, setCheckedItems] = useState<string[]>(defaultChecked);
  const [itemsState, setItemsState] = useState<Record<string, boolean | null>>(Object.assign({}, ...items.map(v => ({[v.key]: v.defaultValue ?? null}))));

  const handleOnChange = useCallback((e: CheckboxChangeEvent) => {
    let _state;
    if (tristate) {
      _state = {...itemsState};
      _state[e.target.id] = e.value;
      setItemsState(_state);
    } else {
      _state = [...checkedItems];
      e.checked ? _state.push(e.value) : _state.splice(_state.indexOf(e.value), 1);
      setCheckedItems(_state);
    }
    onChange?.(_state as any);
  }, [tristate, itemsState, checkedItems]);

  return <div className={classes('wrapper', wrapperCls)}>
    {items.map(item => {
      const { key, defaultValue = null, label, onChange, ...rest } = item;
      const [trivalue, setTrivalue] = useState(defaultValue);
      const handleLabelClick = useCallback(() => {
        if (!tristate) return;
        setTrivalue(curr => curr === null ? true : curr === true ? false : null);
      }, [tristate]);
      return <div className={classes('inner', innerCls)}>
        <CheckBoxComponent
          {...rest as any}
          id={tristate ? key : void 0}
          inputId={key}
          value={tristate ? trivalue : key}
          checked={tristate ? void 0 : checkedItems.includes(key)}
          className={classes('inner-checkbox', checkboxCls)}
          onChange={e => {
            tristate && setTrivalue(e.value);
            onChange?.(tristate ? e.value : !!e.checked);
            handleOnChange(e);
          }}
        />
        {item?.label && <label htmlFor={key} onClick={handleLabelClick}>{label}</label>} 
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
