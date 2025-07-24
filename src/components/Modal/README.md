# Modal

A flexible modal dialog component built on top of PrimeReact's Dialog with enhanced styling and functionality.

## Features

- Customizable header and footer
- Backdrop click to close
- Escape key to close
- Responsive design
- Animation support
- Accessibility features
- Position control (center, top, left, right, etc.)
- Resizable and draggable options

## Basic Usage

```tsx
import { Modal } from '@1money/react-ui';

// Basic modal
const [visible, setVisible] = useState(false);

<Modal 
  visible={visible} 
  onHide={() => setVisible(false)}
  header="Modal Title"
>
  <p>Modal content goes here.</p>
</Modal>

// With custom footer
<Modal
  visible={visible}
  onHide={() => setVisible(false)}
  header="Confirm Action"
  footer={
    <div>
      <Button severity="secondary" onClick={() => setVisible(false)}>
        Cancel
      </Button>
      <Button severity="primary" onClick={handleConfirm}>
        Confirm
      </Button>
    </div>
  }
>
  <p>Are you sure you want to perform this action?</p>
</Modal>

// Full screen modal
<Modal
  visible={visible}
  onHide={() => setVisible(false)}
  maximizable
  maximized
  header="Full Screen Modal"
>
  <p>This modal takes up the full screen.</p>
</Modal>
```

## Props

The Modal component extends PrimeReact's Dialog component. Here are the key props:

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| prefixCls | The classname prefix for component styling | string | "modal" |
| visible | Whether the modal is visible | boolean | false |
| onHide | Callback when modal should be hidden | () => void | - |
| header | Modal header content | ReactNode | - |
| footer | Modal footer content | ReactNode | - |
| modal | Whether to show backdrop | boolean | true |
| closable | Whether to show close button | boolean | true |
| dismissableMask | Whether clicking backdrop closes modal | boolean | false |
| closeOnEscape | Whether escape key closes modal | boolean | true |
| showHeader | Whether to show header | boolean | true |
| baseZIndex | Base z-index value | number | 0 |
| autoZIndex | Whether to automatically manage z-index | boolean | true |

## Extended Props (from PrimeReact Dialog)

- `style?: CSSProperties` - Inline styles for the modal
- `contentStyle?: CSSProperties` - Inline styles for the content area  
- `contentClassName?: string` - CSS class for content area
- `position?: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'`
- `draggable?: boolean` - Whether modal can be dragged
- `resizable?: boolean` - Whether modal can be resized
- `minX?: number` - Minimum x position when dragging
- `minY?: number` - Minimum y position when dragging
- `maximizable?: boolean` - Whether modal can be maximized
- `maximized?: boolean` - Whether modal is maximized
- `breakpoints?: object` - Responsive breakpoints
- `transitionOptions?: object` - Animation transition options

## Styling

The Modal component uses SCSS modules with BEM-like naming conventions. Customize through:

1. `className` prop for additional styles
2. `prefixCls` override for complete style control
3. `contentClassName` for content area styling
4. CSS custom properties for theme customization

## Accessibility

- Focus management and trap
- Escape key handling
- ARIA attributes for screen readers
- Keyboard navigation support
- Proper semantic structure

## Examples

### Confirmation Dialog
```tsx
const ConfirmDialog = ({ visible, onHide, onConfirm, message }) => (
  <Modal
    visible={visible}
    onHide={onHide}
    header="Confirm"
    footer={
      <div className="flex justify-end gap-2">
        <Button severity="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button severity="danger" onClick={onConfirm}>
          Delete
        </Button>
      </div>
    }
    style={{ width: '450px' }}
  >
    <div className="flex align-items-center">
      <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
      <span>{message}</span>
    </div>
  </Modal>
);
```

### Form Modal
```tsx
const FormModal = ({ visible, onHide, onSubmit }) => {
  const [formData, setFormData] = useState({});
  
  return (
    <Modal
      visible={visible}
      onHide={onHide}
      header="Add New Item"
      footer={
        <div className="flex justify-end gap-2">
          <Button severity="secondary" onClick={onHide}>
            Cancel
          </Button>
          <Button severity="primary" onClick={() => onSubmit(formData)}>
            Save
          </Button>
        </div>
      }
      style={{ width: '600px' }}
    >
      <div className="p-4">
        <Input
          type="text"
          label="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <Input
          type="textarea"
          label="Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
      </div>
    </Modal>
  );
};
```

### Responsive Modal
```tsx
<Modal
  visible={visible}
  onHide={() => setVisible(false)}
  header="Responsive Modal"
  breakpoints={{ '960px': '75vw', '641px': '90vw' }}
  style={{ width: '50vw' }}
>
  <p>This modal adapts to different screen sizes.</p>
</Modal>
```
