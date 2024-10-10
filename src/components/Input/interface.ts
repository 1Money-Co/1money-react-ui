import type { InputTextProps as PrimeInputTextProps } from 'primereact/inputtext';
import type { InputNumberProps as PrimeInputNumberProps } from 'primereact/inputnumber';
import type { InputMaskProps as PrimeInputMaskProps } from 'primereact/inputmask';
import type { InputTextareaProps as PrimeInputTextareaProps } from 'primereact/inputtextarea';
import type { InputOtpProps as PrimeInputOtpProps } from 'primereact/inputotp';
import type { PasswordProps } from 'primereact/password';
import type { AutoCompleteProps } from 'primereact/autocomplete';

export interface InputBaseProps {
  prefixCls?: string;
  label?: string;
  required?: boolean;
  wrapperCls?: string;
}

export interface InputTextProps extends PrimeInputTextProps, InputBaseProps{
  type?: 'text';
}

export interface InputNumberProps extends PrimeInputNumberProps, InputBaseProps{
  type: 'number';
}

export interface InputMaskProps extends PrimeInputMaskProps, InputBaseProps{
  type: 'mask';
}

export interface InputTextareaProps extends PrimeInputTextareaProps, InputBaseProps{
  type: 'textarea';
}

export interface InputOtpProps extends PrimeInputOtpProps, InputBaseProps{
  type: 'otp';
}

export interface InputPwdProps extends PasswordProps, InputBaseProps{
  type: 'password';
}

export interface InputAutoCompleteProps extends AutoCompleteProps, InputBaseProps{
  type: 'autocomplete';
}

export type InputProps = InputTextProps | InputNumberProps | InputMaskProps | InputTextareaProps | InputOtpProps | InputPwdProps | InputAutoCompleteProps;
