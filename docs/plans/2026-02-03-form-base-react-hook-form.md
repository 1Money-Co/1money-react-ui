# React Form (React Hook Form) Implementation Plan

**Goal:** Add a new `Form` and `FormItem` component that provider React form layout/UX while using `react-hook-form` for state and validation.

**Architecture:** Implement a `Form` wrapper that creates or accepts a `react-hook-form` instance and provides layout metadata via context. Implement `FormItem` as the layout + validation boundary that reads RHF field state, supports `dependencies`, `shouldUpdate`, and `validateTrigger`, and renders label/help/error with spacing. Keep the API focused and composable, relying on render-props for field wiring.

**Tech Stack:** React, TypeScript, react-hook-form, Storybook, Jest, SCSS (tokens from `src/variable.scss`).

---

### Task 1: Add `react-hook-form` to dependencies

**Files:**
- Modify: `package.json`

**Step 1: Add peer + dev dependency**

```json
{
  "peerDependencies": {
    "react-hook-form": ">=7.0.0"
  },
  "devDependencies": {
    "react-hook-form": "^7.54.0"
  }
}
```

**Step 2: Install deps**

Run: `pnpm install`
Expected: installs `react-hook-form` without errors.

---

### Task 2: Create Form types and context contract

**Files:**
- Create: `src/components/Form/interface.ts`

**Step 1: Define shared layout + props types**

```ts
import type { CSSProperties, ReactNode } from 'react';
import type {
  DefaultValues,
  FieldErrors,
  FieldPath,
  FieldPathValue,
  FieldValues,
  RegisterOptions,
  UseFormProps,
  UseFormReturn,
  ControllerRenderProps,
  ControllerFieldState,
} from 'react-hook-form';

export type FormLayout = 'horizontal' | 'vertical' | 'inline';
export type FormLabelAlign = 'left' | 'right';
export type FormSize = 'small' | 'middle' | 'large';
export type FormValidateStatus = 'success' | 'warning' | 'error' | 'validating';

export interface FormContextValue {
  layout: FormLayout;
  labelAlign: FormLabelAlign;
  labelCol: number; // 0-12 grid
  wrapperCol: number; // 0-12 grid
  size: FormSize;
  disabled?: boolean;
  colon: boolean;
  requiredMark: boolean;
  control: UseFormReturn['control'];
}

export interface FormProps<TFieldValues extends FieldValues = FieldValues>
  extends Omit<UseFormProps<TFieldValues>, 'defaultValues'> {
  defaultValues?: DefaultValues<TFieldValues>;
  form?: UseFormReturn<TFieldValues>;
  onFinish?: (values: TFieldValues) => void | Promise<void>;
  onFinishFailed?: (errors: FieldErrors<TFieldValues>) => void;
  layout?: FormLayout;
  labelAlign?: FormLabelAlign;
  labelCol?: number; // 0-12 grid
  wrapperCol?: number; // 0-12 grid
  size?: FormSize;
  disabled?: boolean;
  colon?: boolean;
  requiredMark?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export interface FormItemRenderProps<TFieldValues extends FieldValues = FieldValues> {
  field?: ControllerRenderProps<TFieldValues, FieldPath<TFieldValues>>;
  fieldState?: ControllerFieldState;
  form: UseFormReturn<TFieldValues>;
  values: TFieldValues;
}

export interface FormItemProps<TFieldValues extends FieldValues = FieldValues> {
  name?: FieldPath<TFieldValues>;
  label?: ReactNode;
  required?: boolean;
  rules?: RegisterOptions<TFieldValues>;
  defaultValue?: FieldPathValue<TFieldValues, FieldPath<TFieldValues>>;
  help?: ReactNode;
  extra?: ReactNode;
  validateStatus?: FormValidateStatus;
  dependencies?: Array<FieldPath<TFieldValues>>;
  shouldUpdate?: boolean | ((prev: TFieldValues, next: TFieldValues) => boolean);
  validateTrigger?: 'onChange' | 'onBlur' | Array<'onChange' | 'onBlur'>;
  noStyle?: boolean;
  valuePropName?: string; // defaults to 'value'
  className?: string;
  labelCol?: number;
  wrapperCol?: number;
  children?: ReactNode | ((props: FormItemRenderProps<TFieldValues>) => ReactNode);
}
```

---

### Task 3: Implement `Form` component

**Files:**
- Create: `src/components/Form/Form.tsx`

**Step 1: Implement provider + submit wiring**

```tsx
import React, { createContext, useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import classnames, { joinCls } from '@/utils/classnames';
import type { FormContextValue, FormProps } from './interface';

export const FormContext = createContext<FormContextValue | null>(null);

function BaseForm<TFieldValues extends Record<string, any> = Record<string, any>>(props: FormProps<TFieldValues>) {
  const {
    form,
    defaultValues,
    onFinish,
    onFinishFailed,
    layout = 'horizontal',
    labelAlign = 'right',
    labelCol = 3,
    wrapperCol = 9,
    size = 'middle',
    disabled,
    colon = true,
    requiredMark = true,
    className,
    style,
    children,
    ...useFormProps
  } = props;

  const methods = form ?? useForm<TFieldValues>({ defaultValues, ...useFormProps });

  const ctx = useMemo<FormContextValue>(() => ({
    layout,
    labelAlign,
    labelCol,
    wrapperCol,
    size,
    disabled,
    colon,
    requiredMark,
    control: methods.control,
  }), [layout, labelAlign, labelCol, wrapperCol, size, disabled, colon, requiredMark, methods.control]);

  const classes = classnames('form');

  return (
    <FormProvider {...methods}>
      <FormContext.Provider value={ctx}>
        <form
          className={classes('root', joinCls(
            className,
            classes(`layout-${layout}`),
            classes(`size-${size}`),
            labelAlign === 'left' && classes('label-left')
          ))}
          style={style}
          onSubmit={methods.handleSubmit(
            async (values) => { await onFinish?.(values); },
            (errors) => { onFinishFailed?.(errors); }
          )}
          noValidate
        >
          {children}
        </form>
      </FormContext.Provider>
    </FormProvider>
  );
}
```

**Step 2: Defer export until after `FormItem` is declared**

```ts
// export happens after FormItem definition
```

**Step 3: Attach static `FormItem`  with typing**

```tsx
type FormComponent = typeof BaseForm & { FormItem: typeof FormItem };
const Form = Object.assign(BaseForm, { FormItem }) as FormComponent;
export { Form, FormItem };
export default Form;
```

---

### Task 4: Implement `FormItem` component

**Files:**
- Modify: `src/components/Form/Form.tsx`

**Step 1: Add helper to compute grid widths**

```ts
const toPercent = (col?: number) => {
  if (col == null) return undefined;
  return `${(Math.max(0, Math.min(12, col)) / 12) * 100}%`;
};
```

**Step 2: Add `FormItem` implementation**

```tsx
import React, { useContext, useEffect, useMemo, useRef } from 'react';
import { Controller, useFormContext, useWatch } from 'react-hook-form';
import { Typography } from '../Typography';
import classnames, { joinCls } from '@/utils/classnames';
import type { FormItemProps, FormValidateStatus } from './interface';

const resolveStatus = (explicit?: FormValidateStatus, hasError?: boolean): FormValidateStatus | undefined => {
  if (explicit) return explicit;
  if (hasError) return 'error';
  return undefined;
};

export function FormItem<TFieldValues extends Record<string, any> = Record<string, any>>(props: FormItemProps<TFieldValues>) {
  const {
    name,
    label,
    required,
    rules,
    defaultValue,
    help,
    extra,
    validateStatus,
    dependencies,
    shouldUpdate,
    validateTrigger,
    noStyle,
    valuePropName = 'value',
    className,
    labelCol,
    wrapperCol,
    children,
  } = props;

  const ctx = useContext(FormContext);
  const methods = useFormContext<TFieldValues>();
  const control = methods?.control ?? ctx?.control;
  const trigger = methods?.trigger;
  const classes = classnames('form-item');

  const labelWidth = toPercent(labelCol ?? ctx?.labelCol);
  const wrapperWidth = toPercent(wrapperCol ?? ctx?.wrapperCol);

  const depNames = dependencies?.length ? dependencies : [];
  const depValues = useWatch({ control, name: depNames as any });
  const allValues = useWatch({ control }) as TFieldValues;
  const prevValuesRef = useRef<TFieldValues>(allValues);

  useEffect(() => {
    if (name && dependencies?.length) {
      void trigger?.(name as any);
    }
  }, [depValues, dependencies?.length, name, trigger]);

  const shouldRender = useMemo(() => {
    if (!shouldUpdate) return true;
    if (shouldUpdate === true) return true;
    return shouldUpdate(prevValuesRef.current, allValues);
  }, [shouldUpdate, allValues]);

  useEffect(() => {
    if (shouldUpdate) {
      prevValuesRef.current = allValues;
    }
  }, [shouldUpdate, allValues]);

  const normalizeValidateTrigger = (value?: FormItemProps<TFieldValues>['validateTrigger']) => {
    if (!value) return [];
    return Array.isArray(value) ? value : [value];
  };

  const triggerModes = normalizeValidateTrigger(validateTrigger);
  const shouldTrigger = (mode: 'onChange' | 'onBlur') => triggerModes.includes(mode);
  const wrapOnChange = (fn?: (...args: any[]) => void) => (e: any) => {
    fn?.(e);
    if (name && shouldTrigger('onChange')) {
      void trigger?.(name as any);
    }
  };
  const wrapOnBlur = (fn?: (...args: any[]) => void) => (e: any) => {
    fn?.(e);
    if (name && shouldTrigger('onBlur')) {
      void trigger?.(name as any);
    }
  };

  const renderField = (field: any, fieldState: any) => {
    const status = resolveStatus(validateStatus, !!fieldState.error);
    const patchedField = {
      ...field,
      onChange: wrapOnChange(field.onChange),
      onBlur: wrapOnBlur(field.onBlur),
    };
    const content = typeof children === 'function'
      ? children({ field: patchedField, fieldState, form: methods, values: allValues })
      : React.isValidElement(children)
        ? React.cloneElement(children as React.ReactElement, {
          [valuePropName]: patchedField.value,
          onChange: patchedField.onChange,
          onBlur: patchedField.onBlur,
          disabled: ctx?.disabled,
        })
        : children;

    return (
      <div className={classes('content', joinCls(
        status && classes(`content-${status}`),
        ctx?.disabled && classes('content-disabled')
      ))}
      >
        {content}
        {fieldState.error?.message && !help && (
          <div className={classes('help', classes('help-error'))}>{fieldState.error.message}</div>
        )}
        {help && <div className={classes('help')}>{help}</div>}
        {extra && <div className={classes('extra')}>{extra}</div>}
      </div>
    );
  };

  if (noStyle) {
    return name ? (
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue={defaultValue}
        render={({ field, fieldState }) => renderField(field, fieldState)}
      />
    ) : shouldUpdate && typeof children === 'function' ? (
      shouldRender ? <>{children({ form: methods, values: allValues })}</> : null
    ) : (
      <>{children}</>
    );
  }

  return (
    <div
      className={classes('root', joinCls(className, ctx?.layout && classes(`layout-${ctx.layout}`)))}
      style={{
        ['--om-form-label-width' as any]: labelWidth,
        ['--om-form-wrapper-width' as any]: wrapperWidth,
      }}
    >
      {label && (
        <div className={classes('label', joinCls(required && classes('label-required')))}>
          <Typography>{label}</Typography>
          {ctx?.colon && <span className={classes('colon')}>:</span>}
        </div>
      )}
      <div className={classes('control')}>
        {name ? (
          <Controller
            name={name}
            control={control}
            rules={rules}
            defaultValue={defaultValue}
            render={({ field, fieldState }) => renderField(field, fieldState)}
          />
        ) : shouldUpdate && typeof children === 'function' ? (
          <div className={classes('content')}>{shouldRender ? children({ form: methods, values: allValues }) : null}</div>
        ) : (
          <div className={classes('content')}>{children}</div>
        )}
      </div>
    </div>
  );
}
```

---

### Task 5: Add styles for Form + FormItem

**Files:**
- Create: `src/components/Form/style/Form.scss`
- Create: `src/components/Form/style/index.ts`

**Step 1: Base layout + tokens**

```scss
@use '../../../variable.scss' as *;

$component: 'form';
$cls: #{$prefix}-#{$component};

.#{$cls} {
  &-root {
    width: 100%;
  }

  &-layout-horizontal .#{$prefix}-form-item-root {
    display: flex;
    align-items: flex-start;
  }

  &-layout-vertical .#{$prefix}-form-item-root {
    display: flex;
    flex-direction: column;
  }

  &-layout-inline {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }

  &-label-left .#{$prefix}-form-item-label {
    text-align: left;
  }
}

$item: 'form-item';
$itemCls: #{$prefix}-#{$item};

.#{$itemCls} {
  &-root {
    width: 100%;
    margin-bottom: 16px;
  }

  &-label {
    flex: 0 0 var(--om-form-label-width, 25%);
    max-width: var(--om-form-label-width, 25%);
    padding-right: 12px;
    color: $color-primary-black;
    font-size: 14px;
    line-height: 20px;
    text-align: right;
  }

  &-label-required::before {
    margin-right: 4px;
    color: $color-negative;
    content: '*';
  }

  &-colon {
    margin-left: 4px;
  }

  &-control {
    flex: 1 1 auto;
    max-width: var(--om-form-wrapper-width, 75%);
  }

  &-content {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &-help {
    color: $color-grey-midnight;
    font-size: 12px;
    line-height: 18px;
  }

  &-help-error {
    color: $color-negative;
  }

  &-extra {
    color: $color-grey-dark;
    font-size: 12px;
    line-height: 18px;
  }

  &-content-error .#{$itemCls}-control {
    border-color: $color-negative;
  }

  &-content-success .#{$itemCls}-control {
    border-color: $color-success;
  }
}
```

**Step 2: Wire style entry**

```ts
import './Form.scss';
```

---

### Task 6: Create component barrel + exports

**Files:**
- Create: `src/components/Form/index.ts`
- Modify: `src/index.ts`
- Modify: `package.json`

**Step 1: Barrel export**

```ts
import Form from './Form';

export { Form, FormItem } from './Form';

export default Form;

export * from './interface';
```

**Step 2: Export from library root**

```ts
import { Form, FormItem } from './components/Form';

export { Form, FormItem } from './components/Form';

// add to default export
Form,
FormItem,
```

**Step 3: Add package export**

```json
"./Form": {
  "types": "./es/components/Form/index.d.ts",
  "import": "./es/components/Form/index.js",
  "require": "./lib/components/Form/index.js"
}
```

---

### Task 7: Add Storybook stories

**Files:**
- Create: `src/components/Form/Form.stories.tsx`

**Step 1: Basic vertical + horizontal examples**

```tsx
import React from 'react';
import { Form } from './index';
import { Input } from '../Input';
import { Button } from '../Button';
import { Typography } from '../Typography';
import './style';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Form> = {
  title: 'Components/Form',
  component: Form,
  tags: ['autodocs'],
};

export default meta;

export const Basic: StoryObj<typeof Form> = {
  render: () => (
    <Form
      layout='vertical'
      defaultValues={{ email: '', password: '' }}
      onFinish={(values) => console.info('submit', values)}
    >
      <Form.FormItem name='email' label='Email' rules={{ required: 'Email is required' }}>
        {({ field }) => <Input {...field} placeholder='you@company.com' />}
      </Form.FormItem>
      <Form.FormItem name='password' label='Password' rules={{ required: 'Password is required' }}>
        {({ field }) => <Input {...field} type='password' />}
      </Form.FormItem>
      <Form.FormItem>
        <Button type='submit'>Submit</Button>
      </Form.FormItem>
    </Form>
  )
};

export const Horizontal: StoryObj<typeof Form> = {
  render: () => (
    <Form layout='horizontal' labelCol={3} wrapperCol={9}>
      <Form.FormItem label='Company'>
        <Input placeholder='1Money' />
      </Form.FormItem>
      <Form.FormItem label='Website'>
        <Input placeholder='https://1money.com' />
      </Form.FormItem>
    </Form>
  )
};

export const AdvancedBehaviors: StoryObj<typeof Form> = {
  render: () => (
    <Form layout='vertical' defaultValues={{ email: '', confirmEmail: '', first: '', last: '' }}>
      <Form.FormItem name='email' label='Email' rules={{ required: 'Email is required' }}>
        {({ field }) => <Input {...field} placeholder='you@company.com' />}
      </Form.FormItem>
      <Form.FormItem
        name='confirmEmail'
        label='Confirm Email'
        dependencies={['email']}
        rules={{
          validate: (value, values) => value === values.email || 'Emails do not match'
        }}
        validateTrigger='onBlur'
      >
        {({ field }) => <Input {...field} placeholder='retype email' />}
      </Form.FormItem>
      <Form.FormItem shouldUpdate>
        {({ values }) => (
          <Typography>Preview: {values.first} {values.last}</Typography>
        )}
      </Form.FormItem>
      <Form.FormItem name='first' label='First Name'>
        {({ field }) => <Input {...field} />}
      </Form.FormItem>
      <Form.FormItem name='last' label='Last Name'>
        {({ field }) => <Input {...field} />}
      </Form.FormItem>
    </Form>
  )
};
```

---

### Task 8: Add tests + snapshots

**Files:**
- Create: `src/components/Form/__test__/index.test.tsx`

**Step 1: Write failing tests**

```tsx
import 'jsdom-global/register';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Form } from '../index';
import { Input } from '../../Input';

describe('Form', () => {
  it('renders labels and help text', () => {
    const view = render(
      <Form layout='vertical'>
        <Form.FormItem label='Email' help='We never share it.'>
          <Input />
        </Form.FormItem>
      </Form>
    );
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('We never share it.')).toBeInTheDocument();
    expect(view).toMatchSnapshot();
  });

  it('shows validation error on submit', async () => {
    const user = userEvent.setup();
    render(
      <Form onFinish={() => undefined}>
        <Form.FormItem name='email' label='Email' rules={{ required: 'Email is required' }}>
          {({ field }) => <Input {...field} />}
        </Form.FormItem>
        <button type='submit'>Submit</button>
      </Form>
    );

    await user.click(screen.getByText('Submit'));
    expect(await screen.findByText('Email is required')).toBeInTheDocument();
  });

  it('revalidates dependent fields on dependency change', async () => {
    const user = userEvent.setup();
    render(
      <Form>
        <Form.FormItem name='email' label='Email'>
          {({ field }) => <Input {...field} />}
        </Form.FormItem>
        <Form.FormItem
          name='confirmEmail'
          label='Confirm Email'
          dependencies={['email']}
          rules={{
            validate: (value, values) => value === values.email || 'Emails do not match'
          }}
        >
          {({ field }) => <Input {...field} />}
        </Form.FormItem>
      </Form>
    );

    const [emailInput] = screen.getAllByRole('textbox');
    await user.type(emailInput, 'test@1money.com');
    expect(await screen.findByText('Emails do not match')).toBeInTheDocument();
  });

  it('validates on blur when validateTrigger is onBlur', async () => {
    const user = userEvent.setup();
    render(
      <Form>
        <Form.FormItem name='email' label='Email' rules={{ required: 'Email is required' }} validateTrigger='onBlur'>
          {({ field }) => <Input {...field} />}
        </Form.FormItem>
        <button type='button'>Outside</button>
      </Form>
    );

    const [emailInput] = screen.getAllByRole('textbox');
    await user.click(emailInput);
    await user.click(screen.getByText('Outside'));
    expect(await screen.findByText('Email is required')).toBeInTheDocument();
  });

  it('re-renders shouldUpdate items', async () => {
    const user = userEvent.setup();
    render(
      <Form>
        <Form.FormItem name='first' label='First'>
          {({ field }) => <Input {...field} />}
        </Form.FormItem>
        <Form.FormItem shouldUpdate>
          {({ values }) => <div>Preview: {values.first}</div>}
        </Form.FormItem>
      </Form>
    );

    const [firstInput] = screen.getAllByRole('textbox');
    await user.type(firstInput, 'Ada');
    expect(screen.getByText('Preview: Ada')).toBeInTheDocument();
  });
});
```

**Step 2: Run tests to verify they fail**

Run: `pnpm test -- Form`
Expected: FAIL with “Cannot find module '../index'” or missing component exports.

**Step 3: Implement code until tests pass**

(Use Tasks 3–6.)

**Step 4: Run tests + update snapshots**

Run: `pnpm test -- Form`
Expected: PASS

Run: `pnpm test:snapshot -- Form`
Expected: snapshots updated for `Form`.

---

### Task 9: Add README documentation

**Files:**
- Create: `src/components/Form/README.md`

**Step 1: Document API + usage**

```md
# Form

form wrapper powered by `react-hook-form`.

## Usage

```tsx
import { Form, Input, Button } from '@1money/react-ui';

export default function Example() {
  return (
    <Form
      layout='vertical'
      defaultValues={{ email: '' }}
      onFinish={(values) => console.log(values)}
    >
      <Form.FormItem name='email' label='Email' rules={{ required: 'Email is required' }}>
        {({ field }) => <Input {...field} placeholder='you@company.com' />}
      </Form.FormItem>
      <Form.FormItem>
        <Button type='submit'>Submit</Button>
      </Form.FormItem>
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
- `defaultValues?: DefaultValues`
- `onFinish?: (values) => void`
- `onFinishFailed?: (errors) => void`

### FormItem
- `name?: FieldPath`
- `label?: ReactNode`
- `required?: boolean`
- `rules?: RegisterOptions`
- `dependencies?: FieldPath[]`
- `shouldUpdate?: boolean | ((prev, next) => boolean)`
- `validateTrigger?: 'onChange' | 'onBlur' | Array<'onChange' | 'onBlur'>`
- `help?: ReactNode`
- `extra?: ReactNode`
- `validateStatus?: 'success' | 'warning' | 'error' | 'validating'`
- `noStyle?: boolean`
- `valuePropName?: string`
```
```

---

### Task 10: Wire SCSS import in component entry

**Files:**
- Modify: `src/components/Form/Form.tsx`

**Step 1: Ensure style can be imported by story**

```ts
import './style';
```

---

### Task 11: Smoke-check in Storybook

**Files:**
- No code changes.

**Step 1: Run Storybook**

Run: `pnpm dev`
Expected: Storybook on `http://localhost:6205` showing new `Components/Form` stories.
