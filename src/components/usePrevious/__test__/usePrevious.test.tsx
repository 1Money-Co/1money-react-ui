import 'jsdom-global/register';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import usePrevious from '..';

function Probe({ value }: { value: number }) {
  const previous = usePrevious(value);

  return (
    <div data-testid='previous'>
      {previous === undefined ? 'undefined' : String(previous)}
    </div>
  );
}

describe('usePrevious', () => {
  it('returns undefined on first render and previous value on updates', () => {
    const { rerender } = render(<Probe value={1} />);

    expect(screen.getByTestId('previous')).toHaveTextContent('undefined');

    rerender(<Probe value={2} />);
    expect(screen.getByTestId('previous')).toHaveTextContent('1');

    rerender(<Probe value={3} />);
    expect(screen.getByTestId('previous')).toHaveTextContent('2');
  });

  it('returns latest committed value on same-value rerender', () => {
    const { rerender } = render(<Probe value={5} />);

    expect(screen.getByTestId('previous')).toHaveTextContent('undefined');

    rerender(<Probe value={5} />);
    expect(screen.getByTestId('previous')).toHaveTextContent('5');
  });

  it('preserves previous-value sequence in StrictMode', () => {
    const StrictProbe = ({ value }: { value: number }) => (
      <React.StrictMode>
        <Probe value={value} />
      </React.StrictMode>
    );

    const { rerender } = render(<StrictProbe value={10} />);

    expect(screen.getByTestId('previous')).toHaveTextContent('undefined');

    rerender(<StrictProbe value={20} />);
    expect(screen.getByTestId('previous')).toHaveTextContent('10');

    rerender(<StrictProbe value={20} />);
    expect(screen.getByTestId('previous')).toHaveTextContent('20');
  });
});
