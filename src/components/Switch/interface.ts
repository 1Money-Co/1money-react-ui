import type { InputSwitchProps } from 'primereact/inputswitch';
import type { ToggleButtonProps } from 'primereact/togglebutton';

interface SwitchBaseProps {
  prefixCls?: string;
}

interface NormalSwitchProps extends Omit<InputSwitchProps, 'checked'>, SwitchBaseProps {
  type?: 'normal';
}

interface ButtonSwitchProps extends Omit<ToggleButtonProps, 'checked'>, SwitchBaseProps {
  type: 'button';
}

export type SwitchProps = NormalSwitchProps | ButtonSwitchProps;
