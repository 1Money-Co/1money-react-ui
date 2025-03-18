import { memo, useRef, useMemo, useState, useCallback, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { InputMask } from 'primereact/inputmask';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputOtp } from 'primereact/inputotp';
import { Password } from 'primereact/password';
import { AutoComplete } from 'primereact/autocomplete';
import classnames from '@/utils/classnames';
import { Icons } from '../Icons';

/* import types */
import type { FC, PropsWithChildren, ChangeEvent } from 'react';
import type { InputProps, InputOtpProps, InputPwdProps } from './interface';

export const Input: FC<PropsWithChildren<InputProps>> = props => {
  const {
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
    // @ts-ignore
    prefix,
    // @ts-ignore
    suffix,
    maxLength,
    // @ts-ignore
    showCount,
    value,
    defaultValue,
    onChange,
    ...rest
  } = props;
  const classes = classnames(prefixCls);

  const [val, setVal] = useState(value || defaultValue || '');

  const handleChange = useCallback((e: Parameters<Exclude<InputProps['onChange'], undefined>>[0]) => {
    const _val = 'target' in e ? e.target.value : e.value;
    setVal((type === 'textarea' ? _val?.slice(0, maxLength) : _val) || '');
    onChange?.(e as any);
  }, [onChange, maxLength, type]);

  const inputRef = useRef<HTMLInputElement>(null);

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
          showIcon={({ iconProps }) => <Icons name='viewBalance' onClick={iconProps.onClick} size={20} color='#131313' />}
          hideIcon={({ iconProps }) => <Icons name='hideBalance' onClick={iconProps.onClick} size={20} color='#131313' />}
          {..._props}
        />;
      case 'autocomplete':
        return AutoComplete as new () => AutoComplete;
      default:
        return InputText;
    }
  }, [type]);

  useEffect(() => {
    if (type === 'textarea' && val !== value && value !== undefined) {
      setVal(value);
    }
  }, [type, val, value]);

  return (
    <div className={classes('wrapper', wrapperCls)}>
      {label && <span className={classes('label', [required ? classes('label-required') : '', labelCls].join(' '))}>{label}</span>}
      <div
        onClick={() => type !== 'otp' && inputRef.current?.focus()}
        className={classes('inner', [
          classes(`inner-${size}`),
          success ? classes('inner-success') : '',
          invalid ? classes('inner-invalid') : '',
          disabled ? classes('inner-disabled') : '',
          val ? classes('inner-filled') : '',
        ].join(' '))}
      >
        {/* {addons && <div className={classes('addons')}>{addons}</div>} */}
        {prefix && <div onClick={e => e.stopPropagation()} className={classes('prefix')}>{prefix}</div>}
        <InputComponent
          {...rest as any}
          ref={inputRef}
          value={type === 'textarea' ? val : value}
          defaultValue={type === 'textarea' ? undefined : defaultValue}
          onChange={handleChange}
          invalid={invalid}
          disabled={disabled}
          required={required}
          maxLength={maxLength}
          className={classes(void 0, [
            classes(size),
            classes(type),
            classes(`${type}-${size}`),
            success ? classes('success') : '',
            className,
          ].join(' '))}
        />
        {suffix && <div onClick={e => e.stopPropagation()} className={classes('suffix')}>{suffix}</div>}
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
          {message}
        </span>
      }
    </div>
  );
};

export default memo(Input);
