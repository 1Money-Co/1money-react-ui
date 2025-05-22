import { memo, useState, useCallback, useRef, useEffect } from 'react';
import { InputNumber } from 'primereact/inputnumber';
import { numericFormatter } from 'react-number-format';
import classnames from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren, CSSProperties, KeyboardEvent } from 'react';
import type { InputNumberChangeEvent, InputNumber as InputNumberClass } from 'primereact/inputnumber';
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
    onClick,
    ...rest
  } = props;
  const classes = classnames(prefixCls);

  const inputRef = useRef<InputNumberClass>(null);
  const fakeEleRef = useRef<HTMLSpanElement>(null);
  const prefixRef = useRef<HTMLSpanElement>(null);
  const suffixRef = useRef<HTMLSpanElement>(null);
  const currencyRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [_value, setValue] = useState<number | string | null>(null);
  const [_width, setWidth] = useState<number>(MIN_INPUT_WIDTH);
  const [isMaxWidth, setIsMaxWidth] = useState<boolean>(false);

  const handleChange = useCallback((e: InputNumberChangeEvent) => {
    setValue(e.value);
    onChange?.(e);
  }, [onChange]);

  const handleKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case '.':
        setValue(prev => `${prev}.`);
        break;
      case 'Backspace':
        if (_value == null) return;
        // eslint-disable-next-line no-case-declarations
        const str = _value.toString();
        if (str[str.length - 2] === '.') {
          setTimeout(() => {
            setValue(`${str.slice(0, -1)}`);
          }, 0);
        }
        break;
      default:
        break;
    }
  }, [_value]);

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
    setWidth(Math.min(maxWidth, Math.max(fakeWidth, MIN_INPUT_WIDTH)));
    setIsMaxWidth(fakeWidth >= maxWidth);
  }, [_value]);

  useEffect(() => setValue(value ?? null), [value]);

  return <div className={classes('wrapper', [wrapperCls, invalid ? classes('invalid') : undefined].join(' ').trim())}>
    <div
      ref={containerRef}
      className={classes(void 0, className)}
    >
      {
        prefix && <span
          ref={prefixRef}
          className={classes('prefix')}
          onClick={() => inputRef.current?.focus()}
        >
          {prefix}
        </span>
      }
      <InputNumber
        {...rest}
        mode='decimal'
        ref={inputRef}
        value={value}
        placeholder={placeholder}
        className={classes('element', isMaxWidth ? classes('element-max') : '')}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        style={{ '--input-width': `${_width}px` } as CSSProperties}
        onClick={(e) => {
          const target = e.target;
          if (!(target instanceof HTMLInputElement)) {
            const input = inputRef.current?.getInput();
            if (!input) return;
            // @ts-expect-error
            const len = input.value?.length;
            // @ts-expect-error
            input.setSelectionRange(len, len);
            // @ts-expect-error
            input.scrollLeft = input.scrollWidth;
            // @ts-expect-error
            input.focus();
          }
          onClick?.(e);
        }}
      />
      {
        currency && <span
          ref={currencyRef}
          className={classes('currency')}
          onClick={() => inputRef.current?.focus()}
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
