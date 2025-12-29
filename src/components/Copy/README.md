# Copy

`Copy` renders a clipboard icon that copies a provided string to the user’s clipboard and gives instant visual feedback. Once copied, the icon flashes to a checkmark for 1.5 seconds.

## Props
| Name | Description | Type | Default |
| --- | --- | --- | --- |
| `value` | Text that will be written to the clipboard. Component is inert if empty. | `string` | – |
| `iconSize` | Icon pixel size passed to the shared `Icons` component. | `number` | `32` |
| `className` | Additional wrapper class names. | `string` | – |
| `prefixCls` | BEM-style class prefix to theme the component. | `string` | `'om-react-ui-copy'` |
| `onSuccess` | Callback invoked when copy succeeds; receives the copied value. | `(val: string) => void` | – |
| `onError` | Callback invoked when the clipboard write fails. | `(val: string) => void` | – |

## Usage

```tsx
import { Copy } from '@1money/react-ui';

export const CopyAccountId = () => {
  const accountId = 'ACCT-4721-8891';

  return (
    <Copy
      value={accountId}
      iconSize={24}
      onSuccess={() => toast.success('Account ID copied')}
      onError={() => toast.error('Copy failed, try again')}
    />
  );
};
```

### Notes
- `value` is required; repeated clicks are ignored while the success state is active.
- To restyle success feedback, target `.copy.success` (or the `prefixCls` you provide) in component-level styles.
- The component relies on the shared clipboard utility, so it works across browsers that support the async clipboard API with a fallback for `document.execCommand`.
