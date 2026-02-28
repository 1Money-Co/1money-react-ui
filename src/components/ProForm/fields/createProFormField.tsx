import { useContext } from 'react';
import useMemoizedFn from '../../useMemoizedFn';
import { FormItem } from '../../Form';
import { Col } from '../../Grid';
import { ProFormContext } from '../ProForm';
import { DEFAULT_COL_SPAN, WIDTH_SIZE_MAP } from '../constants';
import type { ComponentType, CSSProperties, ReactNode } from 'react';
import type { ProFormFieldProps } from '../interface';
import type { UnknownRecord } from '../utils';

/** Input types that default to an empty string when no value is present. */
const TEXT_LIKE_INPUT_TYPES = new Set(['text', 'password', 'textarea', 'mask', 'otp', 'autocomplete']);

/**
 * Safely reads a named property from an unknown object or its nested `target`.
 * Returns `undefined` when the property is not found at either level.
 */
const readProp = (obj: unknown, prop: string): unknown => {
  if (!obj || typeof obj !== 'object') return undefined;
  const record = obj as UnknownRecord;
  if (prop in record) return record[prop];
  if (record.target && typeof record.target === 'object' && prop in (record.target as UnknownRecord)) {
    return (record.target as UnknownRecord)[prop];
  }
  return undefined;
};

/**
 * Extracts the underlying value from a change event or raw value,
 * handling both synthetic React events and plain values.
 */
const getEventValue = (valuePropName: string, event: unknown): unknown => {
  if (valuePropName === 'checked') {
    if (typeof event === 'boolean') return event;
    return readProp(event, 'checked') ?? readProp(event, 'value') ?? event;
  }
  return readProp(event, 'value') ?? event;
};

/**
 * Returns a sensible default when the field value is `undefined`,
 * based on the value prop name, input type, and multi-select mode.
 */
const normalizeFieldValue = (
  value: unknown,
  valuePropName: string,
  inputType: unknown,
  isMultiple: boolean,
): unknown => {
  if (value !== undefined) return value;
  if (valuePropName === 'checked') return false;
  if (isMultiple) return [];
  if (inputType === 'number') return null;
  if (typeof inputType === 'string' && TEXT_LIKE_INPUT_TYPES.has(inputType)) return '';
  return null;
};

/** Resolves a width preset name or number into a CSS-compatible pixel value. */
const resolveWidth = (width: string | number): string | number =>
  typeof width === 'number' ? width : WIDTH_SIZE_MAP[width] ?? width;

/** Returns an object containing only the entries whose values are not `undefined`. */
const pickDefined = <T extends UnknownRecord>(obj: T): Partial<T> =>
  Object.fromEntries(Object.entries(obj).filter(([, v]) => v !== undefined)) as Partial<T>;

/** Composes two optional callbacks so both are invoked in order. */
const chainFn = (
  first: ((...args: unknown[]) => void) | undefined,
  second: ((...args: unknown[]) => void) | undefined,
): ((...args: unknown[]) => void) | undefined => {
  if (!first && !second) return undefined;
  if (!first) return second;
  if (!second) return first;

  return (...args: unknown[]) => {
    first(...args);
    second(...args);
  };
};

/**
 * Configuration for {@link createProFormField}.
 *
 * @typeParam FieldProps - The props interface of the underlying input component.
 */
interface CreateProFormFieldConfig<FieldProps> {
  /** The underlying input component to wrap. */
  component: ComponentType<FieldProps>;
  /** The prop name used to bind the controlled value. @default 'value' */
  valuePropName?: string;
  /** Maps extra rest-props into component-specific props. */
  mapProps?: (props: UnknownRecord) => UnknownRecord;
  /** Renders the field value as plain text when `readonly` is `true`. */
  renderReadonly?: (value: unknown, props: Partial<FieldProps> | undefined) => unknown;
}

type ProFormFieldComponentProps<FieldProps> = ProFormFieldProps<FieldProps> & UnknownRecord;

/**
 * Factory that wraps an input component into a ProForm-compatible field.
 *
 * The returned component integrates with `react-hook-form` via `<FormItem>`,
 * supports grid layout, readonly rendering, and width presets.
 *
 * @typeParam FieldProps - The props interface of the underlying input component.
 * @param config - The field configuration.
 * @returns A React component accepting {@link ProFormFieldProps} plus the underlying field props.
 *
 * @example
 * ```tsx
 * const ProFormText = createProFormField({
 *   component: Input,
 *   mapProps: () => ({ type: 'text' }),
 *   renderReadonly: renderTextReadonly,
 * });
 * ```
 */
export function createProFormField<FieldProps>(config: CreateProFormFieldConfig<FieldProps>) {
  const { component: Component, valuePropName = 'value', mapProps, renderReadonly } = config;
  const FieldComponent = Component as ComponentType<UnknownRecord>;

  const Field = (props: ProFormFieldComponentProps<FieldProps>) => {
    const {
      name,
      label,
      rules,
      required,
      help,
      extra,
      dependencies,
      validateTrigger,
      labelCol,
      wrapperCol,
      noStyle,
      readonly,
      hidden,
      colProps,
      fieldProps,
      placeholder,
      disabled,
      width,
      ...rest
    } = props;

    const ctx = useContext(ProFormContext);
    const mergedReadonly = readonly ?? ctx?.readonly;

    const formItemProps = {
      name, label, rules, required, help, extra,
      dependencies, validateTrigger, labelCol, wrapperCol, noStyle, valuePropName,
    };

    const renderField = useMemoizedFn(({ field }: { field?: UnknownRecord }): ReactNode => {
      const currentFieldProps = (fieldProps ?? {}) as Partial<FieldProps> & UnknownRecord;

      if (mergedReadonly) {
        const readonlyValue = renderReadonly
          ? renderReadonly(field?.value, fieldProps as Partial<FieldProps> | undefined)
          : (field?.value ?? '-');
        return <span>{readonlyValue as ReactNode}</span>;
      }

      const mapped = mapProps ? mapProps(rest as UnknownRecord) : {};
      const inputType = mapped.type ?? currentFieldProps.type;
      const multiple = mapped.multiple ?? currentFieldProps.multiple ?? (fieldProps as UnknownRecord | undefined)?.multiple;
      const isMultiple = Boolean(multiple);
      const formOnBlur = field?.onBlur as (() => void) | undefined;

      const widthStyle: CSSProperties | undefined = width !== undefined
        ? { ...(currentFieldProps.style as CSSProperties | undefined), width: resolveWidth(width) }
        : undefined;

      const nextProps: UnknownRecord = {
        ...mapped,
        ...currentFieldProps,
        ...pickDefined({ placeholder, disabled, name: field?.name, invalid: field?.invalid, success: field?.success }),
        ...(widthStyle ? { style: widthStyle } : {}),
        [valuePropName]: normalizeFieldValue(field?.value, valuePropName, inputType, isMultiple),
        onBlur: chainFn(
          formOnBlur ? () => formOnBlur() : undefined,
          currentFieldProps.onBlur as ((...args: unknown[]) => void) | undefined,
        ),
        onChange: (...args: unknown[]) => {
          (field?.onChange as ((v: unknown) => void) | undefined)?.(getEventValue(valuePropName, args[0]));
          (currentFieldProps.onChange as ((...args: unknown[]) => void) | undefined)?.(...args);
        },
      };

      return <FieldComponent {...nextProps} />;
    });

    if (hidden) return null;

    const node = <FormItem {...formItemProps}>{renderField}</FormItem>;

    if (ctx?.grid) {
      return <Col span={colProps?.span ?? ctx?.colProps?.span ?? DEFAULT_COL_SPAN}>{node}</Col>;
    }

    return node;
  };

  const componentMeta = Component as ComponentType<FieldProps> & { displayName?: string; name?: string };
  Field.displayName = `ProFormField(${componentMeta.displayName || componentMeta.name || 'Unknown'})`;

  return Field;
}

export default createProFormField;
