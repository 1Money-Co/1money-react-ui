import { memo } from 'react';
import useMemoizedFn from '../useMemoizedFn';
import { Button } from '../Button';
import { CSS_PREFIX, DEFAULT_TEXT } from './constants';
import type { MouseEvent, ReactElement } from 'react';
import type { FieldValues, UseFormReturn } from 'react-hook-form';
import type { SubmitterProps } from './interface';

type InnerSubmitterProps<TFieldValues extends FieldValues = FieldValues> = SubmitterProps<TFieldValues> & {
  form?: UseFormReturn<TFieldValues>;
  onSubmitForm?: () => void;
};

function SubmitterBase<TFieldValues extends FieldValues = FieldValues>(props: InnerSubmitterProps<TFieldValues>) {
  const {
    submitText = DEFAULT_TEXT.submit,
    resetText = DEFAULT_TEXT.reset,
    render,
    onSubmit,
    onReset,
    submitButtonProps,
    resetButtonProps,
    form,
    onSubmitForm,
  } = props;

  const handleSubmit = useMemoizedFn((event: MouseEvent<HTMLButtonElement>) => {
    submitButtonProps?.onClick?.(event);
    onSubmit?.();
  });

  const handleReset = useMemoizedFn((event: MouseEvent<HTMLButtonElement>) => {
    resetButtonProps?.onClick?.(event);
    onReset?.();
  });

  const handleRenderSubmit = useMemoizedFn(() => {
    if (onSubmitForm) {
      onSubmitForm();
      return;
    }
    onSubmit?.();
  });

  const submitDom = (
    <Button
      key='submit'
      {...submitButtonProps}
      type={submitButtonProps?.type ?? 'submit'}
      onClick={handleSubmit}
    >
      {submitText}
    </Button>
  );

  const resetDom = (
    <Button
      key='reset'
      {...resetButtonProps}
      type={resetButtonProps?.type ?? 'button'}
      severity={resetButtonProps?.severity ?? 'secondary'}
      onClick={handleReset}
    >
      {resetText}
    </Button>
  );

  // Button order: Reset first, Submit last (standard form UX pattern)
  const dom = [resetDom, submitDom];
  const renderedDom = render
    ? render({ form, submit: handleRenderSubmit, reset: () => onReset?.() }, dom as ReactElement[])
    : dom;

  return (
    <div className={`${CSS_PREFIX}-submitter`}>
      {renderedDom}
    </div>
  );
}

SubmitterBase.displayName = 'Submitter';

export const Submitter = memo(SubmitterBase) as typeof SubmitterBase;

export default Submitter;
