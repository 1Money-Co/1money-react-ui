import { useRef } from 'react';

/**
 * A hook that returns the previous value of a variable from the last render.
 *
 * @param value The value to track
 * @returns The previous value (undefined on first render)
 */
export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T | undefined>(undefined);
  const previous = ref.current;
  ref.current = value;
  return previous;
}
