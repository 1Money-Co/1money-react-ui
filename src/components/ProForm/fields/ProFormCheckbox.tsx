import { Checkbox } from '../../Checkbox';
import { renderBooleanReadonly } from '../utils';
import createProFormField from './createProFormField';

export const ProFormCheckbox = createProFormField({
  component: Checkbox,
  valuePropName: 'checked',
  renderReadonly: renderBooleanReadonly,
});

export default ProFormCheckbox;
