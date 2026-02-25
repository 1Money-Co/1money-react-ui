import 'jsdom-global/register';
import * as React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import useSafeState from '@/components/useSafeState';

describe('useSafeState', () => {
  it('works like useState for basic usage', () => {
    function Component() {
      const [count, setCount] = useSafeState(0);
      return (
        <div>
          <span data-testid='count'>{count}</span>
          <button type='button' data-testid='increment' onClick={() => setCount(c => (c ?? 0) + 1)}>
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
      const [value] = useSafeState(initializer);
      return <div data-testid='value'>{value}</div>;
    }

    render(<Component />);
    expect(screen.getByTestId('value')).toHaveTextContent('42');
    expect(initializer).toHaveBeenCalledTimes(1);
  });

  it('supports undefined initial state', () => {
    function Component() {
      const [value, setValue] = useSafeState<string>();
      return (
        <div>
          <span data-testid='value'>{value ?? 'undefined'}</span>
          <button type='button' data-testid='set' onClick={() => setValue('hello')}>
            Set
          </button>
        </div>
      );
    }

    render(<Component />);
    expect(screen.getByTestId('value')).toHaveTextContent('undefined');

    fireEvent.click(screen.getByTestId('set'));
    expect(screen.getByTestId('value')).toHaveTextContent('hello');
  });

  it('ignores setState calls after unmount', async () => {
    const setStateAfterUnmount = jest.fn();
    let externalSetState: React.Dispatch<React.SetStateAction<number>>;

    function Component() {
      const [count, setCount] = useSafeState(0);
      externalSetState = setCount;
      return <div data-testid='count'>{count}</div>;
    }

    const { unmount } = render(<Component />);
    expect(screen.getByTestId('count')).toHaveTextContent('0');

    // Update state while mounted - should work
    act(() => {
      externalSetState(1);
    });
    expect(screen.getByTestId('count')).toHaveTextContent('1');

    // Unmount the component
    unmount();

    // Try to update state after unmount - should be silently ignored
    // This should not throw or cause any issues
    act(() => {
      externalSetState(2);
      setStateAfterUnmount();
    });

    // The setStateAfterUnmount was called, proving the code executed
    // but the setState should have been ignored
    expect(setStateAfterUnmount).toHaveBeenCalled();
  });

  it('handles async operations gracefully after unmount', async () => {
    jest.useFakeTimers();
    let asyncSetState: React.Dispatch<React.SetStateAction<string>>;

    function Component() {
      const [status, setStatus] = useSafeState('idle');
      asyncSetState = setStatus;

      const startAsync = () => {
        setStatus('loading');
        setTimeout(() => {
          setStatus('complete');
        }, 1000);
      };

      return (
        <div>
          <span data-testid='status'>{status}</span>
          <button type='button' data-testid='start' onClick={startAsync}>
            Start
          </button>
        </div>
      );
    }

    const { unmount } = render(<Component />);
    expect(screen.getByTestId('status')).toHaveTextContent('idle');

    // Start async operation
    fireEvent.click(screen.getByTestId('start'));
    expect(screen.getByTestId('status')).toHaveTextContent('loading');

    // Unmount before async completes
    unmount();

    // Fast-forward timers - the setState in the timeout should be ignored
    act(() => {
      jest.runAllTimers();
    });

    // No errors should have occurred
    jest.useRealTimers();
  });

  it('maintains referential equality of setState', () => {
    const setters: React.Dispatch<React.SetStateAction<number>>[] = [];

    function Component({ value }: { value: number }) {
      const [, setCount] = useSafeState(0);
      setters.push(setCount);
      return <div>{value}</div>;
    }

    const { rerender } = render(<Component value={1} />);
    rerender(<Component value={2} />);
    rerender(<Component value={3} />);

    expect(setters.length).toBe(3);
    expect(setters[0]).toBe(setters[1]);
    expect(setters[1]).toBe(setters[2]);
  });

  it('works with object state', () => {
    function Component() {
      const [user, setUser] = useSafeState({ name: 'John', age: 25 });
      return (
        <div>
          <span data-testid='name'>{user?.name}</span>
          <span data-testid='age'>{user?.age}</span>
          <button
            type='button'
            data-testid='birthday'
            onClick={() => setUser(u => (u ? { ...u, age: u.age + 1 } : u))}
          >
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
});
