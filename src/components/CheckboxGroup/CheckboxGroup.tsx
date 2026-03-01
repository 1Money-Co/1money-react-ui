import { memo, useMemo } from 'react';
import { Checkbox as PrimeCheckbox } from 'primereact/checkbox';
import { TriStateCheckbox } from 'primereact/tristatecheckbox';
import { default as classnames, joinCls } from '@/utils/classnames';
import useControlledState from '../useControlledState';
import useMemoizedFn from '../useMemoizedFn';
/* import types */
import type { ComponentProps, FC, ReactNode } from 'react';
import type {
  CheckboxGroupProps,
  CheckboxGroupNormalItem,
  CheckboxGroupNormalProps,
  CheckboxGroupTriStateItem,
  CheckboxGroupTriStateProps,
  CheckboxGroupTriStateState,
  CheckboxGroupTriStateValue,
} from './interface';

const SIZE_CLASS_PREFIX = 'ckbg';

const CHECK_ICON = <i className="pi pi-check" />;
const UNCHECK_ICON = <i className="pi pi-minus" />;

type TriStateCheckboxWithInputIdProps = ComponentProps<typeof TriStateCheckbox> & { inputId?: string };
const TriStateCheckboxWithInputId = TriStateCheckbox as unknown as FC<TriStateCheckboxWithInputIdProps>;

const hasLabel = (label: ReactNode) => label !== undefined && label !== null && label !== false;

const getDefaultCheckedKeys = (items: CheckboxGroupNormalItem[]) => items
  .filter(item => item.defaultChecked)
  .map(item => item.key);

const getDefaultTriStateMap = (items: CheckboxGroupTriStateItem[]) => items.reduce<CheckboxGroupTriStateState>(
  (result, item) => {
    result[item.key] = item.defaultValue ?? null;
    return result;
  },
  {},
);

const normalizeCheckedItems = (
  checkedItems: string[],
  items: CheckboxGroupNormalItem[],
): string[] => {
  if (!checkedItems.length || !items.length) return checkedItems;
  const itemKeySet = new Set(items.map(item => item.key));
  return checkedItems.filter(itemKey => itemKeySet.has(itemKey));
};

const normalizeTriStateMap = (
  itemsState: CheckboxGroupTriStateState,
  items: CheckboxGroupTriStateItem[],
): CheckboxGroupTriStateState => items.reduce<CheckboxGroupTriStateState>(
  (result, item) => {
    result[item.key] = itemsState[item.key] ?? item.defaultValue ?? null;
    return result;
  },
  {},
);

const getNextCheckedItems = (checkedItems: string[], itemKey: string, checked: boolean): string[] => {
  if (!checked) {
    return checkedItems.filter(currentKey => currentKey !== itemKey);
  }
  return checkedItems.includes(itemKey) ? checkedItems : [...checkedItems, itemKey];
};

const renderLabel = (
  key: string,
  label: ReactNode,
  labelCls: string | undefined,
  checkboxElement: ReactNode,
  withLabelWrapper: boolean,
) => {
  if (!hasLabel(label)) return checkboxElement;
  return (
    <label htmlFor={key} className={labelCls}>
      {checkboxElement}
      {withLabelWrapper ? <span>{label}</span> : label}
    </label>
  );
};

const CheckboxGroupNormal: FC<CheckboxGroupNormalProps> = ({
  id,
  wrapperCls,
  innerCls,
  checkboxGroupCls,
  labelCls,
  prefixCls = 'checkboxgroup',
  size = 'md',
  items,
  value,
  onChange,
}) => {
  const classes = classnames(prefixCls);
  const sizeClass = `${SIZE_CLASS_PREFIX}-${size}`;
  const itemContainerClassName = joinCls(classes('inner', innerCls), sizeClass);
  const checkboxClassName = classes('inner-checkbox', checkboxGroupCls);

  const defaultCheckedKeys = useMemo(
    () => getDefaultCheckedKeys(items),
    [items],
  );
  const [checkedItems, setCheckedItems] = useControlledState<string[]>(
    defaultCheckedKeys,
    value,
  );
  const resolvedCheckedItems = useMemo(
    () => normalizeCheckedItems(checkedItems, items),
    [checkedItems, items],
  );

  const handleChange = useMemoizedFn((
    itemKey: string,
    itemOnChange: CheckboxGroupNormalItem['onChange'],
    checked: boolean,
  ) => {
    itemOnChange?.(checked);
    const nextCheckedItems = getNextCheckedItems(resolvedCheckedItems, itemKey, checked);
    setCheckedItems(nextCheckedItems);
    onChange?.(nextCheckedItems);
  });

  return (
    <div id={id} className={classes('wrapper', wrapperCls)}>
      {items.map(item => {
        const {
          key,
          required,
          disabled,
          label,
          checked: itemChecked,
          defaultChecked: _defaultChecked,
          onChange: itemOnChange,
          ...checkboxRest
        } = item;

        const checkboxElement = <PrimeCheckbox
          {...checkboxRest}
          inputId={key}
          value={key}
          required={required}
          disabled={disabled}
          checked={itemChecked ?? resolvedCheckedItems.includes(key)}
          className={checkboxClassName}
          icon={CHECK_ICON}
          onChange={event => {
            if (!disabled) {
              handleChange(key, itemOnChange, !!event.checked);
            }
          }}
        />;

        return (
          <div key={key} className={itemContainerClassName}>
            {renderLabel(key, label, labelCls, checkboxElement, false)}
          </div>
        );
      })}
    </div>
  );
};

const CheckboxGroupTriState: FC<CheckboxGroupTriStateProps> = ({
  id,
  wrapperCls,
  innerCls,
  checkboxGroupCls,
  labelCls,
  prefixCls = 'checkboxgroup',
  size = 'md',
  items,
  value,
  onChange,
}) => {
  const classes = classnames(prefixCls);
  const sizeClass = `${SIZE_CLASS_PREFIX}-${size}`;
  const itemContainerClassName = joinCls(classes('inner', innerCls), sizeClass);
  const checkboxClassName = classes('inner-checkbox', checkboxGroupCls);

  const defaultTriStateMap = useMemo<CheckboxGroupTriStateState>(
    () => getDefaultTriStateMap(items),
    [items],
  );
  const [itemsState, setItemsState] = useControlledState<CheckboxGroupTriStateState>(
    defaultTriStateMap,
    value,
  );
  const resolvedItemsState = useMemo(
    () => normalizeTriStateMap(itemsState, items),
    [itemsState, items],
  );

  const handleChange = useMemoizedFn((
    itemKey: string,
    itemOnChange: CheckboxGroupTriStateItem['onChange'],
    nextValue: CheckboxGroupTriStateValue,
  ) => {
    itemOnChange?.(nextValue);
    const nextItemsState = { ...resolvedItemsState, [itemKey]: nextValue };
    setItemsState(nextItemsState);
    onChange?.(nextItemsState);
  });

  return (
    <div id={id} className={classes('wrapper', wrapperCls)}>
      {items.map(item => {
        const {
          key,
          required,
          disabled,
          label,
          defaultValue: _defaultValue,
          onChange: itemOnChange,
          ...checkboxRest
        } = item;

        const checkboxElement = <TriStateCheckboxWithInputId
          {...checkboxRest}
          id={key}
          inputId={key}
          value={resolvedItemsState[key] ?? null}
          required={required}
          disabled={disabled}
          className={checkboxClassName}
          uncheckIcon={UNCHECK_ICON}
          checkIcon={CHECK_ICON}
          onChange={event => {
            if (!disabled) {
              handleChange(key, itemOnChange, event.value ?? null);
            }
          }}
        />;

        return (
          <div key={key} className={itemContainerClassName}>
            {renderLabel(key, label, labelCls, checkboxElement, true)}
          </div>
        );
      })}
    </div>
  );
};

export const CheckboxGroup: FC<CheckboxGroupProps> = props => {
  if (props.tristate) {
    return <CheckboxGroupTriState {...props} />;
  }
  return <CheckboxGroupNormal {...props} />;
};

export default memo(CheckboxGroup);
