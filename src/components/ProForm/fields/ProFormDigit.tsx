import { Input } from '../../Input';
import createProFormField from './createProFormField';

export const ProFormDigit = createProFormField({
  component: Input,
  mapProps: () => ({ type: 'number' }),
  renderReadonly: (value) => (value == null || value === '' ? '-' : String(value)),
});

export default ProFormDigit;
