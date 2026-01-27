# Example: Confirm Modal (Danger Action)

## Components
- Modal
- Button
- Message (error)

## States
- visible: show/hide modal
- loading: confirm button loading + disable actions
- error: inline message in modal

## Code
```tsx
import { useState } from 'react';
import { Modal, Button, Message } from '@1money/react-ui';

export function DeleteConfirmDemo() {
  const [visible, setVisible] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string>('');

  const onConfirm = async () => {
    setError('');
    try {
      setSubmitting(true);
      // TODO: call API
      await new Promise((r) => setTimeout(r, 600));
      setVisible(false);
    } catch (e) {
      setError('Delete failed. Please retry.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <Button severity="danger" onClick={() => setVisible(true)}>
        Delete
      </Button>

      <Modal
        visible={visible}
        onHide={() => (submitting ? null : setVisible(false))}
        header="Delete item"
        dismissableMask={false}
        closeOnEscape={!submitting}
        footer={
          <div>
            <Button severity="secondary" onClick={() => setVisible(false)} disabled={submitting}>
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
