import {
  Children,
  isValidElement,
  memo,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { Button } from '../../Button';
import ProForm from '../ProForm';
import type { FC, ReactElement } from 'react';
import type { FieldValues } from 'react-hook-form';
import type { ProFormProps, StepFormProps, StepsFormProps } from '../interface';

export const StepForm: FC<StepFormProps<FieldValues>> = (props) => {
  return <>{props.children}</>;
};

type StepsFormComponent = FC<StepsFormProps<FieldValues>> & {
  StepForm: FC<StepFormProps<FieldValues>>;
};

const pickHtmlDivProps = (props: Record<string, unknown>): Record<string, unknown> => {
  const result: Record<string, unknown> = {};
  for (const key of Object.keys(props)) {
    if (key === 'className' || key === 'style' || key === 'id' || key.startsWith('data-') || key.startsWith('aria-')) {
      result[key] = props[key];
    }
  }
  return result;
};

const StepsFormInner: FC<StepsFormProps<FieldValues>> = (props) => {
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
  const [allValues, setAllValues] = useState<Record<string, unknown>>({});

  const steps = useMemo(() => {
    return Children.toArray(children).filter(isValidElement) as ReactElement<StepFormProps<FieldValues>>[];
  }, [children]);

  const mergedCurrent = typeof current === 'number' ? current : innerCurrent;
  const activeStep = steps[mergedCurrent];

  const setCurrent = useCallback((nextCurrent: number) => {
    if (current === undefined) {
      setInnerCurrent(nextCurrent);
    }
    onCurrentChange?.(nextCurrent);
  }, [current, onCurrentChange]);

  const handleStepFinish = useCallback(async (values: Record<string, unknown>) => {
    const currentStep = steps[mergedCurrent];
    const stepResult = await currentStep?.props?.onFinish?.(values as FieldValues);
    if (stepResult === false) return;

    const merged = { ...allValues, ...values };
    setAllValues(merged);

    const isLast = mergedCurrent >= steps.length - 1;
    if (isLast) {
      await onFinish?.(merged as FieldValues);
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

  const stepsHtmlProps = pickHtmlDivProps((stepsProps || {}) as Record<string, unknown>);
  const stepHtmlProps = pickHtmlDivProps((stepProps || {}) as Record<string, unknown>);

  const mergedDefaultValues = useMemo(() => ({
    ...(formProps as Partial<ProFormProps<FieldValues>> | undefined)?.defaultValues,
    ...(stepFormProps as Partial<ProFormProps<FieldValues>> | undefined)?.defaultValues,
    ...allValues,
  }), [allValues, formProps, stepFormProps]);

  const prevText = submitter !== false && submitter?.prevText
    ? submitter.prevText
    : 'Previous';
  const nextText = submitter !== false && submitter?.nextText
    ? submitter.nextText
    : 'Next';

  const { className: stepsClassName, ...stepsRestHtml } = stepsHtmlProps;
  const { className: stepClassName, ...stepRestHtml } = stepHtmlProps;

  return (
    <div
      {...stepsRestHtml}
      className={`om-react-ui-proform-steps-form${stepsClassName ? ` ${stepsClassName}` : ''}`}
    >
      <div
        {...stepRestHtml}
        className={`om-react-ui-proform-steps-form-step${stepClassName ? ` ${stepClassName}` : ''}`}
      >
        {title && <div className='om-react-ui-proform-steps-form-title'>{title}</div>}
        {description && <div className='om-react-ui-proform-steps-form-description'>{description}</div>}
        <ProForm
          key={`step-${mergedCurrent}`}
          {...formProps as Partial<ProFormProps<FieldValues>>}
          {...stepFormProps as Partial<ProFormProps<FieldValues>>}
          defaultValues={mergedDefaultValues}
          submitter={false}
          onFinish={handleStepFinish}
        >
          {stepChildren}
          <div className='om-react-ui-proform-steps-form-actions'>
            {mergedCurrent > 0 && (
              <Button type='button' severity='secondary' onClick={() => setCurrent(mergedCurrent - 1)}>
                {prevText}
              </Button>
            )}
            <Button type='submit'>
              {mergedCurrent >= steps.length - 1 ? 'Submit' : nextText}
            </Button>
          </div>
        </ProForm>
      </div>
    </div>
  );
};

StepsFormInner.displayName = 'StepsForm';

const StepsFormBase = memo(StepsFormInner);

// Type assertion required because memo() loses the static StepForm property type.
// We attach StepForm as a static property below, making this a compound component pattern.
export const StepsForm = StepsFormBase as unknown as StepsFormComponent;
StepsForm.StepForm = StepForm;

export default StepsForm;
