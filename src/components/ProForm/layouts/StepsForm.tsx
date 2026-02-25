import {
  Children,
  isValidElement,
  memo,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import { joinCls } from '@/utils/classnames';
import { Button } from '../../Button';
import useLatest from '../../useLatest';
import ProForm from '../ProForm';
import { CSS_PREFIX, DEFAULT_TEXT } from '../constants';
import styles from '../style/ProForm.module.scss';
import type { FC, ReactElement, ReactNode } from 'react';
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
  const allValuesRef = useRef<Record<string, unknown>>({});
  /** Tracks which step index each key was last submitted from. */
  const keyStepMapRef = useRef<Map<string, number>>(new Map());
  const stepPanelRef = useRef<HTMLDivElement>(null);

  const steps = useMemo(() => {
    return Children.toArray(children).filter(isValidElement) as ReactElement<StepFormProps<FieldValues>>[];
  }, [children]);

  const mergedCurrent = typeof current === 'number' ? current : innerCurrent;
  const mergedCurrentRef = useLatest(mergedCurrent);
  const activeStep = steps[mergedCurrent];

  const setCurrent = useCallback((nextCurrent: number) => {
    // When navigating backward, clear accumulated values from steps after
    // the target so stale data doesn't persist when the user changes answers.
    if (nextCurrent < mergedCurrentRef.current) {
      setAllValues(prev => {
        const cleaned = { ...prev };
        keyStepMapRef.current.forEach((stepIndex, key) => {
          if (stepIndex > nextCurrent) {
            delete cleaned[key];
          }
        });
        allValuesRef.current = cleaned;
        return cleaned;
      });
    }
    if (current === undefined) {
      setInnerCurrent(nextCurrent);
    }
    onCurrentChange?.(nextCurrent);
  }, [current, onCurrentChange]);

  const handleStepFinish = useCallback(async (values: Record<string, unknown>) => {
    const currentStep = steps[mergedCurrent];
    const stepResult = await currentStep?.props?.onFinish?.(values as FieldValues);
    if (stepResult === false) return;

    // Track which step each key was submitted from so backward navigation
    // can selectively clear downstream step data.
    for (const key of Object.keys(values)) {
      keyStepMapRef.current.set(key, mergedCurrent);
    }

    const mergedValues = { ...allValuesRef.current, ...values };
    allValuesRef.current = mergedValues;
    setAllValues(mergedValues);

    const isLast = mergedCurrent >= steps.length - 1;
    if (isLast) {
      await onFinish?.(mergedValues as FieldValues);
      return;
    }

    setCurrent(mergedCurrent + 1);
  }, [mergedCurrent, onFinish, setCurrent, steps]);

  const parentFormProps = formProps as Partial<ProFormProps<FieldValues>> | undefined;
  const {
    title,
    description,
    stepProps,
    children: stepChildren,
    ...stepFormProps
  } = (activeStep?.props ?? {}) as StepFormProps<FieldValues>;
  const activeStepFormProps = activeStep
    ? (stepFormProps as Partial<ProFormProps<FieldValues>>)
    : undefined;

  const stepsHtmlProps = pickHtmlDivProps((stepsProps || {}) as Record<string, unknown>);
  const stepHtmlProps = pickHtmlDivProps((stepProps || {}) as Record<string, unknown>);

  const mergedDefaultValues = useMemo(() => ({
    ...parentFormProps?.defaultValues,
    ...activeStepFormProps?.defaultValues,
    ...allValues,
  }), [activeStepFormProps?.defaultValues, allValues, parentFormProps?.defaultValues]);
  const submitterConfig = submitter === false ? false : (submitter || {});

  const handlePrev = useCallback(() => {
    if (submitterConfig !== false) {
      submitterConfig.onReset?.();
    }
    if (mergedCurrent > 0) {
      setCurrent(mergedCurrent - 1);
    }
  }, [mergedCurrent, setCurrent, submitterConfig]);

  const handleSubmitClick = useCallback(() => {
    if (submitterConfig !== false) {
      submitterConfig.onSubmit?.();
    }
  }, [submitterConfig]);

  const triggerStepSubmit = useCallback(() => {
    if (submitterConfig !== false) {
      submitterConfig.onSubmit?.();
    }
    const formNode = stepPanelRef.current?.querySelector('form');
    if (!formNode) return;

    if (typeof formNode.requestSubmit === 'function') {
      formNode.requestSubmit();
      return;
    }

    formNode.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
  }, [submitterConfig]);

  const prevText = submitterConfig !== false && submitterConfig.prevText
    ? submitterConfig.prevText
    : DEFAULT_TEXT.previous;
  const nextText = submitterConfig !== false && submitterConfig.nextText
    ? submitterConfig.nextText
    : DEFAULT_TEXT.next;
  const submitText = submitterConfig !== false && submitterConfig.submitText
    ? submitterConfig.submitText
    : DEFAULT_TEXT.submit;
  const isLastStep = mergedCurrent >= steps.length - 1;

  const { className: stepsClassNameRaw, ...stepsRestHtml } = stepsHtmlProps;
  const { className: stepClassNameRaw, ...stepRestHtml } = stepHtmlProps;
  const stepsClassName = typeof stepsClassNameRaw === 'string' ? stepsClassNameRaw : undefined;
  const stepClassName = typeof stepClassNameRaw === 'string' ? stepClassNameRaw : undefined;

  const renderedActions = useMemo<ReactNode>(() => {
    if (submitterConfig === false) return null;

    const resetButtonProps = submitterConfig.resetButtonProps;
    const submitButtonProps = submitterConfig.submitButtonProps;

    const prevButton = mergedCurrent > 0
      ? (
        <Button
          key='prev'
          {...resetButtonProps}
          type={resetButtonProps?.type ?? 'button'}
          severity={resetButtonProps?.severity ?? 'secondary'}
          onClick={(event) => {
            resetButtonProps?.onClick?.(event);
            handlePrev();
          }}
        >
          {prevText}
        </Button>
      )
      : null;

    const nextButton = (
      <Button
        key='submit'
        {...submitButtonProps}
        type={submitButtonProps?.type ?? 'submit'}
        onClick={(event) => {
          submitButtonProps?.onClick?.(event);
          handleSubmitClick();
        }}
      >
        {isLastStep ? submitText : nextText}
      </Button>
    );

    const defaultDom = [prevButton, nextButton].filter(Boolean) as ReactElement[];
    if (!submitterConfig.render) return defaultDom;

    return submitterConfig.render({
      form: activeStepFormProps?.form ?? parentFormProps?.form,
      submit: triggerStepSubmit,
      reset: handlePrev,
    }, defaultDom);
  }, [
    activeStepFormProps?.form,
    handlePrev,
    handleSubmitClick,
    isLastStep,
    mergedCurrent,
    nextText,
    parentFormProps?.form,
    prevText,
    submitText,
    submitterConfig,
    triggerStepSubmit,
  ]);

  if (!activeStep) return null;

  return (
    <div
      {...stepsRestHtml}
      className={joinCls(`${CSS_PREFIX}-steps-form`, stepsClassName)}
    >
      <div
        {...stepRestHtml}
        ref={stepPanelRef}
        className={joinCls(`${CSS_PREFIX}-steps-form-step`, stepClassName)}
      >
        {title && (
          <div className={joinCls(styles['proform__steps-form-title'], `${CSS_PREFIX}-steps-form-title`)}>
            {title}
          </div>
        )}
        {description && (
          <div className={joinCls(styles['proform__steps-form-description'], `${CSS_PREFIX}-steps-form-description`)}>
            {description}
          </div>
        )}
        <ProForm
          key={`step-${mergedCurrent}`}
          {...parentFormProps}
          {...activeStepFormProps}
          defaultValues={mergedDefaultValues}
          submitter={false}
          onFinish={handleStepFinish}
        >
          {stepChildren}
          {renderedActions && (
            <div className={joinCls(styles['proform__steps-form-actions'], `${CSS_PREFIX}-steps-form-actions`)}>
              {renderedActions}
            </div>
          )}
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
