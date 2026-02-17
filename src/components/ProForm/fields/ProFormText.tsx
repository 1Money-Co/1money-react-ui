import { Input } from '../../Input';
import { renderTextReadonly } from '../utils';
import createProFormField from './createProFormField';

/** ProForm field for single-line text input. Wraps {@link Input} with `type="text"`. */
export const ProFormText = createProFormField({
  component: Input,
  mapProps: () => ({ type: 'text' }),
  renderReadonly: renderTextReadonly,
});

export default ProFormText;
