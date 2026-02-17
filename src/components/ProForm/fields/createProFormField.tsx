import { useContext } from 'react';
import { FormItem } from '../../Form';
import { Col } from '../../Grid';
import { ProFormContext } from '../ProForm';
import { DEFAULT_COL_SPAN, WIDTH_SIZE_MAP } from '../constants';
import type { ComponentType, ReactNode } from 'react';
import type { ProFormFieldProps } from '../interface';
import type { UnknownRecord } from '../utils';

const TEXT_LIKE_INPUT_TYPES = new Set(['text', 'password', 'textarea', 'mask', 'otp', 'autocomplete']);

const getEventValue = (valuePropName: string, event: unknown) => {
  if (valuePropName === 'checked') {
    if (typeof event === 'boolean') return event;
    if (event && typeof event === 'object') {
      const eventRecord = event as UnknownRecord;
      if ('checked' in eventRecord) return eventRecord.checked;
      if ('value' in eventRecord) return eventRecord.value;
      if (eventRecord.target && typeof eventRecord.target === 'object') {
        const targetRecord = eventRecord.target as UnknownRecord;
        if ('checked' in targetRecord) return targetRecord.checked;
        if ('value' in targetRecord) return targetRecord.value;
      }
    }
    return event;
  }

  if (event && typeof event === 'object') {
    const eventRecord = event as UnknownRecord;
    if ('value' in eventRecord) return eventRecord.value;
    if (eventRecord.target && typeof eventRecord.target === 'object' && 'value' in (eventRecord.target as UnknownRecord)) {
      return (eventRecord.target as UnknownRecord).value;
    }
  }

  return event;
};

const normalizeFieldValue = (
  value: unknown,
  valuePropName: string,
  inputType: unknown,
  isMultiple: boolean,
) => {
  if (value !== undefined) return value;
  if (valuePropName === 'checked') return false;
  if (isMultiple) return [];
  if (inputType === 'number') return null;
  if (typeof inputType === 'string' && TEXT_LIKE_INPUT_TYPES.has(inputType)) return '';
  return null;
};

interface CreateProFormFieldConfig<FieldProps> {
  component: ComponentType<FieldProps>;
  valuePropName?: string;
  mapProps?: (props: UnknownRecord) => UnknownRecord;
  renderReadonly?: (value: unknown, props: Partial<FieldProps> | undefined) => unknown;
}

type ProFormFieldComponentProps<FieldProps> = ProFormFieldProps<FieldProps> & UnknownRecord;

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

    if (hidden) return null;

    const node = (
      <FormItem
        name={name}
        label={label}
        rules={rules}
        required={required}
        help={help}
        extra={extra}
        dependencies={dependencies}
        validateTrigger={validateTrigger}
        labelCol={labelCol}
        wrapperCol={wrapperCol}
        noStyle={noStyle}
        valuePropName={valuePropName}
      >
        {({ field }) => {
          const currentFieldProps = (fieldProps ?? {}) as Partial<FieldProps> & UnknownRecord;
          if (mergedReadonly) {
            const readonlyValue = renderReadonly
              ? renderReadonly(field?.value, fieldProps as Partial<FieldProps> | undefined)
              : (field?.value ?? '-');
            return <span>{readonlyValue as ReactNode}</span>;
          }

          const mapped = mapProps ? mapProps(rest as UnknownRecord) : {};
          const inputType = mapped.type ?? currentFieldProps.type;
          const isMultiple = Boolean(mapped.multiple);
          const nextProps: UnknownRecord = {
            ...mapped,
            ...currentFieldProps,
            ...(placeholder !== undefined ? { placeholder } : {}),
            ...(disabled !== undefined ? { disabled } : {}),
            ...(width !== undefined
              ? {
                style: {
                  ...((currentFieldProps.style as UnknownRecord | undefined) || {}),
                  width: typeof width === 'number' ? width : WIDTH_SIZE_MAP[width] ?? width,
                },
              }
              : {}),
          };

          if (field?.name) nextProps.name = field.name;
          if ((field as UnknownRecord)?.invalid !== undefined) nextProps.invalid = (field as UnknownRecord).invalid;
          if ((field as UnknownRecord)?.success !== undefined) nextProps.success = (field as UnknownRecord).success;
          nextProps.onBlur = (...args: unknown[]) => {
            field?.onBlur?.();
            (currentFieldProps.onBlur as ((...eventArgs: unknown[]) => void) | undefined)?.(...args);
          };

          nextProps[valuePropName] = normalizeFieldValue(field?.value, valuePropName, inputType, isMultiple);
          nextProps.onChange = (...args: unknown[]) => {
            const value = getEventValue(valuePropName, args[0]);
            field?.onChange?.(value);
            (currentFieldProps.onChange as ((...eventArgs: unknown[]) => void) | undefined)?.(...args);
          };

          return <FieldComponent {...nextProps} />;
        }}
      </FormItem>
    );

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
