import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
} from 'react';
import { useForm } from 'react-hook-form';
import { Row } from '../Grid';
import { Form } from '../Form';
import Submitter from './Submitter';
import { DEFAULT_COL_SPAN } from './constants';
import { isSubmitterEnabled, stableSerialize } from './utils';
import type { FieldValues } from 'react-hook-form';
import type { FormProps } from '../Form';
import type { ProFormProps } from './interface';

export interface ProFormContextValue {
  readonly?: boolean;
  grid?: boolean;
  colProps?: { span?: number };
}

export const ProFormContext = createContext<ProFormContextValue>({
  readonly: false,
  grid: false,
  colProps: { span: DEFAULT_COL_SPAN },
});

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

  const handleFinish = useCallback(async (values: TFieldValues) => {
    await onFinish?.(values);
  }, [onFinish]);

  const handleReset = useCallback(() => {
    form.reset(defaultValues);
    if (isSubmitterEnabled(submitter)) {
      submitter.onReset?.();
    }
  }, [form, defaultValues, submitter]);

  const triggerSubmitterOnSubmit = useCallback(() => {
    if (isSubmitterEnabled(submitter)) {
      submitter.onSubmit?.();
    }
  }, [submitter]);

  const handleSubmitFromRender = useCallback(() => {
    triggerSubmitterOnSubmit();
    void form.handleSubmit(handleFinish, onFinishFailed)(undefined);
  }, [form, handleFinish, onFinishFailed, triggerSubmitterOnSubmit]);

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
