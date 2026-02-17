import type {
  ControllerFieldState,
  FieldError,
  FieldErrors,
  FieldPath,
  FieldPathValue,
  FieldValues,
  RegisterOptions,
  Validate,
  ValidateResult
} from 'react-hook-form';
import type { FormItemProps, FormValidateStatus, FormProps } from './interface';
import {
  DEFAULT_SCROLL_BEHAVIOR,
  DEFAULT_SCROLL_BLOCK,
  DEFAULT_SCROLL_INLINE,
  GRID_COLUMNS,
  GRID_MIN,
  PERCENT,
  SELECTOR_DATA_FORM_ITEM_ATTR,
  SELECTOR_NAME_ATTR,
  STATUS_ERROR,
  STATUS_SUCCESS,
  STATUS_VALIDATING,
  VALIDATE_PARALLEL
} from './constants';

// Convert a grid column count to a CSS percentage width.
export const toPercent = (col?: number) => {
  if (col == null) return undefined;
  return `${(Math.max(GRID_MIN, Math.min(GRID_COLUMNS, col)) / GRID_COLUMNS) * PERCENT}%`;
};

// Narrow unknown error values from react-hook-form into FieldError-like objects.
export const isFieldError = (value: unknown): value is FieldError => {
  if (!value || typeof value !== 'object') return false;
  return 'type' in value || 'message' in value || 'ref' in value;
};

// Walk a nested FieldErrors tree and return the first path (depth-first).
export const getFirstErrorPath = (errors: FieldErrors): string | null => {
  for (const key of Object.keys(errors)) {
    const value = (errors as Record<string, unknown>)[key];
    if (!value) continue;
    if (isFieldError(value)) return key;
    if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i += 1) {
        const item = value[i];
        if (!item) continue;
        if (isFieldError(item)) return `${key}.${i}`;
        if (item && typeof item === 'object') {
          const child = getFirstErrorPath(item as FieldErrors);
          if (child) return `${key}.${i}.${child}`;
        }
      }
    } else if (typeof value === 'object') {
      const child = getFirstErrorPath(value as FieldErrors);
      if (child) return `${key}.${child}`;
    }
  }
  return null;
};

// Escape attribute values for querySelector.
// Fallback handles CSS selector special characters for SSR or environments
// without CSS.escape (e.g. nested field names like "address.city").
export const escapeAttr = (value: string) =>
  typeof CSS !== 'undefined' && CSS.escape
    ? CSS.escape(value)
    : value.replace(/([^\w-])/g, '\\$1');

// Scroll to the first invalid field by name or data attribute.
export const scrollToField = (name: string, options?: FormProps['scrollToFirstError']) => {
  if (typeof document === 'undefined') return;
  const config = typeof options === 'object' ? options : {};
  const attrName = escapeAttr(name);
  const selectorByName = `[${SELECTOR_NAME_ATTR}="${attrName}"]`;
  const selectorByData = `[${SELECTOR_DATA_FORM_ITEM_ATTR}="${attrName}"]`;
  const el = (document.querySelector(selectorByName) || document.querySelector(selectorByData)) as HTMLElement | null;
  if (!el) return;
  const behavior = config.behavior ?? DEFAULT_SCROLL_BEHAVIOR;
  if (typeof config.offset === 'number') {
    const rect = el.getBoundingClientRect();
    window.scrollTo({
      top: rect.top + window.pageYOffset - config.offset,
      behavior,
    });
    return;
  }
  el.scrollIntoView({
    behavior,
    block: config.block ?? DEFAULT_SCROLL_BLOCK,
    inline: config.inline ?? DEFAULT_SCROLL_INLINE,
  });
};

// Resolve validation status with explicit override.
export const resolveStatus = (explicit?: FormValidateStatus, fieldState?: Pick<ControllerFieldState, 'error' | 'isValidating'>): FormValidateStatus | undefined => {
  if (explicit) return explicit;
  if (fieldState?.isValidating) return STATUS_VALIDATING;
  if (fieldState?.error) return STATUS_ERROR;
  return undefined;
};

// Normalize trigger option to array.
export const normalizeValidateTrigger = (value?: FormItemProps<FieldValues>['validateTrigger']) => {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
};

// Map validation status to Input props.
export const getStatusProps = (status?: FormValidateStatus) => (
  status === STATUS_ERROR
    ? { invalid: true }
    : status === STATUS_SUCCESS
      ? { success: true }
      : {}
);

// Shallow compare two arrays by reference equality (Object.is).
export const shallowEqualArray = (a: unknown[], b: unknown[]) =>
  a.length === b.length && a.every((v, i) => Object.is(v, b[i]));

// Align custom validation with RHF's ValidateResult.
export const normalizeValidateResult = (result: ValidateResult) => (result === null ? true : result);

// Wrap multi-validator object to honor validateFirst sequencing.
export const wrapValidate = <TValues extends FieldValues, TName extends FieldPath<TValues>>(
  validate: NonNullable<RegisterOptions<TValues, TName>['validate']>,
  mode?: FormItemProps<TValues>['validateFirst']
): NonNullable<RegisterOptions<TValues, TName>['validate']> => {
  if (!validate || !mode || typeof validate === 'function') return validate;
  const validators = Object.values(validate);
  return async (value: FieldPathValue<TValues, TName>, values: TValues) => {
    if (mode === VALIDATE_PARALLEL) {
      const results = await Promise.all(
        validators.map(fn => Promise.resolve((fn as Validate<FieldPathValue<TValues, TName>, TValues>)(value, values)))
      );
      const hit = results.find(result => result !== true && result !== undefined);
      return normalizeValidateResult(hit ?? true);
    }
    for (const fn of validators) {
      const result = await (fn as Validate<FieldPathValue<TValues, TName>, TValues>)(value, values);
      if (result !== true && result !== undefined) return normalizeValidateResult(result);
    }
    return true;
  };
};
