// Form layout defaults.
export const DEFAULT_LAYOUT = 'horizontal' as const;
export const DEFAULT_LABEL_ALIGN = 'right' as const;
export const DEFAULT_LABEL_COL = 3;
export const DEFAULT_WRAPPER_COL = 9;
export const DEFAULT_SIZE = 'middle' as const;

// Scroll-to-error defaults.
export const DEFAULT_SCROLL_BEHAVIOR = 'smooth' as const;
export const DEFAULT_SCROLL_BLOCK = 'center' as const;
export const DEFAULT_SCROLL_INLINE = 'nearest' as const;
export const SELECTOR_NAME_ATTR = 'name';
export const SELECTOR_DATA_FORM_ITEM_ATTR = 'data-form-item-name';

// Grid math helpers (12-column grid).
export const GRID_MIN = 0;
export const GRID_COLUMNS = 12;
export const PERCENT = 100;

// Validation/trigger helpers.
export const DEBOUNCE_MIN = 0;
export const STATUS_VALIDATING = 'validating' as const;
export const STATUS_ERROR = 'error' as const;
export const STATUS_SUCCESS = 'success' as const;
export const VALIDATE_PARALLEL = 'parallel' as const;
export const TRIGGER_CHANGE = 'onChange' as const;
export const TRIGGER_BLUR = 'onBlur' as const;

// CSS variable names for layout width.
export const CSS_VAR_LABEL_WIDTH = '--om-form-label-width';
export const CSS_VAR_WRAPPER_WIDTH = '--om-form-wrapper-width';

// Default prop mapping for controlled inputs.
export const DEFAULT_VALUE_PROP = 'value' as const;
