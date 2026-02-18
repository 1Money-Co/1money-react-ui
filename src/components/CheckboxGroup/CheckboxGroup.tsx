import { memo, useMemo } from 'react';
import { Checkbox as PrimeCheckbox, type CheckboxChangeEvent } from 'primereact/checkbox';
import { TriStateCheckbox } from 'primereact/tristatecheckbox';
import { default as classnames, joinCls } from '@/utils/classnames';
import useControlledState from '../useControlledState';
import useMemoizedFn from '../useMemoizedFn';
/* import types */
import type { FC } from 'react';
import type { CheckboxGroupProps } from './interface';

export const CheckboxGroup: FC<CheckboxGroupProps> = props => {
  const { tristate, items = [], onChange, wrapperCls, innerCls, checkboxGroupCls, labelCls, prefixCls = 'checkboxgroup', size = 'md' } = props;
  const classes = classnames(prefixCls);
  const sizeClass = `ckbg-${size}`;

  // Normal mode: controlled/uncontrolled string[] state
  const defaultChecked = useMemo(() => items.filter(item => !!item.autoFocus).map(v => v.key), [items]);
  const normalValue = tristate ? undefined : props.value;
  const [checkedItems, setCheckedItems] = useControlledState<string[]>(normalValue ?? defaultChecked, normalValue);

  // Tristate mode: controlled/uncontrolled Record<string, boolean | null> state
  const defaultItemsState = useMemo(
    () => Object.assign({}, ...items.map(v => ({ [v.key]: ('defaultValue' in v ? v.defaultValue : null) ?? null }))),
    [items],
  );
  const tristateValue = tristate ? props.value : undefined;
  const [itemsState, setItemsState] = useControlledState<Record<string, boolean | null>>(tristateValue ?? defaultItemsState, tristateValue);

  const handleOnChange = useMemoizedFn((e: CheckboxChangeEvent) => {
    if (tristate) {
      const _state = { ...itemsState, [e.target.id]: e.value };
      setItemsState(_state);
      onChange?.(_state);
    } else {
      const _state = [...checkedItems];
      if (e.checked) {
        _state.push(e.value);
      } else {
        _state.splice(_state.indexOf(e.value), 1);
      }
      setCheckedItems(_state);
      (onChange as CheckboxGroupProps['onChange'])?.(_state as any);
    }
  });

  const renderNormalItem = (item: (typeof items)[number]) => {
    const { key, required, disabled, defaultValue: _dv, label, onChange: itemOnChange, ...rest } = item;

    const checkboxEl = <PrimeCheckbox
      {...rest}
      value={key}
      required={required}
      disabled={disabled}
      checked={checkedItems.includes(key)}
      className={classes('inner-checkbox', checkboxGroupCls)}
      icon={<i className="pi pi-check" />}
      onChange={(e: CheckboxChangeEvent) => {
        if (disabled) return;
        itemOnChange?.(!!e.checked);
        handleOnChange(e);
      }}
    />;

    return <div key={key} className={joinCls(classes('inner', innerCls), sizeClass)}>
      {label
        ? <label className={labelCls}>{checkboxEl}{label}</label>
        : checkboxEl}
    </div>;
  };

  const renderTristateItem = (item: (typeof items)[number]) => {
    const { key, required, disabled, defaultValue: _defaultValue, label, onChange: itemOnChange, ...rest } = item;
    const trivalue = itemsState[key] ?? null;

    const checkboxEl = <TriStateCheckbox
      {...rest}
      id={key}
      value={trivalue}
      required={required}
      disabled={disabled}
      className={classes('inner-checkbox', checkboxGroupCls)}
      uncheckIcon={<i className="pi pi-minus" />}
      checkIcon={<i className="pi pi-check" />}
      onChange={(e: CheckboxChangeEvent) => {
        if (disabled) return;
        itemOnChange?.(e.value);
        handleOnChange(e);
      }}
    />;

    return <div key={key} className={joinCls(classes('inner', innerCls), sizeClass)}>
      {label
        ? <label className={labelCls}>{checkboxEl}<span>{label}</span></label>
        : checkboxEl}
    </div>;
  };

  return <div className={classes('wrapper', wrapperCls)}>
    {items.map(item => tristate ? renderTristateItem(item) : renderNormalItem(item))}
  </div>;
};

export default memo(CheckboxGroup);
