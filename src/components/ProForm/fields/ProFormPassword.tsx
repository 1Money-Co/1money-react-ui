import { Input } from '../../Input';
import createProFormField from './createProFormField';

/** ProForm field for password input. Wraps {@link Input} with `type="password"`. Renders masked dots in readonly mode. */
export const ProFormPassword = createProFormField({
  component: Input,
  mapProps: () => ({ type: 'password' }),
  renderReadonly: (value) => (value != null && value !== '' ? '••••••••' : ''),
});

export default ProFormPassword;
