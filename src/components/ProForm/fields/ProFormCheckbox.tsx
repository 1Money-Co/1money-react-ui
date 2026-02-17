import { Checkbox } from '../../Checkbox';
import createProFormField from './createProFormField';

export const ProFormCheckbox = createProFormField({
  component: Checkbox,
  valuePropName: 'checked',
  renderReadonly: (value) => (value ? 'Yes' : 'No'),
});

export default ProFormCheckbox;
