# CheckboxGroup

`CheckboxGroup` supports both normal checkbox selection and tristate selection modes.

## Features

- Multiple checkbox selection with controlled/uncontrolled support
- Tristate mode (`true | false | null`) with controlled/uncontrolled support
- Per-item disabled/required/invalid support
- Configurable wrapper and item classes
- Size variants: `sm` / `md` / `lg`

## Basic Usage

```tsx
import { CheckboxGroup } from '@1money/react-ui';

const [checkedList, setCheckedList] = useState<string[]>([]);

<CheckboxGroup
  items={[
    { key: 'Cheese', label: 'Cheese' },
    { key: 'Mushroom', label: 'Mushroom', defaultChecked: true },
    { key: 'Pepper', label: 'Pepper' },
  ]}
  value={checkedList}
  onChange={setCheckedList}
/>;
```

## TriState Usage

```tsx
const [stateMap, setStateMap] = useState<Record<string, boolean | null>>({
  Audi: null,
  BMW: true,
  Lexus: false,
});

<CheckboxGroup
  tristate
  items={[
    { key: 'Audi', label: 'Audi' },
    { key: 'BMW', label: 'BMW', defaultValue: true },
    { key: 'Lexus', label: 'Lexus', defaultValue: false },
  ]}
  value={stateMap}
  onChange={setStateMap}
/>;
```

## Props

### CheckboxGroup

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| tristate | Enable tristate mode | `boolean` | `false` |
| items | Checkbox item list | `CheckboxGroupNormalItem[] \| CheckboxGroupTriStateItem[]` | `[]` |
| value | Controlled value | `string[] \| Record<string, boolean \| null>` | - |
| onChange | Group value change callback | `(value) => void` | - |
| wrapperCls | Custom wrapper class | `string` | - |
| innerCls | Custom item container class | `string` | - |
| checkboxGroupCls | Custom checkbox class | `string` | - |
| labelCls | Custom label class | `string` | - |
| prefixCls | Class prefix | `string` | `checkboxgroup` |
| size | Size variant | `'sm' \| 'md' \| 'lg'` | `'md'` |

### Normal Item

| Name | Description | Type |
| --- | --- | --- |
| key | Item unique key | `string` |
| label | Label content | `ReactNode` |
| checked | Per-item controlled checked state | `boolean` |
| defaultChecked | Per-item default checked state | `boolean` |
| onChange | Item change callback | `(checked: boolean) => void` |

### TriState Item

| Name | Description | Type |
| --- | --- | --- |
| key | Item unique key | `string` |
| label | Label content | `ReactNode` |
| defaultValue | Per-item default tristate value | `boolean \| null` |
| onChange | Item change callback | `(state: boolean \| null) => void` |
