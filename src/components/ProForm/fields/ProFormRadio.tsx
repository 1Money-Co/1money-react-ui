import { RadioGroup } from '../../RadioGroup';
import createProFormField from './createProFormField';

interface RadioItemLike {
  key?: unknown;
  value?: unknown;
  label?: unknown;
}

export const ProFormRadio = createProFormField({
  component: RadioGroup,
  renderReadonly: (value, props) => {
    const items = Array.isArray((props as { items?: RadioItemLike[] } | undefined)?.items)
      ? (props as { items?: RadioItemLike[] }).items || []
      : [];
    const matched = items.find((item) => item?.key === value || item?.value === value);
    return matched?.label ?? value ?? '-';
  },
});

export default ProFormRadio;
