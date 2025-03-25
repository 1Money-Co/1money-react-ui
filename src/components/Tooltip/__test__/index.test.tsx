import 'jsdom-global/register';
import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Tooltip } from '../index';

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

describe('Tooltip', () => {
  it('renders correctly', () => {

    const wrapper = render(
      <Tooltip
        openEvents={{
          click: true,
          mouseenter: false,
        }}
        closeEvents={{
          click: true,
          mouseleave: false,
        }}
        place="left"
      >
        <>
          Please provide your US EIN/TIN, Foreign Tax ID, or SSN (for sole proprietorships if based in the U.S.).
          <ul className='!tw-list-disc tw-pl-4'>
            <li>
              If you are a U.S.-based business, this will be a nine-digit number (e.g., 9XX-XX-XXXX).
            </li>
            <li>
              If you are a non-U.S. business, this will be a mix of characters and numbers specific to your jurisdiction.
            </li>
            <li>
              If you do not have a Tax ID, please indicate "NA."
            </li>
          </ul>
        </>
      </Tooltip>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
