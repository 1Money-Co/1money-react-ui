import { useEffect, useRef } from 'react';

/**
 * A hook that returns the previous value from the last committed render.
 *
 * @param value The value to track
 * @returns The previous value (undefined on first render)
 */
export default function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T | undefined>(undefined);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
