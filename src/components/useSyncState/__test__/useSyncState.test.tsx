import 'jsdom-global/register';
import * as React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import useSyncState from '..';

describe('useSyncState', () => {
  it('works like useState for basic usage', () => {
    function Component() {
      const [getCount, setCount] = useSyncState(0);
      return (
        <div>
          <span data-testid='count'>{getCount()}</span>
          <button data-testid='increment' onClick={() => setCount(c => c + 1)}>
            Increment
          </button>
        </div>
      );
    }

    render(<Component />);
    expect(screen.getByTestId('count')).toHaveTextContent('0');

    fireEvent.click(screen.getByTestId('increment'));
    expect(screen.getByTestId('count')).toHaveTextContent('1');

    fireEvent.click(screen.getByTestId('increment'));
    expect(screen.getByTestId('count')).toHaveTextContent('2');
  });

  it('supports function initializer', () => {
    const initializer = jest.fn(() => 42);

    function Component() {
      const [getValue] = useSyncState(initializer);
      return <div data-testid='value'>{getValue()}</div>;
    }

    render(<Component />);
    expect(screen.getByTestId('value')).toHaveTextContent('42');
    expect(initializer).toHaveBeenCalledTimes(1);
  });

  it('always returns the latest state via getter', () => {
    let capturedGetState: () => number;
    let capturedSetState: (value: React.SetStateAction<number>) => void;

    function Component() {
      const [getCount, setCount] = useSyncState(0);
      capturedGetState = getCount;
      capturedSetState = setCount;
      return <div data-testid='count'>{getCount()}</div>;
    }

    render(<Component />);
    expect(capturedGetState!()).toBe(0);

    act(() => {
      capturedSetState!(1);
    });
    expect(capturedGetState!()).toBe(1);

    act(() => {
      capturedSetState!(2);
    });
    expect(capturedGetState!()).toBe(2);
  });

  it('handles multiple rapid state updates correctly', () => {
    let capturedGetState: () => number;

    function Component() {
      const [getCount, setCount] = useSyncState(0);
      capturedGetState = getCount;

      const handleMultipleUpdates = () => {
        // Simulate multiple rapid updates like onTransitionEnd
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
      };

      return (
        <div>
          <span data-testid='count'>{getCount()}</span>
          <button data-testid='multi' onClick={handleMultipleUpdates}>
            Multi Update
          </button>
        </div>
      );
    }

    render(<Component />);
    expect(screen.getByTestId('count')).toHaveTextContent('0');

    fireEvent.click(screen.getByTestId('multi'));
    // All three updates should be applied
    expect(screen.getByTestId('count')).toHaveTextContent('3');
    expect(capturedGetState!()).toBe(3);
  });

  it('provides latest state in callbacks without stale closure', () => {
    const stateValues: number[] = [];

    function Component() {
      const [getCount, setCount] = useSyncState(0);

      const handleClick = () => {
        setCount(c => c + 1);
        // With regular useState, this would show stale value
        // With useSyncState, getCount() returns the latest value
        stateValues.push(getCount());
      };

      return (
        <div>
          <span data-testid='count'>{getCount()}</span>
          <button data-testid='increment' onClick={handleClick}>
            Increment
          </button>
        </div>
      );
    }

    render(<Component />);

    fireEvent.click(screen.getByTestId('increment'));
    fireEvent.click(screen.getByTestId('increment'));
    fireEvent.click(screen.getByTestId('increment'));

    // Each click should see the updated state immediately
    expect(stateValues).toEqual([1, 2, 3]);
  });

  it('maintains referential equality of getter and setter', () => {
    const getters: Array<() => number> = [];
    const setters: Array<(value: React.SetStateAction<number>) => void> = [];

    function Component({ value }: { value: number }) {
      const [getCount, setCount] = useSyncState(0);
      getters.push(getCount);
      setters.push(setCount);
      return <div>{value}</div>;
    }

    const { rerender } = render(<Component value={1} />);
    rerender(<Component value={2} />);
    rerender(<Component value={3} />);

    expect(getters.length).toBe(3);
    expect(getters[0]).toBe(getters[1]);
    expect(getters[1]).toBe(getters[2]);

    expect(setters.length).toBe(3);
    expect(setters[0]).toBe(setters[1]);
    expect(setters[1]).toBe(setters[2]);
  });

  it('does not trigger re-render when setting same value', () => {
    let renderCount = 0;

    function Component() {
      renderCount++;
      const [getCount, setCount] = useSyncState(0);
      return (
        <div>
          <span data-testid='count'>{getCount()}</span>
          <button data-testid='same' onClick={() => setCount(c => c)}>
            Set Same
          </button>
          <button data-testid='increment' onClick={() => setCount(c => c + 1)}>
            Increment
          </button>
        </div>
      );
    }

    render(<Component />);
    expect(renderCount).toBe(1);

    // Setting same value should not trigger re-render
    fireEvent.click(screen.getByTestId('same'));
    expect(renderCount).toBe(1);

    // Setting different value should trigger re-render
    fireEvent.click(screen.getByTestId('increment'));
    expect(renderCount).toBe(2);

    // Setting same value (now 1) should not trigger re-render
    fireEvent.click(screen.getByTestId('same'));
    fireEvent.click(screen.getByTestId('same'));
    expect(renderCount).toBe(2);
  });

  it('works with object state', () => {
    function Component() {
      const [getUser, setUser] = useSyncState({ name: 'John', age: 25 });
      const user = getUser();
      return (
        <div>
          <span data-testid='name'>{user.name}</span>
          <span data-testid='age'>{user.age}</span>
          <button data-testid='birthday' onClick={() => setUser(u => ({ ...u, age: u.age + 1 }))}>
            Birthday
          </button>
        </div>
      );
    }

    render(<Component />);
    expect(screen.getByTestId('name')).toHaveTextContent('John');
    expect(screen.getByTestId('age')).toHaveTextContent('25');

    fireEvent.click(screen.getByTestId('birthday'));
    expect(screen.getByTestId('age')).toHaveTextContent('26');
  });

  it('simulates onTransitionEnd scenario with merged events', () => {
    const eventCounts: number[] = [];

    function Component() {
      const [getCount, setCount] = useSyncState(0);

      // Simulate multiple onTransitionEnd events firing at once
      const handleTransitionEnd = () => {
        // Each event increments and reads the latest state
        setCount(c => c + 1);
        eventCounts.push(getCount());
      };

      return (
        <div>
          <span data-testid='count'>{getCount()}</span>
          <button data-testid='transition' onClick={handleTransitionEnd}>
            Transition End
          </button>
        </div>
      );
    }

    render(<Component />);

    // Simulate 3 transition end events firing rapidly
    fireEvent.click(screen.getByTestId('transition'));
    fireEvent.click(screen.getByTestId('transition'));
    fireEvent.click(screen.getByTestId('transition'));

    // Each event should see the immediately updated state
    expect(eventCounts).toEqual([1, 2, 3]);
    expect(screen.getByTestId('count')).toHaveTextContent('3');
  });
});
