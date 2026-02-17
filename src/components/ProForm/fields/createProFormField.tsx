import { useContext } from 'react';
import { FormItem } from '../../Form';
import { Col } from '../../Grid';
import { ProFormContext } from '../ProForm';
import type { ComponentType, ReactNode } from 'react';

const WIDTH_MAP: Record<string, number> = {
  sm: 160,
  md: 240,
  lg: 320,
  xl: 420,
};

const getEventValue = (valuePropName: string, event: any) => {
  if (valuePropName === 'checked') {
    if (typeof event === 'boolean') return event;
    if (event && typeof event === 'object') {
      if ('checked' in event) return event.checked;
      if ('value' in event) return event.value;
      if (event.target && typeof event.target === 'object') {
        if ('checked' in event.target) return event.target.checked;
        if ('value' in event.target) return event.target.value;
      }
    }
    return event;
  }

  if (event && typeof event === 'object') {
    if ('value' in event) return event.value;
    if (event.target && typeof event.target === 'object' && 'value' in event.target) {
      return event.target.value;
    }
  }

  return event;
};

export function createProFormField<FieldProps>(config: {
  component: ComponentType<FieldProps>;
  valuePropName?: string;
  mapProps?: (props: any) => Record<string, any>;
  renderReadonly?: (value: any, props: any) => ReactNode;
}) {
  const { component: Component, valuePropName = 'value', mapProps, renderReadonly } = config;

  const Field = (props: any) => {
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
          if (mergedReadonly) {
            const readonlyValue = renderReadonly
              ? renderReadonly(field?.value, fieldProps as FieldProps)
              : (field?.value ?? '-');
            return <span>{readonlyValue}</span>;
          }

          const mapped = mapProps ? mapProps(rest) : {};
          const nextProps: any = {
            ...mapped,
            ...(fieldProps || {}),
            ...(placeholder !== undefined ? { placeholder } : {}),
            ...(disabled !== undefined ? { disabled } : {}),
            ...(width !== undefined
              ? {
                style: {
                  ...(fieldProps as any)?.style,
                  width: typeof width === 'number' ? width : WIDTH_MAP[width] ?? width,
                },
              }
              : {}),
          };

          if (field?.name) nextProps.name = field.name;
          if (field?.onBlur) nextProps.onBlur = field.onBlur;

          if (field?.value === undefined && valuePropName === 'checked') {
            nextProps[valuePropName] = false;
          } else if (field?.value === undefined && (mapped as any)?.multiple) {
            nextProps[valuePropName] = [];
          } else {
            nextProps[valuePropName] = field?.value;
          }
          nextProps.onChange = (...args: any[]) => {
            const value = getEventValue(valuePropName, args[0]);
            field?.onChange?.(value);
            (fieldProps as any)?.onChange?.(...args);
          };

          const ComponentAny = Component as any;
          return <ComponentAny {...nextProps} />;
        }}
      </FormItem>
    );

    if (ctx?.grid) {
      return <Col span={colProps?.span ?? ctx?.colProps?.span ?? 24}>{node}</Col>;
    }

    return node;
  };

  return Field;
}

export default createProFormField;
