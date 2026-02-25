import { memo, useMemo } from 'react';
import { Checkbox as PrimeCheckbox, type CheckboxChangeEvent } from 'primereact/checkbox';
import { TriStateCheckbox } from 'primereact/tristatecheckbox';
import { default as classnames, joinCls } from '@/utils/classnames';
import useControlledState from '../useControlledState';
import useMemoizedFn from '../useMemoizedFn';
/* import types */
import type { ComponentProps, FC } from 'react';
import type { CheckboxGroupProps, CheckboxGroupItem } from './interface';

type TriStateCheckboxWithInputIdProps = ComponentProps<typeof TriStateCheckbox> & { inputId?: string };
const TriStateCheckboxWithInputId = TriStateCheckbox as unknown as FC<TriStateCheckboxWithInputIdProps>;

export const CheckboxGroup: FC<CheckboxGroupProps> = props => {
  const { tristate, items = [], onChange, wrapperCls, innerCls, checkboxGroupCls, labelCls, prefixCls = 'checkboxgroup', size = 'md' } = props;
  const classes = classnames(prefixCls);
  const sizeClass = `ckbg-${size}`;

  // Normal mode: controlled/uncontrolled string[] state
  const defaultChecked = useMemo(() => items.filter(item => item.defaultChecked).map(v => v.key), [items]);
  const normalValue = tristate ? undefined : props.value;
  const [checkedItems, setCheckedItems] = useControlledState<string[]>(normalValue ?? defaultChecked, normalValue);

  // Tristate mode: controlled/uncontrolled Record<string, boolean | null> state
  const defaultItemsState = useMemo<Record<string, boolean | null>>(
    () => Object.fromEntries(items.map(v => [v.key, ('defaultValue' in v ? (v.defaultValue as boolean | null) : null) ?? null])),
    [items],
  );
  const tristateValue = tristate ? props.value : undefined;
  const [itemsState, setItemsState] = useControlledState<Record<string, boolean | null>>(tristateValue ?? defaultItemsState, tristateValue);

  const handleNormalChange = useMemoizedFn((e: CheckboxChangeEvent, itemOnChange?: (checked: boolean) => any) => {
    itemOnChange?.(!!e.checked);
    const next = e.checked
      ? [...checkedItems, e.value]
      : checkedItems.filter(k => k !== e.value);
    setCheckedItems(next);
    (onChange as ((checkedList: string[]) => void) | undefined)?.(next);
  });

  const handleTristateChange = useMemoizedFn((e: CheckboxChangeEvent, itemOnChange?: (state: boolean | null) => any) => {
    itemOnChange?.(e.value);
    const next = { ...itemsState, [e.target.id]: e.value as boolean | null };
    setItemsState(next);
    (onChange as ((state: Record<string, boolean | null>) => void) | undefined)?.(next);
  });

  const renderItem = (item: CheckboxGroupItem) => {
    const { key, required, disabled, label, onChange: itemOnChange, ...rest } = item;
    // Strip defaultValue from rest to avoid passing it to DOM
    const { defaultValue: _, defaultChecked: __, ...checkboxRest } = rest as Record<string, unknown>;
    const innerClassName = classes('inner-checkbox', checkboxGroupCls);

    const checkboxEl = tristate
      ? <TriStateCheckboxWithInputId
          {...checkboxRest}
          id={key}
          inputId={key}
          value={itemsState[key] ?? null}
          required={required}
          disabled={disabled}
          className={innerClassName}
          uncheckIcon={<i className="pi pi-minus" />}
          checkIcon={<i className="pi pi-check" />}
          onChange={(e: CheckboxChangeEvent) => { if (!disabled) handleTristateChange(e, itemOnChange as (state: boolean | null) => any); }}
        />
      : <PrimeCheckbox
          {...checkboxRest}
          inputId={key}
          value={key}
          required={required}
          disabled={disabled}
          checked={checkedItems.includes(key)}
          className={innerClassName}
          icon={<i className="pi pi-check" />}
          onChange={(e: CheckboxChangeEvent) => { if (!disabled) handleNormalChange(e, itemOnChange as (checked: boolean) => any); }}
        />;

    return (
      <div key={key} className={joinCls(classes('inner', innerCls), sizeClass)}>
        {label
          ? <label htmlFor={key} className={labelCls}>{checkboxEl}{tristate ? <span>{label}</span> : label}</label>
          : checkboxEl}
      </div>
    );
  };

  return (
    <div className={classes('wrapper', wrapperCls)}>
      {items.map(renderItem)}
    </div>
  );
};

export default memo(CheckboxGroup);
