import { Input } from '@/components/Input';
import { renderTextReadonly } from '@/components/ProForm/utils';
import createProFormField from '@/components/ProForm/fields/createProFormField';

/** ProForm field for single-line text input. Wraps {@link Input} with `type="text"`. */
export const ProFormText = createProFormField({
  component: Input,
  mapProps: () => ({ type: 'text' }),
  renderReadonly: renderTextReadonly,
});

export default ProFormText;
