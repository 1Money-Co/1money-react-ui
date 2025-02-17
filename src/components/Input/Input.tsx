import { memo, useRef, useMemo } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { InputMask } from 'primereact/inputmask';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputOtp } from 'primereact/inputotp';
import { Password } from 'primereact/password';
import { AutoComplete } from 'primereact/autocomplete';
import propTypes from 'prop-types';
import classnames from '@/utils/classnames';
import { Icons } from '../Icons';

/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { InputProps, InputOtpProps, InputPwdProps } from './interface';

export const Input: FC<PropsWithChildren<InputProps>> = props => {
  const {
    addons,
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
    ...rest
  } = props;
  const classes = classnames(prefixCls);

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
            <InputOtp{..._rest as any} />
          </div>;
        };
      case 'password':
        return (_props: Omit<InputPwdProps, 'size' | 'prefix' | 'suffix'>) => <Password
          feedback={false}
          showIcon={({ iconProps }) => <Icons name='eyeOn' onClick={iconProps.onClick} size={20} color='#808080' />}
          hideIcon={({ iconProps }) => <Icons name='eyeClose' onClick={iconProps.onClick} size={20} color='#808080' />}
          {..._props}
        />;
      case 'autocomplete':
        return AutoComplete as new () => AutoComplete;
      default:
        return InputText;
    }
  }, [type]);

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
        ].join(' '))}
      >
        {addons && <div className={classes('addons')}>{addons}</div>}
        {prefix && <div onClick={e => e.stopPropagation()} className={classes('prefix')}>{prefix}</div>}
        <InputComponent
          {...rest as any}
          ref={inputRef}
          invalid={invalid}
          disabled={disabled}
          required={required}
          className={classes(void 0, [
            classes(size),
            classes(type),
            classes(`${type}-${size}`),
            success ? classes('success') : '',
            className,
          ].join(' '))}
        />
        {suffix && <div onClick={e => e.stopPropagation()} className={classes('suffix')}>{suffix}</div>}
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
