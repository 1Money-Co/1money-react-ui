import 'jsdom-global/register';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Notification } from '../index';

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

describe('Notification', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <Notification />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('renders banner content and handles action/close/root click', async () => {
    const onAction = jest.fn();
    const onClose = jest.fn();
    const onLink = jest.fn();
    const onRoot = jest.fn();
    render(
      <Notification
        title='Title'
        description='Body text'
        link={{ label: 'Link', onClick: onLink }}
        action={<button type='button' onClick={onAction}>Label</button>}
        closable
        onClose={onClose}
        onClick={onRoot}
      />
    );
    const user = userEvent.setup();
    await user.click(screen.getByText('Label'));
    await user.click(screen.getByText('Link'));
    await user.click(screen.getByText('Body text'));
    await user.click(screen.getByLabelText('Close notification'));
    expect(onAction).toHaveBeenCalled();
    expect(onLink).toHaveBeenCalled();
    expect(onClose).toHaveBeenCalled();
    expect(onRoot).toHaveBeenCalled();
  });
});
