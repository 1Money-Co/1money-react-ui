import { Select } from '../../Select';
import createProFormField from './createProFormField';

export const ProFormMultiSelect = createProFormField({
  component: Select,
  mapProps: () => ({ multiple: true }),
  renderReadonly: (value, props: any) => {
    const values = Array.isArray(value) ? value : [];
    const options = props?.options || [];
    const labels = values.map((val) => {
      const matched = options.find((item: any) => item?.value === val);
      return matched?.label ?? val;
    });
    return labels.length ? labels.join(', ') : '-';
  },
});

export default ProFormMultiSelect;
