import { memo } from 'react';
import { joinCls } from '@/utils/classnames';
import useMemoizedFn from '../useMemoizedFn';
import { Button } from '../Button';
import { CSS_PREFIX, DEFAULT_TEXT } from './constants';
import styles from './style/ProForm.module.scss';
import type { MouseEvent, ReactElement } from 'react';
import type { FieldValues, UseFormReturn } from 'react-hook-form';
import type { SubmitterProps } from './interface';

/** @internal Props used by the Submitter component, extending public {@link SubmitterProps} with internal callbacks. */
interface InnerSubmitterProps<TFieldValues extends FieldValues = FieldValues> extends SubmitterProps<TFieldValues> {
  /** The `react-hook-form` instance (used for custom render functions). */
  form?: UseFormReturn<TFieldValues>;
  /** Internal callback to trigger form submission from a custom render. */
  onSubmitForm?: () => void;
}

/**
 * Renders the submit and reset buttons for a {@link ProForm}.
 * Supports custom rendering via the `render` prop.
 *
 * @typeParam TFieldValues - The form values type.
 */
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

  const handleReset = useMemoizedFn((event?: MouseEvent<HTMLButtonElement>) => {
    if (event) {
      resetButtonProps?.onClick?.(event);
    } else {
      (resetButtonProps?.onClick as ((event?: MouseEvent<HTMLButtonElement>) => void) | undefined)?.();
    }
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
    ? render({ form, submit: handleRenderSubmit, reset: () => handleReset() }, dom as ReactElement[])
    : dom;

  return (
    <div className={joinCls(styles['proform__submitter'], `${CSS_PREFIX}-submitter`)}>
      {renderedDom}
    </div>
  );
}

SubmitterBase.displayName = 'Submitter';

export const Submitter = memo(SubmitterBase) as typeof SubmitterBase;

export default Submitter;
