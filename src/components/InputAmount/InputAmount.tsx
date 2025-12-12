import { memo, useMemo, useState, useCallback, useRef, useEffect, useLayoutEffect } from 'react';
import BigNumber from 'bignumber.js';
import { numericFormatter } from 'react-number-format';
import { Skeleton } from 'primereact/skeleton';
import Spinner from '../Spinner';
import { default as classnames, joinCls } from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren, CSSProperties, ChangeEvent } from 'react';
import type { InputAmountProps } from './interface';

const MIN_INPUT_WIDTH = 33;

const normalizeNumberInput = (val: string) =>
  val
    .replace(/[\u3002\uff0e\uff61]/g, '.')
    .replace(/[\uFF0C]/g, ',');

const calcValueInRange = (
  val: string,
  min?: boolean | number | bigint,
  max?: boolean | number | bigint,
) => {
  if (val === '' || val === '-' || isNaN(+val)) return val;

  let calcVal = val;
  const bnVal = BigNumber(val);

  if (typeof min === 'number' || typeof min === 'bigint') {
    const minBn = BigNumber(min);
    if (bnVal.lt(minBn)) {
      calcVal = '' + min;
    }
  }

  if (typeof max === 'number' || typeof max === 'bigint') {
    const maxBn = BigNumber(max);
    if (bnVal.gt(maxBn)) {
      calcVal = '' + max;
    }
  }

  return calcVal;
};

export const InputAmount: FC<PropsWithChildren<InputAmountProps>> = props => {
  const {
    value,
    type = 'primary',
    maxFractionDigits,
    children,
    placeholder = '0',
    min, max,
    // @ts-expect-error
    size = 'large', footnote, footnoteCls,
    className, wrapperCls, labelCls, prefixCls = 'input-amount', messageCls, prefixEleCls, suffixEleCls,
    invalid, negative, required, loading, success, disabled, readOnly,
    label, prefix, suffix, currency, message,
    onChange, onBlur, onFocus,
    ...rest
  } = props;
  const classes = classnames(`${prefixCls}-${type}`);

  const inputRef = useRef<HTMLInputElement>(null);
  const fakeEleRef = useRef<HTMLSpanElement>(null);
  const prefixRef = useRef<HTMLSpanElement>(null);
  const suffixRef = useRef<HTMLSpanElement>(null);
  const currencyRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputCaretPositionRef = useRef<number>(0);
  const ignoreSelectRef = useRef<boolean>(false);
  const onChangeRef = useRef<InputAmountProps['onChange']>(onChange);

  const [_value, setValue] = useState<string | null>(null);
  const [_width, setWidth] = useState<number>(MIN_INPUT_WIDTH);
  const [isMaxWidth, setIsMaxWidth] = useState<boolean>(false);
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const formattedValue = useMemo(() => {
    return numericFormatter('' + (_value == null ? '' : _value), {
      thousandSeparator: true,
      allowNegative: negative,
    });
  }, [_value, negative]);

  const valueRef = useRef({
    value,
    _value,
    formattedValue,
    min,
    max,
    negative,
    maxFractionDigits,
  });

  const scrollToEnd = useCallback((sticky: boolean = false) => {
    const input = inputRef.current;
    if (!input) return;
    const len = input.value?.length;
    const position = input.scrollLeft;
    const shouldToEnd = !sticky;
    const start = shouldToEnd ? len : inputCaretPositionRef.current;
    input.setSelectionRange(start, start);
    input.scrollLeft = shouldToEnd ? input.scrollWidth : position;
    input.focus();
  }, []);

  const calcCaretPos = useCallback((
    val: string,
    offset = 0,
    currPos?: number,
  ) => {
    if (inputRef.current) {
      const { _value, negative, formattedValue } = valueRef.current;
      const formattedNewVal = numericFormatter(val, {
        thousandSeparator: true,
        allowNegative: negative,
      });

      const originOffset = val.length - (_value?.length ?? 0);
      const isAdd = originOffset > 0;
      const ignoreOldPos = isAdd ? val.length - (_value?.length ?? 0) > 1 : false;
      let position = currPos ?? inputRef.current.selectionEnd ?? 0;
      if (!ignoreOldPos) {
        const oldPosVal = formattedValue.slice(0, Math.max(position, 0));
        position = oldPosVal.split(',').join('').length;
      }
      const posVal = val.slice(0, (position + originOffset));
      formattedNewVal.split('').reduce<string[]>((acc, char, ind) => {
        if (char === ',') return acc;
        else acc.push(char);
        if (acc.join('') === posVal) {
          position = ind + 1;
          return acc;
        }
        return acc;
      }, []);
      inputCaretPositionRef.current = position + offset;
    }
  }, []);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (disabled || readOnly) return;

    const { value, _value, formattedValue, min, max, negative, maxFractionDigits } = valueRef.current;
    let val = e.target.value;
    if (val != null) val = normalizeNumberInput(val).split(',').join('');
    const hasDecimalPoint = !!val && val.endsWith('.');
    if (hasDecimalPoint) val = val.slice(0, -1);
    if (!negative && val?.includes('-')) return;
    const isStandaloneMinus = negative && val === '-';
    if (!isStandaloneMinus && isNaN(+val)) return;
    if (val === _value && !hasDecimalPoint) return;

    if (typeof maxFractionDigits === 'number' || typeof maxFractionDigits === 'bigint') {
      const [int, decimal] = val.split('.');
      const maxDecimals = Number(maxFractionDigits);
      if (decimal != null && decimal.length > maxDecimals) {
        const truncatedDecimals = decimal.slice(0, maxDecimals);
        const [oldInt,] = formattedValue.split('.');
        if (oldInt.split(',').join('') == int) return;
        val = `${int}.${truncatedDecimals}`;
      }
    }

    if ((typeof min === 'number' || typeof min === 'bigint') || (typeof max === 'number' || typeof max === 'bigint')) {
      val = calcValueInRange(val, min, max);
    }

    if (val !== '') {
      if (isStandaloneMinus) {
        val = '-';
      } else {
        const decimals = val.match(/\.(\d+)$/)?.[1]?.length ?? 0;
        const bn = BigNumber(val);
        let normalized = bn.toFixed(decimals);
        if (negative && val.trim().startsWith('-') && bn.isZero()) {
          normalized = normalized.startsWith('-') ? normalized : `-${normalized}`;
        }
        val = `${normalized}${hasDecimalPoint ? '.' : ''}`.trim();
      }
    }

    if (typeof value === 'undefined') {
      setValue(val === '' ? null : val);
      calcCaretPos(val, hasDecimalPoint ? 2 : 0, Math.max(inputCaretPositionRef.current, 0));
      ignoreSelectRef.current = true;
    } else {
      e.preventDefault();
      e.stopPropagation();
    }
    onChangeRef.current?.(e, val);
  }, [disabled, readOnly]);

  const handleSelect = useCallback(() => {
    if (ignoreSelectRef.current) {
      ignoreSelectRef.current = false;
      return;
    }
    const currPos = inputRef.current?.selectionEnd;
    if (typeof currPos === 'number') inputCaretPositionRef.current = currPos;
  }, []);

  useLayoutEffect(() => {
    const containerWidth = containerRef.current?.offsetWidth ?? MIN_INPUT_WIDTH;
    const prefixWidth = prefixRef.current?.offsetWidth ?? 0;
    const suffixWidth = suffixRef.current?.offsetWidth ?? 0;
    const currencyWidth = currencyRef.current?.offsetWidth ?? 0;
    const fakeWidth = fakeEleRef.current?.offsetWidth ?? 0;
    const gapWidth = prefixWidth && suffixWidth && currencyWidth
      ? 24
      : (prefixWidth && suffixWidth) || (prefixWidth && currencyWidth) || (suffixWidth && currencyWidth)
        ? 16
        : prefixWidth || suffixWidth || currencyWidth
          ? 8
          : 0;

    const maxWidth = containerWidth - prefixWidth - suffixWidth - currencyWidth - gapWidth;
    const isMax = fakeWidth >= maxWidth;
    setWidth(Math.min(maxWidth, Math.max(fakeWidth, MIN_INPUT_WIDTH)));
    setIsMaxWidth(isMax);
    if (isFocus) scrollToEnd(true);
  }, [_value, prefix, suffix, currency, isFocus]);

  useLayoutEffect(() => {
    let val = typeof value === 'undefined' ? _value : value;
    let hasDecimalPoint = false;
    let isStandaloneMinus = false;
    if (typeof val === 'string') {
      if (val === '') {
        val = null;
      } else {
        val = normalizeNumberInput(val).split(',').join('');
        hasDecimalPoint = !!val && val.endsWith('.');
        if (hasDecimalPoint) val = val.slice(0, -1);
        if (!negative) val = val.replace(/-/g, '');
        isStandaloneMinus = !!negative && val === '-';
        if (!isStandaloneMinus && isNaN(+val)) return;
      }
    } else if (val !== null && typeof val !== 'number' && typeof val !== 'bigint') return;

    if (!negative) {
      if (typeof val === 'number') {
        val = Math.abs(val);
      } else if (typeof val === 'bigint') {
        const zero = BigInt(0);
        val = val < zero ? -val : val;
      }
    }

    if (
      (typeof val === 'string' || typeof val === 'number') &&
      (typeof maxFractionDigits === 'number' || typeof maxFractionDigits === 'bigint')
    ) {
      const [int, decimal] = ('' + val).split('.');
      const maxDecimals = Number(maxFractionDigits);
      if (decimal != null && decimal.length > maxDecimals) {
        const truncatedDecimals = decimal.slice(0, maxDecimals);
        val = `${int}.${truncatedDecimals}`;
        if (typeof value === 'undefined') {
          setValue(val);
        } else {
          const syntheticEvent = {
            target: inputRef.current,
          } as unknown as ChangeEvent<HTMLInputElement>;
          onChangeRef.current?.(syntheticEvent, val ?? '');
        }
        return;
      }
    }

    if (typeof val === 'string' || typeof val === 'number' || typeof val === 'bigint') {
      val = calcValueInRange('' + val, min, max);
    }

    if (val === '' || val == null) {
      setValue(null);
    } else {
      if (isStandaloneMinus) {
        val = '-';
      } else {
        const strVal = '' + val;
        const decimals = strVal.match(/\.(\d+)$/)?.[1]?.length ?? 0;
        const bn = BigNumber(strVal);
        let normalized = bn.toFixed(decimals);
        if (negative && strVal.trim().startsWith('-') && bn.isZero()) {
          normalized = normalized.startsWith('-') ? normalized : `-${normalized}`;
        }
        val = `${normalized}${hasDecimalPoint ? '.' : ''}`.trim();
      }
      setValue(val);
    }
    calcCaretPos(val ?? '', hasDecimalPoint ? 2 : 0, Math.max(inputCaretPositionRef.current, 0));
    ignoreSelectRef.current = true;
  }, [value, maxFractionDigits, min, max, negative]);

  useEffect(() => {
    onChangeRef.current = onChange;
    valueRef.current = {
      value,
      _value,
      formattedValue,
      min,
      max,
      negative,
      maxFractionDigits
    };
  }, [_value, value, formattedValue, min, max, negative, maxFractionDigits, onChange]);

  return <div
    className={classes('wrapper', joinCls(
      wrapperCls,
      classes(size),
      invalid && classes('invalid'),
      success && classes('success'),
      disabled && classes('disabled'),
      readOnly && classes('readonly'),
      _value && classes('filled'),
    ))}
  >
    {
      label
        ? loading
          ? <Skeleton width='72px' height='18px' className={classes('label-loading')} />
          : <span className={classes('label', joinCls(required && classes('label-required'), labelCls))}>{label}</span>
        : null
    }
    <div
      ref={containerRef}
      className={classes(void 0, joinCls(className, isFocus && classes('focus')))}
      onClick={(e) => {
        if (e.target instanceof HTMLInputElement) return;
        inputRef.current?.focus();
        if (isMaxWidth) scrollToEnd();
      }}
    >
      {
        prefix && <span
          ref={prefixRef}
          className={classes('prefix', prefixEleCls)}
        >
          {prefix}
        </span>
      }
      <div
        className={classes('element', (!isFocus && isMaxWidth) ? classes('element-max') : '')}
      >
        <input
          {...rest}
          ref={inputRef}
          value={formattedValue}
          placeholder={placeholder}
          readOnly={readOnly}
          disabled={disabled}
          style={{ '--input-width': `${_width}px` } as CSSProperties}
          onChange={handleChange}
          onSelect={handleSelect}
          onFocus={e => {
            setIsFocus(true);
            onFocus?.(e);
          }}
          onBlur={e => {
            setIsFocus(false);
            onBlur?.(e);
          }}
        />
      </div>
      {
        currency && <span
          ref={currencyRef}
          className={classes('currency')}
        >
          {currency}
        </span>
      }
      {loading ? <Spinner className={classes('suffix-loading')} strokeWidth='4' /> : suffix ? <span ref={suffixRef} className={classes('suffix', suffixEleCls)}>{suffix}</span> : null}
      <span
        ref={fakeEleRef}
        className={classes('fake')}
        onClick={e => e.stopPropagation()}
      >
        {formattedValue}
      </span>
    </div>
    {
      (message || footnote) && <div className={classes('extra')}>
        {message && <div className={classes('message', messageCls)}>{message}</div>}
        {footnote && <div className={classes('footnote', footnoteCls)}>{footnote}</div>}
      </div>
    }
  </div>;
};

export default memo(InputAmount);
