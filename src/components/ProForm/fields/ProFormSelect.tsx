import { Select } from '../../Select';
import createProFormField from './createProFormField';

export const ProFormSelect = createProFormField({
  component: Select,
  renderReadonly: (value, props: any) => {
    const options = props?.options || [];
    const matched = options.find((item: any) => item?.value === value);
    return matched?.label ?? value ?? '-';
  },
});

export default ProFormSelect;
