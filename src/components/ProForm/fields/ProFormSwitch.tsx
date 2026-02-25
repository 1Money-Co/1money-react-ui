import { Switch } from '@/components/Switch';
import { renderBooleanReadonly } from '@/components/ProForm/utils';
import createProFormField from '@/components/ProForm/fields/createProFormField';

/** ProForm field for boolean toggle input. Wraps {@link Switch} using `checked` as value prop. */
export const ProFormSwitch = createProFormField({
  component: Switch,
  valuePropName: 'checked',
  renderReadonly: renderBooleanReadonly,
});

export default ProFormSwitch;
