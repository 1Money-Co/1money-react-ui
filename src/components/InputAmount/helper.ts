import BigNumber from 'bignumber.js';
import { numericFormatter } from 'react-number-format';

export const MIN_INPUT_WIDTH = 33;
export const DECIMAL_POINT_OFFSET = 2;
export const SKELETON_LABEL_WIDTH = '72px';
export const SKELETON_LABEL_HEIGHT = '18px';
export const SPINNER_STROKE_WIDTH = '4';
export const CSS_VAR_INPUT_WIDTH = '--input-width';

export const DEFAULT_TYPE = 'primary' as const;
export const DEFAULT_SIZE = 'large' as const;
export const DEFAULT_PLACEHOLDER = '0';
export const DEFAULT_PREFIX_CLS = 'input-amount';

export const CHAR_MINUS = '-';
export const CHAR_DOT = '.';
export const CHAR_COMMA = ',';

const GAP_SINGLE = 8;
const GAP_DOUBLE = 16;
const GAP_TRIPLE = 24;

/** Fullwidth decimal/period → ASCII dot, fullwidth comma → ASCII comma */
const FULLWIDTH_DOT_RE = /[\u3002\uff0e\uff61]/g;
const FULLWIDTH_COMMA_RE = /[\uFF0C]/g;
const MINUS_RE = /-/g;
const TRAILING_DECIMALS_RE = /\.(\d+)$/;

export const isNumericType = (val: unknown): val is number | bigint =>
  typeof val === 'number' || typeof val === 'bigint';

export const normalizeNumberInput = (val: string) =>
  val
    .replace(FULLWIDTH_DOT_RE, CHAR_DOT)
    .replace(FULLWIDTH_COMMA_RE, CHAR_COMMA);

export const stripCommas = (val: string) => val.split(CHAR_COMMA).join('');

export const stripMinus = (val: string) => val.replace(MINUS_RE, '');

export const formatThousands = (val: string, allowNegative?: boolean) =>
  numericFormatter(val, { thousandSeparator: true, allowNegative });

export const calcValueInRange = (
  val: string,
  min?: number | bigint,
  max?: number | bigint,
) => {
  if (val === '' || val === CHAR_MINUS || isNaN(+val)) return val;

  const bnVal = BigNumber(val);

  if (isNumericType(min) && bnVal.lt(BigNumber(min))) return `${min}`;
  if (isNumericType(max) && bnVal.gt(BigNumber(max))) return `${max}`;

  return val;
};

/**
 * Normalize a raw numeric value string:
 * - Strips leading zeros via BigNumber
 * - Preserves negative-zero representation when applicable
 * - Appends trailing decimal point if present in input
 */
export const normalizeValue = (
  val: string,
  hasDecimalPoint: boolean,
  negative?: boolean,
): string => {
  const decimals = val.match(TRAILING_DECIMALS_RE)?.[1]?.length ?? 0;
  const bn = BigNumber(val);
  let normalized = bn.toFixed(decimals);

  if (negative && val.trim().startsWith(CHAR_MINUS) && bn.isZero()) {
    normalized = normalized.startsWith(CHAR_MINUS) ? normalized : `${CHAR_MINUS}${normalized}`;
  }

  return `${normalized}${hasDecimalPoint ? CHAR_DOT : ''}`.trim();
};

export const truncateFractionDigits = (val: string, maxDecimals: number) => {
  const [int, decimal] = val.split(CHAR_DOT);
  if (decimal != null && decimal.length > maxDecimals) {
    return { int, truncated: `${int}${CHAR_DOT}${decimal.slice(0, maxDecimals)}`, overflow: true };
  }
  return { int, truncated: val, overflow: false };
};

export const calcGapWidth = (hasPrefix: boolean, hasSuffix: boolean, hasCurrency: boolean) => {
  const count = +hasPrefix + +hasSuffix + +hasCurrency;
  if (count >= 3) return GAP_TRIPLE;
  if (count === 2) return GAP_DOUBLE;
  if (count === 1) return GAP_SINGLE;
  return 0;
};

export interface ParsedInput {
  val: string;
  hasDecimalPoint: boolean;
  isStandaloneMinus: boolean;
}

/**
 * Parse and sanitize a raw string input value.
 * Returns `null` if the value is invalid and should be rejected.
 */
export const parseRawInput = (raw: string, negative?: boolean): ParsedInput | null => {
  let val = stripCommas(normalizeNumberInput(raw));

  const hasDecimalPoint = val.endsWith(CHAR_DOT);
  if (hasDecimalPoint) val = val.slice(0, -1);
  if (!negative && val.includes(CHAR_MINUS)) return null;

  const isStandaloneMinus = !!negative && val === CHAR_MINUS;
  if (!isStandaloneMinus && isNaN(+val)) return null;

  return { val, hasDecimalPoint, isStandaloneMinus };
};

/**
 * Ensure a numeric value is non-negative when `negative` is not allowed.
 */
export const absValue = (val: number | bigint): number | bigint => {
  if (typeof val === 'number') return Math.abs(val);
  return val < BigInt(0) ? -val : val;
};
