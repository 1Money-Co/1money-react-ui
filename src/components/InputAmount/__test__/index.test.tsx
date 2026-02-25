import 'jsdom-global/register';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { InputAmount } from '../index';

const originalConsoleError = console.error;
console.error = (message, ...optionalParams) => {
      const errorMessage = typeof message === 'string' ? message : String(message);
  if (
    errorMessage.includes('Could not parse CSS stylesheet') ||
    errorMessage.includes('findDOMNode is deprecated and will be removed')
  ) {
    return;
  }
  originalConsoleError(message, ...optionalParams);
};

describe('InputAmount', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <InputAmount
        prefix='$'
        currency='USD'
        invalid={false}
        suffix={<span style={{ padding: '12px', borderRadius: '12px', backgroundColor: '#F0F0F0', color: '#131313', fontSize: '12px', cursor: 'pointer' }}>Max</span>}
        message={<span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
          Amount exceeds maximum. The maximum purchase amount is $10,000 USD
        </span>
        }
        footnote={<span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', cursor: 'pointer', color: '#073387' }}>
          0 USDT
        </span>
        }
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('simulate events', async () => {
    const onClick = jest.fn();
    render(
      <InputAmount data-testid='id-input-amount' onClick={onClick} />
    );
    const user = userEvent.setup();
    await user.click(screen.getByTestId('id-input-amount'))
    expect(onClick).toHaveBeenCalled();
  });

  it('handles fullwidth decimal point input', async () => {
    const user = userEvent.setup();
    render(<InputAmount />);
    const input = screen.getByRole('textbox');

    await user.type(input, '12。34');
    expect(input).toHaveValue('12.34');

    await user.clear(input);
    await user.type(input, '56．');
    expect(input).toHaveValue('56.');
  });

  it('normalizes fullwidth comma separators', async () => {
    const user = userEvent.setup();
    render(<InputAmount />);
    const input = screen.getByRole('textbox');

    await user.type(input, '1，234。56');
    expect(input).toHaveValue('1,234.56');
  });
});
