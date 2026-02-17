import { RadioGroup } from '../../RadioGroup';
import createProFormField from './createProFormField';

export const ProFormRadio = createProFormField({
  component: RadioGroup,
  renderReadonly: (value, props: any) => {
    const items = props?.items || [];
    const matched = items.find((item: any) => item?.key === value || item?.value === value);
    return matched?.label ?? value ?? '-';
  },
});

export default ProFormRadio;
