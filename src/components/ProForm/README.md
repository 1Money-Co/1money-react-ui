# ProForm

High-level form abstraction built on top of `Form` + `FormItem` + field components.

## Usage

```tsx
import {
  ProForm,
  ProFormText,
  ProFormPassword,
  ProFormSelect,
  ProFormList,
  ModalForm,
} from '@1money/react-ui';

export default function Example() {
  return (
    <ProForm
      defaultValues={{ email: '', role: 'user' }}
      onFinish={async (values) => {
        console.log(values);
        return true;
      }}
    >
      <ProFormText name='email' label='Email' />
      <ProFormPassword name='password' label='Password' />
      <ProFormSelect
        name='role'
        label='Role'
        fieldProps={{
          options: [
            { label: 'User', value: 'user' },
            { label: 'Admin', value: 'admin' },
          ],
        }}
      />
      <ProFormList name='members'>
        {(fields) => fields.map((field, index) => (
          <ProFormText key={field.key} name={`members.${index}.name`} label={`Member ${index + 1}`} />
        ))}
      </ProFormList>
    </ProForm>
  );
}
```

## Components

- `ProForm`: core form wrapper with `submitter`, `readonly`, `grid`, `request`, `params`.
- Field wrappers:
  - `ProFormText`, `ProFormPassword`, `ProFormTextArea`, `ProFormDigit`, `ProFormMoney`
  - `ProFormSelect`, `ProFormMultiSelect`
  - `ProFormCheckbox`, `ProFormCheckboxGroup`, `ProFormRadio`, `ProFormSwitch`
- Layout wrappers:
  - `ModalForm`, `DrawerForm`, `StepsForm`, `QueryFilter`
- Utilities:
  - `ProFormDependency`, `ProFormList`, `createProFormField`, `Submitter`

## Layout Examples

```tsx
<ModalForm trigger={<button type='button'>Create User</button>} title='Create User'>
  <ProFormText name='email' label='Email' />
</ModalForm>
```

```tsx
<QueryFilter defaultCollapsed defaultColsNumber={2}>
  <ProFormText name='keyword' label='Keyword' />
  <ProFormText name='status' label='Status' />
  <ProFormText name='owner' label='Owner' />
</QueryFilter>
```

## Notes

- `readonly` can be set at `ProForm` level or per field.
- `submitter={false}` disables the default submit/reset buttons.
- `ProFormList` is powered by `react-hook-form` `useFieldArray` and supports sorting via `@dnd-kit`.
