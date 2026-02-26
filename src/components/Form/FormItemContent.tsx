'use client';
import React from 'react';
import { Controller } from 'react-hook-form';
import { default as classnames, joinCls } from '@/utils/classnames';
import { STATUS_ERROR, TRIGGER_BLUR, TRIGGER_CHANGE } from './constants';
import { getStatusProps, resolveStatus } from './helper';
import type { ControllerRenderProps, FieldPath, FieldValues } from 'react-hook-form';
import type { FormContextValue, FormItemContentProps, FormValidateStatus } from './interface';

const classes = classnames('form-item');

/**
 * Clones a React element and injects `react-hook-form` Controller bindings
 * (`value`, `onChange`, `onBlur`, `ref`) while preserving any existing handlers
 * on the child element.
 *
 * For non-DOM (custom) components, status props (`invalid`/`success`) are also spread.
 *
 * @template TFieldValues - The shape of the form values.
 * @param children - The child React node to clone.
 * @param field - Controller field bindings from `react-hook-form`.
 * @param status - The resolved validation status.
 * @param statusProps - Boolean props derived from the status.
 * @param valuePropName - The prop name used to bind the controlled value.
 * @param ctx - Form context value for reading the `disabled` state.
 * @returns The cloned element with injected bindings, or the original node if not a valid element.
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
 * Wraps field content with help text, error messages, and extra content regions.
 *
 * Applies status-based CSS classes to the wrapper and renders the appropriate
 * feedback messages below the field.
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
 * Renders the inner content of a `<FormItem>`.
 *
 * Handles two branches:
 * - **Free branch** (no `name`): renders children directly or via a render-prop,
 *   optionally gated by `shouldUpdate`.
 * - **Controlled branch** (has `name`): wraps children in a `react-hook-form`
 *   `Controller`, injecting field bindings and validation-trigger wrappers.
 *
 * Both branches render their output inside a {@link MetaWrapper} for consistent
 * help/error/extra display.
 *
 * @template TFieldValues - The shape of the form values.
 * @param props - {@link FormItemContentProps}
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
