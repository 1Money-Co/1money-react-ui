import React from 'react';
import { Controller } from 'react-hook-form';
import { default as classnames, joinCls } from '@/utils/classnames';
import { STATUS_ERROR, TRIGGER_BLUR, TRIGGER_CHANGE } from './constants';
import { getStatusProps, resolveStatus } from './helper';
import type {
  ControllerRenderProps,
  FieldPath,
  FieldValues,
  UseFormReturn,
} from 'react-hook-form';
import type { FormContextValue, FormItemProps, FormItemRenderFn, FormItemRules, FormValidateStatus } from './interface';

interface FormItemContentProps<TFieldValues extends FieldValues> {
  name?: FieldPath<TFieldValues>;
  control: UseFormReturn<TFieldValues>['control'];
  methods: UseFormReturn<TFieldValues>;
  rules?: FormItemRules<TFieldValues>;
  defaultValue?: FormItemProps<TFieldValues>['defaultValue'];
  validateStatus?: FormValidateStatus;
  valuePropName: string;
  help?: React.ReactNode;
  extra?: React.ReactNode;
  ctx: FormContextValue | null;
  children: FormItemProps<TFieldValues>['children'];
  renderFn: FormItemRenderFn<TFieldValues> | null;
  allValues: TFieldValues;
  shouldUpdate?: FormItemProps<TFieldValues>['shouldUpdate'];
  shouldRender: boolean;
  withTrigger: (
    mode: typeof TRIGGER_CHANGE | typeof TRIGGER_BLUR,
    fn?: (...args: unknown[]) => void
  ) => (...args: unknown[]) => void;
}

const classes = classnames('form-item');

/**
 * Stateless element-cloning helper — injects RHF bindings while
 * preserving user handlers.
 */
function cloneChildElement<TFieldValues extends FieldValues>(
  children: React.ReactNode,
  field: ControllerRenderProps<TFieldValues, FieldPath<TFieldValues>>,
  status: FormValidateStatus | undefined,
  statusProps: ReturnType<typeof getStatusProps>,
  valuePropName: string,
  ctx: FormContextValue | null
): React.ReactNode {
  if (!React.isValidElement(children)) return children;
  const childElement = children as React.ReactElement<Record<string, unknown>>;
  const isDomElement = typeof childElement.type === 'string';
  const childOnChange = childElement.props?.onChange as ((...args: unknown[]) => void) | undefined;
  const childOnBlur = childElement.props?.onBlur as ((...args: unknown[]) => void) | undefined;

  return React.cloneElement(childElement, {
    [valuePropName]: field.value,
    onChange: (...args: unknown[]) => {
      field.onChange(...args);
      childOnChange?.(...args);
    },
    onBlur: (...args: unknown[]) => {
      field.onBlur();
      childOnBlur?.(...args);
    },
    disabled: ctx?.disabled || (childElement.props?.disabled as boolean),
    'aria-invalid': status === STATUS_ERROR || undefined,
    ref: field.ref,
    ...(isDomElement ? {} : statusProps),
  });
}

/**
 * Wraps field content with help/error/extra metadata region.
 */
function MetaWrapper({
  content,
  status,
  errorMessage,
  help,
  extra,
  disabled,
}: {
  content: React.ReactNode;
  status?: FormValidateStatus;
  errorMessage?: React.ReactNode;
  help?: React.ReactNode;
  extra?: React.ReactNode;
  disabled?: boolean;
}) {
  return (
    <div
      className={classes('content', joinCls(
        status && classes(`content-${status}`),
        disabled && classes('content-disabled')
      ))}
    >
      {content}
      {errorMessage && !help && (
        <div className={classes('help', classes('help-error'))}>{errorMessage}</div>
      )}
      {help && (
        <div className={classes('help', joinCls(status && classes(`help-${status}`)))}>{help}</div>
      )}
      {extra && <div className={classes('extra')}>{extra}</div>}
    </div>
  );
}

/**
 * Renders the content portion of a FormItem: either a Controller-bound
 * field or free (uncontrolled) children.
 */
export function FormItemContent<TFieldValues extends FieldValues = FieldValues>({
  name,
  control,
  methods,
  rules,
  defaultValue,
  validateStatus,
  valuePropName,
  help,
  extra,
  ctx,
  children,
  renderFn,
  allValues,
  shouldUpdate,
  shouldRender,
  withTrigger,
}: FormItemContentProps<TFieldValues>) {
  // --- Free child branch (no name) ---
  if (!name) {
    const freeContent = renderFn
      ? (shouldUpdate && !shouldRender ? null : renderFn({ form: methods, values: allValues }))
      : (children as React.ReactNode);

    return (
      <MetaWrapper
        content={freeContent}
        status={resolveStatus(validateStatus)}
        help={help}
        extra={extra}
        disabled={ctx?.disabled}
      />
    );
  }

  // --- Controlled field branch (has name) ---
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field, fieldState }) => {
        const status = resolveStatus(validateStatus, fieldState);
        const statusProps = getStatusProps(status);
        const patchedField = {
          ...field,
          onChange: withTrigger(TRIGGER_CHANGE, field.onChange),
          onBlur: withTrigger(TRIGGER_BLUR, field.onBlur),
          ...statusProps,
        };

        const content = renderFn
          ? renderFn({ field: patchedField, fieldState, form: methods, values: allValues })
          : cloneChildElement(children as React.ReactNode, patchedField, status, statusProps, valuePropName, ctx);

        return (
          <MetaWrapper
            content={content}
            status={status}
            errorMessage={fieldState.error?.message}
            help={help}
            extra={extra}
            disabled={ctx?.disabled}
          />
        );
      }}
    />
  );
}
