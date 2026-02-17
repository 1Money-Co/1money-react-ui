import { Select } from '../../Select';
import createProFormField from './createProFormField';

interface OptionLike {
  label?: unknown;
  value?: unknown;
}

export const ProFormSelect = createProFormField({
  component: Select,
  renderReadonly: (value, props) => {
    const options = Array.isArray((props as { options?: OptionLike[] } | undefined)?.options)
      ? (props as { options?: OptionLike[] }).options || []
      : [];
    const matched = options.find((item) => item?.value === value);
    return matched?.label ?? value ?? '-';
  },
});

export default ProFormSelect;
