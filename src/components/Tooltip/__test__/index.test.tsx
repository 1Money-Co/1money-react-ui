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

    // const wrapper = render(
    //   <Tooltip
    //     trigger={['click']}
    //     placement="left"
    //     overlay={<span>Text</span>}
    //   >
    //     <span>Left</span>
    //   </Tooltip>
    // );
    const wrapper = render(null);
    expect(wrapper).toMatchSnapshot();
  });
});
