/** CSS class name prefix used for all ProForm-related components. */
export const CSS_PREFIX = 'om-react-ui-proform';

/** Default column span for grid layout (full width). */
export const DEFAULT_COL_SPAN = 24;

/** Default number of visible columns in {@link QueryFilter} before collapsing. */
export const DEFAULT_COLS_NUMBER = 3;

/**
 * Default UI text for buttons and actions.
 * Centralized here for i18n support.
 */
export const DEFAULT_TEXT = {
  submit: 'Submit',
  reset: 'Reset',
  search: 'Search',
  add: 'Add',
  delete: 'Delete',
  copy: 'Copy',
  collapse: 'Collapse',
  expand: 'Expand',
  previous: 'Previous',
  next: 'Next',
  yes: 'Yes',
  no: 'No',
  empty: '-',
} as const;

/**
 * Width presets for form fields mapped to pixel values.
 *
 * - `sm` — 160px
 * - `md` — 240px
 * - `lg` — 320px
 * - `xl` — 420px
 */
export const WIDTH_SIZE_MAP: Record<string, number> = {
  sm: 160,
  md: 240,
  lg: 320,
  xl: 420,
};
