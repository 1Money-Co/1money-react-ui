import { memo, useMemo, useState, useCallback, useRef, useEffect } from 'react';
import BigNumber from 'bignumber.js';
import { numericFormatter } from 'react-number-format';
import { default as classnames, joinCls } from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren, CSSProperties, ChangeEvent } from 'react';
import type { InputAmountProps } from './interface';

const MIN_INPUT_WIDTH = 33;

const normalizeNumberInput = (val: string) =>
  val
    .replace(/[\u3002\uff0e\uff61]/g, '.')
    .replace(/[\uFF0C]/g, ',');

export const InputAmount: FC<PropsWithChildren<InputAmountProps>> = props => {
  const {
    value,
    maxFractionDigits,
    children,
    className,
    wrapperCls,
    prefixCls = 'input-amount',
    messageCls,
    footnoteCls,
    invalid,
    placeholder = '0',
    negative,
    prefix,
    currency,
    suffix,
    message,
    footnote,
    onChange,
    onBlur,
    onFocus,
    ...rest
  } = props;
  const classes = classnames(prefixCls);

  const inputRef = useRef<HTMLInputElement>(null);
  const fakeEleRef = useRef<HTMLSpanElement>(null);
  const prefixRef = useRef<HTMLSpanElement>(null);
  const suffixRef = useRef<HTMLSpanElement>(null);
  const currencyRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputCaretPositionRef = useRef<number>(0);

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

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    if (val != null) val = normalizeNumberInput(val).split(',').join('');
    const hasDecimalPoint = !!val && val.endsWith('.');
    if (hasDecimalPoint) val = val.slice(0, -1);
    if (!negative && val?.includes('-')) return;
    const isStandaloneMinus = negative && val === '-';
    if (!isStandaloneMinus && isNaN(+val)) return;
    if (val === _value && !hasDecimalPoint) return;
    if (typeof maxFractionDigits === 'number' || typeof maxFractionDigits === 'bigint') {
      const [, decimal] = val.split('.');
      if (decimal != null && decimal.length > Number(maxFractionDigits)) return;
    }
    if (inputRef.current) {
      const formattedNewVal = numericFormatter(val, {
        thousandSeparator: true,
        allowNegative: negative,
      });

      const isAdd = val.length > (_value?.length ?? 0);
      let position = inputRef.current.selectionStart ?? 0;
      const oldPosVal = formattedValue.slice(0, (position - (isAdd ? 1 : -1)));
      position = oldPosVal.split(',').join('').length + (isAdd ? 1 : -1);
      const posVal = val.slice(0, position);
      formattedNewVal.split('').reduce<string[]>((acc, char, ind) => {
        if (char === ',') return acc;
        else acc.push(char);
        if (acc.join('') === posVal) {
          position = ind + 1;
          return acc;
        }
        return acc;
      }, []);
      inputCaretPositionRef.current = position + (hasDecimalPoint ? 2 : 0);
    }

    if (typeof value === 'undefined') {
      if (val === '') {
        setValue(null);
      } else if (isStandaloneMinus) {
        setValue('-');
      } else {
        const decimals = val.match(/\.(\d+)$/)?.[1]?.length ?? 0;
        const bn = BigNumber(val);
        let normalized = bn.toFixed(decimals);
        if (negative && val.trim().startsWith('-') && bn.isZero()) {
          normalized = normalized.startsWith('-') ? normalized : `-${normalized}`;
        }
        setValue(`${normalized}${hasDecimalPoint ? '.' : ''}`.trim());
      }
    }

    onChange?.(e);
  }, [onChange, _value, value, formattedValue, maxFractionDigits, negative]);

  useEffect(() => {
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

  useEffect(() => {
    // clear negative sign if not allowed
    if (negative) return;
    if (typeof value !== 'undefined') return;
    if (_value == null) return;
    if (_value === '-') {
      setValue(null);
      return;
    }
    if (_value.startsWith('-')) setValue(_value.slice(1));
  }, [negative, value, _value]);

  useEffect(() => {
    let val = value;
    let hasDecimalPoint = false;
    if (typeof val === 'string') {
      if (val === '') {
        val = null;
      } else {
        val = normalizeNumberInput(val).split(',').join('');
        hasDecimalPoint = !!val && val.endsWith('.');
        if (hasDecimalPoint) val = val.slice(0, -1);
        if (!negative) val = val.replace(/-/g, '');
        if (negative && val === '-') {
          setValue('-');
          return;
        }
        if (isNaN(+val)) return;
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

    if ((typeof val === 'string' || typeof val === 'number') && (typeof maxFractionDigits === 'number' || typeof maxFractionDigits === 'bigint')) {
      const [int, decimal] = ('' + val).split('.');
      if (decimal != null && decimal.length > Number(maxFractionDigits)) {
        val = int + '.' + decimal.slice(0, Number(maxFractionDigits));
      }
    }
    
    if (val === '' || val == null) {
      setValue(null);
    } else {
      const strVal = '' + val;
      const decimals = strVal.match(/\.(\d+)$/)?.[1]?.length ?? 0;
      const bn = BigNumber(strVal);
      let normalized = bn.toFixed(decimals);
      if (negative && strVal.trim().startsWith('-') && bn.isZero()) {
        normalized = normalized.startsWith('-') ? normalized : `-${normalized}`;
      }
      setValue(`${normalized}${hasDecimalPoint ? '.' : ''}`.trim());
    }
  }, [value, maxFractionDigits, negative]);

  return <div
    className={classes('wrapper', joinCls(wrapperCls, invalid && classes('invalid')))}
  >
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
          className={classes('prefix')}
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
          style={{ '--input-width': `${_width}px` } as CSSProperties}
          onChange={handleChange}
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
      {suffix && <span ref={suffixRef} className={classes('suffix')}>{suffix}</span>}
      <span
        ref={fakeEleRef}
        className={classes('fake')}
        onClick={e => e.stopPropagation()}
      >
        {
          numericFormatter('' + (_value == null ? '' : _value), {
            thousandSeparator: true,
            allowNegative: negative,
          })
        }
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
