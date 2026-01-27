# Example: Login Form

## Components
- Input (email, password)
- Button (submit)
- Message (form-level error)

## States
- validation: `invalid` + `message`
- loading: submit button `loading`
- error: form-level `Message`

## Code
```tsx
import { useMemo, useState } from 'react';
import { Input, Button, Message } from '@1money/react-ui';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string>('');

  const emailError = useMemo(() => {
    if (!email) return 'Email is required';
    if (!email.includes('@')) return 'Invalid email';
    return '';
  }, [email]);

  const passwordError = useMemo(() => {
    if (!password) return 'Password is required';
    if (password.length < 8) return 'At least 8 characters';
    return '';
  }, [password]);

  const canSubmit = !emailError && !passwordError && !submitting;

  const onSubmit = async () => {
    setFormError('');
    if (!canSubmit) return;

    try {
      setSubmitting(true);
      // TODO: call API
      await new Promise((r) => setTimeout(r, 600));
    } catch (e) {
      setFormError('Login failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      {formError ? <Message severity="error" text={formError} /> : null}

      <Input
        type="text"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        invalid={!!emailError}
        message={emailError || ' '}
        placeholder="user@example.com"
        disabled={submitting}
      />

      <Input
        type="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        invalid={!!passwordError}
        message={passwordError || ' '}
        feedback={false}
        toggleMask
        disabled={submitting}
      />

      <div style={{ marginTop: 12 }}>
        <Button severity="primary" loading={submitting} disabled={!canSubmit} onClick={onSubmit}>
          Sign in
        </Button>
      </div>
    </div>
  );
}
```
