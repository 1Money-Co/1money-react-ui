import { Switch } from '../../Switch';
import createProFormField from './createProFormField';

export const ProFormSwitch = createProFormField({
  component: Switch,
  valuePropName: 'checked',
  renderReadonly: (value) => (value ? 'Yes' : 'No'),
});

export default ProFormSwitch;
