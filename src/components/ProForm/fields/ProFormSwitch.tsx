import { Switch } from '../../Switch';
import { renderBooleanReadonly } from '../utils';
import createProFormField from './createProFormField';

/** ProForm field for boolean toggle input. Wraps {@link Switch} using `checked` as value prop. */
export const ProFormSwitch = createProFormField({
  component: Switch,
  valuePropName: 'checked',
  renderReadonly: renderBooleanReadonly,
});

export default ProFormSwitch;
