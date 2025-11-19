import { memo, useRef, useMemo, useState, useCallback, useEffect, useImperativeHandle } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { InputMask } from 'primereact/inputmask';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputOtp } from 'primereact/inputotp';
import { Password } from 'primereact/password';
import { AutoComplete } from 'primereact/autocomplete';
import { Skeleton } from 'primereact/skeleton';
import classnames from '@/utils/classnames';
import { Icons } from '../Icons';
import Spinner from '../Spinner';

/* import types */
import type { FC, PropsWithChildren, ChangeEvent } from 'react';
import type { InputProps, InputOtpProps, InputPwdProps, InputNumberClass, InputMaskClass, PasswordClass, AutoCompleteClass } from './interface';

export const Input: FC<PropsWithChildren<InputProps>> = props => {
  const {
    ref,
    label,
    message,
    required,
    success,
    invalid,
    disabled,
    type = 'text',
    className = '',
    prefixCls = 'input',
    wrapperCls,
    labelCls,
    messageCls,
    size = 'large',
    prefixEle,
    suffixEle,
    prefixEleCls,
    suffixEleCls,
    maxLength,
    showMessageIcon = false,
    // @ts-expect-error
    showCount,
    value,
    defaultValue,
    onChange,
    readOnly,
    loading,
    ...rest
  } = props;
  const classes = classnames(prefixCls);

  const [val, setVal] = useState(value || defaultValue || '');

  const handleChange = useCallback((e: Parameters<Exclude<InputProps['onChange'], undefined>>[0]) => {
    if (loading || disabled) return;
    const _val = 'target' in e ? e.target.value : e.value;
    setVal((type === 'textarea' ? _val?.slice(0, maxLength) : _val) || '');
    onChange?.(e as any);
  }, [onChange, maxLength, type, loading, disabled]);

  const inputRef = useRef<HTMLInputElement | InputNumberClass | InputMaskClass | HTMLTextAreaElement | PasswordClass | AutoCompleteClass | null>(null);
  const _ref = useRef<HTMLInputElement | InputNumberClass | InputMaskClass | HTMLTextAreaElement | PasswordClass | AutoCompleteClass | null>(null);

  const suffixLoading = useMemo(() => loading && type !== 'otp', [loading, type]);

  const InputComponent = useMemo(() => {
    switch (type) {
      case 'text':
        return InputText;
      case 'number':
        return InputNumber as new () => InputNumber;
      case 'mask':
        return InputMask as new () => InputMask;
      case 'textarea':
        return InputTextarea;
      case 'otp':
        return (_props: InputOtpProps) => {
          const { className: _className, ..._rest } = _props;
          return <div className={_className}>
            <InputOtp {..._rest as any} />
          </div>;
        };
      case 'password':
        return (_props: Omit<InputPwdProps, 'size' | 'prefix' | 'suffix'>) => <Password
          feedback={false}
          showIcon={({ iconProps }) => suffixLoading ? null : <Icons name='hideBalance' onClick={iconProps.onClick} size={20} color='#131313' />}
          hideIcon={({ iconProps }) => suffixLoading ? null : <Icons name='viewBalance' onClick={iconProps.onClick} size={20} color='#131313' />}
          {..._props}
        />;
      case 'autocomplete':
        return AutoComplete as new () => AutoComplete;
      default:
        return InputText;
    }
  }, [type, suffixLoading]);

  useImperativeHandle(ref ?? _ref, () => inputRef.current!);

  useEffect(() => {
    if (type === 'textarea' && val !== value && value !== undefined) {
      setVal(value);
    }
  }, [type, val, value]);

  return (
    <div className={classes('wrapper', wrapperCls)}>
      {
        label
          ? loading
            ? <Skeleton width='72px' height='18px' className={classes('label-loading')} />
            : <span className={classes('label', [required ? classes('label-required') : '', labelCls].join(' '))}>{label}</span>
          : null
      }
      <div
        onClick={() => {
          if (loading || disabled) return;
          type !== 'otp' && inputRef.current?.focus();
        }}
        className={classes('inner', [
          classes(`inner-${size}`),
          success ? classes('inner-success') : '',
          invalid ? classes('inner-invalid') : '',
          disabled ? classes('inner-disabled') : '',
          readOnly ? classes('inner-readonly') : '',
          val ? classes('inner-filled') : '',
        ].join(' '))}
      >
        {prefixEle && <div onClick={e => e.stopPropagation()} className={classes('prefix', prefixEleCls)}>{prefixEle}</div>}
        <InputComponent
          {...rest as any}
          ref={inputRef}
          value={type === 'textarea' ? val : value}
          defaultValue={type === 'textarea' ? undefined : defaultValue}
          onChange={handleChange}
          invalid={invalid}
          disabled={disabled || loading}
          required={required}
          maxLength={maxLength}
          readOnly={readOnly}
          className={classes(void 0, [
            classes(size),
            classes(type),
            classes(`${type}-${size}`),
            success ? classes('success') : '',
            showCount ? classes('show-count') : '',
            className,
          ].join(' '))}
        />
        {suffixLoading ? <Spinner className={classes('loading')} strokeWidth='4' /> : suffixEle ? <div onClick={e => e.stopPropagation()} className={classes('suffix', suffixEleCls)}>{suffixEle}</div> : null}
        {(showCount && maxLength != undefined) && <div className={classes(`${type}-count`)}>{`${val.length}/${maxLength}`}</div>}
      </div>
      {
        message && <span
          className={classes('message', [
            success ? classes('message-success') : '',
            invalid ? classes('message-error') : '',
            messageCls
          ].join(' '))}
        >
          {
            showMessageIcon && (
              success ? (
                <Icons name='securityCheck' size={16} color='#000' />
              ) : (
                <Icons name='error' size={16} color='#AE0000' />
              )
            )
          }
          {message}
        </span>
      }
    </div>
  );
};

export default memo(Input);
