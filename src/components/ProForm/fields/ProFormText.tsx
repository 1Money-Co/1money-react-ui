import { Input } from '../../Input';
import createProFormField from './createProFormField';

export const ProFormText = createProFormField({
  component: Input,
  mapProps: () => ({ type: 'text' }),
  renderReadonly: (value) => value ?? '-',
});

export default ProFormText;
