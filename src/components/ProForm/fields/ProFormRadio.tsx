import { RadioGroup } from '../../RadioGroup';
import { findOptionLabel } from '../utils';
import createProFormField from './createProFormField';

interface RadioItemLike {
  key?: unknown;
  value?: unknown;
  label?: unknown;
}

export const ProFormRadio = createProFormField({
  component: RadioGroup,
  renderReadonly: (value, props) => {
    const items = (props as { items?: RadioItemLike[] } | undefined)?.items;
    return findOptionLabel(value, items, 'both');
  },
});

export default ProFormRadio;
