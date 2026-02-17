import { useState, useRef, type SetStateAction } from 'react';
import useEventCallback from '../useEventCallback';

type GetState<T> = () => T;
type SetState<T> = (value: SetStateAction<T>) => void;

/**
 * Same as `React.useState` but will always get the latest state.
 * This is useful when React merges multiple state updates into one.
 * e.g. `onTransitionEnd` triggers multiple events at once that will be merged
 * into a single state update in React.
 *
 * @param initialState The initial state value or initializer function
 * @returns A tuple of [getState, setState] where getState always returns the latest value
 */
export default function useSyncState<T>(initialState: T | (() => T)): [GetState<T>, SetState<T>] {
  const stateRef = useRef<T | null>(null);

  // Initialize ref on first render
  if (stateRef.current === null) {
    stateRef.current =
      typeof initialState === 'function' ? (initialState as () => T)() : initialState;
  }

  const [, forceUpdate] = useState({});

  const getState = useEventCallback<[], T>(() => stateRef.current as T);

  const setState = useEventCallback<[SetStateAction<T>], void>(value => {
    const prevState = stateRef.current as T;
    const nextState = typeof value === 'function' ? (value as (prev: T) => T)(prevState) : value;

    if (!Object.is(prevState, nextState)) {
      stateRef.current = nextState;
      forceUpdate({});
    }
  });

  return [getState, setState];
}
