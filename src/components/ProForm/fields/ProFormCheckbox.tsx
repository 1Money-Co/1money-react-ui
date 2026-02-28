import { Checkbox } from '../../Checkbox';
import { renderBooleanReadonly } from '../utils';
import createProFormField from './createProFormField';

/** ProForm field for a single boolean checkbox. Wraps {@link Checkbox} using `checked` as value prop. */
export const ProFormCheckbox = createProFormField({
  component: Checkbox,
  valuePropName: 'checked',
  renderReadonly: renderBooleanReadonly,
});

export default ProFormCheckbox;
