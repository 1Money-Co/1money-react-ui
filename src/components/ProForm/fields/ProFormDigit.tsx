import { Input } from '../../Input';
import { renderNumericReadonly } from '../utils';
import createProFormField from './createProFormField';

export const ProFormDigit = createProFormField({
  component: Input,
  mapProps: () => ({ type: 'number' }),
  renderReadonly: renderNumericReadonly,
});

export default ProFormDigit;
