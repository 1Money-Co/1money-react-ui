import { Switch } from '../../Switch';
import { renderBooleanReadonly } from '../utils';
import createProFormField from './createProFormField';

export const ProFormSwitch = createProFormField({
  component: Switch,
  valuePropName: 'checked',
  renderReadonly: renderBooleanReadonly,
});

export default ProFormSwitch;
