# Example: Confirm Modal (Danger Action)

## Components
- Modal
- Button
- Message (error)

## States
- visible: controlled via `ref.current.show()` / `ref.current.hide()`
- loading: confirm button loading + disable actions
- error: inline message in modal

## Code
```tsx
import { useRef, useState } from 'react';
import { Modal, Button, Message } from '@1money/react-ui';
import type { ModalHandlers } from '@1money/react-ui/es/components/Modal/interface';

export function DeleteConfirmDemo() {
  const modalRef = useRef<ModalHandlers>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string>('');

  const onShow = () => {
    setError('');
    modalRef.current?.show();
  };

  const onHide = () => {
    if (!submitting) {
      modalRef.current?.hide();
    }
  };

  const onConfirm = async () => {
    setError('');
    try {
      setSubmitting(true);
      // TODO: call API
      await new Promise((r) => setTimeout(r, 600));
      modalRef.current?.hide();
    } catch (e) {
      setError('Delete failed. Please retry.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <Button severity="danger" onClick={onShow}>
        Delete
      </Button>

      <Modal
        ref={modalRef}
        header="Delete item"
        dismissableMask={false}
        closeOnEscape={!submitting}
        footer={
          <div>
            <Button severity="secondary" onClick={onHide} disabled={submitting}>
              Cancel
            </Button>
            <Button severity="danger" onClick={onConfirm} loading={submitting} disabled={submitting}>
              Confirm
            </Button>
          </div>
        }
      >
        {error ? <Message severity="error" text={error} /> : null}
        <p>Are you sure you want to delete this item? This action cannot be undone.</p>
      </Modal>
    </div>
  );
}
```
