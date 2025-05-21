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
    invalid,
    placeholder = '0',
    prefix,
    currency,
    suffix,
    message,
    footnote,
    onChange,
    ...rest
  } = props;
  const classes = classnames(prefixCls);

  const inputRef = useRef<InputNumberClass>(null);
  const fakeEleRef = useRef<HTMLSpanElement>(null);

  const [_value, setValue] = useState<number | string | null>(null);
  const [_width, setWidth] = useState<number>(MIN_INPUT_WIDTH);

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
    setWidth(fakeEleRef.current?.offsetWidth || MIN_INPUT_WIDTH);
  }, [_value]);

  useEffect(() => setValue(value ?? null), [value]);

  return <div className={classes('wrapper', [wrapperCls, invalid ? classes('invalid') : undefined].join(' ').trim())}>
    <div
      className={classes(void 0, className)}
    >
      {
        prefix && <span
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
        className={classes('element')}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        style={{ '--input-width': `${_width}px` } as CSSProperties}
      />
      {
        currency && <span
          className={classes('currency')}
          onClick={() => inputRef.current?.focus()}
        >
          {currency}
        </span>
      }
      {suffix && <span className={classes('suffix')}>{suffix}</span>}
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
        {message && <span className={classes('message')}>{message}</span>}
        {footnote && <span className={classes('footnote')}>{footnote}</span>}
      </div>
    }
  </div>;
};

export default memo(InputAmount);
