import { memo, useState, useMemo, useCallback } from 'react';
import { Checkbox as PrimeCheckbox, type CheckboxChangeEvent } from 'primereact/checkbox';
import { TriStateCheckbox } from 'primereact/tristatecheckbox';
import classnames from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { CheckboxProps } from './interface';

export const Checkbox: FC<PropsWithChildren<CheckboxProps>> = props => {
  const {
    tristate,
    onChange,
    wrapperCls,
    innerCls,
    checkboxCls,
    labelCls,
    prefixCls = 'checkbox',
    size = 'md',
    label,
    disabled,
    required,
    ...rest
  } = props;

  const classes = classnames(prefixCls);
  const sizeClass = `ckb-${size}`;

  const CheckBoxComponent = useMemo(() =>
    tristate ? TriStateCheckbox as new() => TriStateCheckbox : PrimeCheckbox as new() => PrimeCheckbox,
    [tristate]
  );

  // Get checked/value from props based on tristate mode
  const checked = tristate ? undefined : (props as any).checked;
  const value = tristate ? (props as any).value : undefined;

  const handleLabelClick = useCallback(() => {
    // TriStateCheckbox handles its own click events, don't interfere
    if (!tristate || disabled) return;
  }, [tristate, disabled]);

  const LabelWrapper = useCallback(({ children }: PropsWithChildren) => {
    if (!label) return children;
    return <label className={labelCls} onClick={handleLabelClick}>
      {children}
      {label}
    </label>;
  }, [label, labelCls, handleLabelClick]);

  return <div className={classes('wrapper', wrapperCls)}>
    <div className={[classes('inner', innerCls), sizeClass].join(' ')}>
      <LabelWrapper>
        <CheckBoxComponent
          {...rest as any}
          value={value}
          required={required}
          disabled={disabled}
          checked={checked}
          className={classes('inner-checkbox', checkboxCls)}
          // Pass icon props only to CheckBoxComponent
          {...(tristate ? { uncheckIcon: <i className="pi pi-minus" ></i> } : {})}
          {...(tristate ? { checkIcon: <i className="pi pi-check" ></i> } : {
            icon: <i className="pi pi-check" ></i>
          })}
          onChange={(e: CheckboxChangeEvent) => {
            if (disabled) return;
            if (tristate) {
              onChange?.(e.value);
            } else {
              onChange?.(!!e.checked);
            }
          }}
        />
      </LabelWrapper>
    </div>
  </div>;
};

export default memo(Checkbox);
