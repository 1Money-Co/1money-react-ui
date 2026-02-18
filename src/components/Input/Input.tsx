import { memo, useRef, useImperativeHandle } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { InputMask } from 'primereact/inputmask';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputOtp } from 'primereact/inputotp';
import { Password } from 'primereact/password';
import { AutoComplete } from 'primereact/autocomplete';
import { Skeleton } from 'primereact/skeleton';
import { default as classnames, joinCls } from '@/utils/classnames';
import { Icons } from '../Icons';
import Spinner from '../Spinner';
import useControlledState from '../useControlledState';
import useEventCallback from '../useEventCallback';

/* import types */
import type { FC, PropsWithChildren, Ref } from 'react';
import type { InputProps, InputOtpProps, InputPwdProps, InputNumberClass, InputMaskClass, PasswordClass, AutoCompleteClass } from './interface';

const COLOR_PRIMARY_BLACK = '#131313';
const COLOR_BLACK = '#000';
const COLOR_ERROR = '#AE0000';

const OtpWrapper: FC<InputOtpProps> = ({ className: _className, ..._rest }) => (
  <div className={_className}>
    <InputOtp {..._rest as any} />
  </div>
);

const PasswordWrapper: FC<Omit<InputPwdProps, 'size' | 'prefix' | 'suffix'> & { suffixLoading?: boolean }> = ({ suffixLoading, ..._props }) => (
  <Password
    feedback={false}
    showIcon={({ iconProps }) => suffixLoading ? null : <Icons name='hideBalance' onClick={iconProps.onClick} size={20} color={COLOR_PRIMARY_BLACK} />}
    hideIcon={({ iconProps }) => suffixLoading ? null : <Icons name='viewBalance' onClick={iconProps.onClick} size={20} color={COLOR_PRIMARY_BLACK} />}
    {..._props}
  />
);

const INPUT_COMPONENT_MAP = {
  text: InputText,
  number: InputNumber as new () => InputNumber,
  mask: InputMask as new () => InputMask,
  textarea: InputTextarea,
  otp: OtpWrapper,
  password: PasswordWrapper,
  autocomplete: AutoComplete as new () => AutoComplete,
} as const;

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
    showCount,
    value,
    defaultValue,
    onChange,
    readOnly,
    loading,
    ...rest
  } = props;
  const classes = classnames(prefixCls);

  const [val, setVal] = useControlledState(defaultValue ?? '', value);

  const handleChange = useEventCallback((e: Parameters<Exclude<InputProps['onChange'], undefined>>[0]) => {
    if (loading || disabled) return;
    const _val = 'target' in e ? e.target.value : e.value;
    setVal((type === 'textarea' ? _val?.slice(0, maxLength) : _val) ?? '');
    onChange?.(e as any);
  });

  const inputRef = useRef<HTMLInputElement | InputNumberClass | InputMaskClass | HTMLTextAreaElement | PasswordClass | AutoCompleteClass | null>(null);

  const suffixLoading = loading && type !== 'otp';

  const InputComponent = INPUT_COMPONENT_MAP[type] ?? InputText;

  useImperativeHandle(ref as Ref<typeof inputRef.current>, () => inputRef.current!);

  const valStr = String(val ?? '');

  return (
    <div className={classes('wrapper', wrapperCls)}>
      {
        label
          ? loading
            ? <Skeleton width='72px' height='18px' className={classes('label-loading')} />
            : <span className={classes('label', joinCls(required && classes('label-required'), labelCls))}>{label}</span>
          : null
      }
      <div
        onClick={() => {
          if (loading || disabled) return;
          type !== 'otp' && inputRef.current?.focus();
        }}
        className={classes('inner', joinCls(
          classes(`inner-${size}`),
          success && classes('inner-success'),
          invalid && classes('inner-invalid'),
          disabled && classes('inner-disabled'),
          readOnly && classes('inner-readonly'),
          val && classes('inner-filled'),
        ))}
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
          suffixLoading={type === 'password' ? suffixLoading : undefined}
          className={classes(undefined, joinCls(
            classes(size),
            classes(type),
            classes(`${type}-${size}`),
            success && classes('success'),
            showCount && classes('show-count'),
            className,
          ))}
        />
        {suffixLoading ? <Spinner className={classes('loading')} strokeWidth='4' /> : suffixEle ? <div onClick={e => e.stopPropagation()} className={classes('suffix', suffixEleCls)}>{suffixEle}</div> : null}
        {(showCount && maxLength !== undefined) && <div className={classes(`${type}-count`)}>{`${valStr.length}/${maxLength}`}</div>}
      </div>
      {
        message && <span
          className={classes('message', joinCls(
            success && classes('message-success'),
            invalid && classes('message-error'),
            messageCls
          ))}
        >
          {
            showMessageIcon && (
              success ? (
                <Icons name='securityCheck' size={16} color={COLOR_BLACK} />
              ) : (
                <Icons name='error' size={16} color={COLOR_ERROR} />
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
