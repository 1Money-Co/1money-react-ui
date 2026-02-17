import { Input } from '../../Input';
import createProFormField from './createProFormField';

export const ProFormPassword = createProFormField({
  component: Input,
  mapProps: () => ({ type: 'password' }),
  renderReadonly: () => '••••••••',
});

export default ProFormPassword;
