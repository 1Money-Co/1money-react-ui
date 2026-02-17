import {
  Children,
  isValidElement,
  memo,
  useCallback,
  useMemo,
  useState,
} from 'react';
import ProForm from '../ProForm';
import type { FC, ReactElement } from 'react';
import type { StepFormProps, StepsFormProps } from '../interface';

export const StepForm: FC<StepFormProps<any>> = (props) => {
  return <>{props.children}</>;
};

type StepsFormComponent = FC<StepsFormProps<any>> & {
  StepForm: FC<StepFormProps<any>>;
};

const StepsFormBase: FC<StepsFormProps<any>> = memo((props) => {
  const {
    current,
    onCurrentChange,
    onFinish,
    stepsProps,
    formProps,
    submitter,
    children,
  } = props;

  const [innerCurrent, setInnerCurrent] = useState(0);
  const [allValues, setAllValues] = useState<Record<string, any>>({});

  const steps = useMemo(() => {
    return Children.toArray(children).filter(isValidElement) as ReactElement<StepFormProps<any>>[];
  }, [children]);

  const mergedCurrent = typeof current === 'number' ? current : innerCurrent;
  const activeStep = steps[mergedCurrent];

  const setCurrent = useCallback((nextCurrent: number) => {
    if (current === undefined) {
      setInnerCurrent(nextCurrent);
    }
    onCurrentChange?.(nextCurrent);
  }, [current, onCurrentChange]);

  const handleStepFinish = useCallback(async (values: Record<string, any>) => {
    const currentStep = steps[mergedCurrent];
    const stepResult = await currentStep?.props?.onFinish?.(values as any);
    if (stepResult === false) return;

    const merged = { ...allValues, ...values };
    setAllValues(merged);

    const isLast = mergedCurrent >= steps.length - 1;
    if (isLast) {
      await onFinish?.(merged);
      return;
    }

    setCurrent(mergedCurrent + 1);
  }, [allValues, mergedCurrent, onFinish, setCurrent, steps.length]);

  if (!activeStep) return null;

  const {
    title,
    description,
    stepProps,
    children: stepChildren,
    ...stepFormProps
  } = activeStep.props;

  const {
    className: stepsClassName,
    ...restStepsProps
  } = (stepsProps || {}) as Record<string, any>;
  const {
    className: stepClassName,
    ...restStepProps
  } = (stepProps || {}) as Record<string, any>;

  const mergedDefaultValues = useMemo(() => ({
    ...(formProps as any)?.defaultValues,
    ...(stepFormProps as any)?.defaultValues,
    ...allValues,
  }), [allValues, formProps, stepFormProps]);

  const prevText = submitter !== false && submitter?.prevText
    ? submitter.prevText
    : 'Previous';
  const nextText = submitter !== false && submitter?.nextText
    ? submitter.nextText
    : 'Next';

  return (
    <div
      className={`om-react-ui-proform-steps-form${stepsClassName ? ` ${stepsClassName}` : ''}`}
      {...restStepsProps}
    >
      <div
        className={`om-react-ui-proform-steps-form-step${stepClassName ? ` ${stepClassName}` : ''}`}
        {...restStepProps}
      >
        {title && <div className='om-react-ui-proform-steps-form-title'>{title}</div>}
        {description && <div className='om-react-ui-proform-steps-form-description'>{description}</div>}
        <ProForm
          key={`step-${mergedCurrent}`}
          {...formProps as any}
          {...stepFormProps as any}
          defaultValues={mergedDefaultValues as any}
          submitter={false}
          onFinish={handleStepFinish}
        >
          {stepChildren}
          <div className='om-react-ui-proform-steps-form-actions'>
            {mergedCurrent > 0 && (
              <button type='button' onClick={() => setCurrent(mergedCurrent - 1)}>{prevText}</button>
            )}
            <button type='submit'>
              {mergedCurrent >= steps.length - 1 ? 'Submit' : nextText}
            </button>
          </div>
        </ProForm>
        </div>
    </div>
  );
});

export const StepsForm = StepsFormBase as StepsFormComponent;
StepsForm.StepForm = StepForm;

export default StepsForm;
