import React, { createContext, useEffect, useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { default as classnames, joinCls } from '@/utils/classnames';
import useLatest from '@/components/useLatest';
import useMemoizedFn from '@/components/useMemoizedFn';
import type { FieldErrors, FieldPath, FieldValues, UseFormReturn } from 'react-hook-form';
import {
  DEFAULT_LABEL_ALIGN,
  DEFAULT_LABEL_COL,
  DEFAULT_LAYOUT,
  DEFAULT_SIZE,
  DEFAULT_WRAPPER_COL,
} from './constants';
import { getFirstErrorPath, scrollToField } from './helper';
import type { FormContextValue, FormProps } from './interface';

/** React context that distributes form layout and state to descendant `<FormItem>` components. */
export const FormContext = createContext<FormContextValue | null>(null);

/**
 * Form component that wraps `react-hook-form` with layout, context distribution,
 * value-change subscriptions, and scroll-to-error behavior.
 *
 * Renders a `<FormProvider>` and native `<form>` element. All `<FormItem>` children
 * receive form methods and layout configuration via {@link FormContext}.
 *
 * Supports both controlled mode (pass an external `form` instance) and uncontrolled
 * mode (internal `useForm` is created automatically).
 *
 * @template TFieldValues - The shape of the form values.
 * @param props - {@link FormProps}
 *
 * @example
 * ```tsx
 * <Form defaultValues={{ name: '' }} onFinish={(values) => save(values)}>
 *   <FormItem name="name" label="Name" rules={{ required: true }}>
 *     <Input />
 *   </FormItem>
 * </Form>
 * ```
 */
export function Form<TFieldValues extends FieldValues = FieldValues>(props: FormProps<TFieldValues>) {
  // Form is a thin wrapper over react-hook-form with layout + UX helpers.
  const {
    form,
    defaultValues,
    onFinish,
    onFinishFailed,
    onValuesChange,
    watchNames,
    scrollToFirstError,
    layout = DEFAULT_LAYOUT,
    labelAlign = DEFAULT_LABEL_ALIGN,
    labelCol = DEFAULT_LABEL_COL,
    wrapperCol = DEFAULT_WRAPPER_COL,
    size = DEFAULT_SIZE,
    disabled,
    colon = true,
    requiredMark = true,
    className,
    style,
    children,
    ...useFormProps
  } = props;

  // Always create an internal form to keep hook ordering stable.
  // When an external `form` is passed via the `form` prop, this instance is
  // unused but must remain so that React's hook call order is consistent
  // across renders. We pass `shouldUnregister: true` to minimize overhead
  // of the unused form instance.
  const internalMethods = useForm<TFieldValues>({ defaultValues, shouldUnregister: true, ...useFormProps });
  // Use provided form methods when controlled; otherwise use internal form state.
  const methods = form ?? internalMethods;
  const valuesChangeRef = useLatest(onValuesChange);
  const watchNamesRef = useLatest(
    watchNames?.length ? new Set(watchNames as Array<FieldPath<TFieldValues>>) : null
  );

  // Provide layout + disabled state + form methods to FormItem via context.
  const ctx = useMemo<FormContextValue>(() => ({
    layout,
    labelAlign,
    labelCol,
    wrapperCol,
    size,
    disabled,
    colon,
    requiredMark,
    methods: methods as UseFormReturn<FieldValues>,
  }), [layout, labelAlign, labelCol, wrapperCol, size, disabled, colon, requiredMark, methods]);

  // Subscribe to all value changes when handler provided.
  useEffect(() => {
    if (!onValuesChange) return;
    const subscription = methods.watch((values, info) => {
      const watchSet = watchNamesRef.current;
      if (watchSet) {
        const name = info.name as FieldPath<TFieldValues> | undefined;
        if (!name || !watchSet.has(name)) return;
      }
      valuesChangeRef.current?.(
        values as TFieldValues,
        { name: info.name as FieldPath<TFieldValues> | undefined, type: info.type }
      );
    });
    return () => subscription.unsubscribe();
  // `valuesChangeRef` and `watchNamesRef` are stable refs accessed via `.current`
  // so they do not need to be in the dependency array.
  }, [methods, onValuesChange]);

  // Submit success handler.
  const handleFinish = useMemoizedFn(async (values: TFieldValues) => {
    await onFinish?.(values);
  });

  // Submit failure handler with optional scroll-to-error.
  const handleFinishFailed = useMemoizedFn((errors: FieldErrors<TFieldValues>) => {
    if (scrollToFirstError) {
      const first = getFirstErrorPath(errors);
      if (first) {
        methods.setFocus?.(first as FieldPath<TFieldValues>);
        scrollToField(first, scrollToFirstError);
      }
    }
    onFinishFailed?.(errors);
  });

  const classes = classnames('form');

  return (
    <FormProvider {...methods}>
      <FormContext.Provider value={ctx}>
        <form
          className={classes('root', joinCls(
            className,
            classes(`layout-${layout}`),
            classes(`size-${size}`),
            labelAlign === 'left' && classes('label-left')
          ))}
          style={style}
          onSubmit={methods.handleSubmit(handleFinish, handleFinishFailed)}
          noValidate
        >
          {children}
        </form>
      </FormContext.Provider>
    </FormProvider>
  );
}

export default Form;
