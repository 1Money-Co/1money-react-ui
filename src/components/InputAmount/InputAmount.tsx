import { memo, useMemo, useState, useCallback, useRef, useEffect } from 'react';
import BigNumber from 'bignumber.js';
import { numericFormatter } from 'react-number-format';
import classnames from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren, CSSProperties, KeyboardEvent, ChangeEvent } from 'react';
import type { InputAmountProps } from './interface';

const MIN_INPUT_WIDTH = 33;

export const InputAmount: FC<PropsWithChildren<InputAmountProps>> = props => {
  const {
    value,
    children,
    className,
    wrapperCls,
    prefixCls = 'input-amount',
    messageCls,
    footnoteCls,
    invalid,
    placeholder = '0',
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

  const [_value, setValue] = useState<string | null>(null);
  const [_width, setWidth] = useState<number>(MIN_INPUT_WIDTH);
  const [isMaxWidth, setIsMaxWidth] = useState<boolean>(false);
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const formattedValue = useMemo(() => {
    return numericFormatter('' + (_value == null ? '' : _value), {
      thousandSeparator: true,
      allowNegative: true,
    });
  }, [_value]);

  const scrollToEnd = useCallback(() => {
    const input = inputRef.current;
    if (!input) return;
    const len = input.value?.length;
    input.setSelectionRange(len, len);
    input.scrollLeft = input.scrollWidth;
    input.focus();
  }, []);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    if (val != null) val = val.split(',').join('');
    const hasDecimalPoint = val.lastIndexOf('.') === val.length - 1;
    if (hasDecimalPoint) val = val.slice(0, -1);
    if (isNaN(+val)) return;
    setValue(val === '' ? null : `${BigNumber(val).toFixed()}${hasDecimalPoint ? '.' : ''}`.trim());
    onChange?.(e);
  }, [onChange]);

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
    if (isMax) scrollToEnd();
    setWidth(Math.min(maxWidth, Math.max(fakeWidth, MIN_INPUT_WIDTH)));
    setIsMaxWidth(isMax);
  }, [_value]);

  useEffect(() => {
    let val = value;
    if (typeof val === 'string') {
      val = val.split(',').join('');
      const hasDecimalPoint = val.lastIndexOf('.') === val.length - 1;
      if (hasDecimalPoint) val = val.slice(0, -1);
      if (isNaN(+val)) return;
    } else if (val !== null && typeof val !== 'number' && typeof val !== 'bigint') return;

    setValue(val == null ? null : BigNumber(val).toString());
  }, [value]);

  return <div
    className={classes('wrapper', [wrapperCls, invalid ? classes('invalid') : undefined].join(' ').trim())}
  >
    <div
      ref={containerRef}
      className={classes(void 0, [className, isFocus ? classes('focus') : ''].join(' ').trim())}
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
            allowNegative: true,
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
