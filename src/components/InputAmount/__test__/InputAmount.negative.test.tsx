/**
 * @jest-environment jsdom
 */
import React from 'react';
import '@testing-library/jest-dom';
import { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { InputAmount } from '../InputAmount';

describe('InputAmount negative behaviour', () => {
  it('allows typing decimals after turning an existing value negative (uncontrolled)', async () => {
    const user = userEvent.setup();
    render(<InputAmount negative />);
    const input = screen.getByRole('textbox');

    await user.type(input, '123');
    await user.keyboard('{Home}-');
    await user.type(input, '.45');

    expect(input).toHaveValue('-123.45');
  });

  it('allows typing decimals after turning an existing value negative (controlled)', async () => {
    const user = userEvent.setup();
    const Controlled = () => {
      const [val, setVal] = useState('');
      return <InputAmount negative value={val} onChange={(e) => setVal(e.target.value)} />;
    };
    render(<Controlled />);
    const input = screen.getByRole('textbox');

    await user.type(input, '123');
    await user.keyboard('{Home}-');
    await user.type(input, '.45');

    expect(input).toHaveValue('-123.45');
  });

  it('preserves minus sign while composing negative fractions (uncontrolled)', async () => {
    const user = userEvent.setup();
    render(<InputAmount negative />);
    const input = screen.getByRole('textbox');

    await user.type(input, '-0.45');

    expect(input).toHaveValue('-0.45');
  });

  it('preserves minus sign while composing negative fractions (controlled)', async () => {
    const user = userEvent.setup();
    const Controlled = () => {
      const [val, setVal] = useState('');
      return <InputAmount negative value={val} onChange={(_, val) => setVal(val)} />;
    };
    render(<Controlled />);
    const input = screen.getByRole('textbox');

    await user.type(input, '-0.65');

    expect(input).toHaveValue('-0.65');
  });
});
