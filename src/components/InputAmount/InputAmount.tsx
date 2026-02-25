import { memo, useMemo, useState, useRef, useLayoutEffect } from 'react';
import { Skeleton } from 'primereact/skeleton';
import Spinner from '@/components/Spinner';
import useLatest from '@/components/useLatest';
import useEventCallback from '@/components/useEventCallback';
import { default as classnames, joinCls } from '@/utils/classnames';
import {
  MIN_INPUT_WIDTH,
  DECIMAL_POINT_OFFSET,
  SKELETON_LABEL_WIDTH,
  SKELETON_LABEL_HEIGHT,
  SPINNER_STROKE_WIDTH,
  CSS_VAR_INPUT_WIDTH,
  DEFAULT_TYPE,
  DEFAULT_SIZE,
  DEFAULT_PLACEHOLDER,
  DEFAULT_PREFIX_CLS,
  CHAR_MINUS,
  CHAR_COMMA,
  CHAR_DOT,
  isNumericType,
  stripCommas,
  stripMinus,
  formatThousands,
  calcValueInRange,
  normalizeValue,
  truncateFractionDigits,
  calcGapWidth,
  parseRawInput,
  absValue,
} from './helper';
/* import types */
import type { FC, PropsWithChildren, CSSProperties, ChangeEvent, FocusEvent, MouseEvent } from 'react';
import type { InputAmountBaseProps, InputAmountNormalProps, InputAmountPrimaryProps, InputAmountProps } from './interface';

export const InputAmount: FC<PropsWithChildren<InputAmountProps>> = props => {
  const type = props.type ?? DEFAULT_TYPE;
  const size = type === 'normal'
    ? (props as InputAmountNormalProps).size ?? DEFAULT_SIZE
    : DEFAULT_SIZE;
  const footnote = type === 'normal' ? undefined : (props as InputAmountPrimaryProps).footnote;
  const footnoteCls = type === 'normal' ? undefined : (props as InputAmountPrimaryProps).footnoteCls;

  const rawBaseProps = { ...props } as InputAmountBaseProps & {
    type?: InputAmountProps['type'];
    size?: InputAmountNormalProps['size'];
    footnote?: InputAmountPrimaryProps['footnote'];
    footnoteCls?: InputAmountPrimaryProps['footnoteCls'];
  };
  delete rawBaseProps.type;
  delete rawBaseProps.size;
  delete rawBaseProps.footnote;
  delete rawBaseProps.footnoteCls;
  const baseProps = rawBaseProps as InputAmountBaseProps;

  const {
    value,
    maxFractionDigits,
    placeholder = DEFAULT_PLACEHOLDER,
    min, max,
    className, wrapperCls, labelCls, prefixCls = DEFAULT_PREFIX_CLS, messageCls, prefixEleCls, suffixEleCls,
    invalid, negative, required, loading, success, disabled, readOnly,
    label, prefix, suffix, currency, message,
    onChange, onBlur, onFocus,
    ...rest
  } = baseProps;

  const cls = classnames(`${prefixCls}-${type}`);

  // ── Refs ──
  const inputRef = useRef<HTMLInputElement>(null);
  const fakeEleRef = useRef<HTMLSpanElement>(null);
  const prefixRef = useRef<HTMLSpanElement>(null);
  const suffixRef = useRef<HTMLSpanElement>(null);
  const currencyRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const caretPosRef = useRef(0);
  const ignoreSelectRef = useRef(false);
  const onChangeRef = useLatest(onChange);

  // ── State ──
  const [innerValue, setInnerValue] = useState<string | null>(null);
  const [inputWidth, setInputWidth] = useState(MIN_INPUT_WIDTH);
  const [isMaxWidth, setIsMaxWidth] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const isFocusRef = useLatest(isFocus);

  const isUncontrolled = typeof value === 'undefined';

  const formattedValue = useMemo(
    () => formatThousands(innerValue ?? '', negative),
    [innerValue, negative],
  );

  const stateRef = useLatest({
    innerValue, formattedValue,
    min, max, negative, maxFractionDigits,
  });

  // ── Helpers ──
  const scrollToEnd = useEventCallback((sticky = false) => {
    const input = inputRef.current;
    if (!input) return;

    if (sticky) {
      input.setSelectionRange(caretPosRef.current, caretPosRef.current);
    } else {
      const len = input.value?.length;
      input.setSelectionRange(len, len);
      input.scrollLeft = input.scrollWidth;
    }
    input.focus();
  });

  const calcCaretPos = useEventCallback((
    val: string,
    offset: number = 0,
    currPos?: number,
  ) => {
    const input = inputRef.current;
    if (!input) return;

    const { innerValue: prev, negative, formattedValue } = stateRef.current;
    const formattedNewVal = formatThousands(val, negative);
    const originOffset = val.length - (prev?.length ?? 0);
    let position = currPos ?? input.selectionEnd ?? 0;

    // Map formatted position back to raw position
    position = stripCommas(formattedValue.slice(0, Math.max(position, 0))).length;

    // Map raw position forward to formatted position
    const posVal = val.slice(0, position + originOffset);
    formattedNewVal.split('').reduce<string[]>((acc, char, ind) => {
      if (char === CHAR_COMMA) return acc;
      acc.push(char);
      if (acc.join('') === posVal) position = ind + 1;
      return acc;
    }, []);

    caretPosRef.current = position + offset;
  });

  const commitValue = useEventCallback((
    val: string,
    hasDecimalPoint: boolean,
    e?: ChangeEvent<HTMLInputElement>,
  ) => {
    if (isUncontrolled) {
      setInnerValue(val === '' ? null : val);
      calcCaretPos(val, hasDecimalPoint ? DECIMAL_POINT_OFFSET : 0, Math.max(caretPosRef.current, 0));
      ignoreSelectRef.current = true;
    }
    if (e) onChangeRef.current?.(e, val);
  });

  // ── Event Handlers ──
  const handleChange = useEventCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (disabled || readOnly) return;

    const { innerValue, formattedValue, min, max, negative, maxFractionDigits } = stateRef.current;
    const parsed = parseRawInput(e.target.value ?? '', negative);
    if (!parsed) return;

    let { val } = parsed;
    const { hasDecimalPoint, isStandaloneMinus } = parsed;

    if (val === innerValue && !hasDecimalPoint) return;

    // Enforce fraction digit limit
    if (isNumericType(maxFractionDigits)) {
      const { int, truncated, overflow } = truncateFractionDigits(val, Number(maxFractionDigits));
      if (overflow) {
        const [oldInt] = formattedValue.split(CHAR_DOT);
        if (stripCommas(oldInt) === int) return;
        val = truncated;
      }
    }

    // Clamp to min/max range
    if (isNumericType(min) || isNumericType(max)) {
      val = calcValueInRange(val, min, max);
    }

    // Normalize the final value
    if (val !== '') {
      val = isStandaloneMinus ? CHAR_MINUS : normalizeValue(val, hasDecimalPoint, negative);
    }

    commitValue(val, hasDecimalPoint, e);
  });

  const handleSelect = useEventCallback(() => {
    if (ignoreSelectRef.current) {
      ignoreSelectRef.current = false;
      return;
    }
    const currPos = inputRef.current?.selectionEnd;
    if (typeof currPos === 'number') caretPosRef.current = currPos;
  });

  const handleFocus = useEventCallback((e: FocusEvent<HTMLInputElement>) => {
    setIsFocus(true);
    onFocus?.(e);
  });

  const handleBlur = useEventCallback((e: FocusEvent<HTMLInputElement>) => {
    setIsFocus(false);
    onBlur?.(e);
  });

  const handleContainerClick = useEventCallback((e: MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLInputElement) return;
    inputRef.current?.focus();
    if (isMaxWidth) scrollToEnd();
  });

  // ── Layout Effects ──
  useLayoutEffect(() => {
    const containerWidth = containerRef.current?.offsetWidth ?? MIN_INPUT_WIDTH;
    const prefixWidth = prefixRef.current?.offsetWidth ?? 0;
    const suffixWidth = suffixRef.current?.offsetWidth ?? 0;
    const currencyWidth = currencyRef.current?.offsetWidth ?? 0;
    const fakeWidth = fakeEleRef.current?.offsetWidth ?? 0;
    const gapWidth = calcGapWidth(!!prefixWidth, !!suffixWidth, !!currencyWidth);

    const maxWidth = containerWidth - prefixWidth - suffixWidth - currencyWidth - gapWidth;
    setInputWidth(Math.min(maxWidth, Math.max(fakeWidth, MIN_INPUT_WIDTH)));
    setIsMaxWidth(fakeWidth >= maxWidth);
    if (isFocusRef.current) scrollToEnd(true);
  }, [innerValue, prefix, suffix, currency, loading]);

  useLayoutEffect(() => {
    let val = isUncontrolled ? innerValue : value;
    let hasDecimalPoint = false;
    let isStandaloneMinus = false;

    if (typeof val === 'string') {
      if (val === '') {
        val = null;
      } else {
        const parsed = parseRawInput(val, negative);
        if (!parsed) return;
        val = parsed.val;
        hasDecimalPoint = parsed.hasDecimalPoint;
        isStandaloneMinus = parsed.isStandaloneMinus;
        if (!negative) val = stripMinus(val);
      }
    } else if (val !== null && !isNumericType(val)) return;

    // Ensure non-negative when negative is not allowed
    if (!negative && isNumericType(val)) {
      val = absValue(val);
    }

    // Enforce fraction digit limit
    if (
      (typeof val === 'string' || typeof val === 'number') &&
      isNumericType(maxFractionDigits)
    ) {
      const { truncated, overflow } = truncateFractionDigits(`${val}`, Number(maxFractionDigits));
      if (overflow) {
        if (isUncontrolled) {
          setInnerValue(truncated);
        } else {
          onChangeRef.current?.(
            { target: inputRef.current } as unknown as ChangeEvent<HTMLInputElement>,
            truncated ?? '',
          );
        }
        return;
      }
    }

    // Clamp to min/max range
    if (isNumericType(val) || typeof val === 'string') {
      val = calcValueInRange(`${val}`, min, max);
    }

    if (val === '' || val == null) {
      setInnerValue(null);
    } else {
      val = isStandaloneMinus ? CHAR_MINUS : normalizeValue(`${val}`, hasDecimalPoint, negative);
      setInnerValue(val);
    }

    calcCaretPos(val ?? '', hasDecimalPoint ? DECIMAL_POINT_OFFSET : 0, Math.max(caretPosRef.current, 0));
    ignoreSelectRef.current = true;
  }, [value, maxFractionDigits, min, max, negative]);

  // ── Render ──
  const wrapperClassName = cls('wrapper', joinCls(
    wrapperCls,
    cls(size),
    invalid && cls('invalid'),
    success && cls('success'),
    disabled && cls('disabled'),
    readOnly && cls('readonly'),
    innerValue && cls('filled'),
  ));

  const renderLabel = () => {
    if (!label) return null;
    if (loading) {
      return <Skeleton width={SKELETON_LABEL_WIDTH} height={SKELETON_LABEL_HEIGHT} className={cls('label-loading')} />;
    }
    return <span className={cls('label', joinCls(required && cls('label-required'), labelCls))}>{label}</span>;
  };

  const renderSuffix = () => {
    if (loading) return <Spinner className={cls('suffix-loading')} strokeWidth={SPINNER_STROKE_WIDTH} />;
    if (suffix) return <span ref={suffixRef} className={cls('suffix', suffixEleCls)}>{suffix}</span>;
    return null;
  };

  return (
    <div className={wrapperClassName}>
      {renderLabel()}

      <div
        ref={containerRef}
        className={cls(void 0, joinCls(className, isFocus && cls('focus')))}
        onClick={handleContainerClick}
      >
        {prefix && (
          <span ref={prefixRef} className={cls('prefix', prefixEleCls)}>
            {prefix}
          </span>
        )}

        <div className={cls('element', (!isFocus && isMaxWidth) ? cls('element-max') : '')}>
          <input
            {...rest}
            ref={inputRef}
            value={formattedValue}
            placeholder={placeholder}
            readOnly={readOnly}
            disabled={disabled}
            style={{ [CSS_VAR_INPUT_WIDTH]: `${inputWidth}px` } as CSSProperties}
            onChange={handleChange}
            onSelect={handleSelect}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>

        {currency && (
          <span ref={currencyRef} className={cls('currency')}>
            {currency}
          </span>
        )}

        {renderSuffix()}

        <span
          ref={fakeEleRef}
          className={cls('fake')}
          onClick={e => e.stopPropagation()}
        >
          {formattedValue}
        </span>
      </div>

      {(message || footnote) && (
        <div className={cls('extra')}>
          {message && <div className={cls('message', messageCls)}>{message}</div>}
          {footnote && <div className={cls('footnote', footnoteCls)}>{footnote}</div>}
        </div>
      )}
    </div>
  );
};

export default memo(InputAmount);
