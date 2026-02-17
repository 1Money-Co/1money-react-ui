import { Select } from '../../Select';
import { findOptionLabel } from '../utils';
import createProFormField from './createProFormField';

interface OptionLike {
  label?: unknown;
  value?: unknown;
}

export const ProFormSelect = createProFormField({
  component: Select,
  renderReadonly: (value, props) => {
    const options = (props as { options?: OptionLike[] } | undefined)?.options;
    return findOptionLabel(value, options, 'value');
  },
});

export default ProFormSelect;
