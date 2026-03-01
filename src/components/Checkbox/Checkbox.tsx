import { memo } from 'react';
import { Checkbox as PrimeCheckbox, type CheckboxChangeEvent } from 'primereact/checkbox';
import { default as classnames, joinCls } from '@/utils/classnames';
import useControlledState from '../useControlledState';
import useEventCallback from '../useEventCallback';
/* import types */
import type { FC, ReactElement, ReactNode } from 'react';
import type { CheckboxNormalProps, CheckboxProps, CheckboxTriStateProps } from './interface';

const SIZE_CLASS_PREFIX = 'ckb';
const LABEL_WRAP_CLASS_SUFFIX = 'label-wrap';
const TRISTATE_FALSE_CLASS_SUFFIX = 'inner-checkbox-false';

type ClassNamesFn = ReturnType<typeof classnames>;

const getNextTriStateValue = (currentValue: boolean | null): boolean | null => {
  if (currentValue === null) return true;
  if (currentValue === true) return false;
  return null;
};

const isTextLikeLabel = (content: ReactNode): content is string | number => {
  return typeof content === 'string' || typeof content === 'number';
};

const renderWithContainer = (
  checkbox: ReactElement,
  classes: ClassNamesFn,
  wrapperCls: string | undefined,
  innerCls: string | undefined,
  sizeClass: string,
): ReactElement => (
  <div className={classes('wrapper', wrapperCls)}>
    <div className={joinCls(classes('inner', innerCls), sizeClass)}>
      {checkbox}
    </div>
  </div>
);

const wrapWithLabel = (
  checkbox: ReactElement,
  label: ReactNode,
  labelCls: string | undefined,
  classes: ClassNamesFn,
): ReactElement => {
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

const CheckboxNormal: FC<CheckboxNormalProps> = ({
  wrapperCls,
  innerCls,
  checkboxCls,
  labelCls,
  prefixCls = 'checkbox',
  size = 'md',
  label,
  disabled,
  required,
  checked: checkedProp,
  defaultChecked = false,
  onChange,
  tristate: _tristate,
  ...restProps
}) => {
  const classes = classnames(prefixCls);
  const sizeClass = `${SIZE_CLASS_PREFIX}-${size}`;

  const [checked, setChecked] = useControlledState(defaultChecked, checkedProp);

  const handleChange = useEventCallback((e: CheckboxChangeEvent) => {
    if (disabled) return;
    setChecked(!!e.checked);
    onChange?.(!!e.checked);
  });

  return renderWithContainer(
    wrapWithLabel(
      <PrimeCheckbox
        {...restProps}
        required={required}
        disabled={disabled}
        checked={checked}
        className={classes('inner-checkbox', checkboxCls)}
        icon={<i className="pi pi-check" />}
        onChange={handleChange}
      />,
      label,
      labelCls,
      classes,
    ),
    classes,
    wrapperCls,
    innerCls,
    sizeClass,
  );
};

const CheckboxTriState: FC<CheckboxTriStateProps> = ({
  wrapperCls,
  innerCls,
  checkboxCls,
  labelCls,
  prefixCls = 'checkbox',
  size = 'md',
  label,
  disabled,
  required,
  value: valueProp,
  defaultValue = null,
  onChange,
  tristate: _tristate,
  ...restProps
}) => {
  const classes = classnames(prefixCls);
  const sizeClass = `${SIZE_CLASS_PREFIX}-${size}`;

  const [value, setValue] = useControlledState(defaultValue, valueProp);

  const handleChange = useEventCallback((_e: CheckboxChangeEvent) => {
    if (disabled) return;
    const nextValue = getNextTriStateValue(value);
    setValue(nextValue);
    onChange?.(nextValue);
  });

  return renderWithContainer(
    wrapWithLabel(
      <PrimeCheckbox
        {...restProps}
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
      />,
      label,
      labelCls,
      classes,
    ),
    classes,
    wrapperCls,
    innerCls,
    sizeClass,
  );
};

export const Checkbox: FC<CheckboxProps> = props => {
  if (props.tristate) {
    return <CheckboxTriState {...props} />;
  }
  return <CheckboxNormal {...props} />;
};

export default memo(Checkbox);
