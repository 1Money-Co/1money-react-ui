import 'jsdom-global/register';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import useUpdateEffect from '@/components/useUpdateEffect';

describe('useUpdateEffect', () => {
  it('does not run on initial mount', () => {
    const effectFn = jest.fn();

    function Component() {
      useUpdateEffect(effectFn);
      return <div data-testid='component'>test</div>;
    }

    render(<Component />);
    expect(effectFn).not.toHaveBeenCalled();
  });

  it('runs on subsequent updates', () => {
    const effectFn = jest.fn();

    function Component({ value }: { value: number }) {
      useUpdateEffect(effectFn, [value]);
      return <div data-testid='value'>{value}</div>;
    }

    const { rerender } = render(<Component value={1} />);
    expect(effectFn).not.toHaveBeenCalled();

    rerender(<Component value={2} />);
    expect(effectFn).toHaveBeenCalledTimes(1);

    rerender(<Component value={3} />);
    expect(effectFn).toHaveBeenCalledTimes(2);
  });

  it('respects dependency array', () => {
    const effectFn = jest.fn();

    function Component({ a, b }: { a: number; b: number }) {
      useUpdateEffect(effectFn, [a]);
      return (
        <div data-testid='values'>
          {a}-{b}
        </div>
      );
    }

    const { rerender } = render(<Component a={1} b={1} />);
    expect(effectFn).not.toHaveBeenCalled();

    // Changing b should not trigger effect
    rerender(<Component a={1} b={2} />);
    expect(effectFn).not.toHaveBeenCalled();

    // Changing a should trigger effect
    rerender(<Component a={2} b={2} />);
    expect(effectFn).toHaveBeenCalledTimes(1);
  });

  it('runs cleanup function', () => {
    const cleanupFn = jest.fn();
    const effectFn = jest.fn(() => cleanupFn);

    function Component({ value }: { value: number }) {
      useUpdateEffect(effectFn, [value]);
      return <div data-testid='value'>{value}</div>;
    }

    const { rerender, unmount } = render(<Component value={1} />);
    expect(cleanupFn).not.toHaveBeenCalled();

    rerender(<Component value={2} />);
    expect(cleanupFn).not.toHaveBeenCalled();

    rerender(<Component value={3} />);
    expect(cleanupFn).toHaveBeenCalledTimes(1);

    unmount();
    expect(cleanupFn).toHaveBeenCalledTimes(2);
  });

  it('runs on every update when no deps provided', () => {
    const effectFn = jest.fn();

    function Component({ value }: { value: number }) {
      useUpdateEffect(effectFn);
      return <div data-testid='value'>{value}</div>;
    }

    const { rerender } = render(<Component value={1} />);
    expect(effectFn).not.toHaveBeenCalled();

    rerender(<Component value={1} />);
    expect(effectFn).toHaveBeenCalledTimes(1);

    rerender(<Component value={1} />);
    expect(effectFn).toHaveBeenCalledTimes(2);
  });
});
