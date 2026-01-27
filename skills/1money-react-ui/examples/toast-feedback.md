# Example: Toast Feedback (Programmatic)

## Components
- Toast
- Button

## States
- success/info/warn/error via `toastRef.current?.show(...)`

## Code
```tsx
import { useRef } from 'react';
import { Toast, Button } from '@1money/react-ui';

export function ToastDemo() {
  const toastRef = useRef<any>(null);

  return (
    <div>
      <Toast ref={toastRef} />

      <Button
        severity="primary"
        onClick={() =>
          toastRef.current?.show({
            severity: 'success',
            summary: 'Success',
            detail: 'Saved successfully',
            life: 2500,
          })
        }
      >
        Show success
      </Button>

      <Button
        severity="secondary"
        onClick={() =>
          toastRef.current?.show({
            severity: 'error',
            summary: 'Error',
            detail: 'Something went wrong',
            life: 3500,
          })
        }
      >
        Show error
      </Button>
    </div>
  );
}
```
