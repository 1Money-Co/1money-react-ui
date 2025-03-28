import { memo, useRef, useMemo, useState, useEffect, useCallback, useImperativeHandle } from 'react';
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
    ref,
    label,
    message,
    required,
    prefixCls = 'select',
    wrapperCls,
    labelCls,
    messageCls,
    value,
    size = 'large',
    success,
    invalid,
    disabled,
    placeholder,
    className = '',
    // @ts-expect-error
    multiple, customDropdown, selectedTemplate, options, name, panelClassName, onChange, defaultValue, itemTemplate, onHide, onShow, unselectable,
    ...rest
  } = props;
  const classes = classnames(prefixCls);
  const [selected, setSelected] = useState<string | number | readonly string[] | null>(value ?? defaultValue ?? null);
  const [isOpen, setIsOpen] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const selectRef = useRef<Dropdown | MultiSelect | HTMLDivElement | null>(null);
  const _ref = useRef<Dropdown | MultiSelect | HTMLDivElement | null>(null);

  const selectCls = useMemo(() => classes(void 0, [
    classes(size),
    isOpen ? classes('show') : '',
    isFocus ? classes('focus') : '',
    success ? classes('success') : '',
    invalid ? classes('invalid') : '',
    disabled ? classes('disabled') : '',
    customDropdown ? classes('custom') : '',
    (Array.isArray(selected) ? selected.length : selected) ? classes('filled') : '',
    className
  ].join(' ')), [size, isOpen, isFocus, success, selected, invalid, disabled, className, customDropdown]);

  const SelectComponent = useCallback(
    (props: MultiSelectProps & DropdownProps) => multiple
      ? <MultiSelect
        unselectable={unselectable}
        showSelectAll={false}
        checkboxIcon={<Icons name='check' size={12} color='#FEFEFE' />}
        removeIcon={props => {
          const { onClick, onKeyDown, tabIndex } = props.iconProps;
          return <Icons
            name='close'
            size={16}
            color='#131313'
            tabIndex={tabIndex}
            wrapperCls={classes('token-remove-icon')}
            onClick={onClick}
            onKeyDown={onKeyDown}
          />;
        }}
        panelHeaderTemplate={options => {
          const { filterElement, onChange, onCloseClick, props } = options;
          // @ts-ignore
          const selectedNum = props?.metaData?.props?.value?.length ?? 0;
          return <div className={classes('panel-header')}>
            <div className={classes('panel-header-info')}>
              <span className={classes('panel-header-info-count')}>
                {selectedNum} selected
              </span>
              <span
                className={classes('panel-header-info-clear')}
                onClick={e => {
                  // @ts-ignore
                  props.resetFilter();
                  setSelected(null);
                }}
              >
                <Icons name='close' size={16} color='#AE0000' wrapperCls={classes('panel-header-info-clear-icon')} />
                Clear all
              </span>
            </div>
            {filterElement?.props?.children}
          </div>;
        }}
        {...(props as MultiSelectProps)}
      />
      : <Dropdown
        collapseIcon={multiple ? void 0 : () => <Icons name='chevronUp' color='#131313' size={20} />}
        {...(props as DropdownProps)}
      />
    , [multiple]
  );

  useEffect(() => {
    if (value !== undefined && !isEqual(selected, value)) {
      setSelected(value);
    }
  }, [value]);

  useEffect(() => {
    if (!customDropdown) return;
    const removeFocus = () => {
      setIsFocus(false);
    };
    document.addEventListener('click', removeFocus);
    return () => {
      document.removeEventListener('click', removeFocus);
    };
  }, []);

  useImperativeHandle(ref ?? _ref, () => selectRef.current!);

  return (
    <div className={classes('wrapper', wrapperCls)}>
      {label && <span className={classes('label', [required && classes('label-required'), labelCls].join(' '))}>{label}</span>}
      {customDropdown
        ? <div className={selectCls} tabIndex={0} onClick={(e) => {
          setIsFocus(prev => !prev);
          e.stopPropagation();
          props.onClick?.(e);
        }}>
          {selectedTemplate ? selectedTemplate : <span className={classes('custom-placeholder')}>{placeholder}</span>}
          <Icons name={isFocus ? 'chevronUp' : 'chevronDown'} color='#131313' size={20} />
        </div>
        : <SelectComponent
          {...rest as any}
          ref={selectRef}
          name={name}
          filterPlaceholder='Search'
          required={required}
          disabled={disabled}
          invalid={invalid}
          options={options}
          value={selected == null ? undefined : selected}
          className={selectCls}
          itemTemplate={(option) => {
            return <div className={classes('panel-item')}
              onClick={() => {
                if (!multiple && unselectable === 'on' && option.value === selected) {
                  (selectRef.current as Dropdown)?.clear();
                }
              }}
            >
              <div className={classes('panel-item-label')}>
                {itemTemplate ? itemTemplate(option) : option.label}
              </div>
              <Icons name='check' size={16} color='#073387' />
            </div>;
          }}
          filterIcon={<Icons name='search' size={20} color='#131313' wrapperCls={classes('filter-icon')} />}
          panelClassName={classes('panel', panelClassName)}
          onChange={(e) => {
            setSelected(e.value);
            // @ts-ignore
            onChange?.(e);
          }}
          onHide={() => {
            setIsOpen(false);
            onHide?.();
          }}
          onShow={() => {
            setIsOpen(true);
            onShow?.();
          }}
          dropdownIcon={() => <Icons name='chevronDown' color='#131313' size={20} />}
        />
      }
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
