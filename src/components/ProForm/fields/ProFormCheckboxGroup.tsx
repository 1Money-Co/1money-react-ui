import { CheckboxGroup } from '@/components/CheckboxGroup';
import createProFormField from '@/components/ProForm/fields/createProFormField';

interface CheckboxGroupItemLike {
  key?: unknown;
  label?: unknown;
}

const toDisplayLabel = (label: unknown, fallbackKey: string): string =>
  typeof label === 'string' || typeof label === 'number'
    ? String(label)
    : fallbackKey;

const mapKeysToLabels = (selectedKeys: string[], items: CheckboxGroupItemLike[] | undefined): string[] => {
  if (!Array.isArray(items)) return selectedKeys;

  return selectedKeys.map((key) => {
    const matched = items.find(item => String(item?.key) === key);
    return matched ? toDisplayLabel(matched.label, key) : key;
  });
};

/** ProForm field for multi-choice checkbox group. Wraps {@link CheckboxGroup}. */
export const ProFormCheckboxGroup = createProFormField({
  component: CheckboxGroup,
  renderReadonly: (value, props) => {
    const items = (props as { items?: CheckboxGroupItemLike[] } | undefined)?.items;

    if (Array.isArray(value)) {
      const selectedKeys = value.map(item => String(item));
      if (!selectedKeys.length) return '-';
      return mapKeysToLabels(selectedKeys, items).join(', ');
    }

    if (value && typeof value === 'object') {
      const selectedKeys = Object.entries(value as Record<string, boolean | null>)
        .filter(([, state]) => state === true)
        .map(([key]) => key);
      if (!selectedKeys.length) return '-';
      return mapKeysToLabels(selectedKeys, items).join(', ');
    }

    return '-';
  },
});

export default ProFormCheckboxGroup;
