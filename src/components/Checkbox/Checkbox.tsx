import { memo, useState, useMemo, useCallback } from 'react';
import { Checkbox as PrimeCheckbox, type CheckboxChangeEvent } from 'primereact/checkbox';
import { TriStateCheckbox } from 'primereact/tristatecheckbox';
import classnames from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { CheckboxProps } from './interface';

export const Checkbox: FC<PropsWithChildren<CheckboxProps>> = props => {
  const { tristate, items = [], onChange, wrapperCls, innerCls, checkboxCls, labelCls,prefixCls = 'checkbox', size = 'md' } = props;
  const classes = classnames(prefixCls);
  const sizeClass = `ckb-${size}`;

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
      const { key, required, disabled, defaultValue = null, label, onChange, ...rest } = item;
      const [trivalue, setTrivalue] = useState(defaultValue);

      const handleLabelClick = useCallback(() => {
        if (!tristate || disabled) return;
        setTrivalue(curr => curr === null ? true : curr === true ? false : null);
      }, [tristate, disabled]);

      const LabelWrapper = useCallback(({ children }: PropsWithChildren) => {
        if (!label) return children;
        return <label className={labelCls} onClick={handleLabelClick}>
          {children}
          {label}
        </label>;
      }, [label, handleLabelClick]);

      return <div key={key} className={[classes('inner', innerCls), sizeClass].join(' ')}>
        <LabelWrapper>
          <CheckBoxComponent
            {...rest as any}
            id={tristate ? key : void 0}
            value={tristate ? trivalue : key}
            required={required}
            disabled={disabled}
            checked={tristate ? void 0 : checkedItems.includes(key)}
            className={classes('inner-checkbox', checkboxCls)}
            // 仅在 CheckBoxComponent 上传递图标属性
            {...(tristate ? { uncheckIcon: <i className="pi pi-minus" ></i> } : {})}
            {...(tristate ? { checkIcon: <i className="pi pi-check" ></i> } : {
              icon: <i className="pi pi-check" ></i>
            })}
            onChange={e => {
              if (disabled) return;
              tristate && setTrivalue(e.value);
              onChange?.(tristate ? e.value : !!e.checked);
              handleOnChange(e);
            }}
          />
        </LabelWrapper>
      </div>;
    })}
  </div>;
};

export default memo(Checkbox);
