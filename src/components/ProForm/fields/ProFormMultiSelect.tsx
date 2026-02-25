import isEqual from 'lodash.isequal';
import { Select } from '../../Select';
import createProFormField from './createProFormField';

interface OptionLike {
  label?: unknown;
  value?: unknown;
}

/** ProForm field for multi-value dropdown selection. Wraps {@link Select} with `multiple` enabled. */
export const ProFormMultiSelect = createProFormField({
  component: Select,
  mapProps: () => ({ multiple: true }),
  renderReadonly: (value, props) => {
    const values = Array.isArray(value) ? value : [];
    const optionsProp = (props as { options?: OptionLike[] } | undefined)?.options;
    const options = Array.isArray(optionsProp) ? optionsProp : [];
    const labels = values.map((val) => {
      const matched = options.find((item) => isEqual(item?.value, val));
      return String(matched?.label ?? val);
    });
    return labels.length ? labels.join(', ') : '-';
  },
});

export default ProFormMultiSelect;
