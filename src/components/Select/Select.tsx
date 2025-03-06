import { memo, useMemo, useState, useEffect, useCallback } from 'react';
import isEqual from 'lodash.isequal';
import { Dropdown, type DropdownProps } from 'primereact/dropdown';
import { MultiSelect, type MultiSelectProps } from 'primereact/multiselect';
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
  const SelectComponent = useCallback(
    (props: MultiSelectProps & DropdownProps) => multiple
      ? <MultiSelect
        showSelectAll={false}
        checkboxIcon={<Icons name='check' size={12} color='#FEFEFE' />}
        removeIcon={props => {
          const { onClick, onKeyDown, tabIndex } = props.iconProps;
          return <Icons
            name='close'
            size={16}
            color='#131313'
            tabIndex={tabIndex}
            className={classes('token-remove-icon')}
            onClick={onClick}
            onKeyDown={onKeyDown}
          />;
        }}
        panelHeaderTemplate={options => {
          const { filterElement, onChange, onCloseClick, props } = options;
          return <div className={classes('panel-header')}>
            <div className={classes('panel-header-info')}>
              <span className={classes('panel-header-info-count')}>
                {(selected as Array<string>)?.length ?? 0} selected
              </span>
              <span
                className={classes('panel-header-info-clear')}
                onClick={e => {
                  // @ts-ignore
                  props.resetFilter();
                  setSelected(null);
                }}
              >
                <Icons name='close' size={16} color='#AE0000' className={classes('panel-header-info-clear-icon')} />
                Clear all
              </span>
            </div>
            {filterElement?.props?.children}
          </div>;
        }}
        {...(props as MultiSelectProps)}
      />
      : <Dropdown
        collapseIcon={multiple ? void 0 : () => <Icons name='dropDown' color='#131313' size={20} />}
        {...(props as DropdownProps)}
      />
    , [multiple]
  );

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
        filterPlaceholder='Search'
        required={required}
        invalid={invalid}
        options={options}
        value={selected == null ? undefined : selected}
        className={
          classes(void 0, [
            classes(size),
            isOpen ? classes('show') : '',
            success ? classes('success') : '',
            (Array.isArray(selected) ? selected.length : selected) ? classes('filled') : '',
            className
          ].join(' '))
        }
        itemTemplate={(option) => {
          return <div className={classes('panel-item')}>
            <div className={classes('panel-item-label')}>
              {itemTemplate ? itemTemplate(option) : option.label}
            </div>
            <Icons name='check' size={16} color='#073387' />
          </div>;
        }}
        filterIcon={<Icons name='search' size={20} color='#131313' className={classes('filter-icon')} />}
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
