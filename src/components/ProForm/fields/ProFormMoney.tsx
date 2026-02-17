import { InputAmount } from '../../InputAmount';
import { renderNumericReadonly } from '../utils';
import createProFormField from './createProFormField';

export const ProFormMoney = createProFormField({
  component: InputAmount,
  renderReadonly: renderNumericReadonly,
});

export default ProFormMoney;
