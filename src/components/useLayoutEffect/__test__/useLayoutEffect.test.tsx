import 'jsdom-global/register';
import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import useLayoutEffect from '..';

describe('useLayoutEffect', () => {
  it('passes true for mount parameter on initial render', () => {
    const mountValues: boolean[] = [];

    function Component() {
      useLayoutEffect(mount => {
        mountValues.push(mount);
      });
      return <div data-testid='component'>test</div>;
    }

    render(<Component />);
    expect(mountValues).toEqual([true]);
  });

  it('passes false for mount parameter on subsequent renders', () => {
    const mountValues: boolean[] = [];

    function Component({ value }: { value: number }) {
      useLayoutEffect(
        mount => {
          mountValues.push(mount);
        },
        [value],
      );
      return <div data-testid='value'>{value}</div>;
    }

    const { rerender } = render(<Component value={1} />);
    expect(mountValues).toEqual([true]);

    rerender(<Component value={2} />);
    expect(mountValues).toEqual([true, false]);

    rerender(<Component value={3} />);
    expect(mountValues).toEqual([true, false, false]);
  });

  it('respects dependency array', () => {
    const mountValues: boolean[] = [];

    function Component({ a, b }: { a: number; b: number }) {
      useLayoutEffect(
        mount => {
          mountValues.push(mount);
        },
        [a],
      );
      return (
        <div data-testid='values'>
          {a}-{b}
        </div>
      );
    }

    const { rerender } = render(<Component a={1} b={1} />);
    expect(mountValues).toEqual([true]);

    // Changing b should not trigger effect
    rerender(<Component a={1} b={2} />);
    expect(mountValues).toEqual([true]);

    // Changing a should trigger effect
    rerender(<Component a={2} b={2} />);
    expect(mountValues).toEqual([true, false]);
  });

  it('runs cleanup function', () => {
    const cleanupFn = jest.fn();

    function Component({ value }: { value: number }) {
      useLayoutEffect(
        () => {
          return cleanupFn;
        },
        [value],
      );
      return <div data-testid='value'>{value}</div>;
    }

    const { rerender, unmount } = render(<Component value={1} />);
    expect(cleanupFn).not.toHaveBeenCalled();

    rerender(<Component value={2} />);
    expect(cleanupFn).toHaveBeenCalledTimes(1);

    unmount();
    expect(cleanupFn).toHaveBeenCalledTimes(2);
  });

  it('runs synchronously before paint', () => {
    const order: string[] = [];

    function Component() {
      useLayoutEffect(() => {
        order.push('layoutEffect');
      });

      React.useEffect(() => {
        order.push('effect');
      });

      order.push('render');
      return <div>test</div>;
    }

    render(<Component />);
    expect(order).toEqual(['render', 'layoutEffect', 'effect']);
  });
});
