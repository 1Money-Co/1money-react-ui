import { InputAmount } from '../../InputAmount';
import createProFormField from './createProFormField';

export const ProFormMoney = createProFormField({
  component: InputAmount,
  renderReadonly: (value) => (value == null || value === '' ? '-' : String(value)),
});

export default ProFormMoney;
