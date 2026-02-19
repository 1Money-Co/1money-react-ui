import {
  Children,
  isValidElement,
  memo,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Button } from '../../Button';
import ProForm from '../ProForm';
import { CSS_PREFIX, DEFAULT_TEXT } from '../constants';
import type { FC, ReactElement } from 'react';
import type { FieldValues } from 'react-hook-form';
import type { ProFormProps, StepFormProps, StepsFormProps } from '../interface';

/**
 * Wrapper component representing an individual step inside {@link StepsForm}.
 * Does not render its own form — its children are rendered by the parent `StepsForm`.
 */
export const StepForm: FC<StepFormProps<FieldValues>> = (props) => {
  return <>{props.children}</>;
};

type StepsFormComponent = FC<StepsFormProps<FieldValues>> & {
  StepForm: FC<StepFormProps<FieldValues>>;
};

/**
 * Picks only safe HTML div attributes (`className`, `style`, `id`, `data-*`, `aria-*`)
 * from a props object, filtering out component-specific props.
 */
const pickHtmlDivProps = (props: Record<string, unknown>): Record<string, unknown> => {
  const result: Record<string, unknown> = {};
  for (const key of Object.keys(props)) {
    if (key === 'className' || key === 'style' || key === 'id' || key.startsWith('data-') || key.startsWith('aria-')) {
      result[key] = props[key];
    }
  }
  return result;
};

/**
 * Multi-step wizard form that renders one step at a time, merging values
 * from all steps and calling `onFinish` with the combined result on the final step.
 *
 * @example
 * ```tsx
 * <StepsForm onFinish={handleSubmit}>
 *   <StepsForm.StepForm title="Basic Info">
 *     <ProFormText name="name" label="Name" />
 *   </StepsForm.StepForm>
 *   <StepsForm.StepForm title="Details">
 *     <ProFormTextArea name="bio" label="Bio" />
 *   </StepsForm.StepForm>
 * </StepsForm>
 * ```
 */
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
  /** Tracks which step index each key was last submitted from. */
  const keyStepMapRef = useRef<Map<string, number>>(new Map());

  const steps = useMemo(() => {
    return Children.toArray(children).filter(isValidElement) as ReactElement<StepFormProps<FieldValues>>[];
  }, [children]);

  const mergedCurrent = typeof current === 'number' ? current : innerCurrent;
  const activeStep = steps[mergedCurrent];

  const setCurrent = useCallback((nextCurrent: number) => {
    // When navigating backward, clear accumulated values from steps after
    // the target so stale data doesn't persist when the user changes answers.
    if (nextCurrent < mergedCurrent) {
      setAllValues(prev => {
        const cleaned = { ...prev };
        keyStepMapRef.current.forEach((stepIndex, key) => {
          if (stepIndex > nextCurrent) {
            delete cleaned[key];
          }
        });
        return cleaned;
      });
    }
    if (current === undefined) {
      setInnerCurrent(nextCurrent);
    }
    onCurrentChange?.(nextCurrent);
  }, [current, mergedCurrent, onCurrentChange]);

  const handleStepFinish = useCallback(async (values: Record<string, unknown>) => {
    const currentStep = steps[mergedCurrent];
    const stepResult = await currentStep?.props?.onFinish?.(values as FieldValues);
    if (stepResult === false) return;

    // Track which step each key was submitted from so backward navigation
    // can selectively clear downstream step data.
    for (const key of Object.keys(values)) {
      keyStepMapRef.current.set(key, mergedCurrent);
    }

    const merged = { ...allValues, ...values };
    setAllValues(merged);

    const isLast = mergedCurrent >= steps.length - 1;
    if (isLast) {
      await onFinish?.(merged as FieldValues);
      return;
    }

    setCurrent(mergedCurrent + 1);
  }, [allValues, mergedCurrent, onFinish, setCurrent, steps]);

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
    : DEFAULT_TEXT.previous;
  const nextText = submitter !== false && submitter?.nextText
    ? submitter.nextText
    : DEFAULT_TEXT.next;

  const { className: stepsClassName, ...stepsRestHtml } = stepsHtmlProps;
  const { className: stepClassName, ...stepRestHtml } = stepHtmlProps;

  return (
    <div
      {...stepsRestHtml}
      className={`${CSS_PREFIX}-steps-form${stepsClassName ? ` ${stepsClassName}` : ''}`}
    >
      <div
        {...stepRestHtml}
        className={`${CSS_PREFIX}-steps-form-step${stepClassName ? ` ${stepClassName}` : ''}`}
      >
        {title && <div className={`${CSS_PREFIX}-steps-form-title`}>{title}</div>}
        {description && <div className={`${CSS_PREFIX}-steps-form-description`}>{description}</div>}
        <ProForm
          key={`step-${mergedCurrent}`}
          {...formProps as Partial<ProFormProps<FieldValues>>}
          {...stepFormProps as Partial<ProFormProps<FieldValues>>}
          defaultValues={mergedDefaultValues}
          submitter={false}
          onFinish={handleStepFinish}
        >
          {stepChildren}
          <div className={`${CSS_PREFIX}-steps-form-actions`}>
            {mergedCurrent > 0 && (
              <Button type='button' severity='secondary' onClick={() => setCurrent(mergedCurrent - 1)}>
                {prevText}
              </Button>
            )}
            <Button type='submit'>
              {mergedCurrent >= steps.length - 1 ? DEFAULT_TEXT.submit : nextText}
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
