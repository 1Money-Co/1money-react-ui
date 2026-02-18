import type { InputSwitchChangeEvent, InputSwitchProps } from 'primereact/inputswitch';
import type { ToggleButtonChangeEvent, ToggleButtonProps } from 'primereact/togglebutton';

export type SwitchChangeEvent = InputSwitchChangeEvent | ToggleButtonChangeEvent;

type OmitKeys = 'checked' | 'onChange';

interface SwitchBaseProps {
  prefixCls?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?(event: SwitchChangeEvent): void;
}

interface NormalSwitchProps extends Omit<InputSwitchProps, OmitKeys>, SwitchBaseProps {
  type?: 'normal';
}

interface ButtonSwitchProps extends Omit<ToggleButtonProps, OmitKeys>, SwitchBaseProps {
  type: 'button';
}

export type SwitchProps = NormalSwitchProps | ButtonSwitchProps;
