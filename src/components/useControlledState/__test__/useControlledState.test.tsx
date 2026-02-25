import 'jsdom-global/register';
import * as React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import useControlledState from '..';

describe('useControlledState', () => {
  describe('uncontrolled mode', () => {
    it('uses defaultStateValue when value is undefined', () => {
      function Component() {
        const [state] = useControlledState('default');
        return <div data-testid='state'>{state}</div>;
      }

      render(<Component />);
      expect(screen.getByTestId('state')).toHaveTextContent('default');
    });

    it('supports function initializer for defaultStateValue', () => {
      function Component() {
        const [state] = useControlledState(() => 'lazy-default');
        return <div data-testid='state'>{state}</div>;
      }

      render(<Component />);
      expect(screen.getByTestId('state')).toHaveTextContent('lazy-default');
    });

    it('allows updating internal state', () => {
      function Component() {
        const [state, setState] = useControlledState(0);
        return (
          <div>
            <span data-testid='state'>{state}</span>
            <button type='button' data-testid='increment' onClick={() => setState(s => s + 1)}>
              Increment
            </button>
          </div>
        );
      }

      render(<Component />);
      expect(screen.getByTestId('state')).toHaveTextContent('0');

      fireEvent.click(screen.getByTestId('increment'));
      expect(screen.getByTestId('state')).toHaveTextContent('1');

      fireEvent.click(screen.getByTestId('increment'));
      expect(screen.getByTestId('state')).toHaveTextContent('2');
    });
  });

  describe('controlled mode', () => {
    it('uses provided value prop', () => {
      function Component({ value }: { value: string }) {
        const [state] = useControlledState('default', value);
        return <div data-testid='state'>{state}</div>;
      }

      render(<Component value='controlled' />);
      expect(screen.getByTestId('state')).toHaveTextContent('controlled');
    });

    it('updates when value prop changes', () => {
      function Component({ value }: { value: string }) {
        const [state] = useControlledState('default', value);
        return <div data-testid='state'>{state}</div>;
      }

      const { rerender } = render(<Component value='first' />);
      expect(screen.getByTestId('state')).toHaveTextContent('first');

      rerender(<Component value='second' />);
      expect(screen.getByTestId('state')).toHaveTextContent('second');

      rerender(<Component value='third' />);
      expect(screen.getByTestId('state')).toHaveTextContent('third');
    });

    it('ignores internal state updates when controlled', () => {
      function Component({ value }: { value: number }) {
        const [state, setState] = useControlledState(0, value);
        return (
          <div>
            <span data-testid='state'>{state}</span>
            <button type='button' data-testid='increment' onClick={() => setState(s => s + 1)}>
              Increment
            </button>
          </div>
        );
      }

      render(<Component value={100} />);
      expect(screen.getByTestId('state')).toHaveTextContent('100');

      // Internal state update is ignored because value prop takes precedence
      fireEvent.click(screen.getByTestId('increment'));
      expect(screen.getByTestId('state')).toHaveTextContent('100');
    });
  });

  describe('switching modes', () => {
    it('switches from uncontrolled to controlled', () => {
      function Component({ value }: { value?: string }) {
        const [state] = useControlledState('default', value);
        return <div data-testid='state'>{state}</div>;
      }

      const { rerender } = render(<Component />);
      expect(screen.getByTestId('state')).toHaveTextContent('default');

      rerender(<Component value='controlled' />);
      expect(screen.getByTestId('state')).toHaveTextContent('controlled');
    });

    it('switches from controlled to uncontrolled', () => {
      function Component({ value }: { value?: string }) {
        const [state] = useControlledState('default', value);
        return <div data-testid='state'>{state}</div>;
      }

      const { rerender } = render(<Component value='controlled' />);
      expect(screen.getByTestId('state')).toHaveTextContent('controlled');

      // When switching to uncontrolled, it falls back to internal state (initialized with default)
      rerender(<Component />);
      expect(screen.getByTestId('state')).toHaveTextContent('default');
    });
  });

  describe('edge cases', () => {
    it('handles falsy values correctly', () => {
      function Component({ value }: { value?: number }) {
        const [state] = useControlledState(999, value);
        return <div data-testid='state'>{state}</div>;
      }

      const { rerender } = render(<Component value={0} />);
      expect(screen.getByTestId('state')).toHaveTextContent('0');

      rerender(<Component value={0} />);
      expect(screen.getByTestId('state')).toHaveTextContent('0');
    });

    it('handles empty string as controlled value', () => {
      function Component({ value }: { value?: string }) {
        const [state] = useControlledState('default', value);
        return <div data-testid='state'>{state || '(empty)'}</div>;
      }

      render(<Component value='' />);
      expect(screen.getByTestId('state')).toHaveTextContent('(empty)');
    });
  });
});
