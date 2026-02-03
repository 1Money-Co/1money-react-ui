# Form

Ant-Design-like form wrapper powered by `react-hook-form`.

## Usage

```tsx
import { Form, FormItem, Input, Button } from '@1money/react-ui';

export default function Example() {
  return (
    <Form
      layout='vertical'
      defaultValues={{ email: '' }}
      onFinish={(values) => console.log(values)}
    >
      <FormItem name='email' label='Email' rules={{ required: 'Email is required' }}>
        {({ field }) => <Input type='text' {...field} placeholder='you@company.com' />}
      </FormItem>
      <FormItem>
        <Button type='submit'>Submit</Button>
      </FormItem>
    </Form>
  );
}
```

## Advanced Example

```tsx
import { Form, FormItem, Input, Typography } from '@1money/react-ui';

export default function AdvancedExample() {
  return (
    <Form layout='vertical' defaultValues={{ email: '', confirmEmail: '', first: '', last: '' }}>
      <FormItem name='email' label='Email' rules={{ required: 'Email is required' }}>
        {({ field }) => <Input type='text' {...field} placeholder='you@company.com' />}
      </FormItem>
      <FormItem
        name='confirmEmail'
        label='Confirm Email'
        dependencies={['email']}
        rules={{
          validate: (value, values) => value === values.email || 'Emails do not match'
        }}
        validateTrigger='onBlur'
      >
        {({ field }) => <Input type='text' {...field} placeholder='retype email' />}
      </FormItem>
      <FormItem shouldUpdate>
        {({ values }) => (
          <Typography.Body size='m'>Preview: {values.first} {values.last}</Typography.Body>
        )}
      </FormItem>
      <FormItem name='first' label='First Name'>
        {({ field }) => <Input type='text' {...field} />}
      </FormItem>
      <FormItem name='last' label='Last Name'>
        {({ field }) => <Input type='text' {...field} />}
      </FormItem>
    </Form>
  );
}
```

## Props

### Render Props
- `FormItem` render function receives `{ field, fieldState, form, values }`.
- When `shouldUpdate` is set and no `name` is provided, use `values` to render dependent UI.

### Form
- `layout?: 'horizontal' | 'vertical' | 'inline'`
- `labelAlign?: 'left' | 'right'`
- `labelCol?: number` (0-12)
- `wrapperCol?: number` (0-12)
- `size?: 'small' | 'middle' | 'large'`
- `disabled?: boolean`
- `colon?: boolean`
- `requiredMark?: boolean`
- `scrollToFirstError?: boolean | { behavior?: ScrollBehavior; block?: ScrollLogicalPosition; inline?: ScrollLogicalPosition; offset?: number }`
- `defaultValues?: DefaultValues`
- `onFinish?: (values) => void`
- `onFinishFailed?: (errors) => void`
- `onValuesChange?: (values, info) => void`

### FormItem
- `name?: FieldPath`
- `label?: ReactNode`
- `required?: boolean`
- `rules?: RegisterOptions`
- `dependencies?: FieldPath[]`
- `shouldUpdate?: boolean | ((prev, next) => boolean)`
- `validateTrigger?: 'onChange' | 'onBlur' | Array<'onChange' | 'onBlur'>`
- `validateFirst?: boolean | 'parallel'`
- `validateDebounce?: number`
- `help?: ReactNode`
- `extra?: ReactNode`
- `validateStatus?: 'success' | 'warning' | 'error' | 'validating'`
- `noStyle?: boolean`
- `valuePropName?: string`

## API Examples

### Layout + Grid

```tsx
import { Form, FormItem, Input } from '@1money/react-ui';

<Form layout='horizontal' labelAlign='left' labelCol={3} wrapperCol={9} size='middle'>
  <FormItem label='Company'>
    <Input type='text' placeholder='1Money' />
  </FormItem>
</Form>
```

### Inline Layout

```tsx
<Form layout='inline'>
  <FormItem label='First'>
    <Input type='text' placeholder='Ada' />
  </FormItem>
  <FormItem label='Last'>
    <Input type='text' placeholder='Lovelace' />
  </FormItem>
</Form>
```

### Required, Help, Extra, Validate Status

```tsx
<Form>
  <FormItem
    label='Email'
    required
    help='We never share it.'
    extra='Use a work address.'
    validateStatus='warning'
  >
    <Input type='text' placeholder='you@company.com' />
  </FormItem>
</Form>
```

### Scroll To First Error

```tsx
<Form scrollToFirstError={{ block: 'start', offset: 72 }}>
  <FormItem name='email' label='Email' rules={{ required: 'Email is required' }}>
    {({ field }) => <Input type='text' {...field} />}
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
  <FormItem name='email' label='Email'>
    {({ field }) => <Input type='text' {...field} />}
  </FormItem>
</Form>
```

### Dependencies

```tsx
<Form defaultValues={{ email: '', confirmEmail: '' }}>
  <FormItem name='email' label='Email'>
    {({ field }) => <Input type='text' {...field} />}
  </FormItem>
  <FormItem
    name='confirmEmail'
    label='Confirm Email'
    dependencies={['email']}
    rules={{
      validate: (value, values) => value === values.email || 'Emails do not match'
    }}
  >
    {({ field }) => <Input type='text' {...field} />}
  </FormItem>
</Form>
```

### shouldUpdate (Derived UI)

```tsx
import { Typography } from '@1money/react-ui';

<Form defaultValues={{ first: '', last: '' }}>
  <FormItem name='first' label='First'>
    {({ field }) => <Input type='text' {...field} />}
  </FormItem>
  <FormItem name='last' label='Last'>
    {({ field }) => <Input type='text' {...field} />}
  </FormItem>
  <FormItem shouldUpdate>
    {({ values }) => (
      <Typography.Body size='m'>Preview: {values.first} {values.last}</Typography.Body>
    )}
  </FormItem>
</Form>
```

### validateTrigger + validateDebounce

```tsx
<Form defaultValues={{ email: '' }}>
  <FormItem
    name='email'
    label='Email'
    validateTrigger='onChange'
    validateDebounce={300}
    rules={{ validate: (value) => (value?.length ?? 0) >= 3 || 'Too short' }}
  >
    {({ field }) => <Input type='text' {...field} />}
  </FormItem>
</Form>
```

### validateFirst (Sequential vs Parallel)

```tsx
<Form defaultValues={{ email: '' }}>
  <FormItem
    name='email'
    label='Email'
    validateFirst='parallel'
    rules={{
      validate: {
        notEmpty: (value) => !!value || 'Required',
        match: (value) => value.includes('@') || 'Must include @',
      }
    }}
  >
    {({ field }) => <Input type='text' {...field} />}
  </FormItem>
</Form>
```

### noStyle + valuePropName

```tsx
import { Switch } from '@1money/react-ui';

<Form defaultValues={{ newsletter: false }}>
  <FormItem name='newsletter' noStyle valuePropName='checked'>
    <Switch />
  </FormItem>
</Form>
```

### Label/Wrapper Override Per Item

```tsx
<Form layout='horizontal' labelCol={3} wrapperCol={9}>
  <FormItem label='Full Width' labelCol={0} wrapperCol={12}>
    <Input type='text' placeholder='Stretch' />
  </FormItem>
</Form>
```

### Disabled / Colon / Required Mark

```tsx
<Form disabled colon={false} requiredMark={false}>
  <FormItem label='Read Only'>
    <Input type='text' value='Locked' readOnly />
  </FormItem>
</Form>
```
