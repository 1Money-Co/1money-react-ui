import type { MouseEvent, ReactNode } from 'react';
import { DEFAULT_TEXT } from './constants';

// Common type for unknown records
export type UnknownRecord = Record<string, unknown>;

// Stable JSON serialization for deep comparison (sorted keys)
export const stableSerialize = (value: unknown): string => {
  try {
    return JSON.stringify(value, (_, current: unknown) => {
      if (!current || typeof current !== 'object' || Array.isArray(current)) return current;
      return Object.keys(current as UnknownRecord)
        .sort()
        .reduce<UnknownRecord>((acc, key) => {
          acc[key] = (current as UnknownRecord)[key];
          return acc;
        }, {});
    }) || '';
  } catch {
    return '';
  }
};

// Readonly value renderers for form fields
export const renderBooleanReadonly = (value: unknown): string =>
  value ? DEFAULT_TEXT.yes : DEFAULT_TEXT.no;

export const renderNumericReadonly = (value: unknown): string =>
  value == null || value === '' ? DEFAULT_TEXT.empty : String(value);

export const renderTextReadonly = (value: unknown): string =>
  value != null && value !== '' ? String(value) : DEFAULT_TEXT.empty;

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
type IconProps = false | UnknownRecord | undefined;

interface ExtractedButtonProps {
  onClick: ((event: MouseEvent<HTMLButtonElement>) => void) | undefined;
  disabled: boolean;
  children: ReactNode;
  domProps: UnknownRecord;
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
