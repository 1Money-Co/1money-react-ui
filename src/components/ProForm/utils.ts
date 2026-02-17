import type { MouseEvent, ReactNode } from 'react';
import { DEFAULT_TEXT } from './constants';

/** Shorthand for a generic key/value record. */
export type UnknownRecord = Record<string, unknown>;

/**
 * Produces a deterministic JSON string with sorted object keys.
 * Used for deep-comparison of `params` passed to {@link ProForm.request}.
 *
 * @param value - The value to serialize.
 * @returns A stable JSON string, or an empty string on failure.
 */
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

/**
 * Renders a boolean value as localized "Yes" / "No" text for readonly mode.
 *
 * @param value - The field value.
 * @returns The display string.
 */
export const renderBooleanReadonly = (value: unknown): string =>
  value ? DEFAULT_TEXT.yes : DEFAULT_TEXT.no;

/**
 * Renders a numeric value as its string representation, or a dash for empty values.
 *
 * @param value - The field value.
 * @returns The display string.
 */
export const renderNumericReadonly = (value: unknown): string =>
  value == null || value === '' ? DEFAULT_TEXT.empty : String(value);

/**
 * Renders a text value as-is, or a dash for empty values.
 *
 * @param value - The field value.
 * @returns The display string.
 */
export const renderTextReadonly = (value: unknown): string =>
  value != null && value !== '' ? String(value) : DEFAULT_TEXT.empty;

/** Shape of an option item used by Select, Radio, and Checkbox fields. */
interface OptionItem {
  key?: unknown;
  value?: unknown;
  label?: unknown;
}

/**
 * Finds the display label for a given value within an options array.
 *
 * @param value - The current field value.
 * @param options - The list of available options.
 * @param valueKey - Which option property to match against: `'value'`, `'key'`, or `'both'`.
 * @returns The matched option's label, or the raw value, or a dash placeholder.
 */
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

/**
 * Type guard that checks whether a submitter configuration is enabled
 * (i.e. not `false`, `null`, or `undefined`).
 *
 * @param submitter - The submitter prop value.
 * @returns `true` if the submitter config object is present.
 */
export const isSubmitterEnabled = <T>(submitter: false | T | undefined): submitter is T =>
  submitter !== false && submitter != null;

type IconProps = false | UnknownRecord | undefined;

/** Destructured button properties returned by {@link extractButtonProps}. */
interface ExtractedButtonProps {
  onClick: ((event: MouseEvent<HTMLButtonElement>) => void) | undefined;
  disabled: boolean;
  children: ReactNode;
  domProps: UnknownRecord;
}

/**
 * Extracts well-known button properties (`onClick`, `disabled`, `children`)
 * from an icon-props configuration object, returning the remainder as `domProps`.
 *
 * @param props - The icon/button props, or `false`/`undefined` to skip.
 * @returns A normalized {@link ExtractedButtonProps} object.
 */
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
