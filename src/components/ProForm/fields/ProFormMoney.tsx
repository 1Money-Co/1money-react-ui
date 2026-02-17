import { InputAmount } from '../../InputAmount';
import { renderNumericReadonly } from '../utils';
import createProFormField from './createProFormField';

/** ProForm field for monetary/currency input. Wraps {@link InputAmount}. */
export const ProFormMoney = createProFormField({
  component: InputAmount,
  renderReadonly: renderNumericReadonly,
});

export default ProFormMoney;
