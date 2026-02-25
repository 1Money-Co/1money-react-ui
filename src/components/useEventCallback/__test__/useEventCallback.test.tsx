import 'jsdom-global/register';
import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import useEventCallback from '@/components/useEventCallback';

describe('useEventCallback', () => {
  it('returns a stable callback reference across renders', () => {
    const callbacks: Array<() => void> = [];

    function CallbackCollector({ value }: { value: number }) {
      const callback = useEventCallback(() => value);
      callbacks.push(callback);
      return <div data-testid='value'>{value}</div>;
    }

    const { rerender } = render(<CallbackCollector value={1} />);
    rerender(<CallbackCollector value={2} />);
    rerender(<CallbackCollector value={3} />);

    expect(callbacks.length).toBe(3);
    expect(callbacks[0]).toBe(callbacks[1]);
    expect(callbacks[1]).toBe(callbacks[2]);
  });

  it('always invokes the latest version of the function', () => {
    let capturedCallback: () => number;

    function Component({ value }: { value: number }) {
      const callback = useEventCallback(() => value);
      capturedCallback = callback;
      return <div data-testid='value'>{value}</div>;
    }

    const { rerender } = render(<Component value={1} />);
    expect(capturedCallback!()).toBe(1);

    rerender(<Component value={2} />);
    expect(capturedCallback!()).toBe(2);

    rerender(<Component value={3} />);
    expect(capturedCallback!()).toBe(3);
  });

  it('passes arguments correctly', () => {
    let capturedCallback: (a: number, b: number) => number;

    function Component() {
      const callback = useEventCallback((a: number, b: number) => a + b);
      capturedCallback = callback;
      return <div>test</div>;
    }

    render(<Component />);
    expect(capturedCallback!(2, 3)).toBe(5);
    expect(capturedCallback!(10, 20)).toBe(30);
  });

  it('works with event handlers', () => {
    const clicks: number[] = [];

    function Counter() {
      const [count, setCount] = React.useState(0);
      const handleClick = useEventCallback(() => {
        clicks.push(count);
        setCount(c => c + 1);
      });

      return (
        <button type='button' data-testid='button' onClick={handleClick}>
          Count: {count}
        </button>
      );
    }

    render(<Counter />);
    const button = screen.getByTestId('button');

    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    expect(clicks).toEqual([0, 1, 2]);
    expect(button).toHaveTextContent('Count: 3');
  });
});
