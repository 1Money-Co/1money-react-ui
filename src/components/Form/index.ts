/**
 * @module Form
 *
 * Form components built on top of `react-hook-form` with layout management,
 * validation triggers, scroll-to-error, and value-change subscriptions.
 *
 * @example
 * ```tsx
 * import { Form, FormItem } from '@1money/react-ui';
 *
 * <Form defaultValues={{ name: '' }} onFinish={handleSubmit}>
 *   <FormItem name="name" label="Name" rules={{ required: true }}>
 *     <Input />
 *   </FormItem>
 * </Form>
 * ```
 */
export { Form, default } from './Form';
export { FormItem } from './FormItem';

export * from './interface';
