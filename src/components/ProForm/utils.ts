import type { MouseEvent, ReactNode } from 'react';
import { DEFAULT_TEXT } from './constants';

/** Shorthand for a generic key/value record. */
export type UnknownRecord = Record<string, unknown>;

interface StableSerializeContext {
  seen: WeakMap<object, number>;
  nextId: number;
}

const getNextSeenId = (ctx: StableSerializeContext): number => {
  const current = ctx.nextId;
  ctx.nextId += 1;
  return current;
};

interface SerializableKeyEntry {
  rawKey: PropertyKey;
  serializedKey: string;
}

const sortObjectKeys = (value: object): SerializableKeyEntry[] => {
  return Reflect.ownKeys(value)
    .map((rawKey) => ({
      rawKey,
      serializedKey: typeof rawKey === 'symbol'
        ? `@@symbol:${String(rawKey.description ?? rawKey)}`
        : String(rawKey),
    }))
    .sort((a, b) => a.serializedKey.localeCompare(b.serializedKey));
};

const serializeNumber = (value: number): string => {
  if (Number.isNaN(value)) return 'number:NaN';
  if (!Number.isFinite(value)) return `number:${value > 0 ? 'Infinity' : '-Infinity'}`;
  return `number:${String(value)}`;
};

const serializeObject = (value: object, ctx: StableSerializeContext): string => {
  if (ctx.seen.has(value)) {
    return `ref:${ctx.seen.get(value)}`;
  }

  const id = getNextSeenId(ctx);
  ctx.seen.set(value, id);

  if (Array.isArray(value)) {
    return `array:[${value.map(item => serializeStableValue(item, ctx)).join(',')}]`;
  }

  if (value instanceof Date) {
    return `date:${Number.isNaN(value.getTime()) ? 'Invalid Date' : value.toISOString()}`;
  }

  if (value instanceof RegExp) {
    return `regexp:${value.toString()}`;
  }

  if (value instanceof Set) {
    const values = Array.from(value.values())
      .map(item => serializeStableValue(item, ctx))
      .sort();
    return `set:{${values.join(',')}}`;
  }

  if (value instanceof Map) {
    const entries = Array.from(value.entries())
      .map(([key, item]) => ({
        key: serializeStableValue(key, ctx),
        value: serializeStableValue(item, ctx),
      }))
      .sort((a, b) => {
        if (a.key === b.key) return a.value.localeCompare(b.value);
        return a.key.localeCompare(b.key);
      });
    return `map:{${entries.map(entry => `${entry.key}->${entry.value}`).join(',')}}`;
  }

  const constructorName = (value as { constructor?: { name?: string } }).constructor?.name ?? 'Object';
  const keys = sortObjectKeys(value);
  const serializedPairs = keys.map(({ rawKey, serializedKey }) => {
    const nextValue = (value as Record<PropertyKey, unknown>)[rawKey];
    return `${serializedKey}:${serializeStableValue(nextValue, ctx)}`;
  });

  return `object:${constructorName}:{${serializedPairs.join(',')}}`;
};

const serializeStableValue = (value: unknown, ctx: StableSerializeContext): string => {
  if (value === null) return 'null';

  switch (typeof value) {
    case 'undefined':
      return 'undefined';
    case 'string':
      return `string:${JSON.stringify(value)}`;
    case 'number':
      return serializeNumber(value as number);
    case 'boolean':
      return `boolean:${value ? '1' : '0'}`;
    case 'bigint':
      return `bigint:${String(value as bigint)}`;
    case 'symbol':
      return `symbol:${String((value as symbol).description ?? value)}`;
    case 'function': {
      const fn = value as (...args: unknown[]) => unknown;
      return `function:${fn.name || 'anonymous'}:${fn.length}:${String(fn)}`;
    }
    case 'object':
      return serializeObject(value as object, ctx);
    default:
      return `unknown:${String(value)}`;
  }
};

/**
 * Produces a deterministic, type-aware string key for deep comparison.
 * Handles non-JSON-safe values (e.g. `undefined`, `symbol`, `function`) and circular references.
 *
 * @param value - The value to serialize.
 * @returns A stable serialization key.
 */
export const stableSerialize = (value: unknown): string => {
  try {
    return serializeStableValue(value, { seen: new WeakMap<object, number>(), nextId: 0 });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return `serialization-error:${message}`;
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
