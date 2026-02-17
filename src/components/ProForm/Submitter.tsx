import { memo } from 'react';
import { Button } from '../Button';
import type { MouseEvent, ReactElement } from 'react';
import type { FieldValues, UseFormReturn } from 'react-hook-form';
import type { SubmitterProps } from './interface';

type InnerSubmitterProps<TFieldValues extends FieldValues = FieldValues> = SubmitterProps<TFieldValues> & {
  form?: UseFormReturn<TFieldValues>;
  onSubmitForm?: () => void;
};

function SubmitterBase<TFieldValues extends FieldValues = FieldValues>(props: InnerSubmitterProps<TFieldValues>) {
  const {
    submitText = 'Submit',
    resetText = 'Reset',
    render,
    onSubmit,
    onReset,
    submitButtonProps,
    resetButtonProps,
    form,
    onSubmitForm,
  } = props;

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    submitButtonProps?.onClick?.(event);
    onSubmit?.();
  };

  const handleReset = (event: MouseEvent<HTMLButtonElement>) => {
    resetButtonProps?.onClick?.(event);
    onReset?.();
  };

  const handleRenderSubmit = () => {
    if (onSubmitForm) {
      onSubmitForm();
      return;
    }
    onSubmit?.();
  };

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

  const dom = [submitDom, resetDom];
  const renderedDom = render
    ? render({ form, submit: handleRenderSubmit, reset: () => onReset?.() }, dom as ReactElement[])
    : dom;

  return (
    <div className='om-react-ui-proform-submitter'>
      {renderedDom}
    </div>
  );
}

export const Submitter = memo(SubmitterBase) as typeof SubmitterBase;

export default Submitter;
