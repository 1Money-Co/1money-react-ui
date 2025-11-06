import 'jsdom-global/register';
import * as React from 'react';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import clipboard from '../../../utils/clipboard';
import { Copy } from '../index';

jest.mock('@/utils/clipboard', () => {
  const mockedClipboard = jest.fn();
  return {
    __esModule: true,
    default: mockedClipboard,
    clipboard: mockedClipboard,
  };
});

const originalConsoleError = console.error;
console.error = (message, ...optionalParams) => {
  if (
    message.includes('Could not parse CSS stylesheet') ||
    message.includes('findDOMNode is deprecated and will be removed')
  ) {
    return;
  }
  originalConsoleError(message, ...optionalParams);
};

afterAll(() => {
  console.error = originalConsoleError;
});

afterEach(() => {
  (clipboard as jest.MockedFunction<typeof clipboard>).mockReset();
});

describe('Copy', () => {
  it('renders correctly', () => {
    const { container } = render(<Copy value='foo-bar' />);
    const wrapper = container.querySelector('i.om-react-ui-copy');
    expect(wrapper).toBeInTheDocument();
    expect(wrapper?.querySelector('svg')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  it('simulate events', async () => {
    const clipboardMock = clipboard as jest.MockedFunction<typeof clipboard>;
    const onSuccess = jest.fn();
    const onError = jest.fn();
    clipboardMock.mockImplementation((_val, cb) => cb?.(true));

    const { container } = render(
      <Copy value='transfer-123' onSuccess={onSuccess} onError={onError} />
    );

    const icon = container.querySelector('i.om-react-ui-copy') as HTMLElement;
    expect(icon).toBeInTheDocument();

    const user = userEvent.setup();
    await user.click(icon);

    expect(clipboardMock).toHaveBeenCalledWith('transfer-123', expect.any(Function));
    expect(onSuccess).toHaveBeenCalledWith('transfer-123');
    expect(onError).not.toHaveBeenCalled();
  });

  it('invokes onError when clipboard fails', async () => {
    const clipboardMock = clipboard as jest.MockedFunction<typeof clipboard>;
    clipboardMock.mockImplementation((_val, cb) => cb?.(false));
    const onError = jest.fn();

    const { container } = render(<Copy value='retry-me' onError={onError} />);
    const icon = container.querySelector('i.om-react-ui-copy') as HTMLElement;
    expect(icon).toBeInTheDocument();

    const user = userEvent.setup();
    await user.click(icon);

    await waitFor(() => expect(onError).toHaveBeenCalledWith('retry-me'));
    expect(icon.className).not.toContain('om-react-ui-copy-success');
  });
});
