# Form

An Ant-Design-like form component powered by `react-hook-form`, providing layout management, declarative validation, and flexible field rendering.

## Features

- Horizontal, vertical, and inline layouts with 12-column grid
- Declarative validation rules via `react-hook-form` `RegisterOptions`
- Configurable validation triggers (onChange, onBlur, debounced)
- Sequential or parallel multi-validator execution
- Scroll-to-first-error on failed submission
- Controlled mode via external `useForm()` instance
- Value-change subscriptions with optional field filtering
- Conditional rendering with `shouldUpdate` and `watchNames`
- Render-prop and React element child patterns
- Form-wide size, disabled, colon, and required-mark settings

## Basic Usage

```tsx
import { Form, FormItem, Input, Button } from '@1money/react-ui';

<Form
  layout="vertical"
  defaultValues={{ email: '' }}
  onFinish={(values) => console.log(values)}
>
  <FormItem name="email" label="Email" rules={{ required: 'Email is required' }}>
    {({ field }) => <Input type="text" {...field} placeholder="you@company.com" />}
  </FormItem>
  <FormItem>
    <Button type="submit">Submit</Button>
  </FormItem>
</Form>
```

## Form Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| layout | Form layout direction | `'horizontal'` \| `'vertical'` \| `'inline'` | `'horizontal'` |
| labelAlign | Label text alignment | `'left'` \| `'right'` | `'right'` |
| labelCol | Label column span (0-12 grid) | `number` | `3` |
| wrapperCol | Wrapper column span (0-12 grid) | `number` | `9` |
| size | Size variant for all child items | `'small'` \| `'middle'` \| `'large'` | `'middle'` |
| disabled | Disables all form fields | `boolean` | `false` |
| colon | Show colon after each label | `boolean` | `true` |
| requiredMark | Show required asterisk on required fields | `boolean` | `true` |
| defaultValues | Initial values for form fields | `DefaultValues<TFieldValues>` | - |
| form | External `useForm()` return for controlled mode | `UseFormReturn<TFieldValues>` | - |
| onFinish | Callback with valid values on successful submit | `(values: TFieldValues) => void \| Promise<void>` | - |
| onFinishFailed | Callback with errors on failed submit | `(errors: FieldErrors<TFieldValues>) => void` | - |
| onValuesChange | Callback when watched field values change | `(values, info: { name?, type? }) => void` | - |
| watchNames | Field paths to filter `onValuesChange` | `FieldPath[]` | - |
| scrollToFirstError | Scroll to first invalid field on submit failure | `boolean \| { behavior?, block?, inline?, offset? }` | `false` |
| className | CSS class for the `<form>` element | `string` | - |
| style | Inline styles for the `<form>` element | `CSSProperties` | - |

## FormItem Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| name | Field path within form values | `FieldPath<TFieldValues>` | - |
| label | Label content | `ReactNode` | - |
| required | Mark as required (auto-inferred from `rules.required`) | `boolean` | `false` |
| rules | Validation rules (react-hook-form `RegisterOptions` subset) | `FormItemRules` | - |
| defaultValue | Default value for the field | `FieldPathValue` | - |
| help | Help text below the field (overrides error messages) | `ReactNode` | - |
| extra | Extra content below help text | `ReactNode` | - |
| validateStatus | Explicit validation status override | `'success'` \| `'warning'` \| `'error'` \| `'validating'` | - |
| dependencies | Fields that trigger re-validation of this field | `FieldPath[]` | - |
| watchNames | Fields to watch for re-rendering | `FieldPath[]` | - |
| shouldUpdate | Re-render control: `true` for all changes, or a comparator function | `boolean \| ((prev, next) => boolean)` | - |
| validateTrigger | When to trigger validation | `'onChange'` \| `'onBlur'` \| `Array<...>` | `[]` (submit only) |
| validateFirst | Multi-validator order: `true` = sequential, `'parallel'` = concurrent | `boolean \| 'parallel'` | - |
| validateDebounce | Debounce delay in ms for triggered validation | `number` | - |
| noStyle | Render field content only, without label/wrapper | `boolean` | `false` |
| valuePropName | Prop name for binding the value to the child | `string` | `'value'` |
| labelCol | Per-item label column span override (0-12) | `number` | - |
| wrapperCol | Per-item wrapper column span override (0-12) | `number` | - |
| className | CSS class for the form item wrapper | `string` | - |

## Render Props

`FormItem` children can be a React element or a render-prop function receiving `FormItemRenderProps`:

| Property | Description | Type |
| --- | --- | --- |
| field | Controller bindings with `invalid` and `success` flags (present when `name` is set) | `ControllerRenderProps & { invalid?, success? }` |
| fieldState | Field state: error, dirty, touched, etc. (present when `name` is set) | `ControllerFieldState` |
| form | The `react-hook-form` methods instance | `UseFormReturn` |
| values | Current snapshot of all form values | `TFieldValues` |

`values` updates when `shouldUpdate` is a function or when `watchNames` is provided. For a full re-render on any change, use `shouldUpdate={() => true}`.

## Styling

The Form component uses SCSS modules with BEM-like naming conventions. Customization options:

1. `className` prop on `<Form>` and `<FormItem>`
2. CSS custom properties: `--om-form-label-width`, `--om-form-wrapper-width`
3. Override `prefixCls` for complete style control

## Examples

### Layout + Grid

```tsx
import { Form, FormItem, Input } from '@1money/react-ui';

<Form layout="horizontal" labelAlign="left" labelCol={3} wrapperCol={9} size="middle">
  <FormItem label="Company">
    <Input type="text" placeholder="1Money" />
  </FormItem>
</Form>
```

### Inline Layout

```tsx
<Form layout="inline">
  <FormItem label="First">
    <Input type="text" placeholder="Ada" />
  </FormItem>
  <FormItem label="Last">
    <Input type="text" placeholder="Lovelace" />
  </FormItem>
</Form>
```

### Required, Help, Extra, Validate Status

```tsx
<Form>
  <FormItem
    label="Email"
    required
    help="We never share it."
    extra="Use a work address."
    validateStatus="warning"
  >
    <Input type="text" placeholder="you@company.com" />
  </FormItem>
</Form>
```

### Scroll To First Error

```tsx
<Form scrollToFirstError={{ block: 'start', offset: 72 }}>
  <FormItem name="email" label="Email" rules={{ required: 'Email is required' }}>
    {({ field }) => <Input type="text" {...field} />}
  </FormItem>
</Form>
```

### onValuesChange

```tsx
<Form
  defaultValues={{ email: '' }}
  onValuesChange={(values, info) => {
    console.log(info?.name, values);
  }}
>
  <FormItem name="email" label="Email">
    {({ field }) => <Input type="text" {...field} />}
  </FormItem>
</Form>
```

### Dependencies (Cross-field Validation)

```tsx
<Form defaultValues={{ email: '', confirmEmail: '' }}>
  <FormItem name="email" label="Email">
    {({ field }) => <Input type="text" {...field} />}
  </FormItem>
  <FormItem
    name="confirmEmail"
    label="Confirm Email"
    dependencies={['email']}
    rules={{
      validate: (value, values) => value === values.email || 'Emails do not match',
    }}
  >
    {({ field }) => <Input type="text" {...field} />}
  </FormItem>
</Form>
```

### shouldUpdate (Derived UI)

```tsx
import { Typography } from '@1money/react-ui';

<Form defaultValues={{ first: '', last: '' }}>
  <FormItem name="first" label="First">
    {({ field }) => <Input type="text" {...field} />}
  </FormItem>
  <FormItem name="last" label="Last">
    {({ field }) => <Input type="text" {...field} />}
  </FormItem>
  <FormItem shouldUpdate watchNames={['first', 'last']}>
    {({ values }) => (
      <Typography.Body size="m">
        Preview: {values.first} {values.last}
      </Typography.Body>
    )}
  </FormItem>
</Form>
```

### validateTrigger + validateDebounce

```tsx
<Form defaultValues={{ email: '' }}>
  <FormItem
    name="email"
    label="Email"
    validateTrigger="onChange"
    validateDebounce={300}
    rules={{ validate: (value) => (value?.length ?? 0) >= 3 || 'Too short' }}
  >
    {({ field }) => <Input type="text" {...field} />}
  </FormItem>
</Form>
```

### validateFirst (Sequential vs Parallel)

```tsx
<Form defaultValues={{ email: '' }}>
  <FormItem
    name="email"
    label="Email"
    validateFirst="parallel"
    rules={{
      validate: {
        notEmpty: (value) => !!value || 'Required',
        match: (value) =>
          (typeof value === 'string' ? value.includes('@') : false) || 'Must include @',
      },
    }}
  >
    {({ field }) => <Input type="text" {...field} />}
  </FormItem>
</Form>
```

### noStyle + valuePropName

```tsx
import { Switch } from '@1money/react-ui';

<Form defaultValues={{ newsletter: false }}>
  <FormItem name="newsletter" noStyle valuePropName="checked">
    <Switch />
  </FormItem>
</Form>
```

### Label/Wrapper Override Per Item

```tsx
<Form layout="horizontal" labelCol={3} wrapperCol={9}>
  <FormItem label="Full Width" labelCol={0} wrapperCol={12}>
    <Input type="text" placeholder="Stretch" />
  </FormItem>
</Form>
```

### Disabled / Colon / Required Mark

```tsx
<Form disabled colon={false} requiredMark={false}>
  <FormItem label="Read Only">
    <Input type="text" value="Locked" readOnly />
  </FormItem>
</Form>
```

### Controlled Mode (External Form)

```tsx
import { useForm } from 'react-hook-form';

const form = useForm({ defaultValues: { email: '' } });

<Form form={form} onFinish={(values) => console.log(values)}>
  <FormItem name="email" label="Email">
    {({ field }) => <Input type="text" {...field} />}
  </FormItem>
</Form>

// Access form methods externally
<Button onClick={() => form.reset()}>Reset</Button>
<Button onClick={() => console.log(form.getValues())}>Log Values</Button>
```
