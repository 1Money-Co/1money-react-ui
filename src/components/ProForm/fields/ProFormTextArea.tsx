import { Input } from '../../Input';
import createProFormField from './createProFormField';

export const ProFormTextArea = createProFormField({
  component: Input,
  mapProps: () => ({ type: 'textarea' }),
  renderReadonly: (value) => value ?? '-',
});

export default ProFormTextArea;
