import { Input } from '../../Input';
import { renderTextReadonly } from '../utils';
import createProFormField from './createProFormField';

export const ProFormText = createProFormField({
  component: Input,
  mapProps: () => ({ type: 'text' }),
  renderReadonly: renderTextReadonly,
});

export default ProFormText;
