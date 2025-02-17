import type { ReactNode } from 'react';
import type { InputTextProps as PrimeInputTextProps } from 'primereact/inputtext';
import type { InputNumberProps as PrimeInputNumberProps } from 'primereact/inputnumber';
import type { InputMaskProps as PrimeInputMaskProps } from 'primereact/inputmask';
import type { InputTextareaProps as PrimeInputTextareaProps } from 'primereact/inputtextarea';
import type { InputOtpProps as PrimeInputOtpProps } from 'primereact/inputotp';
import type { PasswordProps } from 'primereact/password';
import type { AutoCompleteProps } from 'primereact/autocomplete';

export interface InputBaseProps {
  prefixCls?: string;
  wrapperCls?: string;
  labelCls?: string;
  messageCls?: string;
  addons?: ReactNode;
  label?: ReactNode;
  message?: ReactNode;
  required?: boolean;
  rounded?: boolean;
  size?: 'large' | 'small';
  success?: boolean;
}

export interface InputTextProps extends Omit<PrimeInputTextProps, 'size' | 'prefix' | 'suffix'>, InputBaseProps{
  type?: 'text';
  prefix?: ReactNode;
  suffix?: ReactNode;
}

export interface InputNumberProps extends Omit<PrimeInputNumberProps, 'size' | 'prefix' | 'suffix'>, InputBaseProps{
  type: 'number';
  prefix?: ReactNode;
  suffix?: ReactNode;
}

export interface InputMaskProps extends Omit<PrimeInputMaskProps, 'size' | 'prefix' | 'suffix'>, InputBaseProps{
  type: 'mask';
}

export interface InputTextareaProps extends Omit<PrimeInputTextareaProps, 'size' | 'prefix' | 'suffix'>, InputBaseProps{
  type: 'textarea';
  maxLength?: number;
  showCount?: boolean;
}

export interface InputOtpProps extends Omit<PrimeInputOtpProps, 'size' | 'prefix' | 'suffix'>, InputBaseProps{
  type: 'otp';
}

export interface InputPwdProps extends Omit<PasswordProps, 'size' | 'prefix' | 'suffix'>, InputBaseProps{
  type: 'password';
}

export interface InputAutoCompleteProps extends Omit<AutoCompleteProps, 'size' | 'prefix' | 'suffix'>, InputBaseProps{
  type: 'autocomplete';
}

export type InputProps = InputTextProps | InputNumberProps | InputMaskProps | InputTextareaProps | InputOtpProps | InputPwdProps | InputAutoCompleteProps;
