import { memo, useMemo, useState, useEffect } from 'react';
import isEqual from 'lodash.isequal';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import classnames from '@/utils/classnames';
import { Icons } from '../Icons';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { SelectProps } from './interface';

export const Select: FC<PropsWithChildren<SelectProps>> = props => {
  const {
    label,
    message,
    required,
    invalid,
    multiple,
    options,
    name,
    className = '',
    panelClassName,
    onChange,
    prefixCls = 'select',
    wrapperCls,
    labelCls,
    messageCls,
    defaultValue,
    itemTemplate,
    value,
    size = 'large',
    success,
    onHide,
    onShow,
    ...rest
  } = props;
  const classes = classnames(prefixCls);
  const [selected, setSelected] = useState<string | number | readonly string[] | null>(value ?? defaultValue ?? null);
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
        invalid={invalid}
        options={options}
        value={selected == null ? undefined : selected}
        className={
          classes(void 0, [
            classes(size),
            isOpen ? classes('show') : '',
            success ? classes('success') : '',
            className
          ].join(' '))
        }
        itemTemplate={(option) => {
          return <div className={classes('panel-item')}>
            <div className={classes('panel-item-label')}>
              {itemTemplate ? itemTemplate(option) : option.label}
            </div>
            <i className='pi pi-check' />
          </div>;
        }}
        panelClassName={classes('panel', panelClassName)}
        onChange={(e) => {
          setSelected(e.value);
          onChange?.(e as any);
        }}
        onHide={() => {
          setIsOpen(false);
          onHide?.();
        }}
        onShow={() => {
          setIsOpen(true);
          onShow?.();
        }}
        dropdownIcon={() => <Icons name='dropDown' color='#131313' size={20} />}
        collapseIcon={() => <Icons name='dropDown' color='#131313' size={20} />}
      />
      {
        message && <span
          className={classes('message', [
            success ? classes('message-success') : '',
            invalid ? classes('message-error') : '',
            messageCls
          ].join(' '))}
        >
          {message}
        </span>
      }
    </div>
  );
};

export default memo(Select);
