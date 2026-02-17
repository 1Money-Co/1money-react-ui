import { CheckboxGroup } from '../../CheckboxGroup';
import createProFormField from './createProFormField';

export const ProFormCheckboxGroup = createProFormField({
  component: CheckboxGroup,
  renderReadonly: (value) => {
    if (!Array.isArray(value)) return '-';
    return value.length ? value.join(', ') : '-';
  },
});

export default ProFormCheckboxGroup;
