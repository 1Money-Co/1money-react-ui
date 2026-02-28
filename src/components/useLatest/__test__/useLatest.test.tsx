import 'jsdom-global/register';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import useLatest from '..';

function Probe({ value }: { value: number }) {
  const ref = useLatest(value);

  return (
    <div>
      <span data-testid='current'>{ref.current}</span>
    </div>
  );
}

describe('useLatest', () => {
  it('returns a ref with the current value', () => {
    render(<Probe value={42} />);
    expect(screen.getByTestId('current')).toHaveTextContent('42');
  });

  it('updates ref.current to the latest value on rerender', () => {
    const { rerender } = render(<Probe value={1} />);
    expect(screen.getByTestId('current')).toHaveTextContent('1');

    rerender(<Probe value={2} />);
    expect(screen.getByTestId('current')).toHaveTextContent('2');

    rerender(<Probe value={3} />);
    expect(screen.getByTestId('current')).toHaveTextContent('3');
  });

  it('maintains referential equality of the ref object', () => {
    const refs: React.MutableRefObject<number>[] = [];

    function RefCollector({ value }: { value: number }) {
      const ref = useLatest(value);
      refs.push(ref);
      return <div data-testid='value'>{ref.current}</div>;
    }

    const { rerender } = render(<RefCollector value={1} />);
    rerender(<RefCollector value={2} />);
    rerender(<RefCollector value={3} />);

    expect(refs.length).toBe(3);
    expect(refs[0]).toBe(refs[1]);
    expect(refs[1]).toBe(refs[2]);
  });
});
