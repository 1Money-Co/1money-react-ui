import { CheckboxGroup } from '../../CheckboxGroup';
import createProFormField from './createProFormField';

/** ProForm field for multi-choice checkbox group. Wraps {@link CheckboxGroup}. */
export const ProFormCheckboxGroup = createProFormField({
  component: CheckboxGroup,
  renderReadonly: (value) => {
    if (!Array.isArray(value)) return '-';
    return value.length ? value.join(', ') : '-';
  },
});

export default ProFormCheckboxGroup;
