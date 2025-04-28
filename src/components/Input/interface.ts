import type { ReactNode, RefObject } from 'react';
import type { InputTextProps as PrimeInputTextProps } from 'primereact/inputtext';
import type { InputNumberProps as PrimeInputNumberProps, InputNumber as InputNumberClass } from 'primereact/inputnumber';
import type { InputMaskProps as PrimeInputMaskProps, InputMask as InputMaskClass } from 'primereact/inputmask';
import type { InputTextareaProps as PrimeInputTextareaProps } from 'primereact/inputtextarea';
import type { InputOtpProps as PrimeInputOtpProps } from 'primereact/inputotp';
import type { PasswordProps, Password as PasswordClass } from 'primereact/password';
import type { AutoCompleteProps, AutoComplete as AutoCompleteClass } from 'primereact/autocomplete';

export type { InputNumberClass, InputMaskClass, PasswordClass, AutoCompleteClass };

export interface InputBaseProps {
  prefixCls?: string;
  wrapperCls?: string;
  labelCls?: string;
  messageCls?: string;
  label?: ReactNode;
  message?: ReactNode;
  required?: boolean;
  rounded?: boolean;
  size?: 'large' | 'small';
  success?: boolean;
  prefixEle?: ReactNode;
  suffixEle?: ReactNode;
  prefixEleCls?: string;
  suffixEleCls?: string;
}

export interface InputTextProps extends Omit<PrimeInputTextProps, 'size' | 'prefix' | 'suffix'>, InputBaseProps{
  type?: 'text';
  ref?: RefObject<HTMLInputElement | null>;
}

export interface InputNumberProps extends Omit<PrimeInputNumberProps, 'size' | 'prefix' | 'suffix'>, InputBaseProps{
  type: 'number';
  ref?: RefObject<InputNumberClass | null>;
}

export interface InputMaskProps extends Omit<PrimeInputMaskProps, 'size' | 'prefix' | 'suffix'>, InputBaseProps{
  type: 'mask';
  ref?: RefObject<InputMaskClass | null>;
}

export interface InputTextareaProps extends Omit<PrimeInputTextareaProps, 'size' | 'prefix' | 'suffix'>, InputBaseProps{
  type: 'textarea';
  maxLength?: number;
  showCount?: boolean;
  ref?: RefObject<HTMLTextAreaElement | null>;
}

export interface InputOtpProps extends Omit<PrimeInputOtpProps, 'size' | 'prefix' | 'suffix'>, InputBaseProps{
  type: 'otp';
  ref?: RefObject<HTMLInputElement | null>;
}

export interface InputPwdProps extends Omit<PasswordProps, 'size' | 'prefix' | 'suffix'>, InputBaseProps{
  type: 'password';
  ref?: RefObject<PasswordClass | null>;
}

export interface InputAutoCompleteProps extends Omit<AutoCompleteProps, 'size' | 'prefix' | 'suffix'>, InputBaseProps{
  type: 'autocomplete';
  ref?: RefObject<AutoCompleteClass | null>;
}

export type InputProps = InputTextProps | InputNumberProps | InputMaskProps | InputTextareaProps | InputOtpProps | InputPwdProps | InputAutoCompleteProps;
