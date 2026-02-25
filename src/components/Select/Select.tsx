import { memo, useRef, useMemo, useState, useEffect, useCallback, useImperativeHandle } from 'react';
import debounce from 'lodash.debounce';
import { Dropdown, type DropdownProps } from 'primereact/dropdown';
import { MultiSelect, type MultiSelectProps } from 'primereact/multiselect';
import { Skeleton } from 'primereact/skeleton';
import { default as classnames, joinCls } from '@/utils/classnames';
import useControlledState from '../useControlledState';
import useEventCallback from '../useEventCallback';
import { Icons } from '../Icons';
import { Spinner } from '../Spinner';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { SelectProps, CustomDropdownProps } from './interface';
import {
  DEFAULT_PREFIX_CLS,
  DEFAULT_SIZE,
  DEFAULT_PLACEHOLDER,
  DEFAULT_CLASSNAME,
  FILTER_PLACEHOLDER,
  DEBOUNCE_SCROLL_DELAY,
  SPINNER_STROKE_WIDTH,
  SKELETON_LABEL_WIDTH,
  SKELETON_LABEL_HEIGHT,
  UNSELECTABLE_ON,
  DATA_ATTR_SELECTOR,
  COLOR_PRIMARY_BLACK,
  COLOR_PRIMARY_BLUE,
  COLOR_NEGATIVE,
  COLOR_WHITE,
  ICON_SIZE_XS,
  ICON_SIZE_SM,
  ICON_SIZE_MD,
} from './constants';

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
          ? <Skeleton width={SKELETON_LABEL_WIDTH} height={SKELETON_LABEL_HEIGHT} className={classes('label-loading')} />
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
    prefixCls = DEFAULT_PREFIX_CLS,
    wrapperCls,
    labelCls,
    messageCls,
    size = DEFAULT_SIZE,
    success,
    invalid,
    disabled,
    editable,
    placeholder = DEFAULT_PLACEHOLDER,
    className = DEFAULT_CLASSNAME,
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
  }), []);

  useEffect(() => {
    dataIdRef.current = dataId;
  }, [dataId]);

  const handleFocus = useEventCallback(() => onFocus?.());
  const handleBlur = useEventCallback(() => onBlur?.());

  useEffect(() => {
    if (isFocus !== lastFocusRef.current) {
      lastFocusRef.current = isFocus;
      if (isFocus) {
        handleFocus();
      } else {
        handleBlur();
      }
    }
  }, [isFocus]);

  useEffect(() => {
    const removeFocus = (e: MouseEvent) => {
      if (isClickInside.current) {
        isClickInside.current = false;
        return;
      }
      setIsFocus(prev => {
        if (!prev) return false;
        if (!dataIdRef.current) return false;
        const target = e.target as Element | null;
        return !!target?.closest?.(`[${DATA_ATTR_SELECTOR}="${dataIdRef.current}"]`);
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
            : <Icons name='chevronDown' color={COLOR_PRIMARY_BLACK} size={ICON_SIZE_MD} wrapperCls={classes('custom-tail', isFocus ? classes('custom-tail-focus') : '')} />
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
    prefixCls = DEFAULT_PREFIX_CLS,
    wrapperCls,
    labelCls,
    messageCls,
    value,
    size = DEFAULT_SIZE,
    success,
    refreshAfterShow = true,
    invalid,
    disabled,
    placeholder,
    className = DEFAULT_CLASSNAME,
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
  const [selected, setSelected] = useControlledState<string | number | readonly string[] | null>(defaultValue ?? null, value);
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const selectRef = useRef<Dropdown | MultiSelect | null>(null);

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

  const debouncedHandleScroll = useMemo(
    () => debounce(() => setIsScrolling(false), DEBOUNCE_SCROLL_DELAY),
    []
  );

  useEffect(() => {
    return () => debouncedHandleScroll.cancel();
  }, [debouncedHandleScroll]);

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

  const filterIconProps = useMemo(() => {
    const { filterIcon, filter, ...others } = rest as any;
    const extraProps = filter ? { filterIcon: filterIcon ?? <Icons name='search' size={ICON_SIZE_MD} color={COLOR_PRIMARY_BLACK} wrapperCls={classes('filter-icon')} /> } : null;
    return { ...others, filter, ...(extraProps || {}) };
  }, [rest.filter, rest.filterIcon]);

  const SelectComponent = useCallback(
    (props: MultiSelectProps & DropdownProps) => multiple
      ? <MultiSelect
        unselectable={unselectable}
        showSelectAll={false}
        checkboxIcon={<Icons name='check' size={ICON_SIZE_XS} color={COLOR_WHITE} />}
        removeIcon={props => {
          const { onClick, onKeyDown, tabIndex } = props.iconProps;
          return <Icons
            name='close'
            size={ICON_SIZE_SM}
            color={COLOR_PRIMARY_BLACK}
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
                <Icons name='close' size={ICON_SIZE_SM} color={COLOR_NEGATIVE} wrapperCls={classes('panel-header-info-clear-icon')} />
                Clear all
              </span>
            </div>
            {filterElement?.props?.children}
          </div>;
        }}
        {...(props as MultiSelectProps)}
      />
      : <Dropdown
        collapseIcon={multiple ? void 0 : () => <Icons name='chevronUp' color={COLOR_PRIMARY_BLACK} size={ICON_SIZE_MD} />}
        {...(props as DropdownProps)}
      />
    , [multiple]
  );

  // @ts-expect-error
  useImperativeHandle(ref, () => (multiple ? {
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

  const handleChange = useEventCallback((e: any) => {
    setSelected(e.value);
    onChange?.(e);
  });

  const handleHide = useEventCallback(() => {
    setIsOpen(false);
    onHide?.();
  });

  const handleShow = useEventCallback(() => {
    setIsOpen(true);
    onShow?.();
    if (!refreshAfterShow) return;
    setTimeout(() => refreshDOM(), 0);
  });

  const handleScroll = useCallback(() => {
    debouncedHandleScroll.cancel();
    setIsScrolling(true);
    debouncedHandleScroll();
  }, [debouncedHandleScroll]);

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
        {...filterIconProps}
        id={id}
        ref={selectRef}
        name={name}
        loading={loading}
        filterPlaceholder={FILTER_PLACEHOLDER}
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
              if (!multiple && unselectable === UNSELECTABLE_ON && option.value === selected) {
                (selectRef.current as Dropdown)?.clear();
              }
            }}
          >
            <div className={classes('panel-item-label')}>
              {itemTemplate ? itemTemplate(option) : option.label}
            </div>
            <Icons name='check' size={ICON_SIZE_SM} color={COLOR_PRIMARY_BLUE} />
          </div>;
        }}
        loadingIcon={<Spinner className={classes('loading-icon')} strokeWidth={SPINNER_STROKE_WIDTH} />}
        panelClassName={classes('panel', joinCls(
          panelClassName,
          isHover && classes('panel-hover'),
          isScrolling && classes('panel-scrolling'),
          rest.appendTo === 'self' && classes('panel-append-self'),
        ))}
        onChange={handleChange}
        onHide={handleHide}
        onShow={handleShow}
        dropdownIcon={() => <Icons name='chevronDown' color={COLOR_PRIMARY_BLACK} size={ICON_SIZE_MD} />}
        pt={{
          wrapper: {
            onScroll: handleScroll
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
