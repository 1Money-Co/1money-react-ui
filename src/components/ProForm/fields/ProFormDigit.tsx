import { Input } from '../../Input';
import { renderNumericReadonly } from '../utils';
import createProFormField from './createProFormField';

/** ProForm field for numeric input. Wraps {@link Input} with `type="number"`. */
export const ProFormDigit = createProFormField({
  component: Input,
  mapProps: () => ({ type: 'number' }),
  renderReadonly: renderNumericReadonly,
});

export default ProFormDigit;
