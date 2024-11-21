import { memo, useMemo, useState, useEffect } from 'react';
import isEqual from 'lodash.isequal';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import propTypes from 'prop-types';
import classnames from '@/utils/classnames';
import { Icons } from '../Icons';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { SelectProps } from './interface';

export const Select: FC<PropsWithChildren<SelectProps>> = props => {
  const {
    label,
    required,
    rounded = false,
    multiple,
    options,
    name,
    className = '',
    panelClassName,
    onChange,
    prefixCls = 'select',
    wrapperCls,
    labelCls,
    defaultValue,
    value,
    ...rest
  } = props;
  const classes = classnames(prefixCls);
  const [selected, setSelected] = useState<string | number | readonly string[] | null>(value ??defaultValue ?? null);
  const [isOpen, setIsOpen] = useState(false);
  const SelectComponent = useMemo(() => multiple ? MultiSelect as new() => MultiSelect : Dropdown as new() => Dropdown, [multiple]);
  
  useEffect(() => {
    if (value !== undefined && !isEqual(selected, value)) {
      setSelected(value);
    }
  }, [value]);

  return (
    <div className={classes('wrapper', wrapperCls)}>
      {label && <span className={classes('label', [required && classes('label-required'), labelCls].join(' '))}>{label}</span>}
      <SelectComponent
        {...rest as any}
        name={name}
        required={required}
        options={options}
        value={selected}
        className={
          classes(void 0, [
            isOpen ? classes('show') : '',
            rounded ? classes('rounded') : '',
            className
          ].join(' '))
        }
        panelClassName={classes('panel', panelClassName)}
        onChange={(e) => {
          onChange?.(e as any);
          setSelected(e.value);
        }}
        onHide={() => setIsOpen(false)}
        onShow={() => setIsOpen(true)}
        dropdownIcon={() => <Icons name='dropDown' color='#808080' size={20} />}
      />
    </div>
  );
};

/**
 * prop-types can make sure the type-check whatever the environment whether or not use typescript
 */
Select.propTypes = {
  label: propTypes.string,
  required: propTypes.bool,
  className: propTypes.string,
  prefixCls: propTypes.string,
  wrapperCls: propTypes.string
};

export default memo(Select);
