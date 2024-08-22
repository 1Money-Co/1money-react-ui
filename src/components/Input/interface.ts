import type { InputTextProps as PrimeInputTextProps } from 'primereact/inputtext';
import type { InputNumberProps as PrimeInputNumberProps } from 'primereact/inputnumber';
import type { InputMaskProps as PrimeInputMaskProps } from 'primereact/inputmask';
import type { InputTextareaProps as PrimeInputTextareaProps } from 'primereact/inputtextarea';
import type { InputOtpProps as PrimeInputOtpProps } from 'primereact/inputotp';
import type { PasswordProps } from 'primereact/password';
import type { AutoCompleteProps } from 'primereact/autocomplete';

interface InputBaseProps {
  prefixCls?: string;
}

interface InputTextProps extends PrimeInputTextProps, InputBaseProps{
  type?: 'text';
}

interface InputNumberProps extends PrimeInputNumberProps, InputBaseProps{
  type: 'number';
}

interface InputMaskProps extends PrimeInputMaskProps, InputBaseProps{
  type: 'mask';
}

interface InputTextareaProps extends PrimeInputTextareaProps, InputBaseProps{
  type: 'textarea';
}

interface InputOtpProps extends PrimeInputOtpProps, InputBaseProps{
  type: 'otp';
}

interface InputPwdProps extends PasswordProps, InputBaseProps{
  type: 'password';
}

interface InputAutoCompleteProps extends AutoCompleteProps, InputBaseProps{
  type: 'autocomplete';
}

export type InputProps = InputTextProps | InputNumberProps | InputMaskProps | InputTextareaProps | InputOtpProps | InputPwdProps | InputAutoCompleteProps;
