import {
  createContext,
  useEffect,
  useMemo,
} from 'react';
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
    colProps = { span: DEFAULT_COL_SPAN },
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

  const internalForm = useForm<TFieldValues>({ defaultValues });
  const form = externalForm ?? internalForm;
  const paramsKey = useMemo(() => stableSerialize(params), [params]);
  const stableParams = useMemo(() => params, [paramsKey]);
  const formRest = rest as Omit<FormProps<TFieldValues>, 'onFinish' | 'form' | 'disabled' | 'defaultValues'>;
  const { onFinishFailed, ...forwardedFormProps } = formRest;

  useEffect(() => {
    let cancelled = false;
    if (!request) return;

    request(stableParams)
      .then(values => {
        if (cancelled || !values) return;
        form.reset(values);
      })
      .catch((error: unknown) => {
        if (!cancelled) {
          console.error('[ProForm] request() failed:', error);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [request, stableParams, form]);

  const ctx = useMemo<ProFormContextValue>(() => ({
    readonly,
    grid,
    colProps,
  }), [readonly, grid, colProps]);

  const handleFinish = useMemoizedFn(async (values: TFieldValues) => {
    await onFinish?.(values);
  });

  const handleReset = useMemoizedFn(() => {
    form.reset(defaultValues);
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
    void form.handleSubmit(handleFinish, onFinishFailed)(undefined);
  });

  const mergedDisabled = rest.disabled ?? loading;

  const content = useMemo(() => {
    if (!grid) return children;

    return (
      <Row gutter={rowProps?.gutter}>
        {children}
      </Row>
    );
  }, [children, grid, rowProps?.gutter]);

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
