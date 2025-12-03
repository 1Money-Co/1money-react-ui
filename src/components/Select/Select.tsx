import { memo, useRef, useMemo, useState, useEffect, useCallback, useImperativeHandle } from 'react';
import isEqual from 'lodash.isequal';
import debounce from 'lodash.debounce';
import { Dropdown, type DropdownProps } from 'primereact/dropdown';
import { MultiSelect, type MultiSelectProps } from 'primereact/multiselect';
import { Skeleton } from 'primereact/skeleton';
import { default as classnames, joinCls } from '@/utils/classnames';
import { Icons } from '../Icons';
import { Spinner } from '../Spinner';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { SelectProps, CustomDropdownProps } from './interface';

const SelectWrapper: FC<PropsWithChildren<Pick<SelectProps, 'message' | 'label' | 'required' | 'prefixCls' | 'wrapperCls' | 'labelCls' | 'messageCls' | 'success' | 'invalid' | 'disabled' | 'loading'>>> = memo(props => {
  const {
    label,
    message,
    required,
    prefixCls,
    wrapperCls,
    labelCls,
    messageCls,
    success,
    invalid,
    disabled,
    loading,
    children,
  } = props;
  const classes = classnames(prefixCls);

  return <div className={classes('wrapper', wrapperCls)}>
    {
      label ?
        loading
          ? <Skeleton width='72px' height='18px' className={classes('label-loading')} />
          : <span className={classes('label', joinCls(required && classes('label-required'), labelCls))}>{label}</span>
        : null
    }
    {children}
    {
      message && <span
        className={classes('message', joinCls(
          success && classes('message-success'),
          invalid && classes('message-error'),
          messageCls
        ))}
      >
        {message}
      </span>
    }
  </div>;
});

const CustomDropdown: FC<PropsWithChildren<CustomDropdownProps>> = props => {
  const {
    ref,
    dataId,
    label,
    message,
    required,
    prefixCls = 'select',
    wrapperCls,
    labelCls,
    messageCls,
    size = 'large',
    success,
    invalid,
    disabled,
    editable,
    placeholder = '',
    className = '',
    selectedTemplate,
    tailTemplate,
    onClick,
    onFocus,
    onBlur,
  } = props;
  const classes = classnames(prefixCls);

  const isClickInside = useRef(false);
  const dataIdRef = useRef(dataId);
  const lastFocusRef = useRef(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);

  const selectCls = useMemo(() => classes(void 0, joinCls(
    classes(size),
    classes('custom'),
    isFocus && classes('focus'),
    success && classes('success'),
    invalid && classes('invalid'),
    disabled && classes('disabled'),
    editable && classes('editable'),
    className
  )), [size, isFocus, success, invalid, disabled, editable, className]);

  useImperativeHandle(ref, () => ({
    focus: () => setIsFocus(true),
    blur: () => setIsFocus(false),
    getDOMNode: () => selectRef.current
  }), [ref]);

  useEffect(() => {
    dataIdRef.current = dataId;
  }, [dataId]);

  useEffect(() => {
    if (isFocus !== lastFocusRef.current) {
      lastFocusRef.current = isFocus;
      if (isFocus) {
        onFocus?.();
      } else {
        onBlur?.();
      }
    }
  }, [isFocus, onFocus, onBlur]);

  useEffect(() => {
    const findCustomDropdownDataId = (target: EventTarget | null) => {
      if (!dataIdRef.current) return false;
      if ((target as HTMLElement)?.dataset?.selectCustomDropdownId === dataIdRef.current) return true;
      if (target === document.body || target === document) return false;
      const parent = (target as Node).parentNode || (target as Element).parentElement;
      if (!parent) return false;
      return findCustomDropdownDataId(parent);
    };
    const removeFocus = (e: MouseEvent) => {
      if (isClickInside.current) {
        isClickInside.current = false;
        return;
      }
      setIsFocus(prev => {
        if (!prev) return false;
        return findCustomDropdownDataId(e.target);
      });
    };
    document.addEventListener('click', removeFocus);
    return () => {
      document.removeEventListener('click', removeFocus);
    };
  }, []);

  return <SelectWrapper
    label={label}
    message={message}
    required={required}
    prefixCls={prefixCls}
    wrapperCls={wrapperCls}
    labelCls={labelCls}
    messageCls={messageCls}
    success={success}
    invalid={invalid}
    disabled={disabled}
  >
    <div
      ref={selectRef}
      className={selectCls}
      contentEditable={!disabled ? editable : false}
      autoFocus={editable}
      data-placeholder={placeholder}
      data-value={value}
      onClick={(e) => {
        if (disabled) return;
        if (!editable) {
          isClickInside.current = true;
          setIsFocus(prev => !prev);
        }
        onClick?.(e);
      }}
      onInput={e => {
        let val = e.currentTarget.innerText;
        if (val === '\n') {
          val = '';
          e.currentTarget.innerText = '';
        }
        setValue(val);
      }}
    >
      {
        !disabled && editable
          ? null
          : typeof selectedTemplate === 'function'
            ? selectedTemplate(isFocus)
            : <span className={classes('custom-placeholder')}>{placeholder}</span>
      }
      {
        editable
          ? null
          : typeof tailTemplate === 'function'
            ? tailTemplate(isFocus)
            : <Icons name='chevronDown' color='#131313' size={20} wrapperCls={classes('custom-tail', isFocus ? classes('custom-tail-focus') : '')} />
      }
    </div>
  </SelectWrapper>;
};

export const Select: FC<PropsWithChildren<SelectProps>> & { CustomDropdown: typeof CustomDropdown } = props => {
  const {
    id,
    ref,
    name,
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
    refreshAfterShow = true,
    invalid,
    disabled,
    placeholder,
    className = '',
    multiple,
    options,
    panelClassName,
    defaultValue,
    itemTemplate,
    onChange,
    onHide,
    onShow,
    unselectable,
    loading,
    ...rest
  } = props;
  const classes = classnames(prefixCls);
  const [selected, setSelected] = useState<string | number | readonly string[] | null>(value ?? defaultValue ?? null);
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const selectRef = useRef<Dropdown | MultiSelect | null>(null);
  const _ref = useRef<Dropdown | MultiSelect | null>(null);

  const selectCls = useMemo(() => classes(void 0, joinCls(
    classes(size),
    isOpen && classes('show'),
    success && classes('success'),
    invalid && classes('invalid'),
    disabled && classes('disabled'),
    loading && classes('loading'),
    (Array.isArray(selected) ? !!selected.length : !!selected) && classes('filled'),
    className
  )), [size, isOpen, success, selected, invalid, disabled, loading, className]);

  const debouncedHandleScroll = debounce(() => setIsScrolling(false), 500);

  const refreshDOM = useCallback(() => {
    const ele = selectRef.current?.getOverlay?.();
    if (!ele) return;
    const originZIndex = ele.style.zIndex;
    if (originZIndex != undefined) {
      ele.style.zIndex = `${parseInt(originZIndex) + 1}`;
      setTimeout(() => {
        ele.style.zIndex = originZIndex;
      }, 0);
    }
  }, []);

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
          const { filterElement, props } = options;
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
                  props.updateModel(
                    e,
                    [],
                    []
                  );
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

  // @ts-expect-error
  useImperativeHandle(ref ?? _ref, () => (multiple ? {
    props: selectRef.current?.props!,
    focus: () => selectRef.current?.focus?.(),
    hide: () => selectRef.current?.hide?.(),
    show: () => selectRef.current?.show?.(),
    getElement: () => selectRef.current?.getElement?.(),
    getInput: () => selectRef.current?.getInput?.(),
    getOverlay: () => selectRef.current?.getOverlay?.(),
  } : {
    props: selectRef.current?.props!,
    clear: () => (selectRef.current as Dropdown)?.clear?.(),
    focus: () => selectRef.current?.focus?.(),
    hide: () => selectRef.current?.hide?.(),
    show: () => selectRef.current?.show?.(),
    getElement: () => selectRef.current?.getElement?.(),
    getInput: () => selectRef.current?.getInput?.(),
    getOverlay: () => selectRef.current?.getOverlay?.(),
    getFocusInput: () => (selectRef.current as Dropdown)?.getFocusInput?.(),
    getVirtualScroller: () => (selectRef.current as Dropdown)?.getVirtualScroller?.(),
  }), [multiple]);

  return (
    <SelectWrapper
      label={label}
      message={message}
      required={required}
      prefixCls={prefixCls}
      wrapperCls={wrapperCls}
      labelCls={labelCls}
      messageCls={messageCls}
      success={success}
      invalid={invalid}
      disabled={disabled}
      loading={loading}
    >
      <SelectComponent
        {...(() => {
          const { filterIcon, filter, ...others } = rest as any;
          const extraProps = filter ? { filterIcon: filterIcon ?? <Icons name='search' size={20} color='#131313' wrapperCls={classes('filter-icon')} /> } : null;
          return { ...others, filter, ...(extraProps || {}) };
        })()}
        id={id}
        ref={selectRef}
        name={name}
        loading={loading}
        filterPlaceholder='Search'
        required={required}
        disabled={disabled}
        invalid={invalid}
        options={options}
        placeholder={placeholder}
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
        loadingIcon={<Spinner className={classes('loading-icon')} strokeWidth='4' />}
        panelClassName={classes('panel', joinCls(
          panelClassName,
          isHover && classes('panel-hover'),
          isScrolling && classes('panel-scrolling'),
          rest.appendTo === 'self' && classes('panel-append-self'),
        ))}
        onChange={(e) => {
          setSelected(e.value);
          // @ts-expect-error
          onChange?.(e);
        }}
        onHide={() => {
          setIsOpen(false);
          onHide?.();
        }}
        onShow={() => {
          setIsOpen(true);
          onShow?.();
          if (!refreshAfterShow) return;
          setTimeout(() => refreshDOM(), 0);
        }}
        dropdownIcon={() => <Icons name='chevronDown' color='#131313' size={20} />}
        pt={{
          wrapper: {
            onScroll: () => {
              debouncedHandleScroll.cancel();
              setIsScrolling(true);
              debouncedHandleScroll();
            }
          },
          panel: {
            onMouseEnter: () => setIsHover(true),
            onMouseLeave: () => setIsHover(false),
            onTouchStart: () => setIsHover(true),
            onTouchEnd: () => setIsHover(false),
          }
        }}
      />
    </SelectWrapper>
  );
};

Select.CustomDropdown = CustomDropdown;

export default memo(Select);
