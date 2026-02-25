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

/**
 * Converts a 12-column grid span to a CSS percentage width string.
 *
 * @param col - Grid column count (0–12). Values are clamped to the valid range.
 * @returns A CSS percentage string (e.g. `"25%"`), or `undefined` when `col` is `null`/`undefined`.
 */
export const toPercent = (col?: number) => {
  if (col == null) return undefined;
  return `${(Math.max(GRID_MIN, Math.min(GRID_COLUMNS, col)) / GRID_COLUMNS) * PERCENT}%`;
};

/**
 * Type guard that narrows an unknown value to a `FieldError`-like object.
 *
 * `isFieldError` assumes `react-hook-form` places `type` on leaf errors,
 * and `getFirstErrorPath` relies on that to stop descending once a leaf is found.
 * If RHF changes this contract, tighten this predicate (e.g. require `message`/`ref`
 * or another stricter leaf-shape check) to avoid false positives on nested containers.
 *
 * Checks for the presence of `type`, `message`, or `ref` properties which
 * are characteristic of `react-hook-form` field errors.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a `FieldError`-like object.
 */
export const isFieldError = (value: unknown): value is FieldError => {
  if (!value || typeof value !== 'object') return false;
  return 'type' in value || 'message' in value || 'ref' in value;
};

/**
 * Walks a nested `FieldErrors` tree (depth-first) and returns the dot-path
 * of the first error encountered.
 *
 * Handles plain objects, arrays (e.g. field arrays), and deeply nested structures.
 *
 * @param errors - The `FieldErrors` object from `react-hook-form`.
 * @returns The dot-separated path (e.g. `"items.0.name"`) or `null` if no error is found.
 */
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

/**
 * Escapes a string for safe use inside a CSS attribute selector.
 *
 * Uses `CSS.escape` when available, with a regex fallback for SSR or
 * environments without native support (e.g. nested field names like `"address.city"`).
 *
 * @param value - The raw attribute value to escape.
 * @returns The escaped string safe for `querySelector`.
 */
export const escapeAttr = (value: string) =>
  typeof CSS !== 'undefined' && CSS.escape
    ? CSS.escape(value)
    : value.replace(/([^\w-])/g, '\\$1');

/**
 * Scrolls the viewport to the first invalid field identified by `name`.
 *
 * Looks up the element using either the standard `name` attribute or the
 * `data-form-item-name` data attribute. Supports custom scroll behavior
 * via the `options` parameter.
 *
 * @param name - The field name (path) to scroll to.
 * @param options - Scroll configuration from `FormProps['scrollToFirstError']`.
 */
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
      top: rect.top + window.scrollY - config.offset,
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

/**
 * Resolves the effective validation status for a form field.
 *
 * An explicit `validateStatus` prop takes priority. Otherwise the status is
 * derived from the `fieldState` provided by `react-hook-form`'s Controller.
 *
 * @param explicit - An explicit status override from props.
 * @param fieldState - The Controller field state containing `error` and `isValidating`.
 * @returns The resolved `FormValidateStatus`, or `undefined` if no status applies.
 */
export const resolveStatus = (explicit?: FormValidateStatus, fieldState?: Pick<ControllerFieldState, 'error' | 'isValidating'>): FormValidateStatus | undefined => {
  if (explicit) return explicit;
  if (fieldState?.isValidating) return STATUS_VALIDATING;
  if (fieldState?.error) return STATUS_ERROR;
  return undefined;
};

/**
 * Normalizes a `validateTrigger` prop into a consistent array form.
 *
 * @param value - A single trigger string, an array, or `undefined`.
 * @returns An array of trigger modes (e.g. `['onChange', 'onBlur']`), or an empty array.
 */
export const normalizeValidateTrigger = (value?: FormItemProps<FieldValues>['validateTrigger']) => {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
};

/**
 * Maps a `FormValidateStatus` to boolean props suitable for Input-like components.
 *
 * @param status - The current validation status.
 * @returns An object with `invalid: true`, `success: true`, or an empty object.
 */
export const getStatusProps = (status?: FormValidateStatus) => (
  status === STATUS_ERROR
    ? { invalid: true }
    : status === STATUS_SUCCESS
      ? { success: true }
      : {}
);

/**
 * Performs a shallow comparison of two arrays using `Object.is` for each element.
 *
 * @param a - First array.
 * @param b - Second array.
 * @returns `true` if both arrays have the same length and identical elements by reference.
 */
export const shallowEqualArray = (a: unknown[], b: unknown[]) =>
  a.length === b.length && a.every((v, i) => Object.is(v, b[i]));

/**
 * Normalizes a custom `ValidateResult` to be compatible with `react-hook-form`.
 *
 * RHF treats `null` as a truthy error value, so this converts `null` to `true` (valid).
 *
 * @param result - The raw validation result.
 * @returns The normalized result (`true` for valid, or an error string/boolean).
 */
export const normalizeValidateResult = (result: ValidateResult) => (result === null ? true : result);

/**
 * Wraps a multi-validator record to honor `validateFirst` sequencing.
 *
 * When `mode` is `true`, validators run **sequentially** and stop at the first error.
 * When `mode` is `'parallel'`, all validators run concurrently and the first error found is returned.
 * When `mode` is falsy or `validate` is a single function, the original value is returned unchanged.
 *
 * @template TValues - The shape of the form values.
 * @template TName - The field path type.
 * @param validate - The validator or record of validators from `RegisterOptions`.
 * @param mode - The `validateFirst` mode.
 * @returns A wrapped validator function, or the original value when no wrapping is needed.
 */
export const wrapValidate = <TValues extends FieldValues, TName extends FieldPath<TValues>>(
  validate: NonNullable<RegisterOptions<TValues, TName>['validate']>,
  mode?: FormItemProps<TValues>['validateFirst']
): NonNullable<RegisterOptions<TValues, TName>['validate']> => {
  if (!validate || !mode || typeof validate === 'function') return validate;
  const validators = Object.values(validate);
  return async (value: FieldPathValue<TValues, TName>, values: TValues) => {
    if (mode === VALIDATE_PARALLEL) {
      const results = await Promise.all(
        validators.map(async fn => normalizeValidateResult(
          await Promise.resolve((fn as Validate<FieldPathValue<TValues, TName>, TValues>)(value, values))
        ))
      );
      const hit = results.find(result => result !== true && result !== undefined);
      return hit ?? true;
    }
    for (const fn of validators) {
      const result = normalizeValidateResult(
        await (fn as Validate<FieldPathValue<TValues, TName>, TValues>)(value, values)
      );
      if (result !== true && result !== undefined) return result;
    }
    return true;
  };
};
