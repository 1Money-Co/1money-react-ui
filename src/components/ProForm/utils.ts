import type { MouseEvent, ReactNode } from 'react';
import { DEFAULT_TEXT } from './constants';

// Readonly value renderers for form fields
export const renderBooleanReadonly = (value: unknown): string =>
  value ? DEFAULT_TEXT.yes : DEFAULT_TEXT.no;

export const renderNumericReadonly = (value: unknown): string =>
  value == null || value === '' ? DEFAULT_TEXT.empty : String(value);

export const renderTextReadonly = (value: unknown): string =>
  (value as string) ?? DEFAULT_TEXT.empty;

// Generic option finder for Select/Radio/Checkbox fields
interface OptionItem {
  key?: unknown;
  value?: unknown;
  label?: unknown;
}

export const findOptionLabel = (
  value: unknown,
  options: OptionItem[] | undefined,
  valueKey: 'value' | 'key' | 'both' = 'value',
): unknown => {
  if (!Array.isArray(options)) return value ?? DEFAULT_TEXT.empty;

  const matched = options.find((item) => {
    if (valueKey === 'both') {
      return item?.key === value || item?.value === value;
    }
    return item?.[valueKey] === value;
  });

  return matched?.label ?? value ?? DEFAULT_TEXT.empty;
};

// Helper to check if submitter config is valid (not false or null/undefined)
export const isSubmitterEnabled = <T>(submitter: false | T | undefined): submitter is T =>
  submitter !== false && submitter != null;

// Extract button props from icon props config
type IconProps = false | Record<string, unknown> | undefined;

interface ExtractedButtonProps {
  onClick: ((event: MouseEvent<HTMLButtonElement>) => void) | undefined;
  disabled: boolean;
  children: ReactNode;
  domProps: Record<string, unknown>;
}

export const extractButtonProps = (props: IconProps): ExtractedButtonProps => {
  const btnProps = props && typeof props === 'object' ? props : {};
  const {
    onClick,
    disabled,
    children,
    ...domProps
  } = btnProps;

  return {
    onClick: onClick as ExtractedButtonProps['onClick'],
    disabled: !!disabled,
    children: children as ReactNode,
    domProps,
  };
};
