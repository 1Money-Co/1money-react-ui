import 'jsdom-global/register';
import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import useMemoizedFn from '..';

describe('useMemoizedFn', () => {
  it('returns a stable function reference across renders', () => {
    const functions: Array<() => void> = [];

    function FnCollector({ value }: { value: number }) {
      const fn = useMemoizedFn(() => value);
      functions.push(fn);
      return <div data-testid='value'>{value}</div>;
    }

    const { rerender } = render(<FnCollector value={1} />);
    rerender(<FnCollector value={2} />);
    rerender(<FnCollector value={3} />);

    expect(functions.length).toBe(3);
    expect(functions[0]).toBe(functions[1]);
    expect(functions[1]).toBe(functions[2]);
  });

  it('always calls the latest version of the function', () => {
    let capturedFn: () => number;

    function Component({ value }: { value: number }) {
      const fn = useMemoizedFn(() => value);
      capturedFn = fn;
      return <div data-testid='value'>{value}</div>;
    }

    const { rerender } = render(<Component value={1} />);
    expect(capturedFn!()).toBe(1);

    rerender(<Component value={2} />);
    expect(capturedFn!()).toBe(2);

    rerender(<Component value={3} />);
    expect(capturedFn!()).toBe(3);
  });

  it('passes arguments correctly', () => {
    let capturedFn: (a: number, b: string) => string;

    function Component() {
      const fn = useMemoizedFn((a: number, b: string) => `${a}-${b}`);
      capturedFn = fn;
      return <div>test</div>;
    }

    render(<Component />);
    expect(capturedFn!(1, 'hello')).toBe('1-hello');
    expect(capturedFn!(42, 'world')).toBe('42-world');
  });

  it('preserves this context', () => {
    let capturedFn: () => unknown;

    function Component() {
      const fn = useMemoizedFn(function (this: unknown) {
        return this;
      });
      capturedFn = fn;
      return <div>test</div>;
    }

    render(<Component />);

    const context = { name: 'test' };
    expect(capturedFn!.call(context)).toBe(context);
  });

  it('works in effects without causing re-renders', () => {
    const effectRuns: number[] = [];

    function Component({ value }: { value: number }) {
      const fn = useMemoizedFn(() => value);

      React.useEffect(() => {
        effectRuns.push(fn());
      }, [fn]);

      return <div data-testid='value'>{value}</div>;
    }

    const { rerender } = render(<Component value={1} />);
    rerender(<Component value={2} />);
    rerender(<Component value={3} />);

    // Effect should only run once because fn reference is stable
    expect(effectRuns).toEqual([1]);
  });
});
