import { memo } from 'react';
import { Checkbox as PrimeCheckbox, type CheckboxChangeEvent } from 'primereact/checkbox';
import { default as classnames, joinCls } from '@/utils/classnames';
import useControlledState from '../useControlledState';
import useEventCallback from '../useEventCallback';
/* import types */
import type { FC, ReactElement, ReactNode } from 'react';
import type { CheckboxBaseProps, CheckboxNormalProps, CheckboxProps, CheckboxTriStateProps } from './interface';

const SIZE_CLASS_PREFIX = 'ckb';
const LABEL_WRAP_CLASS_SUFFIX = 'label-wrap';
const TRISTATE_FALSE_CLASS_SUFFIX = 'inner-checkbox-false';
const CHECKBOX_LAYOUT_KEYS = [
  'wrapperCls',
  'innerCls',
  'checkboxCls',
  'labelCls',
  'prefixCls',
  'size',
  'label',
] as const;
type CheckboxPrimeRestProps = Omit<CheckboxBaseProps, (typeof CHECKBOX_LAYOUT_KEYS)[number]>;

const getNextTriStateValue = (currentValue: boolean | null): boolean | null => {
  if (currentValue === null) return true;
  if (currentValue === true) return false;
  return null;
};

const isTextLikeLabel = (content: ReactNode): content is string | number => {
  return typeof content === 'string' || typeof content === 'number';
};

const stripVariantProps = (input: object): CheckboxPrimeRestProps => {
  const normalizedInput = input as Record<string, unknown>;
  const {
    tristate: _tristate,
    onChange: _onChange,
    wrapperCls: _wrapperCls,
    innerCls: _innerCls,
    checkboxCls: _checkboxCls,
    labelCls: _labelCls,
    prefixCls: _prefixCls,
    size: _size,
    label: _label,
    checked: _checked,
    defaultChecked: _defaultChecked,
    value: _value,
    defaultValue: _defaultValue,
    ...rest
  } = normalizedInput;
  return rest as CheckboxPrimeRestProps;
};

export const Checkbox: FC<CheckboxProps> = props => {
  const {
    tristate,
    wrapperCls,
    innerCls,
    checkboxCls,
    labelCls,
    prefixCls = 'checkbox',
    size = 'md',
    label,
    disabled,
    required,
  } = props;

  const classes = classnames(prefixCls);
  const sizeClass = `${SIZE_CLASS_PREFIX}-${size}`;

  const renderWithContainer = (checkbox: ReactElement) => <div className={classes('wrapper', wrapperCls)}>
    <div className={joinCls(classes('inner', innerCls), sizeClass)}>
      {checkbox}
    </div>
  </div>;

  const wrapWithLabel = (checkbox: ReactElement) => {
    if (label === undefined || label === null || label === false) return checkbox;
    if (isTextLikeLabel(label)) {
      return <label className={labelCls}>
        {checkbox}
        {label}
      </label>;
    }
    return <div className={joinCls(classes(LABEL_WRAP_CLASS_SUFFIX), labelCls)}>
      {checkbox}
      {label}
    </div>;
  };

  if (tristate) {
    const { value: valueProp, defaultValue = null, onChange: onTriChange } = props as CheckboxTriStateProps;
    const [value, setValue] = useControlledState(defaultValue, valueProp);
    const triRest = stripVariantProps(props);

    const handleChange = useEventCallback((_e: CheckboxChangeEvent) => {
      if (disabled) return;
      const nextValue = getNextTriStateValue(value);
      setValue(nextValue);
      onTriChange?.(nextValue);
    });

    return renderWithContainer(
      wrapWithLabel(
        <PrimeCheckbox
          {...triRest}
          checked={value === true}
          aria-checked={value === null ? 'mixed' : value}
          required={required}
          disabled={disabled}
          className={joinCls(
            classes('inner-checkbox', checkboxCls),
            value === false && classes(TRISTATE_FALSE_CLASS_SUFFIX),
          )}
          icon={<i className="pi pi-check" />}
          onChange={handleChange}
        />
      )
    );
  }

  const { checked: checkedProp, defaultChecked = false, onChange: onNormalChange } = props as CheckboxNormalProps;
  const [checked, setChecked] = useControlledState(defaultChecked, checkedProp);
  const normalRest = stripVariantProps(props);

  const handleChange = useEventCallback((e: CheckboxChangeEvent) => {
    if (disabled) return;
    setChecked(!!e.checked);
    onNormalChange?.(!!e.checked);
  });

  return renderWithContainer(
    wrapWithLabel(
      <PrimeCheckbox
        {...normalRest}
        required={required}
        disabled={disabled}
        checked={checked}
        className={classes('inner-checkbox', checkboxCls)}
        icon={<i className="pi pi-check" />}
        onChange={handleChange}
      />
    )
  );
};

export default memo(Checkbox);
