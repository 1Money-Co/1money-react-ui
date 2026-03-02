# ProForm

A high-level form abstraction built on top of `Form` + `FormItem`, providing pre-built field components, layout containers, dynamic lists, and a built-in submit/reset button bar.

## Features

- 11 pre-built field components covering text, number, select, checkbox, radio, and switch inputs
- Built-in submit/reset button bar with customizable text and rendering
- Grid layout mode with responsive column configuration
- Readonly mode rendering field values as plain text
- Async data loading via `request` with automatic `params` watching
- Layout containers: ModalForm, DrawerForm, StepsForm, QueryFilter
- Dynamic repeatable field lists with drag-and-drop sorting
- Conditional field rendering via ProFormDependency
- Full TypeScript generics support

## Basic Usage

```tsx
import { ProForm, ProFormText, ProFormPassword, ProFormSelect } from '@1money/react-ui';

<ProForm
  defaultValues={{ email: '', role: 'user' }}
  onFinish={async (values) => {
    console.log(values);
    return true;
  }}
>
  <ProFormText name="email" label="Email" placeholder="you@company.com" />
  <ProFormPassword name="password" label="Password" />
  <ProFormSelect
    name="role"
    label="Role"
    fieldProps={{
      options: [
        { label: 'User', value: 'user' },
        { label: 'Admin', value: 'admin' },
      ],
    }}
  />
</ProForm>
```

## ProForm Props

Extends all `Form` props with these additions:

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| onFinish | Callback with values on submit. Return `false` to prevent default behavior | `(values) => void \| boolean \| Promise<void \| boolean>` | - |
| submitter | Button bar config. Pass `false` to hide | `false \| SubmitterProps` | - |
| readonly | Render all fields as plain text | `boolean` | `false` |
| grid | Wrap children in a responsive `<Row>` layout | `boolean` | `false` |
| colProps | Default column props when `grid` is enabled | `{ span?: number }` | - |
| rowProps | Row props (e.g. `gutter`) for the grid wrapper | `{ gutter?: number }` | - |
| loading | Disable form and show loading on submit button | `boolean` | `false` |
| request | Async function to fetch initial/remote values | `(params?) => Promise<TFieldValues>` | - |
| params | Parameters passed to `request`. Changes re-trigger the fetch | `Record<string, unknown>` | - |

## Common Field Props

All field components (`ProFormText`, `ProFormSelect`, etc.) share these props:

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| name | Field path within form values (required) | `FieldPath<TFieldValues>` | - |
| label | Label displayed alongside the field | `ReactNode` | - |
| rules | Validation rules | `FormItemRules` | - |
| required | Show required indicator | `boolean` | `false` |
| help | Help text below the field | `ReactNode` | - |
| extra | Extra content below help text | `ReactNode` | - |
| dependencies | Fields that trigger re-validation | `FieldPath[]` | - |
| validateTrigger | When to trigger validation | `'onChange'` \| `'onBlur'` \| `Array<...>` | - |
| labelCol | Label column span (0-12) | `number` | - |
| wrapperCol | Wrapper column span (0-12) | `number` | - |
| noStyle | Remove FormItem wrapper styles | `boolean` | `false` |
| readonly | Render value as plain text | `boolean` | `false` |
| hidden | Hide the field entirely | `boolean` | `false` |
| placeholder | Placeholder text | `string` | - |
| disabled | Disable the field | `boolean` | `false` |
| width | Field width preset or pixel value | `'sm'` \| `'md'` \| `'lg'` \| `'xl'` \| `number` | - |
| colProps | Grid column config when `grid` is enabled | `{ span?: number }` | - |
| fieldProps | Props forwarded to the underlying input component | `Partial<FieldProps>` | - |

## Field Components

### ProFormText

Single-line text input wrapping `Input` with `type="text"`.

```tsx
<ProFormText name="username" label="Username" placeholder="Enter username" />
```

### ProFormPassword

Password input wrapping `Input` with `type="password"`. Displays `••••••••` in readonly mode.

```tsx
<ProFormPassword name="password" label="Password" />
```

### ProFormTextArea

Multi-line text input wrapping `Input` with `type="textarea"`.

```tsx
<ProFormTextArea
  name="bio"
  label="Bio"
  placeholder="Tell us about yourself"
  fieldProps={{ rows: 4, maxLength: 500, showCount: true }}
/>
```

### ProFormDigit

Numeric input wrapping `Input` with `type="number"`.

```tsx
<ProFormDigit name="age" label="Age" fieldProps={{ min: 0, max: 120 }} />
```

### ProFormMoney

Currency input wrapping `InputAmount`.

```tsx
<ProFormMoney name="price" label="Price" placeholder="0.00" />
```

### ProFormSelect

Single-value dropdown wrapping `Select`. Displays the selected option label in readonly mode.

```tsx
<ProFormSelect
  name="country"
  label="Country"
  fieldProps={{
    options: [
      { label: 'United States', value: 'US' },
      { label: 'Canada', value: 'CA' },
    ],
  }}
/>
```

### ProFormMultiSelect

Multi-value dropdown wrapping `Select` with `multiple: true`. Displays comma-separated labels in readonly mode.

```tsx
<ProFormMultiSelect
  name="tags"
  label="Tags"
  fieldProps={{
    options: [
      { label: 'Frontend', value: 'fe' },
      { label: 'Backend', value: 'be' },
      { label: 'DevOps', value: 'devops' },
    ],
  }}
/>
```

### ProFormCheckbox

Single boolean checkbox wrapping `Checkbox`. Uses `checked` prop for value binding.

```tsx
<ProFormCheckbox name="agree" label="I agree to the terms" />
```

### ProFormCheckboxGroup

Multi-choice checkbox group wrapping `CheckboxGroup`. Supports array or object value formats.

```tsx
<ProFormCheckboxGroup
  name="permissions"
  label="Permissions"
  fieldProps={{
    options: [
      { label: 'Read', value: 'read' },
      { label: 'Write', value: 'write' },
      { label: 'Delete', value: 'delete' },
    ],
  }}
/>
```

### ProFormRadio

Single-choice radio group wrapping `RadioGroup`.

```tsx
<ProFormRadio
  name="priority"
  label="Priority"
  fieldProps={{
    items: [
      { label: 'Low', value: 'low' },
      { label: 'Medium', value: 'medium' },
      { label: 'High', value: 'high' },
    ],
  }}
/>
```

### ProFormSwitch

Boolean toggle switch wrapping `Switch`. Uses `checked` prop for value binding.

```tsx
<ProFormSwitch name="notifications" label="Enable notifications" />
```

## Layout Components

### ModalForm

ProForm rendered inside a modal dialog with trigger support and auto-close behavior.

```tsx
import { ModalForm, ProFormText } from '@1money/react-ui';

<ModalForm
  trigger={<Button>Create User</Button>}
  title="Create User"
  onFinish={async (values) => {
    await createUser(values);
    return true;
  }}
>
  <ProFormText name="name" label="Name" />
  <ProFormText name="email" label="Email" />
</ModalForm>
```

**Additional Props:**

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| open | Controlled open state | `boolean` | - |
| onOpenChange | Open state change callback | `(open: boolean) => void` | - |
| trigger | Element that opens the modal on click | `ReactElement` | - |
| title | Modal header title | `ReactNode` | - |
| width | Modal width | `string \| number` | - |
| autoClose | Close after successful submit | `boolean` | `true` |
| submitTimeout | Delay (ms) before auto-close | `number` | - |
| destroyOnClose | Destroy content when closed | `boolean` | `true` |
| modalProps | Props forwarded to `<Modal>` | `ModalProps` | - |

### DrawerForm

ProForm rendered inside a side drawer. Same overlay API as ModalForm.

```tsx
import { DrawerForm, ProFormText, ProFormTextArea } from '@1money/react-ui';

<DrawerForm
  trigger={<Button>Edit Profile</Button>}
  title="Edit Profile"
  width={480}
  onFinish={async (values) => {
    await updateProfile(values);
    return true;
  }}
>
  <ProFormText name="name" label="Name" />
  <ProFormTextArea name="bio" label="Bio" fieldProps={{ rows: 4 }} />
</DrawerForm>
```

**Additional Props:**

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| drawerProps | Props forwarded to `<Drawer>` | `DrawerProps` | - |

All other overlay props (`open`, `trigger`, `title`, `autoClose`, etc.) are the same as ModalForm.

### StepsForm

Multi-step wizard that collects values across steps and submits them together on the final step.

```tsx
import { StepsForm, StepForm, ProFormText, ProFormSelect } from '@1money/react-ui';

<StepsForm
  onFinish={async (values) => {
    console.log('All values:', values);
  }}
>
  <StepForm title="Account" description="Basic info">
    <ProFormText name="email" label="Email" rules={{ required: 'Required' }} />
    <ProFormText name="username" label="Username" />
  </StepForm>
  <StepForm title="Profile" description="Personal details">
    <ProFormText name="firstName" label="First Name" />
    <ProFormText name="lastName" label="Last Name" />
  </StepForm>
  <StepForm title="Settings" description="Preferences">
    <ProFormSelect
      name="theme"
      label="Theme"
      fieldProps={{ options: [{ label: 'Light', value: 'light' }, { label: 'Dark', value: 'dark' }] }}
    />
  </StepForm>
</StepsForm>
```

**StepsForm Props:**

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| current | Controlled active step index (0-based) | `number` | - |
| onCurrentChange | Step change callback | `(current: number) => void` | - |
| onFinish | Callback with all merged step values on final submit | `(values) => void \| Promise<void>` | - |
| stepsProps | HTML/aria props for the steps wrapper | `Record<string, unknown>` | - |
| formProps | Shared form props applied to every step | `Partial<ProFormProps>` | - |
| submitter | Navigation button config. Pass `false` to hide | `false \| StepsSubmitterProps` | - |

**StepForm Props (extends ProFormProps):**

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| title | Step title | `ReactNode` | - |
| description | Step description | `ReactNode` | - |
| stepProps | HTML/aria props for the step container | `Record<string, unknown>` | - |

**StepsSubmitterProps (extends SubmitterProps):**

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| prevText | Previous step button text | `ReactNode` | `'Previous'` |
| nextText | Next step button text | `ReactNode` | `'Next'` |

### QueryFilter

Horizontal search/filter form with collapsible fields and search/reset buttons.

```tsx
import { QueryFilter, ProFormText, ProFormSelect } from '@1money/react-ui';

<QueryFilter
  defaultCollapsed
  defaultColsNumber={2}
  onFinish={(values) => console.log('Search:', values)}
  onReset={() => console.log('Reset')}
>
  <ProFormText name="keyword" label="Keyword" />
  <ProFormSelect
    name="status"
    label="Status"
    fieldProps={{
      options: [
        { label: 'Active', value: 'active' },
        { label: 'Inactive', value: 'inactive' },
      ],
    }}
  />
  <ProFormText name="owner" label="Owner" />
  <ProFormText name="department" label="Department" />
</QueryFilter>
```

**QueryFilter Props (extends ProFormProps):**

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| defaultCollapsed | Initial collapsed state | `boolean` | `true` |
| collapsed | Controlled collapsed state | `boolean` | - |
| onCollapse | Collapse state change callback | `(collapsed: boolean) => void` | - |
| defaultColsNumber | Number of fields visible when collapsed | `number` | `3` |
| labelWidth | Fixed label width in pixels, or `'auto'` | `number \| 'auto'` | - |
| split | Add visual separator between fields | `boolean` | `false` |
| onReset | Reset button callback | `() => void` | - |
| submitter | Button config with collapse/expand text overrides | `false \| QueryFilterSubmitterProps` | - |

## Utility Components

### ProFormDependency

Watches form fields and re-renders children when values change. Useful for conditional field visibility.

```tsx
import { ProFormDependency, ProFormText, ProFormSelect } from '@1money/react-ui';

<ProForm>
  <ProFormSelect
    name="country"
    label="Country"
    fieldProps={{
      options: [
        { label: 'United States', value: 'US' },
        { label: 'Canada', value: 'CA' },
      ],
    }}
  />
  <ProFormDependency name={['country']}>
    {({ country }) =>
      country === 'US' ? (
        <ProFormText name="state" label="State" />
      ) : (
        <ProFormText name="province" label="Province" />
      )
    }
  </ProFormDependency>
</ProForm>
```

### ProFormList

Dynamic repeatable field list with add, remove, copy, and drag-and-drop sorting.

```tsx
import { ProFormList, ProFormText, ProFormDigit } from '@1money/react-ui';

<ProForm>
  <ProFormList
    name="items"
    label="Line Items"
    min={1}
    max={10}
    sortable
    creatorButtonProps={{ text: 'Add Item', position: 'bottom' }}
    initialValue={[{ name: '', quantity: 1 }]}
  >
    {(fields, action) =>
      fields.map(({ name, key }) => (
        <div key={key} style={{ display: 'flex', gap: 16 }}>
          <ProFormText name={`${name}.name`} label="Name" />
          <ProFormDigit name={`${name}.quantity`} label="Qty" width="sm" />
        </div>
      ))
    }
  </ProFormList>
</ProForm>
```

**ProFormList Props:**

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| name | Array field path (required) | `FieldPath` | - |
| label | List label | `ReactNode` | - |
| min | Minimum number of rows | `number` | - |
| max | Maximum number of rows | `number` | - |
| initialValue | Initial row values | `Record<string, unknown>[]` | - |
| sortable | Enable drag-and-drop reordering | `boolean` | `false` |
| copyIconProps | Copy button config. Pass `false` to hide | `false \| Record<string, unknown>` | - |
| deleteIconProps | Delete button config. Pass `false` to hide | `false \| Record<string, unknown>` | - |
| creatorButtonProps | Add button config. Pass `false` to hide | `false \| ButtonProps & { text?, position? }` | - |
| itemRender | Custom row render function | `(props) => ReactNode` | - |
| actionRender | Custom action buttons render function | `(row, action, defaultDom) => ReactNode[]` | - |
| onAfterAdd | Callback after a row is added | `(defaultValue, insertIndex) => void` | - |
| onAfterRemove | Callback after a row is removed | `(index) => void` | - |

**ProFormListAction (imperative handle):**

| Method | Description |
| --- | --- |
| `add(defaultValue?, index?)` | Append or insert a row |
| `remove(index)` | Remove a row |
| `move(from, to)` | Move a row |
| `copy(index)` | Duplicate a row |
| `getList()` | Get current row values |

### Submitter

The built-in submit/reset button bar. Configured via `ProForm`'s `submitter` prop.

```tsx
// Custom button text
<ProForm submitter={{ submitText: 'Save', resetText: 'Clear' }}>
  ...
</ProForm>

// Custom render
<ProForm
  submitter={{
    render: (props, dom) => (
      <div style={{ display: 'flex', gap: 8 }}>
        <Button onClick={props.reset}>Discard</Button>
        <Button severity="primary" onClick={props.submit}>Save Changes</Button>
      </div>
    ),
  }}
>
  ...
</ProForm>

// Hide button bar
<ProForm submitter={false}>
  ...
</ProForm>
```

**SubmitterProps:**

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| submitText | Submit button text | `ReactNode` | `'Submit'` |
| resetText | Reset button text | `ReactNode` | `'Reset'` |
| render | Custom render function | `(props, dom) => ReactNode` | - |
| onSubmit | Submit callback | `() => void` | - |
| onReset | Reset callback | `() => void` | - |
| submitButtonProps | Props for the submit `<Button>` | `ButtonProps` | - |
| resetButtonProps | Props for the reset `<Button>` | `ButtonProps` | - |

## Examples

### Grid Layout

```tsx
<ProForm grid colProps={{ span: 12 }} rowProps={{ gutter: 16 }}>
  <ProFormText name="firstName" label="First Name" colProps={{ span: 6 }} />
  <ProFormText name="lastName" label="Last Name" colProps={{ span: 6 }} />
  <ProFormText name="email" label="Email" />
  <ProFormText name="phone" label="Phone" />
</ProForm>
```

### Readonly Mode

```tsx
<ProForm readonly defaultValues={{ name: 'Alice', role: 'Admin' }}>
  <ProFormText name="name" label="Name" />
  <ProFormText name="role" label="Role" />
</ProForm>
```

### Async Data Loading

```tsx
<ProForm
  params={{ id: userId }}
  request={async (params) => {
    const user = await fetchUser(params.id);
    return { name: user.name, email: user.email };
  }}
  onFinish={async (values) => {
    await updateUser(userId, values);
    return true;
  }}
>
  <ProFormText name="name" label="Name" />
  <ProFormText name="email" label="Email" />
</ProForm>
```

### Per-field Readonly

```tsx
<ProForm>
  <ProFormText name="id" label="ID" readonly />
  <ProFormText name="name" label="Name" />
</ProForm>
```

### Field Width Presets

```tsx
<ProForm>
  <ProFormText name="code" label="Code" width="sm" />
  <ProFormText name="name" label="Name" width="md" />
  <ProFormText name="description" label="Description" width="lg" />
  <ProFormText name="fullWidth" label="Full" width="xl" />
  <ProFormDigit name="custom" label="Custom" width={200} />
</ProForm>
```

## Notes

- The `readonly` option can be set at the `ProForm` level or per field.
- `submitter={false}` disables the default submit/reset buttons.
- `ProFormList` is powered by `react-hook-form` `useFieldArray` and supports sorting via `@dnd-kit`.
- All field components are created via the `createProFormField` factory, which handles value binding, readonly rendering, and grid integration automatically.
