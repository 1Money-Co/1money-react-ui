// ---------------------------------------------------------------------------
// Form layout defaults
// ---------------------------------------------------------------------------

/** Default form layout direction. */
export const DEFAULT_LAYOUT = 'horizontal' as const;

/** Default label text alignment. */
export const DEFAULT_LABEL_ALIGN = 'right' as const;

/** Default label column span in the 12-column grid. */
export const DEFAULT_LABEL_COL = 3;

/** Default wrapper/control column span in the 12-column grid. */
export const DEFAULT_WRAPPER_COL = 9;

/** Default form size variant. */
export const DEFAULT_SIZE = 'middle' as const;

// ---------------------------------------------------------------------------
// Scroll-to-error defaults
// ---------------------------------------------------------------------------

/** Default `scrollIntoView` behavior when scrolling to the first error. */
export const DEFAULT_SCROLL_BEHAVIOR = 'smooth' as const;

/** Default `scrollIntoView` block position. */
export const DEFAULT_SCROLL_BLOCK = 'center' as const;

/** Default `scrollIntoView` inline position. */
export const DEFAULT_SCROLL_INLINE = 'nearest' as const;

/** Standard HTML `name` attribute used for querySelector lookups. */
export const SELECTOR_NAME_ATTR = 'name';

/** Data attribute rendered on FormItem wrappers for querySelector lookups. */
export const SELECTOR_DATA_FORM_ITEM_ATTR = 'data-form-item-name';

// ---------------------------------------------------------------------------
// Grid math helpers (12-column grid)
// ---------------------------------------------------------------------------

/** Minimum allowed grid column value. */
export const GRID_MIN = 0;

/** Total number of columns in the grid system. */
export const GRID_COLUMNS = 12;

/** Percentage multiplier for grid-to-percent conversion. */
export const PERCENT = 100;

// ---------------------------------------------------------------------------
// Validation / trigger helpers
// ---------------------------------------------------------------------------

/** Minimum debounce threshold in milliseconds (values at or below are treated as immediate). */
export const DEBOUNCE_MIN = 0;

/** Validation status indicating an async validation is in progress. */
export const STATUS_VALIDATING = 'validating' as const;

/** Validation status indicating a field error. */
export const STATUS_ERROR = 'error' as const;

/** Validation status indicating a field passed validation. */
export const STATUS_SUCCESS = 'success' as const;

/** Sentinel for the parallel `validateFirst` mode. */
export const VALIDATE_PARALLEL = 'parallel' as const;

/** Trigger mode for change events. */
export const TRIGGER_CHANGE = 'onChange' as const;

/** Trigger mode for blur events. */
export const TRIGGER_BLUR = 'onBlur' as const;

// ---------------------------------------------------------------------------
// CSS variable names for layout width
// ---------------------------------------------------------------------------

/** CSS custom property controlling the label column width. */
export const CSS_VAR_LABEL_WIDTH = '--om-form-label-width';

/** CSS custom property controlling the wrapper/control column width. */
export const CSS_VAR_WRAPPER_WIDTH = '--om-form-wrapper-width';

// ---------------------------------------------------------------------------
// Default prop mapping for controlled inputs
// ---------------------------------------------------------------------------

/** Default prop name used to bind a controlled value to a child element. */
export const DEFAULT_VALUE_PROP = 'value' as const;
