import { memo } from 'react';
import { Button } from '../Button';
import type { FC, ReactElement } from 'react';
import type { SubmitterProps } from './interface';

type InnerSubmitterProps = SubmitterProps & {
  form?: any;
};

export const Submitter: FC<InnerSubmitterProps> = memo(props => {
  const {
    submitText = 'Submit',
    resetText = 'Reset',
    render,
    onSubmit,
    onReset,
    submitButtonProps,
    resetButtonProps,
    form,
  } = props;

  const handleSubmit = (event?: any) => {
    submitButtonProps?.onClick?.(event);
    onSubmit?.();
  };

  const handleReset = (event?: any) => {
    resetButtonProps?.onClick?.(event);
    onReset?.();
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
    ? render({ form, submit: () => onSubmit?.(), reset: () => onReset?.() }, dom as ReactElement[])
    : dom;

  return (
    <div className='om-react-ui-proform-submitter'>
      {renderedDom}
    </div>
  );
});

export default Submitter;
