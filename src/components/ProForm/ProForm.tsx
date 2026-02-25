import {
  createContext,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import useLatest from '../useLatest';
import useMemoizedFn from '../useMemoizedFn';
import { useForm } from 'react-hook-form';
import { Row } from '../Grid';
import { Form } from '../Form';
import Submitter from './Submitter';
import { DEFAULT_COL_SPAN } from './constants';
import { isSubmitterEnabled, stableSerialize } from './utils';
import type { FieldValues } from 'react-hook-form';
import type { FormProps } from '../Form';
import type { ProFormProps } from './interface';

/** Context value providing ProForm-level configuration to descendant field components. */
export interface ProFormContextValue {
  /** Whether all fields should render in readonly mode. */
  readonly?: boolean;
  /** Whether grid layout is enabled. */
  grid?: boolean;
  /** Default column props for grid fields. */
  colProps?: { span?: number };
}

/**
 * React context that propagates ProForm configuration (readonly, grid, colProps)
 * to nested field components created via {@link createProFormField}.
 */
export const ProFormContext = createContext<ProFormContextValue>({
  readonly: false,
  grid: false,
  colProps: { span: DEFAULT_COL_SPAN },
});

/**
 * Enhanced form component with built-in submit/reset buttons, grid layout,
 * readonly mode, and async remote data loading via `request`.
 *
 * @typeParam TFieldValues - The form values type.
 *
 * @example
 * ```tsx
 * <ProForm onFinish={async (values) => { await save(values); }}>
 *   <ProFormText name="username" label="Username" />
 * </ProForm>
 * ```
 */
export function ProForm<TFieldValues extends FieldValues = FieldValues>(props: ProFormProps<TFieldValues>) {
  const {
    submitter,
    readonly = false,
    grid = false,
    colProps,
    rowProps,
    form: externalForm,
    request,
    params,
    loading = false,
    children,
    onFinish,
    defaultValues,
    ...rest
  } = props;

  // Always create an internal form to keep hook ordering stable.
  // When `externalForm` is provided, this instance is unused. We pass
  // `shouldUnregister: true` to minimize overhead of the unused form.
  const internalForm = useForm<TFieldValues>({ defaultValues, shouldUnregister: true });
  const form = externalForm ?? internalForm;
  const paramsKey = useMemo(() => stableSerialize(params), [params]);
  const stableParams = useMemo(() => params, [paramsKey]);
  const stableColProps = useMemo(
    () => colProps ?? { span: DEFAULT_COL_SPAN },
    [colProps?.span]
  );
  const latestRequestRef = useLatest(request);
  const latestResetValuesRef = useRef<TFieldValues | undefined>(defaultValues as TFieldValues | undefined);
  const formRest = rest as Omit<FormProps<TFieldValues>, 'onFinish' | 'form' | 'disabled' | 'defaultValues'>;
  const { onFinishFailed, ...forwardedFormProps } = formRest;

  useEffect(() => {
    latestResetValuesRef.current = defaultValues as TFieldValues | undefined;
  }, [defaultValues]);

  useEffect(() => {
    let cancelled = false;
    const currentRequest = latestRequestRef.current;
    if (!currentRequest) return;

    currentRequest(stableParams)
      .then(values => {
        if (cancelled || !values) return;
        form.reset(values);
        latestResetValuesRef.current = values;
      })
      .catch(() => {
        // Silently ignore — consumers should handle request errors
        // via their own error boundaries or by wrapping the `request` function.
      });

    return () => {
      cancelled = true;
    };
  }, [stableParams, form]);

  const ctx = useMemo<ProFormContextValue>(() => ({
    readonly,
    grid,
    colProps: stableColProps,
  }), [readonly, grid, stableColProps]);

  const handleFinish = useMemoizedFn(async (values: TFieldValues) => {
    await onFinish?.(values);
  });

  const handleReset = useMemoizedFn(() => {
    form.reset(latestResetValuesRef.current);
    if (isSubmitterEnabled(submitter)) {
      submitter.onReset?.();
    }
  });

  const triggerSubmitterOnSubmit = useMemoizedFn(() => {
    if (isSubmitterEnabled(submitter)) {
      submitter.onSubmit?.();
    }
  });

  const handleSubmitFromRender = useMemoizedFn(() => {
    triggerSubmitterOnSubmit();
    try {
      const submitPromise = form.handleSubmit(handleFinish, onFinishFailed)(undefined);
      submitPromise.catch((error: unknown) => {
        console.error(
          '[ProForm] handleSubmitFromRender rejected after triggerSubmitterOnSubmit via form.handleSubmit(handleFinish, onFinishFailed).',
          error
        );
      });
    } catch (error) {
      console.error(
        '[ProForm] handleSubmitFromRender threw after triggerSubmitterOnSubmit via form.handleSubmit(handleFinish, onFinishFailed).',
        error
      );
    }
  });

  const mergedDisabled = rest.disabled ?? loading;

  const content = !grid
    ? children
    : (
      <Row gutter={rowProps?.gutter}>
        {children}
      </Row>
    );

  return (
    <ProFormContext.Provider value={ctx}>
      <Form<TFieldValues>
        {...forwardedFormProps}
        form={form}
        disabled={mergedDisabled}
        defaultValues={defaultValues}
        onFinish={handleFinish}
        onFinishFailed={onFinishFailed}
      >
        {content}
        {submitter !== false && (
          <Submitter
            {...(submitter || {})}
            form={form}
            submitButtonProps={{
              ...(submitter?.submitButtonProps || {}),
              loading: submitter?.submitButtonProps?.loading ?? loading,
              disabled: submitter?.submitButtonProps?.disabled ?? loading,
            }}
            resetButtonProps={{
              ...(submitter?.resetButtonProps || {}),
              disabled: submitter?.resetButtonProps?.disabled ?? loading,
            }}
            onSubmit={triggerSubmitterOnSubmit}
            onSubmitForm={handleSubmitFromRender}
            onReset={handleReset}
          />
        )}
      </Form>
    </ProFormContext.Provider>
  );
}

export default ProForm;
